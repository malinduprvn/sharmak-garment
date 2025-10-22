# Content Replacement Guide

This document lists all the placeholder content that needs to be replaced with your actual company information.

## 🔍 How to Find Placeholders

All placeholders are marked with comments:
```jsx
{/* REPLACE: Description of what to add */}
```

Search for "REPLACE" in your code editor to find all instances.

---

## 📄 Page-by-Page Replacement Guide

### 🏠 Home Page (`src/pages/Home.jsx`)

#### Line ~39: Hero Section Tagline
```jsx
{/* REPLACE: Add your company tagline here */}
Crafting quality apparel with precision, sustainability...
```
**What to add:** Your company's main tagline or slogan

#### Line ~89: Company Overview
```jsx
{/* REPLACE: Add your company overview text here */}
We are a leading garment manufacturer...
```
**What to add:** 2-3 paragraphs about your company

#### Line ~98: Detailed Company Description
```jsx
{/* REPLACE: Add your detailed company description */}
At Sharmark International, we combine...
```
**What to add:** More details about your operations

#### Line ~182: Product Section Description
```jsx
{/* REPLACE: Add your product section description */}
We manufacture a diverse range...
```
**What to add:** Brief intro to your product range

#### Line ~250: CTA Description
```jsx
{/* REPLACE: Add your CTA description */}
Partner with us for quality garment...
```
**What to add:** Call-to-action message

#### Images to Replace:
- Line ~92: Company overview image
- Lines ~196-204: 6 product category images
- Lines ~222-228: 6 client logos

---

### 👔 About Page (`src/pages/About.jsx`)

#### Line ~25: Company Introduction
```jsx
{/* REPLACE: Add your company introduction */}
Learn about our journey, values...
```
**What to add:** About page introduction

#### Line ~37: Company Story
```jsx
{/* REPLACE: Add your company story */}
Sharmark International Pvt Ltd was founded...
```
**What to add:** 3-4 paragraphs about your company's history

#### Line ~84: Vision Statement
```jsx
{/* REPLACE: Add your vision statement */}
To be the most trusted and innovative...
```
**What to add:** Your vision statement

#### Line ~100: Mission Statement
```jsx
{/* REPLACE: Add your mission statement */}
To deliver exceptional garment solutions...
```
**What to add:** Your mission statement

#### Line ~166: Capabilities Description
```jsx
{/* REPLACE: Add your capabilities description */}
Our state-of-the-art facility is equipped...
```
**What to add:** Description of your production capabilities

#### Images to Replace:
- Line ~57: Company story image
- Lines ~135-140: Director photos (2)
- Lines ~207-211: Factory images (3)

---

### 🛍️ Products Page (`src/pages/Products.jsx`)

#### Line ~122: Product Section Introduction
```jsx
{/* REPLACE: Add your product section introduction */}
Discover our comprehensive range...
```
**What to add:** Products page introduction

#### Line ~182: Product Image Comments
```jsx
{/* REPLACE: Add actual product images */}
```
**What to add:** Replace with real product images (8 total)

#### Line ~241: Custom Order Description
```jsx
{/* REPLACE: Add your custom order description */}
We specialize in custom garment manufacturing...
```
**What to add:** Description of your custom manufacturing services

#### Product Data to Update:
- Lines ~4-94: Update product names, descriptions, and features for all 8 categories
- Each product has:
  - Name
  - Description
  - Details
  - Features array (4 items)

---

### 🌱 Sustainability Page (`src/pages/Sustainability.jsx`)

#### Line ~129: Sustainability Introduction
```jsx
{/* REPLACE: Add your sustainability introduction */}
Our commitment to ethical practices...
```
**What to add:** Sustainability page introduction

#### Line ~143: Sustainability Story
```jsx
{/* REPLACE: Add your sustainability story */}
At Sharmark International, we believe...
```
**What to add:** 3 paragraphs about your sustainability efforts

#### Line ~177: Commitments Description
```jsx
{/* REPLACE: Add your commitments description */}
We have implemented comprehensive...
```
**What to add:** Introduction to your sustainability commitments

#### Line ~237: Quality Description
```jsx
{/* REPLACE: Add your quality description */}
Quality is at the heart of everything...
```
**What to add:** Description of your quality control processes

#### Line ~300: Certifications Description
```jsx
{/* REPLACE: Add your certifications description */}
Our commitment to excellence is backed...
```
**What to add:** Description of your certifications

#### Line ~336: Impact Description
```jsx
{/* REPLACE: Add your impact description */}
Measurable progress towards...
```
**What to add:** Description of your environmental impact

#### Line ~361: CTA Description
```jsx
{/* REPLACE: Add your CTA description */}
Join us in our mission to create...
```
**What to add:** Call-to-action message

#### Images to Replace:
- Line ~163: Sustainability hero image
- Line ~269: Quality control image
- Lines ~315-320: Certification logos (4)

#### Data to Update:
- Lines ~4-59: Update 6 commitment descriptions
- Lines ~62-67: Update certifications list
- Lines ~344-348: Update impact statistics

---

### 🖼️ Gallery Page (`src/pages/Gallery.jsx`)

#### Line ~51: Gallery Introduction
```jsx
{/* REPLACE: Add your gallery introduction */}
Explore our products, facilities...
```
**What to add:** Gallery page introduction

#### Line ~105: Image Placeholders
```jsx
{/* REPLACE: Add actual gallery images */}
```
**What to add:** Replace 18 gallery images

#### Line ~181: CTA Description
```jsx
{/* REPLACE: Add your CTA description */}
Visit our facility or schedule...
```
**What to add:** Call-to-action for factory visits

#### Data to Update:
- Lines ~8-28: Update 18 gallery item titles
- Categories: products (6), factory (6), team (6)

