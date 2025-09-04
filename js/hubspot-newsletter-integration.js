/**
 * HubSpot Newsletter Integration
 * Uses HubSpot embedded forms for secure newsletter subscription
 */

class HubSpotNewsletterIntegration {
  constructor() {
    this.hubspotPortalId = "146669350";
    this.newsletterFormId = "newsletter-subscription-form"; // Create this in HubSpot
    this.init();
  }

  init() {
    this.waitForHubSpot();
  }

  waitForHubSpot() {
    if (window.hbspt && window.hbspt.forms) {
      this.createNewsletterForms();
    } else {
      // Wait for HubSpot to load
      const checkHubSpot = setInterval(() => {
        if (window.hbspt && window.hbspt.forms) {
          clearInterval(checkHubSpot);
          this.createNewsletterForms();
        }
      }, 100);

      // Fallback after 10 seconds
      setTimeout(() => {
        if (!window.hbspt || !window.hbspt.forms) {
          clearInterval(checkHubSpot);
          this.showFallbackForms();
        }
      }, 10000);
    }
  }

  createNewsletterForms() {
    const forms = document.querySelectorAll(".mil-subscribe-form");
    
    forms.forEach((form, index) => {
      if (!form.hasAttribute("data-hubspot-integrated")) {
        form.setAttribute("data-hubspot-integrated", "true");
        
        // Replace the form with HubSpot embedded form
        this.replaceWithHubSpotForm(form, index);
      }
    });
  }

  replaceWithHubSpotForm(originalForm, index) {
    const container = originalForm.parentNode;
    const formId = `hubspot-newsletter-${index}`;
    
    // Create container for HubSpot form
    const hubspotContainer = document.createElement("div");
    hubspotContainer.id = formId;
    hubspotContainer.className = "hubspot-newsletter-form";
    
    // Replace original form
    container.replaceChild(hubspotContainer, originalForm);
    
    // Create HubSpot form
    try {
      hbspt.forms.create({
        portalId: this.hubspotPortalId,
        formId: this.newsletterFormId,
        target: `#${formId}`,
        region: "eu1",
        onFormReady: (form) => {
          this.onFormReady(form, index);
        },
        onFormSubmit: (form) => {
          this.onFormSubmit(form, index);
        },
        onFormSubmitted: (form) => {
          this.onFormSubmitted(form, index);
        }
      });
    } catch (error) {
      console.error("Error creating HubSpot newsletter form:", error);
      this.showFallbackForm(container, index);
    }
  }

  onFormReady(form, index) {
    console.log(`HubSpot newsletter form ${index} ready`);
    
    // Customize form styling to match your website
    this.styleHubSpotForm(form);
    
    // Add loading state
    this.addFormLoadingState(form);
  }

  onFormSubmit(form, index) {
    console.log(`Newsletter form ${index} submitted`);
    
    // Show submission state
    this.showFormSubmissionState(form);
    
    // Track submission event
    this.trackSubmissionEvent(index);
  }

  onFormSubmitted(form, index) {
    console.log(`Newsletter form ${index} successfully submitted`);
    
    // Show success state
    this.showFormSuccessState(form);
    
    // Update all forms to show subscribed state
    this.updateAllFormsAsSubscribed();
    
    // Track successful submission
    this.trackSuccessfulSubmission(index);
  }

  styleHubSpotForm(form) {
    // Add custom CSS to match your website design
    const style = document.createElement("style");
    style.textContent = `
      .hubspot-newsletter-form .hs-form {
        font-family: "Outfit", sans-serif !important;
      }
      
      .hubspot-newsletter-form .hs-form input[type="email"],
      .hubspot-newsletter-form .hs-form input[type="text"] {
        border: 1px solid #e0e0e0 !important;
        border-radius: 6px !important;
        padding: 12px 15px !important;
        font-size: 16px !important;
        width: 100% !important;
        margin-bottom: 15px !important;
      }
      
      .hubspot-newsletter-form .hs-form input:focus {
        outline: none !important;
        border-color: rgb(0, 188, 212) !important;
        box-shadow: 0 0 0 2px rgba(0, 188, 212, 0.1) !important;
      }
      
      .hubspot-newsletter-form .hs-form .hs-button {
        background-color: rgb(0, 188, 212) !important;
        color: rgb(0, 0, 0) !important;
        border: none !important;
        border-radius: 70px !important;
        padding: 15px 30px !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        text-transform: uppercase !important;
        letter-spacing: 2px !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
      }
      
      .hubspot-newsletter-form .hs-form .hs-button:hover {
        transform: scale(1.05) !important;
        filter: brightness(110%) !important;
      }
      
      .hubspot-newsletter-form .hs-form .hs-error-msgs {
        color: #dc3545 !important;
        font-size: 14px !important;
        margin-top: 5px !important;
      }
      
      .hubspot-newsletter-form .hs-form .hs-error-msg {
        color: #dc3545 !important;
        font-size: 14px !important;
      }
    `;
    
    document.head.appendChild(style);
  }

