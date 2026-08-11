#!/usr/bin/env bash
# Optional FREE local Crawl4AI setup (Python). Not an MCP server.
# Docs: https://github.com/unclecode/crawl4ai
set -euo pipefail
python3 -m pip install --user -U pip
python3 -m pip install --user crawl4ai
python3 -m crawl4ai.install 2>/dev/null || true
echo "Crawl4AI installed for $(python3 --version)."
echo "Test: python3 -c 'import crawl4ai; print(crawl4ai.__version__ if hasattr(crawl4ai,\"__version__\") else \"ok\")'"