---

### 📞 Contact Page (`src/pages/Contact.jsx`)

#### Line ~60: Contact Introduction
```jsx
{/* REPLACE: Add your contact introduction */}
Get in touch with us for inquiries...
```
**What to add:** Contact page introduction

#### Contact Information to Update:

**Lines ~86-88: Address**
```jsx
No: 000, Dodangoda,<br />
Matugama, Sri Lanka
```
**What to add:** Your actual address

**Lines ~109-119: Phone Numbers**
```jsx
+94 77 123 4567
+94 77 123 4568
```
**What to add:** Your actual phone numbers

**Lines ~141-151: Email Addresses**
```jsx
info@sharmark.com
sales@sharmark.com
```
**What to add:** Your actual email addresses

**Lines ~173-176: Business Hours**
```jsx
Monday - Friday: 8:00 AM - 5:00 PM
Saturday: 8:00 AM - 1:00 PM
Sunday: Closed
```
**What to add:** Your actual business hours

**Lines ~190-192: Directors Names**
```jsx
Mr. Samantha de Alwis
Mrs. Nirusha de Alwis
```
**What to add:** Confirm or update director names

**Line ~406: Google Maps Embed**
```jsx
src="https://www.google.com/maps/embed?pb=!1m18..."
```
**What to add:** Your actual Google Maps embed URL
To get this:
1. Go to Google Maps
2. Find your location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

---

## 🧩 Components

### Navbar (`src/components/Navbar.jsx`)

No placeholders, but you may want to:
- Line ~42: Add company logo
- Line ~43-44: Update company name styling

### Footer (`src/components/Footer.jsx`)

#### Lines ~15-17: Company Description
```jsx
Leading manufacturer of premium quality apparel...
```
**What to add:** Brief company description

#### Lines ~20-24: Contact Information
```jsx
No: 000, Dodangoda, Matugama, Sri Lanka
Mr. Samantha and Mrs. Nirusha de Alwis
```
**What to add:** Your contact information

#### Lines ~71-73: Email Address
```jsx
info@sharmark.com
```
**What to add:** Your email address

#### Lines ~78-80: Phone Number
```jsx
+94 77 123 4567
```
**What to add:** Your phone number

#### Lines ~94-119: Social Media Links
```jsx
href="#"  → href="https://facebook.com/yourpage"
href="#"  → href="https://linkedin.com/company/yourpage"
href="#"  → href="https://instagram.com/yourpage"
```
**What to add:** Your actual social media URLs

---

## 🎨 Styling & Branding

### Colors (`tailwind.config.js`)

#### Lines ~8-11
```javascript
colors: {
  primary: '#1e40af',      // REPLACE with your primary brand color
  secondary: '#0ea5e9',    // REPLACE with your secondary brand color
}
```

---

## 🔍 SEO Meta Tags (`index.html`)

#### Line ~9: Page Title
```html
<title>Sharmark International Pvt Ltd - Premium Garment Manufacturing...</title>
```
**What to add:** Your preferred page title

#### Line ~10: Meta Description
```html
<meta name="description" content="Leading garment manufacturer..." />
```
**What to add:** SEO-optimized description (155 characters)

#### Line ~11: Meta Keywords
```html
<meta name="keywords" content="garment manufacturer, apparel..." />
```
**What to add:** Relevant keywords for your business

#### Lines ~16-19: Open Graph Tags
```html
<meta property="og:title" content="Sharmark International..." />
<meta property="og:description" content="Quality garment manufacturing..." />
<meta property="og:url" content="https://sharmark.com" />
```
**What to add:** Your actual website URL and social media titles

---

## 📊 Priority Order for Replacement

### Priority 1 (Critical)
1. ✅ Contact information (address, phone, email)
2. ✅ Company name and directors
3. ✅ Social media links
4. ✅ Google Maps coordinates

### Priority 2 (Important)
1. ✅ Hero section tagline
2. ✅ Company overview text
3. ✅ Mission and vision statements
4. ✅ Product names and descriptions

### Priority 3 (Content)
1. ✅ All page introductions
2. ✅ Detailed descriptions
3. ✅ Company story
4. ✅ Sustainability commitments

### Priority 4 (Visual)
1. ✅ All product images
2. ✅ Company photos
3. ✅ Director photos
4. ✅ Gallery images
5. ✅ Client logos
6. ✅ Certification logos

---

## 🛠️ Tools to Help

### Find All Placeholders
```bash
# In VS Code, press Ctrl+Shift+F and search for:
REPLACE

# This will show all 40+ locations that need updating
```

### Image Checklist
See: `src/assets/images/README.md`

### Complete Checklist
See: `CUSTOMIZATION_CHECKLIST.md`

---

## ✅ Verification

After replacing content, verify:
- [ ] No "REPLACE" comments remain
- [ ] All company info is accurate
- [ ] All links work
- [ ] All images display properly
- [ ] Text makes sense and flows well
- [ ] No placeholder text visible
- [ ] Contact form email is correct
- [ ] Social media links work
- [ ] Google Maps shows correct location

---

## 📝 Quick Reference Table

| Item | Files to Update | Count |
|------|----------------|-------|
| Text Content | All page files | 25+ locations |
| Images | All pages | 30+ images |
| Contact Info | Footer, Contact | 6 locations |
| Social Links | Footer | 3+ links |
| Colors | tailwind.config.js | 2 colors |
| Meta Tags | index.html | 5+ tags |

---

**Total Replacement Points:** 50+

**Estimated Time:** 
- Basic content: 2-4 hours
- With images: 6-8 hours
- Complete customization: 1-2 days

---

**Tip:** Work through one page at a time, and check it in the browser before moving to the next!

**Happy customizing! 🎨**
