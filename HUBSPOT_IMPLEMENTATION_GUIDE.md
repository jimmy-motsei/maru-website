# 🛠️ HubSpot CRM Workflows - Step-by-Step Implementation Guide

## 🎯 **Quick Start Implementation Plan**

### **Priority 1: Lead Capture & Demo Request Workflow**
### **Priority 2: Email Templates Setup**
### **Priority 3: Lead Scoring Configuration**
### **Priority 4: Advanced Automation**

---

## 🚀 **Step 1: Lead Capture & Demo Request Workflow**

### **1.1 Access HubSpot Workflows**
1. **Login to HubSpot**
2. **Navigate to:** Settings (⚙️) → Automation → Workflows
3. **Click:** "Create workflow"

### **1.2 Create Demo Request Workflow**
```
Workflow Name: "Demo Request - Immediate Response"
Trigger: Form submission
Target Form: Request Demo form
```

#### **Step-by-Step Setup:**

**Step 1: Trigger Setup**
- **Trigger Type:** "Contact submits a form"
- **Form:** Select your demo request form
- **Enrollment:** "Enroll contacts when they submit this form"

**Step 2: Immediate Email Response**
- **Action:** "Send email"
- **Template:** "Demo Request Confirmation"
- **Timing:** "Immediately"
- **Recipient:** "Contact"

**Step 3: Lead Scoring**
- **Action:** "Update contact property"
- **Property:** "Lead Score"
- **Value:** "Add 20 points"
- **Condition:** "Always"

**Step 4: Lead Status Update**
- **Action:** "Update contact property"
- **Property:** "Lead Status"
- **Value:** "Demo Requested"
- **Condition:** "Always"

**Step 5: Create Task**
- **Action:** "Create task"
- **Task Type:** "Call"
- **Subject:** "Follow up on demo request - {{contact.firstname}} {{contact.lastname}}"
- **Due Date:** "1 day from now"
- **Assigned To:** "Your name"

### **1.3 Workflow Settings**
- **Active:** Yes
- **Enrollment limit:** 1000 contacts
- **Enrollment criteria:** All contacts who submit the form

---

## 📧 **Step 2: Email Templates Setup**

### **2.1 Create Email Templates**

#### **Template 1: Demo Request Confirmation**
1. **Go to:** Marketing → Email → Templates
2. **Click:** "Create template"
3. **Choose:** "Blank template"
4. **Name:** "Demo Request Confirmation"

**Template Content:**
```html
Hi {{contact.firstname}},

Thank you for your interest in Maru AI! We're excited to show you how our AI-powered solutions can transform your business.

🎯 **What to Expect in Your Demo:**
• Personalized AI solution overview
• Real-world case studies from South African businesses
• ROI analysis for your specific industry
• Implementation timeline and next steps

📅 **Book Your Demo:**
Click here to schedule your 30-minute consultation: [YOUR_CALENDLY_LINK]

⏰ **Demo Duration:** 30 minutes
📍 **Format:** Video call (Zoom/Teams)
👤 **Presenter:** Jimmy Motsei, Maru AI Founder

**What We'll Cover:**
✅ Your current business challenges
✅ AI solutions that fit your needs
✅ Implementation strategy
✅ Expected ROI and timeline

**Preparation Tips:**
• Have your current marketing/sales process ready to discuss
• Think about your biggest business challenges
• Prepare any questions about AI implementation

If you need to reschedule, please let us know at least 24 hours in advance.

Looking forward to our conversation!

Best regards,
Jimmy Motsei
Founder, Maru AI
+27(0)83 393 4864
jimmy@maruonline.com

---
*Maru AI - Bridge your business into the age of AI*
```

#### **Template 2: Meeting Reminder**
**Name:** "Meeting Reminder - 1 Hour Before"

**Template Content:**
```html
Hi {{contact.firstname}},

This is a friendly reminder that your Maru AI demo is scheduled in 1 hour.

📅 **Meeting Details:**
• **Time:** {{meeting.time}}
• **Duration:** 30 minutes
• **Platform:** {{meeting.platform}}
• **Meeting Link:** {{meeting.link}}

**Agenda:**
1. Your business challenges (5 min)
2. AI solution overview (15 min)
3. Implementation strategy (5 min)
4. Q&A and next steps (5 min)

**What to Prepare:**
• Your current marketing/sales process
• Key business challenges you're facing
• Questions about AI implementation

If you need to reschedule, please contact us immediately at +27(0)83 393 4864.

Looking forward to our meeting!

Best regards,
Jimmy Motsei
Maru AI

---
*Maru AI - Bridge your business into the age of AI*
```

### **2.2 Template Personalization Setup**
1. **Add personalization variables:**
   - `{{contact.firstname}}` - Contact's first name
   - `{{contact.lastname}}` - Contact's last name
   - `{{company.name}}` - Company name
   - `{{meeting.time}}` - Meeting time
   - `{{meeting.link}}` - Meeting link

2. **Add your Calendly link:**
   - Replace `[YOUR_CALENDLY_LINK]` with your actual Calendly booking link

---

## 📊 **Step 3: Lead Scoring Configuration**

### **3.1 Set Up Lead Scoring Properties**
1. **Go to:** Settings → Properties
2. **Create new property:** "Lead Score" (Number)
3. **Create new property:** "Lead Status" (Single select)

