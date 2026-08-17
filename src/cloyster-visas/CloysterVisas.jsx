import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import cloysterLogo from './cloyster-logo.png'
import cloysterLogoLight from './cloyster-logo-light.png'
import instagramQr from './cloyster-instagram-qr.png'
import googleBusinessQr from './google-business-qr-only.png'
import Team from './Team'
import AnnouncementBar from './AnnouncementBar'
import ThemeToggle from './ThemeToggle'

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

const INSTAGRAM_URL = 'https://www.instagram.com/cloystervisa/'
const LINKEDIN_URL = 'https://www.linkedin.com/company/cloystervisa/?viewAsMember=true'
const GOOGLE_BUSINESS_URL = 'https://local.google.com/place?placeid=ChIJxWcEuEQdDTkRz5rn0njVtBg&utm_medium=noren&utm_source=gbp&utm_campaign=2026'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openNavDropdown, setOpenNavDropdown] = useState(null)
  

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
  const [calcScore, setCalcScore] = useState(75)

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
  `

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{ __html: visualPolishStyles }} />


      {/* TOP ANNOUNCEMENT BAR */}

        <AnnouncementBar />


      {/* HEADER & NAVBAR */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px' }}>
          <a href="#" className="logo-link" style={{ textDecoration: 'none' }} aria-label="CloysterVisa home">
            <LogoImage />
          </a>

          <div className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#about" className="nav-link" onClick={closeNav}>About Us</a>

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
                <a href="#services" onClick={closeNav}>Visa Consultation</a>
                <a href="#services" onClick={closeNav}>Document & Application Support</a>
                <a href="#services" onClick={closeNav}>Interview Preparation</a>
                <a href="#services" onClick={closeNav}>Post-Submission Guidance</a>
              </div>
            </div>

            <a href="#team" className="nav-link" onClick={closeNav}>Our Team</a>

            <div className="mobile-nav-actions" aria-label="Mobile navigation actions">
              <a
                href="#contact"
                className="nav-consultation-btn"
                onClick={closeNav}
              >
                <CalendarIcon size={16} />
                <span>Book a Consultation</span>
              </a>
              <a
                href="#calculator"
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
              href="#contact"
              className="nav-consultation-btn"
              onClick={closeNav}
              aria-label="Book a consultation"
            >
              <CalendarIcon size={16} />
              <span>Book a Consultation</span>
            </a>
            <a
              href="#calculator"
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
              <a href="#calculator" className="btn btn-primary" style={{ background: 'var(--accent-blue)', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Check Your Eligibility <ArrowRightIcon />
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>
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
                        href="#calculator"
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
              <a href="#contact" className="service-link" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Book a Consultation <ArrowRightIcon />
              </a>
            </div>

            <div className="service-card glass-panel" style={{ padding: '28px' }}>
              <h3 className="service-title" style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>2. Profile Assessment</h3>
              <p className="service-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Review your age, education, experience, language profile, destination, and visa category to understand your potential pathway.
              </p>
              <a href="#calculator" className="service-link" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Assess My Profile <ArrowRightIcon />
              </a>
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
              <a href="#calculator" className="service-link" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Explore Application Preparation <ArrowRightIcon />
              </a>
            </div>

            <div className="service-card glass-panel" style={{ padding: '28px' }}>
              <h3 className="service-title" style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>5. Interview / Pre-Departure Guidance</h3>
              <p className="service-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Prepare for visa interviews where applicable and get practical pre-departure guidance for study, work, and relocation.
              </p>
              <a href="#contact" className="service-link" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Explore Pre-Departure Guidance <ArrowRightIcon />
              </a>
            </div>

            <div className="service-card glass-panel" style={{ padding: '28px' }}>
              <h3 className="service-title" style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>6. Post-Submission Support</h3>
              <p className="service-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Stay supported after submission with status follow-up guidance, document response support, and next-step assistance through the decision stage.
              </p>
              <a href="#contact" className="service-link" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Explore Post-Submission Support <ArrowRightIcon />
              </a>
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
                Estimated Score: <span style={{ color: 'var(--accent-blue)' }}>{calcScore} Points</span>
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '4px' }}>
                Age Group: <strong style={{ color: 'var(--text-primary)' }}>{calcData.age}</strong> | Target: <strong style={{ color: 'var(--text-primary)', textTransform: 'capitalize' }}>{calcData.destination}</strong>
              </div>
              <div style={{ color: '#22c55e', fontWeight: '700', fontSize: '0.92rem', marginTop: '4px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><CheckIcon /> Potentially Eligible</span>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '4px', maxWidth: '560px', lineHeight: '1.45' }}>
                Eligibility depends on your individual profile and current program requirements.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '9px', flexWrap: 'wrap' }}>
              <a href="#calculator" className="btn btn-secondary" style={{ padding: '10px 14px', background: 'var(--bg-main)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', textDecoration: 'none', borderRadius: '8px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Get Detailed Assessment <ArrowRightIcon />
              </a>
              <a href="#contact" className="btn btn-primary" style={{ padding: '10px 14px', background: 'var(--accent-blue)', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Book a Consultation <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

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
              <a href="#calculator" className="btn btn-primary" style={{ background: 'var(--accent-blue)', color: '#fff', padding: '11px 17px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                Assess My Profile <ArrowRightIcon />
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ background: 'var(--bg-main)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '11px 17px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                Book a Consultation <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED MODAL FOR SERVICE DETAILS */}
      {activeModal && (
        <div className="modal-overlay" style={{
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
          padding: '20px'
        }}>
          <div className="glass-panel" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--accent-blue)',
            borderRadius: '16px',
            maxWidth: '550px',
            width: '100%',
            padding: '30px',
            position: 'relative',
            color: 'var(--text-primary)'
          }}>
            <button
              onClick={() => setActiveModal(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>

            {activeModal === 'documentation' && (
              <div>
                <span style={{ background: 'rgba(37, 99, 235, 0.2)', color: 'var(--accent-blue)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem' }}>
                  Detailed Overview
                </span>
                <h3 style={{ fontSize: '1.6rem', marginTop: '10px', marginBottom: '15px' }}>📄 Documentation Support</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Strong documentation can make an application easier to review. Our specialists assist you with:
                </p>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', margin: '15px 0', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  <li><strong>Educational Credential Assessment (ECA):</strong> Step-by-step guidance for WES, IQAS, or ICAS submissions.</li>
                  <li><strong>Statement of Purpose & LOE:</strong> Customized Letters of Explanation for study permits or gap years.</li>
                  <li><strong>Proof of Financial Documentation:</strong> Reviewing bank certificates, GIC setups, and liquid asset statements.</li>
                  <li><strong>Work Experience Reference Letters:</strong> Aligning job duties with exact NOC/ANZSCO codes.</li>
                </ul>
                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                  <a href="#contact" onClick={() => setActiveModal(null)} className="btn btn-primary" style={{ flex: 1, textAlign: 'center', justifyContent: 'center', background: 'var(--accent-blue)', color: '#fff', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>
                    Request Document Review
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ELIGIBILITY CALCULATOR */}
      <section id="calculator" className="section-padding" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag" style={{ background: 'var(--bg-card)', color: 'var(--accent-blue)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem' }}>Interactive Evaluation</span>
            <h2 className="section-title text-gradient" style={{ fontSize: '2.2rem', margin: '12px 0' }}>Check Your Immigration Eligibility</h2>
            <p className="section-desc" style={{ color: 'var(--text-secondary)' }}>
              Instant preliminary points assessment for Express Entry, GSM, and European job cards.
            </p>
          </div>

          <div className="glass-panel calculator-box" style={{ padding: '30px', maxWidth: '700px', margin: '0 auto' }}>
            <div className="calc-progress" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', position: 'relative' }}>
              <div className={`progress-step ${calcStep >= 1 ? 'active' : ''}`} style={{ width: '32px', height: '32px', borderRadius: '50%', background: calcStep >= 1 ? 'var(--accent-blue)' : 'var(--bg-main)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>1</div>
              <div className={`progress-step ${calcStep >= 2 ? 'active' : ''}`} style={{ width: '32px', height: '32px', borderRadius: '50%', background: calcStep >= 2 ? 'var(--accent-blue)' : 'var(--bg-main)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>2</div>
              <div className={`progress-step ${calcStep >= 3 ? 'active' : ''}`} style={{ width: '32px', height: '32px', borderRadius: '50%', background: calcStep >= 3 ? 'var(--accent-blue)' : 'var(--bg-main)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>3</div>
              <div className={`progress-step ${calcStep >= 4 ? 'active' : ''}`} style={{ width: '32px', height: '32px', borderRadius: '50%', background: calcStep >= 4 ? 'var(--accent-blue)' : 'var(--bg-main)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>📊</div>
            </div>

            {/* STEP 1 */}
            {calcStep === 1 && (
              <div className="calc-step-content">
                <h3 className="calc-step-title" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>Select Relocation Preferences</h3>
                <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '6px', fontSize: '0.9rem' }}>Preferred Destination</label>
                    <select
                      className="select-control"
                      value={calcData.destination}
                      onChange={(e) => setCalcData({ ...calcData, destination: e.target.value })}
                    >
                      <option value="canada">🇨🇦 Canada (Express Entry)</option>
                      <option value="australia">🇦🇺 Australia (General Skilled Migration)</option>
                      <option value="germany">🇩🇪 Germany (Opportunity Card)</option>
                      <option value="uk">🇬🇧 United Kingdom (Skilled Worker)</option>
                      <option value="nz">🇳🇿 New Zealand (SMC)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '6px', fontSize: '0.9rem' }}>Visa Category</label>
                    <select
                      className="select-control"
                      value={calcData.visaType}
                      onChange={(e) => setCalcData({ ...calcData, visaType: e.target.value })}
                    >
                      <option value="pr">Permanent Residency (PR)</option>
                      <option value="work">Skilled Work Permit</option>
                      <option value="student">Study Visa / Higher Education Pathway</option>
                    </select>
                  </div>
                </div>
                {calcData.visaType === 'student' && (
                  <div style={{
                    marginTop: '14px',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(59,130,246,.2)',
                    background: 'rgba(37,99,235,.08)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.84rem',
                    lineHeight: '1.55'
                  }}>
                    Study Visa assessment includes your academic profile, destination, language readiness, financial documentation, and post-study pathway considerations.
                  </div>
                )}
                <button className="btn btn-primary" onClick={() => setCalcStep(2)} style={{ marginTop: '20px', background: 'var(--accent-blue)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Next Step <ArrowRightIcon />
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {calcStep === 2 && (
              <div className="calc-step-content">
                <h3 className="calc-step-title" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>Basic Profile Details</h3>
                <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '6px', fontSize: '0.9rem' }}>Age Group</label>
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
                    <label className="form-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '6px', fontSize: '0.9rem' }}>Highest Qualification</label>
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
                  <button className="btn btn-secondary" onClick={() => setCalcStep(1)} style={{ background: 'var(--bg-main)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer' }}>Back</button>
                  <button className="btn btn-primary" onClick={() => setCalcStep(3)} style={{ background: 'var(--accent-blue)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Next Step <ArrowRightIcon />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {calcStep === 3 && (
              <div className="calc-step-content">
                <h3 className="calc-step-title" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>{calcData.visaType === 'student' ? 'Study Profile & Language Ability' : 'Experience & Language Ability'}</h3>
                <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '6px', fontSize: '0.9rem' }}>{calcData.visaType === 'student' ? 'Work / Relevant Experience' : 'Work Experience'}</label>
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
                    <label className="form-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '6px', fontSize: '0.9rem' }}>Language Proficiency Score</label>
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
                  <button className="btn btn-secondary" onClick={() => setCalcStep(2)} style={{ background: 'var(--bg-main)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer' }}>Back</button>
                  <button className="btn btn-primary" onClick={runCalculation} style={{ background: 'var(--accent-blue)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Calculate Points <ArrowRightIcon />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: RESULTS */}
            {calcStep === 4 && (
              <div className="calc-step-content" style={{ textAlign: 'center' }}>
                <h3 className="calc-step-title" style={{ color: 'var(--text-primary)' }}>Estimated Eligibility Score</h3>
                <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--accent-blue)', margin: '15px 0' }}>
                  {calcScore} Points
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  {calcScore >= 70
                    ? "🎉 Strong Score! You meet the standard points benchmark for PR considerations."
                    : "👍 Good Score! Regional nominations or specific PNP options can boost your profile."}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <button className="btn btn-secondary" onClick={() => setCalcStep(1)} style={{ background: 'var(--bg-main)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer' }}>Recalculate</button>
                  <a href="#contact" className="btn btn-primary" style={{ background: 'var(--accent-blue)', color: '#fff', padding: '10px 18px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>Book a Consultation</a>
                </div>
              </div>
            )}
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

      {/* CLIENT SUCCESS — kept at the bottom, immediately before the footer */}
      <section id="client-success" className="client-success-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '42px' }}>
            <span className="section-tag" style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '7px 14px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px' }}>
              CLIENT SUCCESS
            </span>
            <h2 className="section-title text-gradient" style={{ fontSize: '2.45rem', margin: '16px 0 12px' }}>
              Client Success Stories
            </h2>
            <p className="section-desc" style={{ color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto', lineHeight: '1.7' }}>
              Structured, destination-focused support designed to make your immigration journey clearer from the first assessment through the next stage.
            </p>
          </div>

          <div className="client-success-shell">
            <div className="client-success-panel glass-panel">
              <div className="client-success-quote-mark" aria-hidden="true">“</div>
              <h3>Personalized guidance, transparent communication, and practical support at every stage of the journey.</h3>
              <p>
                CloysterVisa supports clients across work, study and permanent residency pathways with profile assessment, documentation guidance, application preparation and post-submission support.
              </p>

              <div className="client-success-stats">
                <div className="client-success-stat">
                  <strong>128+</strong>
                  <span>Total visa approvals</span>
                </div>
                <div className="client-success-stat">
                  <strong>5 Destinations</strong>
                  <span>Canada, Australia, Germany, UK and New Zealand</span>
                </div>
                <div className="client-success-stat">
                  <strong>End-to-End</strong>
                  <span>Profile, documents, application and post-submission guidance</span>
                </div>
              </div>

              <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <a href="#contact" className="btn btn-primary" style={{ background: 'var(--accent-blue)', color: '#fff', padding: '11px 18px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  Book a Consultation <ArrowRightIcon />
                </a>
                <a href="#calculator" className="btn btn-secondary" style={{ background: 'var(--bg-main)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '11px 18px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  Assess My Profile <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-main-grid">

          {/* 1. Brand */}
          <div className="footer-brand-column">
            <a href="#" className="footer-logo-link" aria-label="CloysterVisa home">
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
              <li><a href="#about">About Us</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#services">Advisory Services</a></li>
              <li><a href="#team">Meet Our Team</a></li>
              <li><a href="#calculator">Eligibility Points Check</a></li>
              <li><a href="#contact" className="footer-accent-link">Book a Consultation</a></li>
            </ul>
          </div>

          {/* 3. Popular Destinations */}
          <div className="footer-column">
            <h4 className="footer-heading">Popular Destinations</h4>
            <ul className="footer-link-list footer-destination-list">
              {countries.map((c) => (
                <li key={c.id}>
                  <a
                    href="#destinations"
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
              <a href="#privacy-policy">Privacy Policy</a>
              <span aria-hidden="true">|</span>
              <a href="#terms-conditions">Terms &amp; Conditions</a>
              <span aria-hidden="true">|</span>
              <a href="#immigration-disclaimer">Immigration Disclaimer</a>
            </nav>
          </div>
        </div>
      </footer>

    </div>
  )
}