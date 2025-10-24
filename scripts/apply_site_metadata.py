#!/usr/bin/env python3
"""
Normalize meta tags, Open Graph/Twitter data, and JSON-LD structured data
across Maru static pages using configuration informed by the Ashley HTML Kit.
"""

import json
from pathlib import Path
from typing import Dict, List

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent

BASE_URL = "https://maruonline.com"
DEFAULT_IMAGE = f"{BASE_URL}/img/optimized/new_maru_logo_neutral-960.png"
TWITTER_HANDLE = "@maru_africa"

PAGES: Dict[str, Dict] = {
    "index.html": {
        "canonical": f"{BASE_URL}/",
        "description": "Maru helps African businesses unlock AI-driven marketing, automation, and growth strategies tailored to local markets.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "services.html": {
        "canonical": f"{BASE_URL}/services.html",
        "description": "Discover Maru’s AI strategy, automation, and data services that turn marketing into a repeatable growth engine.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "knowledge.html": {
        "canonical": f"{BASE_URL}/knowledge.html",
        "description": "Explore Maru’s knowledge hub for insights on AI adoption, marketing innovation, and operational automation in Africa.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "contact.html": {
        "canonical": f"{BASE_URL}/contact.html",
        "description": "Talk to Maru’s team about custom AI solutions, strategy workshops, and automation programmes for your organisation.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "request-demo.html": {
        "canonical": f"{BASE_URL}/request-demo.html",
        "description": "Request a guided demo of Maru’s AI solutions and see how we streamline customer journeys and marketing execution.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "smartguest-ai.html": {
        "canonical": f"{BASE_URL}/smartguest-ai.html",
        "description": "SmartGuest AI equips hospitality teams with automated guest engagement, personalised upsells, and real-time insights.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "bizinsight-ai.html": {
        "canonical": f"{BASE_URL}/bizinsight-ai.html",
        "description": "BizInsight AI delivers automated reporting and forecasting so African SMEs can act on real-time customer data.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "custom-ai-solutions.html": {
        "canonical": f"{BASE_URL}/custom-ai-solutions.html",
        "description": "Partner with Maru to design bespoke AI solutions that streamline processes and unlock new customer experiences.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "ready-to-deploy-solutions.html": {
        "canonical": f"{BASE_URL}/ready-to-deploy-solutions.html",
        "description": "Deploy Maru’s pre-built AI accelerators to operationalise automation and insights without long integration cycles.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "ai-mastery-workshops.html": {
        "canonical": f"{BASE_URL}/ai-mastery-workshops.html",
        "description": "Upskill your teams with Maru’s AI Mastery Workshops covering strategy, change management, and responsible adoption.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "careers.html": {
        "canonical": f"{BASE_URL}/careers.html",
        "description": "Join Maru’s distributed team of strategists, technologists, and creatives shaping Africa’s AI-powered growth stories.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "privacy-policy.html": {
        "canonical": f"{BASE_URL}/privacy-policy.html",
        "description": "Review Maru’s privacy policy outlining how we collect, use, and protect personal information in line with POPIA and GDPR.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "terms-conditions.html": {
        "canonical": f"{BASE_URL}/terms-conditions.html",
        "description": "Understand the terms and conditions that govern access to Maru’s website, services, and digital experiences.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "cookie-policy.html": {
        "canonical": f"{BASE_URL}/cookie-policy.html",
        "description": "Learn how Maru uses cookies and similar technologies, and manage your consent preferences at any time.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
    },
    "generative-ai-sme-productivity-south-africa.html": {
        "canonical": f"{BASE_URL}/generative-ai-sme-productivity-south-africa.html",
        "description": "Generative AI is boosting SME productivity in South Africa—discover use cases, impact, and how leaders are responding.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "article",
        "article": {
            "headline": "Generative AI Is Boosting SME Productivity in South Africa",
            "datePublished": "2025-01-03",
            "dateModified": "2025-01-03",
        },
    },
    "ai-business-transformation-south-africa.html": {
        "canonical": f"{BASE_URL}/ai-business-transformation-south-africa.html",
        "description": "See how South African organisations are using AI to transform operations, customer experience, and revenue models.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "article",
        "article": {
            "headline": "AI Business Transformation in South Africa",
            "datePublished": "2025-01-03",
            "dateModified": "2025-01-03",
        },
    },
    "ai-regulation-human-security-south-africa.html": {
        "canonical": f"{BASE_URL}/ai-regulation-human-security-south-africa.html",
        "description": "Explore the evolving AI regulatory landscape in South Africa and how organisations can balance innovation with human security.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "article",
        "article": {
            "headline": "AI Regulation and Human Security in South Africa",
            "datePublished": "2025-01-03",
            "dateModified": "2025-01-03",
        },
    },
    "ai-adoption-south-african-smbs.html": {
        "canonical": f"{BASE_URL}/ai-adoption-south-african-smbs.html",
        "description": "AI adoption is accelerating among South Africa’s SMBs—learn how leaders are prioritising skills, tooling, and governance.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "article",
        "article": {
            "headline": "AI Adoption Surges Among South Africa's Small and Medium Businesses",
            "datePublished": "2025-01-03",
            "dateModified": "2025-01-03",
        },
    },
    "ai-skills-essential-sap-survey.html": {
        "canonical": f"{BASE_URL}/ai-skills-essential-sap-survey.html",
        "description": "SAP research shows AI literacy is now essential—discover the skills gap and how organisations can close it.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "article",
        "article": {
            "headline": "AI Skills Essential According to SAP Survey",
            "datePublished": "2025-01-03",
            "dateModified": "2025-01-03",
        },
    },
    "404.html": {
        "canonical": f"{BASE_URL}/404.html",
        "description": "The page you’re looking for can’t be found—head back to Maru’s homepage or explore our latest resources.",
        "og_image": DEFAULT_IMAGE,
        "og_type": "website",
        "robots": "noindex, nofollow",
    },
}

