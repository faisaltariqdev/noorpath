#!/usr/bin/env python3
"""Full Search Console export using a read-only service account.

Key: .credentials/gsc-service-account.json (gitignored). Add the service
account's email in Search Console as a Restricted (read-only) user.

Writes CSVs to seo-reports/gsc-<YYYY-MM>/ for two periods:
  P1 = latest 90 days of final data, P0 = the 90 days before.
Uses curl and openssl only (no pip packages). No secrets are printed.

Usage: python3 scripts/gsc-export.py
"""
import base64
import csv
import datetime
import json
import os
import pathlib
import subprocess
import sys
import tempfile
import time
import urllib.parse

ROOT = pathlib.Path(__file__).resolve().parent.parent
KEY_FILE = ROOT / ".credentials" / "gsc-service-account.json"
SCOPE = "https://www.googleapis.com/auth/webmasters.readonly"
PREFERRED_SITES = ["sc-domain:noorpath.online", "https://www.noorpath.online/"]
ROW_LIMIT = 25000

COMMERCIAL = (
    "(?i)(class|classes|teacher|tutor|tuition|course|academy|lesson|online quran|learn quran|"
    "quran online|hifz|hifdh|tajweed|qaida|qaidah|iqra|near me|fees|price|cost|trial|madrasa|madrassa)"
)
BRAND = "(?i)noor ?path"
LOCATION_PAGES = "/locations/|/online-quran-classes/"
KEY_PAGES = (
    "/locations/|/online-quran-classes|/noorani-qaida|/female-quran-teacher-online|"
    "/hifz-quran-online|/pricing|/free-quran-classes-online"
)
SERVICE_PAGES = [
    "/", "/online-quran-classes", "/online-quran-classes-for-kids", "/online-quran-classes-for-adults",
    "/one-on-one-quran-classes", "/female-quran-teacher-online", "/quran-classes-for-sisters",
    "/hifz-quran-online", "/courses/hifz-program-online", "/free-quran-classes-online", "/pricing",
    "/quran-classes-near-me", "/learn-quran-online", "/online-quran-academy", "/quran-teacher-online",
    "/online-quran-for-beginners", "/noorani-qaida", "/courses/noorani-qaida-online",
    "/blog/online-quran-classes-cost-pricing-guide",
]


