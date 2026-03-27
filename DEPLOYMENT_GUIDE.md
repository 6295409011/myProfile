# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## 📋 Prerequisites

- A GitHub account (username: vinayak_pal)
- Git installed on your computer
- Your portfolio code ready

## 🔧 Step-by-Step Instructions

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository: `portfolio` (or `vinayak_pal.github.io` for a user site)
5. Keep it **Public**
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### Step 2: Prepare Your Local Code

Open your terminal/command prompt in your project folder and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files to git
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website"
```

### Step 3: Connect to GitHub and Push

Replace `vinayak_pal` with your actual GitHub username if different:

```bash
# Add GitHub repository as remote
git remote add origin https://github.com/vinayak_pal/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down and click **Pages** in the left sidebar
4. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
5. The GitHub Actions workflow will automatically deploy your site

### Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running (green circle or checkmark when done)
3. Wait for it to complete (usually 2-3 minutes)

### Step 6: Access Your Portfolio

Your portfolio will be available at:

**If repository name is `portfolio`:**
```
https://vinayak_pal.github.io/portfolio/
```

**If repository name is `vinayak_pal.github.io`:**
```
https://vinayak_pal.github.io/
```

## 🔄 Updating Your Portfolio

Whenever you make changes:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push
```

The site will automatically rebuild and deploy!

## 🎯 Alternative: Deploy to Vercel (Recommended for easier setup)

Vercel is often easier and faster:

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click **"Import Project"**
4. Select your portfolio repository
5. Click **"Deploy"**
6. Done! You'll get a URL like: `portfolio-vinayak-pal.vercel.app`

## 🎨 Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with your GitHub account
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **"Deploy"**
7. Done! You'll get a URL like: `vinayak-pal-portfolio.netlify.app`

## 🆘 Troubleshooting

### Issue: 404 Page Not Found
- If using GitHub Pages, make sure you set the correct `base` in `vite.config.ts`
- Check that the repository name matches the URL path

### Issue: Blank Page
- Check browser console for errors
- Make sure all file paths are correct
- Verify the build completed successfully in Actions tab

### Issue: Images Not Loading
- Ensure all image URLs are correct
- Check that Unsplash images are accessible

## 📝 Notes

- GitHub Pages may take 5-10 minutes for the first deployment
- Custom domains can be added in repository Settings → Pages
- HTTPS is automatically enabled
- The site rebuilds automatically on every push to main branch

## 🎉 Success!

Once deployed, share your portfolio:
- Add the URL to your GitHub profile
- Add it to your LinkedIn
- Share it in your resume
- Use it for job applications

Good luck! 🚀
