/**
 * Newsletter Form Handler - HubSpot Integrated
 * Handles newsletter subscription forms and integrates with HubSpot
 */

class NewsletterFormHandler {
  constructor() {
    this.hubspotPortalId = "146669350"; // Your HubSpot Portal ID
    this.newsletterFormId = "newsletter-subscription-form"; // We'll create this in HubSpot
    this.init();
  }

  init() {
    this.setupNewsletterForms();
    this.checkExistingSubscriptions();
  }

  setupNewsletterForms() {
    const forms = document.querySelectorAll(".mil-subscribe-form");

    forms.forEach((form) => {
      const emailInput = form.querySelector(
        'input[type="email"], input[type="text"]'
      );

      if (emailInput && !form.hasAttribute("data-initialized")) {
        form.setAttribute("data-initialized", "true");

        form.addEventListener("submit", (e) =>
          this.handleSubmit(e, emailInput)
        );

        // Add input validation
        emailInput.addEventListener("blur", () =>
          this.validateEmail(emailInput)
        );
        emailInput.addEventListener("input", () =>
          this.clearValidation(emailInput)
        );
      }
    });
  }

  async handleSubmit(e, emailInput) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!this.validateEmail(emailInput)) {
      return;
    }

    // Show loading state
    this.showLoading(emailInput);

    try {
      // Submit to HubSpot
      await this.submitToHubSpot(email);
      this.handleSuccess(emailInput, email);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      this.handleError(emailInput, "Subscription failed. Please try again.");
    }
  }

  async submitToHubSpot(email) {
    // Check if HubSpot is available
    if (!window.hbspt || !window.hbspt.forms) {
      throw new Error("HubSpot not loaded");
    }

    // Create a temporary form submission to HubSpot
    return new Promise((resolve, reject) => {
      try {
        // Use HubSpot's form submission method
        const formData = {
          email: email,
          contact_type: "Newsletter Subscriber",
          lead_source: "Website Newsletter Form",
          subscription_date: new Date().toISOString(),
          ai_insights_newsletter: "true",
        };

        // Submit to HubSpot using their API
        this.submitToHubSpotAPI(formData).then(resolve).catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  async submitToHubSpotAPI(formData) {
    // HubSpot API endpoint for creating contacts
    const url = `https://api.hubapi.com/crm/v3/objects/contacts`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getHubSpotToken()}`,
      },
      body: JSON.stringify({
        properties: {
          email: formData.email,
          contact_type: formData.contact_type,
          lead_source: formData.lead_source,
          subscription_date: formData.subscription_date,
          ai_insights_newsletter: formData.ai_insights_newsletter,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HubSpot API error: ${response.status}`);
    }

    return await response.json();
  }

  getHubSpotToken() {
    // This should be stored securely - for now, we'll use a placeholder
    // You'll need to get this from your HubSpot account
    return process.env.HUBSPOT_ACCESS_TOKEN || "YOUR_HUBSPOT_ACCESS_TOKEN";
  }

  validateEmail(emailInput) {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      this.showError(emailInput, "Please enter your email address.");
      return false;
    }

    if (!emailRegex.test(email)) {
      this.showError(emailInput, "Please enter a valid email address.");
      return false;
    }

    return true;
  }

  showError(emailInput, message) {
    this.clearValidation(emailInput);

    const errorDiv = document.createElement("div");
    errorDiv.className = "newsletter-error";
    errorDiv.textContent = message;
    errorDiv.style.cssText =
      "color: #dc3545; font-size: 14px; margin-top: 5px;";

    emailInput.parentNode.appendChild(errorDiv);
    emailInput.style.borderColor = "#dc3545";
  }

  clearValidation(emailInput) {
    const errorDiv = emailInput.parentNode.querySelector(".newsletter-error");
    if (errorDiv) {
      errorDiv.remove();
    }
    emailInput.style.borderColor = "";
  }

  showLoading(emailInput) {
    const button = emailInput.parentNode.querySelector("button");
    if (button) {
      button.disabled = true;
      button.innerHTML = "<span>Subscribing...</span>";
    }
  }

  handleSuccess(emailInput, email) {
    // Store subscription locally as backup
    localStorage.setItem("newsletter-subscribed", email);

    // Show success message
    this.showSuccess(emailInput);

    // Reset form
    emailInput.value = "";

    // Reset button
    const button = emailInput.parentNode.querySelector("button");
    if (button) {
      button.disabled = false;
      button.innerHTML = "";
    }

    // Update all forms on the page
    this.updateAllForms(email);

    // Track subscription event
    this.trackSubscriptionEvent(email);
  }

  handleError(emailInput, message) {
    // Reset button
    const button = emailInput.parentNode.querySelector("button");
    if (button) {
      button.disabled = false;
      button.innerHTML = "";
    }

    // Show error message
    this.showError(emailInput, message);
  }

  showSuccess(emailInput) {
    const successDiv = document.createElement("div");
    successDiv.className = "newsletter-success";
    successDiv.textContent =
      "Thank you for subscribing! Check your email for confirmation.";
    successDiv.style.cssText =
      "color: #28a745; font-size: 14px; margin-top: 5px;";

    emailInput.parentNode.appendChild(successDiv);

    // Remove success message after 5 seconds
    setTimeout(() => {
      if (successDiv.parentNode) {
        successDiv.remove();
      }
    }, 5000);
  }

  trackSubscriptionEvent(email) {
    // Track subscription in analytics if available
    if (window.gtag) {
      gtag("event", "newsletter_signup", {
        event_category: "engagement",
        event_label: "AI Insights Newsletter",
        value: 1,
      });
    }

    // Track in HubSpot analytics
    if (window._hsq) {
      _hsq.push([
        "trackEvent",
        {
          id: "newsletter_signup",
          value: email,
        },
      ]);
    }
  }

  updateAllForms(email) {
    const forms = document.querySelectorAll(".mil-subscribe-form");

    forms.forEach((form) => {
      const emailInput = form.querySelector(
        'input[type="email"], input[type="text"]'
      );
      if (emailInput) {
        emailInput.value = email;
        emailInput.disabled = true;
        emailInput.placeholder = "Already subscribed!";

        // Add a small indicator
        const indicator = document.createElement("small");
        indicator.textContent = "✓ Subscribed to AI Insights";
        indicator.style.cssText =
          "color: #28a745; font-size: 12px; display: block; margin-top: 5px;";

        if (!form.querySelector(".subscription-indicator")) {
          indicator.className = "subscription-indicator";
          emailInput.parentNode.appendChild(indicator);
        }
      }
    });
  }

  checkExistingSubscriptions() {
    const subscribedEmail = localStorage.getItem("newsletter-subscribed");

    if (subscribedEmail) {
      this.updateAllForms(subscribedEmail);
    }
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new NewsletterFormHandler();
});

// Also initialize on page load for single-page apps
window.addEventListener("load", () => {
  if (!document.querySelector(".mil-subscribe-form[data-initialized]")) {
    new NewsletterFormHandler();
  }
});
