# Deployment Guide

This guide will help you deploy the Sharmark International website to production.

## 🏗️ Build the Project

Before deploying, create a production build:

```bash
npm run build
```

This creates an optimized production bundle in the `dist` folder.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is perfect for React applications and offers free hosting.

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Login to your Vercel account
   - Confirm project settings
   - Deploy!

4. **Set up custom domain (optional):**
   - Go to your Vercel dashboard
   - Navigate to your project settings
   - Add your custom domain

**Vercel Website:** https://vercel.com

---

### Option 2: Netlify (Free & Popular)

Another excellent option for hosting React apps.

1. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

2. **Via Drag & Drop:**
   - Build your project: `npm run build`
   - Go to https://app.netlify.com/drop
   - Drag and drop the `dist` folder

3. **Via Git Integration:**
   - Push your code to GitHub/GitLab
   - Connect your repository on Netlify
   - Automatic deployments on every push!

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

**Netlify Website:** https://netlify.com

---

### Option 3: GitHub Pages (Free)

Host your site directly from your GitHub repository.

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`:**
   ```json
   {
     "homepage": "https://yourusername.github.io/sharmark",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

**Note:** You may need to update the Vite config for GitHub Pages base path.

---

### Option 4: Traditional Web Hosting (cPanel)

For shared hosting with cPanel:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Compress the `dist` folder to a ZIP file
   - Login to your cPanel
   - Navigate to File Manager
   - Go to `public_html` directory
   - Upload and extract the ZIP file

3. **Configure .htaccess for React Router:**
   Create a `.htaccess` file in the `dist` folder before uploading:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

### Option 5: AWS S3 + CloudFront

For enterprise-grade hosting:

1. **Build:**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket:**
   - Go to AWS S3 console
   - Create a new bucket
   - Enable static website hosting

3. **Upload Files:**
   - Upload all files from `dist` folder
   - Set appropriate permissions

4. **Configure CloudFront (CDN):**
   - Create CloudFront distribution
   - Point to your S3 bucket
   - Configure custom domain

---

## 🔧 Environment Variables

If you need to use environment variables:

1. **Create `.env` file:**
   ```
   VITE_API_URL=https://api.yoursite.com
   VITE_GOOGLE_MAPS_KEY=your_key_here
   ```

2. **Access in code:**
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Set in hosting platform:**
   - Vercel: Dashboard → Settings → Environment Variables
   - Netlify: Dashboard → Site Settings → Build & Deploy → Environment

---

## 🎯 Custom Domain Setup

### For Vercel:
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records at your domain registrar

### For Netlify:
1. Go to "Domain Settings"
2. Add custom domain
3. Update DNS records

### DNS Configuration:
```
Type: A
Name: @
Value: [hosting IP from provider]

Type: CNAME
Name: www
Value: [hosting domain from provider]
```

---

## 🔒 SSL Certificate

All recommended hosting platforms (Vercel, Netlify) provide **free SSL certificates automatically**.

For traditional hosting:
- Use Let's Encrypt (free)
- Configure via cPanel or hosting control panel

---

## ✅ Pre-Deployment Checklist

- [ ] All content updated (no "REPLACE" comments left)
- [ ] All dummy images replaced
- [ ] All links tested and working
- [ ] Contact form configured
- [ ] Google Maps coordinates updated
- [ ] SEO meta tags configured
- [ ] Favicon added
- [ ] Images optimized for web
- [ ] Site tested on multiple browsers
- [ ] Mobile responsiveness verified
- [ ] Build completes without errors
- [ ] Environment variables configured (if needed)

---

## 📊 Post-Deployment

### Monitor Your Site:
1. **Google Analytics:**
   - Add tracking code to `index.html`
   - Monitor traffic and user behavior

2. **Google Search Console:**
   - Submit sitemap
   - Monitor search performance
   - Fix crawl errors

3. **Performance Monitoring:**
   - Use Google PageSpeed Insights
   - Monitor Core Web Vitals
   - Optimize based on feedback

---

## 🔄 Continuous Deployment

### Set up automatic deployments:

**With Vercel/Netlify + GitHub:**
1. Push code to GitHub
2. Connect repository to Vercel/Netlify
3. Every push to `main` branch automatically deploys

**Example `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      # Deploy steps based on your hosting
```

---

## 🆘 Troubleshooting

### Build Fails:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes Not Working:
- Configure server for SPA routing
- Add `.htaccess` for Apache
- Configure redirects in hosting platform

### Images Not Loading:
- Check image paths are correct
- Ensure images are in `src/assets/images/`
- Verify images are imported correctly

---

## 📞 Support

For deployment issues:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- GitHub Pages: https://pages.github.com

---

**Ready to deploy? Run `npm run build` and choose your hosting platform!** 🚀
