#!/usr/bin/env python3
"""
Social Media Links Update Script
Updates all HTML files with the correct social media URLs once accounts are created.
"""

import os
import re
from pathlib import Path

# Social media URLs (update these once accounts are created)
SOCIAL_LINKS = {
    'linkedin': 'https://linkedin.com/company/maru-ai',
    'twitter': 'https://x.com/maru_ai',  # Updated to X
    'facebook': 'https://facebook.com/maruai',
    'instagram': 'https://instagram.com/maru_ai'
}

def update_social_links_in_file(file_path):
    """Update social media links in a single HTML file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Update LinkedIn
        content = re.sub(
            r'href="https://linkedin\.com/company/maru-ai"',
            f'href="{SOCIAL_LINKS["linkedin"]}"',
            content
        )
        
        # Update Twitter/X
        content = re.sub(
            r'href="https://twitter\.com/maru_ai"',
            f'href="{SOCIAL_LINKS["twitter"]}"',
            content
        )
        
        # Update Facebook
        content = re.sub(
            r'href="https://facebook\.com/maruai"',
            f'href="{SOCIAL_LINKS["facebook"]}"',
            content
        )
        
        # Update Instagram
        content = re.sub(
            r'href="https://instagram\.com/maru_ai"',
            f'href="{SOCIAL_LINKS["instagram"]}"',
            content
        )
        
        # Only write if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Updated: {file_path}")
            return True
        else:
            print(f"⏭️  No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error updating {file_path}: {e}")
        return False

def main():
    """Update social media links in all HTML files."""
    print("🔗 Updating Social Media Links")
    print("=" * 40)
    
    # Find all HTML files
    html_files = list(Path('.').glob('*.html'))
    
    if not html_files:
        print("❌ No HTML files found in current directory")
        return
    
    print(f"📄 Found {len(html_files)} HTML files")
    print()
    
    updated_count = 0
    
    for html_file in html_files:
        if update_social_links_in_file(html_file):
            updated_count += 1
    
    print()
    print("=" * 40)
    print(f"✅ Updated {updated_count} files")
    print("🎉 Social media links update complete!")
    
    print("\n📋 Next steps:")
    print("1. Test the updated links")
    print("2. Commit changes to git")
    print("3. Push to production")

if __name__ == "__main__":
    main()

