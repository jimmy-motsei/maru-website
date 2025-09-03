/**
 * Newsletter Form Handler
 * Handles newsletter subscription forms across all pages
 */

class NewsletterFormHandler {
  constructor() {
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

  handleSubmit(e, emailInput) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!this.validateEmail(emailInput)) {
      return;
    }

    // Show loading state
    this.showLoading(emailInput);

    // Simulate API call (replace with actual email service integration)
    setTimeout(() => {
      this.handleSuccess(emailInput, email);
    }, 1000);
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
    // Store subscription
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
  }

  showSuccess(emailInput) {
    const successDiv = document.createElement("div");
    successDiv.className = "newsletter-success";
    successDiv.textContent = "Thank you for subscribing!";
    successDiv.style.cssText =
      "color: #28a745; font-size: 14px; margin-top: 5px;";

    emailInput.parentNode.appendChild(successDiv);

    // Remove success message after 3 seconds
    setTimeout(() => {
      if (successDiv.parentNode) {
        successDiv.remove();
      }
    }, 3000);
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
        indicator.textContent = "✓ Subscribed";
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
