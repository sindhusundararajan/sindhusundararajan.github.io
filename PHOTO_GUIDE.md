# Adding Your Professional Photo to the About Section

Your HEIC image format doesn't display in web browsers. Here's how to add your photo properly:

## Step 1: Convert HEIC to JPG/PNG

### Option A: Online Converter (Easiest)
1. Visit https://heictojpg.com or https://convertio.co/heic-jpg/
2. Upload your HEIC file (`IMG_5475.heic`)
3. Download the converted JPG file
4. Rename it to `profile-photo.jpg`

### Option B: Using Your Computer

**On Mac:**
1. Open the HEIC file in Preview
2. File → Export
3. Choose format: JPEG
4. Save as `profile-photo.jpg`

**On Windows:**
- Install HEIC support from Microsoft Store
- Or use an online converter (Option A)

## Step 2: Add Photo to Project

1. Save your converted `profile-photo.jpg` to:
   ```
   /app/frontend/public/images/profile-photo.jpg
   ```

2. Create the images folder if it doesn't exist:
   ```bash
   mkdir -p /app/frontend/public/images
   ```

## Step 3: Update About.jsx Component

Open `/app/frontend/src/components/About.jsx` and update the photo section (around line 46):

**Find this section:**
```jsx
{/* Professional Photo */}
<div className="relative group">
  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
    <div className="text-8xl font-bold text-foreground/60">SS</div>
    {/* Note: Replace with actual image when you have a web-compatible format (JPG/PNG/WebP) */}
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
</div>
```

**Replace with:**
```jsx
{/* Professional Photo */}
<div className="relative group">
  <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
    <img
      src="/images/profile-photo.jpg"
      alt="Sindhu Sundararajan - SDET"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
</div>
```

## Quick Command to Update (After placing image in public/images/)

Run this command to automatically update the About.jsx file:

```bash
cd /app/frontend/src/components
# Then manually edit About.jsx or use the code above
```

## Verify It Works

1. Make sure your image is at `/app/frontend/public/images/profile-photo.jpg`
2. The app will hot-reload automatically
3. Visit http://localhost:3000 and scroll to the About section
4. You should see your professional photo instead of "SS"

## Troubleshooting

**Image not showing?**
- Check the file path: `/app/frontend/public/images/profile-photo.jpg`
- Check the file name matches exactly: `profile-photo.jpg`
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Image looks stretched?**
- The CSS uses `object-cover` which should maintain aspect ratio
- If needed, adjust to `object-contain` in the img tag

**Image too large?**
- Optimize the image before uploading
- Recommended size: 800x800 pixels max
- Use tools like TinyJPG.com to compress

## Current Temporary Display

The "SS" placeholder will remain until you:
1. Convert your HEIC to JPG
2. Place it in `/app/frontend/public/images/`
3. Update the About.jsx component as shown above

---

**Need the exact file location?**
Your HEIC file URL was: `https://customer-assets.emergentagent.com/job_test-architect-2/artifacts/yu8cjx2s_IMG_5475.heic`

You can download it, convert to JPG, and follow the steps above.
