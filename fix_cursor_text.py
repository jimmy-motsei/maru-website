#!/usr/bin/env python3
"""
Fix the Cyrillic "С" to Latin "C" in cursor text across all HTML files
"""

import os
import re

def fix_cursor_text(file_path):
    """Fix the Cyrillic 'С' to Latin 'C' in cursor text"""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Find and replace the Cyrillic "С" with Latin "C" in the cursor text
        old_text = 'Сhoose'
        new_text = 'Choose'
        
        if old_text in content:
            new_content = content.replace(old_text, new_text)
            
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            
            print(f"✅ Fixed: {file_path}")
            return True
        else:
            print(f"ℹ️  No Cyrillic 'С' found: {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error fixing {file_path}: {e}")
        return False

def fix_all_cursor_text():
    """Fix cursor text in all HTML files"""
    
    # Get all HTML files
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    
    fixed_count = 0
    total_files = 0
    
    for filename in html_files:
        total_files += 1
        if fix_cursor_text(filename):
            fixed_count += 1
    
    print(f"\n📊 Summary:")
    print(f"Total HTML files: {total_files}")
    print(f"Files with Cyrillic 'С' fixed: {fixed_count}")
    print(f"Files without Cyrillic 'С': {total_files - fixed_count}")

if __name__ == "__main__":
    fix_all_cursor_text()



