# 🚀 Cloudflare Pages Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ Site Status (Already Complete)
- [x] All broken links fixed
- [x] All images optimized and loading correctly
- [x] Domain references updated to maruonline.com
- [x] Legal pages created (POPIA compliant)
- [x] Calendly integration ready
- [x] All branding updated to 'maru'
- [x] Site fully tested locally

---

## 🌐 Step 1: Domain & DNS Setup

### 1.1 Domain Configuration
- **Domain:** maruonline.com
- **Registrar:** (Your domain registrar)
- **DNS Provider:** Cloudflare (recommended)

### 1.2 DNS Records Setup
```
Type    Name    Content
A       @       192.0.2.1 (placeholder - will be updated by Cloudflare)
CNAME   www     maruonline.com
```

### 1.3 Domain Integration Options

**Option A: Cloudflare DNS (Recommended)**
1. Transfer domain to Cloudflare or use Cloudflare as DNS provider
2. Automatic SSL certificate provisioning
3. Built-in CDN and security features
4. Easy integration with Cloudflare Pages

**Option B: External DNS Provider**
1. Point nameservers to Cloudflare
2. Add required DNS records manually
3. Wait for propagation (24-48 hours)

---

## ☁️ Step 2: Cloudflare Pages Deployment

### 2.1 Access Cloudflare Dashboard
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Sign in to your Cloudflare account
3. Navigate to **Pages** in the left sidebar

### 2.2 Create New Project
1. Click **"Create a project"**
2. Select **"Connect to Git"**
3. Choose **GitHub** as your Git provider
4. Authorize Cloudflare to access your GitHub account

### 2.3 Connect Repository
1. Select repository: `Jimmy-Motsei/Aurellius-website`
2. Click **"Begin setup"**

### 2.4 Configure Build Settings
```
Project name: maru-website
Production branch: main
Framework preset: None (static site)
Build command: (leave empty)
Build output directory: . (root directory)
```

### 2.5 Environment Variables (Optional)
```
NODE_VERSION: 18
```

### 2.6 Deploy Settings
- **Auto-deploy:** Enabled
- **Preview deployments:** Enabled
- Click **"Save and Deploy"**

---

## 📧 Step 3: Email & Form Hosting Setup

### 3.1 Email Hosting Solutions

**Option A: Google Workspace (Recommended)**
```
Cost: $6/user/month
Features: Professional email, Google Drive, Calendar
Setup: workspace.google.com
Email: jimmy@maruonline.com
```

**Option B: Microsoft 365 Business**
```
Cost: $6/user/month
Features: Outlook, OneDrive, Teams
Setup: microsoft365.com
Email: jimmy@maruonline.com
```

**Option C: Cloudflare Email Routing (Free)**
```
Cost: Free
Features: Email forwarding only
Setup: Cloudflare dashboard → Email → Email Routing
Limitations: No inbox, forwarding only
```

### 3.2 Form Hosting Solutions

**Option A: Netlify Forms (Free)**
```
Cost: Free (100 submissions/month)
Features: Spam protection, email notifications
Integration: Automatic with Netlify hosting
```

**Option B: Formspree (Recommended)**
```
Cost: Free (50 submissions/month), $15/month for more
Features: Spam protection, file uploads, webhooks
Integration: Simple form action URLs
```

**Option C: Cloudflare Forms**
```
Cost: Free (1000 submissions/month)
Features: Built-in spam protection
Integration: Automatic with Cloudflare Pages
```

### 3.3 Form Integration Examples

**Contact Form (Formspree)**
```html
<form action="https://formspree.io/f/jimmy@maruonline.com" method="POST">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

**Demo Request Form (Formspree)**
```html
<form action="https://formspree.io/f/demo@maruonline.com" method="POST">
  <input type="text" name="company" placeholder="Company Name" required>
  <input type="email" name="email" placeholder="Business Email" required>
  <select name="service" required>
    <option value="">Select Service</option>
    <option value="smartguest">SmartGuest AI</option>
    <option value="bizinsight">BizInsight AI</option>
    <option value="workshops">AI Mastery Workshops</option>
    <option value="custom">Custom AI Solutions</option>
  </select>
  <textarea name="requirements" placeholder="Tell us about your needs"></textarea>
  <button type="submit">Request Demo</button>
