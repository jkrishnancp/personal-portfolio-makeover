#!/usr/bin/env python3
"""
Quick fix script to update all blueprint HTML files to use correct absolute URLs.
Run this from the blueprints directory: python fix_links.py
"""

import os
import re
from pathlib import Path

def fix_links_in_file(filepath: Path) -> bool:
    """Fix navigation links in a single HTML file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Fix portfolio/home links
        content = re.sub(
            r'href="../index\.html"',
            'href="/"',
            content
        )
        
        # Fix blueprints listing link
        content = re.sub(
            r'href="../security-blueprints\.html"',
            'href="/security-blueprints.html"',
            content
        )
        
        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    current_dir = Path('.')
    html_files = list(current_dir.glob('*.html'))
    
    # Exclude non-blueprint files
    exclude = {'security-blueprints.html'}
    html_files = [f for f in html_files if f.name not in exclude]
    
    print(f"Found {len(html_files)} HTML files to process")
    
    fixed_count = 0
    for i, html_file in enumerate(sorted(html_files), 1):
        if fix_links_in_file(html_file):
            fixed_count += 1
            print(f"[{i:3d}/{len(html_files)}] Fixed: {html_file.name}")
        else:
            print(f"[{i:3d}/{len(html_files)}] No changes: {html_file.name}")
    
    print(f"\n✅ Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
