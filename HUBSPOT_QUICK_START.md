# ⚡ HubSpot CRM - Quick Start (30 Minutes)

## 🎯 **Essential Setup - Do This First**

### **Step 1: Create Your First Workflow (5 minutes)**

1. **Login to HubSpot**
2. **Go to:** Automation → Workflows
3. **Click:** "Create workflow"
4. **Choose:** "Contact-based workflow"

#### **Basic Demo Request Workflow:**
```
Name: "Demo Request - Auto Response"
Trigger: Contact submits a form
Form: Your demo request form
```

**Add these actions:**
1. **Send email** (immediately)
2. **Update lead status** to "Demo Requested"
3. **Create task** (due tomorrow)

### **Step 2: Create Email Template (10 minutes)**

1. **Go to:** Marketing → Email → Templates
2. **Create template:** "Demo Confirmation"
3. **Copy this content:**

```
Hi {{contact.firstname}},

Thanks for your interest in Maru AI!

📅 Book your demo: [YOUR_CALENDLY_LINK]
⏰ 30-minute consultation
👤 Jimmy Motsei, Founder

What we'll cover:
• Your business challenges
• AI solutions for your needs
• Implementation strategy
• Expected ROI

Looking forward to our conversation!

Best regards,
Jimmy Motsei
Maru AI
+27(0)83 393 4864
```

### **Step 3: Set Up Lead Scoring (10 minutes)**

1. **Go to:** Settings → Properties
2. **Create property:** "Lead Score" (Number)
3. **Create property:** "Lead Status" (Single select)

**Lead Status options:**
- New
- Demo Requested
- Qualified
- Proposal Sent
- Closed Won
- Nurture

### **Step 4: Test Your Workflow (5 minutes)**

1. **Create test contact** in HubSpot
2. **Submit test form** on your website
3. **Check email delivery**
4. **Verify task creation**

---

## 🚀 **What This Gives You Immediately:**

✅ **Automatic email response** to demo requests
✅ **Lead status tracking** in your CRM
✅ **Task creation** for follow-up
✅ **Basic lead scoring** foundation

---

## 📈 **Next Steps (After Quick Start):**

### **Week 1:**
- Set up Calendly integration
- Create meeting reminder workflow
- Add lead nurturing sequence

### **Week 2:**
- Implement advanced lead scoring
- Create re-engagement campaigns
- Set up customer onboarding

### **Week 3:**
- Add service-specific nurturing
- Create reporting dashboards
- Optimize based on performance

---

## 🎯 **Success Metrics to Track:**

- **Email open rates** (target: >25%)
- **Demo booking rate** (target: >30%)
- **Lead response time** (target: <5 minutes)
- **Task completion rate** (target: >80%)

---

**Start with the Quick Start above, then expand with the full implementation guide!**
