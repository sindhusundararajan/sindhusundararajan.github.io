# Sindhu Sundararajan - SDET Portfolio Website

A modern, responsive portfolio website showcasing the work and expertise of Sindhu Sundararajan, a Software Development Engineer in Test (SDET) with 5+ years of experience in test automation, API testing, and data validation.

## 🚀 Live Preview

Visit the live site at: `http://localhost:3000` (Development)

## ✨ Features

### Must-Have Features (Implemented ✓)
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Dark/Light Mode** - Theme toggle with system preference detection
- ✅ **Interactive Career Timeline** - Visual journey through work experience and education
- ✅ **Project Showcase** - 6 featured projects with expandable details and filtering
- ✅ **Skills Visualization** - Animated progress bars and proficiency levels
- ✅ **Contact Form** - Ready for Web3Forms integration
- ✅ **Downloadable Resume** - PDF available for download
- ✅ **Performance Optimized** - Fast loading with smooth animations
- ✅ **SEO Ready** - Meta tags and semantic HTML
- ✅ **Smooth Animations** - Scroll-triggered reveal animations

### Should-Have Features (Implemented ✓)
- ✅ **Technical Blog Section** - 3 featured articles with excerpts
- ✅ **Impact Metrics Dashboard** - Animated counters showcasing achievements
- ✅ **Testimonials** - 4 recommendations from colleagues and managers
- ✅ **"Why Work With Me?" Section** - Value propositions and testimonials
- ✅ **Social Integration** - LinkedIn and GitHub links
- ✅ **Core Values Display** - Interactive cards highlighting principles

## 🛠 Tech Stack

### Frontend
- **React 19** - UI library
- **React Router DOM 7.5.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first styling
- **shadcn/ui** - High-quality React components
- **Lucide React** - Icon library (no emoji icons used)

### Fonts
- **IBM Plex Sans** - Primary body font (professional, readable)
- **JetBrains Mono** - Monospace font for code and technical elements

### Backend (Ready for Integration)
- **FastAPI** - Python web framework
- **MongoDB** - Database (Motor async driver)
- **Contact Form** - Web3Forms integration ready

## 📁 Project Structure

```
/app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── Header.jsx           # Navigation with theme toggle
│   │   │   ├── Hero.jsx             # Landing section
│   │   │   ├── About.jsx            # Bio and core values
│   │   │   ├── Timeline.jsx         # Career and education timeline
│   │   │   ├── Projects.jsx         # Project showcase with filtering
│   │   │   ├── Skills.jsx           # Skills with animated progress bars
│   │   │   ├── WhyWorkWithMe.jsx    # Value propositions
│   │   │   ├── Metrics.jsx          # Animated achievement counters
│   │   │   ├── Blog.jsx             # Blog post cards
│   │   │   ├── Testimonials.jsx     # Recommendations
│   │   │   ├── Contact.jsx          # Contact form
│   │   │   └── Footer.jsx           # Footer with links
│   │   ├── context/
│   │   │   └── ThemeContext.jsx     # Dark/Light mode management
│   │   ├── data/
│   │   │   └── mock.js              # ⭐ ALL CONTENT DATA HERE
│   │   ├── App.js                   # Main app component
│   │   ├── App.css                  # Custom styles
│   │   └── index.css                # Tailwind + theme variables
│   └── package.json
├── backend/
│   ├── server.py                    # FastAPI server
│   └── requirements.txt
└── PORTFOLIO_README.md              # This file
```

## 🎨 Customization Guide

### Updating Content

**All content is centralized in `/app/frontend/src/data/mock.js`.** No code changes needed!

#### 1. Personal Information
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  // ... update other fields
};
```

#### 2. Work Experience
```javascript
export const workExperience = [
  {
    company: "Company Name",
    role: "Your Role",
    period: "Start - End",
    achievements: ["Achievement 1", "Achievement 2"],
    technologies: ["Tech1", "Tech2"]
  }
];
```

#### 3. Projects
```javascript
export const projects = [
  {
    title: "Project Name",
    shortDesc: "Brief description",
    description: "Full description",
    impact: [{ metric: "85%", label: "Description" }],
    technologies: ["Tech1", "Tech2"],
    features: ["Feature 1", "Feature 2"]
  }
];
```

### Theme Customization

**Colors:** Edit `/app/frontend/src/index.css`

```css
:root {
  /* Light Mode Colors */
  --background: 35 25% 93%;     /* Beige */
  --primary: 210 38% 69%;       /* Blue */
  --secondary: 300 27% 79%;     /* Purple */
  --accent: 145 26% 76%;        /* Mint */
}

.dark {
  /* Dark Mode Colors */
  --background: 216 30% 8%;     /* Charcoal */
  --primary: 199 89% 65%;       /* Sky Blue */
  --secondary: 258 76% 76%;     /* Soft Purple */
  --accent: 158 64% 67%;        /* Mint Green */
}
```

### Adding Your Photo

The portfolio currently uses initials (SS) with a gradient background. To add your photo:

1. Convert your HEIC image to JPG/PNG/WebP format
2. Add the image to `/app/frontend/public/` folder
3. Update `Hero.jsx` and `About.jsx` to use the image path

## 📧 Contact Form Integration

The contact form is ready for [Web3Forms](https://web3forms.com/) (free tier: 250 submissions/month).

### Setup Steps:

1. Visit https://web3forms.com
2. Sign up with your email
3. Get your access key
4. Update `/app/frontend/src/components/Contact.jsx` with your access key

## 🚀 Running the Application

The application runs via supervisor with hot-reload enabled.

**Check Status:**
```bash
sudo supervisorctl status
```

**Restart Services:**
```bash
sudo supervisorctl restart frontend  # or backend, or all
```

**View Logs:**
```bash
tail -f /var/log/supervisor/frontend.*.log
```

## 📝 Content Updates Checklist

When updating content, edit `/app/frontend/src/data/mock.js`:

- [ ] Personal information (name, email, phone, links)
- [ ] Hero headline and subtitle
- [ ] About me bio (3 paragraphs)
- [ ] Work experience (companies, roles, achievements)
- [ ] Education details
- [ ] Project details (6 projects)
- [ ] Skills and proficiency levels
- [ ] Certifications
- [ ] Blog post information
- [ ] Testimonials
- [ ] Contact form subjects

## 📞 Support

For questions or issues:
- Email: sundararajansindhu96@gmail.com
- LinkedIn: linkedin.com/in/sindhusundararajan
- GitHub: github.com/sindhusundararajan

---

**Built with React & Tailwind CSS ❤️**

*Last Updated: January 2025*