SOCIAL_LINKS: List[str] = [
    "https://www.linkedin.com/company/maruonline",
    "https://x.com/maru_africa",
    "https://instagram.com/maru_automations",
    "https://facebook.com/maruonlin",
]


def remove_existing_meta(head: BeautifulSoup) -> None:
    selectors = [
        ("meta", {"name": "description"}),
        ("meta", {"name": "robots"}),
        ("link", {"rel": "canonical"}),
        ("meta", {"property": True}),
        ("meta", {"name": "twitter:card"}),
        ("meta", {"name": "twitter:title"}),
        ("meta", {"name": "twitter:description"}),
        ("meta", {"name": "twitter:image"}),
        ("meta", {"name": "twitter:url"}),
        ("meta", {"name": "twitter:site"}),
    ]
    for name, attrs in selectors:
        for tag in head.find_all(name, attrs=attrs):
            tag.decompose()

    for script in head.find_all("script", {"type": "application/ld+json"}):
        script.decompose()


def add_meta(soup: BeautifulSoup, head: BeautifulSoup, config: Dict) -> None:
    description = config["description"]
    canonical = config["canonical"]
    og_type = config.get("og_type", "website")
    og_image = config.get("og_image", DEFAULT_IMAGE)
    robots = config.get("robots")

    def insert(tag):
        head.append(soup.new_string("\n"))
        head.append(tag)

    meta_desc = soup.new_tag("meta")
    meta_desc.attrs["name"] = "description"
    meta_desc.attrs["content"] = description
    insert(meta_desc)

    canonical_tag = soup.new_tag("link")
    canonical_tag.attrs["rel"] = "canonical"
    canonical_tag.attrs["href"] = canonical
    insert(canonical_tag)

    if robots:
        robots_tag = soup.new_tag("meta")
        robots_tag.attrs["name"] = "robots"
        robots_tag.attrs["content"] = robots
        insert(robots_tag)

    og_data = {
        "og:title": head.title.string.strip() if head.title else "",
        "og:description": description,
        "og:url": canonical,
        "og:type": og_type,
        "og:site_name": "Maru",
        "og:image": og_image,
    }
    for prop, value in og_data.items():
        tag = soup.new_tag("meta")
        tag.attrs["property"] = prop
        tag.attrs["content"] = value
        insert(tag)

    twitter_data = {
        "twitter:card": "summary_large_image",
        "twitter:title": og_data["og:title"],
        "twitter:description": description,
        "twitter:image": og_image,
        "twitter:url": canonical,
        "twitter:site": TWITTER_HANDLE,
    }
    for name, value in twitter_data.items():
        tag = soup.new_tag("meta")
        tag.attrs["name"] = name
        tag.attrs["content"] = value
        insert(tag)
    head.append(soup.new_string("\n"))


def add_structured_data(soup: BeautifulSoup, head: BeautifulSoup, config: Dict) -> None:
    org = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Maru",
        "url": f"{BASE_URL}/",
        "logo": DEFAULT_IMAGE,
        "sameAs": SOCIAL_LINKS,
    }

    website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Maru",
        "url": f"{BASE_URL}/",
    }

    scripts = [org, website]

    if "article" in config:
        article_cfg = config["article"]
        article = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article_cfg["headline"],
            "description": config["description"],
            "author": {"@type": "Organization", "name": "Maru"},
            "publisher": {
                "@type": "Organization",
                "name": "Maru",
                "logo": {"@type": "ImageObject", "url": DEFAULT_IMAGE},
            },
            "image": DEFAULT_IMAGE,
            "url": config["canonical"],
            "datePublished": article_cfg["datePublished"],
            "dateModified": article_cfg["dateModified"],
        }
        scripts.append(article)

    for data in scripts:
        script_tag = soup.new_tag("script", type="application/ld+json")
        script_tag.string = json.dumps(data, indent=2)
        head.append(soup.new_string("\n"))
        head.append(script_tag)
    head.append(soup.new_string("\n"))


def process_file(path: Path, config: Dict) -> None:
    html = path.read_text(encoding="utf-8")
    soup = BeautifulSoup(html, "html.parser")
    head = soup.head
    if not head:
        raise RuntimeError(f"No <head> found in {path}")

    remove_existing_meta(head)
    add_meta(soup, head, config)
    add_structured_data(soup, head, config)

    path.write_text(str(soup), encoding="utf-8")


def main() -> None:
    for relative, config in PAGES.items():
        path = ROOT / relative
        if not path.exists():
            print(f"Skipping {relative} (not found)")
            continue
        process_file(path, config)
        print(f"Updated metadata for {relative}")


if __name__ == "__main__":
    main()
