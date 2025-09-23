# Inline Style Migration Report

## Summary

- Total inline style blocks: 8
- Total inline style attributes: 29
- Files with inline styles: 9

## Inline Style Blocks to Migrate

### Block 1 - index.html:32
```css
/* Custom styles for partners section */
      .mil-partners-section {
        background: #f8f9fa;
        position: relative;
        overflow: hidden;
      }

      .mil-partners-section h3 {
        color: #333;
        font-weight: 600;
      }

      .mil-partners-section p {
        color: #666;
        font-size: 18px;
        line-height: 1.6;
      }

      .mil-infinite-show {
        margin: 0 -15px;
      }

      .mil-partner-frame {
        padding: 20px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .mil-partner-frame img {
        max-height: 80px;
        max-width: 400px;
        width: auto;
        height: auto;
        object-fit: contain;
        display: block;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .mil-partner-frame {
          height: 100px;
          padding: 15px;
        }

        .mil-partner-frame img {
          max-height: 60px;
          max-width: 300px;
        }

        .mil-partners-section h3 {
          font-size: 24px;
        }

        .mil-partners-section p {
          font-size: 16px;
        }
      }

      /* Ensure smooth scrolling */
      .mil-infinite-show .swiper-wrapper {
        transition-timing-function: linear;
      }

      /* Fix Swiper slide sizing */
      .mil-infinite-show .swiper-slide {
        width: auto;
        min-width: 120px;
        flex-shrink: 0;
      }

      /* Force scroll button positioning */
      .mil-circle-text {
        position: absolute !important;
        right: 0 !important;
        top: 70% !important;
        z-index: 1000 !important;
      }

      /* More specific targeting for the scroll button */
      .mil-banner .mil-circle-text {
        position: absolute !important;
        right: 0 !important;
        top: 70% !important;
        z-index: 1000 !important;
      }

      /* Debug styles removed - positioning fixed */

      /* ===========================================
         ASHLEY TEMPLATE MOBILE FRAMEWORK
         =========================================== */

      /* Mobile Utility Classes */
      .mil-mobile-hidden {
        display: none;
      }

      /* ===========================================
         RESPONSIVE BREAKPOINT SYSTEM
         =========================================== */

      /* Large Desktop Adjustments (1400px) */
      @media screen and (max-width: 1400px) {
        .mil-banner .mil-banner-content h1 {
          font-size: 74px;
        }
      }

      /* Desktop Adjustments (1200px) */
      @media screen and (max-width: 1200px) {
        .mil-banner .mil-banner-content h1 {
          font-size: 72px;
        }
      }

      /* Tablet Adjustments (992px) */
      @media screen and (max-width: 992px) {
        .mil-banner .mil-banner-content h1 {
          font-size: 58px;
        }

        .mil-banner .mil-banner-content {
          padding-top: 90px;
          padding-bottom: 90px;
        }

        .mil-menu-btn {
          transform: scale(0.85);
        }
      }

      /* Mobile Adjustments (768px) */
      @media screen and (max-width: 768px) {
        /* Hide Request Demo button on mobile */
        .mil-banner .mil-banner-content .mil-link[href="request-demo.html"] {
          display: none !important;
        }

        .mil-banner .mil-banner-content h1 {
          font-size: 34px;
        }

        .mil-banner .mil-banner-content h1 br,
        .mil-banner .mil-banner-content h2 br,
        .mil-banner .mil-banner-content h3 br {
          display: none;
        }

        /* Fix button arrow alignment on mobile */
        .mil-banner .mil-banner-content .mil-button {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: auto !important;
          min-width: 200px !important;
          padding: 15px 25px !important;
        }

        .mil-banner .mil-banner-content .mil-button svg {
          margin-left: 15px !important;
          align-self: center !important;
        }

        /* Make scroll button container match button dimensions */
        .mil-banner .mil-circle-text {
          width: auto !important;
          min-width: 200px !important;
          height: auto !important;
          min-height: 55px !important;
        }
      }

      /* Small Mobile Adjustments (576px) */
      @media screen and (max-width: 576px) {
        .mil-banner .mil-banner-content h1 {
          font-size: 28px;
        }
      }

      /* Very Small Mobile Adjustments (500px) */
      @media screen and (max-width: 500px) {
        .mil-banner .mil-banner-content h1 {
          font-size: 24px;
        }
      }

      /* ===========================================
         MOBILE MENU SYSTEM
         =========================================== */

      /* Mobile Menu Button Styles */
      .mil-menu-btn {
        pointer-events: all;
        height: 28px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
      }

      .mil-menu-btn span,
      .mil-menu-btn span:after,
      .mil-menu-btn span:before {
        content: "";
        display: block;
        width: 28px;
        height: 2.5px;
        background: rgb(0, 0, 0);
        backface-visibility: hidden;
        transition: inherit;
      }

      .mil-menu-btn span {
        position: relative;
      }

      .mil-menu-btn span:after,
      .mil-menu-btn span:before {
        position: absolute;
      }

      .mil-menu-btn span:before {
        top: -9px;
      }

      .mil-menu-btn span:after {
        width: 18px;
        top: 9px;
      }

      /* Active Menu Button State */
      .mil-menu-btn.mil-active span {
        transform: rotate(45deg);
      }

      .mil-menu-btn.mil-active span:before {
        transform: translate(0px, 9px) rotate(-90deg);
      }

      .mil-menu-btn.mil-active span:after {
        opacity: 0;
        width: 24px;
        transform: translate(0px, -9px) rotate(-90deg);
      }

      /* Mobile Menu Frame */
      .mil-menu-frame {
        position: fixed;
        z-index: 9999;
        width: 100%;
        height: 100vh;
        background-color: rgb(0, 0, 0);
        opacity: 0;
        pointer-events: none;
        transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
      }

      .mil-menu-frame.mil-active {
        opacity: 1;
        pointer-events: all;
      }

      .mil-menu-frame .mil-frame-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 50px 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .mil-menu-frame .mil-frame-top .mil-logo {
        color: rgb(255, 255, 255);
        font-size: 2rem;
        font-weight: bold;
      }

      .mil-menu-frame .mil-frame-top .mil-menu-btn span,
      .mil-menu-frame .mil-frame-top .mil-menu-btn span:after,
      .mil-menu-frame .mil-frame-top .mil-menu-btn span:before {
        background-color: rgb(255, 255, 255);
      }

      /* Mobile Menu Content */
      .mil-menu-frame .container {
        height: 100%;
        display: flex;
        align-items: center;
        padding-top: 120px;
      }

      .mil-menu-frame .mil-main-menu {
        opacity: 0;
        transform: translateY(30px);
        transition: 0.6s cubic-bezier(0, 0, 0.3642, 1);
      }

      .mil-menu-frame.mil-active .mil-main-menu {
        opacity: 1;
        transform: translateY(0);
      }

      .mil-menu-frame .mil-main-menu ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .mil-menu-frame .mil-main-menu ul li {
        margin-bottom: 20px;
      }

      .mil-menu-frame .mil-main-menu ul li a {
        color: rgb(255, 255, 255);
        font-size: 2.5rem;
        font-weight: 300;
        text-decoration: none;
        transition: 0.3s ease;
        display: block;
        padding: 10px 0;
      }

      .mil-menu-frame .mil-main-menu ul li a:hover {
        color: rgb(0, 188, 212);
        transform: translateX(10px);
      }

      /* Mobile Menu Responsive Adjustments */
      @media screen and (max-width: 768px) {
        .mil-menu-frame .mil-frame-top {
          padding: 30px 20px;
        }

        .mil-menu-frame .mil-main-menu ul li a {
          font-size: 2rem;
        }

        .mil-menu-frame .container {
          padding-top: 100px;
        }
      }

      @media screen and (max-width: 576px) {
        .mil-menu-frame .mil-main-menu ul li a {
          font-size: 1.8rem;
        }
      }

      /* ===========================================
         MOBILE COMPONENT OPTIMIZATIONS
         =========================================== */

      /* Mobile Button System */
      @media screen and (max-width: 768px) {
        .mil-button {
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 500;
          border-radius: 70px;
          background-color: rgb(0, 188, 212);
          color: rgb(0, 0, 0);
          transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
          width: 100%;
          padding: 15px 20px;
          margin-bottom: 15px;
        }

        .mil-button svg {
          margin-left: 20px;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          padding: 8px;
          background-color: rgb(0, 0, 0);
          transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
        }

        .mil-button svg path {
          fill: rgb(0, 188, 212);
        }

        .mil-button:hover {
          transform: scale(1.015);
          filter: brightness(110%);
        }

        .mil-button:hover svg {
          transform: scale(1.15);
        }
      }

      /* Mobile Form Optimizations */
      @media screen and (max-width: 768px) {
        input,
        textarea {
          height: 60px;
          padding: 0 20px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .mil-form-group {
          margin-bottom: 20px;
        }
      }

      /* Mobile Typography Optimizations */
      @media screen and (max-width: 768px) {
        .mil-banner .mil-banner-content p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .mil-banner .mil-banner-content {
          margin-top: 60px;
          padding: 0 20px;
        }
      }

      /* Mobile Spacing Optimizations */
      @media screen and (max-width: 768px) {
        .mil-banner {
          padding: 40px 0;
          min-height: calc(100vh - 40px);
        }

        .mil-p-120-30 {
          padding-top: 60px !important;
          padding-bottom: 60px !important;
        }

        .mil-p-120-60 {
          padding-top: 60px !important;
          padding-bottom: 60px !important;
        }
      }

      /* Mobile Touch Optimizations */
      @media screen and (max-width: 768px) {
        .mil-button,
        .mil-link,
        .mil-menu-btn {
          min-height: 44px;
          min-width: 44px;
        }

        .mil-menu-btn span {
          height: 2px;
          margin: 4px 0;
        }
      }

      /* Mobile Performance Optimizations */
      @media screen and (max-width: 768px) {
        .mil-animation {
          animation-duration: 0.6s !important;
        }

        .mil-animation-frame {
          transform: scale(0.8) !important;
        }
      }

      /* ===========================================
         CROSS-BREAKPOINT SCROLL BUTTON POSITIONING
         =========================================== */

      /* Large Desktop (1400px+) */
      .mil-banner .mil-circle-text {
        position: absolute !important;
        right: 0 !important;
        top: 70% !important;
        z-index: 1000 !important;
      }

      /* Desktop (1200px) */
      @media screen and (max-width: 1200px) {
        .mil-banner .mil-circle-text {
          top: 70% !important;
        }
      }

      /* Tablet (992px) */
      @media screen and (max-width: 992px) {
        .mil-banner .mil-circle-text {
          top: 70% !important;
        }
      }

      /* Mobile (768px) */
      @media screen and (max-width: 768px) {
        .mil-banner .mil-circle-text {
          top: 70% !important;
          right: 20px !important;
        }
      }

      /* Small Mobile (576px) */
      @media screen and (max-width: 576px) {
        .mil-banner .mil-circle-text {
          top: 70% !important;
          right: 15px !important;
        }
      }

      /* Very Small Mobile (500px) */
      @media screen and (max-width: 500px) {
        .mil-banner .mil-circle-text {
          top: 70% !important;
          right: 10px !important;
        }
      }

      /* ===========================================
         MOBILE UTILITY CLASSES
         =========================================== */

      /* Hide elements on mobile */
      .mil-mobile-hidden {
        display: none;
      }

      @media screen and (max-width: 768px) {
        .mil-mobile-hidden {
          display: none !important;
        }
      }

      /* Show elements only on mobile */
      .mil-mobile-only {
        display: none;
      }

      @media screen and (max-width: 768px) {
        .mil-mobile-only {
          display: block !important;
        }
      }

      /* Mobile-first responsive utilities */
      .mil-container-fluid {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
      }

      @media screen and (min-width: 768px) {
        .mil-container-fluid {
          padding-left: 40px;
          padding-right: 40px;
        }
      }

      @media screen and (min-width: 1200px) {
        .mil-container-fluid {
          padding-left: 60px;
          padding-right: 60px;
        }
      }

      /* ===========================================
         SAFARI SCROLLING FIX
         =========================================== */

      /* Safari-specific scrolling fixes - AGGRESSIVE OVERRIDE */
      @supports (-webkit-touch-callout: none) {
        * {
          -webkit-overflow-scrolling: touch !important;
        }

        html,
        body {
          -webkit-overflow-scrolling: touch !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
          height: auto !important;
          min-height: 100vh !important;
          position: relative !important;
          display: block !important;
        }

        .mil-wrapper {
          -webkit-overflow-scrolling: touch !important;
          overflow: visible !important;
          overflow-x: hidden !important;
          overflow-y: visible !important;
          height: auto !important;
          min-height: 100vh !important;
          position: relative !important;
          display: block !important;
        }

        .mil-content {
          overflow: visible !important;
          overflow-y: visible !important;
          height: auto !important;
          position: relative !important;
          display: block !important;
        }

        .mil-main-transition {
          overflow: visible !important;
          overflow-y: visible !important;
          height: auto !important;
          position: relative !important;
          display: block !important;
        }

        /* Ensure sections don't block scrolling */
        section {
          overflow-x: hidden !important;
          overflow-y: visible !important;
          position: relative !important;
          height: auto !important;
          display: block !important;
        }

        /* Fix banner height for Safari */
        .mil-banner {
          height: auto !important;
          min-height: 100vh !important;
          overflow: visible !important;
          position: relative !important;
          display: block !important;
        }

        /* Force all containers to allow scrolling */
        .container {
          overflow: visible !important;
          height: auto !important;
          position: relative !important;
        }

        /* Fix for fixed positioned elements in Safari */
        .mil-frame,
        .mil-menu-frame,
        .mil-preloader {
          -webkit-transform: translateZ(0) !important;
          transform: translateZ(0) !important;
        }

        /* CRITICAL: Override any Swup or animation CSS that might block scrolling */
        .mil-main-transition,
        .mil-content,
        .mil-wrapper {
          transform: none !important;
          -webkit-transform: none !important;
          will-change: auto !important;
        }
      }

      /* ===========================================
         FOOTER NEWSLETTER BUTTON STYLING
         =========================================== */

      /* Original Newsletter Form Styling */
      .mil-subscribe-form {
        position: relative;
        height: 70px;
        width: 100%;
      }

      .mil-subscribe-form input {
        height: 100%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        color: rgb(0, 0, 0);
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;
        border: none;
        border-radius: 70px;
        padding: 0 0 0 50px;
        transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
      }

      .mil-subscribe-form input::placeholder {
        color: rgb(128, 128, 128);
        font-family: "Outfit", sans-serif;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      .mil-subscribe-form input:focus {
        background-color: rgb(255, 255, 255);
        outline: inherit;
      }

      .mil-subscribe-form input:hover {
        background-color: rgb(255, 255, 255);
      }

      .mil-subscribe-form .mil-button {
        display: none;
      }

      .mil-subscribe-form::after {
        content: "";
        position: absolute;
        top: 15px;
        right: 15px;
        width: 40px;
        height: 40px;
        background-color: rgb(0, 0, 0);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
        cursor: pointer;
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 12h14m-7-7l7 7-7 7' stroke='%2300BCD4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 20px 20px;
      }

      .mil-subscribe-form:hover::after {
        transform: scale(1.15);
      }

      /* ===========================================
         COOKIE BANNER STYLING
         =========================================== */

      .mil-cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        background: linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.95) 0%,
          rgba(0, 0, 0, 0.9) 100%
        );
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(0, 188, 212, 0.3);
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
        transform: translateY(100%);
        transition: transform 0.4s cubic-bezier(0, 0, 0.3642, 1);
      }

      .mil-cookie-banner.show {
        transform: translateY(0);
      }

      .mil-cookie-banner-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 30px;
        max-width: 1200px;
        margin: 0 auto;
        gap: 30px;
      }

      .mil-cookie-banner-text {
        flex: 1;
        min-width: 0;
      }

      .mil-cookie-banner-title {
        color: rgb(0, 188, 212);
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 8px 0;
        font-family: "Outfit", sans-serif;
      }

      .mil-cookie-banner-description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 14px;
        line-height: 1.5;
        margin: 0;
        font-family: "Outfit", sans-serif;
      }

      .mil-cookie-banner-link {
        color: rgb(0, 188, 212);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
      }

      .mil-cookie-banner-link:hover {
        color: rgb(0, 200, 220);
        text-decoration: underline;
      }

      .mil-cookie-banner-actions {
        display: flex;
        gap: 15px;
        flex-shrink: 0;
      }

      .mil-cookie-accept {
        background-color: rgb(0, 188, 212);
        color: rgb(0, 0, 0);
        border: none;
        padding: 12px 24px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-radius: 6px;
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .mil-cookie-accept:hover {
        background-color: rgb(0, 200, 220);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 188, 212, 0.3);
      }

      .mil-cookie-settings {
        background-color: transparent;
        color: rgb(255, 255, 255);
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 12px 24px;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-radius: 6px;
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .mil-cookie-settings:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-color: rgb(0, 188, 212);
        color: rgb(0, 188, 212);
        transform: translateY(-2px);
      }

      .mil-cookie-decline {
        background-color: transparent;
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 12px 24px;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-radius: 6px;
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .mil-cookie-decline:hover {
        background-color: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.4);
        color: rgba(255, 255, 255, 0.9);
      }

      /* Mobile responsive cookie banner */
      @media screen and (max-width: 768px) {
        .mil-cookie-banner-content {
          flex-direction: column;
          align-items: stretch;
          padding: 20px;
          gap: 20px;
        }

        .mil-cookie-banner-text {
          text-align: center;
        }

        .mil-cookie-banner-title {
          font-size: 16px;
        }

        .mil-cookie-banner-description {
          font-size: 13px;
        }

        .mil-cookie-banner-actions {
          justify-content: center;
          flex-wrap: wrap;
        }

        .mil-cookie-accept,
        .mil-cookie-settings,
        .mil-cookie-decline {
          flex: 1;
          min-width: 120px;
          padding: 14px 16px;
          font-size: 11px;
        }
      }

      @media screen and (max-width: 480px) {
        .mil-cookie-banner-content {
          padding: 15px;
        }

        .mil-cookie-banner-actions {
          flex-direction: column;
          gap: 10px;
        }

        .mil-cookie-accept,
        .mil-cookie-settings,
        .mil-cookie-decline {
          width: 100%;
          min-width: auto;
        }
      }

      /* ===========================================
         SERVICES SECTION BUTTON STYLING
         =========================================== */

      /* Services section main button styling */
      .mil-services-button {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-width: 160px !important;
        max-width: 200px !important;
        padding: 15px 25px !important;
        background-color: rgb(0, 188, 212) !important;
        color: rgb(0, 0, 0) !important;
        border-radius: 70px !important;
        font-size: 12px !important;
        letter-spacing: 2px !important;
        text-transform: uppercase !important;
        font-weight: 500 !important;
        transition: 0.4s cubic-bezier(0, 0, 0.3642, 1) !important;
        text-decoration: none !important;
        margin: 30px auto !important;
        border: none !important;
        cursor: pointer !important;
      }

      .mil-services-button:hover {
        transform: scale(1.05) !important;
        filter: brightness(110%) !important;
        text-decoration: none !important;
        color: rgb(0, 0, 0) !important;
      }

      .mil-services-button span {
        color: rgb(0, 0, 0) !important;
        font-weight: 500 !important;
        margin-right: 15px !important;
      }

      .mil-services-button svg {
        margin-left: 0 !important;
        border-radius: 50% !important;
        width: 30px !important;
        height: 30px !important;
        padding: 6px !important;
        background-color: rgb(0, 0, 0) !important;
        transition: 0.4s cubic-bezier(0, 0, 0.3642, 1) !important;
      }

      .mil-services-button svg path {
        fill: rgb(0, 188, 212) !important;
      }

      .mil-services-button:hover svg {
        transform: scale(1.15) !important;
      }

      /* Mobile responsive services button */
      @media screen and (max-width: 768px) {
        .mil-services-button {
          width: 100% !important;
          max-width: 250px !important;
          padding: 15px 20px !important;
          margin: 25px auto !important;
        }

        .mil-services-button svg {
          width: 25px !important;
          height: 25px !important;
          padding: 5px !important;
        }
      }

      /* ===========================================
         SERVICE CARD BUTTON STYLING
         =========================================== */

      /* Service card button styling to match main button */
      .mil-service-card-sm .mil-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 140px;
        padding: 12px 20px;
        margin-top: 20px;
        background-color: rgb(0, 188, 212);
        color: rgb(0, 0, 0);
        border-radius: 70px;
        font-size: 12px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: 500;
        transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
        text-decoration: none;
      }

      .mil-service-card-sm .mil-button:hover {
        transform: scale(1.05);
        filter: brightness(110%);
      }

      .mil-service-card-sm .mil-button span {
        color: rgb(0, 0, 0);
        font-weight: 500;
      }

      .mil-service-card-sm .mil-button svg {
        margin-left: 15px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        padding: 6px;
        background-color: rgb(0, 0, 0);
        transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
      }

      .mil-service-card-sm .mil-button svg path {
        fill: rgb(0, 188, 212);
      }

      .mil-service-card-sm .mil-button:hover svg {
        transform: scale(1.15);
      }

      /* Mobile responsive adjustments for service buttons */
      @media screen and (max-width: 768px) {
        .mil-service-card-sm .mil-button {
          width: 100%;
          min-width: auto;
          padding: 15px 20px;
          margin-top: 15px;
        }

        .mil-service-card-sm .mil-button svg {
          width: 25px;
          height: 25px;
          padding: 5px;
        }
      }
```

