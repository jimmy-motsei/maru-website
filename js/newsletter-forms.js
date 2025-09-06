/**
 * Newsletter Form Handler - HubSpot Integrated
 * Handles newsletter subscription forms and integrates with HubSpot
 */

class NewsletterFormHandler {
  constructor() {
    // Prevent multiple instances
    if (window.MaruNewsletterHandler && window.MaruNewsletterHandler !== this) {
      return window.MaruNewsletterHandler;
    }
    
    this.hubspotPortalId = "146669350"; // Your HubSpot Portal ID
    this.newsletterFormId = "newsletter-subscription-form"; // We'll create this in HubSpot
    this.initialized = false;
    this.init();
  }

  init() {
    if (this.initialized) {
      return;
    }
    this.setupNewsletterForms();
    this.checkExistingSubscriptions();
    this.initialized = true;
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
      
      // Provide more specific error messages
      let errorMessage = "Subscription failed. Please try again.";
      if (error.message.includes('HubSpot not loaded')) {
        errorMessage = "Form service is loading. Please try again in a moment.";
      } else if (error.message.includes('Server error')) {
        errorMessage = "Server temporarily unavailable. Please try again later.";
      } else if (error.message.includes('Network')) {
        errorMessage = "Network error. Please check your connection and try again.";
      }
      
      this.handleError(emailInput, errorMessage);
    }
  }

  async submitToHubSpot(email) {
    // Use HubSpot's secure client-side submission method
    if (!window.hbspt || !window.hbspt.forms) {
      throw new Error("HubSpot not loaded");
    }

    return new Promise((resolve, reject) => {
      try {
        // Create a temporary form element for HubSpot submission
        const tempForm = document.createElement('div');
        tempForm.style.display = 'none';
        document.body.appendChild(tempForm);

        // Create HubSpot form for secure submission
        hbspt.forms.create({
          portalId: this.hubspotPortalId,
          formId: "newsletter-subscription-form", // Replace with actual form ID
          target: tempForm,
          onFormSubmitted: () => {
            document.body.removeChild(tempForm);
            resolve({ success: true });
          },
          onFormSubmitError: (error) => {
            document.body.removeChild(tempForm);
            reject(error);
          },
          onFormReady: (form) => {
            // Pre-fill the email field
            const emailField = form.querySelector('input[name="email"]');
            if (emailField) {
              emailField.value = email;
              // Auto-submit the form
              form.querySelector('form').submit();
            } else {
              // Fallback: submit via server endpoint
              this.submitToServerEndpoint(email).then(resolve).catch(reject);
            }
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async submitToServerEndpoint(email) {
    // Submit to your server endpoint that handles HubSpot integration securely
    // This is the proper way to handle API tokens - server-side only
    const response = await fetch('/api/newsletter-subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        source: 'website_newsletter_form',
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
  }

  validateEmail(emailInput) {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com'];

    if (!email) {
      this.showError(emailInput, "Please enter your email address.");
      emailInput.setAttribute('aria-invalid', 'true');
      return false;
    }

    if (!emailRegex.test(email)) {
      this.showError(emailInput, "Please enter a valid email address (e.g., name@example.com).");
      emailInput.setAttribute('aria-invalid', 'true');
      return false;
    }

    // Check for common typos in email domains
    const emailParts = email.split('@');
    if (emailParts.length === 2) {
      const domain = emailParts[1].toLowerCase();
      const suggestions = this.getSuggestions(domain, commonDomains);
      
      if (suggestions.length > 0) {
        this.showSuggestion(emailInput, `Did you mean ${emailParts[0]}@${suggestions[0]}?`);
      }
    }

    // Clear any previous validation states
    emailInput.setAttribute('aria-invalid', 'false');
    this.clearValidation(emailInput);
    return true;
  }

  getSuggestions(domain, commonDomains) {
    const suggestions = [];
    const typos = {
      'gmial.com': 'gmail.com',
      'gmai.com': 'gmail.com',
      'gmail.co': 'gmail.com',
      'yahooo.com': 'yahoo.com',
      'yaho.com': 'yahoo.com',
      'hotmial.com': 'hotmail.com',
      'hotmai.com': 'hotmail.com',
      'outlok.com': 'outlook.com',
      'outloo.com': 'outlook.com'
    };

    if (typos[domain]) {
      suggestions.push(typos[domain]);
    }

    return suggestions;
  }

  showSuggestion(emailInput, suggestion) {
    this.clearValidation(emailInput);
    
    const suggestionDiv = document.createElement("div");
    suggestionDiv.className = "email-suggestion";
    suggestionDiv.innerHTML = `
      <span style="color: #007bff; font-size: 14px; margin-top: 5px; display: block;">
        ${suggestion} 
        <button type="button" class="suggestion-btn" style="background: none; border: none; color: #007bff; text-decoration: underline; cursor: pointer; font-size: 14px;">
          Use this
        </button>
      </span>
    `;

    emailInput.parentNode.appendChild(suggestionDiv);

    // Add click handler for suggestion
    suggestionDiv.querySelector('.suggestion-btn').addEventListener('click', () => {
      const suggestedEmail = suggestion.match(/[\w._%+-]+@[\w.-]+\.[A-Za-z]{2,}/)[0];
      emailInput.value = suggestedEmail;
      suggestionDiv.remove();
      this.validateEmail(emailInput);
    });
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
    
    const suggestionDiv = emailInput.parentNode.querySelector(".email-suggestion");
    if (suggestionDiv) {
      suggestionDiv.remove();
    }
    
    emailInput.style.borderColor = "";
    emailInput.removeAttribute('aria-invalid');
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

// Global singleton to prevent multiple initializations
window.MaruNewsletterHandler = window.MaruNewsletterHandler || null;

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  if (!window.MaruNewsletterHandler) {
    window.MaruNewsletterHandler = new NewsletterFormHandler();
  }
});

// Also initialize on page load for single-page apps
window.addEventListener("load", () => {
  if (!window.MaruNewsletterHandler && !document.querySelector(".mil-subscribe-form[data-initialized]")) {
    window.MaruNewsletterHandler = new NewsletterFormHandler();
  }
});

// For Swup page transitions
document.addEventListener('swup:contentReplaced', () => {
  if (window.MaruNewsletterHandler) {
    window.MaruNewsletterHandler.setupNewsletterForms();
  }
});
