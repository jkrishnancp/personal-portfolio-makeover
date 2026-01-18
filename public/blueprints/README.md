# Blueprint Batch Processing Script

Transform your 250 security blueprint HTML files with a consistent Corporate Executive navy & gold theme.

## Prerequisites

- **Python 3.6+** (uses standard library only, no pip installs needed)
- HTML files in an input directory

## Quick Start

```bash
cd public
python blueprints/update_blueprints.py --input ./bllueprint --output ./blueprints
```

## Command Line Options

| Option | Short | Default | Description |
|--------|-------|---------|-------------|
| `--input` | `-i` | `./bllueprint` | Input directory containing raw HTML files |
| `--output` | `-o` | `./blueprints` | Output directory for processed files |
| `--backup` | `-b` | `false` | Create timestamped backup before processing |
| `--dry-run` | `-n` | `false` | Preview changes without modifying files |

## Usage Examples

### Preview changes (dry run)
```bash
python blueprints/update_blueprints.py --dry-run
```

### Process with backup
```bash
python blueprints/update_blueprints.py --backup
```

### Custom directories
```bash
python blueprints/update_blueprints.py -i ./my_source -o ./my_output
```

### Full command with all options
```bash
python blueprints/update_blueprints.py \
  --input ./bllueprint \
  --output ./blueprints \
  --backup \
  --dry-run
```

## What the Script Does

For each HTML file, the script performs these transformations:

### 1. Sanitizes Filenames
Converts special characters to web-safe names:
- `→` becomes `-to-`
- `&` becomes `-and-`
- `+` becomes `-plus-`
- Spaces and underscores become `-`
- Removes parentheses and special characters
- Converts to lowercase

### 2. Removes Existing Styles
Strips all inline `<style>` blocks to ensure clean theming.

### 3. Extracts Body Content
Preserves only the meaningful content from the `<body>` tag.

### 4. Removes Old Headers/Footers
Strips any existing navigation headers or footers.

### 5. Wraps Content
Adds `.blueprint-container` wrapper for consistent styling.

### 6. Injects Theme CSS
Links to the shared `theme.css` file for consistent styling.

### 7. Adds Navigation Header
Inserts a consistent header with:
- Site logo/title
- Navigation links (Home, Blueprints, Contact)
- Professional styling

### 8. Adds Footer
Adds branded footer with copyright and navigation.

## File Naming Conventions

| Original | Transformed |
|----------|-------------|
| `001-splunk_→_elastic_siem_migration_(global).html` | `001-splunk-to-elastic-siem-migration-global.html` |
| `005-zero_trust_strategy_&_roadmap.html` | `005-zero-trust-strategy-and-roadmap.html` |
| `009-firewall_rulebase_cleanup_(5+_years_of_d.html` | `009-firewall-rulebase-cleanup-5-plus-years-of-d.html` |

## Output Files

After running the script, you'll have:

```
blueprints/
├── 001-splunk-to-elastic-siem-migration-global.html
├── 002-qradar-deployment-for-financial-services.html
├── ... (248 more files)
├── theme.css
├── file_mapping.json
├── update_blueprints.py
└── README.md
```

### file_mapping.json
Contains the mapping from original to new filenames:
```json
{
  "001-splunk_→_elastic_siem_migration_(global).html": "001-splunk-to-elastic-siem-migration-global.html",
  ...
}
```

## Post-Processing Steps

1. **Push to GitHub/Lovable**
   ```bash
   git add public/blueprints/
   git commit -m "Add processed blueprint files with navy/gold theme"
   git push
   ```

2. **Delete the old folder** (optional)
   ```bash
   rm -rf public/bllueprint
   ```

3. **Update security-blueprints.html**
   The main index page should already link to `blueprints/` folder.

4. **Verify theme**
   Open any processed HTML file in a browser to confirm the navy & gold theme is applied.

## Troubleshooting

### SameFileError when copying theme.css
**Error:** `shutil.SameFileError: ... are the same file`

**Cause:** Running the script with output directory same as script location.

**Solution:** The script now handles this automatically. If you see this error, update to the latest version.

### Encoding errors
**Error:** `UnicodeDecodeError`

**Solution:** The script uses UTF-8 encoding. Ensure your source files are UTF-8 encoded.

### Missing input directory
**Error:** `Input directory not found`

**Solution:** Verify the path exists:
```bash
ls -la ./bllueprint
```

### Permission denied
**Error:** `PermissionError`

**Solution:** Check file permissions:
```bash
chmod -R 755 ./bllueprint
chmod -R 755 ./blueprints
```

## Theme Customization

To modify the theme, edit `theme.css`:

- **Primary Navy:** `#1e3a5f` - Main headers, navigation
- **Secondary Navy:** `#2c4a6e` - Hover states
- **Gold Accent:** `#c5a572` - Buttons, links, highlights
- **Light Gold:** `#d4b896` - Hover accents

## Support

For issues or questions, check the main project documentation or open an issue in the repository.
