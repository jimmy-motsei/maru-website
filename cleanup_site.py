#!/usr/bin/env python3
"""
Site Cleanup Script for Maru AI Website
Fixes broken links and removes unused files
"""

import os
import re
import shutil
from pathlib import Path

def fix_broken_links():
    """Fix all broken links (href="#.") in HTML files"""
    
    # Find all HTML files recursively
    html_files = []
    for html_file in Path('.').rglob('*.html'):
        # Skip files in hidden directories or common build directories
        if not any(part.startswith('.') or part in ['node_modules', 'dist', 'build'] 
                  for part in html_file.parts):
            html_files.append(str(html_file))
    
    print(f"Found {len(html_files)} HTML files to process")
    
    # Link replacements
    link_replacements = {
        'href="#.">Privacy Policy': 'href="privacy-policy.html">Privacy Policy',
        'href="#.">Terms and conditions': 'href="terms-conditions.html">Terms and conditions',
        'href="#.">Cookie Policy': 'href="cookie-policy.html">Cookie Policy',
        'href="#.">Careers': 'href="careers.html">Careers',
        'href="#.">Resources': 'href="knowledge.html">Resources',
        'href="#.">Other pages': 'href="contact.html">Other pages',
        'href="#." target="_blank" class="social-icon">': 'href="https://linkedin.com/company/maru-ai" target="_blank" class="social-icon">',
        'href="#." class="mil-light-soft">Privacy Policy': 'href="privacy-policy.html" class="mil-light-soft">Privacy Policy',
        'href="#." class="mil-light-soft">Terms and conditions': 'href="terms-conditions.html" class="mil-light-soft">Terms and conditions',
        'href="#." class="mil-light-soft">Cookie Policy': 'href="cookie-policy.html" class="mil-light-soft">Cookie Policy',
        'href="#." class="mil-light-soft">Careers': 'href="careers.html" class="mil-light-soft">Careers',
    }
    
    # Social media icon replacements
    social_icons = [
        ('<i class="far fa-circle"></i>', '<i class="fab fa-linkedin-in"></i>'),
        ('<i class="far fa-circle"></i>', '<i class="fab fa-twitter"></i>'),
        ('<i class="far fa-circle"></i>', '<i class="fab fa-facebook-f"></i>'),
        ('<i class="far fa-circle"></i>', '<i class="fab fa-instagram"></i>'),
    ]
    
    for html_file in html_files:
        if not os.path.exists(html_file):
            continue
            
        print(f"Processing {html_file}...")
        
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix broken links
        for old_link, new_link in link_replacements.items():
            content = content.replace(old_link, new_link)
        
        # Fix social media links
        social_links = [
            'https://linkedin.com/company/maru-ai',
            'https://twitter.com/maru_ai', 
            'https://facebook.com/maruai',
            'https://instagram.com/maru_ai'
        ]
        
        # Replace social media placeholders
        social_pattern = r'href="#." target="_blank" class="social-icon">\s*<i class="far fa-circle"></i>'
        social_matches = re.findall(social_pattern, content)
        
        for i, match in enumerate(social_matches):
            if i < len(social_links):
                replacement = f'href="{social_links[i]}" target="_blank" class="social-icon">\n                              <i class="{social_icons[i][1]}"'
                content = content.replace(match, replacement, 1)
        
        # Write back the fixed content
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Fixed {html_file}")

def remove_unused_files():
    """Remove unused files and folders"""
    
    # Files that are definitely not used
    unused_files = [
        'home-1.html',  # Empty file
        'img/Founder.jpeg',  # Not referenced
        'img/.DS_Store',
        'img/optimized/works/.DS_Store',
        'img/optimized/works/1/.DS_Store',
        'img/works/.DS_Store',
        'img/works/1/.DS_Store',
    ]
    
    # Folders that might be unused
    potentially_unused_folders = [
        'img/works/2',
        'img/works/3', 
        'img/works/4',
        'img/works/5',
        'img/works/6',
        'img/optimized/works/2',
        'img/optimized/works/3',
        'img/optimized/works/4',
        'img/optimized/works/5',
        'img/optimized/works/6',
    ]
    
    print("\nRemoving unused files...")
    
    for file_path in unused_files:
        if os.path.exists(file_path):
            try:
                os.remove(file_path)
                print(f"✓ Removed {file_path}")
            except Exception as e:
                print(f"✗ Could not remove {file_path}: {e}")
    
    print("\nChecking potentially unused folders...")
    
    for folder_path in potentially_unused_folders:
        if os.path.exists(folder_path):
            # Check if folder is empty or contains only .DS_Store
            files = os.listdir(folder_path)
            if not files or (len(files) == 1 and '.DS_Store' in files):
                try:
                    shutil.rmtree(folder_path)
                    print(f"✓ Removed empty folder {folder_path}")
                except Exception as e:
                    print(f"✗ Could not remove {folder_path}: {e}")

def check_missing_images():
    """Check for missing images that are referenced"""
    
    print("\nChecking for missing images...")
    
    # Check for the missing robot_hand_network-320.webp
    missing_image = 'img/optimized/works/robot_hand_network-320.webp'
    if not os.path.exists(missing_image):
        print(f"⚠ Missing image: {missing_image}")
        print("  This image is referenced in index.html but doesn't exist")
        
        # Check if we have the original
        original = 'img/works/robot_hand_network.png'
        if os.path.exists(original):
            print(f"  Original exists: {original}")
            print("  Consider creating the optimized version or updating the reference")

def main():
    """Main cleanup function"""
    
    print("🧹 Maru AI Website Cleanup")
    print("=" * 40)
    
    # Fix broken links
    print("\n1. Fixing broken links...")
    fix_broken_links()
    
    # Remove unused files
    print("\n2. Removing unused files...")
    remove_unused_files()
    
    # Check for missing images
    print("\n3. Checking for missing images...")
    check_missing_images()
    
    print("\n✅ Cleanup complete!")
    print("\nNext steps:")
    print("- Review the changes made")
    print("- Test all links work correctly")
    print("- Consider optimizing remaining images")
    print("- Update any remaining placeholder content")

if __name__ == "__main__":
    main()
