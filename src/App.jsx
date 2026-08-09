import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// Custom SVG Icons Components
const ShieldIcon = () => (
  <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#0f172a" />
  </svg>
)

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="pathway-check">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="floating-icon" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
)


// Responsive/mobile layout fixes.
// This keeps the desktop design intact while preventing horizontal overflow
// and converting dense sections into a single-column mobile layout.
const MobileResponsiveStyles = () => (
  <style>{`
    html {
      scroll-behavior: smooth;
      overflow-x: hidden;
    }

    body {
      margin: 0;
      overflow-x: hidden;
      width: 100%;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    img, svg, video, canvas {
      max-width: 100%;
    }

    button, input, select, textarea {
      max-width: 100%;
    }

    .container {
      width: min(1180px, calc(100% - 40px));
      max-width: 1180px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-sec {
      overflow: hidden;
    }

    .hero-grid {
      min-width: 0;
    }

    .hero-content,
    .hero-visual,
    .country-info-box,
    .country-image-wrapper,
    .service-card,
    .calculator-box {
      min-width: 0;
    }

    .hero-title {
      overflow-wrap: anywhere;
    }

    .hero-desc,
    .section-desc,
    .country-desc,
    .service-desc,
    .pathway-name {
      overflow-wrap: anywhere;
    }

    .country-img {
      display: block;
      width: 100%;
      max-width: 100%;
      object-fit: cover;
    }

    .select-control,
    input.select-control,
    textarea.select-control {
      width: 100%;
      min-width: 0;
    }

    .announcement-bar {
      width: 100%;
      overflow: hidden;
    }

    .announcement-bar a {
      white-space: nowrap;
    }

    @media (max-width: 900px) {
      .container {
        width: min(100% - 28px, 720px) !important;
      }

      .navbar {
        width: 100%;
      }

      .nav-container {
        min-height: 64px;
        gap: 10px;
      }

      .logo-link {
        min-width: 0;
        flex: 1 1 auto;
      }

      .logo-link > span {
        font-size: 1.15rem !important;
        white-space: nowrap;
      }

      .nav-actions {
        gap: 8px;
        flex: 0 0 auto;
      }

      .nav-actions .theme-toggle,
      .nav-actions > .btn {
        display: none !important;
      }

      .hamburger {
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        width: 42px;
        height: 42px;
        padding: 8px;
        cursor: pointer;
        flex: 0 0 42px;
      }

      .hamburger span {
        display: block;
        width: 100%;
        height: 3px;
        border-radius: 99px;
      }

      .nav-menu {
        position: fixed !important;
        top: var(--mobile-menu-top, 124px);
        left: 14px !important;
        right: 14px !important;
        width: auto !important;
        max-height: calc(100vh - 140px);
        overflow-y: auto;
        padding: 14px !important;
        display: none !important;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 6px !important;
        border: 1px solid rgba(59, 130, 246, 0.25);
        border-radius: 16px;
        background: rgba(7, 10, 18, 0.98);
        backdrop-filter: blur(18px);
        box-shadow: 0 20px 60px rgba(0,0,0,.45);
        z-index: 1200;
      }

      .nav-menu.open {
        display: flex !important;
      }

      .nav-menu .nav-link {
        display: block;
        width: 100%;
        padding: 13px 14px !important;
        border-radius: 10px;
      }

      .nav-menu .highlight-consult-link {
        text-align: center;
        margin-top: 4px;
      }

      .hero-grid {
        grid-template-columns: minmax(0, 1fr) !important;
        gap: 24px !important;
      }

      .hero-content {
        width: 100%;
        max-width: 100%;
        text-align: center;
      }

      .hero-badge {
        width: 100%;
        max-width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8px;
        padding: 8px 10px !important;
        font-size: .88rem !important;
        line-height: 1.25;
      }

      .hero-title {
        font-size: clamp(2.15rem, 9vw, 3.25rem) !important;
        line-height: 1.08 !important;
        margin-left: auto;
        margin-right: auto;
        max-width: 680px;
      }

      .hero-desc {
        font-size: 1rem !important;
        line-height: 1.65 !important;
        max-width: 620px;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      .hero-buttons {
        width: 100%;
        display: flex !important;
        flex-direction: column;
        align-items: stretch;
        gap: 12px !important;
      }

      .hero-buttons .btn {
        width: 100%;
        justify-content: center;
      }

      .hero-content > div:last-child {
        margin-top: 24px !important;
      }

      .hero-content > div:last-child > div {
        justify-content: center;
      }

      .hero-visual {
        width: 100%;
        min-height: 0 !important;
      }

      .globe-placeholder {
        min-height: 330px !important;
        width: 100%;
        overflow: hidden;
      }

      .hero-card-floating {
        max-width: calc(100% - 20px);
      }

      .hero-card-1 {
        top: 20px !important;
        left: 10px !important;
      }

      .hero-card-2 {
        top: 145px !important;
        right: 10px !important;
      }

      .globe-placeholder > .glass-panel {
        left: 10px !important;
        right: 10px;
        width: auto;
        bottom: 8px !important;
      }

      .flight-path {
        max-width: 100%;
      }

      .section-padding {
        padding-top: 58px !important;
        padding-bottom: 58px !important;
      }

      .section-header {
        margin-bottom: 28px !important;
      }

      .section-title {
        font-size: clamp(1.85rem, 7vw, 2.5rem) !important;
        line-height: 1.15 !important;
      }

      .section-desc {
        font-size: .98rem !important;
        line-height: 1.6;
      }

      .services-grid {
        grid-template-columns: 1fr !important;
      }

      .services-grid > * {
        width: 100%;
      }

      .explorer-tabs {
        display: flex !important;
        overflow-x: auto;
        overflow-y: hidden;
        justify-content: flex-start !important;
        flex-wrap: nowrap !important;
        gap: 8px !important;
        padding: 4px 2px 12px;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
      }

      .explorer-tabs::-webkit-scrollbar {
        display: none;
      }

      .tab-btn {
        flex: 0 0 auto;
        white-space: nowrap;
      }

      #destinations .glass-panel {
        padding: 16px !important;
      }

      .country-display-grid {
        grid-template-columns: 1fr !important;
        gap: 22px !important;
      }

      .country-image-wrapper {
        min-height: 220px;
      }

      .country-img {
        height: 220px !important;
        min-height: 220px;
      }

      .country-flag-badge {
        left: 12px !important;
        right: 12px;
        width: auto !important;
        max-width: calc(100% - 24px);
      }

      .country-title {
        font-size: 1.45rem !important;
        line-height: 1.25;
      }

      .country-stats-row {
        grid-template-columns: 1fr !important;
        gap: 10px !important;
      }

      .c-stat-card {
        min-width: 0;
      }

      .pathway-item {
        display: grid !important;
        grid-template-columns: 22px minmax(0, 1fr);
        gap: 8px !important;
        align-items: start;
      }

      .pathway-item .pathway-tag {
        grid-column: 2;
        justify-self: start;
        margin-top: -2px;
      }

      .calculator-box {
        padding: 20px !important;
      }

      .calc-grid {
        grid-template-columns: 1fr !important;
      }

      .calc-step-content .btn {
        min-height: 46px;
      }

      #contact .glass-panel {
        padding: 22px !important;
      }

      #contact form {
        gap: 16px !important;
      }

      #contact .calc-grid {
        gap: 16px !important;
      }

      footer .container {
        grid-template-columns: 1fr !important;
        gap: 28px !important;
      }

      footer {
        padding-top: 40px !important;
      }

      .whatsapp-float {
        right: 16px !important;
        bottom: 16px !important;
        width: 54px !important;
        height: 54px !important;
      }
    }

    @media (max-width: 520px) {
      .container {
        width: calc(100% - 24px) !important;
      }

      .announcement-bar {
        padding: 8px 10px !important;
        font-size: .76rem !important;
        line-height: 1.35;
      }

      .navbar {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      .nav-container {
        width: calc(100% - 20px) !important;
      }

      .logo-icon {
        width: 25px !important;
        height: 25px !important;
      }

      .hero-sec {
        padding-top: 52px !important;
      }

      .hero-badge-tag {
        padding: 6px 11px !important;
      }

      .hero-title {
        font-size: clamp(2rem, 12vw, 2.65rem) !important;
      }

      .hero-desc {
        font-size: .96rem !important;
      }

      .glass-panel {
        max-width: 100%;
      }

      .hero-card-floating {
        padding: 10px !important;
        gap: 8px !important;
      }

      .hero-card-floating h4 {
        font-size: .78rem !important;
      }

      .hero-card-floating p {
        font-size: .68rem !important;
      }

      .globe-placeholder {
        min-height: 300px !important;
      }

      .hero-card-1 {
        top: 10px !important;
        left: 4px !important;
      }

      .hero-card-2 {
        top: 125px !important;
        right: 4px !important;
      }

      .globe-placeholder > .glass-panel {
        left: 4px !important;
        right: 4px !important;
        padding: 10px 12px !important;
      }

      .globe-placeholder > .glass-panel h5 {
        font-size: .78rem !important;
      }

      .globe-placeholder > .glass-panel p {
        font-size: .68rem !important;
      }

      .country-image-wrapper,
      .country-img {
        height: 190px !important;
        min-height: 190px !important;
      }

      .country-info-box {
        padding: 0 !important;
      }

      .country-title {
        font-size: 1.25rem !important;
      }

      .country-desc {
        font-size: .9rem !important;
        line-height: 1.55;
      }

      .pathway-item {
        padding: 10px 0 !important;
      }

      .pathway-name {
        font-size: .86rem !important;
      }

      .pathway-tag {
        font-size: .72rem !important;
      }

      .calc-progress {
        transform: scale(.9);
        transform-origin: left center;
        width: 111%;
      }

      .calc-step-title {
        font-size: 1.15rem !important;
      }

      .calc-step-content > div[style*="display: flex"] {
        flex-wrap: wrap;
      }

      .calc-step-content > div[style*="display: flex"] .btn {
        flex: 1 1 140px;
      }

      .service-card {
        padding: 24px !important;
      }

      #contact .section-desc {
        font-size: .92rem !important;
      }

      .nav-menu {
        top: 116px !important;
      }
    }
  `}</style>
)


