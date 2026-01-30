# 🎨 Adding Lottie Animation to Hero Section

This guide explains how to add a professional animated illustration of a woman coding/testing to replace the placeholder in the Hero section.

## 📥 Step 1: Download Animation from LottieFiles

### Recommended Animations:

Visit [LottieFiles.com](https://lottiefiles.com) and search for one of these:

**Option 1: Woman Coding** (Recommended)
- Search: "woman coding" or "female developer"
- Look for: Woman at laptop with code editor, typing animation
- Example URLs to try:
  - https://lottiefiles.com/free-animations/female-web-developer
  - https://lottiefiles.com/free-animations/coder-girl
  - https://lottiefiles.com/animation/girl-coder-doing-custom-coding-6867338

**Option 2: Software Testing**
- Search: "software testing" or "quality assurance"
- Look for: Testing workflows, bug tracking, QA processes

**Option 3: Woman at Multiple Monitors**
- Search: "woman coding multiple screens"
- Look for: Professional developer setup with dashboards

### Selection Criteria:
✅ **Style**: Modern, professional (not cartoonish)
✅ **Colors**: Should work with blue/purple/mint palette
✅ **Loop**: Continuous, subtle animation
✅ **Format**: JSON (Lottie format)
✅ **License**: Free for commercial use

### Download Steps:
1. Click on your chosen animation
2. Click "Download" button
3. Select **"Lottie JSON"** format
4. Save the file (e.g., `woman-coding.json`)

## 📂 Step 2: Add Animation File to Project

1. Save the downloaded JSON file to:
   ```
   /app/frontend/public/animations/woman-coding.json
   ```

2. Or place it in:
   ```
   /app/frontend/src/assets/animations/woman-coding.json
   ```

## 🔧 Step 3: Update Hero Component

Open `/app/frontend/src/components/Hero.jsx` and make these changes:

### Option A: If placed in `public` folder

Replace the import section at the top:

```javascript
import womanCodingAnimation from '../assets/animations/woman-coding.json';

// Remove the placeholderAnimation object
// Delete lines 7-78 (the entire placeholderAnimation constant)
```

Then update the Lottie component (around line 150):

```javascript
<Lottie
  animationData={womanCodingAnimation}  // Change this line
  loop={true}
  className="w-full h-full"
/>
```

And **remove the instructional overlay** (delete lines 156-168):
```javascript
// DELETE THIS ENTIRE BLOCK:
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <div className="text-center px-6">
    <div className="text-4xl mb-2">👩‍💻</div>
    <p className="text-xs text-muted-foreground font-mono">
      Replace with Lottie animation
    </p>
    <p className="text-xs text-muted-foreground font-mono mt-1">
      See ANIMATION_GUIDE.md
    </p>
  </div>
</div>
```

### Option B: If using public folder with fetch

```javascript
import { useEffect, useState } from 'react';

const Hero = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/animations/woman-coding.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  // ... rest of component

  // In JSX:
  {animationData && (
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-full h-full"
    />
  )}
```

## 🎨 Step 4: Customize Animation Appearance

### Adjust Size:
```javascript
<Lottie
  animationData={womanCodingAnimation}
  loop={true}
  className="w-4/5 h-4/5"  // Make smaller
  style={{ width: '80%', height: '80%' }}  // Or use inline styles
/>
```

### Adjust Speed:
```javascript
<Lottie
  animationData={womanCodingAnimation}
  loop={true}
  speed={0.5}  // Slower (0.5x speed)
  // or speed={1.5} for faster
  className="w-full h-full"
/>
```

### Change Background:
If the animation needs a different background, update the container:

```javascript
<div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
  {/* Lottie component */}
</div>
```

## 🎯 Recommended Specific Animations

Here are direct animation IDs from LottieFiles (as of Jan 2025):

### Top Picks:

1. **"Girl coder doing Custom Coding"** - ID: 6867338
   - Professional, clean style
   - Shows woman at laptop with code
   - Perfect loop

2. **"Female Web Developer"**
   - Modern illustration style
   - Typing animation
   - Matches tech aesthetic

3. **"Coding Woman"**
   - Multiple monitor setup
   - Professional environment
   - Subtle animations

### How to Use Animation ID:
If you have an animation ID (e.g., 6867338):
- Visit: `https://lottiefiles.com/animation/[ID]`
- Example: `https://lottiefiles.com/animation/6867338`

## 🐛 Troubleshooting

### Animation not showing?
1. Check console for errors
2. Verify JSON file path is correct
3. Make sure lottie-react is installed: `yarn add lottie-react`

### Animation too fast/slow?
Add `speed` prop: `<Lottie speed={0.75} ... />`

### Animation colors don't match theme?
- Some Lottie files support color customization
- Or choose a different animation with better colors
- Or use CSS filters: `style={{ filter: 'hue-rotate(20deg)' }}`

### Animation choppy?
- Reduce complexity of animation
- Check if file is too large (>500KB is heavy)
- Use simpler, optimized animations

## 🌟 Alternative: Use unDraw or Storyset Illustrations

If you prefer static illustrations:

1. Visit [unDraw.co](https://undraw.co) or [Storyset.com](https://storyset.com)
2. Search for "woman coding" or "female developer"
3. Download as SVG
4. Replace Lottie with:

```javascript
<img
  src="/images/woman-coding.svg"
  alt="Software Testing Professional"
  className="w-full h-full object-contain"
/>
```

## 📋 Final Checklist

- [ ] Animation downloaded from LottieFiles
- [ ] File placed in correct folder
- [ ] Import statement updated in Hero.jsx
- [ ] Placeholder animation removed
- [ ] Instructional overlay deleted
- [ ] Animation tested in both light and dark mode
- [ ] Animation loops smoothly
- [ ] Colors match site theme
- [ ] Animation not too distracting
- [ ] Performance is good (no lag)

## 💡 Pro Tips

1. **Keep it subtle**: Avoid overly animated or distracting visuals
2. **Test on mobile**: Ensure animation works well on small screens
3. **Dark mode**: Check animation visibility in both themes
4. **File size**: Keep animation under 200KB for performance
5. **Backup plan**: Keep the gradient placeholder as fallback

---

## 🔗 Useful Links

- LottieFiles: https://lottiefiles.com
- Lottie React Docs: https://www.npmjs.com/package/lottie-react
- unDraw Illustrations: https://undraw.co
- Storyset Illustrations: https://storyset.com
- IconScout Lottie: https://iconscout.com/lottie-animations

---

**Need help?** Check the main README at `/app/PORTFOLIO_README.md` or contact support.
