# Brownsburg Pressure Washing Website

A professional, production-ready website for Brownsburg Pressure Washing, serving all four Hendricks County townships with comprehensive pressure washing services.

## Features

- **8 Complete Pages**: Home, Services, 4 Township pages, About, and Contact
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **SEO Optimized**: Unique titles, meta descriptions, and JSON-LD structured data
- **Quote Forms**: Prominent quote form on every page with validation
- **Professional Design**: Clean white background with navy and blue accents
- **Township Coverage**: Complete coverage of Lincoln, Brown, Middle, and Washington townships

## Pages Overview

1. **Home** (`/`) - Hero section, services overview, township coverage, testimonials
2. **Services** (`/services`) - Detailed service descriptions with pricing
3. **Lincoln Township** (`/lincoln-township`) - Largest area including Clermont Heights
4. **Brown Township** (`/brown-township`) - Northern quarter with highway access
5. **Middle Township** (`/middle-township`) - Western fringe near Tilden and Maplewood
6. **Washington Township** (`/washington-township`) - Southern edge coverage
7. **About** (`/about`) - Company story, trust badges, testimonials
8. **Contact** (`/contact`) - Comprehensive quote form and contact information

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Inter Font** for typography

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Environment Setup

For the contact form to work with email functionality, add your Resend API key:

```bash
# Add to .env file
RESEND_API_KEY=your_resend_api_key_here
```

## Design System

### Colors
- **Navy**: `#0b1d39` - Headers and primary text
- **Blue**: `#1e90ff` - Buttons, links, and accents
- **White**: `#ffffff` - Background throughout
- **Gray Scale**: Various shades for text hierarchy

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Line Heights**: 150% for body, 120% for headings

### Spacing
- **System**: 8px base unit
- **Breakpoints**: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)

## SEO Features

- Unique page titles and meta descriptions
- JSON-LD structured data for local business
- Sitemap.xml with all pages
- Robots.txt allowing all crawlers
- Semantic HTML structure
- Alt text for all images

## Contact Form

The quote form appears on every page and includes:
- Personal information fields
- Service selection dropdown
- Contact preferences
- Project details textarea
- Form validation
- Success/error handling

## Township Coverage

The site emphasizes complete coverage of Brownsburg's four townships:

1. **Lincoln Township** - Southeast (largest area, includes Clermont Heights)
2. **Brown Township** - Northern quarter (I-74, I-65, SR-267 access)
3. **Middle Township** - Western fringe (Tilden and Maplewood)
4. **Washington Township** - Southern edge (smallest area)

## Performance

- Optimized images from Pexels
- Lazy loading for images
- Minimal JavaScript bundle
- Fast Vite build system
- Responsive image sizing

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Focus states for interactive elements
- Color contrast compliance
- Keyboard navigation support

## Deployment

The site is ready for deployment to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

Build command: `npm run build`
Output directory: `dist`

## Maintenance

- Update service pricing as needed
- Add new testimonials regularly
- Update township information if boundaries change
- Monitor and update contact information
- Regular SEO content updates

## Support

For technical support or modifications, refer to the component documentation in the source code. Each component is well-documented with clear prop interfaces and usage examples.