// Destination Countries Data
const staticCountriesData = [
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    title: 'Immigrate to Canada via Express Entry & PNPs',
    desc: 'Canada offers some of the world\'s most welcoming immigration programs. Whether you want to apply for Permanent Residency (PR), study at top universities, or obtain a work permit, Canada provides stable career pathways and an exceptional quality of life.',
    successRate: '94%',
    processingTime: '6-8 Months',
    minPoints: '67/100',
    pathways: [
      { name: 'Express Entry (FSWP, FSTP, CEC)', tag: 'PR Path' },
      { name: 'Provincial Nominee Programs (PNP)', tag: 'Regional' },
      { name: 'Post-Graduation Work Permit (PGWP)', tag: 'Study first' }
    ],
    image: 'https://images.unsplash.com/photo-1519832979-6fa011b87665?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    title: 'Explore General Skilled Migration in Australia',
    desc: 'With a booming economy and a demand for skilled professionals, Australia offers competitive visa pathways. The General Skilled Migration (GSM) program allows eligible workers to live and work permanently without needing a sponsor.',
    successRate: '91%',
    processingTime: '8-10 Months',
    minPoints: '65 Points',
    pathways: [
      { name: 'Skilled Independent Visa (Subclass 189)', tag: 'Independent' },
      { name: 'Skilled Nominated Visa (Subclass 190)', tag: 'State Sponsor' },
      { name: 'Skilled Work Regional Visa (Subclass 491)', tag: 'Regional' }
    ],
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    title: 'Work & Live in Germany with Opportunity Card',
    desc: 'Germany\'s new Opportunity Card (Chancenkarte) makes job hunting in Europe easier than ever. Skilled professionals can relocate to Germany to secure employment in engineering, IT, healthcare, and other highly demanded fields.',
    successRate: '88%',
    processingTime: '3-5 Months',
    minPoints: '6/10 Points',
    pathways: [
      { name: 'Opportunity Card (Chancenkarte)', tag: 'Job Search' },
      { name: 'German EU Blue Card', tag: 'Fast Track' },
      { name: 'Vocational Training (Ausbildung)', tag: 'Entry Level' }
    ],
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    title: 'UK Skilled Worker & Expansion Visas',
    desc: 'The UK\'s points-based system offers attractive visas for global talent. Relocate quickly as a skilled worker or establish a branch of your business using the UK Expansion Worker pathway.',
    successRate: '92%',
    processingTime: '2-4 Months',
    minPoints: '70 Points',
    pathways: [
      { name: 'Skilled Worker Visa (Sponsored)', tag: 'Work' },
      { name: 'UK Global Talent Visa', tag: 'Elite Tech/Arts' },
      { name: 'UK Scale-up Visa', tag: 'Fast Growth' }
    ],
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'nz',
    name: 'New Zealand',
    flag: '🇳🇿',
    title: 'New Zealand Skilled Migrant Category',
    desc: 'Experience exceptional work-life balance in New Zealand. The Skilled Migrant Category Resident Visa allows skilled specialists to work and live in New Zealand permanently.',
    successRate: '89%',
    processingTime: '6-9 Months',
    minPoints: '6 Points',
    pathways: [
      { name: 'Skilled Migrant Category (SMC)', tag: 'PR Path' },
      { name: 'Green List Straight to Residence', tag: 'Fast Track' },
      { name: 'Accredited Employer Work Visa', tag: 'Work' }
    ],
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=600&q=80'
  }
]

