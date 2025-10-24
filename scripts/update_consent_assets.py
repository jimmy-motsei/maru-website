#!/usr/bin/env python3
"""
Remove legacy inline Google Analytics / HubSpot embeds and inject the shared
consent manager script across HTML pages.
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HTML_DIR = ROOT
CONSENT_SNIPPET = '<script defer src="js/consent-manager.js"></script>'

GA_PATTERN = re.compile(
    r"<!-- Google Analytics -->\s*<script[^>]+googletagmanager[^>]+></script>\s*<script>.*?</script>\s*",
    re.DOTALL,
)
HUBSPOT_PATTERN = re.compile(
    r"<!-- HubSpot Integration -->\s*<script[^>]+hs-scripts[^>]+></script>\s*",
    re.DOTALL,
)
INDEX_CONSENT_PATTERN = re.compile(
    r"<!-- Google Analytics - Consent Gated -->.*?<!-- HubSpot Integration - Consent Gated -->\s*<script>.*?window\.loadHubSpot.*?</script>\s*<!-- Custom styles to override Swiper defaults -->",
    re.DOTALL,
)


def process_html(path: Path) -> None:
    original = path.read_text(encoding="utf-8")
    updated = original

    updated = GA_PATTERN.sub("", updated)
    updated = HUBSPOT_PATTERN.sub("", updated)

    if path.name == "index.html":
        updated = INDEX_CONSENT_PATTERN.sub("<!-- Custom styles to override Swiper defaults -->", updated)

    if CONSENT_SNIPPET not in updated:
        updated = updated.replace(
            "<!-- End Cloudflare Web Analytics -->",
            "<!-- End Cloudflare Web Analytics -->\n" + CONSENT_SNIPPET,
        )

    if updated != original:
        path.write_text(updated, encoding="utf-8")
        print(f"Updated consent scripts in {path.name}")
    else:
        print(f"No consent changes required for {path.name}")


def main() -> None:
    for path in HTML_DIR.glob("*.html"):
        process_html(path)


if __name__ == "__main__":
    main()
