# Lead Generation Engine - Testing Strategy

## 🧪 Testing Approach Overview

### **Phase 1: Local Development Testing**
Test core functionality before deployment

### **Phase 2: Staging Environment Testing** 
Full system testing with real data

### **Phase 3: Production A/B Testing**
Optimize conversion rates with real users

---

## 🔧 **Recommended Testing Tools**

### **1. Playwright (Automated E2E Testing)**
```bash
npm install -D @playwright/test
npx playwright install
```

**Why Playwright:**
- Built-in browser automation (same tech we use for scraping)
- Cross-browser testing (Chrome, Firefox, Safari)
- Mobile device simulation
- Screenshot/video recording
- API testing capabilities

### **2. TestSprite Alternative: Checkly**
**Better than TestSprite for our use case:**
- API + Browser monitoring
- Real-world testing from global locations
- Slack/email alerts
- CI/CD integration
- Synthetic monitoring

### **3. Hotjar (User Behavior Testing)**
- Heatmaps of user interactions
- Session recordings
- Conversion funnel analysis
- Form analytics (perfect for our multi-step forms)

### **4. Google Analytics 4 + GTM**
- Conversion tracking
- Event tracking for each assessment step
- Audience insights
- Real-time monitoring

---

## 🎯 **Testing Checklist**

### **Core Functionality Tests**

#### **Assessment Flow Testing**
- [ ] Lead Score Predictor: URL input → AI analysis → Results
- [ ] Pipeline Leak: CSV upload → Analysis → Leak detection
- [ ] Proposal Generator: Form completion → AI generation → Output
- [ ] Tech Audit: Tool selection → Cost analysis → Recommendations

#### **Database Integration**
- [ ] Lead creation/updating
- [ ] Assessment data storage
- [ ] Activity tracking
- [ ] Score calculations

#### **AI Integration**
- [ ] Claude API responses
- [ ] Fallback handling
- [ ] Error scenarios
- [ ] Response time (<30s)

### **User Experience Tests**

#### **Homepage Integration**
- [ ] Hero section assessment cards
- [ ] Sticky ROI calculator
- [ ] Navigation updates
- [ ] Mobile responsiveness

#### **Form Usability**
- [ ] Multi-step progression
- [ ] Validation messages
- [ ] Loading states
- [ ] Error handling

#### **Results Display**
- [ ] Score visualizations
- [ ] Recommendation clarity
- [ ] PDF generation (future)
- [ ] Email delivery (future)

---

## 🚀 **Quick Testing Setup**

### **1. Playwright E2E Tests**
```typescript
// tests/assessments.spec.ts
import { test, expect } from '@playwright/test';

test('Lead Score Assessment Flow', async ({ page }) => {
  await page.goto('/assessments/lead-score');
  
  // Fill website info
  await page.fill('input[name="website_url"]', 'https://example.com');
  await page.fill('input[name="company_name"]', 'Test Company');
  await page.click('button:has-text("Next")');
  
  // Fill company details
  await page.selectOption('select[name="industry"]', 'technology');
  await page.selectOption('select[name="company_size"]', 'smb');
  await page.click('button:has-text("Next")');
  
  // Fill email
  await page.fill('input[name="email"]', 'test@example.com');
  await page.click('button:has-text("Complete Assessment")');
  
  // Wait for results
  await expect(page.locator('text=Your Lead Generation Score')).toBeVisible({ timeout: 60000 });
  await expect(page.locator('text=Overall Lead Score')).toBeVisible();
});
```

### **2. API Testing**
```typescript
// tests/api.spec.ts
import { test, expect } from '@playwright/test';

test('Assessment API', async ({ request }) => {
  const response = await request.post('/api/assessments', {
    data: {
      app_type: 'lead_score',
      email: 'test@example.com',
      input_data: {
        website_url: 'https://example.com',
        company_name: 'Test Company',
        industry: 'technology',
        company_size: 'smb'
      }
    }
  });
  
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.success).toBe(true);
  expect(data.data.score).toBeGreaterThan(0);
});
```

### **3. Database Testing**
```typescript
// tests/database.spec.ts
import { test, expect } from '@playwright/test';
import { supabaseAdmin } from '@/lib/supabase';

test('Lead Creation', async () => {
  const { data: lead } = await supabaseAdmin
    .from('leads')
    .insert({
      email: 'test@example.com',
      company_name: 'Test Company'
    })
    .select()
    .single();
    
  expect(lead.email).toBe('test@example.com');
  expect(lead.id).toBeDefined();
  
  // Cleanup
  await supabaseAdmin.from('leads').delete().eq('id', lead.id);
});
```

---

## 📊 **Monitoring & Analytics Setup**

### **1. Checkly Monitoring**
```javascript
// checkly-config.js
const { defineConfig } = require('checkly');

module.exports = defineConfig({
  projectName: 'Maru Lead Generation Engine',
  logicalId: 'maru-assessments',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['api', 'assessments'],
    runtimeId: '2022.10',
    environmentVariables: [],
  },
  cli: {
    runLocation: 'eu-west-1',
  },
});
```

### **2. Google Analytics Events**
```typescript
// lib/analytics.ts
export const trackAssessmentStart = (assessmentType: string) => {
  gtag('event', 'assessment_start', {
    assessment_type: assessmentType,
    event_category: 'engagement'
  });
};

export const trackAssessmentComplete = (assessmentType: string, score: number) => {
  gtag('event', 'assessment_complete', {
    assessment_type: assessmentType,
    score: score,
    event_category: 'conversion'
  });
};
```

---

## 🎯 **Testing Priorities**

### **Critical Path (Must Test)**
1. **Assessment completion flows** (all 4 apps)
2. **Database lead creation**
3. **AI API integration**
4. **Homepage conversion elements**
5. **Mobile responsiveness**

### **Important (Should Test)**
1. **Error handling scenarios**
2. **Performance under load**
3. **Cross-browser compatibility**
4. **Email validation**
5. **Form abandonment tracking**

### **Nice to Have (Could Test)**
1. **SEO optimization**
2. **Accessibility compliance**
3. **Advanced analytics**
4. **A/B test variations**

---

## 🚀 **Quick Start Testing Commands**

```bash
# Install testing dependencies
npm install -D @playwright/test @types/node

# Run E2E tests
npx playwright test

# Run specific test
npx playwright test assessments.spec.ts

# Run with UI mode
npx playwright test --ui

# Generate test report
npx playwright show-report
```

---

## 📈 **Success Metrics to Track**

### **Technical Metrics**
- Assessment completion rate: >70%
- API response time: <5s
- Page load time: <2s
- Error rate: <1%

### **Business Metrics**
- Lead capture rate: 300% increase target
- Email collection rate: >80%
- Assessment-to-consultation conversion: >15%
- User engagement time: >3 minutes

---

## 🔍 **Recommended Testing Sequence**

1. **Local Playwright tests** → Core functionality
2. **Staging deployment** → Full system testing
3. **Checkly monitoring** → Continuous uptime
4. **Hotjar setup** → User behavior analysis
5. **GA4 tracking** → Conversion optimization
6. **A/B testing** → Homepage variations

This comprehensive testing approach ensures the lead generation engine performs flawlessly in production!