/**
 * Contact Form Enhancer - Optimized for Speed
 * Improves HubSpot contact form with faster loading and better error handling
 */

class ContactFormEnhancer {
  constructor() {
    // Prevent multiple instances
    if (window.ContactFormEnhancerInstance) {
      return window.ContactFormEnhancerInstance;
    }
    
    window.ContactFormEnhancerInstance = this;
    this.init();
  }

  init() {
    this.setupContactForm();
    this.addLoadingState();
  }

  setupContactForm() {
    // Check if HubSpot is already loaded
    if (window.hbspt && window.hbspt.forms) {
      console.log("HubSpot already loaded, creating form immediately...");
      this.createHubSpotForm();
      return;
    }

    // Check if scripts are marked as loaded
    if (window.hsLoaded && window.hsFormsLoaded) {
      console.log("HubSpot scripts loaded, creating form...");
      this.createHubSpotForm();
      return;
    }

    // Wait for HubSpot to load with optimized polling
    console.log("Waiting for HubSpot to load...");
    this.waitForHubSpot();
  }

  waitForHubSpot() {
    let attempts = 0;
    const maxAttempts = 50; // 5 seconds max (50 * 100ms)

    const checkHubSpot = setInterval(() => {
      attempts++;

      if (window.hbspt && window.hbspt.forms) {
        console.log("HubSpot loaded, creating form...");
        clearInterval(checkHubSpot);
        this.createHubSpotForm();
        return;
      }

      // Fallback after max attempts
      if (attempts >= maxAttempts) {
        console.log(
          "HubSpot failed to load within timeout, showing fallback form"
        );
        clearInterval(checkHubSpot);
        this.showFallbackForm();
      }
    }, 100);

    // Also listen for script load events
    this.listenForScriptLoads(checkHubSpot);
  }

  listenForScriptLoads(checkInterval) {
    // Listen for both scripts to load
    const checkBothLoaded = () => {
      if (window.hsLoaded && window.hsFormsLoaded) {
        // Give a small delay for scripts to initialize
        setTimeout(() => {
          if (window.hbspt && window.hbspt.forms) {
            console.log("HubSpot scripts loaded, creating form...");
            clearInterval(checkInterval);
            this.createHubSpotForm();
          }
        }, 100);
      }
    };

    // Check every 50ms for faster response
    const scriptCheck = setInterval(() => {
      checkBothLoaded();
      if (window.hbspt && window.hbspt.forms) {
        clearInterval(scriptCheck);
      }
    }, 50);
  }

  createHubSpotForm() {
    try {
      const container = document.getElementById("hubspot-container");
      if (!container) {
        console.error("HubSpot container not found");
        return;
      }

      // Remove loading state
      this.hideLoadingState();

      // Create the HubSpot form
      hbspt.forms.create({
        portalId: "146669350",
        formId: "e1a0f3ac-6a78-4c42-8dce-be1ea519666e",
        region: "eu1",
        target: "#hubspot-container",
        onFormReady: () => {
          console.log("HubSpot form ready");
          this.hideLoadingState();
          // Mark container as enhanced to prevent reinitalization
          container.setAttribute('data-enhanced', 'true');
        },
        onFormSubmit: () => {
          console.log("Form submitted");
        },
      });

      console.log("HubSpot form created successfully");
    } catch (error) {
      console.error("Error creating HubSpot form:", error);
      this.showFallbackForm();
    }
  }

  addLoadingState() {
    const container = document.getElementById("hubspot-container");
    if (container) {
      const loadingHTML = `
        <div id="hubspot-loading" style="text-align: center; padding: 40px;">
          <div style="margin-bottom: 20px;">
            <div style="width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #007bff; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
          </div>
          <p>Loading contact form...</p>
        </div>
        <style>
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      `;

      container.insertAdjacentHTML("afterbegin", loadingHTML);
    }
  }

  hideLoadingState() {
    const loading = document.getElementById("hubspot-loading");
    if (loading) {
      loading.style.display = "none";
    }
  }

  showFallbackForm() {
    const container = document.getElementById("hubspot-container");
    if (!container) {
      console.error("Fallback container not found");
      return;
    }

    // Remove loading state
    this.hideLoadingState();

    // Create a fallback contact form
    container.innerHTML = `
      <div class="mil-contact-form">
        <form id="fallback-contact-form" class="mil-up">
          <div class="row">
            <div class="col-md-6">
              <div class="mil-input-group">
                <input type="text" name="firstname" placeholder="First Name *" required />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mil-input-group">
                <input type="text" name="lastname" placeholder="Last Name *" required />
              </div>
            </div>
          </div>
          <div class="mil-input-group">
            <input type="email" name="email" placeholder="Email Address *" required />
          </div>
          <div class="mil-input-group">
            <textarea name="message" placeholder="Your Message *" rows="5" required></textarea>
          </div>
          <div class="mil-center">
            <button type="submit" class="mil-button mil-arrow-place">
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    `;

    // Add form submission handler
    const form = document.getElementById("fallback-contact-form");
    if (form) {
      form.addEventListener("submit", this.handleFallbackFormSubmit);
    }
    
    // Mark container as enhanced to prevent reinitalization
    container.setAttribute('data-enhanced', 'true');
  }

  handleFallbackFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // For now, just show a success message
    // In production, you'd send this to your server
    alert("Thank you for your message! We'll get back to you soon.");
    event.target.reset();
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new ContactFormEnhancer();
});

// Also initialize on page load
window.addEventListener("load", () => {
  if (!document.querySelector("#hubspot-container[data-enhanced]")) {
    new ContactFormEnhancer();
  }
});
