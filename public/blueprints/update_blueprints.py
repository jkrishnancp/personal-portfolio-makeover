#!/usr/bin/env python3
"""
Blueprint HTML Batch Processor
==============================
Transforms 250 blueprint HTML files with the Corporate Executive Navy & Gold theme.

Usage:
    python update_blueprints.py --input ./bllueprint --output ./blueprints

Features:
    - Removes existing inline <style> blocks
    - Injects link to shared theme.css
    - Adds consistent header with navigation
    - Adds consistent footer with branding
    - Preserves all original content
    - Renames files to web-safe names
    - Generates file mapping JSON
"""

import os
import re
import json
import shutil
import argparse
from pathlib import Path
from html.parser import HTMLParser
from datetime import datetime

# Configuration
PORTFOLIO_URL = "../index.html"
BLUEPRINTS_URL = "../security-blueprints.html"
THEME_CSS = "theme.css"

# Header template
HEADER_TEMPLATE = '''<header class="blueprint-header">
    <a href="{portfolio_url}" class="logo">JK Portfolio</a>
    <nav>
        <a href="{portfolio_url}" class="back-link">Back to Portfolio</a>
        <a href="{blueprints_url}">All Blueprints</a>
    </nav>
</header>'''

# Footer template
FOOTER_TEMPLATE = '''<footer class="blueprint-footer">
    <p>Part of the <span class="brand">Security Blueprint Library</span></p>
    <p>&copy; {year} JK Portfolio. All rights reserved.</p>
</footer>'''

# Google Fonts link
FONTS_LINK = '''<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">'''


def sanitize_filename(filename: str) -> str:
    """Convert filename to web-safe format."""
    # Remove file extension for processing
    name, ext = os.path.splitext(filename)
    
    # Replace special characters
    replacements = {
        '→': '-to-',
        '&': '-and-',
        '+': '-plus-',
        ' ': '-',
        '(': '',
        ')': '',
        ',': '',
        "'": '',
        '"': '',
        '/': '-',
        '\\': '-',
        ':': '-',
        ';': '-',
        '?': '',
        '!': '',
        '@': '-at-',
        '#': '-num-',
        '$': '',
        '%': '-pct-',
        '^': '',
        '*': '',
        '=': '-eq-',
        '[': '',
        ']': '',
        '{': '',
        '}': '',
        '|': '-',
        '<': '',
        '>': '',
        '`': '',
        '~': '',
    }
    
    for char, replacement in replacements.items():
        name = name.replace(char, replacement)
    
    # Remove multiple consecutive dashes
    name = re.sub(r'-+', '-', name)
    
    # Remove leading/trailing dashes
    name = name.strip('-')
    
    # Convert to lowercase
    name = name.lower()
    
    return f"{name}{ext}"


def extract_title(html_content: str) -> str:
    """Extract title from HTML content."""
    # Try to find <title> tag
    title_match = re.search(r'<title[^>]*>(.*?)</title>', html_content, re.IGNORECASE | re.DOTALL)
    if title_match:
        return title_match.group(1).strip()
    
    # Try to find <h1> tag
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', html_content, re.IGNORECASE | re.DOTALL)
    if h1_match:
        # Remove any HTML tags from within
        return re.sub(r'<[^>]+>', '', h1_match.group(1)).strip()
    
    return "Blueprint"


def extract_body_content(html_content: str) -> str:
    """Extract content from within <body> tags."""
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.IGNORECASE | re.DOTALL)
    if body_match:
        return body_match.group(1).strip()
    return html_content


def remove_inline_styles(html_content: str) -> str:
    """Remove all <style> blocks from HTML."""
    return re.sub(r'<style[^>]*>.*?</style>', '', html_content, flags=re.IGNORECASE | re.DOTALL)


def remove_existing_header_footer(content: str) -> str:
    """Remove any existing header/footer elements."""
    # Remove header elements
    content = re.sub(r'<header[^>]*>.*?</header>', '', content, flags=re.IGNORECASE | re.DOTALL)
    # Remove footer elements
    content = re.sub(r'<footer[^>]*>.*?</footer>', '', content, flags=re.IGNORECASE | re.DOTALL)
    # Remove nav elements at the start
    content = re.sub(r'^[\s\n]*<nav[^>]*>.*?</nav>', '', content, flags=re.IGNORECASE | re.DOTALL)
    return content.strip()


def wrap_in_container(content: str) -> str:
    """Wrap content in a container div if not already wrapped."""
    content = content.strip()
    
    # Check if already wrapped
    if content.startswith('<div class="blueprint-container"'):
        return content
    
    # Check if content starts with container-like div
    if re.match(r'^<div[^>]*class="[^"]*container[^"]*"', content, re.IGNORECASE):
        # Add our class
        return re.sub(r'^<div([^>]*)class="([^"]*)"', r'<div\1class="blueprint-container \2"', content)
    
    return f'<div class="blueprint-container">\n{content}\n</div>'