def b64url(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode()


def curl_json(url, data=None, headers=None, method="POST"):
    cmd = ["curl", "-s", "-X", method, url]
    for k, v in (headers or {}).items():
        cmd += ["-H", f"{k}: {v}"]
    if data is not None:
        cmd += ["--data-binary", data]
    out = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
    try:
        return json.loads(out.stdout)
    except json.JSONDecodeError:
        return {"error": {"message": out.stdout[:200] or out.stderr[:200]}}


def access_token(key: dict) -> str:
    now = int(time.time())
    header = b64url(json.dumps({"alg": "RS256", "typ": "JWT"}).encode())
    claims = b64url(json.dumps({
        "iss": key["client_email"], "scope": SCOPE, "aud": key["token_uri"],
        "iat": now, "exp": now + 3600,
    }).encode())
    signing_input = f"{header}.{claims}".encode()
    # openssl needs the key as a file; keep it private and delete it at once.
    fd, pem_path = tempfile.mkstemp(suffix=".pem")
    try:
        os.chmod(pem_path, 0o600)
        with os.fdopen(fd, "w") as fh:
            fh.write(key["private_key"])
        sig = subprocess.run(
            ["openssl", "dgst", "-sha256", "-sign", pem_path],
            input=signing_input, capture_output=True, timeout=30, check=True,
        ).stdout
    finally:
        os.remove(pem_path)
    jwt = f"{header}.{claims}.{b64url(sig)}"
    resp = curl_json(
        key["token_uri"],
        data=urllib.parse.urlencode({"grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer", "assertion": jwt}),
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    if "access_token" not in resp:
        print("TOKEN_FAILED", resp.get("error"), resp.get("error_description"))
        sys.exit(1)
    return resp["access_token"]


def pick_site(token: str) -> str:
    resp = curl_json("https://searchconsole.googleapis.com/webmasters/v3/sites",
                     headers={"Authorization": f"Bearer {token}"}, method="GET")
    sites = {s["siteUrl"]: s.get("permissionLevel") for s in resp.get("siteEntry", [])}
    for site in PREFERRED_SITES:
        if site in sites:
            print("SITE", site, sites[site])
            return site
    print("NO_ACCESS: add the service account email as a user in Search Console. Visible sites:", list(sites))
    sys.exit(1)


def query(token, site, start, end, dimensions, filters=None):
    url = ("https://searchconsole.googleapis.com/webmasters/v3/sites/"
           f"{urllib.parse.quote(site, safe='')}/searchAnalytics/query")
    rows, start_row = [], 0
    while True:
        body = {"startDate": start, "endDate": end, "dimensions": dimensions, "type": "web",
                "dataState": "final", "rowLimit": ROW_LIMIT, "startRow": start_row}
        if filters:
            body["dimensionFilterGroups"] = [{"groupType": "and", "filters": filters}]
        resp = curl_json(url, data=json.dumps(body),
                         headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"})
        if "error" in resp:
            print("API_ERROR", dimensions, json.dumps(resp["error"])[:300])
            return None
        batch = resp.get("rows", [])
        rows += batch
        if len(batch) < ROW_LIMIT:
            return rows
        start_row += ROW_LIMIT


def regex(dimension, expression):
    return {"dimension": dimension, "operator": "includingRegex", "expression": expression}


def write_csv(path, dimensions, rows):
    with open(path, "w", newline="") as fh:
        w = csv.writer(fh)
        w.writerow(dimensions + ["clicks", "impressions", "ctr", "position"])
        for r in rows:
            w.writerow(r["keys"] + [r["clicks"], r["impressions"], round(r["ctr"], 4), round(r["position"], 1)])


def main():
    if not KEY_FILE.exists():
        print(f"MISSING_KEY: save the service account JSON at {KEY_FILE.relative_to(ROOT)}")
        sys.exit(1)
    key = json.loads(KEY_FILE.read_text())
    if not isinstance(key, dict) or key.get("type") != "service_account":
        print("WRONG_KEY_FILE: this is not a service account key (expected \"type\": \"service_account\").")
        sys.exit(1)
    token = access_token(key)
    site = pick_site(token)
    host = "https://www.noorpath.online"
    service_regex = "^(" + "|".join(host + urllib.parse.quote(p) + "$" for p in SERVICE_PAGES).replace(".", r"\.") + ")"

    end = datetime.date.today() - datetime.timedelta(days=3)
    p1 = ((end - datetime.timedelta(days=89)).isoformat(), end.isoformat())
    p0_end = end - datetime.timedelta(days=90)
    p0 = ((p0_end - datetime.timedelta(days=89)).isoformat(), p0_end.isoformat())
    trend = (p0[0], p1[1])

    out = ROOT / "seo-reports" / f"gsc-{datetime.date.today():%Y-%m}"
    out.mkdir(parents=True, exist_ok=True)

    exports = [
        ("q_page_commercial_P1", p1, ["query", "page"], [regex("query", COMMERCIAL)]),
        ("q_page_commercial_P0", p0, ["query", "page"], [regex("query", COMMERCIAL)]),
        ("q_page_location_pages_P1", p1, ["query", "page"], [regex("page", LOCATION_PAGES)]),
        ("q_page_service_pages_P1", p1, ["query", "page"], [regex("page", service_regex)]),
        ("q_country_commercial_P1", p1, ["query", "country"], [regex("query", COMMERCIAL)]),
        ("page_country_P1", p1, ["page", "country"], [regex("page", KEY_PAGES)]),
        ("page_device_P1", p1, ["page", "device"], [regex("page", KEY_PAGES)]),
        ("brand_P1", p1, ["query", "page"], [regex("query", BRAND)]),
        ("brand_P0", p0, ["query", "page"], [regex("query", BRAND)]),
        ("pages_P1", p1, ["page"], None),
        ("pages_P0", p0, ["page"], None),
        ("queries_P1", p1, ["query"], None),
        ("weekly_commercial_trend", trend, ["date"], [regex("query", COMMERCIAL)]),
        ("country_totals_P1", p1, ["country"], None),
    ]
    summary = {"site": site, "P1": p1, "P0": p0, "files": {}}
    for name, (start, stop), dims, filters in exports:
        rows = query(token, site, start, stop, dims, filters)
        if rows is None:
            summary["files"][name] = "error"
            continue
        write_csv(out / f"{name}.csv", dims, rows)
        summary["files"][name] = len(rows)
        print(f"{name}: {len(rows)} rows")
    (out / "summary.json").write_text(json.dumps(summary, indent=1))
    print("P1", p1, "P0", p0, "->", out.relative_to(ROOT))


if __name__ == "__main__":
    main()
