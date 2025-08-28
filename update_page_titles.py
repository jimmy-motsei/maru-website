#!/usr/bin/env python3
"""
Update page titles across all HTML files to be more descriptive and SEO-friendly
"""

import os
import re

def update_page_title(file_path, new_title):
    """Update the title tag in an HTML file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Find and replace the title tag
        old_pattern = r'<title>[^<]*</title>'
        new_title_tag = f'<title>{new_title}</title>'
        
        if re.search(old_pattern, content):
            new_content = re.sub(old_pattern, new_title_tag, content)
            
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            
            print(f"✅ Updated: {file_path}")
            return True
        else:
            print(f"❌ No title tag found: {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error updating {file_path}: {e}")
        return False

def update_all_titles():
    """Update titles for all HTML files"""
    
    # Define title mappings for different page types
    title_mappings = {
        # Main pages
        'home-1.html': 'Maru | AI-Powered Marketing & Growth Strategy',
        'index.html': 'Maru | AI-Powered Marketing & Growth Strategy',
        
        # Services pages
        'services.html': 'AI Marketing Services | Custom Automation & Strategy | Maru',
        'ai-strategy.html': 'AI Strategy Advisory | Business Transformation | Maru',
        'ai-campaign-design.html': 'AI Campaign Design | Intelligent Marketing | Maru',
        'ai-training.html': 'AI Training & Enablement | Team Development | Maru',
        'custom-automations.html': 'Custom Marketing Automation | AI Solutions | Maru',
        
        # Work/Portfolio pages
        
    
        
        # Blog/Content pages
        
        'knowledge.html': 'AI Marketing Knowledge Base | Resources | Maru',
        
        
        # Contact/About pages
        'contact.html': 'Contact Maru | AI Marketing Experts',
        'team.html': 'Our Team | AI Marketing Specialists | Maru',
    
        
        # Case study pages
        'case-saas-churn.html': 'SaaS Churn Reduction Case Study | AI Marketing | Maru',
        'case-health-data.html': 'Healthcare Data Analytics Case Study | Maru',
        'case-local-retail-ai.html': 'Local Retail AI Transformation | Case Study | Maru',
        'case-restaurant-online.html': 'Restaurant Digital Transformation | AI Case Study | Maru',
        'case-dikemefarms.html': 'Dikeme Farms AI Marketing Success | Case Study | Maru',
        'case-singilalodge.html': 'Singila Lodge AI Marketing | Tourism Case Study | Maru',
        'case-edu-personalization.html': 'Education Personalization AI | Case Study | Maru',
        'case-ecom-automation.html': 'E-commerce Automation Success | AI Case Study | Maru',
        
        # Article pages
        'article-ai-brand-operating-system.html': 'AI Brand Operating System | Strategy Guide | Maru',
        'article-adaptive-ai-ux-pattern-language.html': 'Adaptive AI UX Patterns | Design Guide | Maru',
        'article-ai-smb-us.html': 'AI for US Small Business | Marketing Guide | Maru',
        'article-ai-smb-eu.html': 'AI for EU Small Business | Marketing Strategy | Maru',
        'article-ai-smb-asia.html': 'AI for Asian Small Business | Growth Strategy | Maru',
        'article-code-smb.html': 'AI Marketing Code for SMBs | Implementation Guide | Maru',
        'article-creative-burnout-ai-era.html': 'Creative Burnout in AI Era | Marketing Insights | Maru',
        'article-ethical-data-pipelines.html': 'Ethical Data Pipelines | AI Marketing Ethics | Maru',
        'article-human-machine-collaboration-rituals.html': 'Human-Machine Collaboration | AI Marketing | Maru',
        'article-productizing-insight.html': 'Productizing Marketing Insights | AI Strategy | Maru',
        
        # Other pages
        '404.html': 'Page Not Found | Maru AI Marketing',
        
        
        # Solution pages
        'solution-1.html': 'AI Marketing Solution 1 | Custom Automation | Maru',
        'solution-2.html': 'AI Marketing Solution 2 | Growth Strategy | Maru',
        'solution-3.html': 'AI Marketing Solution 3 | Digital Transformation | Maru',
        'solution-4.html': 'AI Marketing Solution 4 | Business Intelligence | Maru',
        'solution-5.html': 'AI Marketing Solution 5 | Customer Experience | Maru',
        'solution-6.html': 'AI Marketing Solution 6 | Revenue Optimization | Maru',
        
        # Project pages
        'project-1.html': 'AI Marketing Project 1 | Case Study | Maru',
        'project-2.html': 'AI Marketing Project 2 | Success Story | Maru',
        'project-3.html': 'AI Marketing Project 3 | Transformation | Maru',
        'project-4.html': 'AI Marketing Project 4 | Innovation | Maru',
        'project-5.html': 'AI Marketing Project 5 | Growth | Maru',
        'project-6.html': 'AI Marketing Project 6 | Results | Maru',
    }
    
    updated_count = 0
    total_files = 0
    
    # Get all HTML files
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    
    for filename in html_files:
        total_files += 1
        
        if filename in title_mappings:
            new_title = title_mappings[filename]
            if update_page_title(filename, new_title):
                updated_count += 1
        else:
            # For files not in our mapping, use a generic but descriptive title
            base_name = filename.replace('.html', '').replace('-', ' ').replace('_', ' ')
            generic_title = f"{base_name.title()} | AI Marketing | Maru"
            if update_page_title(filename, generic_title):
                updated_count += 1
    
    print(f"\n📊 Summary:")
    print(f"Total HTML files: {total_files}")
    print(f"Successfully updated: {updated_count}")
    print(f"Failed to update: {total_files - updated_count}")

if __name__ == "__main__":
    update_all_titles()
