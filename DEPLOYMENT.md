# Vercel Deployment Guide for maruonline.com

## ✅ Step 1: Code Pushed to GitHub
Repository: https://github.com/jimmy-motsei/maru-website.git
Branch: main
Status: ✅ All 20 commits pushed successfully

---

## 🚀 Step 2: Deploy to Vercel

### Option A: Quick Deploy (Recommended)
1. Go to: https://vercel.com/new
2. Click "Import Git Repository"
3. Connect to GitHub if not already connected
4. Select repository: **jimmy-motsei/maru-website**
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `.` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

6. Click **"Deploy"**
7. Wait for deployment (usually 2-3 minutes)
8. You'll get a URL like: `maru-website.vercel.app`

### Option B: Vercel CLI (Alternative)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd /Users/ramoloimotsei/Projects/maru-website
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project's name? maru-website
# - In which directory is your code located? ./
# - Want to override settings? No

# Deploy to production
vercel --prod
```

---

## 🌐 Step 3: Connect Custom Domain (maruonline.com)

### A. In Vercel Dashboard

1. Go to your project: https://vercel.com/jimmy-motsei/maru-website/settings/domains
2. Click **"Add Domain"**
3. Enter: `maruonline.com`
4. Click **"Add"**
5. Also add: `www.maruonline.com` (recommended)

Vercel will show DNS configuration needed:

**For maruonline.com:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP)

**For www.maruonline.com:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### B. In Cloudflare Dashboard

1. Go to: https://dash.cloudflare.com
2. Select domain: **maruonline.com**
3. Go to **DNS** → **Records**

4. **Add/Update A Record**:
   - Type: `A`
   - Name: `@` (or root)
   - IPv4 address: `76.76.21.21`
   - Proxy status: **DNS only** (gray cloud) ⚠️ Important!
   - TTL: Auto
   - Click **Save**

5. **Add CNAME Record for www**:
   - Type: `CNAME`
   - Name: `www`
   - Target: `cname.vercel-dns.com`
   - Proxy status: **DNS only** (gray cloud) ⚠️ Important!
   - TTL: Auto
   - Click **Save**

6. **Optional: Remove any conflicting records**
   - Delete any old A records pointing elsewhere
   - Delete any CNAME for @ (root)

### C. SSL/TLS Settings in Cloudflare

1. Go to **SSL/TLS** → **Overview**
2. Set encryption mode to: **Full** (not "Flexible" or "Full (strict)")
3. Go to **SSL/TLS** → **Edge Certificates**
4. Ensure "Always Use HTTPS" is **ON**

---

## ⏱️ DNS Propagation

- **Propagation Time**: 5 minutes to 48 hours (usually 15-30 minutes)
- **Check Status**: 
  - Visit: https://dnschecker.org/
  - Enter: maruonline.com
  - Check if A record shows: 76.76.21.21

---

## 🔍 Verification Steps

### After DNS propagates:

1. **Visit your domain**:
   - https://maruonline.com
   - https://www.maruonline.com

2. **Check SSL certificate**:
   - Click padlock in browser
   - Should show "Vercel" certificate
   - Valid and secure

3. **Test all pages**:
   - Homepage: https://maruonline.com
   - Services: https://maruonline.com/services
   - Pricing: https://maruonline.com/pricing
   - Contact: https://maruonline.com/contact
   - AI Readiness: https://maruonline.com/ai-readiness
   - Booking: https://maruonline.com/booking

---

## 🎯 Post-Deployment Checklist

✅ Vercel deployment successful  
✅ Production URL working (maru-website.vercel.app)  
✅ Custom domain added in Vercel  
✅ DNS records configured in Cloudflare  
✅ Proxy status set to "DNS only" (gray cloud)  
✅ SSL/TLS set to "Full"  
✅ www subdomain configured  
✅ All pages loading correctly  
✅ SSL certificate valid  
✅ Forms working (contact, booking)  

---

## 🚨 Common Issues & Solutions

### Issue: Domain not resolving
**Solution**: 
- Wait for DNS propagation (up to 48 hours)
- Check DNS with: `dig maruonline.com` or dnschecker.org
- Ensure Cloudflare proxy is **OFF** (DNS only/gray cloud)

### Issue: SSL certificate error
**Solution**:
- In Cloudflare, set SSL/TLS to "Full" (not Flexible)
- Wait 10-15 minutes for Vercel to provision certificate
- Clear browser cache

### Issue: "This site can't be reached"
**Solution**:
- Verify A record is exactly: `76.76.21.21`
- Ensure no conflicting DNS records
- Check Cloudflare → DNS → Records

### Issue: Mixed content warnings
**Solution**:
- Ensure all assets use HTTPS
- Check for http:// links in code
- Enable "Always Use HTTPS" in Cloudflare

---

## 📊 Environment Variables (If Needed)

If your site uses any API keys or secrets:

1. Go to: Vercel Dashboard → Project → Settings → Environment Variables
2. Add variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://maruonline.com`
   - Any other API keys needed

3. Redeploy after adding variables

---

## 🔄 Future Deployments

Every time you push to the `main` branch:
- Vercel will automatically deploy
- No manual steps needed
- Deployment takes 2-3 minutes
- You'll get notifications via email

---

## 📞 Support

**Vercel Support**: https://vercel.com/support  
**Cloudflare Support**: https://dash.cloudflare.com/support  

**Documentation**:
- Vercel Domains: https://vercel.com/docs/concepts/projects/domains
- Cloudflare DNS: https://developers.cloudflare.com/dns/

---

## ✨ Your Website URLs (After Setup)

**Primary Domain**: https://maruonline.com  
**With WWW**: https://www.maruonline.com  
**Vercel Default**: https://maru-website.vercel.app  

All will redirect to the primary domain automatically!

---

**Status**: Ready to deploy! 🚀
**Next Step**: Access https://vercel.com/new and import your GitHub repository.
