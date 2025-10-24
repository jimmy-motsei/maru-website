#!/usr/bin/env python3
"""
Replace footer social icon markup with an accessible variant matching Ashley kit best practices.
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HTML_DIR = ROOT

SOCIAL_BLOCK = """<ul class="mil-social-icons mil-up">
<li>
<a class="social-icon" href="https://www.linkedin.com/company/maruonline" target="_blank" rel="noopener" aria-label="LinkedIn">
<i class="fab fa-linkedin-in" aria-hidden="true"></i>
<span class="mil-sr-only">LinkedIn</span>
</a>
</li>
<li>
<a class="social-icon" href="https://x.com/maru_africa" target="_blank" rel="noopener" aria-label="X (Twitter)">
<i class="fab fa-twitter" aria-hidden="true"></i>
<span class="mil-sr-only">X (Twitter)</span>
</a>
</li>
<li>
<a class="social-icon" href="https://facebook.com/maruonlin" target="_blank" rel="noopener" aria-label="Facebook">
<i class="fab fa-facebook-f" aria-hidden="true"></i>
<span class="mil-sr-only">Facebook</span>
</a>
</li>
<li>
<a class="social-icon" href="https://instagram.com/maru_automations" target="_blank" rel="noopener" aria-label="Instagram">
<i class="fab fa-instagram" aria-hidden="true"></i>
<span class="mil-sr-only">Instagram</span>
</a>
</li>
</ul>"""

PATTERN = re.compile(r'<ul class="mil-social-icons mil-up">.*?</ul>', re.DOTALL)


def update_file(path: Path) -> None:
    original = path.read_text(encoding="utf-8")
    updated, count = PATTERN.subn(SOCIAL_BLOCK, original)
    if count:
        path.write_text(updated, encoding="utf-8")
        print(f"Updated social icons in {path.name} ({count} replacements)")


def main() -> None:
    for path in HTML_DIR.glob("*.html"):
        update_file(path)


if __name__ == "__main__":
    main()
