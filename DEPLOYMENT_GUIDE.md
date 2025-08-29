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

## 🔧 Step 3: Custom Domain Setup

### 3.1 Add Custom Domain
1. In your Pages project, go to **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter: `maruonline.com`
4. Click **"Continue"**

### 3.2 DNS Configuration
1. Cloudflare will provide DNS records to add
2. Add these records to your domain's DNS:
   ```
   Type: CNAME
   Name: maruonline.com
   Target: [Cloudflare Pages URL]
   ```

### 3.3 SSL Certificate
- Cloudflare will automatically provision SSL certificate
- Wait 5-10 minutes for certificate to activate

---

## 📧 Step 4: Email Setup

### 4.1 Email Hosting Options
**Option A: Google Workspace**
1. Go to [workspace.google.com](https://workspace.google.com)
2. Sign up for Google Workspace
3. Verify domain ownership
4. Create email: jimmy@maruonline.com

**Option B: Microsoft 365**
1. Go to [microsoft365.com](https://microsoft365.com)
2. Sign up for Microsoft 365 Business
3. Verify domain ownership
4. Create email: jimmy@maruonline.com

**Option C: Cloudflare Email Routing (Free)**
1. In Cloudflare dashboard, go to **Email**
2. Enable **Email Routing**
3. Create routing rules for jimmy@maruonline.com

### 4.2 Email Configuration
```
Primary Email: jimmy@maruonline.com
Backup Email: (your personal email)
MX Records: (provided by email provider)
```

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

### 5.3 Update Website Integration
1. In `request-demo.html`, update Calendly widget:
   ```html
   <div class="calendly-inline-widget" 
        data-url="https://calendly.com/jimmy-maruonline/demo-consultation"
        style="min-width:320px;height:700px;">
   </div>
   ```

---

## 🔍 Step 6: Post-Deployment Testing

### 6.1 Site Functionality Test
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact forms functional
- [ ] Calendly integration working
- [ ] All images loading
- [ ] Mobile responsiveness

### 6.2 Performance Testing
- [ ] Page load speed < 3 seconds
- [ ] Google PageSpeed Insights score > 90
- [ ] Mobile performance optimized
- [ ] SSL certificate active

### 6.3 SEO Verification
- [ ] Meta tags present
- [ ] Open Graph tags configured
- [ ] Google Analytics setup (if needed)
- [ ] Google Search Console verification

---

## 📊 Step 7: Analytics & Monitoring

### 7.1 Google Analytics Setup
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property: maruonline.com
3. Add tracking code to website
4. Set up goals for demo requests

### 7.2 Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: maruonline.com
3. Verify ownership
4. Submit sitemap

---

## 🚨 Step 8: Final Verification

### 8.1 Critical Checks
- [ ] Domain resolves correctly
- [ ] HTTPS working
- [ ] Email receiving/sending
- [ ] Calendly bookings working
- [ ] Contact forms sending emails
- [ ] All pages accessible

### 8.2 Documentation
- [ ] Update README.md with live URL
- [ ] Document deployment process
- [ ] Save all login credentials securely
- [ ] Create backup of configuration

---

## 📞 Support Resources

### Cloudflare Support
- **Documentation:** [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Community:** [community.cloudflare.com](https://community.cloudflare.com)

### Domain & DNS
- **DNS Checker:** [dnschecker.org](https://dnschecker.org)
- **SSL Checker:** [ssllabs.com/ssltest](https://ssllabs.com/ssltest)

### Performance Testing
- **PageSpeed Insights:** [pagespeed.web.dev](https://pagespeed.web.dev)
- **GTmetrix:** [gtmetrix.com](https://gtmetrix.com)

---

## 🎯 Deployment Timeline

**Estimated Time: 2-3 hours**

1. **Domain & DNS Setup:** 30 minutes
2. **Cloudflare Pages Deployment:** 45 minutes
3. **Custom Domain Configuration:** 30 minutes
4. **Email Setup:** 45 minutes
5. **Calendly Integration:** 30 minutes
6. **Testing & Verification:** 60 minutes

---

## 🔑 Important Credentials to Save

- **Cloudflare Account:** [your-email]
- **Domain Registrar:** [your-email]
- **Email Provider:** jimmy@maruonline.com
- **Calendly Account:** jimmy@maruonline.com
- **GitHub Repository:** Jimmy-Motsei/Aurellius-website

---

**🚀 Ready for deployment tomorrow! The site is fully optimized and prepared for Cloudflare Pages.**
