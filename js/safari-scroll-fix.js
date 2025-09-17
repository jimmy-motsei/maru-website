(function () {
  "use strict";

  const isSafari = /^((?!chrome|android).)*safari/i.test(
    navigator.userAgent
  );

  if (!isSafari) {
    return;
  }

  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "auto";
  }

  document.documentElement.classList.add("mil-safari");
})();
