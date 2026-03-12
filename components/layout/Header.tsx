"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

type MenuItem = {
  name: string;
  href: string;
};

type MenuGroup = {
  id: string;
  label: string;
  items: MenuItem[];
};

const menuGroups: MenuGroup[] = [
  {
    id: "homepage",
    label: "Homepage",
    items: [
      { name: "Landing Page", href: "/" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    id: "services",
    label: "Services",
    items: [
      { name: "Services List", href: "/services" },
      { name: "AI Revenue Diagnostic", href: "/services/ai-revenue-diagnostic" },
      { name: "Custom AI Solution Build", href: "/services/custom-ai-solution-build" },
      {
        name: "AI Training & Capability Building",
        href: "/services/ai-training-capability-building",
      },
      {
        name: "Ongoing AI Support & Optimization",
        href: "/services/ongoing-ai-support-optimization",
      },
    ],
  },
  {
    id: "assessments",
    label: "AI Assessments",
    items: [
      { name: "AI Implementation Assessment", href: "/ai-implementation-assessment" },
      { name: "Website Lead Grader", href: "/assessments/lead-score" },
      { name: "Pipeline Leak Detector", href: "/assessments/pipeline-leak" },
      { name: "Tech Stack Auditor", href: "/assessments/tech-audit" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    items: [
      { name: "Resources", href: "/resources" },
      { name: "POPIA AI Checklist", href: "/resources/popia-ai-checklist" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    id: "other-pages",
    label: "Other Pages",
    items: [
      { name: "Book a Consultation", href: "/booking" },
      { name: "Careers", href: "/careers" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms and Conditions", href: "/terms-conditions" },
    ],
  },
];

const toolLinks: MenuItem[] = [
  { name: "AI Implementation Assessment", href: "/ai-implementation-assessment" },
  { name: "Website Lead Grader", href: "/assessments/lead-score" },
  { name: "Pipeline Leak Detector", href: "/assessments/pipeline-leak" },
  { name: "Tech Stack Auditor", href: "/assessments/tech-audit" },
];

const serviceLinks: MenuItem[] = [
  { name: "AI Revenue Diagnostic", href: "/services/ai-revenue-diagnostic" },
  { name: "Custom AI Solution Build", href: "/services/custom-ai-solution-build" },
  {
    name: "AI Training & Capability Building",
    href: "/services/ai-training-capability-building",
  },
  {
    name: "Ongoing AI Support & Optimization",
    href: "/services/ongoing-ai-support-optimization",
  },
];

function pathMatches(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function getDefaultGroup(pathname: string) {
  const matchingGroup = menuGroups.find((group) =>
    group.items.some((item) => pathMatches(pathname, item.href)),
  );

  return matchingGroup?.id ?? "homepage";
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightSurface, setIsLightSurface] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const defaultGroup = useMemo(() => getDefaultGroup(pathname), [pathname]);
  const [openGroupId, setOpenGroupId] = useState(defaultGroup);

  useEffect(() => {
    setOpenGroupId(defaultGroup);
  }, [defaultGroup]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      return;
    }

    const parseBackgroundColor = (value: string) => {
      const match = value
        .replace(/\s+/g, "")
        .match(/^rgba?\((\d+),(\d+),(\d+)(?:,([\d.]+))?\)$/i);
      if (!match) return null;

      const alpha = match[4] !== undefined ? Number.parseFloat(match[4]) : 1;
      if (Number.isNaN(alpha) || alpha <= 0.02) return null;

      return {
        r: Number.parseInt(match[1], 10),
        g: Number.parseInt(match[2], 10),
        b: Number.parseInt(match[3], 10),
      };
    };

    const getEffectiveColor = (x: number, y: number) => {
      let current = document.elementFromPoint(x, y) as HTMLElement | null;

      while (current && current !== document.body) {
        const backgroundColor = parseBackgroundColor(
          window.getComputedStyle(current).backgroundColor,
        );
        if (backgroundColor) return backgroundColor;
        current = current.parentElement;
      }

      const bodyColor = parseBackgroundColor(window.getComputedStyle(document.body).backgroundColor);
      return bodyColor ?? { r: 0, g: 0, b: 0 };
    };

    const getLuminance = ({ r, g, b }: { r: number; g: number; b: number }) => {
      const channel = (value: number) => {
        const normalized = value / 255;
        return normalized <= 0.03928
          ? normalized / 12.92
          : ((normalized + 0.055) / 1.055) ** 2.4;
      };
      return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
    };

    let rafId = 0;
    const updateSurfaceContrast = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        const y = Math.min(36, window.innerHeight - 1);
        const leftColor = getEffectiveColor(40, y);
        const rightColor = getEffectiveColor(Math.max(window.innerWidth - 40, 1), y);
        const avgColor = {
          r: Math.round((leftColor.r + rightColor.r) / 2),
          g: Math.round((leftColor.g + rightColor.g) / 2),
          b: Math.round((leftColor.b + rightColor.b) / 2),
        };
        setIsLightSurface(getLuminance(avgColor) > 0.45);
      });
    };

    updateSurfaceContrast();
    window.addEventListener("scroll", updateSurfaceContrast, { passive: true });
    window.addEventListener("resize", updateSurfaceContrast);

    return () => {
      window.removeEventListener("scroll", updateSurfaceContrast);
      window.removeEventListener("resize", updateSurfaceContrast);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMenuOpen, pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((previousValue) => {
      const nextValue = !previousValue;
      if (nextValue) {
        setOpenGroupId(defaultGroup);
      }
      return nextValue;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleGroupToggle = (groupId: string) => {
    setOpenGroupId((previousValue) => (previousValue === groupId ? "" : groupId));
  };

  const menuButtonLabel = isMenuOpen ? "Close menu" : "Open menu";

  return (
    <>
      <header
        className={`maru-frame-top ${isLightSurface && !isMenuOpen ? "maru-light-surface" : ""}`}
      >
        <div className="maru-frame-inner">
          <Link href="/" onClick={closeMenu} className="maru-logo" aria-label="Maru homepage">
            M.
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={toggleMenu}
            className={`maru-menu-btn ${isMenuOpen ? "maru-active" : ""}`}
            aria-label={menuButtonLabel}
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation-overlay"
          >
            <span />
          </button>
        </div>
      </header>

      <div
        className={`maru-menu-frame ${isMenuOpen ? "maru-active" : ""}`}
        id="site-navigation-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="maru-menu-shell">
          <div className="maru-menu-content">
            <nav className="maru-main-menu" id="swupMenu">
              <ul>
                {menuGroups.map((group) => {
                  const isCurrentGroup = group.items.some((item) =>
                    pathMatches(pathname, item.href),
                  );
                  const isOpen = openGroupId === group.id;

                  return (
                    <li
                      key={group.id}
                      className={`maru-has-children ${isCurrentGroup ? "maru-group-current" : ""}`}
                    >
                      <button
                        type="button"
                        className={`maru-main-link ${
                          isOpen ? "maru-active" : ""
                        } ${isCurrentGroup ? "maru-current" : ""}`}
                        onClick={() => handleGroupToggle(group.id)}
                        aria-expanded={isOpen}
                        aria-controls={`submenu-${group.id}`}
                      >
                        {group.label}
                      </button>
                      <ul
                        id={`submenu-${group.id}`}
                        className={`maru-submenu ${isOpen ? "maru-active" : ""}`}
                      >
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className={`maru-submenu-link ${
                                pathMatches(pathname, item.href) ? "maru-active" : ""
                              }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="maru-menu-right-frame">
              <div className="maru-menu-right">
                <div className="maru-menu-right-grid">
                  <section>
                    <h6 className="maru-menu-section-title">AI Tools</h6>
                    <ul className="maru-menu-list">
                      {toolLinks.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} onClick={closeMenu}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h6 className="maru-menu-section-title">Featured Services</h6>
                    <ul className="maru-menu-list">
                      {serviceLinks.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} onClick={closeMenu}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="maru-menu-divider" />

                <div className="maru-menu-location-grid">
                  <div>
                    <h6 className="maru-menu-section-title">South Africa</h6>
                    <p className="maru-menu-meta">Johannesburg</p>
                  </div>
                  <div>
                    <h6 className="maru-menu-section-title">Get in touch</h6>
                    <a href={`mailto:${siteConfig.contact.email}`} className="maru-menu-meta-link">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
