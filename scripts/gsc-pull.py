#!/usr/bin/env python3
"""Pull GSC search analytics (queries + pages) using stored OAuth credentials.

Uses curl for HTTPS (system certs). Saves last-90-day data to docs/gsc-export/.
No secrets are printed.
"""
import json
import subprocess
import datetime
import pathlib
import sys
import urllib.parse

ROOT = pathlib.Path(__file__).resolve().parent.parent
CRED = ROOT / ".credentials"
OUT = ROOT / "docs" / "gsc-export"
OUT.mkdir(parents=True, exist_ok=True)

client = json.loads((CRED / "gsc-oauth-client.json").read_text())
token = json.loads((CRED / "gsc-token.json").read_text())

conf = client.get("installed") or client.get("web") or client
client_id = conf.get("client_id") or token.get("client_id")
client_secret = conf.get("client_secret") or token.get("client_secret")
refresh_token = token.get("refresh_token")

if not (client_id and client_secret and refresh_token):
    print("MISSING_FIELDS", bool(client_id), bool(client_secret), bool(refresh_token))
    sys.exit(1)


def curl(url, data=None, headers=None, form=False):
    cmd = ["curl", "-s", "-X", "POST", url]
    for k, v in (headers or {}).items():
        cmd += ["-H", f"{k}: {v}"]
    if data is not None:
        cmd += ["--data", data]
    out = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
    return json.loads(out.stdout)


tok_resp = curl(
    "https://oauth2.googleapis.com/token",
    data=urllib.parse.urlencode({
        "client_id": client_id,
        "client_secret": client_secret,
        "refresh_token": refresh_token,
        "grant_type": "refresh_token",
    }),
    headers={"Content-Type": "application/x-www-form-urlencoded"},
)
access_token = tok_resp.get("access_token")
if not access_token:
    print("TOKEN_REFRESH_FAILED", {k: v for k, v in tok_resp.items() if k != "access_token"})
    sys.exit(1)

SITE = "sc-domain:noorpath.online"
API = f"https://searchconsole.googleapis.com/webmasters/v3/sites/{urllib.parse.quote(SITE, safe='')}/searchAnalytics/query"

end = datetime.date.today() - datetime.timedelta(days=2)
start = end - datetime.timedelta(days=90)


def pull(dimensions, row_limit=1000):
    body = json.dumps({
        "startDate": start.isoformat(),
        "endDate": end.isoformat(),
        "dimensions": dimensions,
        "rowLimit": row_limit,
    })
    resp = curl(API, data=body, headers={
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
    })
    if "error" in resp:
        print("API_ERROR", dimensions, json.dumps(resp["error"])[:300])
        return None
    return resp.get("rows", [])


for dims, name in [(["query"], "queries"), (["page"], "pages"), (["query", "page"], "query_page")]:
    rows = pull(dims)
    if rows is None:
        continue
    (OUT / f"{name}.json").write_text(json.dumps(rows, indent=1))
    print(f"{name}: {len(rows)} rows saved")

print("DATE_RANGE", start.isoformat(), "->", end.isoformat())