</form>
```

---

## 🎯 Step 4: CRM Integration

### 4.1 CRM Recommendations

**Option A: HubSpot (Recommended for SMBs)**
```
Cost: Free (2000 contacts), $45/month (Professional)
Features: 
- Contact management
- Email marketing
- Lead scoring
- Sales pipeline
- Marketing automation
- Analytics and reporting
- South African support
```

**Option B: Pipedrive (Sales-focused)**
```
Cost: $15/month (Essential), $29/month (Advanced)
Features:
- Sales pipeline management
- Deal tracking
- Email integration
- Mobile app
- Simple interface
```

**Option C: Freshworks CRM (All-in-one)**
```
Cost: $15/month (Growth), $39/month (Pro)
Features:
- CRM + Helpdesk
- Email marketing
- Chat support
- Analytics
- Mobile apps
```

**Option D: Zoho CRM (Budget-friendly)**
```
Cost: $14/month (Standard), $23/month (Professional)
Features:
- Comprehensive CRM
- Marketing automation
- Analytics
- Mobile apps
- Good for growing businesses
```

### 4.2 HubSpot Integration Setup

#### 4.2.1 HubSpot Account Setup
1. Go to [hubspot.com](https://hubspot.com)
2. Sign up for free account
3. Complete company profile setup
4. Configure email settings

#### 4.2.2 Form Integration
```html
<!-- HubSpot Form Embed Code -->
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "YOUR_PORTAL_ID",
    formId: "YOUR_FORM_ID"
  });