### Block 2 - index.html:1137
```css
/* Simple spacing override for Swiper */
      .mil-infinite-show .swiper-slide {
        width: 200px !important;
        min-width: 200px !important;
        margin-right: 40px !important;
        flex-shrink: 0 !important;
      }

      .mil-infinite-show .swiper-slide:last-child {
        margin-right: 0 !important;
      }

      /* Reduce top padding for partners section */
      .mil-partners-section {
        padding-top: 60px !important; /* Reduced from 120px */
      }

      .mil-partners-section .container.mil-p-120-60 {
        padding-top: 60px !important; /* Reduced from 120px */
        padding-bottom: 60px !important;
      }

      .mil-partner-frame {
        width: 100% !important;
        height: 120px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 20px !important;
      }

      .mil-partner-frame img {
        max-height: 80px !important;
        max-width: 100% !important;
        width: auto !important;
        height: auto !important;
        object-fit: contain !important;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .mil-infinite-show .swiper-slide {
          width: 150px !important;
          min-width: 150px !important;
          margin-right: 30px !important;
        }

        .mil-partner-frame {
          height: 100px !important;
          padding: 15px !important;
        }

        .mil-partner-frame img {
          max-height: 60px !important;
        }
      }
```

### Block 3 - debug-main.html:7
```css
body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background: #f0f0f0;
      }

      .debug-panel {
        position: fixed;
        top: 10px;
        left: 10px;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 15px;
        border-radius: 5px;
        font-family: monospace;
        font-size: 12px;
        z-index: 10000;
        max-width: 300px;
      }

      .section {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: white;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
      }

      .section:nth-child(2) {
        background: #ff6b6b;
      }
      .section:nth-child(3) {
        background: #4ecdc4;
      }
      .section:nth-child(4) {
        background: #45b7d1;
      }
      .section:nth-child(5) {
        background: #96ceb4;
      }
      .section:nth-child(6) {
        background: #feca57;
      }
```

