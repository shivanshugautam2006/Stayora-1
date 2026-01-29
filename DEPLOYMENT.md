# Stayora - Deployment Guide

## 🚀 How to Deploy Your Stayora Website

This guide covers multiple ways to deploy your static Stayora website online for free or paid hosting.

---

## Option 1: GitHub Pages (Free & Recommended)

**Best for:** Free hosting, easy deployment, custom domains

### Steps:

1. **Create a GitHub Account**
   - Go to [github.com](https://github.com)
   - Sign up for a free account

2. **Create a New Repository**
   ```
   - Click "New Repository"
   - Name: "stayora" (or any name)
   - Select "Public"
   - Click "Create repository"
   ```

3. **Upload Your Files**
   - Navigate to `d:/Stayora` folder
   - Select ALL files (index.html, client.html, landlord.html, style.css, script.js, chatbot.js, logo.png)
   - Drag and drop to GitHub repository page
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Select "main" branch
   - Click "Save"

5. **Access Your Website**
   - Your site will be live at: `https://yourusername.github.io/stayora/`
   - Wait 2-3 minutes for deployment

### ✅ Advantages:
- ✅ Completely FREE
- ✅ Auto-deploys on code changes
- ✅ SSL/HTTPS included
- ✅ Can add custom domain (e.g., www.stayora.com)

---

## Option 2: Vercel (Free, Professional)

**Best for:** Professional hosting, automatic deployments, built-in analytics

### Steps:

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub account (recommended)

2. **Import Project**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Connect your GitHub account
   - Select the "stayora" repository

3. **Configure & Deploy**
   - Framework Preset: "Other" (it's a static site)
   - Root Directory: `./`
   - Click "Deploy"

4. **Access Your Website**
   - Live at: `https://your-project.vercel.app`
   - Or add custom domain (free SSL included)

### ✅ Advantages:
- ✅ FREE tier is generous
- ✅ Lightning-fast CDN
- ✅ Automatic deployments on Git push
- ✅ Built-in analytics
- ✅ Professional "stayora.vercel.app" domain

---

## Option 3: Netlify (Free, Easy Drag-and-Drop)

**Best for:** Quickest deployment, no Git needed

### Steps:

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up for free

2. **Drag and Drop Deployment**
   - Go to "Sites"
   - Drag the entire `d:/Stayora` folder to the upload zone
   - Netlify will automatically deploy

3. **Access Your Website**
   - Live at: `https://random-name-12345.netlify.app`
   - Change site name in Settings > Site details

### ✅ Advantages:
- ✅ Easiest deployment method (drag-and-drop)
- ✅ FREE hosting
- ✅ Instant updates
- ✅ Can change subdomain name
- ✅ Custom domain support

---

## Option 4: Firebase Hosting (Free, Google)

**Best for:** Google ecosystem, powerful backend later

### Steps:

1. **Create Firebase Project**
   - Go to [firebase.google.com](https://firebase.google.com)
   - Click "Get Started"
   - Create new project

2. **Install Firebase CLI**
   ```powershell
   # Open PowerShell
   npm install -g firebase-tools
   ```

3. **Login and Initialize**
   ```powershell
   cd d:\Stayora
   firebase login
   firebase init hosting
   ```

4. **Configure**
   ```
   - Select your Firebase project
   - Public directory: . (current directory)
   - Single-page app: No
   - Overwrite index.html: No
   ```

5. **Deploy**
   ```powershell
   firebase deploy
   ```

6. **Access Your Website**
   - Live at: `https://your-project.web.app`

### ✅ Advantages:
- ✅ FREE hosting
- ✅ Google infrastructure
- ✅ Easy to add backend later (Firestore, Auth)
- ✅ Fast CDN

---

## Option 5: Custom Domain with Any Host

### Get a Custom Domain:

1. **Buy a Domain**
   - [GoDaddy](https://godaddy.com) - `stayora.com`
   - [Namecheap](https://namecheap.com)
   - [Google Domains](https://domains.google)
   - Cost: ₹500-1500/year (.com)

2. **Connect to Hosting**
   - **For Vercel/Netlify**: Add custom domain in dashboard settings
   - **For GitHub Pages**: 
     ```
     - Add CNAME file with your domain
     - Configure DNS A records to GitHub IPs
     ```

### DNS Settings (Example for Vercel):
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 📦 Before Deployment Checklist

- [ ] Test website locally (open `index.html` in browser)
- [ ] Check all links work (navigation, buttons)
- [ ] Verify chatbot opens
- [ ] Test on mobile (responsive design)
- [ ] Update `support@stayora.com` to real email
- [ ] Update phone number to real number
- [ ] Replace placeholder content
- [ ] Optimize `logo.png` (compress for faster loading)

---

## 🔧 Post-Deployment Steps

### 1. Add Google Analytics
```html
<!-- Add before </head> in all pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Add Favicon
```
- Create 32x32px icon
- Save as favicon.ico
- Place in d:/Stayora/
- Add to <head>: <link rel="icon" href="favicon.ico">
```

### 3. SEO Optimizations
Already added:
- ✅ Meta descriptions
- ✅ Title tags
- ✅ Semantic HTML
- ✅ Alt tags on images

### 4. Add Google Maps API
```html
<!-- Replace map placeholder in client.html -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
<div id="map" style="height: 400px;"></div>
```

---

## 🌐 Expected Costs

### Free Options:
- **GitHub Pages**: FREE forever
- **Netlify**: FREE (100GB bandwidth/month)
- **Vercel**: FREE (unlimited bandwidth, analytics)
- **Firebase**: FREE (10GB storage, 360MB/day)

### If You Add:
- **Custom Domain**: ₹500-1,500/year
- **Professional Email** (e.g., info@stayora.com): ₹300-500/month (Google Workspace)
- **Backend Database**: FREE tier available (Firebase, MongoDB Atlas)

---

## 🎯 Recommended Setup for Stayora

**For Starting Out:**
```
1. Deploy on Vercel (free, fast, professional)
2. Use stayora.vercel.app subdomain
3. Add Google Analytics
4. Share with friends to test
```

**For Production/Business:**
```
1. Buy custom domain (stayora.com)
2. Deploy on Vercel with custom domain
3. Get professional email (info@stayora.com)
4. Add backend (Firebase or custom)
5. Integrate payment gateway
6. Add real property database
```

---

## 🔄 Updating Your Website

### On GitHub Pages/Vercel:
1. Make changes to files locally
2. Push to GitHub
3. Automatic deployment (1-2 minutes)

### On Netlify (Drag-and-Drop):
1. Make changes locally
2. Drag updated folder to Netlify
3. Instant deployment

### On Firebase:
1. Make changes locally
2. Run `firebase deploy`
3. Deployed in 10-20 seconds

---

## 📱 Mobile App (Future)

To create mobile apps for iOS/Android:

1. **Option 1: PWA (Progressive Web App)**
   - Add `manifest.json` and service worker
   - Users can "Add to Home Screen"
   - Works offline
   - FREE

2. **Option 2: React Native**
   - Convert to React Native
   - Publish to App Store & Play Store
   - Cost: $99/year (Apple), $25 one-time (Google)

3. **Option 3: Flutter**
   - Rebuild in Flutter
   - Single codebase for iOS + Android

---

## 🚨 Troubleshooting

### Website Not Loading
- **Check DNS**: Wait 24-48 hours for propagation
- **Clear cache**: Ctrl+Shift+R in browser
- **Check file names**: Must be exact (index.html, not Index.html)

### Images Not Showing
- **Check paths**: Use relative paths (`logo.png` not `d:/Stayora/logo.png`)
- **File format**: Ensure .png/.jpg (not .PNG/.JPG)

### Chatbot Not Working
- **Check console**: Open browser DevTools (F12)
- **Verify chatbot.js**: Must be loaded after script.js

### CSS Not Applied
- **Check link**: `<link rel="stylesheet" href="style.css">`
- **Clear cache**: Hard refresh (Ctrl+Shift+R)

---

## 📞 Support

**For Deployment Help:**
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)

**For Website Issues:**
- Check browser console (F12)
- Validate HTML: [validator.w3.org](https://validator.w3.org)
- Test responsiveness: [responsivedesignchecker.com](https://responsivedesignchecker.com)

---

## ✅ Quick Start (Fastest Method)

```
1. Go to netlify.com
2. Sign up (free)
3. Drag d:\Stayora folder to Netlify
4. Done! Your site is live in 30 seconds
```

**Your URL**: `https://yoursite.netlify.app`

---

**🎉 Congratulations! Your Stayora website is now live and accessible worldwide!**
