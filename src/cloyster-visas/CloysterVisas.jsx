import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import cloysterLogo from './cloyster-logo.png'
import cloysterLogoLight from './cloyster-logo-light.png'
import instagramQr from './cloyster-instagram-qr.png'
import googleBusinessQr from './google-business-qr-only.png'
import Team from './Team'
import AnnouncementBar from './AnnouncementBar'
import ThemeToggle from './ThemeToggle'
import ClientSuccessStories from './ClientSuccessStories'


import PartnerWithUs from './partner-with-us/PartnerWithUs';
import StudyVisa from './study-visa/StudyVisa';
import Blog from './blog/Blog';

// EmailJS configuration
// IMPORTANT: The EmailJS template below should be the template that sends
// the consultation request to cloysterimmigration@gmail.com.
// Its Auto-Reply is configured in the EmailJS dashboard to send the
// Consultation Confirmation template back to the customer.
const EMAILJS_SERVICE_ID = 'service_o0l0r0k'
const EMAILJS_ADMIN_TEMPLATE_ID = 'template_45hewnn'
const EMAILJS_PUBLIC_KEY = 'zmQ_nh-t65cKtN45G'

// Custom SVG Icons & Components
const LogoImage = ({ className = '', footer = false }) => (
  <span className={`cloyster-logo-switch ${className}`}>
    <img
      src={cloysterLogo}
      alt="CloysterVisa"
      className={`cloyster-logo-image cloyster-logo-dark ${footer ? 'cloyster-logo-footer' : ''}`}
    />
    <img
      src={cloysterLogoLight}
      alt="CloysterVisa"
      aria-hidden="true"
      className={`cloyster-logo-image cloyster-logo-light ${footer ? 'cloyster-logo-footer' : ''}`}
    />
  </span>
)

const ScaleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v18M5 6h14M5 6l-3 6a3 3 0 0 0 6 0L5 6ZM19 6l-3 6a3 3 0 0 0 6 0l-3-6ZM8 21h8" />
  </svg>
)

const TargetIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    <path d="M12 2v2M22 12h-2M12 22v-2M2 12h2" />
  </svg>
)

const ReceiptIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
    <path d="M9 8h6M9 12h6M9 16h3" />
  </svg>
)


const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const ArrowRightIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

const CalendarIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4.5" width="18" height="16" rx="2" />
    <path d="M7 2.5v4M17 2.5v4M3 9h18" />
    <path d="M8 13h2M14 13h2M8 16.5h2M14 16.5h2" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="floating-icon" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)


const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3A2.02 2.02 0 1 0 5.2 7.04 2.02 2.02 0 0 0 5.22 3ZM20.5 13.41c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.86V8.5H9.36V20h3.44v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.71v-6.59Z" />
  </svg>
)

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const GoogleIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M21.35 12.27c0-.72-.06-1.41-.18-2.07H12v3.92h5.23a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.92-4.18 2.92-7.21Z"/>
    <path fill="currentColor" d="M12 21.5c2.63 0 4.84-.87 6.45-2.36l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.51A9.75 9.75 0 0 0 12 21.5Z"/>
    <path fill="currentColor" d="M6.54 13.6a5.86 5.86 0 0 1 0-3.2V7.89H3.3a9.75 9.75 0 0 0 0 8.22l3.24-2.51Z"/>
    <path fill="currentColor" d="M12 6.37c1.43 0 2.72.49 3.73 1.45l2.79-2.79C16.83 3.46 14.63 2.5 12 2.5a9.75 9.75 0 0 0-8.7 5.39l3.24 2.51C7.31 8.09 9.46 6.37 12 6.37Z"/>
  </svg>
)


const FooterLineIcon = ({ type, size = 18 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.7',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true'
  }

  if (type === 'location') {
    return (
      <svg {...common}>
        <path d="M20 10.5c0 5.1-8 11-8 11s-8-5.9-8-11a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10.5" r="2.6" />
      </svg>
    )
  }

  if (type === 'phone') {
    return (
      <svg {...common}>
        <path d="M6.7 3.5 9.2 6 7.6 8.8a14.7 14.7 0 0 0 7.6 7.6L18 14.8l2.5 2.5-1.5 3.1c-.4.8-1.2 1.2-2.1 1.1C9.8 20.5 3.5 14.2 2.5 7.1c-.1-.9.3-1.7 1.1-2.1l3.1-1.5Z" />
      </svg>
    )
  }

  if (type === 'message') {
    return (
      <svg {...common}>
        <path d="M20 11.5a7 7 0 0 1-7 7H8l-4 2 1.5-3.3A7 7 0 1 1 20 11.5Z" />
        <path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4.5 7 7.5 5.5L19.5 7" />
    </svg>
  )
}

const WhatsAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
)

// Destination Countries Data with Flags
const staticCountriesData = [
  {
    id: 'canada',
    name: 'Canada',
    code: 'ca',
    flag: 'https://flagcdn.com/w40/ca.png',
    pathwayFlag: 'https://flagcdn.com/ca.svg',
    title: 'Immigrate to Canada via Express Entry & PNPs',
    desc: 'Canada offers some of the world\'s most welcoming immigration programs. Whether you want to apply for Permanent Residency (PR), study at top universities, or obtain a work permit, Canada provides stable career pathways and an exceptional quality of life.',
    successRate: '94%',
    processingTime: '6–8 Months*',
    minPoints: '67/100',
    pathways: [
      { name: 'Express Entry (FSWP, FSTP, CEC)', tag: 'PR Path' },
      { name: 'Provincial Nominee Programs (PNP)', tag: 'Regional' },
      { name: 'Post-Graduation Work Permit (PGWP)', tag: 'Study first' }
    ],
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
    whyChoose: [
      'Express Entry: point-based, no job offer required',
      'Provincial Nominee Programs widen eligibility',
      'Free healthcare and strong social benefits',
      'Direct pathway to permanent residency'
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    code: 'au',
    flag: 'https://flagcdn.com/w40/au.png',
    title: 'Explore General Skilled Migration in Australia',
    desc: 'With a booming economy and a demand for skilled professionals, Australia offers competitive visa pathways. The General Skilled Migration (GSM) program allows eligible workers to live and work permanently without needing a sponsor.',
    successRate: '91%',
    processingTime: '8–10 Months*',
    minPoints: '65',
    pathways: [
      { name: 'Skilled Independent Visa (Subclass 189)', tag: 'Independent' },
      { name: 'Skilled Nominated Visa (Subclass 190)', tag: 'State Sponsor' },
      { name: 'Skilled Work Regional Visa (Subclass 491)', tag: 'Regional' }
    ],
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
    whyChoose: [
      'GSM: no employer sponsor required for skilled visas',
      'High demand for skilled professionals',
      'Strong economy and high quality of life',
      'Permanent residency without sponsorship'
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'de',
    flag: 'https://flagcdn.com/w40/de.png',
    pathwayFlag: 'https://flagcdn.com/de.svg',
    title: 'Work & Live in Germany with Opportunity Card',
    desc: 'Germany\'s new Opportunity Card (Chancenkarte) makes job hunting in Europe easier than ever. Skilled professionals can relocate to Germany to secure employment in engineering, IT, healthcare, and other highly demanded fields.',
    successRate: '88%',
    processingTime: '3–5 Months*',
    minPoints: '6/10 Points',
    pathways: [
      { name: 'Opportunity Card (Chancenkarte)', tag: 'Job Search' },
      { name: 'German EU Blue Card', tag: 'Fast Track' },
      { name: 'Vocational Training (Ausbildung)', tag: 'Entry Level' }
    ],
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
    whyChoose: [
      'No employer sponsorship needed (Opportunity Card)',
      'High quality of life and healthcare',
      'Clear path to EU citizenship',
      'Strong job market in tech and engineering'
    ]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'gb',
    flag: 'https://flagcdn.com/w40/gb.png',
    title: 'UK Skilled Worker & Expansion Visas',
    desc: 'The UK\'s points-based system offers attractive visas for global talent. Relocate quickly as a skilled worker or establish a branch of your business using the UK Expansion Worker pathway.',
    successRate: '92%',
    processingTime: '2–4 Months*',
    minPoints: '70 Points',
    pathways: [
      { name: 'Skilled Worker Visa (Sponsored)', tag: 'Work' },
      { name: 'UK Global Talent Visa', tag: 'Elite Tech/Arts' },
      { name: 'UK Scale-up Visa', tag: 'Fast Growth' }
    ],
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    whyChoose: [
      'Points-based Skilled Worker routes for eligible professionals',
      'Global Talent pathway for recognised leaders and specialists',
      'Large international job market and established industries',
      'Access to a diverse, globally connected economy'
    ]
  },
  {
    id: 'nz',
    name: 'New Zealand',
    code: 'nz',
    flag: 'https://flagcdn.com/w40/nz.png',
    title: 'New Zealand Skilled Migrant Category',
    desc: 'Experience exceptional work-life balance in New Zealand. The Skilled Migrant Category Resident Visa allows skilled specialists to work and live in New Zealand permanently.',
    successRate: '89%',
    processingTime: '6–9 Months*',
    minPoints: '6 Points',
    pathways: [
      { name: 'Skilled Migrant Category (SMC)', tag: 'PR Path' },
      { name: 'Green List Straight to Residence', tag: 'Fast Track' },
      { name: 'Accredited Employer Work Visa', tag: 'Work' }
    ],
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
    whyChoose: [
      'Skilled Migrant Category: points-based residency',
      'Green List roles fast-track work to residency',
      'Safe, welcoming, and family-friendly environment',
      'Balanced lifestyle with strong work protections'
    ]
  }
]


// Team data from the latest CloysterVisa update.
// Add real team-member photos/links here later without changing the Team section.
const TEAM_MEMBERS = [
  {
    id: 'niyati-nahadiya',
    name: 'Niyati Nahadiya',
    role: 'Team Member',
    image: '',
    linkedin: 'https://www.linkedin.com/in/niyati-nahadiya-226b6204/'
  },
  // Add future team members in the same format:
  // {
  //   id: 'member-name',
  //   name: 'Full Name',
  //   role: 'Designation',
  //   image: '/team/member-name.jpg',
  //   linkedin: 'https://www.linkedin.com/in/.../'
  // }
]



// ============================================================
// NEW: Study Visa & Partnership content
// These additions are self-contained so existing sections/components
// remain unchanged.
// ============================================================
const STUDY_VISA_DESTINATIONS = [
  { id: 'study-italy', name: 'Italy', region: 'Europe', flag: 'https://flagcdn.com/w40/it.png', description: 'Study in Italy with guidance on course selection, application documentation, visa preparation and pre-departure planning.' },
  { id: 'study-canada', name: 'Canada', region: 'North America', flag: 'https://flagcdn.com/w40/ca.png', description: 'Explore Canadian study pathways with structured support for admissions, documentation, financial requirements and study visa preparation.' },
  { id: 'study-australia', name: 'Australia', region: 'Oceania', flag: 'https://flagcdn.com/w40/au.png', description: 'Plan your Australian education journey with support from course selection through application and visa-readiness preparation.' },
  { id: 'study-germany', name: 'Germany', region: 'Europe', flag: 'https://flagcdn.com/w40/de.png', description: 'Get guidance for studying in Germany, including education planning, application documentation and student visa preparation.' },
  { id: 'study-uk', name: 'United Kingdom', region: 'Europe', flag: 'https://flagcdn.com/w40/gb.png', description: 'Explore UK study options with assistance across institution applications, documentation and student visa preparation.' },
  { id: 'study-new-zealand', name: 'New Zealand', region: 'Oceania', flag: 'https://flagcdn.com/w40/nz.png', description: 'Plan a New Zealand study pathway with practical guidance on applications, supporting documents and visa preparation.' }
]

// Image-ready slots for the 3 partnership agreements and 1 certificate.
// Replace the empty image values with the real files when they are supplied.


const StudyVisaSection = () => (
  <section id="study-visa" className="section-padding study-visa-section" style={{ padding: '76px 0', background: 'var(--bg-alt)' }}>
    <div className="container">
      <div className="section-header study-visa-header" style={{ textAlign: 'center', marginBottom: '42px' }}>
        <span className="section-tag" style={{ background: 'var(--bg-card)', color: 'var(--accent-blue)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem' }}>
          International Education
        </span>
        <h2 className="section-title text-gradient" style={{ fontSize: '2.2rem', margin: '12px 0' }}>Study Visa</h2>
        <p className="section-desc" style={{ color: 'var(--text-secondary)', maxWidth: '760px', margin: '0 auto', lineHeight: 1.7 }}>
          A dedicated study pathway for students planning to pursue education abroad, with destination-focused guidance from course planning through visa preparation.
        </p>
      </div>

      <div className="study-visa-intro glass-panel">
        <div>
          <span className="study-support-tag">STUDY ABROAD SUPPORT</span>
          <h3>Choose your study destination</h3>
          <p>Select a country below to explore the study visa support pathway. Requirements vary by institution, course, country and individual profile.</p>
        </div>
        <a href={sectionHref("#contact")} className="btn btn-primary study-visa-cta">Discuss Your Study Plan <ArrowRightIcon /></a>
      </div>

      <div className="study-visa-grid">
        {STUDY_VISA_DESTINATIONS.map((destination) => (
          <article className="study-visa-card glass-panel" key={destination.id}>
            <div className="study-visa-card-top">
              <span className="study-country-flag-wrap">
                <img src={destination.flag} alt={`${destination.name} flag`} className="study-country-flag" />
              </span>
              <div>
                <span className="study-country-region">{destination.region}</span>
                <h3>{destination.name}</h3>
              </div>
            </div>
            <p>{destination.description}</p>
            <a href={sectionHref("#contact")} className="study-visa-card-link">Explore {destination.name} <ArrowRightIcon size={16} /></a>
          </article>
        ))}
      </div>
    </div>
  </section>
)



const INSTAGRAM_URL = 'https://www.instagram.com/cloystervisa/'
const LINKEDIN_URL = 'https://www.linkedin.com/company/cloystervisa/?viewAsMember=true'
const GOOGLE_BUSINESS_URL = 'https://local.google.com/place?placeid=ChIJxWcEuEQdDTkRz5rn0njVtBg&utm_medium=noren&utm_source=gbp&utm_campaign=2026'

function ServiceModalContent({
  service,
  title,
  description,
  intro,
  bullets,
  extra,
  note,
  cta,
  ctaHref,
  closeModal
}) {
  return (
    <div>
      <p
        style={{
          color: 'var(--accent-blue)',
          fontSize: '0.82rem',
          fontWeight: '700',
          margin: '14px 0 6px',
          letterSpacing: '.2px'
        }}
      >
        {service}
      </p>

      <h3
        id="service-modal-title"
        style={{
          fontSize: '1.55rem',
          lineHeight: '1.3',
          margin: '0 0 14px',
          color: 'var(--text-primary)'
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: 'var(--text-secondary)',
          lineHeight: '1.65',
          fontSize: '0.94rem',
          margin: '0 0 16px'
        }}
      >
        {description}
      </p>

      <p
        style={{
          color: 'var(--text-primary)',
          fontWeight: '700',
          fontSize: '0.92rem',
          margin: '0 0 8px'
        }}
      >
        {intro}
      </p>

      <ul
        style={{
          color: 'var(--text-secondary)',
          paddingLeft: '20px',
          margin: '0',
          lineHeight: '1.75',
          fontSize: '0.9rem'
        }}
      >
        {bullets.map((bullet) => (
          <li key={bullet} style={{ marginBottom: '5px' }}>
            {bullet}
          </li>
        ))}
      </ul>

      {extra && (
        <p
          style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            fontSize: '0.88rem',
            margin: '14px 0 0'
          }}
        >
          {extra}
        </p>
      )}

      <div
        style={{
          marginTop: '18px',
          padding: '13px 14px',
          borderRadius: '10px',
          background: 'rgba(148,163,184,.07)',
          border: '1px solid var(--border-color)'
        }}
      >
        <strong style={{ color: 'var(--text-primary)', fontSize: '0.84rem' }}>
          Please Note:
        </strong>
        <span
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.82rem',
            lineHeight: '1.55'
          }}
        >
          {' '}{note}
        </span>
      </div>

      <div style={{ marginTop: '20px' }}>
        <a
          href={ctaHref}
          onClick={closeModal}
          className="btn btn-primary"
          style={{
            width: '100%',
            justifyContent: 'center',
            background: 'var(--accent-blue)',
            color: '#fff',
            padding: '11px 14px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px'
          }}
        >
          {cta} <ArrowRightIcon />
        </a>
      </div>
    </div>
  )
}

