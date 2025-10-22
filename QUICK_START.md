# Quick Start Guide - Sharmark International Website

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: **http://localhost:5173**

---

## 📁 Project Organization

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation bar
│   └── Footer.jsx      # Footer
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Products.jsx    # Products page
│   ├── Sustainability.jsx
│   ├── Gallery.jsx
│   └── Contact.jsx
├── assets/
│   └── images/         # Put your images here
├── App.jsx             # Main app with routes
├── main.jsx            # Entry point
└── index.css           # Tailwind styles
```

---

## 🎯 Common Tasks

### Adding a New Page

1. **Create the page component:**
```jsx
// src/pages/NewPage.jsx
const NewPage = () => {
  return (
    <div className="min-h-screen">
      <h1>New Page</h1>
    </div>
  );
};

export default NewPage;
```

2. **Add route in App.jsx:**
```jsx
import NewPage from './pages/NewPage';

// In the Routes section:
<Route path="/new-page" element={<NewPage />} />
```

3. **Add to navbar:**
```jsx
// In Navbar.jsx navLinks array:
{ name: 'New Page', path: '/new-page' }
```

---

### Adding Images

1. **Place image in:** `src/assets/images/`

2. **Import in component:**
```jsx
import heroImage from '../assets/images/hero.jpg';
```

3. **Use in JSX:**
```jsx
<img src={heroImage} alt="Hero" className="w-full h-96 object-cover" />
```

---

### Changing Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#YOUR_COLOR',     // Main brand color
  secondary: '#YOUR_COLOR',   // Accent color
}
```

---

### Updating Text Content

Look for comments like:
```jsx
{/* REPLACE: Add your content here */}
```

These mark all placeholder text that should be customized.

---

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
```

---

## 📝 Making Common Changes

### 1. Update Company Info

**Footer.jsx** and **Contact.jsx:**
- Company address
- Phone numbers
- Email addresses
- Social media links

### 2. Update Navigation Links

**Navbar.jsx** - `navLinks` array:
```jsx
const navLinks = [
  { name: 'Home', path: '/' },
  // Add or remove items here
];
```

### 3. Update Product Categories

**Products.jsx** - `productCategories` array:
```jsx
const productCategories = [
  {
    id: 1,
    name: 'Product Name',
    description: 'Description',
    // ...
  },
  // Add more products
];
```

### 4. Update Gallery Images

**Gallery.jsx** - `galleryItems` array:
```jsx
const galleryItems = [
  { id: 1, category: 'products', title: 'Image Title' },
  // Add more items
];
```

---

## 🎨 Styling Quick Reference

### Tailwind CSS Utilities

**Layout:**
```jsx
className="flex items-center justify-center"  // Centered flex
className="grid grid-cols-3 gap-4"           // 3-column grid
className="max-w-7xl mx-auto px-4"           // Container
```

**Spacing:**
```jsx
className="p-4"     // Padding: 1rem
className="m-4"     // Margin: 1rem
className="mb-8"    // Margin bottom: 2rem
```

**Colors:**
```jsx
className="bg-primary text-white"        // Primary background
className="bg-secondary text-white"      // Secondary background
className="text-gray-600"                // Gray text
```

**Typography:**
```jsx
className="text-4xl font-bold"          // Large, bold text
className="text-lg text-gray-600"       // Medium gray text
```

**Responsive:**
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
// 1 column on mobile, 2 on tablet, 3 on desktop
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <process_id> /F

# Or use a different port:
npm run dev -- --port 3000
```

### Changes Not Showing
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Restart dev server

### Build Errors
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Learn More

### React
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### Vite
- [Vite Guide](https://vitejs.dev/guide/)

---

## 💡 Tips for Beginners

1. **Start small:** Make one change at a time
2. **Use browser DevTools:** Inspect elements to understand styles
3. **Check console:** Look for errors in browser console
4. **Search components:** Use `Ctrl + F` to find text in files
5. **Test mobile:** Use browser responsive mode
6. **Save often:** Vite hot-reloads automatically
7. **Read comments:** All customization points are marked

---

## 🔍 File Locations Cheat Sheet

| What to Change | File Location |
|----------------|---------------|
| Navigation menu | `src/components/Navbar.jsx` |
| Footer content | `src/components/Footer.jsx` |
| Homepage | `src/pages/Home.jsx` |
| Product list | `src/pages/Products.jsx` |
| Contact form | `src/pages/Contact.jsx` |
| Site colors | `tailwind.config.js` |
| Meta tags/SEO | `index.html` |
| Images | `src/assets/images/` |
| Routes | `src/App.jsx` |

---

## ✅ Before Going Live

1. Replace all placeholder images
2. Update all "REPLACE" comments with real content
3. Test on multiple devices
4. Update Google Maps coordinates
5. Set up contact form backend
6. Add favicon
7. Test all links
8. Run `npm run build`
9. Deploy!

---

## 🆘 Getting Help

1. Check the `CUSTOMIZATION_CHECKLIST.md` for what needs to be done
2. Review `FEATURES_OVERVIEW.md` to understand all features
3. Read `DEPLOYMENT_GUIDE.md` when ready to launch
4. Search online: "React + your question"
5. Check component comments for specific guidance

---

**Need to customize something?** 
Look for `{/* REPLACE: ... */}` comments throughout the code!

**Happy coding! 🎉**
