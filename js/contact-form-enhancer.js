/**
 * Contact Form Enhancer
 * Improves HubSpot contact form with better error handling and fallback
 */

class ContactFormEnhancer {
  constructor() {
    this.init();
  }

  init() {
    this.setupContactForm();
    this.addLoadingState();
    this.setupFallbackForm();
  }

  setupContactForm() {
    // Wait for HubSpot script to load
    if (window.hbspt && window.hbspt.forms) {
      console.log("HubSpot loaded, creating form...");
      createHubSpotForm();
    } else {
      // HubSpot not loaded yet, wait for it
      console.log("Waiting for HubSpot to load...");
      const checkHubSpot = setInterval(() => {
        if (window.hbspt && window.hbspt.forms) {
          console.log("HubSpot loaded, creating form...");
          clearInterval(checkHubSpot);
          createHubSpotForm();
        }
      }, 100);

      // Fallback: if HubSpot doesn't load within 10 seconds, show fallback form
      setTimeout(() => {
        if (!window.hbspt || !window.hbspt.forms) {
          console.log("HubSpot failed to load, showing fallback form");
          clearInterval(checkHubSpot);
          showFallbackForm();
        }
      }, 10000);
    }

    function createHubSpotForm() {
      try {
        const container = document.getElementById("hubspot-container");
        if (!container) {
          console.error("HubSpot container not found");
          return;
        }

        // Create the HubSpot form
        hbspt.forms.create({
          portalId: "146669350",
          formId: "e1a0f3ac-6a78-4c42-8dce-be1ea519666e",
          region: "eu1",
          target: "#hubspot-container",
        });

        console.log("HubSpot form created successfully");
      } catch (error) {
        console.error("Error creating HubSpot form:", error);
        showFallbackForm();
      }
    }

    function showFallbackForm() {
      const container = document.getElementById("hubspot-container");
      if (!container) {
        console.error("Fallback container not found");
        return;
      }

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
        form.addEventListener("submit", handleFallbackFormSubmit);
      }
    }

    function handleFallbackFormSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);

      // For now, just show a success message
      // In production, you'd send this to your server
      alert("Thank you for your message! We'll get back to you soon.");
      event.target.reset();
    }
  }

  addLoadingState() {
    const container = document.getElementById("hubspot-contact-form");

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

  setupFallbackForm() {
    const container = document.getElementById("hubspot-contact-form");

    if (container) {
      this.hideLoadingState();

      const fallbackHTML = `
        <div id="hubspot-fallback">
          <div class="mil-card" style="padding: 40px; background: #f8f9fa; border-radius: 8px;">
            <h4 class="mil-up mil-mb-30">Contact Us</h4>
            <p class="mil-up mil-mb-30">Please fill out the form below and we'll get back to you within 24 hours.</p>
            
            <form id="fallback-contact-form" class="mil-up">
              <div class="row">
                <div class="col-md-6">
                  <div class="mil-form-group mil-mb-30">
                    <input type="text" name="firstName" placeholder="First Name *" required class="mil-input" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mil-form-group mil-mb-30">
                    <input type="text" name="lastName" placeholder="Last Name *" required class="mil-input" />
                  </div>
                </div>
              </div>
              
              <div class="mil-form-group mil-mb-30">
                <input type="email" name="email" placeholder="Email Address *" required class="mil-input" />
              </div>
              
              <div class="mil-form-group mil-mb-30">
                <input type="text" name="company" placeholder="Company" class="mil-input" />
              </div>
              
              <div class="mil-form-group mil-mb-30">
                <select name="service" class="mil-input" required>
                  <option value="">Select Service *</option>
                  <option value="smartguest-ai">SmartGuest AI</option>
                  <option value="bizinsight-ai">BizInsight AI</option>
                  <option value="custom-ai">Custom AI Solutions</option>
                  <option value="ai-training">AI Training</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="mil-form-group mil-mb-30">
                <textarea name="message" placeholder="Tell us about your project or inquiry *" rows="5" required class="mil-input"></textarea>
              </div>
              
              <div class="mil-form-group mil-mb-30">
                <button type="submit" class="mil-button mil-icon-button mil-arrow-place">
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <style>
          .mil-input {
            width: 100%;
            padding: 15px 20px;
            border: 1px solid #e0e0e0;
            border-radius: 6px;
            font-size: 16px;
            transition: border-color 0.3s ease;
          }
          
          .mil-input:focus {
            outline: none;
            border-color: #007bff;
          }
          
          .mil-form-group {
            margin-bottom: 20px;
          }
        </style>
      `;

      container.innerHTML = fallbackHTML;

      // Setup form submission
      this.setupFallbackSubmission();
    }
  }

  setupFallbackSubmission() {
    const form = document.getElementById("fallback-contact-form");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validation
        if (!data.firstName || !data.lastName || !data.email || !data.message) {
          alert("Please fill in all required fields.");
          return;
        }

        // Show success message
        alert(
          "Thank you for your message! We'll get back to you within 24 hours."
        );
        form.reset();
      });
    }
  }

  showFallbackForm() {
    this.setupFallbackForm();
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new ContactFormEnhancer();
});

// Also initialize on page load
window.addEventListener("load", () => {
  if (!document.querySelector("#hubspot-contact-form[data-enhanced]")) {
    new ContactFormEnhancer();
  }
});