function LegalModal({ type, onClose }) {
  const documents = {
    privacy: {
      label: 'PRIVACY POLICY',
      title: 'PRIVACY POLICY',
      updated: 'Last Updated: August 2026',
      sections: [
        {
          heading: 'Information We May Collect',
          body: 'Depending on the service you enquire about, CloysterVisa may collect information including:',
          bullets: [
            'Full Name',
            'Email',
            'Phone/WhatsApp',
            'Country',
            'Educational Qualifications',
            'Work Experience',
            'Visa History',
            'Technical/Cookie data'
          ]
        },
        {
          heading: 'How We Use Your Information',
          body: 'Your information may be used for:',
          bullets: [
            'Enquiries',
            'Profile assessments',
            'Application updates',
            'Customer service'
          ]
        },
        {
          heading: 'Third-Party Sharing',
          body: 'CloysterVisa does not sell or rent personal information. Where necessary for a service requested by you, information may be shared only with relevant authorities, institutions, or service providers involved in processing the requested service.'
        },
        {
          heading: 'Contact',
          body: 'For privacy-related enquiries, please contact:'
        }
      ],
      contact: true
    },
    terms: {
      label: 'TERMS & CONDITIONS',
      title: 'TERMS & CONDITIONS',
      updated: 'Last Updated: August 2026',
      sections: [
        {
          heading: 'Nature of Services',
          body: 'CloysterVisa provides consultancy, profile assessment, documentation support, and related immigration, visa and international education guidance depending on the client’s requirements and the services agreed upon.'
        },
        {
          heading: 'No Guarantee of Visa, PR, Admission or Employment',
          body: 'CloysterVisa DOES NOT guarantee:',
          bullets: [
            'Visa approvals',
            'Permanent residence grants',
            'Admissions',
            'Scholarships',
            'Employment or job offers'
          ],
          note: 'Final decisions rest entirely with official government, embassy, consulate, educational institution, employer, or other competent authorities.'
        },
        {
          heading: 'Client Responsibilities',
          body: 'Clients are responsible for:',
          bullets: [
            'Providing truthful and complete information',
            'Providing genuine and valid documents',
            'Reviewing information before submission',
            'Meeting applicable deadlines and requirements',
            'Attending required appointments, interviews, medical examinations, or biometrics'
          ]
        },
        {
          heading: 'Governing Law',
          body: 'These Terms & Conditions are governed by the laws of India. Disputes shall be subject to the jurisdiction of competent courts in India.'
        }
      ]
    },
    disclaimer: {
      label: 'DISCLAIMER',
      title: 'DISCLAIMER',
      updated: 'Last Updated: August 2026',
      sections: [
        {
          heading: 'Purpose',
          body: 'The information provided by CloysterVisa is for general informational purposes only. Immigration laws, visa requirements, government programs, admission criteria, processing times, fees, and policies may change frequently.'
        },
        {
          heading: 'No Approval Guarantee',
          body: 'CloysterVisa does not control decisions made by immigration departments, embassies, consulates, visa application centres, universities, colleges, employers, or other authorities. No visa, permanent residence, admission, employment, invitation, processing time, or other outcome can be guaranteed.'
        },
        {
          heading: 'Affiliation Note',
          body: 'References to governments, universities, or third parties do not imply official endorsement, authorization, affiliation, or partnership unless explicitly stated.'
        },
        {
          heading: 'Professional Assessment',
          body: 'Users should undergo an individual assessment before making significant financial, educational, employment, immigration, or relocation decisions based on general website information.'
        }
      ]
    }
  }

  const document = documents[type]
  if (!document) return null

  return (
    <div
      className="modal-overlay legal-modal-overlay"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.82)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1300,
        padding: '20px'
      }}
    >
      <div
        className="glass-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '80vh',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid var(--accent-blue)',
          background: 'var(--bg-card)',
          boxShadow: '0 24px 70px rgba(0,0,0,.45)',
          borderRadius: '16px',
          color: 'var(--text-primary)'
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '18px 22px',
            borderBottom: '1px solid var(--border-color)',
            background: 'rgba(15,23,42,.92)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)'
          }}
        >
          <div>
            <div style={{
              color: 'var(--accent-blue)',
              fontSize: '.74rem',
              fontWeight: '700',
              letterSpacing: '.12em',
              marginBottom: '4px'
            }}>
              LEGAL INFORMATION
            </div>
            <h2 id="legal-modal-title" style={{ margin: 0, fontSize: '1.18rem', lineHeight: 1.3 }}>
              {document.title}
            </h2>
            <div style={{ color: 'var(--text-muted)', fontSize: '.78rem', marginTop: '4px' }}>
              {document.updated}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${document.label}`}
            title="Close"
            style={{
              flex: '0 0 auto',
              width: '38px',
              height: '38px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-color)',
              borderRadius: '10px',
              background: 'var(--bg-main)',
              color: 'var(--text-primary)',
              fontSize: '1.15rem',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            maxHeight: 'calc(80vh - 88px)',
            overflowY: 'auto',
            padding: '24px 26px 28px'
          }}
        >
          {document.sections.map((section) => (
            <section key={section.heading} style={{ marginBottom: '22px' }}>
              <h3 style={{
                margin: '0 0 8px',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                lineHeight: 1.4
              }}>
                {section.heading}
              </h3>
              {section.body && (
                <p style={{
                  margin: 0,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontSize: '.9rem'
                }}>
                  {section.body}
                </p>
              )}
              {section.bullets && (
                <ul style={{
                  margin: '10px 0 0',
                  paddingLeft: '21px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontSize: '.9rem'
                }}>
                  {section.bullets.map((bullet) => (
                    <li key={bullet} style={{ marginBottom: '5px' }}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.note && (
                <div style={{
                  marginTop: '12px',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: 'rgba(148,163,184,.07)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  fontSize: '.84rem'
                }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Important:</strong>{' '}
                  {section.note}
                </div>
              )}
            </section>
          ))}

          {document.contact && (
            <div style={{
              marginTop: '4px',
              padding: '16px',
              borderRadius: '12px',
              background: 'rgba(37,99,235,.07)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              fontSize: '.9rem'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>CloysterVisa</strong><br />
              Email: <a href="mailto:info@cloystervisa.com" style={{ color: 'var(--accent-blue)' }}>info@cloystervisa.com</a><br />
              Phone: <a href="tel:+917027466559" style={{ color: 'var(--accent-blue)' }}>+91 70274 66559</a><br />
              Website: <a href="https://www.cloystervisa.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-blue)' }}>www.cloystervisa.com</a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


const CALCULATOR_COUNTRIES = [
  { id: 'canada', label: '🇨🇦 Canada', subtitle: 'Choose a federal pathway' },
  { id: 'australia', label: '🇦🇺 Australia', subtitle: 'Skilled migration visas' },
  { id: 'germany', label: '🇩🇪 Germany', subtitle: 'Opportunity Card routes' },
  { id: 'uk', label: '🇬🇧 United Kingdom', subtitle: 'Skilled Worker route' },
  { id: 'nz', label: '🇳🇿 New Zealand', subtitle: 'Skilled Migrant pathways' }
]

const calculatorFieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '7px'
}

const calculatorLabelStyle = {
  color: 'var(--text-primary)',
  fontSize: '.84rem',
  fontWeight: '700'
}

const calculatorHintStyle = {
  color: 'var(--text-muted)',
  fontSize: '.74rem',
  lineHeight: 1.45
}

const calculatorSelectStyle = {
  width: '100%',
  minHeight: '44px',
  padding: '10px 12px',
  borderRadius: '10px',
  border: '1px solid var(--border-color)',
  background: 'var(--bg-main)',
  color: 'var(--text-primary)',
  outline: 'none'
}

const CalculatorField = ({ label, hint, children }) => (
  <div style={calculatorFieldStyle}>
    <label style={calculatorLabelStyle}>{label}</label>
    {children}
    {hint && <div style={calculatorHintStyle}>{hint}</div>}
  </div>
)

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openNavDropdown, setOpenNavDropdown] = useState(null)

  // Blog is a standalone route. On /blog and /blog/:slug the homepage body is
  // replaced by Blog; the normal CloysterVisa header, WhatsApp button and footer remain.
  const isBlogRoute =
    window.location.pathname === '/blog' ||
    window.location.pathname.startsWith('/blog/')
  const sectionHref = (hash) => (isBlogRoute ? `/${hash}` : hash)

  const countries = staticCountriesData

  // Destination Explorer State
  const [activeTab, setActiveTab] = useState('canada')

  // Service Details Modal State
  const [activeModal, setActiveModal] = useState(null)
  const [activeLegalModal, setActiveLegalModal] = useState(null)

  // Professional pathway-specific eligibility calculator state.
  // Input fields contain applicant facts only. Scoring is revealed after calculation.
  const [calculatorCountry, setCalculatorCountry] = useState('canada')

  const [canadaCalc, setCanadaCalc] = useState({
    program: 'FSWP',
    age: '18-35',
    workExperience: '1',
    education: 'bachelor',
    firstLanguageSpeaking: '6',
    firstLanguageListening: '6',
    firstLanguageReading: '6',
    firstLanguageWriting: '6',
    secondLanguage: '0',
    arrangedEmployment: '0',
    adaptability: '0',
    skilledWorkYears: '1',
    skilledWorkHours: '1560',
    workWithin10Years: 'yes',
    skilledWorkPaid: 'yes',
    continuousPrimaryOccupationWork: 'yes',
    workTEER: '0',
    languageCLB: '7',
    foreignEducationECA: 'yes',
    settlementFunds: 'yes',
    admissible: 'yes',
    intendOutsideQuebec: 'yes',
    canadianWorkYears: '1',
    canadianWorkHours: '1560',
    canadianWorkLast3Years: 'yes',
    canadianWorkTEER: '0',
    canadianWorkAuthorized: 'yes',
    canadianWorkPaid: 'yes',
    canadianLanguageCLB: '7',
    tradeWorkYears: '2',
    tradeWorkHours: '3120',
    tradeWorkLast5Years: 'yes',
    tradeWorkPaid: 'yes',
    fstLanguageSpeaking: '5',
    fstLanguageListening: '5',
    fstLanguageReading: '4',
    fstLanguageWriting: '4',
    validTradeJobOffer: 'no',
    canadianTradeCertificate: 'no'
  })

  const [australiaCalc, setAustraliaCalc] = useState({
    visa: '189',
    age: '25-32',
    occupationOnRelevantList: 'yes',
    skillsAssessmentPositive: 'yes',
    english: 'competent',
    overseasExperience: '0',
    australianExperience: '0',
    education: 'bachelor',
    EOI: 'yes',
    invited: 'yes',
    stateNomination: 'yes',
    eligibleFamilySponsor: 'no',
    regionalRequirement: 'yes',
    health: 'yes',
    character: 'yes'
  })

  const [germanyCalc, setGermanyCalc] = useState({
    route: 'points',
    qualificationFullyRecognisedGermany: 'yes',
    ageRequirement: 'yes',
    financialResources: 'yes',
    healthInsurance: 'yes',
    qualificationCompleted: 'yes',
    qualificationRecognisedInOriginCountry: 'yes',
    germanLevel: 'A2',
    englishLevel: 'B2',
    partialRecognition: 'no',
    shortageOccupation: 'no',
    experience: '0',
    germanPoints: '0',
    englishPoints: '0',
    agePoints: '0',
    germanyStay: '0',
    partner: '0'
  })

  const [ukCalc, setUkCalc] = useState({
    approvedSponsor: 'yes',
    certificateOfSponsorship: 'yes',
    eligibleOccupation: 'yes',
    appropriateSkillLevel: 'yes',
    englishLevel: 'B2',
    salary: '',
    goingRate: '',
    relevantPhD: 'no',
    relevantSTEMPhD: 'no',
    onImmigrationSalaryList: 'no',
    newEntrant: 'no',
    genuineJob: 'yes',
    financialRequirement: 'yes',
    suitable: 'yes'
  })

  const [nzCalc, setNzCalc] = useState({
    pathway: 'points',
    age: '',
    accreditedEmployer: 'yes',
    skilledJobOrOffer: 'yes',
    hoursPerWeek: '30',
    english: 'yes',
    health: 'yes',
    character: 'yes',
    skillCategory: 'qualification',
    qualification: 'level7Bachelor',
    income: '1.5x',
    occupationalRegistration: '2years',
    nzSkilledWorkExperience: '0',
    relevantWorkExperienceYears: '',
    nzSkilledWorkExperienceYears: '',
    occupationSkillLevel: '1',
    relevantTradeQualification: 'yes',
    postQualificationExperienceYears: '',
    nzSkilledWorkExperienceMonths: ''
  })

  const [calcResult, setCalcResult] = useState(null)

  // Booking Form State
  const [bookingSubmitted, setBookingSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingData, setBookingData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91',
    destination: 'canada',
    consultationTime: '',
    message: '',
    consent: false
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the active legal modal with Escape.
  useEffect(() => {
    if (!activeLegalModal) return undefined

    const handleLegalEscape = (event) => {
      if (event.key === 'Escape') setActiveLegalModal(null)
    }

    window.addEventListener('keydown', handleLegalEscape)
    return () => window.removeEventListener('keydown', handleLegalEscape)
  }, [activeLegalModal])

  // Keep the browser/SPA document metadata aligned with the CloysterVisa brand.
  // The same title should also be set in index.html for search engines on first load.
  useEffect(() => {
    document.title = 'CloysterVisa | Immigration & Visa Consultancy'

    const setMeta = (selector, attribute, value) => {
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, selector.includes('property=') ? selector.match(/property=\"([^\"]+)\"/)?.[1] || '' : selector.match(/name=\"([^\"]+)\"/)?.[1] || '')
        document.head.appendChild(element)
      }
      element.setAttribute('content', value)
    }

    setMeta('meta[name=\"description\"]', 'name', 'CloysterVisa immigration consultancy for Canada, Australia, Germany, UK and New Zealand visa pathways, eligibility assessment and consultation.')
    setMeta('meta[property=\"og:title\"]', 'property', 'CloysterVisa | Immigration & Visa Consultancy')
  }, [])

  // Calculate only against the rule set belonging to the selected pathway.
  const runCalculation = () => {
    const yes = (value) => value === 'yes'

    if (calculatorCountry === 'canada') {
      if (canadaCalc.program === 'FSWP') {
        const firstLanguage = [
          canadaCalc.firstLanguageSpeaking,
          canadaCalc.firstLanguageListening,
          canadaCalc.firstLanguageReading,
          canadaCalc.firstLanguageWriting
        ].reduce((sum, value) => sum + Number(value), 0)

        const languageMinimumMet = [
          canadaCalc.firstLanguageSpeaking,
          canadaCalc.firstLanguageListening,
          canadaCalc.firstLanguageReading,
          canadaCalc.firstLanguageWriting
        ].every((value) => Number(value) >= 4)

        const agePoints = {
          '18-35': 12, '36': 11, '37': 10, '38': 9, '39': 8, '40': 7,
          '41': 6, '42': 5, '43': 4, '44': 3, '45': 2, '46': 1, '47+': 0
        }[canadaCalc.age] ?? 0

        const workPoints = {
          '1': 9, '2-3': 11, '4-5': 13, '6+': 15
        }[canadaCalc.workExperience] ?? 0

        const educationPoints = {
          highschool: 5,
          postsecondary1: 15,
          postsecondary2: 19,
          bachelor: 21,
          twoCredentials: 22,
          masters: 23,
          phd: 25
        }[canadaCalc.education] ?? 0

        const score = agePoints + educationPoints + workPoints + firstLanguage +
          Number(canadaCalc.secondLanguage) +
          Number(canadaCalc.arrangedEmployment) +
          Number(canadaCalc.adaptability)

        const minimumRequirementsMet =
          Number(canadaCalc.skilledWorkYears) >= 1 &&
          Number(canadaCalc.skilledWorkHours) >= 1560 &&
          yes(canadaCalc.workWithin10Years) &&
          yes(canadaCalc.skilledWorkPaid) &&
          yes(canadaCalc.continuousPrimaryOccupationWork) &&
          Number(canadaCalc.workTEER) >= 0 &&
          Number(canadaCalc.workTEER) <= 3 &&
          languageMinimumMet &&
          canadaCalc.education !== 'none' &&
          yes(canadaCalc.foreignEducationECA) &&
          yes(canadaCalc.settlementFunds) &&
          yes(canadaCalc.admissible) &&
          yes(canadaCalc.intendOutsideQuebec)

        setCalcResult({
          country: 'canada',
          program: 'FSWP',
          score,
          max: 100,
          threshold: 67,
          eligible: score >= 67 && minimumRequirementsMet,
          requirementsMet: minimumRequirementsMet,
          breakdown: [
            ['Age', agePoints],
            ['Education', educationPoints],
            ['Skilled work experience', workPoints],
            ['First official language', firstLanguage],
            ['Second official language', Number(canadaCalc.secondLanguage)],
            ['Arranged employment', Number(canadaCalc.arrangedEmployment)],
            ['Adaptability', Number(canadaCalc.adaptability)]
          ],
          note: languageMinimumMet
            ? '67 or more selection-factor points may qualify an applicant for FSWP, subject to the separate minimum requirements and complete assessment.'
            : 'The first official language minimum is not met because at least one ability is below CLB 7.'
        })
        return
      }

      if (canadaCalc.program === 'CEC') {
        const eligible =
          Number(canadaCalc.canadianWorkYears) >= 1 &&
          Number(canadaCalc.canadianWorkHours) >= 1560 &&
          yes(canadaCalc.canadianWorkLast3Years) &&
          Number(canadaCalc.canadianWorkTEER) >= 0 &&
          Number(canadaCalc.canadianWorkTEER) <= 3 &&
          yes(canadaCalc.canadianWorkAuthorized) &&
          yes(canadaCalc.canadianWorkPaid) &&
          yes(canadaCalc.admissible) &&
          yes(canadaCalc.intendOutsideQuebec) &&
          (
            (Number(canadaCalc.canadianWorkTEER) <= 1 && Number(canadaCalc.canadianLanguageCLB) >= 7) ||
            (Number(canadaCalc.canadianWorkTEER) >= 2 && Number(canadaCalc.canadianLanguageCLB) >= 5)
          )

        setCalcResult({
          country: 'canada',
          program: 'CEC',
          score: null,
          max: null,
          threshold: null,
          eligible,
          requirementsMet: eligible,
          breakdown: [],
          note: eligible
            ? 'The entered information meets the screening conditions configured for the Canadian Experience Class.'
            : 'One or more CEC screening requirements are not met based on the information entered.'
        })
        return
      }

      const fstLanguageMet =
        Number(canadaCalc.fstLanguageSpeaking) >= 5 &&
        Number(canadaCalc.fstLanguageListening) >= 5 &&
        Number(canadaCalc.fstLanguageReading) >= 4 &&
        Number(canadaCalc.fstLanguageWriting) >= 4

      const tradePathwayEligible =
        Number(canadaCalc.tradeWorkYears) >= 2 &&
        Number(canadaCalc.tradeWorkHours) >= 3120 &&
        yes(canadaCalc.tradeWorkLast5Years) &&
        yes(canadaCalc.tradeWorkPaid) &&
        fstLanguageMet &&
        (yes(canadaCalc.validTradeJobOffer) || yes(canadaCalc.canadianTradeCertificate)) &&
        yes(canadaCalc.admissible) &&
        yes(canadaCalc.settlementFunds) &&
        yes(canadaCalc.intendOutsideQuebec)

      setCalcResult({
        country: 'canada',
        program: 'FSTP',
        score: null,
        max: null,
        threshold: null,
        eligible: tradePathwayEligible,
        requirementsMet: tradePathwayEligible,
        breakdown: [],
        note: tradePathwayEligible
          ? 'The entered information meets the screening conditions configured for the Federal Skilled Trades Program.'
          : 'One or more FSTP screening requirements are not met based on the information entered.'
      })
      return
    }

    if (calculatorCountry === 'australia') {
      const agePoints = { '18-24': 25, '25-32': 30, '33-39': 25, '40-44': 15 }[australiaCalc.age] ?? 0
      const englishPoints = { competent: 0, proficient: 10, superior: 20 }[australiaCalc.english] ?? 0
      const overseasPoints = { '0': 0, '3-4': 5, '5-7': 10, '8+': 15 }[australiaCalc.overseasExperience] ?? 0
      const australianPoints = { '0': 0, '1-2': 5, '3-4': 10, '5-7': 15, '8+': 20 }[australiaCalc.australianExperience] ?? 0
      const educationPoints = { doctorate: 20, bachelor: 15, diploma: 10 }[australiaCalc.education] ?? 0
      const nominationPoints = australiaCalc.visa === '189' ? 0 : australiaCalc.visa === '190' ? 5 : 15
      const total = agePoints + englishPoints + overseasPoints + australianPoints + educationPoints + nominationPoints

      const englishValid = ['competent', 'proficient', 'superior'].includes(australiaCalc.english)
      const ageEligible = ['18-24', '25-32', '33-39', '40-44'].includes(australiaCalc.age)
      const common =
        ageEligible &&
        yes(australiaCalc.occupationOnRelevantList) &&
        yes(australiaCalc.skillsAssessmentPositive) &&
        englishValid &&
        yes(australiaCalc.EOI) &&
        yes(australiaCalc.invited) &&
        yes(australiaCalc.health) &&
        yes(australiaCalc.character)

      const pathwaySpecific =
        australiaCalc.visa === '189'
          ? true
          : australiaCalc.visa === '190'
            ? yes(australiaCalc.stateNomination)
            : (yes(australiaCalc.stateNomination) || yes(australiaCalc.eligibleFamilySponsor)) && yes(australiaCalc.regionalRequirement)

      setCalcResult({
        country: 'australia',
        program: `Subclass ${australiaCalc.visa}`,
        score: total,
        max: null,
        threshold: 65,
        eligible: common && pathwaySpecific && total >= 65,
        requirementsMet: common && pathwaySpecific,
        breakdown: [
          ['Age', agePoints],
          ['English', englishPoints],
          ['Overseas skilled employment', overseasPoints],
          ['Australian skilled employment', australianPoints],
          ['Education', educationPoints],
          ['Nomination', nominationPoints]
        ],
        note: '65 points is the minimum points threshold in the supplied rule set. Reaching the threshold does not itself guarantee an invitation.'
      })
      return
    }

    if (calculatorCountry === 'germany') {
      if (germanyCalc.route === 'recognised') {
        const eligible =
          yes(germanyCalc.qualificationFullyRecognisedGermany) &&
          yes(germanyCalc.ageRequirement) &&
          yes(germanyCalc.financialResources) &&
          yes(germanyCalc.healthInsurance)

        setCalcResult({
          country: 'germany',
          program: 'Opportunity Card — recognised qualification route',
          score: null,
          max: null,
          threshold: null,
          eligible,
          requirementsMet: eligible,
          breakdown: [],
          directRoute: true,
          note: eligible
            ? 'The entered information meets the supplied screening conditions for the recognised-qualification route.'
            : 'One or more recognised-qualification route screening requirements are not met.'
        })
        return
      }

      const points = {
        partialRecognition: Number(germanyCalc.partialRecognition),
        shortageOccupation: Number(germanyCalc.shortageOccupation),
        experience: Number(germanyCalc.experience),
        german: Number(germanyCalc.germanPoints),
        english: Number(germanyCalc.englishPoints),
        age: Number(germanyCalc.agePoints),
        germanyStay: Number(germanyCalc.germanyStay),
        partner: Number(germanyCalc.partner)
      }
      const total = Object.values(points).reduce((sum, value) => sum + value, 0)

      const languageMinimumMet =
        ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(germanyCalc.germanLevel) ||
        ['B2', 'C1', 'C2'].includes(germanyCalc.englishLevel)

      const eligible =
        yes(germanyCalc.qualificationCompleted) &&
        yes(germanyCalc.qualificationRecognisedInOriginCountry) &&
        languageMinimumMet &&
        total >= 6 &&
        yes(germanyCalc.financialResources) &&
        yes(germanyCalc.healthInsurance)

      setCalcResult({
        country: 'germany',
        program: 'Opportunity Card — points route',
        score: total,
        max: 16,
        threshold: 6,
        eligible,
        requirementsMet: eligible,
        breakdown: [
          ['Qualification / recognition', points.partialRecognition],
          ['Shortage occupation', points.shortageOccupation],
          ['Professional experience', points.experience],
          ['German language', points.german],
          ['English C1+', points.english],
          ['Age', points.age],
          ['Previous Germany stay', points.germanyStay],
          ['Partner eligibility', points.partner]
        ],
        note: 'The points route requires at least 6 points plus the separate qualification, language, financial and insurance requirements.'
      })
      return
    }

    if (calculatorCountry === 'uk') {
      const mandatory =
        yes(ukCalc.approvedSponsor) &&
        yes(ukCalc.certificateOfSponsorship) &&
        yes(ukCalc.eligibleOccupation) &&
        yes(ukCalc.appropriateSkillLevel) &&
        ['B2', 'C1', 'C2'].includes(ukCalc.englishLevel)

      const salary = Number(ukCalc.salary)
      const goingRate = Number(ukCalc.goingRate)
      const hasSalaryData = Number.isFinite(salary) && salary > 0 && Number.isFinite(goingRate) && goingRate > 0

      const tradeable =
        hasSalaryData && (
          (salary >= 41700 && salary >= goingRate) ||
          (yes(ukCalc.relevantPhD) && salary >= 37500 && salary >= goingRate * 0.90) ||
          (yes(ukCalc.relevantSTEMPhD) && salary >= 33400 && salary >= goingRate * 0.80) ||
          (yes(ukCalc.onImmigrationSalaryList) && salary >= 33400 && salary >= goingRate) ||
          (yes(ukCalc.newEntrant) && salary >= 33400 && salary >= goingRate * 0.70)
        )

      const eligible =
        mandatory &&
        tradeable &&
        yes(ukCalc.genuineJob) &&
        yes(ukCalc.financialRequirement) &&
        yes(ukCalc.suitable)

      setCalcResult({
        country: 'uk',
        program: 'Skilled Worker',
        score: mandatory ? 50 + (tradeable ? 20 : 0) : 0,
        max: 70,
        threshold: 70,
        eligible,
        requirementsMet: mandatory,
        breakdown: [
          ['Mandatory requirements', mandatory ? 50 : 0],
          ['Tradeable salary option', tradeable ? 20 : 0]
        ],
        note: 'The supplied UK rule set uses 70 total points: 50 mandatory points plus 20 tradeable points. Salary and going-rate data are required for the tradeable check.'
      })
      return
    }

    // 🇳🇿 New Zealand
    const commonNZ =
      Number(nzCalc.age) <= 55 &&
      nzCalc.age !== '' &&
      yes(nzCalc.accreditedEmployer) &&
      yes(nzCalc.skilledJobOrOffer) &&
      Number(nzCalc.hoursPerWeek) >= 30 &&
      yes(nzCalc.english) &&
      yes(nzCalc.health) &&
      yes(nzCalc.character)

    if (nzCalc.pathway === 'points') {
      const categoryPoints = {
        qualification: {
          level10Doctorate: 6,
          level9Masters: 5,
          level8HonoursOrPGDip: 4,
          level7Bachelor: 3
        },
        income: {
          '3x': 6,
          '2x': 4,
          '1.5x': 3
        },
        occupationalRegistration: {
          sixYears: 6,
          fiveYears: 5,
          fourYears: 4,
          twoYears: 3
        }
      }

      const primaryPoints =
        nzCalc.skillCategory === 'qualification'
          ? categoryPoints.qualification[nzCalc.qualification] ?? 0
          : nzCalc.skillCategory === 'income'
            ? categoryPoints.income[nzCalc.income] ?? 0
            : categoryPoints.occupationalRegistration[nzCalc.occupationalRegistration] ?? 0

      const workPoints = {
        '0': 0,
        '1': 1,
        '1.5': 2,
        '2': 3
      }[nzCalc.nzSkilledWorkExperience] ?? 0

      const total = Math.min(6, primaryPoints + workPoints)

      setCalcResult({
        country: 'nz',
        program: 'Skilled Migrant Category — points pathway',
        score: total,
        max: 6,
        threshold: 6,
        eligible: commonNZ && total >= 6,
        requirementsMet: commonNZ,
        breakdown: [
          ['Primary skill category', primaryPoints],
          ['New Zealand skilled work experience', workPoints]
        ],
        note: 'The supplied points pathway uses one primary skill category—qualification, income or occupational registration—with New Zealand skilled work experience adding points where applicable.'
      })
      return
    }

    if (nzCalc.pathway === 'experience') {
      const eligible =
        commonNZ &&
        Number(nzCalc.relevantWorkExperienceYears) >= 5 &&
        Number(nzCalc.nzSkilledWorkExperienceYears) >= 2 &&
        [1, 2, 3].includes(Number(nzCalc.occupationSkillLevel))

      setCalcResult({
        country: 'nz',
        program: 'Skilled Migrant Category — skilled work experience pathway',
        score: null,
        max: null,
        threshold: null,
        eligible,
        requirementsMet: commonNZ,
        breakdown: [],
        note: eligible
          ? 'The entered information meets the supplied screening conditions for the skilled work experience pathway.'
          : 'The supplied screening conditions for this pathway are not all met.'
      })
      return
    }

    const eligible =
      commonNZ &&
      yes(nzCalc.relevantTradeQualification) &&
      Number(nzCalc.postQualificationExperienceYears) >= 4 &&
      Number(nzCalc.nzSkilledWorkExperienceMonths) >= 18

    setCalcResult({
      country: 'nz',
      program: 'Skilled Migrant Category — trades & technicians pathway',
      score: null,
      max: null,
      threshold: null,
      eligible,
      requirementsMet: commonNZ,
      breakdown: [],
      note: eligible
        ? 'The entered information meets the supplied screening conditions for the trades and technicians pathway.'
        : 'The supplied screening conditions for this pathway are not all met.'
    })
  }

  // Handle Submission using EmailJS
  const handleBookingSubmit = (e) => {
    e.preventDefault()

    if (!bookingData.fullName || !bookingData.email || !bookingData.phone || !bookingData.countryCode || !bookingData.consultationTime) {
      alert('Please fill in all required fields.')
      return
    }

    if (!bookingData.consent) {
      alert('Please agree to be contacted by CloysterVisa before submitting.')
      return
    }

    setIsSubmitting(true)

    const fullPhoneNumber = `${bookingData.countryCode} ${bookingData.phone}`

    // Keep both variable names so the EmailJS admin template and the
    // customer auto-reply template receive the same customer details.
    const templateParams = {
      name: bookingData.fullName,
      email: bookingData.email,
      phone: fullPhoneNumber,
      destination: bookingData.destination.toUpperCase(),
      preferred_consultation_time: bookingData.consultationTime,
      message: bookingData.message,
      consent: bookingData.consent ? 'Yes' : 'No',

      // Existing EmailJS template variables
      from_name: bookingData.fullName,
      from_email: bookingData.email,
      phone_number: fullPhoneNumber,
      target_destination: bookingData.destination.toUpperCase(),

      // Used by EmailJS as the reply address.
      reply_to: bookingData.email
    }

    // Send ONE request to the office template.
    // EmailJS Auto-Reply (configured in the dashboard) sends the
    // confirmation email automatically to {{from_email}}.
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_ADMIN_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
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

  const openDestination = (countryId) => {
    setActiveTab(countryId)
    setOpenNavDropdown(null)
    setMobileMenuOpen(false)
    window.setTimeout(() => {
      document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }

  const closeNav = () => {
    setOpenNavDropdown(null)
    setMobileMenuOpen(false)
  }

  const visualPolishStyles = `
    :root {
      --bg-main: #060b13;
      --bg-card: #0f172a;
      --bg-alt: #0b1120;
      --border-color: #1e293b;
      --text-primary: #f8fafc;
      --text-secondary: #94a3b8;
      --text-muted: #64748b;
      --accent-blue: #2563eb;
      --accent-hover: #1d4ed8;
      --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }

    [data-theme="light"] {
      --bg-main: #f8fafc;
      --bg-card: #ffffff;
      --bg-alt: #f1f5f9;
      --border-color: #e2e8f0;
      --text-primary: #0f172a;
      --text-secondary: #334155;
      --text-muted: #64748b;
      --accent-blue: #2563eb;
      --accent-hover: #1d4ed8;
      --card-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08);
    }

    * {
      box-sizing: border-box;
    }

    body {
      background-color: var(--bg-main);
      color: var(--text-primary);
      transition: background-color 0.3s ease, color 0.3s ease;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding-left: 20px;
      padding-right: 20px;
    }

    .cloyster-logo-image {
      display: block;
      width: 178px;
      height: auto;
      max-width: 100%;
      object-fit: contain;
      background: transparent !important;
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      flex: 0 0 auto;
    }

    .cloyster-logo-switch {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      width: auto;
      min-width: 0;
    }

    .cloyster-logo-light {
      display: none !important;
    }

    [data-theme="light"] .cloyster-logo-dark {
      display: none !important;
    }

    [data-theme="light"] .cloyster-logo-light {
      display: block !important;
    }

    .cloyster-logo-footer {
      width: 190px;
      height: auto;
    }

    .logo-link {
      display: inline-flex !important;
      align-items: center;
      justify-content: flex-start;
      background: transparent !important;
      padding: 0 !important;
      border: 0 !important;
      box-shadow: none !important;
    }

    .nav-container .logo-link {
      min-width: 178px;
      margin-right: 18px;
      flex-shrink: 0;
    }

    /* Keep all desktop navigation items compact and evenly spaced. */
    @media (min-width: 901px) {
      .nav-container .nav-menu {
        gap: 18px !important;
      }

      .nav-container .nav-actions {
        gap: 8px !important;
      }
    }

    .nav-consultation-btn,
    .nav-eligibility-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      min-height: 40px;
      padding: 9px 14px;
      border-radius: 9px;
      text-decoration: none;
      font-size: .82rem;
      font-weight: 700;
      line-height: 1;
      white-space: nowrap;
      transition: transform .18s ease, background .18s ease, border-color .18s ease, color .18s ease, box-shadow .18s ease;
    }

    .nav-consultation-btn {
      color: var(--text-primary);
      background: transparent;
      border: 1px solid rgba(59,130,246,.5);
    }

    .nav-consultation-btn:hover {
      transform: translateY(-1px);
      color: var(--text-primary);
      border-color: var(--accent-blue);
      background: rgba(37,99,235,.08);
    }

    .nav-eligibility-btn {
      color: #fff;
      background: var(--accent-blue);
      border: 1px solid var(--accent-blue);
      box-shadow: 0 6px 18px rgba(37,99,235,.18);
    }

    .nav-eligibility-btn:hover {
      transform: translateY(-1px);
      color: #fff;
      background: var(--accent-hover);
      border-color: var(--accent-hover);
    }

    .theme-toggle {
      color: var(--text-primary) !important;
      background: var(--bg-card) !important;
      border: 1px solid var(--border-color) !important;
      border-radius: 10px !important;
      padding: 8px 12px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .glass-panel {
      background: var(--bg-card) !important;
      border: 1px solid var(--border-color) !important;
      box-shadow: var(--card-shadow);
      border-radius: 16px;
    }

    .text-gradient {
      color: var(--text-primary) !important;
    }

    .select-control {
      background: var(--bg-main) !important;
      color: var(--text-primary) !important;
      border: 1px solid var(--border-color) !important;
      padding: 10px 14px;
      border-radius: 8px;
      width: 100%;
      box-sizing: border-box;
    }

    .hero-trust-line {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 18px;
      align-items: center;
      margin-top: 20px;
      color: var(--text-secondary);
      font-size: 0.86rem;
      font-weight: 500;
      line-height: 1.5;
    }

    .hero-trust-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .hero-trust-item svg {
      width: 16px;
      height: 16px;
      color: #22c55e;
      flex: 0 0 auto;
    }

    .destination-chip {
      display: inline-flex !important;
      align-items: center;
      gap: 8px;
      padding: 6px 14px !important;
      border-radius: 20px;
      font-size: 0.9rem;
      color: var(--text-primary);
    }

    .country-note {
      margin-top: 12px;
      color: var(--text-muted);
      font-size: 0.78rem;
      line-height: 1.5;
    }

    .country-next-step {
      margin-top: 22px;
      padding-top: 20px;
      border-top: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      flex-wrap: wrap;
    }

    .country-next-step-title {
      color: var(--text-primary);
      font-size: 0.98rem;
      font-weight: 700;
      margin: 0;
    }

    .country-next-step-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .clean-feature-icon {
      width: 52px;
      height: 52px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 14px;
      color: #60a5fa;
      background: rgba(37, 99, 235, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.22);
      margin-bottom: 14px;
    }

    .study-support-tag {
      display: inline-flex;
      margin: 0 0 12px;
      padding: 5px 9px;
      border-radius: 999px;
      color: #93c5fd;
      background: rgba(37, 99, 235, 0.12);
      border: 1px solid rgba(59, 130, 246, 0.22);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: .35px;
    }

    .announcement-bar {
      position: relative !important;
      z-index: 1100 !important;
      min-height: 40px;
      display: flex !important;
      align-items: center;
      justify-content: center;
      gap: 4px;
      text-align: center;
    }

    .navbar {
      position: sticky !important;
      top: 0 !important;
      z-index: 1000 !important;
      width: 100%;
      background: var(--bg-card) !important;
      border-bottom: 1px solid var(--border-color);
    }

    .nav-link {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
    }

    .nav-dropdown {
      position: relative;
    }

    .nav-dropdown-toggle {
      border: 0;
      background: transparent;
      cursor: pointer;
      font: inherit;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .nav-chevron {
      font-size: 0.9rem;
      line-height: 1;
      transform: translateY(-1px);
      transition: transform .2s ease;
    }

    .nav-dropdown.open .nav-chevron {
      transform: rotate(180deg) translateY(1px);
    }

    .nav-dropdown-menu {
      position: absolute;
      top: calc(100% + 14px);
      left: 50%;
      min-width: 225px;
      padding: 8px;
      transform: translateX(-50%) translateY(-5px);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      box-shadow: 0 18px 40px rgba(0,0,0,.22);
      transition: opacity .18s ease, transform .18s ease, visibility .18s ease;
      z-index: 1200;
    }

    .nav-dropdown:hover .nav-dropdown-menu,
    .nav-dropdown.open .nav-dropdown-menu {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: translateX(-50%) translateY(0);
    }

    .nav-dropdown-menu button,
    .nav-dropdown-menu a {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 10px 11px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      color: var(--text-secondary);
      text-decoration: none;
      text-align: left;
      font: inherit;
      font-size: .84rem;
      cursor: pointer;
    }

    .nav-dropdown-menu button:hover,
    .nav-dropdown-menu a:hover {
      background: rgba(37,99,235,.09);
      color: var(--text-primary);
    }

    .nav-dropdown-menu .flag-icon {
      width: 20px;
      height: 14px;
      flex: 0 0 auto;
    }

    /* --- HERO ORBIT CARDS --- */
    .hero-visual {
      position: relative;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: visible;
    }

    .hero-orbit-stage {
      position: relative;
      width: min(100%, 520px);
      aspect-ratio: 1;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      isolation: isolate;
    }

    .hero-orbit-ring {
      position: absolute;
      left: 50%;
      top: 50%;
      width: var(--ring-size);
      height: var(--ring-size);
      transform: translate(-50%, -50%);
      border: 1px solid rgba(59, 130, 246, var(--ring-opacity));
      border-radius: 50%;
      box-shadow: 0 0 22px rgba(37, 99, 235, var(--glow-opacity));
      pointer-events: none;
      z-index: 0;
    }

    .hero-orbit-ring::before {
      content: '';
      position: absolute;
      inset: 7%;
      border: 1px solid rgba(147, 197, 253, .035);
      border-radius: 50%;
    }

    .hero-orbit-ring-one {
      --ring-size: 430px;
      --ring-opacity: .19;
      --glow-opacity: .08;
    }

    .hero-orbit-ring-two {
      --ring-size: 340px;
      --ring-opacity: .13;
      --glow-opacity: .055;
    }

    .hero-orbit-ring-three {
      --ring-size: 255px;
      --ring-opacity: .10;
      --glow-opacity: .04;
    }

    .hero-orbit-center {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 84px;
      height: 84px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: radial-gradient(circle, rgba(37,99,235,.14), rgba(37,99,235,.035) 55%, transparent 72%);
      border: 1px solid rgba(59,130,246,.10);
      box-shadow: 0 0 42px rgba(37,99,235,.10);
      z-index: 1;
      pointer-events: none;
    }

    .hero-orbit-center::before,
    .hero-orbit-center::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    .hero-orbit-center::before {
      width: 9px;
      height: 9px;
      background: var(--accent-blue);
      box-shadow: 0 0 18px rgba(37,99,235,.65);
    }

    .hero-orbit-center::after {
      width: 30px;
      height: 30px;
      border: 1px solid rgba(59,130,246,.20);
    }

    .hero-orbit-item {
      position: absolute;
      left: 50%;
      top: 50%;
      width: var(--orbit-size);
      height: var(--orbit-size);
      transform: translate(-50%, -50%);
      transform-origin: center;
      animation: heroCardOrbit var(--orbit-duration) linear infinite;
      z-index: 2;
      pointer-events: none;
    }

    .hero-orbit-item-one {
      --orbit-size: 430px;
      --orbit-duration: 34s;
    }

    .hero-orbit-item-two {
      --orbit-size: 340px;
      --orbit-duration: 42s;
      animation-direction: reverse;
    }

    .hero-orbit-item-three {
      --orbit-size: 255px;
      --orbit-duration: 30s;
    }

    .hero-orbit-card {
      position: absolute;
      left: 50%;
      top: 0;
      width: min(245px, 48vw);
      transform: translate(-50%, -50%);
      pointer-events: auto;
    }

    .hero-orbit-card-inner {
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 76px;
      padding: 13px 15px;
      border: 1px solid rgba(59,130,246,.28);
      border-radius: 15px;
      background: rgba(15,23,42,.72);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      box-shadow:
        0 12px 30px rgba(0,0,0,.22),
        0 0 24px rgba(37,99,235,.07),
        inset 0 1px 0 rgba(255,255,255,.045);
      transform: rotate(0deg);
      animation: heroCardCounterRotate var(--orbit-duration) linear infinite;
      transition: border-color .25s ease, box-shadow .25s ease, background .25s ease;
    }

    .hero-orbit-item-two .hero-orbit-card-inner {
      animation-direction: reverse;
    }

    .hero-orbit-card:hover .hero-orbit-card-inner {
      border-color: rgba(59,130,246,.50);
      background: rgba(15,23,42,.86);
      box-shadow:
        0 16px 34px rgba(0,0,0,.26),
        0 0 28px rgba(37,99,235,.14),
        inset 0 1px 0 rgba(255,255,255,.06);
    }

    .hero-orbit-card-icon {
      width: 38px;
      height: 38px;
      flex: 0 0 38px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 11px;
      color: #93c5fd;
      background: rgba(37,99,235,.11);
      border: 1px solid rgba(59,130,246,.22);
    }

    .hero-orbit-card-icon svg {
      width: 20px;
      height: 20px;
    }

    .hero-orbit-card-icon.success {
      color: #4ade80;
      background: rgba(34,197,94,.09);
      border-color: rgba(34,197,94,.20);
    }

    .hero-orbit-card-copy {
      min-width: 0;
      text-align: left;
    }

    .hero-orbit-card-title {
      display: block;
      margin: 0 0 3px;
      color: var(--text-primary);
      font-size: .86rem;
      line-height: 1.25;
      font-weight: 750;
    }

    .hero-orbit-card-subtitle {
      display: block;
      color: var(--text-secondary);
      font-size: .68rem;
      line-height: 1.4;
    }

    @keyframes heroCardOrbit {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

    @keyframes heroCardCounterRotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }

    .hero-orbit-stage:has(.hero-orbit-card:hover) .hero-orbit-item,
    .hero-orbit-stage:has(.hero-orbit-card:hover) .hero-orbit-card-inner {
      animation-play-state: paused;
    }

    @media (prefers-reduced-motion: reduce) {
      .hero-orbit-item,
      .hero-orbit-card-inner {
        animation: none !important;
      }
    }

    [data-theme="light"] .hero-orbit-card-inner {
      background: rgba(255,255,255,.78);
      box-shadow:
        0 12px 28px rgba(15,23,42,.10),
        0 0 24px rgba(37,99,235,.06),
        inset 0 1px 0 rgba(255,255,255,.72);
    }

    @media (max-width: 900px) {
      .hero-orbit-stage {
        width: min(100%, 480px);
        height: auto;
      }

      .hero-orbit-ring-one,
      .hero-orbit-item-one {
        --ring-size: 390px;
        --orbit-size: 390px;
      }

      .hero-orbit-ring-two,
      .hero-orbit-item-two {
        --ring-size: 310px;
        --orbit-size: 310px;
      }

      .hero-orbit-ring-three,
      .hero-orbit-item-three {
        --ring-size: 235px;
        --orbit-size: 235px;
      }
    }

    @media (max-width: 640px) {
      .hero-visual {
        width: 100%;
      }

      .hero-orbit-stage {
        width: 100%;
        min-height: 0;
        aspect-ratio: auto;
        display: grid;
        gap: 12px;
        padding: 4px 0;
      }

      .hero-orbit-ring,
      .hero-orbit-center {
        display: none;
      }

      .hero-orbit-item,
      .hero-orbit-item-one,
      .hero-orbit-item-two,
      .hero-orbit-item-three {
        position: static;
        width: 100%;
        height: auto;
        transform: none;
        animation: none;
      }

      .hero-orbit-card {
        position: static;
        width: 100%;
        transform: none;
      }

      .hero-orbit-card-inner,
      .hero-orbit-item-two .hero-orbit-card-inner {
        animation: none;
        min-height: 68px;
        padding: 12px 13px;
      }

      .hero-orbit-card-title {
        font-size: .84rem;
      }

      .hero-orbit-card-subtitle {
        font-size: .67rem;
      }

      .hero-orbit-card-icon {
        width: 35px;
        height: 35px;
        flex-basis: 35px;
      }
    }

    .nav-link:hover {
      color: var(--accent-blue);
    }

    .hero-sec {
      margin-top: 0 !important;
      padding: 40px 0;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
      align-items: center;
    }

    @media (min-width: 901px) {
      .hero-sec {
        padding-top: 18px !important;
      }

      .hero-content {
        padding-top: 0 !important;
      }

      .hero-grid {
        grid-template-columns: 1.1fr 0.9fr;
      }
    }

    .roadmap-section {
      overflow: hidden;
    }

    .roadmap-timeline {
      position: relative;
      max-width: 1040px;
      margin: 0 auto;
      padding: 8px 0 6px;
    }

    .roadmap-line {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 3px;
      transform: translateX(-50%);
      background: linear-gradient(180deg, #2563eb 0%, #22c55e 55%, #8b5cf6 100%);
      border-radius: 999px;
      opacity: .9;
    }

    .roadmap-step {
      position: relative;
      width: 50%;
      box-sizing: border-box;
      padding: 26px 54px;
    }

    .roadmap-step-left {
      padding-left: 0;
      padding-right: 54px;
    }

    .roadmap-step-right {
      margin-left: 50%;
      padding-left: 54px;
      padding-right: 0;
    }

    .roadmap-card {
      position: relative;
      padding: 28px 30px;
      min-height: 170px;
      box-sizing: border-box;
    }

    .roadmap-step-number {
      position: absolute;
      top: 50%;
      right: -72px;
      transform: translateY(-50%);
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-main);
      color: #fff;
      border: 3px solid var(--accent-blue);
      box-shadow: 0 0 0 6px var(--bg-main), 0 0 18px rgba(37,99,235,.35);
      font-weight: 800;
      z-index: 2;
    }

    .roadmap-step-right .roadmap-step-number {
      left: -72px;
      right: auto;
      border-color: #22c55e;
      box-shadow: 0 0 0 6px var(--bg-main), 0 0 18px rgba(34,197,94,.25);
    }

    .roadmap-kicker,
    .roadmap-cta-label {
      display: inline-block;
      color: var(--accent-blue);
      font-size: .72rem;
      font-weight: 800;
      letter-spacing: 1.2px;
      margin-bottom: 9px;
    }

    .roadmap-card h3 {
      margin: 0 0 10px;
      color: var(--text-primary);
      font-size: 1.25rem;
    }

    .roadmap-card p {
      margin: 0;
      color: var(--text-secondary);
      line-height: 1.7;
      font-size: .92rem;
    }

    .roadmap-step-right .roadmap-kicker {
      color: #22c55e;
    }

    .roadmap-cta {
      max-width: 1040px;
      margin: 42px auto 0;
      padding: 22px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 22px;
      flex-wrap: wrap;
    }

    .roadmap-cta h3 {
      margin: 0 0 5px;
      color: var(--text-primary);
      font-size: 1.15rem;
    }

    .roadmap-cta p {
      margin: 0;
      color: var(--text-secondary);
      font-size: .9rem;
      line-height: 1.5;
    }

    .roadmap-cta .roadmap-cta-label {
      margin-bottom: 5px;
      color: #22c55e;
    }

    /* --- CONSULTATION SECTION: lighter, calmer visual treatment --- */
    .consultation-section {
      background: linear-gradient(180deg, #111c2d 0%, #0f1a2a 100%) !important;
      border-top: 1px solid rgba(59, 130, 246, 0.08);
      border-bottom: 1px solid rgba(59, 130, 246, 0.08);
    }

    .consultation-panel {
      background: #172337 !important;
      border: 1px solid #2a3a52 !important;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18) !important;
    }

    [data-theme="light"] .consultation-section {
      background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%) !important;
      border-top: 1px solid #e2e8f0;
      border-bottom: 1px solid #e2e8f0;
    }

    [data-theme="light"] .consultation-panel {
      background: #ffffff !important;
      border-color: #e2e8f0 !important;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07) !important;
    }

    .client-success-section {
      background: var(--bg-alt);
      padding: 84px 0 90px;
    }

    .client-success-shell {
      max-width: 980px;
      margin: 0 auto;
    }

    .client-success-panel {
      padding: 48px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .client-success-panel::before {
      content: '';
      position: absolute;
      width: 260px;
      height: 260px;
      border-radius: 50%;
      border: 1px solid rgba(59,130,246,.14);
      top: -150px;
      right: -90px;
    }

    .client-success-panel::after {
      content: '';
      position: absolute;
      width: 190px;
      height: 190px;
      border-radius: 50%;
      border: 1px solid rgba(34,197,94,.12);
      bottom: -120px;
      left: -70px;
    }

    .client-success-quote-mark {
      color: rgba(59,130,246,.28);
      font-size: 4rem;
      line-height: .7;
      font-weight: 800;
      margin-bottom: 18px;
    }

    .client-success-panel h3 {
      position: relative;
      z-index: 1;
      margin: 0 auto 16px;
      max-width: 760px;
      color: var(--text-primary);
      font-size: clamp(1.35rem, 2.4vw, 2rem);
      line-height: 1.35;
    }

    .client-success-panel > p {
      position: relative;
      z-index: 1;
      max-width: 700px;
      margin: 0 auto;
      color: var(--text-secondary);
      line-height: 1.75;
    }

    .client-success-stats {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      max-width: 720px;
      margin: 32px auto 0;
    }

    .client-success-stat {
      padding: 18px 14px;
      background: rgba(37,99,235,.06);
      border: 1px solid var(--border-color);
      border-radius: 12px;
    }

    .client-success-stat strong {
      display: block;
      color: var(--text-primary);
      font-size: 1.15rem;
      margin-bottom: 4px;
    }

    .client-success-stat span {
      color: var(--text-muted);
      font-size: .78rem;
    }

    footer {
      background: var(--bg-alt) !important;
      border-top: 1px solid var(--border-color) !important;
      padding: 50px 0 25px 0;
      color: var(--text-secondary);
    }

    footer > .container:first-child {
      grid-template-columns: 1.15fr .85fr 1.15fr 1.35fr !important;
      column-gap: 48px !important;
      row-gap: 32px !important;
      align-items: start !important;
    }

    footer > .container:first-child > div {
      min-width: 0;
    }

    .office-support-block {
      min-width: 0;
    }

    .office-support-block p {
      margin-top: 0;
    }

    .office-support-block .office-email {
      display: inline-block;
      max-width: 100%;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .flag-icon {
      width: 20px;
      height: 14px;
      object-fit: cover;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }

    .country-pathway-visual {
      width: 100%;
      height: auto;
      min-height: 0;
      aspect-ratio: 16 / 10;
      position: relative;
      overflow: hidden;
      border-radius: 14px;
      border: 1px solid var(--border-color);
      background: #ffffff;
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
    }

    .country-pathway-visual img.country-pathway-main-image {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      object-fit: cover;
    }

    .country-image-wrapper {
      display: block !important;
      width: 100%;
      min-width: 0;
    }

    .country-why-card {
      display: block !important;
      visibility: visible !important;
      height: auto !important;
      min-height: 0 !important;
      overflow: visible !important;
      width: 100%;
      margin-top: 14px;
      padding: 22px 22px 20px;
      border: 1px solid var(--border-color);
      border-radius: 14px;
      background: var(--bg-card);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
      position: relative;
      z-index: 1;
    }

    .country-why-kicker {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
      color: var(--accent-blue);
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }

    .country-why-kicker .flag-icon {
      width: 22px;
      height: 15px;
    }

    .country-why-card h4 {
      display: block !important;
      visibility: visible !important;
      margin: 0 0 14px;
      color: var(--text-primary) !important;
      font-size: 1.25rem;
      line-height: 1.25;
    }

    .country-why-list {
      display: grid !important;
      visibility: visible !important;
      gap: 11px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .country-why-list li {
      display: grid !important;
      visibility: visible !important;
      grid-template-columns: 20px minmax(0, 1fr);
      gap: 9px;
      align-items: start;
      color: var(--text-secondary) !important;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .country-why-list li::before {
      content: '✓';
      width: 20px;
      height: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(34, 197, 94, 0.12);
      border: 1px solid rgba(34, 197, 94, 0.28);
      color: #22c55e;
      font-size: 0.72rem;
      font-weight: 900;
    }

    .country-pathway-badge {
      position: absolute;
      top: 16px;
      left: 16px;
      z-index: 2;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 14px;
      border-radius: 999px;
      background: rgba(7, 12, 22, 0.86);
      color: #ffffff;
      border: 1px solid rgba(255,255,255,0.16);
      box-shadow: 0 8px 18px rgba(0,0,0,0.22);
      backdrop-filter: blur(7px);
      -webkit-backdrop-filter: blur(7px);
      font-weight: 700;
      line-height: 1;
    }

    .country-pathway-badge .flag-icon {
      width: 25px;
      height: 17px;
      flex: 0 0 auto;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 24px;
      height: 18px;
      cursor: pointer;
      z-index: 1002;
    }

    .hamburger span {
      display: block;
      height: 2px;
      width: 100%;
      background-color: var(--text-primary);
      border-radius: 2px;
      transition: all 0.3s ease;
    }




    /* --- PROFESSIONAL FOOTER UPDATE --- */
    .site-footer {
      background: var(--bg-alt) !important;
      border-top: 1px solid var(--border-color) !important;
      padding: 54px 0 0 !important;
      color: var(--text-secondary);
    }

    .footer-main-grid {
      display: grid !important;
      grid-template-columns: 1.15fr .85fr 1fr 1.25fr !important;
      gap: 42px 46px !important;
      align-items: start !important;
      margin-bottom: 42px !important;
    }

    .footer-brand-column,
    .footer-column {
      min-width: 0;
    }

    .footer-logo-link {
      display: inline-flex !important;
      align-items: center;
      text-decoration: none;
      margin-bottom: 16px;
    }

    .footer-logo-link .cloyster-logo-footer {
      width: 190px !important;
    }

    .footer-description {
      max-width: 290px;
      margin: 0;
      color: var(--text-muted);
      font-size: .9rem;
      line-height: 1.65;
    }

    .footer-heading {
      color: var(--text-primary) !important;
      font-size: 1rem !important;
      font-weight: 700 !important;
      margin: 0 0 16px !important;
      line-height: 1.3;
    }

    .footer-link-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: .9rem;
    }

    .footer-link-list a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color .2s ease;
    }

    .footer-link-list a:hover,
    .footer-destination-link:hover,
    .footer-contact-item a:hover,
    .footer-legal-links a:hover {
      color: var(--accent-blue) !important;
    }

    .footer-accent-link {
      color: var(--accent-blue) !important;
      font-weight: 600;
    }

    .footer-destination-list {
      gap: 11px;
    }

    .footer-destination-link {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      color: var(--text-secondary) !important;
      text-decoration: none;
      transition: color .2s ease;
    }

    .footer-destination-link .flag-icon {
      width: 20px;
      height: 14px;
      flex: 0 0 auto;
    }

    .footer-contact-item {
      display: grid;
      grid-template-columns: 20px minmax(0, 1fr);
      gap: 9px;
      align-items: start;
      margin: 0 0 11px;
      color: var(--text-muted);
      font-size: .88rem;
      line-height: 1.55;
    }

    .footer-contact-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      color: var(--accent-blue);
      margin-top: 1px;
    }

    .footer-contact-item a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color .2s ease;
    }

    .footer-green-link {
      color: #22c55e !important;
      font-weight: 500;
    }

    .footer-hours {
      margin: 14px 0 0;
      color: var(--text-muted);
      font-size: .82rem;
      line-height: 1.5;
    }

    .footer-connect-block {
      grid-column: 1 / -1;
      border-top: 1px solid var(--border-color);
      padding-top: 26px;
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 28px;
    }

    .footer-connect-header {
      display: flex;
      align-items: center;
      gap: 24px;
      min-width: 0;
    }

    .footer-connect-kicker {
      display: block;
      color: var(--accent-blue);
      font-size: .68rem;
      font-weight: 800;
      letter-spacing: 1.25px;
      margin-bottom: 5px;
    }

    .footer-connect-heading {
      margin-bottom: 0 !important;
    }

    .footer-social-links {
      display: flex;
      gap: 8px;
      margin: 0 !important;
    }

    .footer-qr-grid {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .footer-qr-compact {
      display: flex;
      align-items: center;
      gap: 11px;
      width: 190px;
      min-height: 74px;
      padding: 8px 10px;
      border: 1px solid var(--border-color);
      background: var(--bg-card);
      border-radius: 12px;
      color: inherit;
      text-decoration: none;
      transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
    }

    .footer-qr-compact:hover {
      transform: translateY(-2px);
      border-color: rgba(59,130,246,.45);
      box-shadow: 0 10px 24px rgba(0,0,0,.14);
    }

    .footer-qr-compact img {
      width: 58px !important;
      height: 58px !important;
      object-fit: contain !important;
      background: #fff !important;
      border-radius: 7px !important;
      padding: 3px !important;
      flex: 0 0 auto;
    }

    .footer-qr-compact span {
      min-width: 0;
    }

    .footer-qr-compact strong,
    .footer-qr-compact small {
      display: block;
    }

    .footer-qr-compact strong {
      color: var(--text-primary);
      font-size: .82rem;
      line-height: 1.3;
      margin-bottom: 3px;
    }

    .footer-qr-compact small {
      color: var(--text-muted);
      font-size: .72rem;
      line-height: 1.35;
    }

    .footer-bottom {
      width: 100%;
      border-top: 1px solid var(--border-color);
    }

    .footer-bottom-inner {
      min-height: 68px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding-top: 16px;
      padding-bottom: 16px;
    }

    .footer-bottom-inner p {
      margin: 0;
      color: var(--text-muted);
      font-size: .78rem;
      line-height: 1.5;
    }

    .footer-legal-button {
      appearance: none;
      border: 0;
      padding: 0;
      margin: 0;
      background: transparent;
      color: inherit;
      font: inherit;
      cursor: pointer;
      text-decoration: none;
      transition: color .18s ease;
    }

    .footer-legal-button:hover,
    .footer-legal-button:focus-visible {
      color: var(--accent-blue);
      outline: none;
    }

    .legal-modal-overlay {
      overscroll-behavior: contain;
    }

    .footer-legal-links {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      gap: 9px;
      flex-wrap: wrap;
      font-size: .78rem;
    }

    .footer-legal-links a {
      color: var(--text-muted);
      text-decoration: none;
      transition: color .2s ease;
    }

    .footer-legal-links span {
      color: var(--border-color);
    }

    [data-theme="light"] .footer-contact-item,
    [data-theme="light"] .footer-description,
    [data-theme="light"] .footer-hours,
    [data-theme="light"] .footer-bottom-inner p,
    [data-theme="light"] .footer-legal-links a {
      color: var(--text-muted);
    }

    @media (max-width: 1000px) {
      .footer-main-grid {
        grid-template-columns: 1.1fr .9fr 1fr !important;
        gap: 34px 30px !important;
      }

      .office-support-block {
        grid-column: 1 / -1;
      }

      .footer-connect-block {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 760px) {
      .site-footer {
        padding-top: 42px !important;
      }

      .footer-main-grid {
        grid-template-columns: 1fr 1fr !important;
        gap: 32px 24px !important;
      }

      .footer-brand-column {
        grid-column: 1 / -1;
      }

      .office-support-block,
      .footer-connect-block {
        grid-column: 1 / -1;
      }

      .footer-connect-block {
        grid-template-columns: 1fr;
        gap: 18px;
      }

      .footer-connect-header {
        justify-content: space-between;
      }

      .footer-qr-grid {
        width: 100%;
        flex-wrap: wrap;
      }

      .footer-qr-compact {
        flex: 1 1 180px;
      }

      .footer-bottom-inner {
        flex-direction: column;
        align-items: flex-start;
        padding-top: 18px;
        padding-bottom: 18px;
      }

      .footer-legal-links {
        justify-content: flex-start;
      }
    }

    @media (max-width: 520px) {
      .footer-main-grid {
        grid-template-columns: 1fr !important;
      }

      .footer-brand-column,
      .office-support-block,
      .footer-connect-block {
        grid-column: 1;
      }

      .footer-connect-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .footer-qr-grid {
        flex-direction: column;
        align-items: stretch;
      }

      .footer-qr-compact {
        width: 100%;
      }
    }

    /* --- SOCIAL + TEAM UPDATE --- */
    .team-section {
      background: var(--bg-alt);
      padding: 84px 0 90px;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 22px;
      max-width: 980px;
      margin: 0 auto;
    }

    .team-card {
      padding: 26px;
      text-align: center;
      transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
    }

    .team-card:hover {
      transform: translateY(-4px);
      border-color: rgba(59,130,246,.45);
      box-shadow: 0 18px 40px rgba(0,0,0,.22);
    }

    .team-avatar {
      width: 112px;
      height: 112px;
      border-radius: 50%;
      margin: 0 auto 18px;
      object-fit: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(37,99,235,.22), rgba(34,197,94,.16));
      border: 2px solid rgba(59,130,246,.35);
      color: var(--text-primary);
      font-size: 2rem;
      font-weight: 800;
    }

    .team-social-link,
    .social-icon-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border-radius: 10px;
      border: 1px solid var(--border-color);
      background: var(--bg-main);
      color: var(--text-secondary);
      text-decoration: none;
      transition: all .2s ease;
    }

    .team-social-link:hover,
    .social-icon-link:hover {
      color: var(--accent-blue);
      border-color: var(--accent-blue);
      transform: translateY(-2px);
    }

    .footer-social-block {
      min-width: 0;
    }

    .footer-social-links {
      display: flex;
      gap: 9px;
      margin: 0 0 16px;
    }

    .instagram-qr-card {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 12px;
      border: 1px solid var(--border-color);
      background: var(--bg-card);
      border-radius: 14px;
      max-width: 330px;
    }

    .footer-qr-link {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
    }

    .footer-qr-link:hover {
      transform: translateY(-2px);
      border-color: rgba(59,130,246,.45);
      box-shadow: 0 14px 30px rgba(0,0,0,.18);
    }

    .instagram-qr-card img {
      width: 92px;
      height: 92px;
      object-fit: contain;
      background: #fff;
      border-radius: 8px;
      padding: 5px;
      flex: 0 0 auto;
    }

    .instagram-qr-card strong {
      display: block;
      color: var(--text-primary);
      margin-bottom: 5px;
      font-size: .92rem;
    }

    .instagram-qr-card span {
      color: var(--text-muted);
      font-size: .78rem;
      line-height: 1.45;
    }

    .google-qr-card {
      margin-top: 12px;
    }

    .google-qr-card img {
      width: 92px !important;
      height: 92px !important;
      object-fit: contain !important;
      background: #fff !important;
      border-radius: 8px !important;
      padding: 5px !important;
    }

    /* --- RESPONSIVE BREAKPOINTS & MOBILE FIXES --- */

    @media (max-width: 900px) {
      .hamburger {
        display: flex;
      }

      .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: var(--bg-card);
        flex-direction: column;
        padding: 80px 30px 30px;
        box-shadow: -5px 0 25px rgba(0,0,0,0.5);
        transition: right 0.3s ease;
        align-items: flex-start !important;
        z-index: 1001;
      }

      .nav-menu.open {
        right: 0;
      }

      .nav-actions .btn-primary {
        display: none;
      }
    }

    @media (max-width: 760px) {
      .container {
        padding-left: 16px;
        padding-right: 16px;
      }

      .country-pathway-visual {
        height: auto !important;
        min-height: 0 !important;
        aspect-ratio: 16 / 10;
      }

      .country-why-card {
        padding: 19px 17px 18px;
      }

      .country-why-card h4 {
        font-size: 1.12rem;
      }

      .country-why-list li {
        font-size: 0.84rem;
      }

      .country-pathway-badge {
        top: 12px;
        left: 12px;
        padding: 8px 11px;
        font-size: 0.84rem;
      }

      /*
       * MOBILE ROADMAP
       * Keep the desktop left/right alternating layout on phones.
       * The center line stays in the middle and every numbered circle
       * is anchored directly to that line. Cards never become 100% wide,
       * so the visual rhythm remains left -> right -> left -> right.
       */
      .roadmap-section {
        overflow: hidden;
      }

      .roadmap-timeline {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        padding: 4px 0 8px;
        overflow: visible;
      }

      .roadmap-line {
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        top: 0;
        bottom: 0;
      }

      .roadmap-step,
      .roadmap-step-right {
        width: 50%;
        margin-left: 0;
        box-sizing: border-box;
        padding: 14px 0;
      }

      .roadmap-step-left {
        padding-left: 0;
        padding-right: 12px;
      }

      .roadmap-step-right {
        margin-left: 50%;
        padding-left: 12px;
        padding-right: 0;
      }

      .roadmap-card {
        width: 100%;
        min-height: 0;
        padding: 18px 16px;
        overflow-wrap: anywhere;
      }

      .roadmap-step-number,
      .roadmap-step-right .roadmap-step-number {
        top: 50%;
        transform: translateY(-50%);
        left: auto;
        right: -19px;
        width: 34px;
        height: 34px;
        min-width: 34px;
        font-size: 0.82rem;
        border-width: 2px;
        box-shadow: 0 0 0 4px var(--bg-main), 0 0 14px rgba(37,99,235,.28);
      }

      .roadmap-step-right .roadmap-step-number {
        left: -19px;
        right: auto;
        box-shadow: 0 0 0 4px var(--bg-main), 0 0 14px rgba(34,197,94,.22);
      }

      .roadmap-kicker {
        font-size: 0.62rem;
        letter-spacing: 0.9px;
        margin-bottom: 6px;
      }

      .roadmap-card h3 {
        font-size: 0.98rem;
        line-height: 1.3;
        margin-bottom: 7px;
      }

      .roadmap-card p {
        font-size: 0.76rem;
        line-height: 1.5;
      }

      .roadmap-cta {
        align-items: stretch;
      }

      .roadmap-cta .country-next-step-actions {
        width: 100%;
      }

      .roadmap-cta .country-next-step-actions .btn {
        flex: 1 1 100%;
        justify-content: center;
      }

      .client-success-panel {
        padding: 34px 22px;
      }

      .client-success-stats {
        grid-template-columns: 1fr;
      }

      .country-stats-row {
        grid-template-columns: 1fr !important;
      }
    }

    /* Extra-small phones: keep the same alternating timeline while
       giving cards a little more usable text space. */
    @media (max-width: 420px) {
      .roadmap-step-left {
        padding-right: 9px;
      }

      .roadmap-step-right {
        padding-left: 9px;
      }

      .roadmap-card {
        padding: 16px 13px;
        border-radius: 12px;
      }

      .roadmap-step-number,
      .roadmap-step-right .roadmap-step-number {
        width: 32px;
        height: 32px;
        min-width: 32px;
        right: -18px;
        font-size: 0.76rem;
      }

      .roadmap-step-right .roadmap-step-number {
        left: -18px;
        right: auto;
      }

      .roadmap-card h3 {
        font-size: 0.9rem;
      }

      .roadmap-card p {
        font-size: 0.71rem;
        line-height: 1.45;
      }

      .roadmap-kicker {
        font-size: 0.58rem;
      }
    }

    @media (max-width: 340px) {
      .roadmap-step-left {
        padding-right: 7px;
      }

      .roadmap-step-right {
        padding-left: 7px;
      }

      .roadmap-card {
        padding: 14px 11px;
      }

      .roadmap-card h3 {
        font-size: 0.84rem;
      }

      .roadmap-card p {
        font-size: 0.67rem;
      }

      .roadmap-step-number,
      .roadmap-step-right .roadmap-step-number {
        width: 30px;
        height: 30px;
        min-width: 30px;
        right: -17px;
      }

      .roadmap-step-right .roadmap-step-number {
        left: -17px;
        right: auto;
      }
    }

    /* DESTINATION EXPLORER — CLEAN TWO-COLUMN LAYOUT */
    .country-destination-shell {
      width: 100%;
      overflow: visible !important;
    }

    .country-display-grid {
      width: 100%;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 30px;
      align-items: start;
      overflow: visible !important;
    }

    .country-image-wrapper {
      width: 100%;
      min-width: 0;
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      overflow: visible !important;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    .country-pathway-visual {
      flex: 0 0 auto;
    }

    .destination-why-panel {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      width: 100% !important;
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      overflow: visible !important;
      position: relative;
      margin-top: 14px;
      padding: 22px 22px 20px;
      box-sizing: border-box;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 14px;
      box-shadow: 0 10px 24px rgba(0,0,0,.16);
    }

    .destination-why-panel h4 {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      margin: 0 0 14px;
      padding: 0;
      color: var(--text-primary) !important;
      font-size: 1.25rem;
      line-height: 1.3;
      font-weight: 800;
    }

    .destination-why-panel ul {
      display: grid !important;
      visibility: visible !important;
      opacity: 1 !important;
      gap: 11px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .destination-why-panel li {
      display: grid !important;
      visibility: visible !important;
      opacity: 1 !important;
      grid-template-columns: 20px minmax(0, 1fr);
      gap: 9px;
      align-items: start;
      margin: 0;
      padding: 0;
      color: var(--text-secondary) !important;
      font-size: .9rem;
      line-height: 1.5;
    }

    .country-info-box {
      width: 100%;
      min-width: 0;
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      overflow: visible !important;
    }

    @media (min-width: 901px) {
      .country-destination-shell {
        padding: 30px !important;
      }

      .country-display-grid {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
        align-items: start !important;
      }
    }

    @media (max-width: 900px) {
      .country-destination-shell {
        padding: 24px !important;
      }

      .country-display-grid {
        grid-template-columns: 1fr !important;
      }
    }

    @media (max-width: 640px) {

      .team-section {
        padding: 64px 0 70px;
      }

      .team-grid {
        grid-template-columns: 1fr;
        max-width: 420px;
      }

      .instagram-qr-card {
        max-width: 100%;
      }

      .hero-title {
        font-size: 2.1rem !important;
      }

      .hero-buttons {
        flex-direction: column;
        width: 100%;
      }

      .hero-buttons .btn {
        width: 100%;
        justify-content: center;
      }

      .cloyster-logo-image {
        width: 150px;
        height: auto;
      }

      .nav-container .logo-link {
        min-width: 150px;
        margin-right: 0;
      }

      .cloyster-logo-footer {
        width: 175px;
        height: auto;
      }

      .hero-trust-line {
        justify-content: flex-start;
        font-size: 0.78rem;
        gap: 7px 12px;
      }

      .country-next-step {
        align-items: stretch;
      }

      .country-next-step-actions {
        width: 100%;
        flex-direction: column;
      }

      .country-next-step-actions .btn {
        width: 100%;
        justify-content: center;
      }

      .announcement-bar {
        min-height: 42px;
        padding: 8px 12px !important;
        gap: 3px;
        font-size: 0.8rem !important;
      }

      .navbar {
        position: sticky !important;
        top: 0 !important;
      }

      footer > .container:first-child {
        grid-template-columns: 1fr !important;
        gap: 26px !important;
      }

      .office-support-block p {
        max-width: 100%;
      }

      .office-support-block .office-email {
        font-size: 13px;
      }

      .phone-input-row {
        grid-template-columns: 85px minmax(0, 1fr) !important;
      }

      .whatsapp-float {
        width: 48px !important;
        height: 48px !important;
        bottom: 20px !important;
        right: 20px !important;
      }
      
      .whatsapp-float svg {
        width: 24px;
        height: 24px;
      }
    }

    /* --- LIGHT/DAY MODE POLISH --- */
    [data-theme="light"] body {
      background: var(--bg-main) !important;
      color: var(--text-primary) !important;
    }

    [data-theme="light"] .navbar,
    [data-theme="light"] .nav-menu {
      background: #ffffff !important;
      color: var(--text-primary) !important;
    }

    [data-theme="light"] .nav-link {
      color: #334155 !important;
    }

    [data-theme="light"] .nav-link:hover {
      color: var(--accent-blue) !important;
    }

    [data-theme="light"] .hero-sec,
    [data-theme="light"] .roadmap-section,
    [data-theme="light"] .team-section {
      background: #f8fafc !important;
    }

    [data-theme="light"] .hero-mesh {
      opacity: .18 !important;
    }

    [data-theme="light"] .glass-panel,
    [data-theme="light"] .country-why-card,
    [data-theme="light"] .destination-why-panel,
    [data-theme="light"] .roadmap-card,
    [data-theme="light"] .roadmap-cta,
    [data-theme="light"] .team-card {
      background: #ffffff !important;
      border-color: #e2e8f0 !important;
      box-shadow: 0 10px 25px -5px rgba(15, 23, 42, .08) !important;
    }

    [data-theme="light"] .select-control,
    [data-theme="light"] input,
    [data-theme="light"] textarea,
    [data-theme="light"] select {
      background: #ffffff !important;
      color: #0f172a !important;
      border-color: #cbd5e1 !important;
    }

    [data-theme="light"] input::placeholder,
    [data-theme="light"] textarea::placeholder {
      color: #64748b !important;
      opacity: 1 !important;
    }

    [data-theme="light"] .country-stats-row .c-stat-card,
    [data-theme="light"] .c-stat-card {
      background: #f8fafc !important;
      border-color: #e2e8f0 !important;
    }

    [data-theme="light"] .country-pathway-visual {
      background: #ffffff !important;
      border-color: #e2e8f0 !important;
      box-shadow: 0 10px 28px rgba(15, 23, 42, .08) !important;
    }

    [data-theme="light"] .country-pathway-badge {
      background: rgba(15, 23, 42, .86) !important;
      color: #ffffff !important;
    }

    [data-theme="light"] .country-next-step-actions .btn-secondary,
    [data-theme="light"] .roadmap-cta .btn-secondary {
      background: #ffffff !important;
      color: #0f172a !important;
      border-color: #cbd5e1 !important;
    }

    [data-theme="light"] footer {
      background: #f1f5f9 !important;
      color: #334155 !important;
      border-top-color: #e2e8f0 !important;
    }

    [data-theme="light"] footer h4 {
      color: #0f172a !important;
    }

    [data-theme="light"] footer a,
    [data-theme="light"] footer p {
      color: #475569;
    }

    [data-theme="light"] .consultation-section {
      background: linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%) !important;
    }

    [data-theme="light"] .consultation-panel {
      background: #ffffff !important;
      border-color: #e2e8f0 !important;
    }

    [data-theme="light"] .client-success-section {
      background: #f1f5f9 !important;
    }

    [data-theme="light"] .client-success-stat {
      background: rgba(37, 99, 235, .045) !important;
      border-color: #e2e8f0 !important;
    }

    [data-theme="light"] .modal-overlay {
      background-color: rgba(15, 23, 42, .45) !important;
    }

    @media (max-width: 900px) {
      [data-theme="light"] .nav-menu {
        box-shadow: -5px 0 25px rgba(15, 23, 42, .15) !important;
      }
    }


    /* --- DESTINATION EXPLORER: MOBILE-FIRST CONTENT ORDER --- */
    .country-title,
    .country-desc,
    .country-stats-row,
    .country-pathways-list,
    .country-next-step {
      position: relative;
    }

    .country-stats-row {
      align-items: stretch;
    }

    .c-stat-card {
      min-width: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 88px;
    }

    .c-stat-label {
      color: var(--text-muted);
      font-size: 0.68rem;
      line-height: 1.35;
      letter-spacing: 0.9px;
      font-weight: 700;
    }

    .c-stat-value {
      margin-top: 7px;
      color: var(--accent-blue);
      font-size: 1.05rem;
      line-height: 1.2;
      font-weight: 800;
      white-space: normal;
    }

    .country-pathways-list h4 {
      margin: 0 0 12px;
      color: var(--text-primary);
      font-size: 0.9rem;
      line-height: 1.35;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .pathway-item {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
      margin-bottom: 8px;
      padding: 10px 12px;
      color: var(--text-secondary);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      background: rgba(6, 11, 19, 0.24);
    }

    .pathway-check {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      flex: 0 0 22px;
      color: var(--accent-blue);
      border-radius: 50%;
      background: rgba(37, 99, 235, 0.10);
      border: 1px solid rgba(59, 130, 246, 0.20);
    }

    .pathway-check svg {
      width: 14px;
      height: 14px;
    }

    .pathway-name {
      flex: 1 1 auto;
      min-width: 0;
      line-height: 1.45;
    }

    .pathway-tag {
      flex: 0 0 auto;
      padding: 3px 8px;
      border-radius: 999px;
      background: rgba(37, 99, 235, 0.10);
      color: var(--accent-blue);
      font-size: 0.7rem;
      font-weight: 700;
      white-space: nowrap;
    }

    .country-next-step {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-top: 22px;
      padding-top: 20px;
      border-top: 1px solid var(--border-color);
    }

    .country-next-step-title {
      margin: 0 0 5px;
      color: var(--text-primary);
      font-size: 0.98rem;
      font-weight: 700;
    }

    .country-next-step-copy {
      margin: 0;
      color: var(--text-muted);
      font-size: 0.8rem;
      line-height: 1.5;
    }

    .country-next-step-actions {
      display: flex;
      flex: 0 0 auto;
    }

    .country-next-step-actions .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      background: var(--accent-blue) !important;
      color: #fff !important;
      border: 0 !important;
      padding: 11px 16px !important;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 700;
      white-space: nowrap;
    }

    .country-next-step-actions .btn:hover {
      background: var(--accent-hover) !important;
    }

    [data-theme="light"] .pathway-item {
      background: #f8fafc;
    }

    @media (max-width: 900px) {
      .destination-explorer-panel {
        padding: 24px !important;
      }

      .country-display-grid {
        display: flex !important;
        flex-direction: column !important;
        gap: 0 !important;
      }

      .country-image-wrapper,
      .country-info-box {
        display: contents !important;
      }

      .country-title { order: 1; }
      .country-desc { order: 2; }
      .country-pathway-visual { order: 3; }
      .country-stats-row { order: 4; }
      .destination-why-panel { order: 5; }
      .country-pathways-list { order: 6; }
      .country-next-step { order: 7; }

      .country-title {
        width: 100%;
        margin-top: 0 !important;
        margin-bottom: 9px !important;
      }

      .country-desc {
        width: 100%;
        margin-bottom: 18px !important;
      }

      .country-pathway-visual {
        width: 100%;
        height: auto !important;
        min-height: 0 !important;
        aspect-ratio: 16 / 10;
        margin-bottom: 16px;
        border-radius: 14px;
      }

      .country-pathway-visual img.country-pathway-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .country-stats-row {
        width: 100%;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        gap: 8px !important;
        margin-bottom: 16px !important;
      }

      .c-stat-card {
        min-height: 82px;
        padding: 10px 7px !important;
        border-radius: 9px !important;
      }

      .c-stat-label {
        font-size: 0.62rem;
        letter-spacing: 0.65px;
      }

      .c-stat-value {
        font-size: 0.92rem;
        margin-top: 6px;
      }

      .destination-why-panel {
        width: 100% !important;
        min-height: 0 !important;
        margin: 0 0 18px !important;
        padding: 20px !important;
        box-shadow: none !important;
      }

      .destination-why-panel h4 {
        font-size: 1.15rem;
        margin-bottom: 13px;
      }

      .destination-why-panel ul {
        gap: 10px !important;
      }

      .destination-why-panel li {
        font-size: 0.88rem !important;
        line-height: 1.48 !important;
      }

      .country-pathways-list {
        width: 100%;
        margin-bottom: 0;
      }

      .pathway-item {
        padding: 10px;
        margin-bottom: 7px;
        align-items: flex-start;
      }

      .pathway-name {
        font-size: 0.86rem;
      }

      .pathway-tag {
        font-size: 0.65rem;
        padding: 3px 7px;
      }

      .country-next-step {
        width: 100%;
        align-items: stretch;
        flex-direction: column;
        gap: 14px;
        margin-top: 18px;
        padding-top: 18px;
      }

      .country-next-step-actions,
      .country-next-step-actions .btn {
        width: 100%;
      }

      .country-next-step-actions .btn {
        justify-content: center;
      }
    }

    @media (max-width: 479px) {
      .destination-explorer-panel {
        padding: 18px !important;
        border-radius: 14px;
      }

      .country-stats-row {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }

      .c-stat-card:last-child {
        grid-column: 1 / -1;
      }

      .country-pathway-badge {
        top: 12px;
        left: 12px;
        padding: 8px 11px;
        font-size: 0.86rem;
      }

      .country-pathway-badge .flag-icon {
        width: 22px;
        height: 15px;
      }

      .destination-why-panel {
        padding: 18px !important;
      }

      .pathway-item {
        display: grid;
        grid-template-columns: 22px minmax(0, 1fr);
        gap: 8px;
      }

      .pathway-tag {
        grid-column: 2;
        justify-self: start;
      }
    }
    /* ==========================================================
       FLUID RESPONSIVE SAFETY LAYER
       - Keeps all mobile content in normal document flow.
       - Uses auto sizing/aspect-ratio instead of fixed section heights.
       - Stacks multi-column content below the 768px breakpoint.
       - Preserves the existing desktop design above 768px.
       ========================================================== */

    @media (max-width: 767px) {
      html,
      body {
        width: 100%;
        max-width: 100%;
      }

      .container {
        width: 100%;
        max-width: 100%;
        padding-left: 16px !important;
        padding-right: 16px !important;
      }

      /* Prevent desktop positioning rules from creating mobile overlap. */
      .hero-grid,
      .country-display-grid,
      .footer-main-grid,
      .client-success-stats,
      .calc-grid,
      .team-grid {
        width: 100% !important;
        max-width: 100% !important;
      }

      .hero-grid {
        display: flex !important;
        flex-direction: column !important;
        gap: 28px !important;
        align-items: stretch !important;
      }

      .hero-content,
      .hero-visual {
        position: relative !important;
        width: 100% !important;
        min-width: 0 !important;
        max-width: 100% !important;
      }

      .hero-title,
      .section-title {
        font-size: clamp(1.85rem, 8vw, 2.35rem) !important;
        line-height: 1.12 !important;
        overflow-wrap: anywhere;
      }

      .hero-sec {
        padding: 28px 0 42px !important;
      }

      .hero-orbit-stage {
        width: 100% !important;
        max-width: 440px !important;
        height: auto !important;
        min-height: 0 !important;
        aspect-ratio: auto !important;
        margin: 0 auto !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 12px !important;
        padding: 0 !important;
      }

      /* Mobile orbit becomes normal-flow cards: no absolute overlap,
         no excessive vertical animation height, no hidden cards. */
      .hero-orbit-ring,
      .hero-orbit-center {
        display: none !important;
      }

      .hero-orbit-item,
      .hero-orbit-item-one,
      .hero-orbit-item-two,
      .hero-orbit-item-three {
        position: static !important;
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        min-height: 0 !important;
        transform: none !important;
        animation: none !important;
      }

      .hero-orbit-card {
        position: static !important;
        width: 100% !important;
        max-width: 100% !important;
        transform: none !important;
      }

      .hero-orbit-card-inner,
      .hero-orbit-item-two .hero-orbit-card-inner {
        width: 100% !important;
        min-height: fit-content !important;
        height: auto !important;
        animation: none !important;
        transform: none !important;
        padding: 12px 13px !important;
      }

      .hero-buttons {
        display: flex !important;
        flex-direction: column !important;
        width: 100% !important;
        gap: 10px !important;
      }

      .hero-buttons .btn {
        width: 100% !important;
        max-width: none !important;
        justify-content: center !important;
      }

      /* Country destination: one predictable vertical flow. */
      .country-destination-shell,
      .country-display-grid,
      .country-image-wrapper,
      .country-info-box {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        height: auto !important;
        min-height: 0 !important;
      }

      .country-display-grid {
        display: flex !important;
        flex-direction: column !important;
        gap: 0 !important;
      }

      .country-image-wrapper,
      .country-info-box {
        display: contents !important;
      }

      .country-title { order: 1; }
      .country-desc { order: 2; }
      .country-pathway-visual { order: 3; }
      .country-stats-row { order: 4; }
      .destination-why-panel { order: 5; }
      .country-pathways-list { order: 6; }
      .country-next-step { order: 7; }

      .country-pathway-visual {
        width: 100% !important;
        height: auto !important;
        min-height: 0 !important;
        aspect-ratio: 16 / 10;
        margin-bottom: 16px !important;
        overflow: visible !important;
      }

      .country-pathway-visual img.country-pathway-main-image {
        width: 100% !important;
        height: auto !important;
        aspect-ratio: 16 / 10;
        object-fit: cover;
        border-radius: 13px;
      }

      .country-stats-row {
        display: grid !important;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        gap: 8px !important;
        margin-bottom: 16px !important;
      }

      .c-stat-card {
        min-width: 0 !important;
        min-height: fit-content !important;
        height: auto !important;
        padding: 11px 7px !important;
      }

      .destination-why-panel,
      .country-why-card,
      .country-pathways-list {
        width: 100% !important;
        height: auto !important;
        min-height: fit-content !important;
        max-height: none !important;
        overflow: visible !important;
      }

      .destination-why-panel {
        margin-bottom: 18px !important;
      }

      .country-next-step {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 14px !important;
      }

      .country-next-step-actions {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
      }

      .country-next-step-actions .btn {
        width: 100% !important;
        justify-content: center !important;
      }

      /* All general feature/service/card grids become one column. */
      .team-grid,
      .client-success-stats,
      .calc-grid,
      .services-grid {
        display: grid !important;
        grid-template-columns: 1fr !important;
      }

      .team-card,
      .client-success-stat,
      .calculator-box,
      .roadmap-card {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        min-height: fit-content !important;
      }

      /* Roadmap: normal vertical flow on phones. */
      .roadmap-section,
      .roadmap-timeline {
        width: 100% !important;
        max-width: 100% !important;
        overflow: visible !important;
      }

      .roadmap-line {
        display: none !important;
      }

      .roadmap-step,
      .roadmap-step-left,
      .roadmap-step-right {
        width: 100% !important;
        margin-left: 0 !important;
        padding: 0 0 18px !important;
      }

      .roadmap-step-number,
      .roadmap-step-right .roadmap-step-number {
        position: static !important;
        width: 34px !important;
        height: 34px !important;
        min-width: 34px !important;
        margin-bottom: 10px !important;
        transform: none !important;
      }

      /* Footer remains readable without a two-column squeeze. */
      .footer-main-grid {
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 26px !important;
      }

      .footer-brand-column,
      .office-support-block,
      .footer-connect-block {
        grid-column: 1 !important;
        width: 100% !important;
        min-width: 0 !important;
      }

      .footer-connect-block {
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 18px !important;
      }

      .footer-connect-header {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 14px !important;
      }

      .footer-qr-grid {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 12px !important;
      }

      .footer-qr-compact {
        width: 100% !important;
        flex: 1 1 auto !important;
      }

      .footer-bottom-inner {
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 12px !important;
      }

      .footer-legal-links {
        width: 100% !important;
        flex-wrap: wrap !important;
        gap: 6px 8px !important;
      }

      /* Form controls: prevent narrow 320px layouts from overflowing. */
      .phone-input-row {
        display: grid !important;
        grid-template-columns: 82px minmax(0, 1fr) !important;
        width: 100% !important;
      }

      input,
      select,
      textarea,
      button {
        max-width: 100%;
      }

      textarea {
        min-height: 120px;
        height: auto !important;
      }

      /* Keep dropdowns and mobile navigation inside the viewport. */
      .nav-menu {
        max-width: min(280px, 86vw) !important;
        height: auto !important;
        min-height: 100dvh !important;
        overflow-y: auto !important;
      }

      .nav-dropdown-menu {
        position: static !important;
        width: 100% !important;
        min-width: 0 !important;
        transform: none !important;
        margin-top: 8px !important;
      }

      /* Avoid long words/URLs forcing horizontal scrolling. */
      h1,
      h2,
      h3,
      h4,
      p,
      a,
      span,
      li {
        overflow-wrap: anywhere;
      }

      .glass-panel {
        max-width: 100%;
      }
    }

    /* ==========================================================
       FINAL MOBILE RESPONSIVENESS OVERRIDES
       Desktop styles remain unchanged. Mobile uses normal document flow.
       ========================================================== */
    .mobile-nav-actions { display: none; }

    @media (max-width: 767px) {
      html,
      body,
      #root {
        width: 100% !important;
        max-width: 100vw !important;
        min-width: 0 !important;
        margin: 0 !important;
      }

      body { overflow-x: hidden !important; }

      main,
      section,
      header,
      nav,
      footer,
      .section-padding,
      .hero-sec,
      .roadmap-section,
      .team-section,
      .client-success-section {
        width: 100% !important;
        max-width: 100vw !important;
        min-width: 0 !important;
      }

      .container {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        margin-inline: auto !important;
        padding-inline: 16px !important;
      }

      /* Header: mobile shows only logo + hamburger. */
      .navbar {
        position: sticky !important;
        top: 0 !important;
        width: 100% !important;
        max-width: 100vw !important;
        z-index: 1300 !important;
      }

      .nav-container {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        padding: 9px 16px !important;
        gap: 10px !important;
      }

      .nav-container .logo-link {
        min-width: 0 !important;
        max-width: calc(100% - 52px) !important;
        margin-right: 0 !important;
        flex: 1 1 auto !important;
      }

      .cloyster-logo-image {
        width: clamp(124px, 38vw, 150px) !important;
        max-width: 100% !important;
        height: auto !important;
      }

      .nav-actions {
        display: flex !important;
        flex: 0 0 42px !important;
        min-width: 42px !important;
        margin-left: auto !important;
        gap: 0 !important;
        z-index: 1401 !important;
      }

      .nav-actions > .nav-consultation-btn,
      .nav-actions > .nav-eligibility-btn,
      .nav-actions > .theme-toggle {
        display: none !important;
      }

      .hamburger {
        display: flex !important;
        width: 42px !important;
        height: 42px !important;
        min-width: 42px !important;
        padding: 9px !important;
        justify-content: center !important;
        gap: 5px !important;
        z-index: 1402 !important;
      }

      .nav-menu {
        position: fixed !important;
        inset: 0 !important;
        width: 100% !important;
        max-width: 100vw !important;
        height: 100dvh !important;
        max-height: none !important;
        padding: 92px 16px 24px !important;
        display: none !important;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 6px !important;
        overflow-y: auto !important;
        overflow-x: hidden !important;
        background: var(--bg-card) !important;
        border: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        transform: none !important;
        opacity: 1 !important;
        visibility: visible !important;
        z-index: 1250 !important;
      }

      .nav-menu.open { display: flex !important; }

      .nav-menu .nav-link {
        width: 100% !important;
        padding: 13px 12px !important;
        line-height: 1.3 !important;
        white-space: normal !important;
      }

      .nav-menu .nav-dropdown-menu {
        position: static !important;
        width: 100% !important;
        min-width: 0 !important;
        max-width: 100% !important;
        margin-top: 5px !important;
        transform: none !important;
        box-shadow: none !important;
      }

      .nav-menu .nav-dropdown:not(.open) .nav-dropdown-menu {
        display: none !important;
      }

      .mobile-nav-actions {
        display: flex !important;
        flex-direction: column !important;
        width: 100% !important;
        gap: 10px !important;
        margin-top: 10px !important;
        padding-top: 14px !important;
        border-top: 1px solid var(--border-color) !important;
      }

      .mobile-nav-actions .nav-consultation-btn,
      .mobile-nav-actions .nav-eligibility-btn {
        width: 100% !important;
        min-width: 0 !important;
        justify-content: center !important;
        white-space: normal !important;
        text-align: center !important;
      }

      .mobile-nav-actions .theme-toggle {
        align-self: flex-start !important;
      }

      /* Announcement wraps instead of colliding with the header. */
      .announcement-bar {
        width: 100% !important;
        max-width: 100vw !important;
        min-height: 0 !important;
        padding: 8px 12px !important;
        display: flex !important;
        flex-wrap: wrap !important;
        justify-content: center !important;
        gap: 3px 6px !important;
        line-height: 1.35 !important;
        overflow: visible !important;
      }

      .announcement-bar a { white-space: normal !important; }

      /* Hero becomes one full-width column. */
      .hero-sec {
        overflow: visible !important;
        padding: 26px 0 42px !important;
      }

      .hero-grid {
        width: 100% !important;
        max-width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 28px !important;
        align-items: stretch !important;
      }

      .hero-content,
      .hero-visual {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
      }

      .hero-title {
        max-width: 100% !important;
        font-size: clamp(1.9rem, 9vw, 2.65rem) !important;
        line-height: 1.08 !important;
        overflow-wrap: normal !important;
        word-break: normal !important;
      }

      .hero-desc {
        max-width: 100% !important;
        font-size: clamp(.95rem, 4vw, 1.08rem) !important;
        line-height: 1.65 !important;
      }

      .hero-buttons {
        width: 100% !important;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 10px !important;
      }

      .hero-buttons .btn {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        justify-content: center !important;
      }

      /* Orbiting hero cards become a compact normal-flow stack. */
      .hero-orbit-stage {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        min-height: 0 !important;
        aspect-ratio: auto !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 12px !important;
      }

      .hero-orbit-ring,
      .hero-orbit-center { display: none !important; }

      .hero-orbit-item,
      .hero-orbit-item-one,
      .hero-orbit-item-two,
      .hero-orbit-item-three,
      .hero-orbit-card {
        position: static !important;
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        min-height: 0 !important;
        transform: none !important;
        animation: none !important;
      }

      .hero-orbit-card-inner {
        width: 100% !important;
        height: auto !important;
        min-height: 68px !important;
        transform: none !important;
        animation: none !important;
      }

      /* Step-by-step roadmap: single-column cards + stacked CTA. */
      .roadmap-section {
        overflow: visible !important;
        padding: 56px 0 !important;
      }

      .roadmap-timeline {
        width: 100% !important;
        max-width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 14px !important;
        padding: 0 !important;
        overflow: visible !important;
      }

      .roadmap-line { display: none !important; }

      .roadmap-step,
      .roadmap-step-left,
      .roadmap-step-right {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .roadmap-card {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        min-height: fit-content !important;
        padding: 20px 18px !important;
        overflow: visible !important;
      }

      .roadmap-step-number,
      .roadmap-step-right .roadmap-step-number {
        position: static !important;
        width: 34px !important;
        height: 34px !important;
        min-width: 34px !important;
        margin: 0 0 12px !important;
        transform: none !important;
      }

      .roadmap-cta {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        min-height: fit-content !important;
        margin: 26px 0 0 !important;
        padding: 22px 18px !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 18px !important;
        overflow: visible !important;
      }

      .roadmap-cta > div:first-child,
      .roadmap-cta .country-next-step-actions {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
      }

      .roadmap-cta .country-next-step-actions {
        display: flex !important;
        flex-direction: column !important;
        gap: 10px !important;
      }

      .roadmap-cta .country-next-step-actions .btn {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        flex: 0 0 auto !important;
        justify-content: center !important;
        white-space: normal !important;
      }

      /* Destination explorer: predictable vertical order. */
      .country-destination-shell,
      .country-display-grid,
      .country-image-wrapper,
      .country-info-box,
      .destination-why-panel,
      .country-pathways-list,
      .country-next-step {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        height: auto !important;
        min-height: 0 !important;
        overflow: visible !important;
      }

      .country-display-grid {
        display: flex !important;
        flex-direction: column !important;
        gap: 0 !important;
      }

      .country-image-wrapper,
      .country-info-box { display: contents !important; }

      .country-title { order: 1; }
      .country-desc { order: 2; }
      .country-pathway-visual { order: 3; }
      .country-stats-row { order: 4; }
      .destination-why-panel { order: 5; }
      .country-pathways-list { order: 6; }
      .country-next-step { order: 7; }

      .country-stats-row {
        width: 100% !important;
        display: grid !important;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        gap: 8px !important;
      }

      .c-stat-card {
        width: 100% !important;
        min-width: 0 !important;
        height: auto !important;
        min-height: fit-content !important;
      }

      .country-next-step {
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 12px !important;
      }

      .country-next-step-actions {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 10px !important;
      }

      .country-next-step-actions .btn {
        width: 100% !important;
        max-width: 100% !important;
        justify-content: center !important;
      }

      /* Services, calculator, team and success sections stack cleanly. */
      .services-grid,
      .team-grid,
      .client-success-stats,
      .calc-grid {
        width: 100% !important;
        max-width: 100% !important;
        grid-template-columns: 1fr !important;
      }

      .service-card,
      .team-card,
      .calculator-box,
      .client-success-panel,
      .glass-panel {
        width: 100%;
        max-width: 100% !important;
        min-width: 0 !important;
      }

      .service-card,
      .team-card,
      .calculator-box {
        height: auto !important;
        min-height: fit-content !important;
      }

      .client-success-panel { overflow: visible !important; }

      /* Forms and footer cannot create a wider layout. */
      input,
      select,
      textarea,
      button,
      .btn { max-width: 100% !important; }

      .phone-input-row {
        width: 100% !important;
        grid-template-columns: 82px minmax(0, 1fr) !important;
      }

      textarea { height: auto !important; }

      .footer-main-grid,
      .footer-connect-block {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        grid-template-columns: 1fr !important;
      }

      .footer-qr-grid {
        width: 100% !important;
        flex-direction: column !important;
      }

      .footer-qr-compact {
        width: 100% !important;
        max-width: 100% !important;
      }

      h1, h2, h3, h4, h5, h6, p, a, span, li, label {
        max-width: 100%;
        overflow-wrap: anywhere;
      }
    }

    @media (max-width: 479px) {
      .container {
        padding-left: 13px !important;
        padding-right: 13px !important;
      }

      .hero-sec {
        padding-top: 22px !important;
      }

      .hero-title {
        font-size: clamp(1.72rem, 9vw, 2.05rem) !important;
      }

      .hero-orbit-stage {
        max-width: 100% !important;
      }

      .country-stats-row {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }

      .c-stat-card:last-child {
        grid-column: 1 / -1;
      }

      .destination-explorer-panel {
        padding: 16px !important;
      }

      .footer-bottom-inner {
        padding-left: 13px !important;
        padding-right: 13px !important;
      }
    }

    /* ==========================================================
       FINAL MOBILE ROADMAP OVERRIDE
       Keep the desktop alternating timeline on phones too.
       Cards stay in normal flow, remain fully visible, and share
       the center line without creating horizontal page overflow.
       ========================================================== */
    @media (max-width: 767px) {
      .roadmap-section {
        width: 100% !important;
        max-width: 100vw !important;
        overflow: visible !important;
        padding: 44px 0 54px !important;
      }

      .roadmap-section .container {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
      }

      .roadmap-header {
        margin-bottom: 32px !important;
        padding: 0 4px !important;
      }

      .roadmap-header .section-title {
        font-size: clamp(1.65rem, 7.2vw, 2.15rem) !important;
        line-height: 1.15 !important;
        margin: 14px 0 10px !important;
      }

      .roadmap-header .section-desc {
        width: 100% !important;
        max-width: 680px !important;
        font-size: clamp(.76rem, 3.1vw, .9rem) !important;
        line-height: 1.55 !important;
      }

      .roadmap-timeline {
        position: relative !important;
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 auto !important;
        padding: 6px 0 8px !important;
        overflow: visible !important;
      }

      .roadmap-line {
        display: block !important;
        position: absolute !important;
        top: 0 !important;
        bottom: 0 !important;
        left: 50% !important;
        width: 2px !important;
        transform: translateX(-50%) !important;
        z-index: 0 !important;
      }

      .roadmap-step,
      .roadmap-step-left,
      .roadmap-step-right {
        position: relative !important;
        box-sizing: border-box !important;
        display: block !important;
        width: 50% !important;
        max-width: 50% !important;
        margin: 0 !important;
        padding-top: 14px !important;
        padding-bottom: 14px !important;
      }

      .roadmap-step-left {
        margin-left: 0 !important;
        padding-left: 0 !important;
        padding-right: 12px !important;
      }

      .roadmap-step-right {
        margin-left: 50% !important;
        padding-left: 12px !important;
        padding-right: 0 !important;
      }

      .roadmap-card {
        position: relative !important;
        z-index: 1 !important;
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        height: auto !important;
        min-height: fit-content !important;
        padding: 16px 13px !important;
        border-radius: 12px !important;
        overflow: visible !important;
      }

      .roadmap-step-number,
      .roadmap-step-right .roadmap-step-number {
        position: absolute !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        z-index: 3 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 30px !important;
        height: 30px !important;
        min-width: 30px !important;
        margin: 0 !important;
        font-size: .72rem !important;
        border-width: 2px !important;
        box-shadow: 0 0 0 4px var(--bg-main), 0 0 14px rgba(37,99,235,.28) !important;
      }

      .roadmap-step-left .roadmap-step-number {
        left: auto !important;
        right: -15px !important;
      }

      .roadmap-step-right .roadmap-step-number {
        left: -15px !important;
        right: auto !important;
        box-shadow: 0 0 0 4px var(--bg-main), 0 0 14px rgba(34,197,94,.22) !important;
      }

      .roadmap-kicker {
        display: inline-block !important;
        max-width: 100% !important;
        font-size: .58rem !important;
        line-height: 1.25 !important;
        letter-spacing: .8px !important;
        margin-bottom: 6px !important;
      }

      .roadmap-card h3 {
        font-size: clamp(.82rem, 3.6vw, 1rem) !important;
        line-height: 1.28 !important;
        margin: 0 0 7px !important;
        overflow-wrap: anywhere !important;
      }

      .roadmap-card p {
        font-size: clamp(.64rem, 2.8vw, .76rem) !important;
        line-height: 1.48 !important;
        overflow-wrap: anywhere !important;
      }

      .roadmap-cta {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        min-height: fit-content !important;
        margin: 28px 0 0 !important;
        padding: 20px 16px !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 16px !important;
        overflow: visible !important;
      }

      .roadmap-cta > div:first-child,
      .roadmap-cta .country-next-step-actions {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
      }

      .roadmap-cta h3 {
        font-size: clamp(1rem, 4.5vw, 1.18rem) !important;
        line-height: 1.3 !important;
      }

      .roadmap-cta p {
        font-size: .82rem !important;
        line-height: 1.5 !important;
      }

      .roadmap-cta .country-next-step-actions {
        display: flex !important;
        flex-direction: column !important;
        gap: 10px !important;
      }

      .roadmap-cta .country-next-step-actions .btn {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        justify-content: center !important;
        white-space: normal !important;
        text-align: center !important;
      }
    }

    @media (max-width: 360px) {
      .roadmap-section {
        padding-top: 38px !important;
      }

      .roadmap-section .container {
        padding-left: 10px !important;
        padding-right: 10px !important;
      }

      .roadmap-step-left {
        padding-right: 10px !important;
      }

      .roadmap-step-right {
        padding-left: 10px !important;
      }

      .roadmap-card {
        padding: 14px 11px !important;
      }

      .roadmap-card h3 {
        font-size: .78rem !important;
      }

      .roadmap-card p {
        font-size: .62rem !important;
        line-height: 1.45 !important;
      }

      .roadmap-step-number,
      .roadmap-step-right .roadmap-step-number {
        width: 28px !important;
        height: 28px !important;
        min-width: 28px !important;
        font-size: .68rem !important;
      }

      .roadmap-step-left .roadmap-step-number {
        right: -14px !important;
      }

      .roadmap-step-right .roadmap-step-number {
        left: -14px !important;
      }
    }
    /* MOBILE WIDTH LOCK — only prevents horizontal page dragging.
       No desktop layout or existing component styles are changed. */
    @media (max-width: 767px) {
      html,
      body,
      #root {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow-x: hidden !important;
        overflow-x: clip !important;
        overscroll-behavior-x: none !important;
      }

      body {
        touch-action: pan-y !important;
      }

      #root {
        position: relative;
        isolation: isolate;
      }

      main,
      header,
      nav,
      section,
      footer,
      .container,
      .section-padding,
      .hero-sec,
      .roadmap-section,
      .team-section,
      .client-success-section,
      .consultation-section {
        max-width: 100% !important;
        min-width: 0 !important;
      }

      img,
      svg,
      video,
      canvas {
        max-width: 100% !important;
      }

      input,
      select,
      textarea,
      button {
        max-width: 100% !important;
      }
    }

    /* ==========================================================
       NEW SECTIONS — STUDY VISA + PARTNER WITH US
       Scoped styles only; existing sections remain unchanged.
       ========================================================== */
    .study-visa-intro,
    .partnership-cta {
      padding: 24px 26px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      margin-bottom: 24px;
    }

    .study-visa-intro h3,
    .partnership-cta h3 { margin: 0 0 8px; color: var(--text-primary); font-size: 1.18rem; }
    .study-visa-intro p,
    .partnership-cta p { margin: 0; color: var(--text-secondary); line-height: 1.65; font-size: .9rem; max-width: 780px; }
    .study-visa-cta,
    .partnership-cta .btn { flex: 0 0 auto; text-decoration: none; white-space: nowrap; }

    .study-visa-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
    .study-visa-card { padding: 22px; transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease; }
    .study-visa-card:hover,
    .partnership-card:hover { transform: translateY(-3px); border-color: rgba(59,130,246,.38) !important; box-shadow: 0 16px 36px rgba(0,0,0,.18); }
    .study-visa-card-top { display: flex; align-items: center; gap: 13px; margin-bottom: 15px; }
    .study-country-flag-wrap { width: 46px; height: 46px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; background: rgba(37,99,235,.08); border: 1px solid var(--border-color); flex: 0 0 auto; }
    .study-country-flag { width: 27px; height: auto; max-height: 20px; object-fit: contain; border-radius: 2px; }
    .study-country-region { display: block; color: var(--accent-blue); text-transform: uppercase; letter-spacing: .08em; font-size: .67rem; font-weight: 700; margin-bottom: 3px; }
    .study-visa-card h3 { margin: 0; color: var(--text-primary); font-size: 1.08rem; }
    .study-visa-card p { margin: 0 0 16px; color: var(--text-secondary); line-height: 1.65; font-size: .86rem; }
    .study-visa-card-link { display: inline-flex; align-items: center; gap: 6px; color: var(--accent-blue); text-decoration: none; font-size: .84rem; font-weight: 700; }

    .partnership-showcase-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
    .partnership-card { overflow: hidden; transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease; }
    .partnership-media { width: 100%; aspect-ratio: 4 / 3; background: var(--bg-alt); border-bottom: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .partnership-media > img { width: 100%; height: 100%; object-fit: contain; padding: 16px; display: block; }
    .partnership-placeholder { width: calc(100% - 28px); height: calc(100% - 28px); border: 1px dashed rgba(59,130,246,.32); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; background: rgba(37,99,235,.045); text-align: center; }
    .partnership-placeholder-mark { color: var(--accent-blue); font-size: .72rem; font-weight: 800; letter-spacing: .12em; }
    .partnership-placeholder-note { color: var(--text-muted); font-size: .72rem; }
    .partnership-card-content { padding: 18px 18px 20px; }
    .partnership-type,
    .partnership-cta-kicker { display: inline-flex; color: var(--accent-blue); font-size: .67rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
    .partnership-card h3 { margin: 7px 0 7px; color: var(--text-primary); font-size: 1rem; line-height: 1.35; }
    .partnership-card p { margin: 0; color: var(--text-secondary); font-size: .82rem; line-height: 1.6; }
    .partnership-cta { margin: 24px 0 0; }
    .partnership-cta h3 { font-size: 1.1rem; margin-top: 6px; }

    [data-theme="light"] .study-visa-section,
    [data-theme="light"] .partnership-section { background: #f8fafc !important; }
    [data-theme="light"] .partnership-placeholder { background: rgba(37,99,235,.035); border-color: rgba(37,99,235,.25); }

    @media (max-width: 980px) {
      .study-visa-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .partnership-showcase-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }

    @media (max-width: 700px) {
      .study-visa-intro,
      .partnership-cta { align-items: stretch; flex-direction: column; }
      .study-visa-cta,
      .partnership-cta .btn { width: 100%; justify-content: center; }
      .study-visa-grid,
      .partnership-showcase-grid { grid-template-columns: 1fr; }
    }

    /* ==========================================================
       ELIGIBILITY CALCULATOR — PROFESSIONAL RESPONSIVE UI
       ========================================================== */
    .calculator-intro {
      max-width: 820px;
      margin: 0 auto 34px;
      text-align: center;
    }

    .calculator-eyebrow,
    .calculator-kicker {
      display: inline-flex;
      align-items: center;
      color: var(--accent-blue);
      font-size: .69rem;
      font-weight: 850;
      letter-spacing: .13em;
      text-transform: uppercase;
    }

    .calculator-intro .section-title {
      margin: 11px 0 10px;
      font-size: clamp(2rem, 4vw, 2.75rem);
    }

    .calculator-intro p {
      margin: 0 auto;
      max-width: 760px;
      color: var(--text-secondary);
      line-height: 1.75;
      font-size: .92rem;
    }

    .calculator-professional-shell {
      max-width: 1160px;
      margin: 0 auto;
    }

    .calculator-country-strip {
      display: flex;
      gap: 10px;
      padding: 6px;
      margin-bottom: 14px;
      overflow-x: auto;
      overscroll-behavior-x: contain;
      scrollbar-width: thin;
      border: 1px solid var(--border-color);
      border-radius: 18px;
      background: var(--bg-card);
      box-shadow: 0 12px 34px rgba(0,0,0,.12);
    }

    .calculator-country-tab {
      flex: 1 0 188px;
      min-width: 188px;
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 13px 14px;
      border: 1px solid transparent;
      border-radius: 13px;
      background: transparent;
      color: var(--text-secondary);
      cursor: pointer;
      text-align: left;
      transition: .2s ease;
    }

    .calculator-country-tab:hover {
      background: rgba(37,99,235,.055);
      color: var(--text-primary);
    }

    .calculator-country-tab.active {
      border-color: rgba(37,99,235,.45);
      background: rgba(37,99,235,.11);
      color: var(--text-primary);
      box-shadow: inset 0 0 0 1px rgba(37,99,235,.08);
    }

    .calculator-country-flag {
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      flex: 0 0 auto;
      border-radius: 10px;
      background: var(--bg-main);
      border: 1px solid var(--border-color);
      font-size: 1.05rem;
    }

    .calculator-country-copy {
      min-width: 0;
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 2px;
    }

    .calculator-country-copy strong {
      color: inherit;
      font-size: .86rem;
      line-height: 1.2;
    }

    .calculator-country-copy small {
      color: var(--text-muted);
      font-size: .68rem;
      line-height: 1.3;
      white-space: normal;
    }

    .calculator-country-tab > svg {
      flex: 0 0 auto;
      opacity: .45;
    }

    .calculator-country-tab.active > svg {
      color: var(--accent-blue);
      opacity: 1;
    }

    .calculator-main-card {
      overflow: hidden;
      border: 1px solid var(--border-color);
      border-radius: 22px;
      background: var(--bg-card);
      box-shadow: 0 22px 60px rgba(0,0,0,.14);
    }

    .calculator-card-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
      padding: 28px 30px 24px;
      border-bottom: 1px solid var(--border-color);
      background: linear-gradient(135deg, rgba(37,99,235,.075), transparent 55%);
    }

    .calculator-card-head h3 {
      margin: 7px 0 7px;
      color: var(--text-primary);
      font-size: clamp(1.28rem, 2vw, 1.65rem);
      line-height: 1.25;
    }

    .calculator-card-head p {
      max-width: 760px;
      margin: 0;
      color: var(--text-secondary);
      font-size: .84rem;
      line-height: 1.65;
    }

    .calculator-step-badge {
      flex: 0 0 auto;
      padding: 8px 11px;
      border: 1px solid rgba(37,99,235,.22);
      border-radius: 999px;
      background: rgba(37,99,235,.08);
      color: var(--accent-blue);
      font-size: .67rem;
      font-weight: 850;
      letter-spacing: .08em;
      white-space: nowrap;
    }

    .calculator-step-badge span {
      color: var(--text-muted);
      font-weight: 700;
    }

    .calculator-content {
      padding: 28px 30px 4px;
    }

    .calculator-pathway-switch {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 9px;
      margin-bottom: 28px;
    }

    .calculator-pathway-switch.two {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .calculator-pathway-switch.three {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .calculator-pathway-switch button {
      min-width: 0;
      padding: 13px 14px;
      border: 1px solid var(--border-color);
      border-radius: 13px;
      background: var(--bg-main);
      color: var(--text-secondary);
      text-align: left;
      cursor: pointer;
      transition: .2s ease;
    }

    .calculator-pathway-switch button:hover {
      border-color: rgba(37,99,235,.32);
      color: var(--text-primary);
    }

    .calculator-pathway-switch button.active {
      border-color: rgba(37,99,235,.62);
      background: rgba(37,99,235,.1);
      color: var(--text-primary);
      box-shadow: inset 3px 0 0 var(--accent-blue);
    }

    .calculator-pathway-switch button span,
    .calculator-pathway-switch button small {
      display: block;
    }

    .calculator-pathway-switch button span {
      color: inherit;
      font-size: .84rem;
      font-weight: 800;
      line-height: 1.3;
    }

    .calculator-pathway-switch button small {
      margin-top: 4px;
      color: var(--text-muted);
      font-size: .69rem;
      line-height: 1.35;
    }

    .calculator-section-heading {
      display: flex;
      align-items: center;
      gap: 11px;
      margin: 26px 0 15px;
    }

    .calculator-section-heading > span {
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      flex: 0 0 auto;
      border-radius: 9px;
      background: rgba(37,99,235,.1);
      color: var(--accent-blue);
      font-size: .68rem;
      font-weight: 850;
    }

    .calculator-section-heading strong,
    .calculator-section-heading small {
      display: block;
    }

    .calculator-section-heading strong {
      color: var(--text-primary);
      font-size: .91rem;
    }

    .calculator-section-heading small {
      margin-top: 3px;
      color: var(--text-muted);
      font-size: .72rem;
      line-height: 1.45;
    }

    .calculator-form-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    .calculator-form-grid > * {
      min-width: 0;
    }

    .calculator-select,
    .calculator-input {
      width: 100%;
      min-height: 48px;
      padding: 11px 13px;
      border: 1px solid var(--border-color);
      border-radius: 11px;
      outline: none;
      background: var(--bg-main);
      color: var(--text-primary);
      font: inherit;
      font-size: .86rem;
      transition: border-color .18s ease, box-shadow .18s ease, background .18s ease;
    }

    .calculator-select:focus,
    .calculator-input:focus {
      border-color: rgba(37,99,235,.75);
      box-shadow: 0 0 0 3px rgba(37,99,235,.11);
    }

    .calculator-input::placeholder {
      color: var(--text-muted);
    }

    .calculator-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      padding: 24px 30px 30px;
      margin-top: 22px;
      border-top: 1px solid var(--border-color);
    }

    .calculator-primary-btn,
    .calculator-secondary-btn {
      min-height: 46px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 11px 17px;
      border-radius: 11px;
      font: inherit;
      font-size: .83rem;
      font-weight: 800;
      text-decoration: none;
      cursor: pointer;
      transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
    }

    .calculator-primary-btn {
      border: 1px solid var(--accent-blue);
      background: var(--accent-blue);
      color: #fff;
      box-shadow: 0 10px 22px rgba(37,99,235,.2);
    }

    .calculator-primary-btn:hover {
      background: var(--accent-hover);
      transform: translateY(-1px);
    }

    .calculator-secondary-btn {
      border: 1px solid var(--border-color);
      background: var(--bg-main);
      color: var(--text-primary);
    }

    .calculator-secondary-btn:hover {
      border-color: rgba(37,99,235,.38);
    }

    .calculator-result {
      margin: 0 30px 30px;
      padding: 22px;
      border: 1px solid var(--border-color);
      border-radius: 16px;
      background: var(--bg-main);
    }

    .calculator-result.is-positive {
      border-color: rgba(34,197,94,.35);
      background: linear-gradient(135deg, rgba(34,197,94,.07), var(--bg-main) 55%);
    }

    .calculator-result.is-negative {
      border-color: rgba(239,68,68,.3);
      background: linear-gradient(135deg, rgba(239,68,68,.055), var(--bg-main) 55%);
    }

    .calculator-result-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
    }

    .calculator-result-top h3 {
      margin: 6px 0 5px;
      color: var(--text-primary);
      font-size: 1.12rem;
      line-height: 1.35;
    }

    .calculator-result-top p {
      margin: 0;
      color: var(--text-secondary);
      font-size: .81rem;
      line-height: 1.6;
    }

    .calculator-score-display {
      flex: 0 0 auto;
      min-width: 132px;
      padding: 12px 15px;
      border: 1px solid var(--border-color);
      border-radius: 13px;
      background: var(--bg-card);
      text-align: right;
    }

    .calculator-score-display strong,
    .calculator-score-display span {
      display: block;
    }

    .calculator-score-display strong {
      color: var(--accent-blue);
      font-size: 1.65rem;
      line-height: 1.05;
      font-weight: 900;
    }

    .calculator-score-display span {
      margin-top: 4px;
      color: var(--text-muted);
      font-size: .67rem;
    }

    .calculator-result-status {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 18px;
      padding: 11px 12px;
      border: 1px solid var(--border-color);
      border-radius: 10px;
      background: var(--bg-card);
      color: var(--text-primary);
      font-size: .78rem;
    }

    .result-status-dot {
      width: 8px;
      height: 8px;
      flex: 0 0 auto;
      border-radius: 50%;
    }

    .result-status-dot.positive { background: #16a34a; }
    .result-status-dot.negative { background: #dc2626; }

    .calculator-result-threshold {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-top: 9px;
      padding: 10px 12px;
      color: var(--text-secondary);
      font-size: .76rem;
    }

    .calculator-result-threshold strong {
      color: var(--text-primary);
    }

    .calculator-breakdown {
      margin-top: 12px;
      border: 1px solid var(--border-color);
      border-radius: 12px;
      overflow: hidden;
      background: var(--bg-card);
    }

    .calculator-breakdown-title {
      padding: 10px 12px;
      border-bottom: 1px solid var(--border-color);
      color: var(--text-primary);
      font-size: .75rem;
      font-weight: 850;
      letter-spacing: .03em;
    }

    .calculator-breakdown-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 9px 12px;
      border-bottom: 1px solid var(--border-color);
      color: var(--text-secondary);
      font-size: .75rem;
    }

    .calculator-breakdown-row:last-child {
      border-bottom: 0;
    }

    .calculator-breakdown-row strong {
      color: var(--text-primary);
      font-size: .8rem;
    }

    .calculator-result-note {
      margin: 13px 0 0;
      color: var(--text-secondary);
      font-size: .78rem;
      line-height: 1.65;
    }

    .calculator-result-actions {
      display: flex;
      gap: 9px;
      flex-wrap: wrap;
      margin-top: 17px;
    }

    .calculator-disclaimer {
      max-width: 1040px;
      margin: 16px auto 0;
      padding: 12px 15px;
      border: 1px solid var(--border-color);
      border-radius: 11px;
      background: rgba(148,163,184,.045);
      color: var(--text-muted);
      text-align: center;
      font-size: .72rem;
      line-height: 1.65;
    }

    .calculator-disclaimer strong {
      color: var(--text-secondary);
    }

    @media (max-width: 900px) {
      .calculator-country-tab {
        flex: 0 0 210px;
      }

      .calculator-card-head {
        padding: 24px 22px 20px;
      }

      .calculator-content {
        padding: 23px 22px 2px;
      }

      .calculator-actions {
        padding: 21px 22px 24px;
      }

      .calculator-result {
        margin-left: 22px;
        margin-right: 22px;
      }
    }

    @media (max-width: 700px) {
      .calculator-country-strip {
        margin-left: -4px;
        margin-right: -4px;
        padding: 5px;
        border-radius: 15px;
      }

      .calculator-country-tab {
        flex: 0 0 205px;
        min-width: 205px;
        padding: 12px;
      }

      .calculator-card-head {
        flex-direction: column;
        gap: 13px;
      }

      .calculator-step-badge {
        align-self: flex-start;
      }

      .calculator-pathway-switch,
      .calculator-pathway-switch.two,
      .calculator-pathway-switch.three {
        display: flex;
        overflow-x: auto;
        gap: 8px;
        margin-left: -2px;
        margin-right: -2px;
        padding-bottom: 3px;
      }

      .calculator-pathway-switch button {
        flex: 0 0 210px;
      }

      .calculator-form-grid {
        grid-template-columns: 1fr;
        gap: 13px;
      }

      .calculator-result-top {
        flex-direction: column;
      }

      .calculator-score-display {
        width: 100%;
        text-align: left;
      }

      .calculator-primary-btn,
      .calculator-secondary-btn {
        width: 100%;
      }

      .calculator-result-actions {
        flex-direction: column;
      }
    }

    @media (max-width: 430px) {
      .calculator-card-head {
        padding: 21px 16px 18px;
      }

      .calculator-content {
        padding: 20px 16px 0;
      }

      .calculator-actions {
        padding: 18px 16px 20px;
      }

      .calculator-result {
        margin: 0 16px 20px;
        padding: 17px;
      }

      .calculator-intro p {
        font-size: .84rem;
      }

      .calculator-country-tab {
        flex-basis: 188px;
        min-width: 188px;
      }
    }

  `

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{ __html: visualPolishStyles }} />


      {/* TOP ANNOUNCEMENT BAR */}

        <AnnouncementBar />


      {/* HEADER & NAVBAR */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px' }}>
          <a href="/" className="logo-link" style={{ textDecoration: 'none' }} aria-label="CloysterVisa home">
            <LogoImage />
          </a>

          <div className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <a href={sectionHref("#about")} className="nav-link" onClick={closeNav}>About Us</a>

            <div className={`nav-dropdown ${openNavDropdown === 'destinations' ? 'open' : ''}`}>
              <button
                type="button"
                className="nav-link nav-dropdown-toggle"
                aria-expanded={openNavDropdown === 'destinations'}
                onClick={() => setOpenNavDropdown(openNavDropdown === 'destinations' ? null : 'destinations')}
              >
                Destinations
                <span className="nav-chevron" aria-hidden="true">⌄</span>
              </button>
              <div className="nav-dropdown-menu">
                <button type="button" onClick={() => openDestination('canada')}>
                  <img src={countries.find((c) => c.id === 'canada')?.flag} alt="" className="flag-icon" />
                  Canada
                </button>
                <button type="button" onClick={() => openDestination('australia')}>
                  <img src={countries.find((c) => c.id === 'australia')?.flag} alt="" className="flag-icon" />
                  Australia
                </button>
                <button type="button" onClick={() => openDestination('germany')}>
                  <img src={countries.find((c) => c.id === 'germany')?.flag} alt="" className="flag-icon" />
                  Germany
                </button>
                <button type="button" onClick={() => openDestination('uk')}>
                  <img src={countries.find((c) => c.id === 'uk')?.flag} alt="" className="flag-icon" />
                  United Kingdom
                </button>
                <button type="button" onClick={() => openDestination('nz')}>
                  <img src={countries.find((c) => c.id === 'nz')?.flag} alt="" className="flag-icon" />
                  New Zealand
                </button>
              </div>
            </div>

            <div className={`nav-dropdown ${openNavDropdown === 'services' ? 'open' : ''}`}>
              <button
                type="button"
                className="nav-link nav-dropdown-toggle"
                aria-expanded={openNavDropdown === 'services'}
                onClick={() => setOpenNavDropdown(openNavDropdown === 'services' ? null : 'services')}
              >
                Services
                <span className="nav-chevron" aria-hidden="true">⌄</span>
              </button>
              <div className="nav-dropdown-menu">
                <a href={sectionHref("#study-visa")} onClick={closeNav}>Study Visa</a>
                <a href={sectionHref("#services")} onClick={closeNav}>Visa Consultation</a>
                <a href={sectionHref("#services")} onClick={closeNav}>Document & Application Support</a>
                <a href={sectionHref("#services")} onClick={closeNav}>Interview Preparation</a>
                <a href={sectionHref("#services")} onClick={closeNav}>Post-Submission Guidance</a>
              </div>
            </div>

            <a href={sectionHref("#partner-with-us")} className="nav-link" onClick={closeNav}>Partner With Us</a>

            <a href="/blog" className="nav-link" onClick={closeNav}>Blog</a>

            <a href={sectionHref("#team")} className="nav-link" onClick={closeNav}>Our Team</a>

            <div className="mobile-nav-actions" aria-label="Mobile navigation actions">
              <a
                href={sectionHref("#contact")}
                className="nav-consultation-btn"
                onClick={closeNav}
              >
                <CalendarIcon size={16} />
                <span>Book a Consultation</span>
              </a>
              <a
                href={sectionHref("#calculator")}
                className="nav-eligibility-btn"
                onClick={closeNav}
              >
                Check Your Eligibility
              </a>
              <ThemeToggle />
            </div>
          </div>

          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href={sectionHref("#contact")}
              className="nav-consultation-btn"
              onClick={closeNav}
              aria-label="Book a consultation"
            >
              <CalendarIcon size={16} />
              <span>Book a Consultation</span>
            </a>
            <a
              href={sectionHref("#calculator")}
              className="nav-eligibility-btn"
              onClick={closeNav}
            >
              Check Your Eligibility
            </a>
            <ThemeToggle />
            <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
              <span style={{ opacity: mobileMenuOpen ? '0' : '1' }}></span>
              <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
            </div>
          </div>
        </div>
      </nav>

      {!isBlogRoute && (
        <>
      {/* HERO SECTION */}
      <header className="hero-sec">
        <div className="hero-mesh"></div>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge animate-pulse-glow" style={{ background: 'var(--bg-card)', borderColor: 'var(--accent-blue)' }}>
              <span style={{ color: 'var(--text-secondary)', fontWeight: '600' }}>Trusted Visa Guidance Since 2020</span>
            </div>

            <h1 className="hero-title text-gradient" style={{ fontSize: '2.8rem', lineHeight: '1.2', margin: '16px 0' }}>
              Immigration Made Simple.
            </h1>
            <p className="hero-desc" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', margin: '15px 0 25px 0' }}>
              Personalized visa solutions for Work, Study & Permanent Residency, with guidance tailored to your profile and destination.
            </p>

            <div className="hero-buttons" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href={sectionHref("#calculator")} className="btn btn-primary" style={{ background: 'var(--accent-blue)', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Check Your Eligibility <ArrowRightIcon />
              </a>
              <a href={sectionHref("#contact")} className="btn btn-secondary" style={{ background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>
                Book a Consultation
              </a>
            </div>

            <div className="hero-trust-line" aria-label="CloysterVisa service strengths">
              <span className="hero-trust-item"><CheckIcon /> Profile Assessment</span>
              <span className="hero-trust-item"><CheckIcon /> Transparent Guidance</span>
              <span className="hero-trust-item"><CheckIcon /> End-to-End Support</span>
            </div>

            <div style={{ marginTop: '26px' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', fontWeight: '600' }}>
                Supported Destination Programs
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {countries.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`glass-panel destination-chip ${activeTab === c.id ? 'active' : ''}`}
                    onClick={() => openDestination(c.id)}
                    aria-label={`Explore ${c.name} immigration pathway`}
                  >
                    <img src={c.flag} alt="" className="flag-icon" />
                    <span>{c.name}</span>
                    <span className="destination-chip-arrow" aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit-stage" aria-label="CloysterVisa immigration services overview">
              <span className="hero-orbit-ring hero-orbit-ring-one" aria-hidden="true"></span>
              <span className="hero-orbit-ring hero-orbit-ring-two" aria-hidden="true"></span>
              <span className="hero-orbit-ring hero-orbit-ring-three" aria-hidden="true"></span>
              <span className="hero-orbit-center" aria-hidden="true"></span>

              <div className="hero-orbit-item hero-orbit-item-one">
                <article className="hero-orbit-card">
                  <div className="hero-orbit-card-inner">
                    <span className="hero-orbit-card-icon" aria-hidden="true">
                      <GlobeIcon />
                    </span>
                    <span className="hero-orbit-card-copy">
                      <strong className="hero-orbit-card-title">Passport &amp; Global Mobility</strong>
                      <span className="hero-orbit-card-subtitle">Express Entry &amp; Skilled Worker Pathways</span>
                    </span>
                  </div>
                </article>
              </div>

              <div className="hero-orbit-item hero-orbit-item-two">
                <article className="hero-orbit-card">
                  <div className="hero-orbit-card-inner">
                    <span className="hero-orbit-card-icon" aria-hidden="true">
                      <GlobeIcon />
                    </span>
                    <span className="hero-orbit-card-copy">
                      <strong className="hero-orbit-card-title">Seamless Relocation</strong>
                      <span className="hero-orbit-card-subtitle">Dedicated Assistance Worldwide</span>
                    </span>
                  </div>
                </article>
              </div>

              <div className="hero-orbit-item hero-orbit-item-three">
                <article className="hero-orbit-card">
                  <div className="hero-orbit-card-inner">
                    <span className="hero-orbit-card-icon success" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    <span className="hero-orbit-card-copy">
                      <strong className="hero-orbit-card-title">Visa Approval Status</strong>
                      <span className="hero-orbit-card-subtitle">128+ Total Visa Approvals</span>
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT / FEATURES */}
      <section id="about" className="section-padding" style={{ background: 'var(--bg-alt)', padding: '60px 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag" style={{ background: 'var(--bg-card)', color: '#60a5fa', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem' }}>Professional Immigration Guidance</span>
            <h2 className="section-title text-gradient" style={{ fontSize: '2.2rem', margin: '12px 0' }}>Why Choose CloysterVisa?</h2>
            <p className="section-desc" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Clear guidance, personalized strategies, and transparent support for your immigration journey.
            </p>
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="glass-panel country-destination-shell" style={{ padding: '30px' }}>
              <div className="clean-feature-icon"><ScaleIcon /></div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: 'var(--text-primary)' }}>
                Legal Representation
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We guide you through certified regulations, ensuring fully compliant documentation for IRCC, MARA, and EU immigration authorities.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '35px' }}>
              <div className="clean-feature-icon"><TargetIcon /></div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: 'var(--text-primary)' }}>
                Tailored Strategy
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We evaluate your career credentials to construct the optimum pathway—maximizing points for Express Entry or state sponsorships.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '35px' }}>
              <div className="clean-feature-icon"><ReceiptIcon /></div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: 'var(--text-primary)' }}>
                Transparent Pricing
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                No hidden costs or false promises. Clear milestone-based service fee quotes upfront with full evaluation reports.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '35px' }}>
              <div className="clean-feature-icon"><ClockIcon /></div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: 'var(--text-primary)' }}>
                Extended Support Hours
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We're available when it matters most — 7 days a week, 9 AM to 9 PM IST. Connect with us after your work hours, without waiting for the next business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="section-padding" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span className="section-tag" style={{ background: 'var(--bg-card)', color: 'var(--accent-blue)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem' }}>Global Pathways</span>
            <h2 className="section-title text-gradient" style={{ fontSize: '2.2rem', margin: '12px 0' }}>Choose Your Destination</h2>
            <p className="section-desc" style={{ color: 'var(--text-secondary)' }}>
              Explore eligibility scoring systems, visa pathways, and expected processing timelines.
            </p>
          </div>

          {/* DESTINATION TAB BUTTONS WITH FLAGS */}
          <div className="explorer-tabs" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
            {countries.map((country) => (
              <button
                key={country.id}
                className={`tab-btn ${activeTab === country.id ? 'active' : ''}`}
                onClick={() => setActiveTab(country.id)}
                style={{
                  background: activeTab === country.id ? 'var(--accent-blue)' : 'var(--bg-card)',
                  color: activeTab === country.id ? '#ffffff' : 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  padding: '10px 18px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: '600'
                }}
              >
                <img src={country.flag} alt={`${country.name} Flag`} className="flag-icon" />
                <span>{country.name}</span>
              </button>
            ))}
          </div>

          {currentCountry && (
            <div className="glass-panel destination-explorer-panel" style={{ padding: '35px' }}>
              <div className="country-display-grid">
                <div className="country-image-wrapper">
                  <div className="country-pathway-visual">
                    <img
                      src={currentCountry.image}
                      alt={`${currentCountry.name} destination`}
                      className="country-pathway-main-image"
                    />

                    <div className="country-pathway-badge">
                      <img
                        src={currentCountry.flag}
                        alt={`${currentCountry.name} Flag`}
                        className="flag-icon"
                      />
                      <span>{currentCountry.name}</span>
                    </div>
                  </div>

                  <div
                    className="destination-why-panel"
                    aria-label={`Why choose ${currentCountry.name}`}
                  >
                    <h4>
                      Why choose {currentCountry.name}?
                    </h4>

                    <ul>
                      {currentCountry.whyChoose.map((reason, index) => (
                        <li key={index}>
                          <span aria-hidden="true">✓</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="country-info-box">
                  <h3
                    className="country-title"
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: '1.5rem',
                      marginBottom: '10px'
                    }}
                  >
                    {currentCountry.title}
                  </h3>

                  <p
                    className="country-desc"
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}
                  >
                    {currentCountry.desc}
                  </p>

                  <div
                    className="country-stats-row"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '10px',
                      marginBottom: '20px'
                    }}
                  >
                    <div
                      className="c-stat-card"
                      style={{
                        background: 'var(--bg-main)',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      <div className="c-stat-label">SUCCESS RATE</div>
                      <div className="c-stat-value">{currentCountry.successRate}</div>
                    </div>

                    <div
                      className="c-stat-card highlighted"
                      style={{
                        background: 'var(--bg-main)',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      <div className="c-stat-label">EST. PROCESSING TIME</div>
                      <div className="c-stat-value">{currentCountry.processingTime}</div>
                    </div>

                    <div
                      className="c-stat-card"
                      style={{
                        background: 'var(--bg-main)',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      <div className="c-stat-label">MINIMUM POINTS THRESHOLD</div>
                      <div className="c-stat-value">{currentCountry.minPoints}</div>
                    </div>
                  </div>

                  <div className="country-pathways-list">
                    <h4>
                      Primary Relocation Streams
                    </h4>

                    {currentCountry.pathways.map((pw, i) => (
                      <div key={i} className="pathway-item">
                        <span className="pathway-check" aria-hidden="true">
                          <CheckIcon />
                        </span>
                        <span className="pathway-name">{pw.name}</span>
                        <span className="pathway-tag">{pw.tag}</span>
                      </div>
                    ))}

                    <div className="country-note">
                      * Estimates vary by pathway, application profile, and current processing conditions.
                    </div>
                  </div>

                  <div className="country-next-step">
                    <div>
                      <p className="country-next-step-title">
                        Ready to explore your {currentCountry.name} pathway?
                      </p>
                      <p className="country-next-step-copy">
                        Check your eligibility to identify the most suitable route for your profile.
                      </p>
                    </div>

                    <div className="country-next-step-actions">
                      <a
                        href={sectionHref("#calculator")}
                        className="btn btn-primary"
                      >
                        Check {currentCountry.name} Eligibility <ArrowRightIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CORE SERVICES SECTION (6 CARDS) */}
      <section id="services" className="section-padding" style={{ background: 'var(--bg-alt)', padding: '60px 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag" style={{ background: 'var(--bg-card)', color: 'var(--accent-blue)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem' }}>End-to-End Solutions</span>
            <h2 className="section-title text-gradient" style={{ fontSize: '2.2rem', margin: '12px 0' }}>Our Advisory Services</h2>
            <p className="section-desc" style={{ color: 'var(--text-secondary)' }}>
              Practical support from profile review and documentation through application, interview preparation, and post-submission follow-up.
            </p>
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div className="service-card glass-panel" style={{ padding: '28px' }}>
              <h3 className="service-title" style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>1. Visa Consultation</h3>
              <p className="service-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Discuss your goals, destination, visa category, eligibility questions, and next steps in a focused consultation.
              </p>
              <button
                type="button"
                onClick={() => setActiveModal('consultation')}
                className="service-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--accent-blue)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Book a Consultation <ArrowRightIcon />
              </button>
            </div>

            <div className="service-card glass-panel" style={{ padding: '28px' }}>
              <h3 className="service-title" style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>2. Profile Assessment</h3>
              <p className="service-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Review your age, education, experience, language profile, destination, and visa category to understand your potential pathway.
              </p>
              <button
                type="button"
                onClick={() => setActiveModal('assessment')}
                className="service-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--accent-blue)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Assess My Profile <ArrowRightIcon />
              </button>
            </div>

            <div className="service-card glass-panel" style={{ padding: '28px' }}>
              <h3 className="service-title" style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>3. Documentation Support</h3>
              <p className="service-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Get structured help with Educational Credential Assessment (ECA), proof of financial documentation, reference letters, statements, and supporting records.
              </p>
              <button
                onClick={() => setActiveModal('documentation')}
                className="service-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--accent-blue)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Explore Documentation Support <ArrowRightIcon />
              </button>
            </div>

            <div className="service-card glass-panel" style={{ padding: '28px' }}>
              <h3 className="service-title" style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>4. Application Preparation</h3>
              <span className="study-support-tag">Includes Study Visa Support</span>
              <p className="service-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Prepare complete applications for work, permanent residency, and study visa pathways, including forms, statements, financial documentation, and submission readiness.
              </p>
              <button
                type="button"
                onClick={() => setActiveModal('application')}
                className="service-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--accent-blue)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Explore Application Preparation <ArrowRightIcon />
              </button>
            </div>

            <div className="service-card glass-panel" style={{ padding: '28px' }}>
              <h3 className="service-title" style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>5. Interview / Pre-Departure Guidance</h3>
              <p className="service-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Prepare for visa interviews where applicable and get practical pre-departure guidance for study, work, and relocation.
              </p>
              <button
                type="button"
                onClick={() => setActiveModal('predeparture')}
                className="service-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--accent-blue)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Explore Pre-Departure Guidance <ArrowRightIcon />
              </button>
            </div>

            <div className="service-card glass-panel" style={{ padding: '28px' }}>
              <h3 className="service-title" style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>6. Post-Submission Support</h3>
              <p className="service-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Stay supported after submission with status follow-up guidance, document response support, and next-step assistance through the decision stage.
              </p>
              <button
                type="button"
                onClick={() => setActiveModal('postsubmission')}
                className="service-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--accent-blue)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Explore Post-Submission Support <ArrowRightIcon />
              </button>
            </div>
          </div>

          {/* DYNAMIC SNAPSHOT CARD */}
          <div className="profile-score-preview glass-panel" style={{
            marginTop: '22px',
            padding: '20px 24px',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '18px',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>
                Preliminary Profile Snapshot
              </div>
              <div style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: '800' }}>
                Pathway: <span style={{ color: 'var(--accent-blue)' }}>{calculatorCountry === 'canada' ? 'Canada FSW' : calculatorCountry === 'australia' ? `Australia ${australiaCalc.visa}` : calculatorCountry === 'germany' ? 'Germany Opportunity Card' : calculatorCountry === 'uk' ? 'UK Skilled Worker' : 'New Zealand SMC'}</span>
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '4px' }}>
                {calcResult?.score !== null && calcResult?.score !== undefined
                  ? <>Latest result: <strong style={{ color: 'var(--text-primary)' }}>{calcResult.score}{calcResult.max ? ` / ${calcResult.max}` : ' points'}</strong></>
                  : 'No calculation run yet'}
              </div>
              <div style={{ color: calcResult?.eligible === false ? '#dc2626' : '#16a34a', fontWeight: '700', fontSize: '0.92rem', marginTop: '4px' }}>
                {calcResult?.eligible === true
                  ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><CheckIcon /> Preliminary threshold met</span>
                  : calcResult?.eligible === false
                    ? 'Preliminary threshold not met'
                    : 'Preliminary assessment only'}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '4px', maxWidth: '560px', lineHeight: '1.45' }}>
                Eligibility depends on your individual profile and current program requirements.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '9px', flexWrap: 'wrap' }}>
              <a href={sectionHref("#calculator")} className="btn btn-secondary" style={{ padding: '10px 14px', background: 'var(--bg-main)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', textDecoration: 'none', borderRadius: '8px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Get Detailed Assessment <ArrowRightIcon />
              </a>
              <a href={sectionHref("#contact")} className="btn btn-primary" style={{ padding: '10px 14px', background: 'var(--accent-blue)', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Book a Consultation <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: DEDICATED STUDY VISA SECTION */}
      <StudyVisa />


      {/* VISA ROADMAP — placed directly below Advisory Services */}
      <section id="visa-roadmap" className="section-padding roadmap-section" style={{ padding: '76px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div className="section-header roadmap-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag" style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '7px 14px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px' }}>
              VISA ROADMAP
            </span>
            <h2 className="section-title text-gradient" style={{ fontSize: '2.45rem', margin: '16px 0 12px' }}>
              The Step-by-Step Pathway
            </h2>
            <p className="section-desc" style={{ color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto', lineHeight: '1.7' }}>
              We divide your immigration process into clear, manageable phases, from profile assessment and documentation to submission and post-landing support.
            </p>
          </div>

          <div className="roadmap-timeline">
            <div className="roadmap-line" aria-hidden="true"></div>

            <div className="roadmap-step roadmap-step-left">
              <div className="roadmap-card glass-panel">
                <div className="roadmap-step-number">1</div>
                <span className="roadmap-kicker">ASSESSMENT</span>
                <h3>Evaluation &amp; Strategy</h3>
                <p>
                  We review your profile, goals, destination and visa category to identify suitable pathways and build a practical strategy around your circumstances.
                </p>
              </div>
            </div>

            <div className="roadmap-step roadmap-step-right">
              <div className="roadmap-card glass-panel">
                <div className="roadmap-step-number">2</div>
                <span className="roadmap-kicker">PREPARATION</span>
                <h3>Documentation &amp; Application</h3>
                <p>
                  We organize the required records, supporting evidence, forms and application materials so your file is structured and ready for submission.
                </p>
              </div>
            </div>

            <div className="roadmap-step roadmap-step-left">
              <div className="roadmap-card glass-panel">
                <div className="roadmap-step-number">3</div>
                <span className="roadmap-kicker">SUBMISSION</span>
                <h3>Submission &amp; Decision</h3>
                <p>
                  We support the submission stage and help you understand requests, updates and next steps as your application moves through the relevant process.
                </p>
              </div>
            </div>

            <div className="roadmap-step roadmap-step-right">
              <div className="roadmap-card glass-panel">
                <div className="roadmap-step-number">4</div>
                <span className="roadmap-kicker">RELOCATION</span>
                <h3>Pre &amp; Post Landing</h3>
                <p>
                  Get practical guidance for interview or pre-departure preparation, relocation planning and post-submission support through the next stage of your journey.
                </p>
              </div>
            </div>
          </div>

          <div className="roadmap-cta glass-panel">
            <div>
              <span className="roadmap-cta-label">READY FOR YOUR NEXT STEP?</span>
              <h3>Not sure which pathway fits your profile?</h3>
              <p>Start with a preliminary assessment or speak with an advisor about your goals.</p>
            </div>
            <div className="country-next-step-actions">
              <a href={sectionHref("#calculator")} className="btn btn-primary" style={{ background: 'var(--accent-blue)', color: '#fff', padding: '11px 17px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                Assess My Profile <ArrowRightIcon />
              </a>
              <a href={sectionHref("#contact")} className="btn btn-secondary" style={{ background: 'var(--bg-main)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '11px 17px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                Book a Consultation <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS MODALS — each CTA routes to its relevant section */}
      {activeModal && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModal(null)
          }}
          style={{
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
            zIndex: 1200,
            padding: '20px',
            overflowY: 'auto'
          }}
        >
          <div
            className="glass-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--accent-blue)',
              borderRadius: '16px',
              maxWidth: '700px',
              width: '100%',
              maxHeight: 'calc(100vh - 40px)',
              overflowY: 'auto',
              padding: '30px',
              position: 'relative',
              color: 'var(--text-primary)'
            }}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              aria-label="Close service details"
              style={{
                position: 'absolute',
                top: '14px',
                right: '16px',
                width: '38px',
                height: '38px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                color: 'var(--text-primary)',
                fontSize: '1.25rem',
                lineHeight: 1,
                cursor: 'pointer',
                zIndex: 2
              }}
            >
              ✕
            </button>

            <div style={{ paddingRight: '48px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  background: 'rgba(37, 99, 235, 0.12)',
                  color: 'var(--accent-blue)',
                  padding: '5px 12px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  letterSpacing: '.3px'
                }}
              >
                Detailed Overview
              </span>

              {activeModal === 'consultation' && (
                <ServiceModalContent
                  title="Get Clarity Before You Begin"
                  service="Immigration Consultation"
                  description="Every immigration journey starts with understanding the right pathway. Our consultation is designed to help you discuss your goals, circumstances, preferred destination and available options before taking the next step."
                  intro="During the consultation, we may discuss:"
                  bullets={[
                    'Your immigration, study or international mobility goals',
                    'Preferred country and visa category',
                    'Education and professional background',
                    'Work experience and current profile',
                    'Relevant eligibility requirements',
                    'Possible immigration or visa pathways',
                    'Key documentation requirements',
                    'Potential challenges or gaps in your profile',
                    'Practical next steps'
                  ]}
                  note="A consultation provides professional guidance based on the information available at the time and does not guarantee visa, admission, permanent residence or any other immigration outcome."
                  cta="Book a Consultation"
                  ctaHref="#contact"
                  closeModal={() => setActiveModal(null)}
                />
              )}

              {activeModal === 'assessment' && (
                <ServiceModalContent
                  title="Understand Where Your Profile Stands"
                  service="Profile & Eligibility Assessment"
                  description="Before starting an application, it is important to understand whether your profile potentially meets the requirements of the relevant immigration or visa pathway. Our profile assessment reviews key factors that may influence your eligibility and available options."
                  intro="Your assessment may include:"
                  bullets={[
                    'Age',
                    'Educational qualifications',
                    'Work experience',
                    'Occupation and professional background',
                    'Language proficiency',
                    'Preferred destination',
                    'Visa or immigration category',
                    'Previous immigration history, where relevant',
                    'Points-based criteria, where applicable',
                    'Potential areas for profile improvement'
                  ]}
                  extra="Where multiple pathways may be relevant, we can help identify options worth exploring based on the information you provide."
                  note="An eligibility assessment is indicative and does not constitute a guarantee of selection, invitation, visa approval or permanent residence."
                  cta="Check Your Eligibility"
                  ctaHref="#calculator"
                  closeModal={() => setActiveModal(null)}
                />
              )}

              {activeModal === 'documentation' && (
                <ServiceModalContent
                  title="Prepare Your Documents with Greater Confidence"
                  service="Documentation Support"
                  description="Immigration, visa and study applications can involve extensive documentation. CloysterVisa provides structured support to help applicants understand, organize and prepare the documents required for their selected pathway."
                  intro="Support may include guidance relating to:"
                  bullets={[
                    'Educational Credential Assessment (ECA)',
                    'Educational documents',
                    'Employment and reference letters',
                    'Proof of funds and financial documentation',
                    'Personal and identity documents',
                    'Supporting statements and explanations',
                    'Application-specific forms',
                    'Document organization and review',
                    'Additional supporting records where applicable'
                  ]}
                  extra="Document requirements vary according to country, visa category and individual circumstances."
                  note="Clients remain responsible for providing genuine, complete and accurate documents and information."
                  cta="Book a Documentation Consultation"
                  ctaHref="#contact"
                  closeModal={() => setActiveModal(null)}
                />
              )}

              {activeModal === 'application' && (
                <ServiceModalContent
                  title="Structured Support from Documentation to Submission Readiness"
                  service="Application Preparation"
                  description="Once the appropriate pathway has been identified, we help clients prepare their application in an organized and systematic manner. Support is available for relevant work, permanent residency and study visa pathways, depending on the destination and individual case."
                  intro="Application preparation may include:"
                  bullets={[
                    'Application requirement review',
                    'Document checklist preparation',
                    'Application form guidance',
                    'Supporting document organization',
                    'Statement and explanation guidance',
                    'Financial documentation guidance',
                    'Study visa documentation support',
                    'Review for completeness and consistency',
                    'Identification of missing information or documents',
                    'Pre-submission readiness review'
                  ]}
                  extra="Our objective is to help you submit a well-organized application based on accurate information and the requirements applicable to your case."
                  note="Final decisions remain entirely with the relevant immigration authority, embassy, consulate, educational institution or other competent authority."
                  cta="Start Your Application Assessment"
                  ctaHref="#calculator"
                  closeModal={() => setActiveModal(null)}
                />
              )}

              {activeModal === 'predeparture' && (
                <ServiceModalContent
                  title="Prepare for the Next Stage of Your Journey"
                  service="Interview & Pre-Departure Guidance"
                  description="Where an interview is applicable, preparation can help you understand what to expect and communicate your circumstances clearly and confidently. For clients preparing to relocate internationally, we can also provide practical pre-departure guidance."
                  intro="Support may include:"
                  bullets={[
                    'Visa interview preparation, where applicable',
                    'Understanding commonly discussed areas',
                    'Reviewing important application information before an interview',
                    'Guidance on presenting information clearly and truthfully',
                    'Pre-departure documentation checklist',
                    'Travel preparation guidance',
                    'Important documents to carry',
                    'Initial settlement and arrival considerations',
                    'Practical preparation for study, work or relocation'
                  ]}
                  note="Interview requirements and procedures vary according to the destination and visa category."
                  cta="Explore Pre-Departure Support"
                  ctaHref="#contact"
                  closeModal={() => setActiveModal(null)}
                />
              )}

              {activeModal === 'postsubmission' && (
                <ServiceModalContent
                  title="Support Doesn't End When the Application Is Submitted"
                  service="Post-Submission Support"
                  description="After submission, applicants may receive updates, requests or further instructions from the relevant authority. CloysterVisa provides continued support during this stage for applications handled under the agreed service scope."
                  intro="Post-submission support may include:"
                  bullets={[
                    'Application status follow-up guidance',
                    'Understanding official correspondence',
                    'Guidance regarding additional document requests',
                    'Document response preparation support',
                    'Updates regarding relevant next steps',
                    'Interview or biometric instruction guidance',
                    'Passport request or decision-stage guidance, where applicable',
                    'General next-step assistance following a decision'
                  ]}
                  note="Processing times and final decisions are controlled by the relevant government, embassy, institution or other authority and cannot be guaranteed by CloysterVisa."
                  cta="Contact CloysterVisa"
                  ctaHref="#contact"
                  closeModal={() => setActiveModal(null)}
                />
              )}

            </div>
          </div>
        </div>
      )}

      {/* PROFESSIONAL ELIGIBILITY CALCULATOR */}
      <section id="calculator" className="section-padding" style={{ padding: '82px 0', background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="calculator-intro">
            <div className="calculator-eyebrow">PERSONALISED PATHWAY SCREENING</div>
            <h2 className="section-title text-gradient">Check Your Immigration Eligibility</h2>
            <p>
              Choose your destination and pathway, enter your profile details, and receive a preliminary result.
              Point values are intentionally kept out of the questions and are revealed only after calculation.
            </p>
          </div>

          <div className="calculator-professional-shell">
            <div className="calculator-country-strip" role="tablist" aria-label="Choose destination">
              {CALCULATOR_COUNTRIES.map((country) => {
                const active = calculatorCountry === country.id
                return (
                  <button
                    key={country.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    className={`calculator-country-tab ${active ? 'active' : ''}`}
                    onClick={() => {
                      setCalculatorCountry(country.id)
                      setCalcResult(null)
                    }}
                  >
                    <span className="calculator-country-flag">{country.label.split(' ')[0]}</span>
                    <span className="calculator-country-copy">
                      <strong>{country.label.replace(country.label.split(' ')[0], '').trim()}</strong>
                      <small>{country.subtitle}</small>
                    </span>
                    <ArrowRightIcon size={16} />
                  </button>
                )
              })}
            </div>

            <div className="calculator-main-card">
              <div className="calculator-card-head">
                <div>
                  <span className="calculator-kicker">
                    {calculatorCountry === 'canada' && 'CANADA'}
                    {calculatorCountry === 'australia' && 'AUSTRALIA'}
                    {calculatorCountry === 'germany' && 'GERMANY'}
                    {calculatorCountry === 'uk' && 'UNITED KINGDOM'}
                    {calculatorCountry === 'nz' && 'NEW ZEALAND'}
                  </span>
                  <h3>
                    {calculatorCountry === 'canada' && 'Choose your Canadian pathway'}
                    {calculatorCountry === 'australia' && 'Choose your Australian skilled visa'}
                    {calculatorCountry === 'germany' && 'Choose your Germany Opportunity Card route'}
                    {calculatorCountry === 'uk' && 'Skilled Worker preliminary assessment'}
                    {calculatorCountry === 'nz' && 'Choose your New Zealand pathway'}
                  </h3>
                  <p>
                    {calculatorCountry === 'canada' && 'Answer the pathway-specific questions below. Your score and eligibility status will appear after you calculate.'}
                    {calculatorCountry === 'australia' && 'Select the visa subclass first, then complete the skilled migration profile questions.'}
                    {calculatorCountry === 'germany' && 'Select the access route first. The questions will adapt to that route.'}
                    {calculatorCountry === 'uk' && 'The UK route uses sponsorship, skill, English and salary requirements rather than an age-based grid.'}
                    {calculatorCountry === 'nz' && 'Select one pathway. Common requirements are collected once and the relevant pathway questions appear below.'}
                  </p>
                </div>
                <div className="calculator-step-badge">STEP 1 <span>OF 2</span></div>
              </div>

              {/* CANADA */}
              {calculatorCountry === 'canada' && (
                <div className="calculator-content">
                  <div className="calculator-pathway-switch">
                    {[
                      ['FSWP', 'Federal Skilled Worker'],
                      ['CEC', 'Canadian Experience Class'],
                      ['FSTP', 'Federal Skilled Trades']
                    ].map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        className={canadaCalc.program === value ? 'active' : ''}
                        onClick={() => {
                          setCanadaCalc({ ...canadaCalc, program: value })
                          setCalcResult(null)
                        }}
                      >
                        <span>{value}</span>
                        <small>{label}</small>
                      </button>
                    ))}
                  </div>

                  {canadaCalc.program === 'FSWP' && (
                    <>
                      <div className="calculator-section-heading">
                        <span>01</span>
                        <div><strong>Profile & selection factors</strong><small>Enter your information without worrying about the score.</small></div>
                      </div>
                      <div className="calculator-form-grid">
                        <CalculatorField label="Age">
                          <select className="calculator-select" value={canadaCalc.age} onChange={(e) => setCanadaCalc({ ...canadaCalc, age: e.target.value })}>
                            <option value="18-35">18–35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47+">47 or older</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="Skilled Work Experience">
                          <select className="calculator-select" value={canadaCalc.workExperience} onChange={(e) => setCanadaCalc({ ...canadaCalc, workExperience: e.target.value })}>
                            <option value="1">1 year</option><option value="2-3">2–3 years</option><option value="4-5">4–5 years</option><option value="6+">6+ years</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="Education">
                          <select className="calculator-select" value={canadaCalc.education} onChange={(e) => setCanadaCalc({ ...canadaCalc, education: e.target.value })}>
                            <option value="highschool">Secondary / high school</option><option value="postsecondary1">1-year post-secondary credential</option><option value="postsecondary2">2-year post-secondary credential</option><option value="bachelor">Bachelor's / 3+ year credential</option><option value="twoCredentials">Two or more credentials</option><option value="masters">Master's / eligible professional degree</option><option value="phd">Doctorate</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="First Official Language — Speaking">
                          <select className="calculator-select" value={canadaCalc.firstLanguageSpeaking} onChange={(e) => setCanadaCalc({ ...canadaCalc, firstLanguageSpeaking: e.target.value })}>
                            <option value="6">CLB 9 or higher</option><option value="5">CLB 8</option><option value="4">CLB 7</option><option value="0">Below CLB 7</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="First Official Language — Listening">
                          <select className="calculator-select" value={canadaCalc.firstLanguageListening} onChange={(e) => setCanadaCalc({ ...canadaCalc, firstLanguageListening: e.target.value })}>
                            <option value="6">CLB 9 or higher</option><option value="5">CLB 8</option><option value="4">CLB 7</option><option value="0">Below CLB 7</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="First Official Language — Reading">
                          <select className="calculator-select" value={canadaCalc.firstLanguageReading} onChange={(e) => setCanadaCalc({ ...canadaCalc, firstLanguageReading: e.target.value })}>
                            <option value="6">CLB 9 or higher</option><option value="5">CLB 8</option><option value="4">CLB 7</option><option value="0">Below CLB 7</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="First Official Language — Writing">
                          <select className="calculator-select" value={canadaCalc.firstLanguageWriting} onChange={(e) => setCanadaCalc({ ...canadaCalc, firstLanguageWriting: e.target.value })}>
                            <option value="6">CLB 9 or higher</option><option value="5">CLB 8</option><option value="4">CLB 7</option><option value="0">Below CLB 7</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="Second Official Language">
                          <select className="calculator-select" value={canadaCalc.secondLanguage} onChange={(e) => setCanadaCalc({ ...canadaCalc, secondLanguage: e.target.value })}>
                            <option value="0">CLB 5 not met in all four abilities</option><option value="4">CLB 5 or higher in all four abilities</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="Arranged Employment">
                          <select className="calculator-select" value={canadaCalc.arrangedEmployment} onChange={(e) => setCanadaCalc({ ...canadaCalc, arrangedEmployment: e.target.value })}>
                            <option value="0">No qualifying arranged employment</option><option value="10">Qualifying arranged employment</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="Adaptability">
                          <select className="calculator-select" value={canadaCalc.adaptability} onChange={(e) => setCanadaCalc({ ...canadaCalc, adaptability: e.target.value })}>
                            {Array.from({ length: 11 }, (_, i) => <option key={i} value={i}>{i === 1 ? '1 point' : `${i} points`}</option>)}
                          </select>
                        </CalculatorField>
                      </div>

                      <div className="calculator-section-heading">
                        <span>02</span>
                        <div><strong>Minimum requirements</strong><small>These checks do not add points; they determine whether the pathway requirements are met.</small></div>
                      </div>
                      <div className="calculator-form-grid">
                                        <CalculatorField label="Qualifying Skilled Work — Years">
                          <select className="calculator-select" value={canadaCalc.skilledWorkYears} onChange={(e) => setCanadaCalc({ ...canadaCalc, skilledWorkYears: e.target.value })}>
                            <option value="0">Less than 1 year</option><option value="1">1 year or more</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="Qualifying Work Hours">
                          <select className="calculator-select" value={canadaCalc.skilledWorkHours} onChange={(e) => setCanadaCalc({ ...canadaCalc, skilledWorkHours: e.target.value })}>
                            <option value="0">Below 1,560 hours</option><option value="1560">1,560 hours or more</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="Work Within Last 10 Years">
                          <select className="calculator-select" value={canadaCalc.workWithin10Years} onChange={(e) => setCanadaCalc({ ...canadaCalc, workWithin10Years: e.target.value })}>
                            <option value="yes">Yes</option><option value="no">No</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="Work Paid">
                          <select className="calculator-select" value={canadaCalc.skilledWorkPaid} onChange={(e) => setCanadaCalc({ ...canadaCalc, skilledWorkPaid: e.target.value })}>
                            <option value="yes">Yes</option><option value="no">No</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="Continuous Primary Occupation Work">
                          <select className="calculator-select" value={canadaCalc.continuousPrimaryOccupationWork} onChange={(e) => setCanadaCalc({ ...canadaCalc, continuousPrimaryOccupationWork: e.target.value })}>
                            <option value="yes">Yes</option><option value="no">No</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="Work TEER">
                          <select className="calculator-select" value={canadaCalc.workTEER} onChange={(e) => setCanadaCalc({ ...canadaCalc, workTEER: e.target.value })}>
                            <option value="0">TEER 0</option><option value="1">TEER 1</option><option value="2">TEER 2</option><option value="3">TEER 3</option><option value="4">TEER 4 or 5</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="Foreign Education Assessment">
                          <select className="calculator-select" value={canadaCalc.foreignEducationECA} onChange={(e) => setCanadaCalc({ ...canadaCalc, foreignEducationECA: e.target.value })}>
                            <option value="yes">ECA available / not required for Canadian credential</option><option value="no">Not available</option>
                          </select>
                        </CalculatorField>
                        <CalculatorField label="Settlement Funds">
                          <select className="calculator-select" value={canadaCalc.settlementFunds} onChange={(e) => setCanadaCalc({ ...canadaCalc, settlementFunds: e.target.value })}><option value="yes">Available / requirement met</option><option value="no">Not met</option></select>
                        </CalculatorField>
                        <CalculatorField label="Admissibility">
                          <select className="calculator-select" value={canadaCalc.admissible} onChange={(e) => setCanadaCalc({ ...canadaCalc, admissible: e.target.value })}><option value="yes">No known issue</option><option value="no">Potential issue</option></select>
                        </CalculatorField>
                        <CalculatorField label="Intention to Live Outside Quebec">
                          <select className="calculator-select" value={canadaCalc.intendOutsideQuebec} onChange={(e) => setCanadaCalc({ ...canadaCalc, intendOutsideQuebec: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select>
                        </CalculatorField>
                      </div>
                    </>
                  )}

                  {canadaCalc.program === 'CEC' && (
                    <>
                      <div className="calculator-section-heading">
                        <span>01</span><div><strong>Canadian skilled work</strong><small>Enter the details of your qualifying Canadian employment.</small></div>
                      </div>
                      <div className="calculator-form-grid">
                        <CalculatorField label="Canadian Work Experience"><select className="calculator-select" value={canadaCalc.canadianWorkYears} onChange={(e) => setCanadaCalc({ ...canadaCalc, canadianWorkYears: e.target.value })}><option value="0">Less than 1 year</option><option value="1">1 year or more</option></select></CalculatorField>
                        <CalculatorField label="Canadian Work Hours"><select className="calculator-select" value={canadaCalc.canadianWorkHours} onChange={(e) => setCanadaCalc({ ...canadaCalc, canadianWorkHours: e.target.value })}><option value="0">Below 1,560 hours</option><option value="1560">1,560 hours or more</option></select></CalculatorField>
                        <CalculatorField label="Work Within Last 3 Years"><select className="calculator-select" value={canadaCalc.canadianWorkLast3Years} onChange={(e) => setCanadaCalc({ ...canadaCalc, canadianWorkLast3Years: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                        <CalculatorField label="Canadian Work TEER"><select className="calculator-select" value={canadaCalc.canadianWorkTEER} onChange={(e) => setCanadaCalc({ ...canadaCalc, canadianWorkTEER: e.target.value })}><option value="0">TEER 0</option><option value="1">TEER 1</option><option value="2">TEER 2</option><option value="3">TEER 3</option><option value="4">TEER 4 or 5</option></select></CalculatorField>
                        <CalculatorField label="Work Authorised"><select className="calculator-select" value={canadaCalc.canadianWorkAuthorized} onChange={(e) => setCanadaCalc({ ...canadaCalc, canadianWorkAuthorized: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                        <CalculatorField label="Work Paid"><select className="calculator-select" value={canadaCalc.canadianWorkPaid} onChange={(e) => setCanadaCalc({ ...canadaCalc, canadianWorkPaid: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                        <CalculatorField label="Language Level"><select className="calculator-select" value={canadaCalc.canadianLanguageCLB} onChange={(e) => setCanadaCalc({ ...canadaCalc, canadianLanguageCLB: e.target.value })}><option value="4">Below CLB 5</option><option value="5">CLB 5–6</option><option value="7">CLB 7+</option></select></CalculatorField>
                      </div>
                      <div className="calculator-section-heading"><span>02</span><div><strong>General requirements</strong><small>These are screening checks rather than point factors.</small></div></div>
                      <div className="calculator-form-grid">
                        <CalculatorField label="Admissibility"><select className="calculator-select" value={canadaCalc.admissible} onChange={(e) => setCanadaCalc({ ...canadaCalc, admissible: e.target.value })}><option value="yes">No known issue</option><option value="no">Potential issue</option></select></CalculatorField>
                        <CalculatorField label="Intention to Live Outside Quebec"><select className="calculator-select" value={canadaCalc.intendOutsideQuebec} onChange={(e) => setCanadaCalc({ ...canadaCalc, intendOutsideQuebec: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                      </div>
                    </>
                  )}

                  {canadaCalc.program === 'FSTP' && (
                    <>
                      <div className="calculator-section-heading">
                        <span>01</span><div><strong>Skilled trade experience</strong><small>Enter your qualifying trade experience and language results.</small></div></div>
                      <div className="calculator-form-grid">
                        <CalculatorField label="Skilled Trade Experience"><select className="calculator-select" value={canadaCalc.tradeWorkYears} onChange={(e) => setCanadaCalc({ ...canadaCalc, tradeWorkYears: e.target.value })}><option value="0">Less than 2 years</option><option value="2">2 years or more</option></select></CalculatorField>
                        <CalculatorField label="Trade Work Hours"><select className="calculator-select" value={canadaCalc.tradeWorkHours} onChange={(e) => setCanadaCalc({ ...canadaCalc, tradeWorkHours: e.target.value })}><option value="0">Below 3,120 hours</option><option value="3120">3,120 hours or more</option></select></CalculatorField>
                        <CalculatorField label="Work Within Last 5 Years"><select className="calculator-select" value={canadaCalc.tradeWorkLast5Years} onChange={(e) => setCanadaCalc({ ...canadaCalc, tradeWorkLast5Years: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                        <CalculatorField label="Work Paid"><select className="calculator-select" value={canadaCalc.tradeWorkPaid} onChange={(e) => setCanadaCalc({ ...canadaCalc, tradeWorkPaid: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                        <CalculatorField label="Language — Speaking"><select className="calculator-select" value={canadaCalc.fstLanguageSpeaking} onChange={(e) => setCanadaCalc({ ...canadaCalc, fstLanguageSpeaking: e.target.value })}><option value="5">CLB 5+</option><option value="0">Below CLB 5</option></select></CalculatorField>
                        <CalculatorField label="Language — Listening"><select className="calculator-select" value={canadaCalc.fstLanguageListening} onChange={(e) => setCanadaCalc({ ...canadaCalc, fstLanguageListening: e.target.value })}><option value="5">CLB 5+</option><option value="0">Below CLB 5</option></select></CalculatorField>
                        <CalculatorField label="Language — Reading"><select className="calculator-select" value={canadaCalc.fstLanguageReading} onChange={(e) => setCanadaCalc({ ...canadaCalc, fstLanguageReading: e.target.value })}><option value="4">CLB 4+</option><option value="0">Below CLB 4</option></select></CalculatorField>
                        <CalculatorField label="Language — Writing"><select className="calculator-select" value={canadaCalc.fstLanguageWriting} onChange={(e) => setCanadaCalc({ ...canadaCalc, fstLanguageWriting: e.target.value })}><option value="4">CLB 4+</option><option value="0">Below CLB 4</option></select></CalculatorField>
                      </div>
                      <div className="calculator-section-heading"><span>02</span><div><strong>Offer, certificate & general requirements</strong><small>At least one of the trade offer/certificate options must apply.</small></div></div>
                      <div className="calculator-form-grid">
                        <CalculatorField label="Valid Trade Job Offer"><select className="calculator-select" value={canadaCalc.validTradeJobOffer} onChange={(e) => setCanadaCalc({ ...canadaCalc, validTradeJobOffer: e.target.value })}><option value="no">No</option><option value="yes">Yes</option></select></CalculatorField>
                        <CalculatorField label="Canadian Trade Certificate"><select className="calculator-select" value={canadaCalc.canadianTradeCertificate} onChange={(e) => setCanadaCalc({ ...canadaCalc, canadianTradeCertificate: e.target.value })}><option value="no">No</option><option value="yes">Yes</option></select></CalculatorField>
                        <CalculatorField label="Settlement Funds"><select className="calculator-select" value={canadaCalc.settlementFunds} onChange={(e) => setCanadaCalc({ ...canadaCalc, settlementFunds: e.target.value })}><option value="yes">Available / requirement met</option><option value="no">Not met</option></select></CalculatorField>
                        <CalculatorField label="Admissibility"><select className="calculator-select" value={canadaCalc.admissible} onChange={(e) => setCanadaCalc({ ...canadaCalc, admissible: e.target.value })}><option value="yes">No known issue</option><option value="no">Potential issue</option></select></CalculatorField>
                        <CalculatorField label="Intention to Live Outside Quebec"><select className="calculator-select" value={canadaCalc.intendOutsideQuebec} onChange={(e) => setCanadaCalc({ ...canadaCalc, intendOutsideQuebec: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* AUSTRALIA */}
              {calculatorCountry === 'australia' && (
                <div className="calculator-content">
                  <div className="calculator-form-grid">
                    <CalculatorField label="Visa / Pathway">
                      <select className="calculator-select" value={australiaCalc.visa} onChange={(e) => setAustraliaCalc({ ...australiaCalc, visa: e.target.value })}>
                        <option value="189">Subclass 189 — Skilled Independent</option><option value="190">Subclass 190 — Skilled Nominated</option><option value="491">Subclass 491 — Skilled Work Regional</option>
                      </select>
                    </CalculatorField>
                    <CalculatorField label="Age"><select className="calculator-select" value={australiaCalc.age} onChange={(e) => setAustraliaCalc({ ...australiaCalc, age: e.target.value })}><option value="18-24">18–24</option><option value="25-32">25–32</option><option value="33-39">33–39</option><option value="40-44">40–44</option><option value="45+">45 or older</option></select></CalculatorField>
                    <CalculatorField label="English Level"><select className="calculator-select" value={australiaCalc.english} onChange={(e) => setAustraliaCalc({ ...australiaCalc, english: e.target.value })}><option value="competent">Competent</option><option value="proficient">Proficient</option><option value="superior">Superior</option></select></CalculatorField>
                    <CalculatorField label="Overseas Skilled Employment"><select className="calculator-select" value={australiaCalc.overseasExperience} onChange={(e) => setAustraliaCalc({ ...australiaCalc, overseasExperience: e.target.value })}><option value="0">Less than 3 years</option><option value="3-4">3–4 years</option><option value="5-7">5–7 years</option><option value="8+">8+ years</option></select></CalculatorField>
                    <CalculatorField label="Australian Skilled Employment"><select className="calculator-select" value={australiaCalc.australianExperience} onChange={(e) => setAustraliaCalc({ ...australiaCalc, australianExperience: e.target.value })}><option value="0">Less than 1 year</option><option value="1-2">1–2 years</option><option value="3-4">3–4 years</option><option value="5-7">5–7 years</option><option value="8+">8+ years</option></select></CalculatorField>
                    <CalculatorField label="Highest Qualifying Education"><select className="calculator-select" value={australiaCalc.education} onChange={(e) => setAustraliaCalc({ ...australiaCalc, education: e.target.value })}><option value="doctorate">Doctorate</option><option value="bachelor">Bachelor / qualifying Master</option><option value="diploma">Eligible diploma / trade qualification</option></select></CalculatorField>
                    <CalculatorField label="Occupation on Relevant Skilled List"><select className="calculator-select" value={australiaCalc.occupationOnRelevantList} onChange={(e) => setAustraliaCalc({ ...australiaCalc, occupationOnRelevantList: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                    <CalculatorField label="Positive Skills Assessment"><select className="calculator-select" value={australiaCalc.skillsAssessmentPositive} onChange={(e) => setAustraliaCalc({ ...australiaCalc, skillsAssessmentPositive: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                    <CalculatorField label="Expression of Interest (EOI)"><select className="calculator-select" value={australiaCalc.EOI} onChange={(e) => setAustraliaCalc({ ...australiaCalc, EOI: e.target.value })}><option value="yes">Submitted</option><option value="no">Not submitted</option></select></CalculatorField>
                    <CalculatorField label="Invitation"><select className="calculator-select" value={australiaCalc.invited} onChange={(e) => setAustraliaCalc({ ...australiaCalc, invited: e.target.value })}><option value="yes">Received</option><option value="no">Not received</option></select></CalculatorField>
                    <CalculatorField label="Health Requirement"><select className="calculator-select" value={australiaCalc.health} onChange={(e) => setAustraliaCalc({ ...australiaCalc, health: e.target.value })}><option value="yes">No known issue / requirement met</option><option value="no">Not met / issue</option></select></CalculatorField>
                    <CalculatorField label="Character Requirement"><select className="calculator-select" value={australiaCalc.character} onChange={(e) => setAustraliaCalc({ ...australiaCalc, character: e.target.value })}><option value="yes">No known issue / requirement met</option><option value="no">Not met / issue</option></select></CalculatorField>
                    {australiaCalc.visa !== '189' && <CalculatorField label={australiaCalc.visa === '190' ? 'State / Territory Nomination' : 'State Nomination or Eligible Family Sponsor'}><select className="calculator-select" value={australiaCalc.visa === '190' ? australiaCalc.stateNomination : (australiaCalc.stateNomination === 'yes' ? 'state' : 'family')} onChange={(e) => {
                      if (australiaCalc.visa === '190') setAustraliaCalc({ ...australiaCalc, stateNomination: e.target.value })
                      else setAustraliaCalc({ ...australiaCalc, stateNomination: e.target.value === 'state' ? 'yes' : 'no', eligibleFamilySponsor: e.target.value === 'family' ? 'yes' : 'no' })
                    }}>
                      {australiaCalc.visa === '190' ? <><option value="yes">Yes</option><option value="no">No</option></> : <><option value="state">State / territory nomination</option><option value="family">Eligible family sponsor</option><option value="none">Neither</option></>}
                    </select></CalculatorField>}
                    {australiaCalc.visa === '491' && <CalculatorField label="Regional Requirement"><select className="calculator-select" value={australiaCalc.regionalRequirement} onChange={(e) => setAustraliaCalc({ ...australiaCalc, regionalRequirement: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>}
                  </div>
                </div>
              )}

              {/* GERMANY */}
              {calculatorCountry === 'germany' && (
                <div className="calculator-content">
                  <div className="calculator-pathway-switch two">
                    <button type="button" className={germanyCalc.route === 'recognised' ? 'active' : ''} onClick={() => { setGermanyCalc({ ...germanyCalc, route: 'recognised' }); setCalcResult(null) }}><span>Recognised qualification</span><small>Direct route</small></button>
                    <button type="button" className={germanyCalc.route === 'points' ? 'active' : ''} onClick={() => { setGermanyCalc({ ...germanyCalc, route: 'points' }); setCalcResult(null) }}><span>Points route</span><small>Qualification + points</small></button>
                  </div>

                  {germanyCalc.route === 'recognised' ? (
                    <>
                      <div className="calculator-section-heading"><span>01</span><div><strong>Core requirements</strong><small>Screen the recognised-qualification route first.</small></div></div>
                      <div className="calculator-form-grid">
                        <CalculatorField label="Qualification Fully Recognised in Germany"><select className="calculator-select" value={germanyCalc.qualificationFullyRecognisedGermany} onChange={(e) => setGermanyCalc({ ...germanyCalc, qualificationFullyRecognisedGermany: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                        <CalculatorField label="Applicable Age Requirement"><select className="calculator-select" value={germanyCalc.ageRequirement} onChange={(e) => setGermanyCalc({ ...germanyCalc, ageRequirement: e.target.value })}><option value="yes">Requirement met</option><option value="no">Not met</option></select></CalculatorField>
                        <CalculatorField label="Financial Resources"><select className="calculator-select" value={germanyCalc.financialResources} onChange={(e) => setGermanyCalc({ ...germanyCalc, financialResources: e.target.value })}><option value="yes">Requirement met</option><option value="no">Not met</option></select></CalculatorField>
                        <CalculatorField label="Health Insurance"><select className="calculator-select" value={germanyCalc.healthInsurance} onChange={(e) => setGermanyCalc({ ...germanyCalc, healthInsurance: e.target.value })}><option value="yes">Requirement met</option><option value="no">Not met</option></select></CalculatorField>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="calculator-section-heading"><span>01</span><div><strong>Qualification & language</strong><small>Confirm the base requirements before your points are calculated.</small></div></div>
                      <div className="calculator-form-grid">
                        <CalculatorField label="Completed Vocational or Academic Training"><select className="calculator-select" value={germanyCalc.qualificationCompleted} onChange={(e) => setGermanyCalc({ ...germanyCalc, qualificationCompleted: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                        <CalculatorField label="Qualification Recognised in Country of Origin"><select className="calculator-select" value={germanyCalc.qualificationRecognisedInOriginCountry} onChange={(e) => setGermanyCalc({ ...germanyCalc, qualificationRecognisedInOriginCountry: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                        <CalculatorField label="German Language Level"><select className="calculator-select" value={germanyCalc.germanLevel} onChange={(e) => setGermanyCalc({ ...germanyCalc, germanLevel: e.target.value })}><option value="A1">A1</option><option value="A2">A2</option><option value="B1">B1</option><option value="B2">B2</option><option value="C1">C1</option><option value="C2">C2</option><option value="none">No German</option></select></CalculatorField>
                        <CalculatorField label="English Language Level"><select className="calculator-select" value={germanyCalc.englishLevel} onChange={(e) => setGermanyCalc({ ...germanyCalc, englishLevel: e.target.value })}><option value="B2">B2</option><option value="C1">C1</option><option value="C2">C2</option><option value="below">Below B2</option></select></CalculatorField>
                        <CalculatorField label="Financial Resources"><select className="calculator-select" value={germanyCalc.financialResources} onChange={(e) => setGermanyCalc({ ...germanyCalc, financialResources: e.target.value })}><option value="yes">Requirement met</option><option value="no">Not met</option></select></CalculatorField>
                        <CalculatorField label="Health Insurance"><select className="calculator-select" value={germanyCalc.healthInsurance} onChange={(e) => setGermanyCalc({ ...germanyCalc, healthInsurance: e.target.value })}><option value="yes">Requirement met</option><option value="no">Not met</option></select></CalculatorField>
                      </div>

                      <div className="calculator-section-heading"><span>02</span><div><strong>Points profile</strong><small>Point values stay hidden here and are shown only in your result.</small></div></div>
                      <div className="calculator-form-grid">
                        <CalculatorField label="Partial Recognition / Qualifying Notice"><select className="calculator-select" value={germanyCalc.partialRecognition === '4' ? 'yes' : 'no'} onChange={(e) => setGermanyCalc({ ...germanyCalc, partialRecognition: e.target.value === 'yes' ? '4' : '0' })}><option value="no">No</option><option value="yes">Yes</option></select></CalculatorField>
                        <CalculatorField label="Shortage Occupation"><select className="calculator-select" value={germanyCalc.shortageOccupation === '1' ? 'yes' : 'no'} onChange={(e) => setGermanyCalc({ ...germanyCalc, shortageOccupation: e.target.value === 'yes' ? '1' : '0' })}><option value="no">No</option><option value="yes">Yes</option></select></CalculatorField>
                        <CalculatorField label="Professional Experience"><select className="calculator-select" value={germanyCalc.experience} onChange={(e) => setGermanyCalc({ ...germanyCalc, experience: e.target.value })}><option value="0">Less than 2 years in the relevant period</option><option value="2">2+ years within the last 5 years</option><option value="3">5+ years within the last 7 years</option></select></CalculatorField>
                        <CalculatorField label="German Language for Points"><select className="calculator-select" value={germanyCalc.germanPoints} onChange={(e) => setGermanyCalc({ ...germanyCalc, germanPoints: e.target.value })}><option value="0">Below A2</option><option value="1">A2</option><option value="2">B1</option><option value="3">B2 or higher</option></select></CalculatorField>
                        <CalculatorField label="English C1 or Higher"><select className="calculator-select" value={germanyCalc.englishPoints} onChange={(e) => setGermanyCalc({ ...germanyCalc, englishPoints: e.target.value })}><option value="0">No</option><option value="1">Yes</option></select></CalculatorField>
                        <CalculatorField label="Age Group"><select className="calculator-select" value={germanyCalc.agePoints} onChange={(e) => setGermanyCalc({ ...germanyCalc, agePoints: e.target.value })}><option value="2">Under 35</option><option value="1">35–39</option><option value="0">40 or older</option></select></CalculatorField>
                        <CalculatorField label="Previous Germany Stay"><select className="calculator-select" value={germanyCalc.germanyStay} onChange={(e) => setGermanyCalc({ ...germanyCalc, germanyStay: e.target.value })}><option value="0">No qualifying stay</option><option value="1">6+ months within the last 5 years</option></select></CalculatorField>
                        <CalculatorField label="Partner Also Meets Requirements"><select className="calculator-select" value={germanyCalc.partner} onChange={(e) => setGermanyCalc({ ...germanyCalc, partner: e.target.value })}><option value="0">No</option><option value="1">Yes</option></select></CalculatorField>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* UNITED KINGDOM */}
              {calculatorCountry === 'uk' && (
                <div className="calculator-content">
                  <div className="calculator-section-heading"><span>01</span><div><strong>Mandatory Skilled Worker requirements</strong><small>These questions establish the mandatory part of the supplied 70-point framework.</small></div></div>
                  <div className="calculator-form-grid">
                    <CalculatorField label="Approved Sponsor"><select className="calculator-select" value={ukCalc.approvedSponsor} onChange={(e) => setUkCalc({ ...ukCalc, approvedSponsor: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                    <CalculatorField label="Certificate of Sponsorship"><select className="calculator-select" value={ukCalc.certificateOfSponsorship} onChange={(e) => setUkCalc({ ...ukCalc, certificateOfSponsorship: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                    <CalculatorField label="Eligible Occupation"><select className="calculator-select" value={ukCalc.eligibleOccupation} onChange={(e) => setUkCalc({ ...ukCalc, eligibleOccupation: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                    <CalculatorField label="Appropriate Skill Level"><select className="calculator-select" value={ukCalc.appropriateSkillLevel} onChange={(e) => setUkCalc({ ...ukCalc, appropriateSkillLevel: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                    <CalculatorField label="English Level"><select className="calculator-select" value={ukCalc.englishLevel} onChange={(e) => setUkCalc({ ...ukCalc, englishLevel: e.target.value })}><option value="B2">B2</option><option value="C1">C1</option><option value="C2">C2</option><option value="below">Below B2</option></select></CalculatorField>
                    <CalculatorField label="Genuine Job"><select className="calculator-select" value={ukCalc.genuineJob} onChange={(e) => setUkCalc({ ...ukCalc, genuineJob: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                    <CalculatorField label="Financial Requirement"><select className="calculator-select" value={ukCalc.financialRequirement} onChange={(e) => setUkCalc({ ...ukCalc, financialRequirement: e.target.value })}><option value="yes">Requirement met</option><option value="no">Not met</option></select></CalculatorField>
                    <CalculatorField label="Suitability"><select className="calculator-select" value={ukCalc.suitable} onChange={(e) => setUkCalc({ ...ukCalc, suitable: e.target.value })}><option value="yes">No known issue</option><option value="no">Potential issue</option></select></CalculatorField>
                  </div>

                  <div className="calculator-section-heading"><span>02</span><div><strong>Salary & tradeable option</strong><small>Enter salary figures directly. The calculator determines the applicable tradeable route.</small></div></div>
                  <div className="calculator-form-grid">
                    <CalculatorField label="Annual Salary (GBP)"><input className="calculator-input" type="number" min="0" inputMode="decimal" value={ukCalc.salary} onChange={(e) => setUkCalc({ ...ukCalc, salary: e.target.value })} placeholder="e.g. 45000" /></CalculatorField>
                    <CalculatorField label="Applicable Going Rate (GBP)"><input className="calculator-input" type="number" min="0" inputMode="decimal" value={ukCalc.goingRate} onChange={(e) => setUkCalc({ ...ukCalc, goingRate: e.target.value })} placeholder="Enter the going rate for the occupation" /></CalculatorField>
                    <CalculatorField label="Relevant PhD"><select className="calculator-select" value={ukCalc.relevantPhD} onChange={(e) => setUkCalc({ ...ukCalc, relevantPhD: e.target.value })}><option value="no">No</option><option value="yes">Yes</option></select></CalculatorField>
                    <CalculatorField label="Relevant STEM PhD"><select className="calculator-select" value={ukCalc.relevantSTEMPhD} onChange={(e) => setUkCalc({ ...ukCalc, relevantSTEMPhD: e.target.value })}><option value="no">No</option><option value="yes">Yes</option></select></CalculatorField>
                    <CalculatorField label="Immigration Salary List"><select className="calculator-select" value={ukCalc.onImmigrationSalaryList} onChange={(e) => setUkCalc({ ...ukCalc, onImmigrationSalaryList: e.target.value })}><option value="no">No</option><option value="yes">Yes</option></select></CalculatorField>
                    <CalculatorField label="New Entrant"><select className="calculator-select" value={ukCalc.newEntrant} onChange={(e) => setUkCalc({ ...ukCalc, newEntrant: e.target.value })}><option value="no">No</option><option value="yes">Yes</option></select></CalculatorField>
                  </div>
                </div>
              )}

              {/* NEW ZEALAND */}
              {calculatorCountry === 'nz' && (
                <div className="calculator-content">
                  <div className="calculator-pathway-switch three">
                    <button type="button" className={nzCalc.pathway === 'points' ? 'active' : ''} onClick={() => { setNzCalc({ ...nzCalc, pathway: 'points' }); setCalcResult(null) }}><span>Points based</span><small>Primary skill category + NZ work</small></button>
                    <button type="button" className={nzCalc.pathway === 'experience' ? 'active' : ''} onClick={() => { setNzCalc({ ...nzCalc, pathway: 'experience' }); setCalcResult(null) }}><span>Skilled work experience</span><small>Relevant experience route</small></button>
                    <button type="button" className={nzCalc.pathway === 'trades' ? 'active' : ''} onClick={() => { setNzCalc({ ...nzCalc, pathway: 'trades' }); setCalcResult(null) }}><span>Trades & technicians</span><small>Qualification + experience</small></button>
                  </div>

                  <div className="calculator-section-heading"><span>01</span><div><strong>Common requirements</strong><small>These requirements apply across the supplied New Zealand pathways.</small></div></div>
                  <div className="calculator-form-grid">
                    <CalculatorField label="Age"><input className="calculator-input" type="number" min="0" max="100" inputMode="numeric" value={nzCalc.age} onChange={(e) => setNzCalc({ ...nzCalc, age: e.target.value })} placeholder="Enter age" /></CalculatorField>
                    <CalculatorField label="Accredited Employer"><select className="calculator-select" value={nzCalc.accreditedEmployer} onChange={(e) => setNzCalc({ ...nzCalc, accreditedEmployer: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                    <CalculatorField label="Skilled Job or Job Offer"><select className="calculator-select" value={nzCalc.skilledJobOrOffer} onChange={(e) => setNzCalc({ ...nzCalc, skilledJobOrOffer: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                    <CalculatorField label="Hours per Week"><input className="calculator-input" type="number" min="0" inputMode="numeric" value={nzCalc.hoursPerWeek} onChange={(e) => setNzCalc({ ...nzCalc, hoursPerWeek: e.target.value })} placeholder="30 or more" /></CalculatorField>
                    <CalculatorField label="English Requirement"><select className="calculator-select" value={nzCalc.english} onChange={(e) => setNzCalc({ ...nzCalc, english: e.target.value })}><option value="yes">Requirement met</option><option value="no">Not met</option></select></CalculatorField>
                    <CalculatorField label="Health Requirement"><select className="calculator-select" value={nzCalc.health} onChange={(e) => setNzCalc({ ...nzCalc, health: e.target.value })}><option value="yes">Requirement met</option><option value="no">Not met</option></select></CalculatorField>
                    <CalculatorField label="Character Requirement"><select className="calculator-select" value={nzCalc.character} onChange={(e) => setNzCalc({ ...nzCalc, character: e.target.value })}><option value="yes">Requirement met</option><option value="no">Not met</option></select></CalculatorField>
                  </div>

                  {nzCalc.pathway === 'points' && (
                    <>
                      <div className="calculator-section-heading"><span>02</span><div><strong>Primary skill category</strong><small>Choose one primary category. Points remain hidden until you calculate.</small></div></div>
                      <div className="calculator-form-grid">
                        <CalculatorField label="Primary Skill Category"><select className="calculator-select" value={nzCalc.skillCategory} onChange={(e) => setNzCalc({ ...nzCalc, skillCategory: e.target.value })}><option value="qualification">Qualification</option><option value="income">Income</option><option value="occupationalRegistration">Occupational registration</option></select></CalculatorField>
                        {nzCalc.skillCategory === 'qualification' && <CalculatorField label="Highest Qualifying Qualification"><select className="calculator-select" value={nzCalc.qualification} onChange={(e) => setNzCalc({ ...nzCalc, qualification: e.target.value })}><option value="level10Doctorate">Level 10 doctorate</option><option value="level9Masters">Level 9 master's</option><option value="level8HonoursOrPGDip">Level 8 honours / PGDip</option><option value="level7Bachelor">Level 7 bachelor's</option></select></CalculatorField>}
                        {nzCalc.skillCategory === 'income' && <CalculatorField label="Income Band"><select className="calculator-select" value={nzCalc.income} onChange={(e) => setNzCalc({ ...nzCalc, income: e.target.value })}><option value="3x">At least 3× threshold</option><option value="2x">At least 2× threshold</option><option value="1.5x">At least 1.5× threshold</option></select></CalculatorField>}
                        {nzCalc.skillCategory === 'occupationalRegistration' && <CalculatorField label="Registration Training Length"><select className="calculator-select" value={nzCalc.occupationalRegistration} onChange={(e) => setNzCalc({ ...nzCalc, occupationalRegistration: e.target.value })}><option value="sixYears">6 years</option><option value="fiveYears">5 years</option><option value="fourYears">4 years</option><option value="twoYears">2 years</option></select></CalculatorField>}
                        <CalculatorField label="NZ Skilled Work Experience"><select className="calculator-select" value={nzCalc.nzSkilledWorkExperience} onChange={(e) => setNzCalc({ ...nzCalc, nzSkilledWorkExperience: e.target.value })}><option value="0">None</option><option value="1">1 year</option><option value="1.5">1.5 years</option><option value="2">2 years or more</option></select></CalculatorField>
                      </div>
                    </>
                  )}

                  {nzCalc.pathway === 'experience' && (
                    <>
                      <div className="calculator-section-heading"><span>02</span><div><strong>Experience pathway</strong><small>Complete the relevant work and occupation requirements.</small></div></div>
                      <div className="calculator-form-grid">
                        <CalculatorField label="Relevant Work Experience"><input className="calculator-input" type="number" min="0" step="0.5" inputMode="decimal" value={nzCalc.relevantWorkExperienceYears} onChange={(e) => setNzCalc({ ...nzCalc, relevantWorkExperienceYears: e.target.value })} placeholder="Years" /></CalculatorField>
                        <CalculatorField label="NZ Skilled Work Experience"><input className="calculator-input" type="number" min="0" step="0.5" inputMode="decimal" value={nzCalc.nzSkilledWorkExperienceYears} onChange={(e) => setNzCalc({ ...nzCalc, nzSkilledWorkExperienceYears: e.target.value })} placeholder="Years" /></CalculatorField>
                        <CalculatorField label="Occupation Skill Level"><select className="calculator-select" value={nzCalc.occupationSkillLevel} onChange={(e) => setNzCalc({ ...nzCalc, occupationSkillLevel: e.target.value })}><option value="1">Skill level 1</option><option value="2">Skill level 2</option><option value="3">Skill level 3</option><option value="4">Skill level 4</option><option value="5">Skill level 5</option></select></CalculatorField>
                      </div>
                    </>
                  )}

                  {nzCalc.pathway === 'trades' && (
                    <>
                      <div className="calculator-section-heading"><span>02</span><div><strong>Trades & technicians pathway</strong><small>Complete the qualification and post-qualification experience checks.</small></div></div>
                      <div className="calculator-form-grid">
                        <CalculatorField label="Relevant Trade Qualification"><select className="calculator-select" value={nzCalc.relevantTradeQualification} onChange={(e) => setNzCalc({ ...nzCalc, relevantTradeQualification: e.target.value })}><option value="yes">Yes</option><option value="no">No</option></select></CalculatorField>
                        <CalculatorField label="Post-Qualification Experience"><input className="calculator-input" type="number" min="0" step="0.5" inputMode="decimal" value={nzCalc.postQualificationExperienceYears} onChange={(e) => setNzCalc({ ...nzCalc, postQualificationExperienceYears: e.target.value })} placeholder="Years" /></CalculatorField>
                        <CalculatorField label="NZ Skilled Work Experience"><input className="calculator-input" type="number" min="0" step="1" inputMode="numeric" value={nzCalc.nzSkilledWorkExperienceMonths} onChange={(e) => setNzCalc({ ...nzCalc, nzSkilledWorkExperienceMonths: e.target.value })} placeholder="Months" /></CalculatorField>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="calculator-actions">
                <button type="button" className="calculator-primary-btn" onClick={runCalculation}>
                  Calculate My Result <ArrowRightIcon />
                </button>
                <button type="button" className="calculator-secondary-btn" onClick={() => setCalcResult(null)}>
                  Clear
                </button>
              </div>

              {calcResult && (
                <div className={`calculator-result ${calcResult.eligible === true ? 'is-positive' : 'is-negative'}`}>
                  <div className="calculator-result-top">
                    <div>
                      <span className="calculator-kicker">YOUR PRELIMINARY RESULT</span>
                      <h3>{calcResult.program}</h3>
                      <p>{calcResult.eligible ? 'The entered information meets the configured preliminary screening conditions.' : 'The entered information does not currently meet all configured screening conditions.'}</p>
                    </div>
                    {calcResult.score !== null && (
                      <div className="calculator-score-display">
                        <strong>{calcResult.score}{calcResult.max ? ` / ${calcResult.max}` : ''}</strong>
                        <span>Calculated score</span>
                      </div>
                    )}
                  </div>

                  <div className="calculator-result-status">
                    <span className={`result-status-dot ${calcResult.eligible ? 'positive' : 'negative'}`}></span>
                    <strong>{calcResult.eligible ? 'Preliminary screening threshold / requirements met' : 'Preliminary screening threshold / requirements not met'}</strong>
                  </div>

                  {calcResult.threshold !== null && (
                    <div className="calculator-result-threshold">
                      <span>Applicable threshold</span>
                      <strong>{calcResult.threshold}{calcResult.max ? ` / ${calcResult.max}` : ' points'}</strong>
                    </div>
                  )}

                  {calcResult.breakdown?.length > 0 && (
                    <div className="calculator-breakdown">
                      <div className="calculator-breakdown-title">Score breakdown</div>
                      {calcResult.breakdown.map(([label, points]) => (
                        <div className="calculator-breakdown-row" key={label}>
                          <span>{label}</span>
                          <strong>{points}</strong>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="calculator-result-note">{calcResult.note}</p>

                  <div className="calculator-result-actions">
                    <a href={sectionHref("#contact")} className="calculator-primary-btn">Book a Consultation <ArrowRightIcon /></a>
                    <button type="button" className="calculator-secondary-btn" onClick={() => setCalcResult(null)}>Recalculate</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="calculator-disclaimer">
            <strong>Important:</strong> This calculator is a preliminary screening aid. It does not replace a full immigration assessment, document review, occupation assessment, invitation process or final decision by the relevant authority. Rules can change and eligibility depends on the applicant's complete evidence.
          </div>
        </div>
      </section>

      {/* BOOKING / CONSULTATION FORM */}
      <section id="contact" className="section-padding consultation-section" style={{ background: 'var(--bg-alt)', padding: '60px 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag" style={{ background: 'var(--bg-card)', color: 'var(--accent-blue)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem' }}>Direct Legal Support</span>
            <h2 className="section-title text-gradient" style={{ fontSize: '2.2rem', margin: '12px 0' }}>Book Your Consultation</h2>
            <p className="section-desc" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Schedule a personalized 1-on-1 session with our certified immigration specialists to review your profile and explore your relocation options.
            </p>
          </div>

          <div className="glass-panel consultation-panel" style={{ maxWidth: '650px', margin: '0 auto', padding: '30px' }}>
            {bookingSubmitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <h3 style={{ color: '#22c55e', fontSize: '1.6rem', marginBottom: '10px' }}>
                  🎉 Consultation Request Submitted!
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thank you, <strong>{bookingData.fullName}</strong>. Our immigration advisory team has received your request and will reach out to you within 24 hours.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: '20px', background: 'var(--accent-blue)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
                  onClick={() => setBookingSubmitted(false)}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '6px' }}>Full Name</label>
                  <input
                    type="text"
                    required
                    className="select-control"
                    placeholder="Enter your full name"
                    value={bookingData.fullName}
                    onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
                  />
                </div>

                <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '6px' }}>Email Address</label>
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
                    <label className="form-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '6px' }}>Phone Number</label>
                    <div className="phone-input-row" style={{ display: 'grid', gridTemplateColumns: '95px minmax(0, 1fr)', gap: '8px' }}>
                      <select
                        required
                        className="select-control"
                        value={bookingData.countryCode}
                        onChange={(e) => setBookingData({ ...bookingData, countryCode: e.target.value })}
                        aria-label="Country code"
                      >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option>
                        <option value="+64">+64</option>
                        <option value="+49">+49</option>
                        <option value="+971">+971</option>
                        <option value="+65">+65</option>
                      </select>
                      <input
                        type="tel"
                        required
                        className="select-control"
                        placeholder="7027466559"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '6px' }}>Target Destination</label>
                  <select
                    className="select-control"
                    value={bookingData.destination}
                    onChange={(e) => setBookingData({ ...bookingData, destination: e.target.value })}
                  >
                    <option value="canada">🇨🇦 Canada</option>
                    <option value="australia">🇦🇺 Australia</option>
                    <option value="germany">🇩🇪 Germany</option>
                    <option value="uk">🇬🇧 United Kingdom</option>
                    <option value="nz">🇳🇿 New Zealand</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '6px' }}>Preferred Consultation Time</label>
                  <select
                    required
                    className="select-control"
                    value={bookingData.consultationTime}
                    onChange={(e) => setBookingData({ ...bookingData, consultationTime: e.target.value })}
                  >
                    <option value="">Select a preferred time</option>
                    <option value="9:00 AM - 11:00 AM IST / 10:30 PM - 12:30 AM ET (previous day)">9:00 AM - 11:00 AM IST / 10:30 PM - 12:30 AM ET (previous day)</option>
                    <option value="11:00 AM - 1:00 PM IST / 12:30 AM - 2:30 AM ET">11:00 AM - 1:00 PM IST / 12:30 AM - 2:30 AM ET</option>
                    <option value="2:00 PM - 4:00 PM IST / 3:30 AM - 5:30 AM ET">2:00 PM - 4:00 PM IST / 3:30 AM - 5:30 AM ET</option>
                    <option value="4:00 PM - 6:00 PM IST / 5:30 AM - 7:30 AM ET">4:00 PM - 6:00 PM IST / 5:30 AM - 7:30 AM ET</option>
                  </select>
                  <div style={{ marginTop: '7px', color: 'var(--text-muted)', fontSize: '0.76rem', lineHeight: '1.45' }}>
                    Times are shown in India Standard Time (IST) and U.S. Eastern Time (ET).
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '6px' }}>Additional Message / Inquiries</label>
                  <textarea
                    rows={4}
                    className="select-control"
                    placeholder="Provide details regarding education, work experience, or specific visa queries..."
                    value={bookingData.message}
                    onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                  ></textarea>
                </div>

                <label style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.86rem',
                  lineHeight: '1.5',
                  cursor: 'pointer'
                }}>
                  <input
                    type="checkbox"
                    required
                    checked={bookingData.consent}
                    onChange={(e) => setBookingData({ ...bookingData, consent: e.target.checked })}
                    style={{ marginTop: '4px', accentColor: '#2563eb' }}
                  />
                  <span>I agree to be contacted by CloysterVisa regarding my enquiry and consultation request.</span>
                </label>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', background: 'var(--accent-blue)', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
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



      {/* MEET OUR TEAM — latest client update */}
      <Team />

      {/* CLIENT SUCCESS STORIES */}
         <ClientSuccessStories />


      
      {/* NEW: PARTNERSHIPS & CERTIFICATION SHOWCASE */}
      <PartnerWithUs />


      {/* BLOG — compact single-page carousel section */}
      <section id="blog" className="cv-blog-compact-home">
        <style>{`
          .cv-blog-compact-home {
            width: 100%;
            overflow: hidden;
          }

          .cv-blog-compact-home .cv-blog-page {
            min-height: auto !important;
            padding: 58px 24px 56px !important;
          }

          .cv-blog-compact-home .cv-blog-hero {
            margin-bottom: 28px !important;
          }

          .cv-blog-compact-home .cv-blog-hero h1 {
            font-size: clamp(30px, 4vw, 44px) !important;
          }

          .cv-blog-compact-home .cv-blog-hero p {
            max-width: 650px !important;
            font-size: 14px !important;
            line-height: 1.6 !important;
            margin-top: 12px !important;
          }

          .cv-blog-compact-home .cv-blog-toolbar {
            margin-bottom: 24px !important;
          }

          /* Horizontal swipe row: cards do not stack vertically on mobile. */
          .cv-blog-compact-home .cv-blog-grid {
            display: flex !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            gap: 16px !important;
            padding: 3px 2px 12px !important;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
          }

          .cv-blog-compact-home .cv-blog-card {
            flex: 0 0 330px !important;
            width: 330px !important;
            scroll-snap-align: start;
          }

          .cv-blog-compact-home .cv-blog-card-visual {
            height: 145px !important;
          }

          .cv-blog-compact-home .cv-blog-card-body {
            padding: 18px !important;
          }

          .cv-blog-compact-home .cv-blog-card-body h3 {
            font-size: 17px !important;
            margin-top: 11px !important;
          }

          .cv-blog-compact-home .cv-blog-card-body p {
            font-size: 12.5px !important;
            line-height: 1.6 !important;
          }

          .cv-blog-compact-home .cv-blog-read-more {
            margin-top: 14px !important;
          }

          .cv-blog-compact-home .cv-blog-section-heading {
            margin-bottom: 16px !important;
          }

          /* Hide the large featured block on the homepage; the card row is the
             compact Blog preview. The full content remains inside Blog.jsx. */
          .cv-blog-compact-home .cv-blog-featured {
            display: none !important;
          }

          .cv-blog-compact-home .cv-blog-cta {
            margin-top: 30px !important;
            padding: 24px !important;
          }

          .cv-blog-compact-home .cv-blog-cta h2 {
            font-size: 22px !important;
          }

          @media (max-width: 680px) {
            .cv-blog-compact-home .cv-blog-page {
              padding: 48px 16px 48px !important;
            }

            .cv-blog-compact-home .cv-blog-toolbar {
              padding: 10px !important;
            }

            .cv-blog-compact-home .cv-blog-categories {
              display: flex !important;
              flex-wrap: nowrap !important;
              overflow-x: auto !important;
              justify-content: flex-start !important;
              padding-bottom: 2px;
            }

            .cv-blog-compact-home .cv-blog-category-btn {
              width: auto !important;
              flex: 0 0 auto;
            }

            .cv-blog-compact-home .cv-blog-card {
              flex-basis: 285px !important;
              width: 285px !important;
            }

            .cv-blog-compact-home .cv-blog-card-visual {
              height: 125px !important;
            }

            .cv-blog-compact-home .cv-blog-cta {
              padding: 22px 18px !important;
            }
          }
        `}</style>

        <Blog />
      </section>

        </>
      )}

      {/* STANDALONE BLOG ROUTE: header/footer stay from this App, while Blog
          replaces the entire homepage body on /blog and /blog/:slug. */}
      {isBlogRoute && <Blog />}

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        className="whatsapp-float"
        href="https://wa.me/917027466559?text=Hello%20CloysterVisa,%20I%20would%20like%20to%20inquire%20about%20visa%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
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

      {activeLegalModal && (
        <LegalModal
          type={activeLegalModal}
          onClose={() => setActiveLegalModal(null)}
        />
      )}

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-main-grid">

          {/* 1. Brand */}
          <div className="footer-brand-column">
            <a href="/" className="footer-logo-link" aria-label="CloysterVisa home">
              <LogoImage footer />
            </a>
            <p className="footer-description">
              Immigration Made Simple. Providing streamlined pathways for PR, work permits, and global education.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-link-list">
              <li><a href={sectionHref("#about")}>About Us</a></li>
              <li><a href={sectionHref("#destinations")}>Destinations</a></li>
              <li><a href={sectionHref("#services")}>Advisory Services</a></li>
              <li><a href={sectionHref("#team")}>Meet Our Team</a></li>
              <li><a href={sectionHref("#study-visa")}>Study Visa</a></li>
              <li><a href={sectionHref("#partner-with-us")}>Partner With Us</a></li>
              <li><a href={sectionHref("#blog")}>Blog</a></li>
              <li><a href={sectionHref("#calculator")}>Eligibility Points Check</a></li>
              <li><a href={sectionHref("#contact")} className="footer-accent-link">Book a Consultation</a></li>
            </ul>
          </div>

          {/* 3. Popular Destinations */}
          <div className="footer-column">
            <h4 className="footer-heading">Popular Destinations</h4>
            <ul className="footer-link-list footer-destination-list">
              {countries.map((c) => (
                <li key={c.id}>
                  <a
                    href={sectionHref("#destinations")}
                    onClick={() => setActiveTab(c.id)}
                    className="footer-destination-link"
                  >
                    <img src={c.flag} alt={`${c.name} Flag`} className="flag-icon" />
                    <span>{c.name} Pathway</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Office Support — kept in the same top row */}
          <div className="office-support-block footer-column">
            <h4 className="footer-heading">Office Support</h4>

            <p className="footer-contact-item">
              <span className="footer-contact-icon"><FooterLineIcon type="location" /></span>
              <span>Room No. 2, 3rd Floor, A-66, Block A, Sector 7 Dwarka, Dwarka, New Delhi, Delhi-110077</span>
            </p>

            <p className="footer-contact-item">
              <span className="footer-contact-icon"><FooterLineIcon type="phone" /></span>
              <span>
                <a href="tel:+917027466559">7027466559</a>,{' '}
                <a href="tel:+919266515362">9266515362</a>
              </span>
            </p>

            <p className="footer-contact-item">
              <span className="footer-contact-icon"><FooterLineIcon type="message" /></span>
              <span>
                WhatsApp:{' '}
                <a
                  href="https://wa.me/917027466559?text=Hello%20CloysterVisa"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-green-link"
                >
                  Instant Support Chat
                </a>
              </span>
            </p>

            <p className="footer-contact-item">
              <span className="footer-contact-icon"><FooterLineIcon type="email" /></span>
              <span>
                <a className="office-email" href="mailto:info@cloystervisa.com">
                  info@cloystervisa.com
                </a>
              </span>
            </p>

            <p className="footer-hours">
              Available Monday – Sunday (9:00 AM – 9:00 PM)
            </p>
          </div>

          {/* Connect block sits below the four-column row */}
          <div className="footer-connect-block">
            <div className="footer-connect-header">
              <div>
                <span className="footer-connect-kicker">STAY CONNECTED</span>
                <h4 className="footer-heading footer-connect-heading">Connect With Us</h4>
              </div>

              <div className="footer-social-links">
                <a
                  className="social-icon-link"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CloysterVisa LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  className="social-icon-link"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CloysterVisa Instagram"
                  title="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  className="social-icon-link"
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CloysterVisa Google Business Profile"
                  title="Google Business Profile"
                >
                  <GoogleIcon />
                </a>
              </div>
            </div>

            <div className="footer-qr-grid">
              <a
                className="footer-qr-compact footer-qr-link"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open CloysterVisa Instagram profile"
              >
                <img src={instagramQr} alt="QR code to follow CloysterVisa on Instagram" />
                <span>
                  <strong>Instagram</strong>
                  <small>@cloystervisa</small>
                </span>
              </a>

              <a
                className="footer-qr-compact footer-qr-link"
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open CloysterVisa Google Business Profile"
              >
                <img src={googleBusinessQr} alt="Google Business Profile QR code" />
                <span>
                  <strong>Google Business</strong>
                  <small>View our profile</small>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated professional bottom bar */}
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>© 2026 CLOYSTER VISA. All rights reserved.</p>
            <nav className="footer-legal-links" aria-label="Legal links">
              <button
                type="button"
                onClick={() => setActiveLegalModal('privacy')}
                className="footer-legal-button"
              >
                Privacy Policy
              </button>
              <span aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => setActiveLegalModal('terms')}
                className="footer-legal-button"
              >
                Terms &amp; Conditions
              </button>
              <span aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => setActiveLegalModal('disclaimer')}
                className="footer-legal-button"
              >
                Immigration Disclaimer
              </button>
            </nav>
          </div>
        </div>
      </footer>

    </div>
  )
}