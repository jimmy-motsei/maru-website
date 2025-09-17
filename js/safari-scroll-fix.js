/**
 * Safari Scrolling Fix
 * Addresses Safari-specific scrolling issues
 */

(function () {
  "use strict";

  // Check if we're in Safari
  function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  if (isSafari()) {
    console.log("Safari detected - applying scrolling fixes");

    // Apply fixes when DOM is ready
    function applySafariFixes() {
      console.log("Applying Safari fixes...");

      // STEP 1: Force basic scrolling properties
      document.documentElement.style.height = "auto";
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.overflowY = "auto";

      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
      document.body.style.overflowY = "auto";
      document.body.style.position = "relative";

      // STEP 2: Fix all containers that might block scrolling
      const containers = [
        ".mil-wrapper",
        ".mil-content",
        ".mil-main-transition",
      ];

      containers.forEach((selector) => {
        const element = document.querySelector(selector);
        if (element) {
          element.style.height = "auto";
          // Preserve smooth scrolling by not forcing overflow: visible
          element.style.overflowY = "auto";
          element.style.position = "relative";
          element.style.display = "block";
        }
      });

      // STEP 3: Fix all sections
      const sections = document.querySelectorAll("section");
      sections.forEach(function (section) {
        // Preserve smooth scrolling by not forcing overflow: visible
        section.style.overflowY = "auto";
        section.style.position = "relative";
        section.style.height = "auto";
        section.style.minHeight = "auto";
      });

      // STEP 4: Fix banner specifically - this is critical
      const banner = document.querySelector(".mil-banner");
      if (banner) {
        banner.style.height = "auto";
        banner.style.minHeight = "100vh";
        // Preserve smooth scrolling by not forcing overflow: visible
        banner.style.overflowY = "auto";
        banner.style.position = "relative";
        banner.style.display = "block";
      }

      // STEP 5: Add touch scrolling
      document.body.style.webkitOverflowScrolling = "touch";
      document.documentElement.style.webkitOverflowScrolling = "touch";

      // STEP 6: Force Safari to recognize the content as scrollable
      // Add a small amount of extra content to ensure scrolling is possible
      const extraContent = document.createElement("div");
      extraContent.style.height = "1px";
      extraContent.style.width = "1px";
      extraContent.style.position = "absolute";
      extraContent.style.bottom = "0";
      extraContent.style.left = "0";
      extraContent.style.pointerEvents = "none";
      extraContent.style.zIndex = "-1";
      document.body.appendChild(extraContent);

      // STEP 7: Force reflow and test scrolling
      document.body.offsetHeight; // Force reflow

      // Test if scrolling works
      const canScroll = document.body.scrollHeight > window.innerHeight;
      console.log("Can scroll after fixes:", canScroll);
      console.log("Body height:", document.body.scrollHeight);
      console.log("Window height:", window.innerHeight);

      // If still can't scroll, force it
      if (!canScroll) {
        console.log("Forcing scrollable content...");
        document.body.style.minHeight = "150vh";
        document.body.style.paddingBottom = "50vh";
      }

      // Remove extra content after a delay
      setTimeout(() => {
        if (extraContent.parentNode) {
          extraContent.parentNode.removeChild(extraContent);
        }
      }, 2000);

      console.log("Safari scrolling fixes applied");
    }

    // Apply fixes immediately
    applySafariFixes();

    // Apply fixes when DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", applySafariFixes);
    }

    // Apply fixes after window load
    window.addEventListener("load", applySafariFixes);

    // Reapply fixes after any dynamic content changes
    const observer = new MutationObserver(function (mutations) {
      let shouldReapply = false;
      mutations.forEach(function (mutation) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          shouldReapply = true;
        }
      });
      if (shouldReapply) {
        setTimeout(applySafariFixes, 100);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Force scroll on touch events
    document.addEventListener(
      "touchstart",
      function (e) {
        // Allow default touch behavior
      },
      { passive: true }
    );

    document.addEventListener(
      "touchmove",
      function (e) {
        // Allow default touch behavior
      },
      { passive: true }
    );

    // Debug function to check scrolling
    window.debugSafariScroll = function () {
      console.log("=== Safari Scroll Debug ===");
      console.log(
        "HTML overflow:",
        getComputedStyle(document.documentElement).overflow
      );
      console.log("Body overflow:", getComputedStyle(document.body).overflow);
      console.log(
        "Wrapper overflow:",
        getComputedStyle(document.querySelector(".mil-wrapper")).overflow
      );
      console.log("Body scrollHeight:", document.body.scrollHeight);
      console.log("Body clientHeight:", document.body.clientHeight);
      console.log("Window innerHeight:", window.innerHeight);
      console.log("Document height:", document.documentElement.scrollHeight);
      console.log(
        "Can scroll:",
        document.body.scrollHeight > window.innerHeight
      );

      // Force scroll test
      console.log("Testing scroll...");
      window.scrollTo(0, 100);
      setTimeout(() => {
        console.log("Scroll position after test:", window.pageYOffset);
      }, 100);
    };

    // Add a simple scroll test button for debugging
    window.testSafariScroll = function () {
      console.log("Testing Safari scroll...");
      document.body.style.height = "200vh";
      document.body.style.backgroundColor = "red";
      setTimeout(() => {
        window.scrollTo(0, 500);
        console.log("Scrolled to 500px");
      }, 1000);
    };
  }
})();
