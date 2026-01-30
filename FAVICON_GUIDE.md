# Favicon Customization Guide

## Current Favicon
The portfolio currently uses a simple SVG favicon with your initials "SS" on a gradient background (pastel blue to purple).

## Replacing with Your Own Favicon

### Option 1: Using Your Memoji or Photo

1. **Prepare your image:**
   - Recommended: Use your memoji, avatar, or professional photo
   - Image should be square (1:1 aspect ratio)
   - Minimum size: 512x512 pixels
   - Format: PNG with transparent background works best

2. **Convert to multiple sizes:**
   
   **Online Tool (Easiest):**
   - Visit: https://realfavicongenerator.net/
   - Upload your image
   - Download the generated favicon package
   - Extract all files to `/app/frontend/public/`

   **Or manually create sizes:**
   - 16x16px → Save as `favicon-16x16.png`
   - 32x32px → Save as `favicon-32x32.png`
   - 180x180px → Save as `apple-touch-icon.png`
   - 512x512px → Save as `favicon-512x512.png` (for PWA)

3. **Place files in the correct location:**
   ```
   /app/frontend/public/
   ├── favicon.svg (or favicon.ico)
   ├── favicon-16x16.png
   ├── favicon-32x32.png
   ├── apple-touch-icon.png
   └── favicon-512x512.png
   ```

4. **Update `/app/frontend/public/index.html` if needed:**
   
   The HTML head already includes:
   ```html
   <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
   ```

   If using `.ico` instead of `.svg`, change the first line to:
   ```html
   <link rel="icon" type="image/x-icon" href="/favicon.ico" />
   ```

### Option 2: Using Emoji or Icon

If you want to use an emoji as a favicon:

1. Create an SVG file with an emoji:
   ```html
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
     <text y="0.9em" font-size="90">👩‍💻</text>
   </svg>
   ```

2. Save as `/app/frontend/public/favicon.svg`

3. No need to generate multiple sizes for SVG

### Option 3: Custom Design

Use a design tool like:
- **Figma** (free, online)
- **Canva** (free, has favicon templates)
- **Adobe Illustrator** (professional)

Design tips:
- Keep it simple - favicons are tiny
- Use high contrast
- Avoid fine details
- Test at 16x16px size

## Testing Your Favicon

1. After replacing files, clear your browser cache:
   - Chrome: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
   - Or open in Incognito/Private window

2. Refresh the page: Ctrl+R or Cmd+R

3. Check the browser tab - you should see your new favicon

## Current Files

The following files currently exist:
- `/app/frontend/public/favicon.svg` - SVG with "SS" initials

To replace, simply overwrite these files with your own versions (keeping the same names).

## Browser Compatibility

Different browsers prefer different formats:
- **Modern browsers**: SVG (scalable, looks good at any size)
- **Safari (iOS)**: apple-touch-icon.png (180x180)
- **Older browsers**: favicon.ico (multi-size ICO file)

For maximum compatibility, provide all formats.

## Quick Command to Check Current Favicon

```bash
ls -la /app/frontend/public/favicon*
```

This will show all favicon-related files in your public folder.

---

**Need help?** The favicon should "just work" once you replace the files. If you have issues, check the browser console (F12) for errors loading the favicon files.
