-- Extended tool database for Tech Stack Auditor
-- Add more tools to the existing tools table

INSERT INTO tools (name, category, subcategory, avg_monthly_cost, description) VALUES
-- CRM & Sales
('Pipedrive', 'CRM', 'Customer Relationship Management', 25.00, 'Sales-focused CRM platform'),
('Zoho CRM', 'CRM', 'Customer Relationship Management', 18.00, 'Comprehensive CRM solution'),
('Copper', 'CRM', 'Customer Relationship Management', 25.00, 'Google Workspace native CRM'),

-- Communication & Collaboration
('Discord', 'Communication', 'Team Chat', 10.00, 'Voice and text communication platform'),
('Telegram', 'Communication', 'Team Chat', 0.00, 'Secure messaging platform'),
('WhatsApp Business', 'Communication', 'Customer Support', 0.00, 'Business messaging platform'),
('Intercom', 'Communication', 'Customer Support', 74.00, 'Customer messaging platform'),
('Zendesk', 'Communication', 'Customer Support', 55.00, 'Customer service platform'),

-- Project Management
('Notion', 'Project Management', 'All-in-one Workspace', 10.00, 'Collaborative workspace'),
('Airtable', 'Project Management', 'Database Management', 20.00, 'Flexible database platform'),
('ClickUp', 'Project Management', 'Task Management', 9.00, 'All-in-one productivity platform'),
('Basecamp', 'Project Management', 'Team Collaboration', 25.00, 'Simple project management'),
('Jira', 'Project Management', 'Issue Tracking', 7.00, 'Agile project management'),

-- Marketing & Analytics
('Google Analytics', 'Marketing', 'Web Analytics', 0.00, 'Website analytics platform'),
('Hotjar', 'Marketing', 'User Analytics', 39.00, 'User behavior analytics'),
('Mixpanel', 'Marketing', 'Product Analytics', 25.00, 'Product analytics platform'),
('Amplitude', 'Marketing', 'Product Analytics', 61.00, 'Digital analytics platform'),
('Segment', 'Marketing', 'Customer Data', 120.00, 'Customer data platform'),
('ActiveCampaign', 'Marketing', 'Email Marketing', 29.00, 'Email marketing automation'),
('ConvertKit', 'Marketing', 'Email Marketing', 29.00, 'Creator-focused email marketing'),
('Buffer', 'Marketing', 'Social Media', 15.00, 'Social media management'),
('Hootsuite', 'Marketing', 'Social Media', 49.00, 'Social media management platform'),

-- Design & Creative
('Figma', 'Design', 'UI/UX Design', 15.00, 'Collaborative design platform'),
('Sketch', 'Design', 'UI/UX Design', 10.00, 'Digital design toolkit'),
('Adobe Photoshop', 'Design', 'Photo Editing', 21.00, 'Photo editing software'),
('Adobe Illustrator', 'Design', 'Vector Graphics', 21.00, 'Vector graphics editor'),
('Canva Pro', 'Design', 'Graphic Design', 15.00, 'Professional design platform'),

-- Development & Technical
('GitHub', 'Development', 'Version Control', 4.00, 'Code hosting platform'),
('GitLab', 'Development', 'Version Control', 19.00, 'DevOps platform'),
('Vercel', 'Development', 'Hosting', 20.00, 'Frontend deployment platform'),
('Netlify', 'Development', 'Hosting', 19.00, 'Web development platform'),
('AWS', 'Development', 'Cloud Infrastructure', 100.00, 'Cloud computing services'),
('DigitalOcean', 'Development', 'Cloud Infrastructure', 25.00, 'Cloud infrastructure provider'),
('Heroku', 'Development', 'Platform as a Service', 25.00, 'Cloud application platform'),