def process_html_file(input_path: Path, output_path: Path) -> dict:
    """Process a single HTML file and return metadata."""
    try:
        with open(input_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Extract metadata before processing
        title = extract_title(content)
        original_filename = input_path.name
        
        # Extract body content
        body_content = extract_body_content(content)
        
        # Remove inline styles
        body_content = remove_inline_styles(body_content)
        
        # Remove existing header/footer
        body_content = remove_existing_header_footer(body_content)
        
        # Wrap in container
        body_content = wrap_in_container(body_content)
        
        # Build new HTML document
        header = HEADER_TEMPLATE.format(
            portfolio_url=PORTFOLIO_URL,
            blueprints_url=BLUEPRINTS_URL
        )
        
        footer = FOOTER_TEMPLATE.format(year=datetime.now().year)
        
        new_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Security Blueprints</title>
    {FONTS_LINK}
    <link rel="stylesheet" href="{THEME_CSS}">
</head>
<body>
    {header}
    
    {body_content}
    
    {footer}
</body>
</html>'''
        
        # Ensure output directory exists
        output_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Write processed file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(new_html)
        
        return {
            'success': True,
            'original': original_filename,
            'new': output_path.name,
            'title': title
        }
        
    except Exception as e:
        return {
            'success': False,
            'original': input_path.name,
            'error': str(e)
        }


def main():
    parser = argparse.ArgumentParser(description='Process blueprint HTML files')
    parser.add_argument('--input', '-i', default='./bllueprint', 
                        help='Input directory containing HTML files')
    parser.add_argument('--output', '-o', default='./blueprints',
                        help='Output directory for processed files')
    parser.add_argument('--backup', '-b', action='store_true',
                        help='Create backup of input files')
    parser.add_argument('--dry-run', '-n', action='store_true',
                        help='Show what would be done without making changes')
    
    args = parser.parse_args()
    
    input_dir = Path(args.input)
    output_dir = Path(args.output)
    
    if not input_dir.exists():
        print(f"Error: Input directory '{input_dir}' does not exist")
        return 1
    
    # Get all HTML files
    html_files = list(input_dir.glob('*.html'))
    
    if not html_files:
        print(f"No HTML files found in '{input_dir}'")
        return 1
    
    print(f"Found {len(html_files)} HTML files to process")
    print(f"Input: {input_dir.absolute()}")
    print(f"Output: {output_dir.absolute()}")
    print("-" * 60)
    
    if args.dry_run:
        print("DRY RUN - No files will be modified\n")
    
    # Create backup if requested
    if args.backup and not args.dry_run:
        backup_dir = input_dir.parent / f"{input_dir.name}_backup_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        shutil.copytree(input_dir, backup_dir)
        print(f"Backup created: {backup_dir}")
    
    # Process files
    results = []
    file_mapping = {}
    
    for i, html_file in enumerate(sorted(html_files), 1):
        original_name = html_file.name
        new_name = sanitize_filename(original_name)
        output_path = output_dir / new_name
        
        if args.dry_run:
            print(f"[{i:3d}/{len(html_files)}] {original_name}")
            print(f"         -> {new_name}")
            file_mapping[original_name] = new_name
            continue
        
        print(f"[{i:3d}/{len(html_files)}] Processing: {original_name}")
        
        result = process_html_file(html_file, output_path)
        results.append(result)
        
        if result['success']:
            print(f"         -> {result['new']}")
            file_mapping[original_name] = result['new']
        else:
            print(f"         !! Error: {result['error']}")
    
    # Copy theme.css to output directory if not dry run
    if not args.dry_run:
        theme_src = Path(__file__).parent / 'theme.css'
        theme_dst = output_dir / 'theme.css'
        if theme_src.exists():
            # Check if source and destination are the same file to avoid SameFileError
            if theme_src.resolve() != theme_dst.resolve():
                shutil.copy(theme_src, theme_dst)
                print(f"\nCopied theme.css to {output_dir}")
            else:
                print(f"\ntheme.css already exists in {output_dir}")
    
    # Save file mapping
    mapping_path = output_dir / 'file_mapping.json'
    if not args.dry_run:
        output_dir.mkdir(parents=True, exist_ok=True)
        with open(mapping_path, 'w', encoding='utf-8') as f:
            json.dump(file_mapping, f, indent=2)
        print(f"File mapping saved to: {mapping_path}")
    
    # Summary
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    
    if args.dry_run:
        print(f"Files to process: {len(html_files)}")
    else:
        successful = sum(1 for r in results if r['success'])
        failed = sum(1 for r in results if not r['success'])
        print(f"Successfully processed: {successful}")
        print(f"Failed: {failed}")
        
        if failed > 0:
            print("\nFailed files:")
            for r in results:
                if not r['success']:
                    print(f"  - {r['original']}: {r['error']}")
    
    # Generate blueprint data for security-blueprints.html
    print("\n" + "=" * 60)
    print("BLUEPRINT DATA FOR security-blueprints.html")
    print("=" * 60)
    print("\nCopy this into your security-blueprints.html file:\n")
    
    blueprint_data = []
    for r in results if results else [{'original': f.name, 'new': sanitize_filename(f.name), 'title': f.stem} for f in html_files]:
        if isinstance(r, dict) and r.get('success', True):
            blueprint_data.append({
                'id': len(blueprint_data) + 1,
                'title': r.get('title', r.get('new', '').replace('.html', '').replace('-', ' ').title()),
                'file': r.get('new', sanitize_filename(r.get('original', '')))
            })
    
    print("const blueprintFiles = [")
    for bp in blueprint_data[:10]:  # Show first 10 as example
        print(f'  {{ id: {bp["id"]}, title: "{bp["title"]}", file: "blueprints/{bp["file"]}" }},')
    print("  // ... more entries")
    print("];")
    
    return 0


if __name__ == '__main__':
    exit(main())
