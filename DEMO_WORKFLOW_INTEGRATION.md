# Demo Request Workflow Integration Guide

## Overview

This guide provides comprehensive instructions for integrating the demo request workflow with backend services, email notifications, CRM systems, and calendar management.

## Current Implementation

### Frontend Components

- **Form**: Collects prospect information and business details
- **Calendar Integration**: Calendly widget for scheduling
- **Validation**: Client-side form validation
- **Success Handling**: User feedback and calendar redirect

### Data Collection

The form captures the following information:

- **Personal**: First Name, Last Name, Email, Phone
- **Business**: Company Name, Job Title, Industry, Company Size
- **Demo Preferences**: Service Selection, Business Challenges
- **Timing**: Calendar booking through Calendly

## Backend Integration Options

### 1. Email Service Integration

#### Option A: SendGrid

```javascript
// Add to request-demo.html
<script src="https://cdn.jsdelivr.net/npm/@sendgrid/mail@7.7.0"></script>;

// Update form submission
async function submitDemoRequest(formData) {
  try {
    const response = await fetch("/api/demo-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Show success message
      showSuccessMessage();
      // Open calendar
      openCalendlyWidget(formData);
    }
  } catch (error) {
    console.error("Error submitting demo request:", error);
  }
}
```

#### Option B: Mailgun

```javascript
// Server-side (Node.js/Express)
const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

app.post("/api/demo-request", async (req, res) => {
  const { firstName, lastName, email, company, service } = req.body;

  const emailData = {
    from: "noreply@aurellius.com",
    to: "sales@aurellius.com",
    subject: `New Demo Request: ${service}`,
    html: `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Service:</strong> ${service}</p>
    `,
  };

  try {
    await mailgun.messages().send(emailData);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
});
```

### 2. CRM Integration

#### Option A: HubSpot

```javascript
// Add HubSpot tracking code
<script
  type="text/javascript"
  id="hs-script-loader"
  async
  defer
  src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"
></script>;

// Form submission with HubSpot
async function submitToHubSpot(formData) {
  const hubspotData = {
    properties: {
      firstname: formData.firstName,
      lastname: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      jobtitle: formData.jobTitle,
      industry: formData.industry,
      company_size: formData.companySize,
      service_interest: formData.service,
      business_challenge: formData.challenge,
    },
    context: {
      pageUri: window.location.href,
      pageName: "Demo Request Page",
    },
  };

  try {
    const response = await fetch("/api/hubspot/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hubspotData),
    });
    return response.ok;
  } catch (error) {
    console.error("HubSpot integration error:", error);
    return false;
  }
}
```

#### Option B: Salesforce

```javascript
// Salesforce integration
async function submitToSalesforce(formData) {
  const salesforceData = {
    FirstName: formData.firstName,
    LastName: formData.lastName,
    Email: formData.email,
    Phone: formData.phone,
    Company: formData.company,
    Title: formData.jobTitle,
    Industry: formData.industry,
    Company_Size__c: formData.companySize,
    LeadSource: "Website Demo Request",
    Description: `Service Interest: ${formData.service}\nChallenge: ${formData.challenge}`,
  };

  try {
    const response = await fetch("/api/salesforce/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(salesforceData),
    });
    return response.ok;
  } catch (error) {
    console.error("Salesforce integration error:", error);
    return false;
  }
}
```

### 3. Calendar Integration Enhancement

#### Calendly Webhooks

```javascript
// Server-side webhook handler
app.post("/api/calendly/webhook", async (req, res) => {
  const { event_type, payload } = req.body;

  if (event_type === "invitee.created") {
    const { invitee, event } = payload;

    // Update CRM with booking information
    await updateCRMWithBooking({
      email: invitee.email,
      name: invitee.name,
      eventDate: event.start_time,
      eventType: event.name,
      questions: invitee.questions_and_answers,
    });

    // Send confirmation email
    await sendConfirmationEmail(invitee, event);
  }

  res.json({ success: true });
});
```

### 4. Database Storage

#### MongoDB Schema

```javascript
// Demo Request Schema
const demoSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  company: { type: String, required: true },
  jobTitle: String,
  industry: { type: String, required: true },
  companySize: { type: String, required: true },
  service: { type: String, required: true },
  challenge: String,
  status: {
    type: String,
    enum: ["pending", "scheduled", "completed", "cancelled"],
    default: "pending",
  },
  calendlyEventId: String,
  calendlyEventUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
```

