#!/usr/bin/env python3
"""
Script to update logo image source to use the new logo file
"""

import os
import glob
import re

def update_file_content(file_path):
    """Update content in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Update the image source to use the new logo file
        pattern = r'src="img/maru-logo\.svg"'
        replacement = 'src="img/new_maru_logo_neutral.png"'
        
        content = re.sub(pattern, replacement, content)
        
        # Also update any PNG references that might still exist
        pattern2 = r'src="img/maru-logo\.png"'
        replacement2 = 'src="img/new_maru_logo_neutral.png"'
        
        content = re.sub(pattern2, replacement2, content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to update all files"""
    print("Updating logo image source to use new_maru_logo_neutral.png...")
    
    # Get all HTML files
    html_files = glob.glob("*.html")
    
    updated_count = 0
    
    for file_path in html_files:
        if os.path.exists(file_path):
            if update_file_content(file_path):
                updated_count += 1
    
    print(f"\nUpdate complete! Updated {updated_count} files.")
    print("\nYour new Maru logo should now appear in all footers!")

if __name__ == "__main__":
    main()