### Block 4 - knowledge.html:4
```css
html,
      body,
      .mil-content,
      #swupMain {
        -webkit-overflow-scrolling: touch !important;
        overflow-y: auto !important;
      }
```

### Block 5 - contact.html:82
```css
/* Contact form loading state */
      .mil-loading {
        text-align: center;
        padding: 40px 20px;
      }

      .mil-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #007bff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      /* Fallback form styling */
      .mil-contact-form {
        max-width: 600px;
        margin: 0 auto;
      }

      .mil-input-group {
        margin-bottom: 20px;
      }

      .mil-input-group input,
      .mil-input-group textarea {
        width: 100%;
        padding: 12px 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
        transition: border-color 0.3s ease;
      }

      .mil-input-group input:focus,
      .mil-input-group textarea:focus {
        outline: none;
        border-color: #007bff;
      }

      .mil-button {
        background: #007bff;
        color: white;
        padding: 12px 30px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .mil-button:hover {
        background: #0056b3;
      }

      /* Map info styling */
      .mil-map-info {
        position: absolute;
        top: 30px;
        left: 30px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 10px;
        padding: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        max-width: 300px;
        z-index: 10;
      }

      .mil-map-info-content h6 {
        color: #333;
        font-weight: 600;
        margin-bottom: 15px;
      }

      .mil-map-info-content p {
        color: #666;
        line-height: 1.6;
        margin-bottom: 15px;
      }

      .mil-map-info-content strong {
        color: #333;
        font-weight: 600;
      }

      .mil-map-frame {
        position: relative;
        margin-bottom: 0;
      }

      .mil-map {
        position: relative;
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 10px;
      }

      .mil-map iframe {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .mil-map-info {
          position: relative;
          top: auto;
          left: auto;
          margin: 20px;
          max-width: none;
        }

        .mil-map {
          height: 300px;
        }
      }

      /* Prevent column overlap at 90% zoom and other zoom levels */
      .footer-row {
        margin-left: -15px !important;
        margin-right: -15px !important;
      }

      .footer-row .col-md-4,
      .footer-row .col-md-6,
      .footer-row .col-md-7,
      .footer-row .col-lg-4,
      .footer-row .col-lg-5,
      .footer-row .col-lg-6,
      .footer-row .col-lg-7 {
        padding-left: 15px !important;
        padding-right: 15px !important;
      }

      @media (max-width: 1200px) {
        .footer-row {
          margin-left: -10px !important;
          margin-right: -10px !important;
        }

        .footer-row .col-md-4,
        .footer-row .col-md-6,
        .footer-row .col-md-7,
        .footer-row .col-lg-4,
        .footer-row .col-lg-5,
        .footer-row .col-lg-6,
        .footer-row .col-lg-7 {
          padding-left: 10px !important;
          padding-right: 10px !important;
        }
      }

      @media (max-width: 992px) {
        .footer-row {
          margin-left: -8px !important;
          margin-right: -8px !important;
        }

        .footer-row .col-md-4,
        .footer-row .col-md-6,
        .footer-row .col-md-7,
        .footer-row .col-lg-4,
        .footer-row .col-lg-5,
        .footer-row .col-lg-6,
        .footer-row .col-lg-7 {
          padding-left: 8px !important;
          padding-right: 8px !important;
        }

        /* Stack columns on medium screens to prevent overlap */
        .footer-row .col-md-7,
        .footer-row .col-md-4 {
          margin-bottom: 30px !important;
        }
      }

      @media (max-width: 768px) {
        .footer-row {
          margin-left: -5px !important;
          margin-right: -5px !important;
        }

        .footer-row .col-md-4,
        .footer-row .col-md-6,
        .footer-row .col-md-7,
        .footer-row .col-lg-4,
        .footer-row .col-lg-5,
        .footer-row .col-lg-6,
        .footer-row .col-lg-7 {
          padding-left: 5px !important;
          padding-right: 5px !important;
        }

        /* Force single column layout on small screens */
        .footer-row .col-md-7,
        .footer-row .col-md-4 {
          flex: 0 0 100% !important;
          max-width: 100% !important;
          margin-bottom: 30px !important;
        }
      }
```