</script>
```

#### 4.2.3 Contact Form Integration
1. Create form in HubSpot
2. Get embed code
3. Replace existing contact forms
4. Set up email notifications

#### 4.2.4 Lead Tracking
1. Set up lead scoring rules
2. Configure email sequences
3. Create follow-up workflows
4. Set up sales pipeline

### 4.3 CRM Workflow Setup

**Lead Capture Workflow:**
1. **Website Form Submission** → HubSpot contact created
2. **Email Notification** → Sales team notified
3. **Lead Scoring** → Automatic scoring based on form data
4. **Follow-up Email** → Automated welcome email
5. **Sales Assignment** → Lead assigned to sales rep
6. **Follow-up Task** → Calendar reminder for sales call

**Demo Request Workflow:**
1. **Demo Form Submission** → Contact + deal created
2. **Calendly Integration** → Booking link sent
3. **Meeting Scheduled** → Deal stage updated
4. **Post-meeting Follow-up** → Next steps email
5. **Proposal Stage** → Deal moved to proposal stage

---

## 📅 Step 5: Calendly Integration

### 5.1 Calendly Account Setup
1. Go to [calendly.com](https://calendly.com)
2. Create account with: jimmy@maruonline.com
3. Set up your availability and meeting types

### 5.2 Calendly Configuration
1. **Meeting Types:**
   - Demo Consultation (30 min)
   - Strategy Session (60 min)
   - Technical Review (45 min)

2. **Calendar Integration:**
   - Connect your email calendar
   - Set up buffer times
   - Configure timezone (SAST)

### 5.3 CRM Integration
**HubSpot + Calendly Integration:**
1. Install Calendly for HubSpot
2. Configure meeting types
3. Set up contact creation
4. Configure deal updates

### 5.4 Update Website Integration
1. In `request-demo.html`, update Calendly widget:
   ```html
   <div class="calendly-inline-widget" 
        data-url="https://calendly.com/jimmy-maruonline/demo-consultation"
        style="min-width:320px;height:700px;">
   </div>
   ```

---

## 🔧 Step 6: Advanced Integrations

### 6.1 Analytics Setup
**Google Analytics 4:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**HubSpot Analytics:**
```html
<!-- HubSpot Analytics -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
```

### 6.2 Chat Integration
**HubSpot Live Chat:**
```html
<!-- HubSpot Live Chat -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
```

**Alternative: Tawk.to (Free)**
```html
<!-- Tawk.to Live Chat -->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_TAWK_ID/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
```

---

## 🔍 Step 7: Post-Deployment Testing

### 7.1 Site Functionality Test
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact forms functional
- [ ] Calendly integration working
- [ ] All images loading
- [ ] Mobile responsiveness

### 7.2 Form & CRM Testing
- [ ] Contact form submissions working
- [ ] Demo request form functional
- [ ] CRM contact creation
- [ ] Email notifications received
- [ ] Lead scoring working
- [ ] Follow-up emails sent

### 7.3 Performance Testing
- [ ] Page load speed < 3 seconds
- [ ] Google PageSpeed Insights score > 90
- [ ] Mobile performance optimized
- [ ] SSL certificate active

### 7.4 SEO Verification
- [ ] Meta tags present
- [ ] Open Graph tags configured
- [ ] Google Analytics setup
- [ ] Google Search Console verification

---

## 📊 Step 8: Analytics & Monitoring

### 8.1 Google Analytics Setup
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property: maruonline.com
3. Add tracking code to website
4. Set up goals for demo requests

### 8.2 Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: maruonline.com
3. Verify ownership
4. Submit sitemap

### 8.3 CRM Analytics
**HubSpot Analytics:**
- Contact growth tracking
- Lead conversion rates
- Email performance
- Sales pipeline metrics

---

## 🚨 Step 9: Final Verification

### 9.1 Critical Checks
- [ ] Domain resolves correctly
- [ ] HTTPS working
- [ ] Email receiving/sending
- [ ] Calendly bookings working
- [ ] Contact forms sending emails
- [ ] CRM integration functional
- [ ] All pages accessible

### 9.2 Documentation
- [ ] Update README.md with live URL
- [ ] Document deployment process
- [ ] Save all login credentials securely
- [ ] Create backup of configuration

---

## 📞 Support Resources

### Cloudflare Support
- **Documentation:** [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Community:** [community.cloudflare.com](https://community.cloudflare.com)

### CRM Support
- **HubSpot:** [developers.hubspot.com](https://developers.hubspot.com)
- **Pipedrive:** [developers.pipedrive.com](https://developers.pipedrive.com)
- **Freshworks:** [developers.freshworks.com](https://developers.freshworks.com)

### Domain & DNS
- **DNS Checker:** [dnschecker.org](https://dnschecker.org)
- **SSL Checker:** [ssllabs.com/ssltest](https://ssllabs.com/ssltest)

### Performance Testing
- **PageSpeed Insights:** [pagespeed.web.dev](https://pagespeed.web.dev)
- **GTmetrix:** [gtmetrix.com](https://gtmetrix.com)

---

## 🎯 Deployment Timeline

**Estimated Time: 3-4 hours**

1. **Domain & DNS Setup:** 30 minutes
2. **Cloudflare Pages Deployment:** 45 minutes
3. **Custom Domain Configuration:** 30 minutes
4. **Email Setup:** 45 minutes
5. **Form Hosting Setup:** 30 minutes
6. **CRM Integration:** 60 minutes
7. **Calendly Integration:** 30 minutes
8. **Testing & Verification:** 60 minutes

---

## 💰 Cost Breakdown

### Monthly Costs
- **Domain:** $12/year (maruonline.com)
- **Email (Google Workspace):** $6/month
- **Form Hosting (Formspree):** $15/month
- **CRM (HubSpot Professional):** $45/month
- **Calendly:** Free (basic) or $8/month (pro)
- **Total:** ~$74/month

### Free Alternatives
- **Email:** Cloudflare Email Routing (free)
- **Forms:** Cloudflare Forms (free, 1000 submissions)
- **CRM:** HubSpot Free (2000 contacts)
- **Total:** ~$12/year (domain only)

---

## 🔑 Important Credentials to Save

- **Cloudflare Account:** [your-email]
- **Domain Registrar:** [your-email]
- **Email Provider:** jimmy@maruonline.com
- **CRM Account:** [your-email]
- **Calendly Account:** jimmy@maruonline.com
- **GitHub Repository:** Jimmy-Motsei/Aurellius-website

---

**🚀 Ready for deployment tomorrow! The site is fully optimized and prepared for Cloudflare Pages with comprehensive CRM and form integration options.**