const mobileResponsiveStyles = `
/* =========================================================
   CLOYSTERVISA — MOBILE-FIRST RESPONSIVE PATCH
   Keeps desktop layout, but gives phones their own layout.
   ========================================================= */

html, body, #root {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

img, svg, video {
  max-width: 100%;
}

button,
input,
select,
textarea {
  max-width: 100%;
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 40px));
  margin-inline: auto;
}

.navbar {
  width: 100%;
}

.nav-container {
  min-width: 0;
}

.nav-menu {
  min-width: 0;
}

.hero-sec,
.section-padding,
footer {
  overflow: hidden;
}

.hero-grid,
.country-display-grid,
.calc-grid,
.services-grid {
  min-width: 0;
}

.hero-content,
.hero-visual,
.country-info-box,
.country-image-wrapper,
.calc-step-content,
.service-card {
  min-width: 0;
}

.hero-title {
  overflow-wrap: anywhere;
  word-break: normal;
}

.hero-desc,
.section-desc,
.country-desc,
.service-desc {
  overflow-wrap: anywhere;
}

/* ---------- TABLET ---------- */
@media (max-width: 900px) {
  .container {
    width: min(100% - 32px, 760px);
  }

  .nav-container {
    min-height: 68px;
  }

  .nav-actions > .btn {
    display: none !important;
  }

  .nav-menu {
    gap: 10px;
  }

  .hero-grid {
    grid-template-columns: 1fr !important;
  }

  .hero-content {
    max-width: 720px;
    margin-inline: auto;
    text-align: center;
  }

  .hero-visual {
    min-height: 340px;
    max-width: 720px;
    width: 100%;
    margin-inline: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .country-display-grid {
    grid-template-columns: 1fr !important;
  }

  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .calc-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}

/* ---------- PHONE ---------- */
@media (max-width: 640px) {
  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 0 !important;
  }

  .container {
    width: calc(100% - 28px) !important;
    max-width: none !important;
    margin-inline: auto !important;
  }

  /* Announcement */
  .announcement-bar {
    padding: 9px 12px !important;
    min-height: 40px;
    font-size: 12px !important;
    line-height: 1.35 !important;
    white-space: normal !important;
  }

  .announcement-bar a {
    white-space: nowrap;
  }

  /* Header */
  .navbar {
    position: relative;
    z-index: 100;
  }

  .nav-container {
    min-height: 62px !important;
    padding-block: 8px;
  }

  .logo-link {
    gap: 6px !important;
    flex: 0 0 auto;
  }

  .logo-link .logo-icon {
    width: 25px !important;
    height: 25px !important;
  }

  .logo-link span {
    font-size: 1.08rem !important;
  }

  .nav-actions {
    margin-left: auto;
    gap: 7px !important;
  }

  .theme-toggle {
    width: 36px;
    height: 36px;
    padding: 0 !important;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .hamburger {
    width: 38px !important;
    height: 38px !important;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    flex: 0 0 auto;
  }

  .hamburger span {
    width: 23px !important;
    height: 2.5px !important;
    border-radius: 999px;
  }

  /* Mobile dropdown */
  .nav-menu {
    position: absolute !important;
    top: calc(100% + 6px);
    left: 14px;
    right: 14px;
    width: auto !important;
    display: none !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 4px !important;
    padding: 10px !important;
    border-radius: 16px;
    background: rgba(7, 10, 18, 0.98);
    border: 1px solid #1e293b;
    box-shadow: 0 18px 45px rgba(0,0,0,.35);
    backdrop-filter: blur(18px);
  }

  .nav-menu.open {
    display: flex !important;
  }

  .nav-menu .nav-link {
    display: flex !important;
    align-items: center;
    min-height: 44px;
    padding: 10px 12px !important;
    border-radius: 10px !important;
    font-size: 14px !important;
  }

  .nav-menu .highlight-consult-link {
    justify-content: center;
    margin-top: 4px;
  }

  /* Hero */
  .hero-sec {
    min-height: auto !important;
    padding: 42px 0 48px !important;
  }

  .hero-grid {
    display: block !important;
    width: 100% !important;
  }

  .hero-content {
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
    text-align: center !important;
  }

  .hero-badge {
    width: 100% !important;
    max-width: 100% !important;
    min-height: 46px;
    padding: 5px 7px !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
    gap: 7px !important;
    border-radius: 999px !important;
    font-size: 11px !important;
    line-height: 1.15;
  }

  .hero-badge-tag {
    flex: 0 0 auto;
    padding: 8px 10px !important;
    border-radius: 999px !important;
    font-size: 11px !important;
  }

  .hero-title {
    width: 100% !important;
    max-width: 100% !important;
    margin: 24px 0 14px !important;
    font-size: clamp(2.05rem, 10.5vw, 3.1rem) !important;
    line-height: 1.02 !important;
    letter-spacing: -1.7px !important;
    overflow-wrap: normal !important;
    word-break: normal !important;
  }

  .hero-desc {
    width: 100% !important;
    max-width: 430px !important;
    margin: 0 auto 24px !important;
    padding-inline: 3px;
    font-size: 15px !important;
    line-height: 1.7 !important;
    text-align: center !important;
  }

  .hero-buttons {
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 10px !important;
    align-items: stretch !important;
  }

  .hero-buttons .btn {
    width: 100% !important;
    min-height: 54px;
    justify-content: center !important;
    padding: 14px 18px !important;
    font-size: 15px !important;
  }

  .hero-content > div:last-child {
    margin-top: 28px !important;
  }

  .hero-content > div:last-child > p {
    font-size: 11px !important;
    letter-spacing: .8px !important;
    margin-bottom: 9px !important;
  }

  .hero-content > div:last-child > div {
    justify-content: center !important;
    gap: 7px !important;
  }

  .hero-content .glass-panel {
    padding: 6px 10px !important;
    font-size: 12px !important;
  }

  /* The decorative desktop globe/card area is hidden on small phones.
     This prevents overlap and gives the CTA/content the full screen width. */
  .hero-visual {
    display: none !important;
  }

  /* Sections */
  .section-padding {
    padding: 54px 0 !important;
  }

  .section-header {
    margin-bottom: 26px !important;
  }

  .section-tag {
    font-size: 11px !important;
  }

  .section-title {
    font-size: clamp(1.75rem, 8vw, 2.3rem) !important;
    line-height: 1.12 !important;
    margin-top: 10px !important;
  }

  .section-desc {
    font-size: 14px !important;
    line-height: 1.65 !important;
  }

  /* Feature/service grids */
  .services-grid {
    grid-template-columns: 1fr !important;
    gap: 14px !important;
  }

  .services-grid > * {
    width: 100% !important;
    min-width: 0 !important;
  }

  .glass-panel {
    max-width: 100%;
  }

  .services-grid .glass-panel {
    padding: 22px !important;
  }

  .service-card {
    padding: 22px !important;
  }

  .service-title {
    font-size: 17px !important;
  }

  .service-desc {
    font-size: 14px !important;
    line-height: 1.65 !important;
  }

  /* Destination tabs */
  .explorer-tabs {
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    overflow-y: hidden !important;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    gap: 8px !important;
    padding: 3px 2px 10px !important;
    margin-inline: -2px;
  }

  .explorer-tabs::-webkit-scrollbar {
    display: none;
  }

  .tab-btn {
    flex: 0 0 auto !important;
    min-height: 42px;
    white-space: nowrap !important;
    padding: 9px 13px !important;
    font-size: 13px !important;
  }

  .country-display-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 20px !important;
  }

  .country-display-grid > * {
    width: 100% !important;
    min-width: 0 !important;
  }

  .country-image-wrapper {
    height: 210px !important;
    min-height: 210px !important;
  }

  .country-img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }

  .country-info-box {
    padding: 0 !important;
  }

  .country-title {
    font-size: 21px !important;
    line-height: 1.2 !important;
  }

  .country-desc {
    font-size: 14px !important;
    line-height: 1.65 !important;
  }

  .country-stats-row {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 8px !important;
  }

  .c-stat-card {
    width: 100% !important;
    padding: 12px !important;
  }

  .c-stat-value {
    font-size: 18px !important;
  }

  .pathway-item {
    display: grid !important;
    grid-template-columns: 20px minmax(0, 1fr) auto !important;
    gap: 8px !important;
    align-items: center !important;
    padding: 10px 0 !important;
  }

  .pathway-name {
    min-width: 0 !important;
    font-size: 13px !important;
    line-height: 1.4 !important;
  }

  .pathway-tag {
    white-space: nowrap !important;
    font-size: 10px !important;
  }

  /* Calculator */
  .calculator-box {
    padding: 20px 15px !important;
    border-radius: 16px !important;
  }

  .calc-progress {
    margin-bottom: 28px !important;
  }

  .calc-step-content {
    width: 100% !important;
  }

  .calc-step-title {
    font-size: 19px !important;
    line-height: 1.3 !important;
  }

  .calc-grid {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 15px !important;
  }

  .form-group {
    min-width: 0 !important;
  }

  .form-label {
    font-size: 13px !important;
  }

  .select-control {
    width: 100% !important;
    min-width: 0 !important;
    min-height: 48px;
    font-size: 14px !important;
  }

  .calc-step-content > div[style*="display: flex"] {
    flex-wrap: wrap !important;
  }

  .calc-step-content .btn {
    min-height: 48px;
  }

  /* Contact form */
  #contact .glass-panel {
    padding: 22px 16px !important;
    border-radius: 16px !important;
  }

  #contact form {
    gap: 15px !important;
  }

  #contact .calc-grid {
    gap: 15px !important;
  }

  #contact textarea {
    min-height: 120px;
    resize: vertical;
  }

  /* Modal */
  [style*="position: fixed"][style*="z-index: 1000"] {
    align-items: flex-end !important;
    padding: 10px !important;
  }

  [style*="position: fixed"][style*="z-index: 1000"] > .glass-panel {
    max-height: 88vh !important;
    overflow-y: auto !important;
    padding: 24px 18px !important;
    border-radius: 18px 18px 12px 12px !important;
  }

  /* WhatsApp */
  .whatsapp-float {
    width: 54px !important;
    height: 54px !important;
    right: 14px !important;
    bottom: 14px !important;
  }

  .whatsapp-float svg {
    width: 26px !important;
    height: 26px !important;
  }

  /* Footer */
  footer {
    padding: 40px 0 20px !important;
  }

  footer .container {
    grid-template-columns: 1fr !important;
    gap: 26px !important;
  }

  footer p,
  footer li,
  footer a {
    font-size: 13px !important;
    line-height: 1.6;
  }
}

/* ---------- VERY SMALL PHONES ---------- */
@media (max-width: 380px) {
  .container {
    width: calc(100% - 22px) !important;
  }

  .logo-link span {
    font-size: 1rem !important;
  }

  .hero-badge {
    font-size: 10px !important;
  }

  .hero-badge-tag {
    font-size: 10px !important;
    padding-inline: 8px !important;
  }

  .hero-title {
    font-size: 1.95rem !important;
  }

  .hero-desc {
    font-size: 14px !important;
  }

  .hero-content .glass-panel {
    font-size: 11px !important;
    padding-inline: 8px !important;
  }

  .pathway-item {
    grid-template-columns: 18px minmax(0, 1fr) !important;
  }

  .pathway-tag {
    grid-column: 2;
    justify-self: start;
  }
}
`

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  const countries = staticCountriesData

  // Destination Explorer State
  const [activeTab, setActiveTab] = useState('canada')

  // Service Details Modal State
  const [activeModal, setActiveModal] = useState(null)

  // Eligibility Calculator State
  const [calcStep, setCalcStep] = useState(1)
  const [calcData, setCalcData] = useState({
    destination: 'canada',
    visaType: 'pr',
    age: '25-32',
    education: 'masters',
    experience: '3-5',
    englishScore: 'clb9'
  })
  const [calcScore, setCalcScore] = useState(0)

  // Booking Form State
  const [bookingSubmitted, setBookingSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingData, setBookingData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: 'canada',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
  }

  // Calculate Eligibility Score Client-Side
  const runCalculation = () => {
    let score = 30
    if (calcData.age === '18-24') score += 20
    else if (calcData.age === '25-32') score += 25
    else if (calcData.age === '33-39') score += 15
    else score += 5

    if (calcData.education === 'phd') score += 25
    else if (calcData.education === 'masters') score += 20
    else if (calcData.education === 'bachelors') score += 15
    else score += 10

    if (calcData.experience === '6+') score += 15
    else if (calcData.experience === '3-5') score += 10
    else score += 5

    if (calcData.englishScore === 'clb9') score += 20
    else if (calcData.englishScore === 'clb8') score += 15
    else score += 10

    setCalcScore(score)
    setCalcStep(4)
  }

  // Handle Submission using EmailJS
  const handleBookingSubmit = (e) => {
    e.preventDefault()

    if (!bookingData.fullName || !bookingData.email || !bookingData.phone) {
      alert('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)

    const templateParams = {
      from_name: bookingData.fullName,
      from_email: bookingData.email,
      phone_number: bookingData.phone,
      target_destination: bookingData.destination.toUpperCase(),
      message: bookingData.message
    }

    emailjs
      .send(
        'service_o0l0r0k',
        'template_45hewnn',
        templateParams,
        'zmQ_nh-t65cKtN45G'
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setBookingSubmitted(true)
        setIsSubmitting(false)
      })
      .catch((err) => {
        console.error('FAILED...', err)
        alert('Failed to send request. Please check your network or EmailJS settings.')
        setIsSubmitting(false)
      })
  }

  const currentCountry = countries.find((c) => c.id === activeTab)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: mobileResponsiveStyles }} />
      <MobileResponsiveStyles />

      {/* TOP ANNOUNCEMENT BAR */}
      <div
        className="announcement-bar"
        style={{
          background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)',
          color: '#f8fafc',
          padding: '10px 15px',
          textAlign: 'center',
          fontSize: '0.9rem',
          fontWeight: '500',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        🔥 <strong>Germany Opportunity Card Now Open</strong> — {' '}
        <a href="#calculator" style={{ color: '#60a5fa', textDecoration: 'underline', fontWeight: '600' }}>
          Explore Eligibility →
        </a>
      </div>

      {/* HEADER & NAVBAR */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <ShieldIcon />
            <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)' }}>
              Cloyster<span style={{ color: '#2563eb' }}>Visa</span>
            </span>
          </a>

          <div className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#destinations" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Destinations</a>
            <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#calculator" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Eligibility Check</a>
            <a 
              href="#contact" 
              className="nav-link highlight-consult-link" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: 'rgba(37, 99, 235, 0.15)',
                color: '#3b82f6',
                padding: '6px 14px',
                borderRadius: '20px',
                border: '1px solid #2563eb',
                fontWeight: '600'
              }}
            >
              Book Consult 📅
            </a>
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <a href="#calculator" className="btn btn-primary" style={{ padding: '10px 18px', borderRadius: '8px' }}>
              Check Your Eligibility
            </a>
            <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
              <span style={{ opacity: mobileMenuOpen ? '0' : '1' }}></span>
              <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-sec" style={{ background: 'radial-gradient(circle at top right, #0f172a, var(--bg-dark))' }}>
        <div className="hero-mesh"></div>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge animate-pulse-glow" style={{ background: '#0f172a', borderColor: '#2563eb' }}>
              <span className="hero-badge-tag" style={{ background: '#2563eb' }}>CloysterVisa</span>
              <span>Immigration Made Simple</span>
            </div>
            
            <h1 className="hero-title text-gradient" style={{ fontSize: '2.8rem', lineHeight: '1.2' }}>
              Immigration Made Simple.
            </h1>
            <p className="hero-desc" style={{ fontSize: '1.15rem', color: '#94a3b8', margin: '15px 0 25px 0' }}>
              Personalized Visa Solutions for Work, Study & Permanent Residency. Connect with trusted immigration consultants for global mobility.
            </p>

            <div className="hero-buttons">
              <a href="#calculator" className="btn btn-primary">
                Check Your Eligibility <ArrowRightIcon />
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ background: '#0f172a', borderColor: '#334155' }}>
                Talk to Consultant
              </a>
            </div>

            <div style={{ marginTop: '30px' }}>
              <p style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', fontWeight: '600' }}>
                Supported Destination Programs
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span className="glass-panel" style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem' }}>🇨🇦 Canada</span>
                <span className="glass-panel" style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem' }}>🇦🇺 Australia</span>
                <span className="glass-panel" style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem' }}>🇩🇪 Germany</span>
                <span className="glass-panel" style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem' }}>🇬🇧 UK</span>
                <span className="glass-panel" style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem' }}>🇳🇿 New Zealand</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="globe-placeholder" style={{ minHeight: '380px', position: 'relative' }}>
              <div className="globe-circle-1" style={{ borderColor: '#1e293b' }}></div>
              <div className="globe-circle-2" style={{ borderColor: '#0f172a' }}></div>
              
              <div className="hero-card-floating hero-card-1 glass-panel" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
                <div className="floating-icon">
                  <GlobeIcon />
                </div>
                <div className="floating-info">
                  <h4>Passport & Global Mobility 🛂</h4>
                  <p>Express Entry & Skilled Worker Pathways</p>
                </div>
              </div>

              <div className="hero-card-floating hero-card-2 glass-panel" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
                <div className="floating-icon" style={{ background: 'rgba(34, 197, 94, 0.2)', padding: '6px', borderRadius: '50%' }}>
                  ✅
                </div>
                <div className="floating-info">
                  <h4>Visa Approval Status</h4>
                  <p>128+ Successful Grants This Month</p>
                </div>
              </div>

              <div className="glass-panel" style={{
                position: 'absolute',
                bottom: '15px',
                left: '20px',
                padding: '12px 20px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: '#0f172a',
                border: '1px solid #1e293b'
              }}>
                <span style={{ fontSize: '1.8rem' }}>🧳✈️</span>
                <div>
                  <h5 style={{ margin: 0, fontSize: '0.95rem', color: '#f8fafc' }}>Seamless Relocation</h5>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>Dedicated Assistance Worldwide</p>
                </div>
              </div>

              <svg className="flight-path" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3">
                <path d="M10,80 Q50,20 90,80" stroke="#3b82f6" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT / FEATURES */}
      <section id="about" className="section-padding" style={{ background: '#0b1120' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ background: '#0f172a', color: '#60a5fa' }}>CloysterVisa Guarantee</span>
            <h2 className="section-title text-gradient">Why Choose CloysterVisa?</h2>
            <p className="section-desc">
              Navigating global migration standard procedures with clear guidance and customized advisory solutions.
            </p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="glass-panel" style={{ padding: '35px', background: '#0f172a', border: '1px solid #1e293b' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>⚖️</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px' }}>
                Legal Representation
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We guide you through certified regulations, ensuring fully compliant documentation for IRCC, MARA, and EU immigration authorities.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '35px', background: '#0f172a', border: '1px solid #1e293b' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🎯</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px' }}>
                Tailored Strategy
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We evaluate your career credentials to construct the optimum pathway—maximizing points for Express Entry or state sponsorships.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '35px', background: '#0f172a', border: '1px solid #1e293b' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>💰</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px' }}>
                Transparent Pricing
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                No hidden costs or false promises. Clear milestone-based service fee quotes upfront with full evaluation reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Global Pathways</span>
            <h2 className="section-title text-gradient">Choose Your Destination</h2>
            <p className="section-desc">
              Explore eligibility scoring systems, visa pathways, and expected processing timelines.
            </p>
          </div>

          <div className="explorer-tabs">
            {countries.map((country) => (
              <button
                key={country.id}
                className={`tab-btn ${activeTab === country.id ? 'active' : ''}`}
                onClick={() => setActiveTab(country.id)}
              >
                <span className="flag-icon">{country.flag}</span>
                {country.name}
              </button>
            ))}
          </div>

          {currentCountry && (
            <div className="glass-panel" style={{ padding: '35px', background: '#0f172a', border: '1px solid #1e293b' }}>
              <div className="country-display-grid">
                <div className="country-image-wrapper">
                  <img src={currentCountry.image} alt={currentCountry.name} className="country-img" />
                  <div className="country-flag-badge">
                    <span className="flag-icon">{currentCountry.flag}</span>
                    <span>{currentCountry.name} Pathway</span>
                  </div>
                </div>

                <div className="country-info-box">
                  <h3 className="country-title">{currentCountry.title}</h3>
                  <p className="country-desc">{currentCountry.desc}</p>
                  
                  <div className="country-stats-row">
                    <div className="c-stat-card">
                      <div className="c-stat-label">Success Rate</div>
                      <div className="c-stat-value">{currentCountry.successRate}</div>
                    </div>
                    <div className="c-stat-card highlighted">
                      <div className="c-stat-label">Processing Time</div>
                      <div className="c-stat-value">{currentCountry.processingTime}</div>
                    </div>
                    <div className="c-stat-card">
                      <div className="c-stat-label">Min. Score</div>
                      <div className="c-stat-value">{currentCountry.minPoints}</div>
                    </div>
                  </div>

                  <div className="country-pathways-list">
                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '1px' }}>
                      Primary Relocation Streams
                    </h4>
                    {currentCountry.pathways.map((pw, i) => (
                      <div key={i} className="pathway-item">
                        <CheckIcon />
                        <span className="pathway-name">{pw.name}</span>
                        <span className="pathway-tag">{pw.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section id="services" className="section-padding" style={{ background: '#0b1120' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">End-to-End Solutions</span>
            <h2 className="section-title text-gradient">Our Advisory Services</h2>
            <p className="section-desc">
              Comprehensive assistance through every stage of your immigration journey.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card glass-panel" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
              <h3 className="service-title">1. Visa Consultation</h3>
              <p className="service-desc">
                Engage in one-on-one virtual strategy sessions with licensed legal experts to understand eligibility criteria, regional quotas, and visa application procedures.
              </p>
              <a href="#contact" className="service-link">
                Book consultation <ArrowRightIcon />
              </a>
            </div>

            <div className="service-card glass-panel" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
              <h3 className="service-title">2. Profile Assessment</h3>
              <p className="service-desc">
                Receive an extensive review of your academic history, age, skill-set, and language scores to compute your potential immigration points before application.
              </p>
              <a href="#calculator" className="service-link">
                Evaluate profile <ArrowRightIcon />
              </a>
            </div>

            <div className="service-card glass-panel" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
              <h3 className="service-title">3. Documentation Support</h3>
              <p className="service-desc">
                Ensure error-free submissions. We guide you in drafting letters of explanation, credential assessment (ECA), financial proofing, and reference formats.
              </p>
              <button 
                onClick={() => setActiveModal('documentation')} 
                className="service-link" 
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#3b82f6', fontWeight: '600' }}
              >
                Learn more <ArrowRightIcon />
              </button>
            </div>

            <div className="service-card glass-panel" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
              <h3 className="service-title">4. Post-Landing Support</h3>
              <p className="service-desc">
                Settle down with absolute ease. Access orientation assistance, temporary housing leads, local health insurance guidance, and social security application updates.
              </p>
              <button 
                onClick={() => setActiveModal('postlanding')} 
                className="service-link" 
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#3b82f6', fontWeight: '600' }}
              >
                Learn more <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED MODALS FOR SERVICES 3 & 4 */}
      {activeModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div className="glass-panel" style={{
            background: '#0f172a',
            border: '1px solid #2563eb',
            borderRadius: '16px',
            maxWidth: '550px',
            width: '100%',
            padding: '30px',
            position: 'relative',
            color: '#f8fafc'
          }}>
            <button 
              onClick={() => setActiveModal(null)} 
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>

            {activeModal === 'documentation' && (
              <div>
                <span style={{ background: 'rgba(37, 99, 235, 0.2)', color: '#60a5fa', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem' }}>
                  Detailed Overview
                </span>
                <h3 style={{ fontSize: '1.6rem', marginTop: '10px', marginBottom: '15px' }}>📄 Documentation Support</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Immigration officers reject up to 30% of applications due to formatting errors or insufficient proofing. Our specialists assist you with:
                </p>
                <ul style={{ color: '#cbd5e1', paddingLeft: '20px', margin: '15px 0', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  <li><strong>Educational Credential Assessment (ECA):</strong> Step-by-step guidance for WES, IQAS, or ICAS submissions.</li>
                  <li><strong>Statement of Purpose & LOE:</strong> Customized Letters of Explanation for study permits or gap years.</li>
                  <li><strong>Financial Proofing:</strong> Reviewing bank certificates, GIC setups, and liquid asset statements.</li>
                  <li><strong>Work Experience Reference Letters:</strong> Aligning job duties with exact NOC/ANZSCO codes.</li>
                </ul>
                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                  <a href="#contact" onClick={() => setActiveModal(null)} className="btn btn-primary" style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                    Request Document Review
                  </a>
                </div>
              </div>
            )}

            {activeModal === 'postlanding' && (
              <div>
                <span style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem' }}>
                  Relocation Assistance
                </span>
                <h3 style={{ fontSize: '1.6rem', marginTop: '10px', marginBottom: '15px' }}>✈️ Post-Landing Support</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Moving to a new country shouldn't feel overwhelming. CloysterVisa provides dedicated post-arrival assistance to ensure a smooth transition:
                </p>
                <ul style={{ color: '#cbd5e1', paddingLeft: '20px', margin: '15px 0', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  <li><strong>Social Security / SIN Card Setup:</strong> Guided registration for work authorization and tax setup.</li>
                  <li><strong>Temporary & Long-Term Housing:</strong> Verified rental options and short-term stay discounts.</li>
                  <li><strong>Health Insurance & Banking:</strong> Setting up provincial health cards and local bank accounts upon landing.</li>
                  <li><strong>Airport Pickup & Community Orientation:</strong> Welcome briefing to help you navigate your new city.</li>
                </ul>
                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                  <a href="#contact" onClick={() => setActiveModal(null)} className="btn btn-primary" style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                    Inquire About Post-Landing Services
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ELIGIBILITY CALCULATOR */}
      <section id="calculator" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Interactive Evaluation</span>
            <h2 className="section-title text-gradient">Calculate Your Visa Points</h2>
            <p className="section-desc">
              Instant preliminary points assessment for Express Entry, GSM, and European job cards.
            </p>
          </div>

          <div className="glass-panel calculator-box" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
            <div className="calc-progress">
              <div className="calc-progress-bar" style={{ width: `${((calcStep - 1) / 3) * 100}%` }}></div>
              <div className={`progress-step ${calcStep >= 1 ? 'active' : ''} ${calcStep > 1 ? 'completed' : ''}`}>1</div>
              <div className={`progress-step ${calcStep >= 2 ? 'active' : ''} ${calcStep > 2 ? 'completed' : ''}`}>2</div>
              <div className={`progress-step ${calcStep >= 3 ? 'active' : ''} ${calcStep > 3 ? 'completed' : ''}`}>3</div>
              <div className={`progress-step ${calcStep >= 4 ? 'active' : ''} ${calcStep > 4 ? 'completed' : ''}`}>📊</div>
            </div>

            {/* STEP 1 */}
            {calcStep === 1 && (
              <div className="calc-step-content">
                <h3 className="calc-step-title">Select Relocation Preferences</h3>
                <div className="calc-grid">
                  <div className="form-group">
                    <label className="form-label">Preferred Destination</label>
                    <select
                      className="select-control"
                      value={calcData.destination}
                      onChange={(e) => setCalcData({ ...calcData, destination: e.target.value })}
                    >
                      <option value="canada">Canada (Express Entry)</option>
                      <option value="australia">Australia (General Skilled Migration)</option>
                      <option value="germany">Germany (Opportunity Card)</option>
                      <option value="uk">United Kingdom (Skilled Worker)</option>
                      <option value="nz">New Zealand (SMC)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Visa Category</label>
                    <select
                      className="select-control"
                      value={calcData.visaType}
                      onChange={(e) => setCalcData({ ...calcData, visaType: e.target.value })}
                    >
                      <option value="pr">Permanent Residency (PR)</option>
                      <option value="work">Skilled Work Permit</option>
                      <option value="student">Higher Education Pathway</option>
                    </select>
                  </div>
                </div>
                <button className="btn btn-primary" onClick={() => setCalcStep(2)} style={{ marginTop: '20px' }}>
                  Next Step <ArrowRightIcon />
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {calcStep === 2 && (
              <div className="calc-step-content">
                <h3 className="calc-step-title">Basic Profile Details</h3>
                <div className="calc-grid">
                  <div className="form-group">
                    <label className="form-label">Age Group</label>
                    <select
                      className="select-control"
                      value={calcData.age}
                      onChange={(e) => setCalcData({ ...calcData, age: e.target.value })}
                    >
                      <option value="18-24">18 - 24 years</option>
                      <option value="25-32">25 - 32 years</option>
                      <option value="33-39">33 - 39 years</option>
                      <option value="40+">40+ years</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Highest Qualification</label>
                    <select
                      className="select-control"
                      value={calcData.education}
                      onChange={(e) => setCalcData({ ...calcData, education: e.target.value })}
                    >
                      <option value="phd">Doctorate / PhD</option>
                      <option value="masters">Master's Degree</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="diploma">2-Year Diploma / Cert</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <button className="btn btn-secondary" onClick={() => setCalcStep(1)}>Back</button>
                  <button className="btn btn-primary" onClick={() => setCalcStep(3)}>
                    Next Step <ArrowRightIcon />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {calcStep === 3 && (
              <div className="calc-step-content">
                <h3 className="calc-step-title">Experience & Language Ability</h3>
                <div className="calc-grid">
                  <div className="form-group">
                    <label className="form-label">Work Experience</label>
                    <select
                      className="select-control"
                      value={calcData.experience}
                      onChange={(e) => setCalcData({ ...calcData, experience: e.target.value })}
                    >
                      <option value="6+">6+ Years</option>
                      <option value="3-5">3 - 5 Years</option>
                      <option value="1-2">1 - 2 Years</option>
                      <option value="0">Less than 1 Year</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Language Proficiency Score</label>
                    <select
                      className="select-control"
                      value={calcData.englishScore}
                      onChange={(e) => setCalcData({ ...calcData, englishScore: e.target.value })}
                    >
                      <option value="clb9">CLB 9+ / High Proficiency</option>
                      <option value="clb8">CLB 8 / Moderate Proficiency</option>
                      <option value="clb7">CLB 7 / Basic Qualification</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <button className="btn btn-secondary" onClick={() => setCalcStep(2)}>Back</button>
                  <button className="btn btn-primary" onClick={runCalculation}>
                    Calculate Points <ArrowRightIcon />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: RESULTS */}
            {calcStep === 4 && (
              <div className="calc-step-content" style={{ textAlign: 'center' }}>
                <h3 className="calc-step-title">Estimated Eligibility Score</h3>
                <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#3b82f6', margin: '15px 0' }}>
                  {calcScore} Points
                </div>
                <p style={{ color: '#94a3b8', marginBottom: '20px' }}>
                  {calcScore >= 70
                    ? "🎉 Strong Score! You meet the standard points benchmark for PR considerations."
                    : "👍 Good Score! Regional nominations or specific PNP options can boost your profile."}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <button className="btn btn-secondary" onClick={() => setCalcStep(1)}>Recalculate</button>
                  <a href="#contact" className="btn btn-primary">Book Consultation</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BOOKING / CONSULTATION FORM */}
      <section id="contact" className="section-padding" style={{ background: '#0b1120' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Direct Legal Support</span>
            <h2 className="section-title text-gradient">Book Your Consultation</h2>
            <p className="section-desc">
              Schedule a personalized 1-on-1 session with our certified immigration specialists to review your profile and explore your relocation options.
            </p>
          </div>

          <div className="glass-panel" style={{ maxWidth: '650px', margin: '0 auto', padding: '40px', background: '#0f172a', border: '1px solid #1e293b' }}>
            {bookingSubmitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <h3 style={{ color: '#22c55e', fontSize: '1.6rem', marginBottom: '10px' }}>
                  🎉 Consultation Request Submitted!
                </h3>
                <p style={{ color: '#94a3b8' }}>
                  Thank you, <strong>{bookingData.fullName}</strong>. Our immigration advisory team has received your request and will reach out to you within 24 hours.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: '20px' }}
                  onClick={() => setBookingSubmitted(false)}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    required
                    className="select-control"
                    placeholder="Enter your full name"
                    value={bookingData.fullName}
                    onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
                  />
                </div>

                <div className="calc-grid">
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      className="select-control"
                      placeholder="name@example.com"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="select-control"
                      placeholder="+1 (555) 000-0000"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Target Destination</label>
                  <select
                    className="select-control"
                    value={bookingData.destination}
                    onChange={(e) => setBookingData({ ...bookingData, destination: e.target.value })}
                  >
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                    <option value="uk">United Kingdom</option>
                    <option value="nz">New Zealand</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Message / Inquiries</label>
                  <textarea
                    rows={4}
                    className="select-control"
                    placeholder="Provide details regarding education, work experience, or specific visa queries..."
                    value={bookingData.message}
                    onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Booking Request'}{' '}
                  {!isSubmitting && <ArrowRightIcon />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        className="whatsapp-float"
        href="https://wa.me/?text=Hello%20CloysterVisa,%20I%20would%20like%20to%20inquire%20about%20visa%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float"
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          backgroundColor: '#25D366',
          color: '#ffffff',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
          zIndex: 999,
          cursor: 'pointer',
          transition: 'transform 0.2s ease-in-out'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <WhatsAppIcon />
      </a>

      {/* FOOTER */}
      <footer style={{ background: '#070a12', borderTop: '1px solid #1e293b', padding: '50px 0 25px 0', color: '#94a3b8' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginBottom: '15px' }}>
              <ShieldIcon />
              <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#f8fafc' }}>
                Cloyster<span style={{ color: '#2563eb' }}>Visa</span>
              </span>
            </a>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#64748b' }}>
              Immigration Made Simple. Providing streamlined pathways for PR, work permits, and global education.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: '700', marginBottom: '15px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="#destinations" style={{ color: '#94a3b8', textDecoration: 'none' }}>Destinations</a></li>
              <li><a href="#services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Advisory Services</a></li>
              <li><a href="#calculator" style={{ color: '#94a3b8', textDecoration: 'none' }}>Eligibility Points Check</a></li>
              <li><a href="#contact" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '600' }}>Book Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: '700', marginBottom: '15px' }}>Popular Destinations</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#destinations" onClick={() => setActiveTab('canada')} style={{ color: '#94a3b8', textDecoration: 'none' }}>🇨🇦 Canada Express Entry</a></li>
              <li><a href="#destinations" onClick={() => setActiveTab('germany')} style={{ color: '#94a3b8', textDecoration: 'none' }}>🇩🇪 Germany Opportunity Card</a></li>
              <li><a href="#destinations" onClick={() => setActiveTab('australia')} style={{ color: '#94a3b8', textDecoration: 'none' }}>🇦🇺 Australia GSM</a></li>
              <li><a href="#destinations" onClick={() => setActiveTab('uk')} style={{ color: '#94a3b8', textDecoration: 'none' }}>🇬🇧 UK Skilled Worker</a></li>
              <li><a href="#destinations" onClick={() => setActiveTab('nz')} style={{ color: '#94a3b8', textDecoration: 'none' }}>🇳🇿 New Zealand SMC</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: '700', marginBottom: '15px' }}>Office Support</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>
              💬 WhatsApp: <a href="https://wa.me/?text=Hello%20CloysterVisa" target="_blank" rel="noreferrer" style={{ color: '#22c55e', textDecoration: 'none' }}>Instant Support Chat</a>
            </p>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '12px' }}>
              Available Monday – Saturday (9:00 AM – 6:00 PM)
            </p>
          </div>

        </div>

        <div className="container" style={{ borderTop: '1px solid #1e293b', paddingTop: '20px', textAlign: 'center', fontSize: '0.85rem', color: '#64748b' }}>
          <p>© {new Date().getFullYear()} CloysterVisa Advisory Services. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}