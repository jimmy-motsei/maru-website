import { test, expect } from '@playwright/test';

test.describe('Lead Generation Engine Tests', () => {
  
  test('Homepage loads with assessment cards', async ({ page }) => {
    await page.goto('/');
    
    // Check hero section
    await expect(page.locator('text=Discover Your Revenue Potential')).toBeVisible();
    
    // Check assessment preview cards
    await expect(page.locator('text=Lead Score')).toBeVisible();
    await expect(page.locator('text=Pipeline Leaks')).toBeVisible();
    await expect(page.locator('text=AI Proposals')).toBeVisible();
    await expect(page.locator('text=Tech Stack')).toBeVisible();
    
    // Check primary CTA
    await expect(page.locator('text=START FREE AUDIT')).toBeVisible();
  });

  test('Lead Score Predictor - Complete Flow', async ({ page }) => {
    await page.goto('/assessments/lead-score');
    
    // Check page loads
    await expect(page.locator('text=Lead Generation Score Predictor')).toBeVisible();
    
    // Step 1: Website Information
    await page.fill('input[name="website_url"]', 'https://example.com');
    await page.fill('input[name="company_name"]', 'Test Company');
    await page.click('button:has-text("Next")');
    
    // Step 2: Company Details
    await page.selectOption('select[name="industry"]', 'technology');
    await page.selectOption('select[name="company_size"]', 'smb');
    await page.click('button:has-text("Next")');
    
    // Step 3: Email
    await page.fill('input[name="email"]', 'test@example.com');
    await page.click('button:has-text("Complete Assessment")');
    
    // Check loading state
    await expect(page.locator('text=Analyzing Your Website')).toBeVisible();
    
    // Wait for results (up to 60 seconds for AI processing)
    await expect(page.locator('text=Your Lead Generation Score')).toBeVisible({ timeout: 60000 });
    await expect(page.locator('text=Overall Lead Score')).toBeVisible();
    await expect(page.locator('text=Recommendations')).toBeVisible();
  });

  test('Pipeline Leak Detector - Page Load', async ({ page }) => {
    await page.goto('/assessments/pipeline-leak');
    
    await expect(page.locator('text=Pipeline Leak Detector')).toBeVisible();
    await expect(page.locator('text=CSV Upload')).toBeVisible();
    await expect(page.locator('text=Leak Detection')).toBeVisible();
    await expect(page.locator('text=Revenue Recovery')).toBeVisible();
  });

  test('Proposal Accelerator - Page Load', async ({ page }) => {
    await page.goto('/assessments/proposal');
    
    await expect(page.locator('text=Proposal Accelerator')).toBeVisible();
    await expect(page.locator('text=AI-Powered')).toBeVisible();
    await expect(page.locator('text=Stakeholder Ready')).toBeVisible();
    await expect(page.locator('text=Instant Download')).toBeVisible();
  });

  test('Tech Stack Auditor - Page Load', async ({ page }) => {
    await page.goto('/assessments/tech-audit');
    
    await expect(page.locator('text=Tech Stack ROI Auditor')).toBeVisible();
    await expect(page.locator('text=Select Your Tools')).toBeVisible();
    await expect(page.locator('text=Your Stack')).toBeVisible();
  });

  test('Navigation includes AI Audits', async ({ page }) => {
    await page.goto('/');
    
    // Open menu
    await page.click('button[aria-label="Open menu"]');
    
    // Check AI Audits in navigation
    await expect(page.locator('text=AI Audits')).toBeVisible();
    await expect(page.locator('text=Lead Score Predictor')).toBeVisible();
    await expect(page.locator('text=Pipeline Leak Detector')).toBeVisible();
    await expect(page.locator('text=Proposal Accelerator')).toBeVisible();
    await expect(page.locator('text=Tech Stack Auditor')).toBeVisible();
  });

  test('Sticky ROI Calculator appears and functions', async ({ page }) => {
    await page.goto('/');
    
    // Wait for calculator to appear (3 second delay)
    await page.waitForTimeout(4000);
    
    // Check calculator button appears
    await expect(page.locator('text=Calculate ROI')).toBeVisible();
    
    // Click to expand
    await page.click('text=Calculate ROI');
    
    // Check expanded form
    await expect(page.locator('text=Monthly Revenue')).toBeVisible();
    await expect(page.locator('text=Number of Employees')).toBeVisible();
    
    // Fill form
    await page.fill('input[placeholder="50000"]', '100000');
    await page.fill('input[placeholder="25"]', '50');
    
    // Check savings calculation appears
    await expect(page.locator('text=Potential Monthly Savings')).toBeVisible();
  });

  test('Mobile responsiveness', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto('/');
    
    // Check hero is visible on mobile
    await expect(page.locator('text=Discover Your Revenue Potential')).toBeVisible();
    
    // Check assessment cards stack properly
    await expect(page.locator('text=Lead Score')).toBeVisible();
    
    // Test assessment page on mobile
    await page.goto('/assessments/lead-score');
    await expect(page.locator('text=Lead Generation Score Predictor')).toBeVisible();
  });

  test('Form validation works', async ({ page }) => {
    await page.goto('/assessments/lead-score');
    
    // Try to proceed without filling required fields
    await page.click('button:has-text("Next")');
    
    // Should still be on first step (validation prevents progression)
    await expect(page.locator('text=Website Information')).toBeVisible();
    
    // Fill required field and proceed
    await page.fill('input[name="website_url"]', 'https://example.com');
    await page.fill('input[name="company_name"]', 'Test Company');
    await page.click('button:has-text("Next")');
    
    // Should progress to next step
    await expect(page.locator('text=Company Details')).toBeVisible();
  });

  test('Error handling for invalid URLs', async ({ page }) => {
    await page.goto('/assessments/lead-score');
    
    // Enter invalid URL
    await page.fill('input[name="website_url"]', 'not-a-url');
    await page.fill('input[name="company_name"]', 'Test Company');
    
    // Form should prevent submission or show validation
    const urlInput = page.locator('input[name="website_url"]');
    await expect(urlInput).toHaveAttribute('type', 'url');
  });
});