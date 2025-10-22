# Image Assets Guide

This document lists all the images you need to add to complete the website.

## Directory Structure

Place all images in: `src/assets/images/`

## Required Images

### Home Page
1. `hero-bg.jpg` - Large background image for hero section (1920x1080px recommended)
2. `company-overview.jpg` - Company overview/factory image (800x600px)
3. Product category images (600x400px each):
   - `product-tshirts.jpg`
   - `product-uniforms.jpg`
   - `product-sportswear.jpg`
   - `product-casual.jpg`
   - `product-workwear.jpg`
   - `product-school.jpg`
4. Client logos (200x100px each):
   - `client-logo-1.png`
   - `client-logo-2.png`
   - `client-logo-3.png`
   - `client-logo-4.png`
   - `client-logo-5.png`
   - `client-logo-6.png`

### About Page
1. `about-story.jpg` - Company story image (800x600px)
2. Director photos (400x500px each):
   - `director-samantha.jpg`
   - `director-nirusha.jpg`
3. Factory images (600x400px each):
   - `factory-1.jpg`
   - `factory-2.jpg`
   - `factory-3.jpg`

### Products Page
1. Product detail images (800x600px each):
   - `product-detail-tshirts.jpg`
   - `product-detail-uniforms.jpg`
   - `product-detail-sportswear.jpg`
   - `product-detail-casual.jpg`
   - `product-detail-workwear.jpg`
   - `product-detail-school.jpg`
   - `product-detail-polo.jpg`
   - `product-detail-hoodies.jpg`

### Sustainability Page
1. `sustainability-hero.jpg` - Sustainability main image (800x600px)
2. `quality-control.jpg` - Quality control image (800x600px)
3. Certification logos (200x200px each):
   - `cert-iso.png`
   - `cert-oeko.png`
   - `cert-gots.png`
   - `cert-fairtrade.png`

### Gallery Page
1. Products (18 images, 600x600px each):
   - `gallery-product-1.jpg` through `gallery-product-6.jpg`
2. Factory (6 images, 600x600px each):
   - `gallery-factory-1.jpg` through `gallery-factory-6.jpg`
3. Team (6 images, 600x600px each):
   - `gallery-team-1.jpg` through `gallery-team-6.jpg`

## Image Optimization Tips

1. **Compress images** before uploading to improve page load speed
2. **Use WebP format** for better compression (with JPG fallback)
3. **Maintain aspect ratios** as specified above
4. **Use descriptive filenames** for better SEO
5. **Optimize for web** - keep file sizes under 200KB where possible

## Tools for Image Optimization

- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Image optimization
- [GIMP](https://www.gimp.org/) - Free image editing
- [Photopea](https://www.photopea.com/) - Online Photoshop alternative

## How to Add Images

Once you have the images ready:

1. Place them in `src/assets/images/` folder
2. Import them in the respective component:
   ```jsx
   import heroImage from '../assets/images/hero-bg.jpg';
   ```
3. Replace the placeholder divs with:
   ```jsx
   <img src={heroImage} alt="Description" className="w-full h-96 object-cover rounded-lg" />
   ```

## Stock Image Resources (Temporary Use)

If you need placeholder images while preparing actual photos:

- [Unsplash](https://unsplash.com/) - Free high-quality images
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images and videos

---

**Note:** Replace all dummy images with actual company photos for the final launch.