-- Finance & Accounting
('QuickBooks', 'Finance', 'Accounting', 30.00, 'Accounting software'),
('Xero', 'Finance', 'Accounting', 13.00, 'Cloud accounting software'),
('FreshBooks', 'Finance', 'Invoicing', 17.00, 'Invoicing and time tracking'),
('Wave', 'Finance', 'Accounting', 0.00, 'Free accounting software'),
('Stripe', 'Finance', 'Payment Processing', 0.00, 'Online payment processing'),
('PayPal', 'Finance', 'Payment Processing', 0.00, 'Digital payment platform'),

-- HR & People
('BambooHR', 'HR', 'Human Resources', 8.25, 'HR management platform'),
('Workday', 'HR', 'Human Resources', 35.00, 'Enterprise HR platform'),
('Gusto', 'HR', 'Payroll', 40.00, 'Payroll and benefits platform'),
('ADP', 'HR', 'Payroll', 59.00, 'Payroll services'),
('15Five', 'HR', 'Performance Management', 7.00, 'Performance management platform'),

-- Security & IT
('1Password', 'Security', 'Password Management', 8.00, 'Password manager'),
('LastPass', 'Security', 'Password Management', 3.00, 'Password management solution'),
('Okta', 'Security', 'Identity Management', 2.00, 'Identity and access management'),
('Auth0', 'Security', 'Authentication', 23.00, 'Authentication platform'),
('Cloudflare', 'Security', 'Web Security', 20.00, 'Web performance and security'),

-- Storage & Backup
('Dropbox', 'Storage', 'File Storage', 15.00, 'Cloud file storage'),
('Box', 'Storage', 'File Storage', 7.00, 'Enterprise file sharing'),
('OneDrive', 'Storage', 'File Storage', 6.00, 'Microsoft cloud storage'),
('Google Drive', 'Storage', 'File Storage', 6.00, 'Google cloud storage'),
('Backblaze', 'Storage', 'Backup', 6.00, 'Cloud backup service'),

-- Customer Success
('ChurnZero', 'Customer Success', 'Customer Retention', 300.00, 'Customer success platform'),
('Gainsight', 'Customer Success', 'Customer Retention', 1000.00, 'Customer success management'),
('Pendo', 'Customer Success', 'Product Analytics', 20000.00, 'Product experience platform'),

-- E-commerce
('Shopify', 'E-commerce', 'Online Store', 29.00, 'E-commerce platform'),
('WooCommerce', 'E-commerce', 'Online Store', 0.00, 'WordPress e-commerce plugin'),
('Magento', 'E-commerce', 'Online Store', 22000.00, 'Enterprise e-commerce platform'),
('BigCommerce', 'E-commerce', 'Online Store', 29.00, 'E-commerce platform'),

-- Video & Meetings
('Loom', 'Communication', 'Video Recording', 10.00, 'Video messaging platform'),
('Calendly', 'Productivity', 'Scheduling', 10.00, 'Appointment scheduling'),
('Acuity Scheduling', 'Productivity', 'Scheduling', 25.00, 'Online appointment scheduling'),
('GoToMeeting', 'Communication', 'Video Conferencing', 14.00, 'Video conferencing solution'),
('WebEx', 'Communication', 'Video Conferencing', 17.95, 'Video conferencing platform');

-- Update existing tools with more accurate pricing
UPDATE tools SET avg_monthly_cost = 45.00 WHERE name = 'HubSpot';
UPDATE tools SET avg_monthly_cost = 25.00 WHERE name = 'Salesforce';
UPDATE tools SET avg_monthly_cost = 6.67 WHERE name = 'Slack';
UPDATE tools SET avg_monthly_cost = 4.00 WHERE name = 'Microsoft Teams';
UPDATE tools SET avg_monthly_cost = 14.99 WHERE name = 'Zoom';
UPDATE tools SET avg_monthly_cost = 6.00 WHERE name = 'Google Workspace';
UPDATE tools SET avg_monthly_cost = 6.00 WHERE name = 'Microsoft 365';