### **3.2 Lead Status Options**
```
- New
- Demo Requested
- Meeting Scheduled
- Qualified
- Proposal Sent
- Negotiation
- Closed Won
- Closed Lost
- Nurture
- Inactive
```

### **3.3 Lead Scoring Rules**
1. **Go to:** Settings → Lead Scoring
2. **Create scoring rules:**

#### **Positive Scoring:**
- **Form submission:** +10 points
- **Email open:** +2 points
- **Email click:** +5 points
- **Website visit:** +3 points
- **Service page visit:** +5 points
- **Company size > 10 employees:** +10 points
- **Location = South Africa:** +5 points
- **Demo request:** +20 points
- **Meeting scheduled:** +25 points

#### **Negative Scoring:**
- **Email unsubscribed:** -10 points
- **No activity for 30 days:** -5 points
- **No activity for 60 days:** -10 points

---

## 🔄 **Step 4: Advanced Automation Workflows**

### **4.1 Meeting Scheduling Workflow**
```
Workflow Name: "Meeting Scheduled - Follow-up"
Trigger: Contact property changes
Property: Meeting Scheduled = Yes
```

**Steps:**
1. **Send meeting preparation email**
2. **Create task for meeting prep**
3. **Update lead status to "Meeting Scheduled"**
4. **Add to "Active Prospects" list**

### **4.2 Lead Nurturing Workflow**
```
Workflow Name: "Lead Nurturing - Educational Content"
Trigger: Contact property changes
Property: Lead Status = Nurture
```

**Steps:**
1. **Send welcome email (Day 1)**
2. **Send case study (Day 7)**
3. **Send industry insights (Day 14)**
4. **Send demo offer (Day 21)**
5. **Check engagement and update status**

### **4.3 Re-engagement Workflow**
```
Workflow Name: "Re-engagement - Inactive Leads"
Trigger: Contact property changes
Property: Last activity > 30 days ago
```

**Steps:**
1. **Send re-engagement email**
2. **Wait 7 days**
3. **If no response, send industry update**
4. **Wait 14 days**
5. **If no response, send final re-engagement**
6. **Update status to "Inactive"**

---

## ⚙️ **Step 5: Integration Setup**

### **5.1 Calendly Integration**
1. **Connect Calendly to HubSpot:**
   - Go to Calendly settings
   - Add HubSpot integration
   - Configure meeting types
   - Set up automatic contact creation

### **5.2 Form Integration**
1. **Update website forms:**
   - Ensure all forms submit to HubSpot
   - Add required fields (name, email, company)
   - Add optional fields (phone, company size, industry)

### **5.3 Email Integration**
1. **Set up email tracking:**
   - Enable email open tracking
   - Enable email click tracking
   - Set up email templates

---

## 📈 **Step 6: Testing & Optimization**

### **6.1 Test Workflows**
1. **Create test contact**
2. **Submit test form**
3. **Verify email delivery**
4. **Check lead scoring**
5. **Verify task creation**

### **6.2 Monitor Performance**
1. **Track workflow enrollment**
2. **Monitor email open rates**
3. **Check lead conversion rates**
4. **Review task completion rates**

### **6.3 Optimize Based on Data**
1. **A/B test email subject lines**
2. **Adjust lead scoring criteria**
3. **Optimize workflow timing**
4. **Refine email content**

---

## 🎯 **Implementation Checklist**

### **Week 1: Foundation**
- [ ] Set up lead scoring properties
- [ ] Create email templates
- [ ] Build demo request workflow
- [ ] Test basic automation

### **Week 2: Core Automation**
- [ ] Set up meeting scheduling workflow
- [ ] Create lead nurturing sequence
- [ ] Configure re-engagement campaign
- [ ] Integrate Calendly

### **Week 3: Advanced Features**
- [ ] Set up customer onboarding workflow
- [ ] Create service-specific nurturing
- [ ] Configure advanced lead scoring
- [ ] Set up reporting dashboards

### **Week 4: Optimization**
- [ ] Monitor performance metrics
- [ ] A/B test email content
- [ ] Optimize workflow timing
- [ ] Refine lead scoring criteria

---

## 🚨 **Common Issues & Solutions**

### **Issue 1: Emails Not Sending**
**Solution:**
- Check email template setup
- Verify contact email addresses
- Check HubSpot sending limits
- Review spam filter settings

### **Issue 2: Workflows Not Triggering**
**Solution:**
- Verify trigger conditions
- Check enrollment criteria
- Review contact properties
- Test with sample contacts

### **Issue 3: Lead Scoring Not Working**
**Solution:**
- Check property setup
- Verify scoring rules
- Review contact data
- Test scoring manually

### **Issue 4: Integration Issues**
**Solution:**
- Check API connections
- Verify webhook setup
- Review error logs
- Contact support if needed

---

## 📞 **Support Resources**

### **HubSpot Resources:**
- **HubSpot Academy:** Free training courses
- **HubSpot Community:** User forums
- **HubSpot Support:** Technical assistance
- **HubSpot Documentation:** Detailed guides

### **Implementation Timeline:**
- **Basic Setup:** 1-2 days
- **Core Workflows:** 3-5 days
- **Advanced Features:** 1-2 weeks
- **Optimization:** Ongoing

---

**Ready to implement? Start with Step 1 and work through each section systematically!**