### Block 6 - safari-test.html:7
```css
body {
        margin: 0;
        padding: 20px;
        font-family: Arial, sans-serif;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
        min-height: 200vh;
      }

      .test-section {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        border: 5px solid white;
        margin: 20px 0;
      }

      .debug-info {
        position: fixed;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-size: 12px;
        z-index: 1000;
      }
```

### Block 7 - request-demo.html:27
```css
/* Ensure Calendly widget is visible */
      .calendly-inline-widget {
        position: relative !important;
        z-index: 1000 !important;
        background: white !important;
        min-height: 700px !important;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      }

      /* Override any conflicting styles */
      .mil-post-content .calendly-inline-widget {
        margin: 0 !important;
        padding: 0 !important;
        border: 1px solid #e0e0e0 !important;
        border-radius: 8px !important;
        overflow: hidden !important;
      }

      /* Loading spinner animation */
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      /* Ensure Calendly iframe is visible when loaded */
      .calendly-inline-widget iframe {
        border: none !important;
        width: 100% !important;
        height: 100% !important;
        min-height: 700px !important;
      }
```

### Block 8 - minimal-test.html:7
```css
body {
        margin: 0;
        padding: 0;
        height: 300vh;
        background: red;
      }
      .box {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        color: white;
        font-weight: bold;
      }
      .box:nth-child(1) {
        background: blue;
      }
      .box:nth-child(2) {
        background: green;
      }
      .box:nth-child(3) {
        background: orange;
      }
```

