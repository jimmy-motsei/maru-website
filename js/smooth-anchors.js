(function () {
  if (typeof window === "undefined") {
    return;
  }

  var gsapInstance = window.gsap;
  var scrollToPlugin = window.ScrollToPlugin;

  if (!gsapInstance || !scrollToPlugin) {
    if (window && window.console) {
      console.warn("GSAP ScrollToPlugin not available; smooth anchor scrolling skipped.");
    }
    return;
  }

  gsapInstance.registerPlugin(scrollToPlugin);

  var CANCEL_EVENTS = ["wheel", "touchstart", "keydown", "mousedown"];
  var cancelBound = false;
  var clickBound = false;
  var lastHash = null;

  function getOffset() {
    var offsetElement = document.querySelector("[data-anchor-offset]");
    if (offsetElement) {
      return offsetElement.offsetHeight || 0;
    }
    return 0;
  }

  function killTweens() {
    gsapInstance.killTweensOf(window);
  }

  function bindCancellation() {
    if (cancelBound) {
      return;
    }
    CANCEL_EVENTS.forEach(function (evt) {
      window.addEventListener(evt, killTweens, { passive: true });
    });
    cancelBound = true;
  }

  function samePage(link) {
    if (!link) {
      return false;
    }
    var linkPath = link.pathname ? link.pathname.replace(/^\//, "") : "";
    var currentPath = window.location.pathname
      ? window.location.pathname.replace(/^\//, "")
      : "";
    return linkPath === currentPath && link.host === window.location.host;
  }

  function animateToTarget(target, hash, options) {
    if (!target) {
      return;
    }

    var settings = Object.assign(
      {
        skipHistory: false,
      },
      options || {}
    );

    gsapInstance.killTweensOf(window);

    gsapInstance.to(window, {
      duration: 0.75,
      ease: "power2.out",
      scrollTo: {
        y: target,
        offsetY: getOffset(),
        autoKill: true,
      },
      overwrite: "auto",
      onComplete: function () {
        if (!settings.skipHistory && hash) {
          history.pushState(null, "", hash);
        }
      },
    });
  }

  function handleClick(event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link) {
      return;
    }

    if (!samePage(link)) {
      return;
    }

    var hash = link.hash || link.getAttribute("href");
    if (!hash) {
      return;
    }

    var id = hash.replace(/^#/, "");
    if (!id) {
      return;
    }

    var target = document.getElementById(id);
    if (!target) {
      return;
    }

    event.preventDefault();
    lastHash = hash;
    animateToTarget(target, hash, { skipHistory: false });
  }

  function scrollToHash(options) {
    var hash = window.location.hash;
    if (!hash) {
      return;
    }

    if (hash === lastHash && !(options && options.force)) {
      return;
    }

    var id = hash.replace(/^#/, "");
    if (!id) {
      return;
    }

    var target = document.getElementById(id);
    if (!target) {
      return;
    }

    lastHash = hash;
    animateToTarget(target, hash, { skipHistory: true });
  }

  function init() {
    bindCancellation();

    if (!clickBound) {
      document.addEventListener("click", handleClick, false);
      clickBound = true;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      init();
      window.requestAnimationFrame(function () {
        scrollToHash({ force: true });
      });
    });
  } else {
    init();
    window.requestAnimationFrame(function () {
      scrollToHash({ force: true });
    });
  }

  document.addEventListener("swup:contentReplaced", function () {
    window.requestAnimationFrame(function () {
      scrollToHash({ force: true });
    });
  });
})();
