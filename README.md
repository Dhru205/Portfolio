# Dhru Prajapati - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Quick Deploy to Netlify (FREE)

### Method 1: Deploy via GitHub (Recommended)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `portfolio-website`
   - Don't initialize with README (we already have files)

2. **Push Your Code to GitHub**
   ```bash
   cd portfolio-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git push -u origin main
   ```

3. **Deploy on Netlify**
   - Go to [Netlify](https://www.netlify.com/) and sign up (it's FREE!)
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub
   - Select your `portfolio-website` repository
   - Build settings should auto-detect, but verify:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"
   - Wait 2-3 minutes for deployment to complete ✨

4. **Your Site is Live!**
   - Netlify will give you a URL like: `https://random-name-123456.netlify.app`
   - You can customize this in Site settings → Domain management

### Method 2: Direct Deploy (Drag & Drop)

1. **Build Your Project Locally**
   ```bash
   cd portfolio-website
   npm install
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Sign up/login (FREE)
   - Drag and drop the `dist` folder
   - Your site goes live instantly!

## 🛠️ Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

- Edit `src/App.jsx` to update content
- Modify colors in Tailwind classes (cyan-400, slate-900, etc.)
- Update contact information and links

## 🎨 Features

- ✅ Modern, responsive design
- ✅ Smooth scrolling navigation
- ✅ Professional dark theme
- ✅ Mobile-friendly
- ✅ Fast loading with Vite
- ✅ Optimized for DevOps/Engineering roles

## 📧 Contact

Dhru Prajapati
- Email: dpraj7@uic.edu
- LinkedIn: [linkedin.com/in/dhru-prajapati-63a9781a3/](https://linkedin.com/in/dhru-prajapati-63a9781a3/)

---

Built with ❤️ using React + Vite + Tailwind CSS