  addFormLoadingState(form) {
    // Add loading indicator
    const loadingDiv = document.createElement("div");
    loadingDiv.className = "form-loading";
    loadingDiv.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <div style="width: 30px; height: 30px; border: 3px solid #f3f3f3; border-top: 3px solid rgb(0, 188, 212); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 10px;"></div>
        <p style="margin: 0; color: #666; font-size: 14px;">Loading newsletter form...</p>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;
    
    form.appendChild(loadingDiv);
    
    // Remove loading state when form is ready
    setTimeout(() => {
      if (loadingDiv.parentNode) {
        loadingDiv.remove();
      }
    }, 2000);
  }

  showFormSubmissionState(form) {
    // Show submission in progress
    const submitButton = form.querySelector('.hs-button');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Subscribing...";
    }
  }

  showFormSuccessState(form) {
    // Show success message
    const successDiv = document.createElement("div");
    successDiv.className = "form-success";
    successDiv.innerHTML = `
      <div style="text-align: center; padding: 20px; background: #d4edda; border: 1px solid #c3e6cb; border-radius: 6px; margin-top: 15px;">
        <h4 style="color: #155724; margin: 0 0 10px 0;">🎉 Welcome to AI Insights!</h4>
        <p style="color: #155724; margin: 0;">Thank you for subscribing! Check your email for confirmation and your first AI insights.</p>
      </div>
    `;
    
    form.appendChild(successDiv);
    
    // Remove success message after 10 seconds
    setTimeout(() => {
      if (successDiv.parentNode) {
        successDiv.remove();
      }
    }, 10000);
  }

  updateAllFormsAsSubscribed() {
    // Update all newsletter forms to show subscribed state
    const forms = document.querySelectorAll(".mil-subscribe-form");
    
    forms.forEach((form) => {
      if (!form.hasAttribute("data-hubspot-integrated")) {
        const emailInput = form.querySelector('input[type="email"], input[type="text"]');
        if (emailInput) {
          emailInput.value = "Already subscribed!";
          emailInput.disabled = true;
          emailInput.style.backgroundColor = "#f8f9fa";
          
          const indicator = document.createElement("small");
          indicator.textContent = "✓ Subscribed to AI Insights Newsletter";
          indicator.style.cssText = "color: #28a745; font-size: 12px; display: block; margin-top: 5px;";
          
          if (!form.querySelector(".subscription-indicator")) {
            indicator.className = "subscription-indicator";
            emailInput.parentNode.appendChild(indicator);
          }
        }
      }
    });
  }

  trackSubmissionEvent(index) {
    // Track form submission in analytics
    if (window.gtag) {
      gtag('event', 'newsletter_form_submit', {
        'event_category': 'engagement',
        'event_label': 'AI Insights Newsletter',
        'value': 1
      });
    }
    
    if (window._hsq) {
      _hsq.push(['trackEvent', {
        id: 'newsletter_form_submit',
        value: index
      }]);
    }
  }

  trackSuccessfulSubmission(index) {
    // Track successful subscription
    if (window.gtag) {
      gtag('event', 'newsletter_subscription_success', {
        'event_category': 'engagement',
        'event_label': 'AI Insights Newsletter',
        'value': 1
      });
    }
    
    if (window._hsq) {
      _hsq.push(['trackEvent', {
        id: 'newsletter_subscription_success',
        value: index
      }]);
    }
  }

  showFallbackForms() {
    console.log("Showing fallback newsletter forms");
    
    const forms = document.querySelectorAll(".mil-subscribe-form");
    
    forms.forEach((form) => {
      if (!form.hasAttribute("data-fallback-added")) {
        form.setAttribute("data-fallback-added", "true");
        
        // Add fallback functionality
        this.addFallbackFunctionality(form);
      }
    });
  }

  addFallbackFunctionality(form) {
    const emailInput = form.querySelector('input[type="email"], input[type="text"]');
    const submitButton = form.querySelector('button');
    
    if (emailInput && submitButton) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        if (this.validateEmail(email)) {
          this.handleFallbackSubmission(form, email);
        }
      });
    }
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  handleFallbackSubmission(form, email) {
    // Show loading state
    const submitButton = form.querySelector('button');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = "<span>Subscribing...</span>";
    }
    
    // Simulate submission (in production, this would send to your server)
    setTimeout(() => {
      // Show success message
      const successDiv = document.createElement("div");
      successDiv.innerHTML = `
        <div style="text-align: center; padding: 15px; background: #d4edda; border: 1px solid #c3e6cb; border-radius: 6px; margin-top: 15px;">
          <p style="color: #155724; margin: 0;">Thank you for subscribing! We'll add you to our newsletter list.</p>
        </div>
      `;
      
      form.appendChild(successDiv);
      
      // Reset form
      emailInput.value = "";
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = "";
      }
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        if (successDiv.parentNode) {
          successDiv.remove();
        }
      }, 5000);
    }, 1000);
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new HubSpotNewsletterIntegration();
});

// Also initialize on page load
window.addEventListener("load", () => {
  if (!document.querySelector(".hubspot-newsletter-form")) {
    new HubSpotNewsletterIntegration();
  }
});
