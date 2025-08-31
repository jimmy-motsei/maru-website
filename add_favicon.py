#!/usr/bin/env python3
"""
Script to add favicon links to all HTML files
"""

import os
import re

def add_favicon_to_html_files():
    """Add favicon links to all HTML files in the current directory"""
    
    # Favicon HTML to insert
    favicon_html = '''    <!-- favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon.png">
    <link rel="shortcut icon" href="img/favicon.png">'''
    
    # Get all HTML files
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    
    for filename in html_files:
        print(f"Processing {filename}...")
        
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if favicon already exists
        if 'favicon' in content.lower():
            print(f"  ✓ {filename} already has favicon")
            continue
        
        # Find the pattern to insert after
        pattern = r'(<!-- maru scss -->\s*<link rel="stylesheet" href="css/style\.css\?v=3\.3" />)'
        
        if re.search(pattern, content):
            # Insert favicon after the maru scss link
            new_content = re.sub(pattern, r'\1\n' + favicon_html, content)
            
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"  ✓ Added favicon to {filename}")
        else:
            print(f"  ✗ Could not find insertion point in {filename}")

if __name__ == "__main__":
    add_favicon_to_html_files()
