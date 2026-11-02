[README.md.txt](https://github.com/user-attachments/files/34291568/README.md.txt)
# Stepup Sneakers - WEDE5020 Part 3

## Project Overview
Stepup Sneakers is an e-commerce website based in Bloemfontein, South Africa, selling authentic sneakers including Nike, Adidas, Jordan, and Puma. The site targets sneaker enthusiasts and offers online enquiries, contact support, and store location.

## Part 3 Changes - Enhancing Functionality and SEO

### 1.from Part 2
- Fixed navigation bar responsiveness on mobile devices
- Added descriptive alt text to all product images for accessibility
- Corrected image file paths that were broken
- Removed duplicate CSS styles and improved stylesheet organization
- Validated HTML using W3C Validator - 0 errors

### 2. Functionality - JavaScript Enhancements

#### 2.1 Interactive Elements
- **Accordion**: Implemented FAQ accordion on About page using jQuery slideToggle()
- **Tabs**: Product detail tabs (Description, Reviews, Size Guide) using data attributes
- **Modals**: Quick view modal for sneakers - shows name and price on click with fadeIn/fadeOut animation
- **Leaflet Map**: Integrated interactive map on contact.html showing Bloemfontein store location (-29.0852, 26.1596) using Leaflet 1.9.4 and CARTO tiles to avoid OSM 403 blocking
- **Animations**: Fade-in animation on scroll for product cards, button hover transitions
- **DOM Manipulation**: Dynamically loads sneaker products from JavaScript array into product-list div
- **Lightbox Gallery**: Clicking sneaker image opens full-screen lightbox overlay

#### 2.2 Dynamic Content
- Product data stored in JavaScript array and rendered via displayProducts() function
- Search filter: Input field filters products by name/category in real-time (e.g., typing "Nike" shows only Nike)

### 3. SEO Implementation

#### 3.1 On-Page SEO
- **Keyword Research**: sneakers South Africa, Nike Bloemfontein, affordable Jordan, Stepup Sneakers
- **Title Tags**: Unique keyword-rich titles for each page e.g., "Enquiry | Stepup Sneakers - Product Quote"
- **Meta Descriptions**: Compelling meta descriptions under 160 chars for each page
- **Header Tags**: One H1 per page, followed by H2, H3 hierarchy
- **Image Optimisation**: Descriptive file names (nike-air-max-270-black.jpg), alt attributes, lazy loading
- **URL Structure**: Clean URLs - index.html, products.html, enquiry.html, contact.html
- **Internal Linking**: Products link to enquiry page with query params, navigation links all pages
- **Mobile Friendliness**: Media queries for responsive layout, tested on Chrome DevTools

#### 3.2 Off-Page SEO
- Promotion strategy on Instagram @stepupsneakers and Facebook business page
- Backlink plan from local Bloemfontein business directory
- Social sharing enabled via Open Graph meta tags

#### 3.3 Additional SEO
- **robots.txt**: Created to allow all crawlers and point to sitemap
- **sitemap.xml**: Created with 4 URLs for search engines
- **Page Speed**: Images compressed via TinyPNG, JS minified, used CDN for Leaflet and jQuery
- **Security**: HTTPS enabled via Netlify deployment

### 4. Form Functionality and Validation

#### enquiry.html
- Purpose: Allows user to enquire about products, volunteer, sponsor
- Fields: Full Name (min 3 chars, pattern letters only), Email (HTML5 email validation), Phone (10 digits pattern), Product Select, Size, Quantity (1-10), Message
- Validation: HTML5 required, pattern, minlength + JavaScript validation
- Processing: On submit calculates Total Cost = Unit Price * Quantity, checks availability (In Stock / Low Stock), displays quote result to user without page reload
- Custom error messages for invalid input

#### contact.html
- Purpose: General message, support, returns
- Fields: Name, Email, Phone optional, Message Type select, Full Message (20-500 chars)
- Validation: Client-side validation, checks message length
- Email compilation: Compiles into email format to info@stepupsneakers.co.za
- AJAX: Simulates email sending using fetch API to jsonplaceholder.typicode.com with error handling
- Result: Shows success message with reply timeline (24 hours)

### 5. GitHub and Deployment
- All changes committed with descriptive messages
- Branch: main
- Deployment: Netlify connected to GitHub repo - auto-deploy on push
- Commits: Added Part 3 JS, SEO, forms, fixed map 403 error

## How to Run
1. Clone repository
2. Open with VS Code Live Server 
3. Navigate pages via navigation bar

## References
- Leaflet Maps Documentation - https://leafletjs.com/ [Accessed 1 Nov 2026]
- Carto Basemaps - https://carto.com/basemaps/ [Accessed 1 Nov 2026] - Used to fix OSM 403 tile blocking
- jQuery Documentation - https://jquery.com/ [Accessed 1 Nov 2026]
- MDN Web Docs - Form Validation - https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed 1 Nov 2026]
- MDN - Fetch API - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API [Accessed 2 Nov 2026]
- OpenStreetMap Wiki - Blocked Tiles - http://osm.wiki/Blocked [Accessed 2 Nov 2026] - Reason for switching to CARTO
- GeeksforGeeks - SEO Basics - https://www.geeksforgeeks.org/search-engine-optimization-seo/ [Accessed 2 Nov 2026]

## Student Information
Name: Karabo Fish
Module: WEDE5020
Year: 2026
Project: Stepup Sneakers Part 3 - 100 Marks
