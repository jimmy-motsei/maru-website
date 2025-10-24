# Cloudflare Pages Header Configuration

Add the following rules via **Pages → Settings → Headers** (or ` _headers` file if using a build step):

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: accelerometer=(), autoplay=(), camera=(), geolocation=(), gyroscope=(), microphone=(), payment=()
  Referrer-Policy: strict-origin-when-cross-origin
```

Customize the Content Security Policy once third-party dependencies are final. A starting point that works with the current stack:

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://static.cloudflareinsights.com https://www.googletagmanager.com https://js-eu1.hs-scripts.com https://js-eu1.hsforms.net 'unsafe-inline'; connect-src 'self' https://www.google-analytics.com https://region1.analytics.google.com https://api.hsforms.com https://forms.hsforms.com; img-src 'self' data: https://www.google-analytics.com https://forms.hsforms.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-src https://forms.hsforms.com
```

> Review and tighten the policy after trimming unused scripts (GSAP/Swiper) and before re-enabling marketing embeds by default.