## Inline Style Attributes to Migrate

### Attribute 1 - index.html:1199
```css
/* Original: style="display: none" */
/* TODO: Convert to CSS class */
```

### Attribute 2 - index.html:1494
```css
/* Original: style="letter-spacing: 6.5px" */
/* TODO: Convert to CSS class */
```

### Attribute 3 - index.html:1541
```css
/* Original: style="
                            object-fit: cover;
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                          " */
/* TODO: Convert to CSS class */
```

### Attribute 4 - index.html:1561
```css
/* Original: style="padding-bottom: 160%" */
/* TODO: Convert to CSS class */
```

### Attribute 5 - index.html:1614
```css
/* Original: style="top: 300px; right: -100px" */
/* TODO: Convert to CSS class */
```

### Attribute 6 - index.html:1620
```css
/* Original: style="left: 150px" */
/* TODO: Convert to CSS class */
```

### Attribute 7 - index.html:1640
```css
/* Original: style="
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 30px;
                      " */
/* TODO: Convert to CSS class */
```

### Attribute 8 - index.html:1668
```css
/* Original: style="
                            object-position: center;
                            object-fit: cover;
                            width: 100%;
                            height: 100%;
                            border-radius: 70px;
                          " */
/* TODO: Convert to CSS class */
```

### Attribute 9 - index.html:2104
```css
/* Original: style="padding-bottom: 56.25%" */
/* TODO: Convert to CSS class */
```

