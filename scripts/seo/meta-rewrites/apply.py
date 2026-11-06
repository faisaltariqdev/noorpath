"""Apply title/description rewrites: each entry replaces one exact old string with a new one.
Usage: python3 scripts/seo/meta-rewrites/apply.py <batch.json>  (run from the project root)"""
import json, os, sys

batch = json.load(open(sys.argv[1], encoding="utf-8"))
src = {}
for root, _, files in os.walk("src"):
    for f in files:
        if f.endswith((".ts", ".tsx")):
            p = os.path.join(root, f)
            src[p] = open(p, encoding="utf-8").read()

errors, done = [], 0
for e in batch:
    kind, old, new = e["kind"], e["old"], e["new"]
    limit = 70 if kind == "title" else 160
    if len(new) > limit:
        errors.append(f"{kind} too long ({len(new)}): {new}")
        continue
    hits = [(p, q) for p in src for q in ('"%s"' % old, "'%s'" % old.replace("'", "\\'"), "`%s`" % old) if q in src[p]]
    if len(hits) != 1 or src[hits[0][0]].count(hits[0][1]) != 1:
        errors.append(f"{kind} not uniquely found ({len(hits)}): {old[:70]}")
        continue
    p, q = hits[0]
    quote = q[0]
    newq = quote + (new.replace("'", "\\'") if quote == "'" else new.replace('"', '\\"') if quote == '"' else new) + quote
    src[p] = src[p].replace(q, newq)
    done += 1

for p, t in src.items():
    if open(p, encoding="utf-8").read() != t:
        open(p, "w", encoding="utf-8").write(t)
print(f"applied {done}/{len(batch)}")
for e in errors:
    print("  !", e)
