# GlobalTrade Exports - Enterprise Web Application

A modern, responsive, and high-performance Import & Export / International Trading Company website built with **React**, **Vite**, **React Router DOM**, **React Icons**, and **Vanilla CSS**.

---

## 🚀 Key Features

- **Professional Brand & Corporate Identity**:
  - Brand name: **GlobalTrade Exports**
  - Tagline: *"Connecting Quality Products to Global Markets"*
  - High-trust blue & green color scheme (`#1769aa`, `#20a464`) with a bright, clean, corporate light theme.
- **Complete Page Architecture**:
  - `Home` (`/`): Dynamic hero section, animated statistics counters, "What We Do" cards, 6 featured products with hover zoom, "Why Choose Us" features, and CTA.
  - `About Us` (`/about`): Corporate history, mission, vision, core values, certification badges, and trade credentials.
  - `Products Catalog` (`/products`): 12+ real export & import products with live search, category pills, trade type toggles, and responsive grid.
  - `Product Details` (`/products/:id`): Full commodity specifications (MOQ, packaging, grade, HS Code), instant WhatsApp inquiry, and "Request a Quote" routing.
  - `Quick View Modal`: Instant preview on product cards without leaving the catalog.
  - `Imports` (`/imports`): 6-step import process and inbound product categories.
  - `Exports` (`/exports`): 6-step export methodology, 7 export sectors, and destination markets with shipping transit times.
  - `Business Deals` (`/deals`): Comprehensive quotation and commercial partnership enquiry form with validation, query parameter auto-fill, and browser `localStorage` demo persistence.
  - `Contact Us` (`/contact`): Direct contact numbers, official email, Kerala headquarters, business operating hours, direct WhatsApp chat, and interactive message form.
  - `404 Not Found` (`*`): Dedicated catch-all error page with return navigation.
- **Responsive & Accessible**:
  - Sticky topbar & navbar with mobile drawer navigation.
  - Smooth page transitions and automatic scroll-to-top on route changes.
  - Strict semantic HTML, descriptive alt tags, and clean zero-warning codebase (`oxlint` verified).

---

## 📁 Project Folder Structure

```text
sample2 web/
├── index.html                  # SEO meta tags, Google Fonts (Plus Jakarta Sans & Inter), SVG favicon
├── package.json                # Project dependencies and run scripts
├── vite.config.js              # Vite configuration
├── README.md                   # Documentation & customization guide
│
├── public/                     # Static public assets
│
└── src/
    ├── main.jsx                # Application root mounting StrictMode
    ├── App.jsx                 # React Router routes and core layout shell
    ├── index.css               # Global CSS variables, reset, buttons, forms, typography
    ├── App.css                 # Component-specific styles (Navbar, Hero, Cards, Modals, Footer)
    │
    ├── data/
    │   ├── companyInfo.js      # Centralized company name, phone, email, address, and social links
    │   └── products.js         # 12+ demo products with specs, images, origins, and categories
    │
    ├── components/
    │   ├── Navbar.jsx          # Sticky header with active links, quote CTA, and mobile hamburger drawer
    │   ├── Footer.jsx          # Multi-column corporate footer with trust badges and quick links
    │   ├── Hero.jsx            # Hero section with cargo graphics, badges, and primary CTAs
    │   ├── Stats.jsx           # Animated-style counter metrics section
    │   ├── SectionTitle.jsx    # Reusable section header with category tag and subtitle
    │   ├── BusinessCard.jsx    # Reusable feature, process, and value proposition cards
    │   ├── ProductCard.jsx     # Product card with image hover zoom, badges, and quick view
    │   ├── ProductFilter.jsx   # Search input, category pills, trade type toggles, and reset
    │   ├── ProductModal.jsx    # Interactive quick-view dialog with specifications and quote prefill
    │   └── ScrollToTop.jsx     # Route change window scroll reset
    │
    └── pages/
        ├── Home.jsx            # Homepage assembling Hero, Stats, Services, Products, Features, CTA
        ├── About.jsx           # Corporate story, mission, vision, values, certifications
        ├── Products.jsx        # Full searchable and filterable product catalog
        ├── ProductDetails.jsx  # Dedicated product page with technical specifications
        ├── Imports.jsx         # 6-step import process and inbound machinery/supplies
        ├── Exports.jsx         # 6-step export process, agricultural/spice categories, destination markets
        ├── Deals.jsx           # Commercial quotation form with validation & localStorage history
        ├── Contact.jsx         # Office contact details, WhatsApp quick chat, and inquiry form
        └── NotFound.jsx        # 404 Not Found fallback page
```