### Attribute 10 - index.html:2112
```css
/* Original: style="object-fit: cover; object-position: center" */
/* TODO: Convert to CSS class */
```

### Attribute 11 - index.html:2142
```css
/* Original: style="padding-bottom: 56.25%" */
/* TODO: Convert to CSS class */
```

### Attribute 12 - index.html:2150
```css
/* Original: style="object-fit: cover; object-position: center" */
/* TODO: Convert to CSS class */
```

### Attribute 13 - request-demo.html:173
```css
/* Original: style="padding: 40px; text-align: center; background: #f8f9fa; border-radius: 8px; border: 1px solid #e0e0e0; height: 100%; display: flex; flex-direction: column; justify-content: center;" */
/* TODO: Convert to CSS class */
```

### Attribute 14 - request-demo.html:174
```css
/* Original: style="color: #333; margin-bottom: 20px;" */
/* TODO: Convert to CSS class */
```

### Attribute 15 - request-demo.html:175
```css
/* Original: style="color: #666; margin-bottom: 30px;" */
/* TODO: Convert to CSS class */
```

### Attribute 16 - request-demo.html:177
```css
/* Original: style="display: inline-block; padding: 15px 30px; background: #007bff; color: white; text-decoration: none; border-radius: 6px; font-weight: 500; transition: background-color 0.3s ease; margin-bottom: 20px;" */
/* TODO: Convert to CSS class */
```

