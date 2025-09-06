# Sitemap Setup Guide for Google Search Console

## Files Created

1. **sitemap.xml** - Main sitemap with all pages
2. **sitemap-images.xml** - Image sitemap for better visual search
3. **sitemap-index.xml** - Sitemap index file
4. **robots.txt** - Robots.txt file for search engine guidance

## How to Submit to Google Search Console

### Step 1: Upload Files to Your Website

1. Upload all sitemap files to your website's root directory (`maruonline.com/`)
2. Ensure files are accessible at:
   - `https://maruonline.com/sitemap.xml`
   - `https://maruonline.com/sitemap-images.xml`
   - `https://maruonline.com/sitemap-index.xml`
   - `https://maruonline.com/robots.txt`

### Step 2: Submit to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property (`maruonline.com`)
3. Navigate to **Sitemaps** in the left sidebar
4. Click **Add a new sitemap**
5. Enter: `sitemap.xml`
6. Click **Submit**

### Step 3: Submit Image Sitemap (Optional but Recommended)

1. In the same Sitemaps section
2. Click **Add a new sitemap**
3. Enter: `sitemap-images.xml`
4. Click **Submit**

## Sitemap Structure

### Page Priorities

- **Priority 1.0**: Homepage
- **Priority 0.9**: Main service pages (Services, Contact, Request Demo)
- **Priority 0.8**: AI solution pages and Knowledge base
- **Priority 0.7**: Blog content and articles
- **Priority 0.5**: Careers page
- **Priority 0.3**: Legal pages (Privacy, Terms, Cookie Policy)
- **Priority 0.1**: 404 page

### Change Frequencies

- **Weekly**: Homepage
- **Monthly**: Service pages, AI solutions, blog content, careers
- **Yearly**: Legal pages, 404 page

## Verification

After submission, Google will:

1. Validate the sitemap format
2. Check for crawl errors
3. Start indexing the pages
4. Show indexing status in Search Console

## Monitoring

Check Google Search Console regularly for:

- Sitemap submission status
- Index coverage reports
- Page experience metrics
- Search performance data

## Maintenance

Update the sitemap when:

- Adding new pages
- Changing page priorities
- Updating content significantly
- Modifying site structure

The `lastmod` dates should be updated to reflect when pages were last modified.

## Additional SEO Benefits

- **robots.txt** guides search engine crawlers
- **Image sitemap** improves visual search visibility
- **Proper priorities** help Google understand page importance
- **Change frequencies** optimize crawl budget allocation
