# "Broken Playbook" Homepage Implementation Summary

## Branch Information
- **Branch Name**: `homepage-broken-playbook`
- **Commit**: `69dd4e6`
- **Status**: ✅ Built successfully, ready for review

## What Was Created

### 1. New Homepage Structure (`app/page.tsx`)
Completely rebuilt homepage with 8 strategic sections following the "Broken Playbook" narrative arc.

### 2. Component Architecture
Created 8 new components in `/components/broken-playbook/`:

1. **BrokenPlaybookHero.tsx**
   - Hook: "Most SME Marketing Fails for One Reason: The Wrong Playbook"
   - Dual CTAs: "Find Where It's Breaking" + "Why This Matters"
   - Smooth scroll navigation

2. **ProblemEducation.tsx**
   - Side-by-side comparison: Enterprise vs SME reality
   - Visual distinction (gray vs cyan backgrounds)
   - "The Gap" callout explaining why enterprise strategies break

3. **ThreeBreakPoints.tsx**
   - Break Point 01: Your Website
   - Break Point 02: Your Sales Process
   - Break Point 03: Your Tech Stack
   - Each with: Enterprise Approach → Your Reality → The Result
   - Color-coded (neutral → red → cyan)

4. **DiagnosticTools.tsx**
   - 3 diagnostic cards in responsive grid
   - Website Conversion Diagnostic (2 min)
   - Pipeline Performance Diagnostic (5 min)
   - Tech Stack Efficiency Diagnostic (5 min)
   - Each shows: What It Analyzes + Why It Matters + Time + CTA
   - Bottom CTA recommending Website Diagnostic as starting point

5. **SMEMethodology.tsx**
   - 4 principles with icons and "Why It's Different" callouts:
     - Diagnose Before Prescribing
     - Prioritize by Revenue Impact
     - Surgical Fixes, Not Overhauls
     - Build for Your Stage

6. **SocialProof.tsx**
   - 3 detailed testimonials (Sarah, David, Jennifer)
   - Three-part structure: Problem → Switch → Result
   - Color-coded backgrounds (red → amber → green)
   - Real transformation stories with specific metrics

7. **ServicesOverview.tsx**
   - 4 service cards in 2x2 grid
   - Each shows: Diagnostic Shows → What We Fix → How We Fix It
   - Links to respective service pages

8. **FinalCTA.tsx**
   - Dual CTAs: "Start Free Diagnostic" + "See Our Methodology"
   - Trust indicators: No credit card • No sales pitch • Free insights
   - Gradient background (white → cyan)

### 3. Updated Metadata
- **Title**: "Most SME Marketing Fails for One Reason: The Wrong Playbook | Maru Online"
- **Description**: "You're running enterprise marketing strategies on SME budgets. Free diagnostics show exactly where the playbook breaks down for your business—and what to fix first."

### 4. Backup Created
- Original homepage backed up to `app/page.backup.tsx`

## Design Principles Applied

### Visual Hierarchy
- ✅ Large, bold headlines with "Wrong Playbook" emphasized in cyan
- ✅ Clear section separation with alternating backgrounds (dark → white → dark)
- ✅ Numbered elements (01, 02, 03) for easy scanning
- ✅ Color-coded information (red for problems, cyan for solutions, green for results)

### Responsive Design
- ✅ Mobile-first approach with breakpoints at 640px, 768px, 1024px
- ✅ Grids collapse to single column on mobile
- ✅ Touch-friendly button sizes (min 44px height)
- ✅ Readable font sizes on all devices

### Brand Consistency
- ✅ Uses existing Maru color palette (cyan primary, dark backgrounds)
- ✅ Maintains Outfit font family
- ✅ Consistent button styling with hover effects
- ✅ Matches existing component patterns

### User Experience
- ✅ Smooth scroll navigation between sections
- ✅ Clear visual progression through narrative arc
- ✅ Multiple conversion points (diagnostics emphasized)
- ✅ Trust-building elements (testimonials, no-pressure messaging)

## Narrative Arc

The homepage follows this psychological journey:

1. **Hook** (Hero): "You're using the wrong playbook" - creates curiosity
2. **Empathy** (Education): "Here's why enterprise tactics fail for SMEs" - builds understanding
3. **Specificity** (Break Points): "Here's exactly where it breaks" - creates recognition
4. **Proof** (Diagnostics): "See it in your own business" - offers evidence
5. **Methodology** (SME Approach): "Here's the right way" - provides solution
6. **Validation** (Social Proof): "Others switched and succeeded" - builds confidence
7. **Services** (Overview): "Here's what we fix" - shows capabilities
8. **Action** (Final CTA): "Start your diagnosis" - drives conversion