### Attribute 17 - request-demo.html:180
```css
/* Original: style="font-size: 14px; color: #666; margin: 0;" */
/* TODO: Convert to CSS class */
```

### Attribute 18 - request-demo.html:181
```css
/* Original: style="color: #007bff;" */
/* TODO: Convert to CSS class */
```

### Attribute 19 - request-demo.html:445
```css
/* Original: style="
                        min-width: 320px;
                        height: 700px;
                        position: relative;
                        background: #f8f9fa;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                      " */
/* TODO: Convert to CSS class */
```

### Attribute 20 - request-demo.html:457
```css
/* Original: style="
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          transform: translate(-50%, -50%);
                          text-align: center;
                          z-index: 1;
                        " */
/* TODO: Convert to CSS class */
```

### Attribute 21 - request-demo.html:466
```css
/* Original: style="margin-bottom: 20px" */
/* TODO: Convert to CSS class */
```

### Attribute 22 - request-demo.html:468
```css
/* Original: style="
                              width: 40px;
                              height: 40px;
                              border: 4px solid #f3f3f3;
                              border-top: 4px solid #007bff;
                              border-radius: 50%;
                              animation: spin 1s linear infinite;
                              margin: 0 auto;
                            " */
/* TODO: Convert to CSS class */
```

### Attribute 23 - request-demo.html:479
```css
/* Original: style="color: #666; margin: 0" */
/* TODO: Convert to CSS class */
```

### Attribute 24 - request-demo.html:582
```css
/* Original: style="
                          max-height: 200px;
                          width: auto;
                          display: block;
                          margin-bottom: 20px;
                        " */
/* TODO: Convert to CSS class */
```

### Attribute 25 - services.html:256
```css
/* Original: style="padding-bottom: 60px" */
/* TODO: Convert to CSS class */
```

### Attribute 26 - services.html:271
```css
/* Original: style="margin-bottom: 0px" */
/* TODO: Convert to CSS class */
```

### Attribute 27 - services.html:285
```css
/* Original: style="padding-top: 60px; padding-bottom: 120px" */
/* TODO: Convert to CSS class */
```

### Attribute 28 - services.html:398
```css
/* Original: style="margin-top: 60px; margin-bottom: 60px" */
/* TODO: Convert to CSS class */
```

### Attribute 29 - terms-conditions.html:271
```css
/* Original: style="
                          max-height: 200px;
                          width: auto;
                          display: block;
                          margin-bottom: 20px;
                        " */
/* TODO: Convert to CSS class */
```

