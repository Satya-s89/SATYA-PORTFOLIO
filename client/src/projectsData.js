// src/projectsData.js
// import TradeBro from './images/'
import squad from './images/squad.png'
import uw from './images/uw.png'
import ba from "./images/TradeBro-Figma.png"
import dash from './images/dashboard.png'

const projects = [
  {
    id: 'tradebro',
    title: 'TradeBro',
    // image: TradeBro,
    short: 'An AI-powered virtual stock trading platform with real-time market insights.',
    full: `TradeBro is a full-stack virtual trading platform that blends AI-driven insights with an interactive stock market simulation. 
It allows users to trade with virtual money, track portfolios, and gain hands-on experience without financial risk.

Its standout features include:
- 📈 Real-time NSE & BSE stock data via FMP API
- 🤖 Saytrix AI assistant powered by Gemini for market analysis & learning
- 💰 Virtual money system with buy, sell & order placement
- 📊 Portfolio tracker with profit/loss calculation
- 📰 Integrated stock market news feed
- 🎯 Beginner-friendly UI for learning and practicing trading

Designed for aspiring investors, students, and finance enthusiasts, TradeBro makes stock trading education engaging and risk-free.`,
    stacks: ['React', 'Node.js', 'MongoDB', 'Express', 'Gemini API', 'FMP API'],
    link: 'https://tradebro.netlify.app'
}
,
  {
    id: 'squad89',
    title: 'Squad89 Portfolio',
    image: squad,
    short: 'Responsive and modern developer portfolio.',
    full: `A sleek and responsive portfolio built for Squad89 to showcase their work, philosophy, and design sensibility. The project focuses on clean UI, accessibility, and maintainable component architecture.

Highlights:
- Fully responsive with utility-first styling via TailwindCSS
- Custom hover and scroll animations
- Modular React components for easy content updates

This project reflects best practices in building high-performing personal branding sites for tech professionals.`,
    stacks: ['React', 'TailwindCSS'],
    link: 'https://squad-89-portfolio-kalvium.vercel.app/'
  },
  {
    id: 'urbanwander',
    title: 'Urban Wander',
    image: uw,
    short: 'Static landing page for urban travel inspiration.',
    full: `Urban Wander is a visually-rich static landing page aimed at travelers seeking city-based adventures. It was built with semantic HTML, responsive CSS, and JavaScript enhancements.

Core Features:
- Pixel-perfect responsive layout
- Modern hero section, destination highlights, and testimonials
- Scroll-triggered animations and interactive nav menu

This project demonstrates frontend fundamentals, emphasizing layout precision and mobile-first design.`,
    stacks: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://vermillion-phoenix-f2e0bd.netlify.app/'
  },
  {
    id: 'tradebro-figma',
    title: 'TradeBro – Figma Design',
    image: ba,
    short: 'High-fidelity UI/UX prototype for TradeBro.',
    full: `A detailed Figma prototype covering the entire TradeBro user journey — from onboarding and market browsing to AI-assisted trading and portfolio tracking.

  Key Design Areas:
  - Clean dashboard and market data views
  - Integrated AI chat and analytics panels
  - Order placement and portfolio management flows
  - Organized components and auto-layouts for consistency

  Showcases a professional, intuitive UI/UX for a virtual stock trading platform.`,
    stacks: ['Figma', 'UI/UX Design'],
    link: 'https://www.figma.com/design/Y1SNHH6evKGjk5ngshsOcB/CAPESTONE-PROJECT-HIGHFID?node-id=0-1&t=EIaZS6bPGWSsvD0H-1'
  },
  {
    id: 'dashboard-figma',
    title: 'Admin Dashboard – Figma Design',
    image: dash,
    short: 'Data-driven admin and analytics dashboard UI prototype.',
    full: `A professional, high-fidelity Figma design showcasing a modern analytics dashboard for administrative and reporting use.

Features:
- KPI cards, interactive charts, and dynamic data tables
- Light and dark mode compatibility for accessibility
- Sidebar navigation with modular, scalable sections
- Optimized layout for SaaS, CMS, and reporting platforms

Highlights expertise in data visualization, information hierarchy, and intuitive dashboard UX patterns.`,
    stacks: ['Figma', 'UI/UX Design', 'Data Visualization'],
    link: 'https://www.figma.com/design/okqMdK4YZJoc81J6ClGGXu/Assignment---Working-with-Colours--Copy-?node-id=8121-2&t=EheuquDP8guXywKI-1'
}

]

export default projects
