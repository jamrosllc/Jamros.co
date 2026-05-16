# 🚗 JAMROS.co — Premium Used Cars Website

> High-impact redesign inspired by **Need for Speed 8K** aesthetic.  
> Optimized to convert car buyers in **Saint Louis, Missouri**.

---

## 🎯 Project Overview

A complete static website redesign for **Jamros.co**, a premium used car dealership in Saint Louis, MO. The site features a cinematic, high-energy visual style inspired by Need for Speed 8K with full bilingual support (English / Spanish).

---

## ✅ Completed Features

### Visual Design
- [x] NFS 8K-inspired dark theme with neon accents (orange `#ff3c00` + cyan `#00d4ff`)
- [x] Animated particle canvas on hero section
- [x] Speed streak animations and glow effects
- [x] Orbitron display font for dramatic headings
- [x] CSS animations with scroll-triggered reveals
- [x] Smooth hover effects with glows and transforms

### Sections
- [x] **Hero Section** — Full-viewport impact with CTA buttons + trust badges
- [x] **Stats Bar** — Animated counters (vehicles sold, satisfaction, response time, rating)
- [x] **The Solution** — Problem vs. Jamros Way comparison grid + feature cards
- [x] **Market Opportunity** — STL market data, stats grid, competitive advantages with progress bars
- [x] **Business Model** — 4 revenue streams + 5-step process flow diagram
- [x] **Team Section** — 4 team member cards with animated avatar rings
- [x] **Financial Projections** — 4 KPI cards + 4 Chart.js charts (revenue, units, streams, margin)
- [x] **Featured Inventory** — 6 vehicle cards with filter (All / Sedans / SUVs)
- [x] **Testimonials** — 3 customer reviews with featured card
- [x] **Contact Section** — Contact channels + form with WhatsApp redirect on submit
- [x] **Footer** — Brand, navigation, services, contact info + social links

### Functionality
- [x] **Bilingual System (EN/ES)** — Full translation of all content
- [x] **Language persistence** — `localStorage` stores user preference
- [x] **Language toggle button** — Visible in header (EN | ES)
- [x] **Responsive design** — Mobile, tablet, desktop (mobile-first CSS)
- [x] **Scroll animations** — IntersectionObserver for fade-up/fade-left effects
- [x] **Animated counters** — Stats animate when scrolled into view
- [x] **Inventory filter** — Filter by all/sedans/SUVs with smooth animations
- [x] **Mobile hamburger menu** — Accessible, animated navigation
- [x] **Floating WhatsApp button** — Always visible, bottom-right
- [x] **Back to top button** — Appears after 400px scroll
- [x] **Smooth scroll** — All anchor links scroll smoothly
- [x] **Header scroll detection** — Header gains background on scroll
- [x] **Form handler** — Validates, shows loading, success state + redirects to WhatsApp
- [x] **Particle canvas** — Animated floating particles in hero

### Chart.js Financial Visualizations
- [x] **Revenue Growth** — Bar chart (12 quarters, 3 years)
- [x] **Units Sold/Month** — Multi-line chart (3 year comparison)
- [x] **Revenue by Stream** — Doughnut chart (4 revenue streams)
- [x] **Gross Profit Margin** — Line chart (gross + net margin %)

### Conversion Elements
- [x] WhatsApp button (floating + header + contact)
- [x] Phone number (clickable `tel:` links)
- [x] CTAs in every section
- [x] Trust badges in hero
- [x] Social proof testimonials
- [x] Contact form with WhatsApp integration

---

## 📁 File Structure

```
jamros-website/
├── index.html          # Main HTML (semantic, accessible)
├── css/
│   └── style.css       # Full stylesheet (CSS variables, responsive)
├── js/
│   └── main.js         # All JavaScript modules
└── README.md           # This file
```

---

## 🔗 Navigation URIs

| Section | Anchor ID |
|---|---|
| Hero | `#hero` |
| The Solution | `#solution` |
| Market Opportunity | `#market` |
| Business Model | `#model` |
| Team | `#team` |
| Financial Projections | `#projections` |
| Inventory | `#inventory` |
| Testimonials | `#testimonials` |
| Contact | `#contact` |

**Example:** `https://jamros.co/#inventory`

---

## 🌐 External Dependencies (CDN)

| Library | Purpose | Version |
|---|---|---|
| Google Fonts (Orbitron + Inter) | Display & body typography | Latest |
| Font Awesome | Icons throughout site | 6.5.0 |
| Chart.js | Financial projection charts | 4.4.0 |

---

## 🗣️ Bilingual System

### How It Works
1. All translatable text elements have a `data-i18n="key"` attribute
2. The `LangManager` in `js/main.js` maps keys to translations
3. Switching language calls `LangManager.toggle()` which updates all elements
4. User preference is saved to `localStorage` under key `jamros_lang`

### Adding New Translations
```javascript
// In js/main.js, inside the i18n object:
i18n.en.my_new_key = 'English text';
i18n.es.my_new_key = 'Texto en español';

// In HTML:
<span data-i18n="my_new_key">English text</span>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| `max-width: 1199px` | Tablet — hamburger menu, 2-col grids |
| `max-width: 900px` | Small tablet — stacked vs-grid, 1-col contact |
| `max-width: 767px` | Mobile — single column, hidden car visual |
| `max-width: 480px` | Small mobile — adjusted typography |

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd jamros-website
   ```

2. **Open locally:**
   - Simply open `index.html` in a browser, OR
   - Use a local server: `npx serve .` or `python -m http.server`

3. **Customize content:**
   - Update contact info: Search for `13145550100` in `index.html` and `js/main.js`
   - Update email: Search for `info@jamros.co`
   - Update inventory: Edit `.car-card` sections in `index.html`

4. **Deploy:**
   - Upload all files to any static hosting (Netlify, Vercel, GitHub Pages)
   - Or use the **Publish tab** in Genspark

---

## 🎨 Design Tokens (CSS Variables)

Key colors in `css/style.css`:

```css
--clr-primary:  #ff3c00;   /* Jamros Orange (main brand) */
--clr-accent:   #00d4ff;   /* Neon Cyan (secondary) */
--clr-gold:     #ffcc00;   /* Gold (stars, highlights) */
--clr-green:    #00ff8c;   /* Success green */
--clr-bg:       #050508;   /* Main background */
```

---

## 📋 Next Steps / Recommendations

- [ ] Connect form to real backend (EmailJS, Formspree, or Netlify Forms)
- [ ] Add real vehicle photos to inventory cards
- [ ] Integrate real inventory from a CRM or spreadsheet API
- [ ] Add Google Analytics / Meta Pixel for conversion tracking
- [ ] Add Google Maps embed for location
- [ ] Create individual vehicle detail pages
- [ ] Add Instagram feed integration
- [ ] A/B test hero CTAs for higher conversion
- [ ] Add live chat widget (Tidio, WhatsApp Business API)
- [ ] Set up Google My Business integration

---

## 📞 Business Contact

- **Phone:** (314) 555-0100
- **WhatsApp:** [wa.me/13145550100](https://wa.me/13145550100)
- **Email:** info@jamros.co
- **Location:** Saint Louis, Missouri

---

*Built with ❤️ for Jamros.co — Saint Louis's fastest used car dealership.*
