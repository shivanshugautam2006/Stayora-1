# 🚀 Deploying Stayora to Vercel - Quick Guide

## Step 1: Install Git (if not already installed)

Check if Git is installed:
```powershell
git --version
```

If not installed, download from: https://git-scm.com/download/win

---

## Step 2: Create GitHub Repository

### Option A: Using GitHub Desktop (Easiest)
1. Download GitHub Desktop: https://desktop.github.com
2. Install and sign in with your GitHub account
3. Click "Add" → "Create New Repository"
   - Name: `stayora`
   - Local Path: `d:\Stayora`
   - Click "Create Repository"
4. Click "Publish repository" → Choose "Public" → Publish

### Option B: Using Command Line
```powershell
# Navigate to your project
cd d:\Stayora

# Initialize Git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Stayora website"

# Go to github.com and create a new repository named "stayora"
# Then run these commands (replace YOUR_USERNAME):

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/stayora.git
git push -u origin main
```

---

## Step 3: Deploy to Vercel

1. **Sign Up for Vercel**
   - Go to: https://vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub" (recommended)
   - Authorize Vercel to access your GitHub

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - You'll see your GitHub repositories
   - Find "stayora" and click "Import"

3. **Configure Project**
   - **Framework Preset**: Select "Other" (it's a static HTML site)
   - **Root Directory**: Leave as `./`
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will build and deploy (takes 30-60 seconds)
   - You'll see "Congratulations!" when done

5. **Access Your Website**
   - Your site is now live at: `https://stayora.vercel.app`
   - Or: `https://stayora-[random].vercel.app`

---

## Step 4: Customize Your Domain (Optional)

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Change from random name to: `stayora.vercel.app`
4. Or add your custom domain if you have one

---

## 🔄 Updating Your Website

Once deployed, updating is automatic:

```powershell
# Make changes to your files
# Then:

cd d:\Stayora
git add .
git commit -m "Updated features"
git push
```

Vercel will automatically redeploy in 1-2 minutes.

---

## ✅ Quick Checklist

- [ ] Git installed
- [ ] GitHub account created
- [ ] Repository created and code pushed
- [ ] Vercel account created (linked with GitHub)
- [ ] Project imported to Vercel
- [ ] Website deployed successfully
- [ ] Domain customized (optional)

---

## 🚨 Troubleshooting

**Issue: "git: command not found"**
- Install Git from: https://git-scm.com/download/win
- Restart PowerShell after installation

**Issue: "Permission denied (GitHub)"**
- Set up GitHub authentication
- Use GitHub Desktop (easier) or set up SSH keys

**Issue: "Vercel build failed"**
- Check that all files are in the repository
- Ensure `index.html` is in the root directory

**Issue: "Images not loading"**
- Verify `logo.png` is committed to GitHub
- Check file names match exactly (case-sensitive)

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Help**: https://docs.github.com
- **Git Basics**: https://git-scm.com/doc

---

## 🎯 Expected Result

After following these steps:
- ✅ Your website is live at `https://stayora.vercel.app`
- ✅ SSL/HTTPS enabled automatically
- ✅ Fast global CDN
- ✅ Auto-deploys on Git push
- ✅ Free hosting forever

**Congratulations! 🎉 Your Stayora website is now online!**