---

## 🛠️ Getting Started & Commands

### 1. Installation
Install all required dependencies:
```bash
npm install
```

### 2. Run Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser at: `http://localhost:5173/`

### 3. Build for Production
Generate the optimized production bundle in `/dist`:
```bash
npm run build
```

### 4. Code Quality & Linting
Run the fast linter to ensure code standards:
```bash
npm run lint
```

---

## ⚙️ How to Customize Business Information

All core company information is centralized in a single file: `src/data/companyInfo.js`.

### How to Change Company Name & Tagline
Open `src/data/companyInfo.js` and edit:
```javascript
export const companyInfo = {
  name: "Your Company Name",
  shortName: "YourBrand",
  tagline: "Your New Custom Tagline Here",
  // ...
};
```
This automatically updates the navbar, footer, about page, and forms across the website!

### How to Change Phone, Email, and Address
In `src/data/companyInfo.js`, modify the `contact` block:
```javascript
contact: {
  email: "contact@yourdomain.com",
  phone: "+91 98765 43210",
  phoneDisplay: "+91 98765 43210",
  phoneTel: "+919876543210",
  whatsapp: "919876543210", // International country code without '+' or spaces
  location: "Kochi, Kerala, India",
  fullAddress: "Your Office Address, Kochi, Kerala 682001, India",
  businessHours: "Monday - Saturday: 9:00 AM - 6:00 PM (IST)",
}
```

---

## 📦 How to Add or Edit Products

All product catalog data is defined in `src/data/products.js`.

### Adding a New Product
Open `src/data/products.js` and append a new object to the `products` array:
```javascript
{
  id: 13,
  name: "Organic Turmeric Fingers (Alleppey Finger)",
  category: "Agricultural", // "Agricultural", "Food", "Textiles", "Handicrafts", or "Other"
  shortDescription: "High-curcumin (5%+) sun-dried turmeric fingers for international export.",
  description: "Natural Alleppey grade whole turmeric roots harvested from certified organic farms...",
  image: "https://images.unsplash.com/your-image-url",
  origin: "Kerala, India",
  availability: "In Stock",
  type: "Export", // "Export" or "Import"
  featured: true, // true to show on Home page
  minOrderQuantity: "1 Metric Ton",
  packaging: "50kg PP woven bags",
  grade: "Curcumin 5.0% - 5.5%",
  hsCode: "091030"
}
```

### How to Replace Product Images
To change an image, simply replace the `image` URL property in `src/data/products.js` with:
- Any web image URL (e.g., Unsplash, Cloudinary, AWS S3)
- Or a local image placed in `src/assets/images/` and imported into `products.js`.

---

## 🔌 How to Connect the Business Deals Form to a Real Backend

The Business Deals page (`src/pages/Deals.jsx`) currently uses React state and `localStorage` to demo form submissions without requiring an active server.

To connect this form to a real backend, you can choose any of the following standard options:

### Option A: Using EmailJS (No Server Required)
1. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
2. In `src/pages/Deals.jsx`, call `emailjs.send()` in `handleSubmit`:
   ```javascript
   import emailjs from '@emailjs/browser';

   // Inside handleSubmit:
   emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     formData,
     'YOUR_PUBLIC_KEY'
   ).then(() => {
     alert('Enquiry received!');
   });
   ```

### Option B: Using a REST API / Node.js / Express Server
In `src/pages/Deals.jsx`, replace the `setTimeout` simulation in `handleSubmit` with a `fetch` or `axios` call:
```javascript
const response = await fetch('https://api.yourdomain.com/api/deals/enquiry', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

const result = await response.json();
if (response.ok) {
  setSubmittedData(result);
}
```

### Option C: Using Serverless Services (Web3Forms, Formspree, Firebase, or Supabase)
You can directly send the form payload to Formspree, Web3Forms endpoint, or insert it into a Supabase `trade_enquiries` table using `@supabase/supabase-js`.