#### PostgreSQL Schema

```sql
CREATE TABLE demo_requests (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20),
  company VARCHAR(255) NOT NULL,
  job_title VARCHAR(100),
  industry VARCHAR(100) NOT NULL,
  company_size VARCHAR(50) NOT NULL,
  service VARCHAR(100) NOT NULL,
  challenge TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  calendly_event_id VARCHAR(255),
  calendly_event_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Implementation Steps

### Phase 1: Basic Email Integration

1. Set up SendGrid or Mailgun account
2. Create API endpoint for form submission
3. Implement email templates
4. Test email delivery

### Phase 2: CRM Integration

1. Choose CRM platform (HubSpot, Salesforce, etc.)
2. Set up API credentials
3. Create contact/lead creation endpoints
4. Implement data mapping

### Phase 3: Calendar Enhancement

1. Set up Calendly webhooks
2. Create booking confirmation system
3. Implement calendar sync
4. Add reminder emails

### Phase 4: Analytics & Tracking

1. Set up Google Analytics events
2. Implement conversion tracking
3. Create dashboard for demo requests
4. Set up reporting

## Email Templates

### Demo Request Notification

```html
<!DOCTYPE html>
<html>
  <head>
    <title>New Demo Request</title>
  </head>
  <body>
    <h2>New Demo Request Received</h2>

    <h3>Contact Information</h3>
    <p><strong>Name:</strong> {{firstName}} {{lastName}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Phone:</strong> {{phone}}</p>

    <h3>Business Information</h3>
    <p><strong>Company:</strong> {{company}}</p>
    <p><strong>Job Title:</strong> {{jobTitle}}</p>
    <p><strong>Industry:</strong> {{industry}}</p>
    <p><strong>Company Size:</strong> {{companySize}}</p>

    <h3>Demo Details</h3>
    <p><strong>Service Interest:</strong> {{service}}</p>
    <p><strong>Business Challenge:</strong> {{challenge}}</p>

    <p><em>Submitted on {{date}}</em></p>
  </body>
</html>
```

### Confirmation Email

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Demo Request Confirmed</title>
  </head>
  <body>
    <h2>Thank you for your demo request!</h2>

    <p>Hi {{firstName}},</p>

    <p>
      We've received your request for a demo of our {{service}} solution. Our
      team will review your information and get back to you within 24 hours to
      confirm your appointment.
    </p>

    <h3>What to expect:</h3>
    <ul>
      <li>Personalized demo tailored to your business needs</li>
      <li>Q&A session with our AI specialists</li>
      <li>Custom implementation roadmap</li>
      <li>Pricing and next steps</li>
    </ul>

    <p>
      If you have any questions in the meantime, feel free to reply to this
      email.
    </p>

    <p>Best regards,<br />The Aurellius Team</p>
  </body>
</html>
```

## Security Considerations

1. **Form Validation**: Implement server-side validation
2. **Rate Limiting**: Prevent spam submissions
3. **Data Encryption**: Encrypt sensitive information
4. **GDPR Compliance**: Implement data consent and deletion
5. **API Security**: Use authentication for all endpoints

## Testing Checklist

- [ ] Form validation (client and server-side)
- [ ] Email delivery and formatting
- [ ] CRM data creation
- [ ] Calendar integration
- [ ] Success/error handling
- [ ] Mobile responsiveness
- [ ] Loading states
- [ ] Analytics tracking

## Monitoring & Analytics

### Key Metrics to Track

- Form completion rate
- Email open/click rates
- Calendar booking conversion
- Demo attendance rate
- Lead quality scores

### Tools

- Google Analytics 4
- Hotjar for user behavior
- Email service analytics
- CRM reporting
- Custom dashboard

## Next Steps

1. **Choose Integration Stack**: Select email service, CRM, and database
2. **Set Up Development Environment**: Create staging environment
3. **Implement Phase 1**: Basic email integration
4. **Test Thoroughly**: End-to-end testing
5. **Deploy to Production**: Go live with monitoring
6. **Optimize**: Based on analytics and feedback

This comprehensive workflow will ensure efficient lead capture, proper follow-up, and seamless integration with your business processes.