## Key Messaging Shifts

### From → To
- ❌ "AI transformation" → ✅ "Wrong playbook diagnosis"
- ❌ "We're the best agency" → ✅ "We understand your scale"
- ❌ "Hire us now" → ✅ "See your problems first"
- ❌ "Enterprise solutions" → ✅ "SME-specific methodology"
- ❌ "Complex automation" → ✅ "Surgical fixes"

## Diagnostic Tool Links

All diagnostic CTAs link to actual tools:
- ✅ Website Diagnostic: `https://leads.maruonline.com`
- ✅ Pipeline Diagnostic: `https://pipeline.maruonline.com`
- ✅ Tech Stack Diagnostic: `/assessments/tech-audit`

## Next Steps

### To Preview Locally
```bash
cd /Users/ramoloimotsei/maru-website
npm run dev
# Visit http://localhost:3000
```

### To Deploy to Staging
```bash
# Push branch to remote
git push origin homepage-broken-playbook

# Create pull request or deploy to Vercel preview
```

### To Test
1. **Content Review**
   - [ ] All copy reads naturally
   - [ ] No typos or grammatical errors
   - [ ] Messaging aligns with brand voice

2. **Visual Review**
   - [ ] Sections have proper spacing
   - [ ] Colors match brand palette
   - [ ] Mobile responsive on all devices
   - [ ] Hover states work correctly

3. **Functionality**
   - [ ] All diagnostic links work
   - [ ] Smooth scroll navigation works
   - [ ] Service links go to correct pages
   - [ ] CTAs are clickable

4. **Performance**
   - [ ] Page loads quickly
   - [ ] No console errors
   - [ ] Animations are smooth

### To Merge to Main
```bash
# After testing and approval
git checkout main
git merge homepage-broken-playbook
git push origin main
```

### To Rollback (if needed)
```bash
# Restore original homepage
cp app/page.backup.tsx app/page.tsx
git add app/page.tsx
git commit -m "Rollback to original homepage"
```

## Files Changed

### Created (9 files)
- `app/page.backup.tsx` - Backup of original homepage
- `components/broken-playbook/BrokenPlaybookHero.tsx`
- `components/broken-playbook/ProblemEducation.tsx`
- `components/broken-playbook/ThreeBreakPoints.tsx`
- `components/broken-playbook/DiagnosticTools.tsx`
- `components/broken-playbook/SMEMethodology.tsx`
- `components/broken-playbook/SocialProof.tsx`
- `components/broken-playbook/ServicesOverview.tsx`
- `components/broken-playbook/FinalCTA.tsx`

### Modified (2 files)
- `app/page.tsx` - New homepage structure
- `app/layout.tsx` - Updated metadata

## Technical Details

### Dependencies
- ✅ Uses existing dependencies (framer-motion, lucide-react)
- ✅ No new packages required
- ✅ Compatible with Next.js 16.1.0

### Performance
- ✅ Static rendering where possible
- ✅ Client components only where needed ("use client")
- ✅ Lazy loading with viewport triggers
- ✅ Optimized animations with framer-motion

### Accessibility
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (H1 → H2 → H3 → H4)
- ✅ ARIA labels where needed
- ✅ Keyboard navigable
- ✅ High contrast text

## Success Metrics to Track

After deployment, monitor:
- **Bounce Rate**: Should decrease (target <60%)
- **Scroll Depth**: Should increase (target >50% reach diagnostics)
- **Diagnostic CTA Clicks**: Primary conversion metric (target >15%)
- **Time on Page**: Should increase (target >90 seconds)
- **Path to Services**: Secondary navigation goal

## Notes

- The homepage is completely self-contained in the new components
- Original homepage is safely backed up
- All links point to existing pages/tools
- No database changes required
- No API changes required
- Can be deployed independently

## Questions or Issues?

If you encounter any issues:
1. Check the build output for errors
2. Verify all diagnostic tool URLs are accessible
3. Test on multiple devices and browsers
4. Review console for JavaScript errors
5. Check that all images/icons load correctly

---

**Status**: ✅ Ready for review and testing
**Build**: ✅ Successful
**Branch**: `homepage-broken-playbook`
**Commit**: `69dd4e6`
