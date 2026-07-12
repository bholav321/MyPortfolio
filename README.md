# Bhola Vishwkarma — Portfolio (React + Vite)

A modern, premium portfolio website built with **React 19 + Vite 6**, migrated from a static HTML/CSS/JS template. All original content has been preserved and the UI has been significantly upgraded.

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-driven UI |
| Vite 6 | Lightning-fast build tool |
| Bootstrap 5 | Grid & utility classes |
| Bootstrap Icons | Icon set |
| AOS | Scroll animations |
| Swiper 11 | Core Competencies carousel |
| Typed.js | Hero typing animation |
| EmailJS | Contact form (no backend required) |

## 📁 Project Structure

```
src/
├── assets/
│   └── img/             (profile, portfolio, testimonial images)
├── components/
│   ├── Navbar/          (sidebar nav + mobile hamburger)
│   ├── Hero/            (fullscreen hero + typed animation)
│   ├── About/           (bio + info grid)
│   ├── Facts/           (animated counters)
│   ├── Skills/          (tech icon grid)
│   ├── Resume/          (vertical timeline)
│   ├── Portfolio/       (filterable project cards)
│   ├── Services/        (service cards)
│   ├── CoreCompetencies/(Swiper carousel)
│   ├── Contact/         (form + map)
│   └── Footer/
├── pages/
│   └── Home.jsx
├── styles/
│   ├── variables.css    (design tokens)
│   ├── global.css       (base styles)
│   └── responsive.css   (breakpoints)
├── App.jsx
└── main.jsx
```

## ⚡ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## 📧 Setting Up the Contact Form (EmailJS)

The contact form uses EmailJS to send emails without a backend.

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account
2. Create an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** with these template variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — message subject
   - `{{message}}` — message body
   - `{{to_name}}` — recipient (Bhola Vishwkarma)
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** Without these keys, the form still works in demo mode (simulates success after 1.2s).

## 🎨 Design Features

- **Dark navy theme** with electric blue accents
- **Glassmorphism sidebar** with profile photo glow ring
- **Animated hero** with floating orbs, dot grid, and Typed.js
- **Animated stat counters** triggered on scroll (IntersectionObserver)
- **Modern vertical timeline** in Resume with pulse dot on current job
- **React state-driven portfolio filter** (All / Enterprise / MERN / Frontend)
- **Swiper carousel** for Core Competencies
- **Scroll-spy active nav** via IntersectionObserver
- **AOS animations** on all sections
- **Back to top** button

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| < 576px | Mobile — 1 column, stacked |
| 576–767px | Small — 2 column grid |
| 768–991px | Tablet — 2 column |
| 992–1199px | Laptop — sidebar hidden by default |
| ≥ 1200px | Desktop — sidebar always visible |

## 🔗 Links

- **GitHub:** [github.com/bholav321](https://github.com/bholav321)
- **LinkedIn:** [linkedin.com/in/bhola-vishwkarma](https://linkedin.com/in/bhola-vishwkarma)
- **Email:** bholav321@gmail.com
