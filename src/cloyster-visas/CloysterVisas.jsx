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
      padding-top: 30px !important;
    }

    .hero-grid {
      min-width: 0;
    }

    .select-control,
    input.select-control,
    textarea.select-control {
      width: 100%;
      min-width: 0;
    }

    .announcement-bar {
      width: 100%;
      position: relative;
      z-index: 101;
    }

    @media (max-width: 900px) {
      .container {
        width: min(100% - 28px, 720px) !important;
      }

      .nav-menu {
        position: fixed !important;
        top: 110px;
        left: 14px !important;
        right: 14px !important;
        width: auto !important;
        max-height: calc(100vh - 130px);
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

      .hero-grid {
        grid-template-columns: minmax(0, 1fr) !important;
        gap: 24px !important;
      }

      .hero-content {
        width: 100%;
        text-align: center;
      }

      .hero-buttons {
        width: 100%;
        display: flex !important;
        flex-direction: column;
        align-items: stretch;
        gap: 12px !important;
      }

      .hero-visual {
        width: 100%;
        min-height: 0 !important;
      }

      .services-grid {
        grid-template-columns: 1fr !important;
      }

      .country-display-grid {
        grid-template-columns: 1fr !important;
        gap: 22px !important;
      }
    }

    @media (max-width: 640px) {
      .roadmap-success-grid {
        grid-template-columns: 1fr !important;
      }

      .profile-score-preview {
        padding: 16px !important;
      }

      .profile-score-preview > div:last-child {
        width: 100%;
        display: grid !important;
        grid-template-columns: 1fr;
      }
    }
  `}</style>
)

const staticCountriesData = [
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    title: 'Immigrate to Canada via Express Entry & PNPs',
    desc: 'Canada offers some of the world\'s most welcoming immigration programs. Whether you want to apply for Permanent Residency (PR), study at top universities, or obtain a work permit, Canada provides stable career pathways.',
    successRate: '94%',
    processingTime: '6-8 Months',
    minPoints: '67/100',
    pathways: [
      { name: 'Express Entry (FSWP, FSTP, CEC)', tag: 'PR Path' },
      { name: 'Provincial Nominee Programs (PNP)', tag: 'Regional' },
      { name: 'Post-Graduation Work Permit (PGWP)', tag: 'Study first' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg'
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    title: 'Explore General Skilled Migration in Australia',
    desc: 'With a booming economy and high demand for skilled professionals, Australia offers competitive visa pathways through General Skilled Migration (GSM).',
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
    desc: 'Germany\'s Opportunity Card (Chancenkarte) enables skilled professionals to relocate to Germany to secure employment in IT, engineering, healthcare, and trade.',
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
    desc: 'The UK points-based system offers attractive visas for global talent, skilled workers, and international students looking to transition into full-time roles.',
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
    desc: 'Experience exceptional work-life balance in New Zealand with Permanent Residency pathways under the Skilled Migrant Category.',
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

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  const countries = staticCountriesData
  const [activeTab, setActiveTab] = useState('canada')
  const [activeModal, setActiveModal] = useState(null)

  // Calculator State
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

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
  }

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

  const handleBookingSubmit = (e) => {
    e.preventDefault()

    if (!bookingData.fullName || !bookingData.email || !bookingData.phone || !bookingData.countryCode || !bookingData.consultationTime) {
      alert('Please fill in all required fields.')
      return
    }

    if (!bookingData.consent) {
      alert('Please agree to be contacted by Cloyster Visas before submitting.')
      return
    }

    setIsSubmitting(true)

    const templateParams = {
      from_name: bookingData.fullName,
      from_email: bookingData.email,
      phone_number: `${bookingData.countryCode} ${bookingData.phone}`,
      target_destination: bookingData.destination.toUpperCase(),
      preferred_consultation_time: bookingData.consultationTime,
      consent: bookingData.consent ? 'Yes' : 'No',
      message: bookingData.message
    }

    emailjs
      .send('service_o0l0r0k', 'template_45hewnn', templateParams, 'zmQ_nh-t65cKtN45G')
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
        🔥 <strong>Germany Opportunity Card — Assessments Live</strong> — {' '}
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
              Cloyster <span style={{ color: '#2563eb' }}>Visas</span>
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
                background: 'rgba(37, 99, 235, 0.2)',
                color: '#60a5fa',
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid #2563eb',
                fontWeight: '700',
                boxShadow: '0 0 12px rgba(37, 99, 235, 0.4)'
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
              Check Your Immigration Eligibility
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
              <span className="hero-badge-tag" style={{ background: '#2563eb' }}>Cloyster Visas</span>
              <span>Immigration Made Simple</span>
            </div>
            
            <h1 className="hero-title text-gradient" style={{ fontSize: '2.8rem', lineHeight: '1.15', marginTop: '12px' }}>
              Immigration Made Simple.
            </h1>
            <p className="hero-desc" style={{ fontSize: '1.1rem', color: '#94a3b8', margin: '12px 0 20px 0' }}>
              Personalized Visa Solutions for Work, Study & Permanent Residency. Connect with trusted consultants for seamless global mobility.
            </p>

            <div className="hero-buttons">
              <a href="#calculator" className="btn btn-primary">
                Check Your Immigration Eligibility <ArrowRightIcon />
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ background: '#0f172a', borderColor: '#334155' }}>
                Talk to Consultant
              </a>
            </div>

            {/* Country Logos Below Hero */}
            <div style={{ marginTop: '24px' }}>
              <p style={{ fontSize: '0.82rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: '600' }}>
                Supported Destinations
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="glass-panel" style={{ padding: '6px 12px', borderRadius: '16px', fontSize: '0.88rem' }}>🇨🇦 Canada</span>
                <span className="glass-panel" style={{ padding: '6px 12px', borderRadius: '16px', fontSize: '0.88rem' }}>🇦🇺 Australia</span>
                <span className="glass-panel" style={{ padding: '6px 12px', borderRadius: '16px', fontSize: '0.88rem' }}>🇩🇪 Germany</span>
                <span className="glass-panel" style={{ padding: '6px 12px', borderRadius: '16px', fontSize: '0.88rem' }}>🇬🇧 UK</span>
                <span className="glass-panel" style={{ padding: '6px 12px', borderRadius: '16px', fontSize: '0.88rem' }}>🇳🇿 New Zealand</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="globe-placeholder" style={{ minHeight: '340px', position: 'relative' }}>
              <div className="globe-circle-1" style={{ borderColor: '#1e293b' }}></div>
              <div className="globe-circle-2" style={{ borderColor: '#0f172a' }}></div>
              
              <div className="hero-card-floating hero-card-1 glass-panel" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
                <div className="floating-icon">
                  <GlobeIcon />
                </div>
                <div className="floating-info">
                  <h4>Global Mobility 🛂</h4>
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
            </div>
          </div>
        </div>
      </header>

      {/* VISA ROADMAP + CLIENT SUCCESS BOX */}
      <section className="section-padding" style={{ paddingTop: '28px', paddingBottom: '28px' }}>
        <div className="container">
          <div className="roadmap-success-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '18px'
          }}>
            <div className="glass-panel" style={{ padding: '22px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>🗺️</div>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.15rem', color: '#f8fafc' }}>Visa Roadmap</h3>
              <p style={{ margin: '0 0 12px', color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.6' }}>
                Profile evaluation → Pathway selection → Documentation → Application → Visa decision → Post-landing support.
              </p>
              <a href="#calculator" className="service-link">Start Your Roadmap <ArrowRightIcon /></a>
            </div>

            <div className="glass-panel" style={{ padding: '22px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>🏆</div>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.15rem', color: '#f8fafc' }}>Client Success</h3>
              <p style={{ margin: '0 0 12px', color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.6' }}>
                128+ successful grants this month with personalized support across work, study and permanent residency pathways.
              </p>
              <a href="#contact" className="service-link">Talk to a Consultant <ArrowRightIcon /></a>
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
            <div className="glass-panel" style={{ padding: '30px', background: '#0f172a', border: '1px solid #1e293b' }}>
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
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '1px' }}>
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

      {/* SERVICES SECTION */}
      <section id="services" className="section-padding" style={{ background: '#0b1120' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">End-to-End Solutions</span>
            <h2 className="section-title text-gradient">Our Advisory Services</h2>
            <p className="section-desc">
              Comprehensive assistance through every stage of your visa journey.
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
                Receive an extensive review of your academic history, age, skill-set, and language scores to compute your potential points.
              </p>
              <a href="#calculator" className="service-link">
                Check Your Immigration Eligibility <ArrowRightIcon />
              </a>
            </div>

            <div className="service-card glass-panel" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
              <h3 className="service-title">3. Documentation Support</h3>
              <p className="service-desc">
                Ensure error-free submissions. We guide you in drafting letters of explanation, Educational Credential Assessment (ECA), and proof of / financial documentation.
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
                Settle down with absolute ease. Access orientation assistance, temporary housing leads, local health insurance guidance, and social security setup.
              </p>
              <button 
                onClick={() => setActiveModal('postlanding')} 
                className="service-link" 
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#3b82f6', fontWeight: '600' }}
              >
                Learn more <ArrowRightIcon />
              </button>
            </div>

            <div className="service-card glass-panel" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
              <h3 className="service-title">5. Study Visa Services</h3>
              <p className="service-desc">
                Get guidance for study visa applications, college admissions documentation, statements of purpose, financial documentation, and post-study work pathways.
              </p>
              <a href="#calculator" className="service-link">
                Check Study Visa Eligibility <ArrowRightIcon />
              </a>
            </div>
          </div>

          {/* Profile Score Preview Card */}
          <div className="profile-score-preview glass-panel" style={{
            marginTop: '22px',
            padding: '18px 20px',
            background: '#0f172a',
            border: '1px solid #1e293b',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifySpace: 'space-between',
            gap: '18px',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ color: '#94a3b8', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>
                Profile Score Overview
              </div>
              <div style={{ color: '#f8fafc', fontSize: '1.25rem', fontWeight: '800' }}>
                Estimated Score: <span style={{ color: '#60a5fa' }}>472</span>
              </div>
              <div style={{ color: '#22c55e', fontWeight: '700', fontSize: '0.92rem', marginTop: '4px' }}>
                🟢 Potentially Eligible
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.82rem', marginTop: '3px' }}>
                Based on the information provided.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '9px', flexWrap: 'wrap' }}>
              <a href="#calculator" className="btn btn-secondary" style={{ padding: '10px 14px' }}>
                Get Detailed Assessment →
              </a>
              <a href="#contact" className="btn btn-primary" style={{ padding: '10px 14px' }}>
                Book Consultation →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR / ASSESSMENT SECTION */}
      <section id="calculator" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Instant Eligibility Check</span>
            <h2 className="section-title text-gradient">Check Your Point Score</h2>
            <p className="section-desc">
              Select your parameters to estimate your immigration selection score instantly.
            </p>
          </div>

          <div className="glass-panel calculator-box" style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '30px', borderRadius: '16px' }}>
            {calcStep === 1 && (
              <div className="calc-step-content">
                <h3 className="calc-step-title" style={{ fontSize: '1.3rem', color: '#f8fafc', marginBottom: '16px' }}>Step 1: Primary Target & Visa Goal</h3>
                <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>Target Country</label>
                    <select 
                      className="select-control" 
                      value={calcData.destination} 
                      onChange={(e) => setCalcData({ ...calcData, destination: e.target.value })}
                      style={{ padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px' }}
                    >
                      <option value="canada">Canada 🇨🇦</option>
                      <option value="australia">Australia 🇦🇺</option>
                      <option value="germany">Germany 🇩🇪</option>
                      <option value="uk">United Kingdom 🇬🇧</option>
                      <option value="nz">New Zealand 🇳🇿</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>Pathway Type</label>
                    <select 
                      className="select-control" 
                      value={calcData.visaType} 
                      onChange={(e) => setCalcData({ ...calcData, visaType: e.target.value })}
                      style={{ padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px' }}
                    >
                      <option value="pr">Permanent Residency (PR)</option>
                      <option value="work">Work Permit / Opportunity Card</option>
                      <option value="study">Study Visa</option>
                    </select>
                  </div>
                </div>
                <button className="btn btn-primary" style={{ marginTop: '20px' }} onClick={() => setCalcStep(2)}>
                  Next Step →
                </button>
              </div>
            )}

            {calcStep === 2 && (
              <div className="calc-step-content">
                <h3 className="calc-step-title" style={{ fontSize: '1.3rem', color: '#f8fafc', marginBottom: '16px' }}>Step 2: Age & Educational Qualification</h3>
                <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>Age Bracket</label>
                    <select 
                      className="select-control" 
                      value={calcData.age} 
                      onChange={(e) => setCalcData({ ...calcData, age: e.target.value })}
                      style={{ padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px' }}
                    >
                      <option value="18-24">18 - 24 Years</option>
                      <option value="25-32">25 - 32 Years</option>
                      <option value="33-39">33 - 39 Years</option>
                      <option value="40+">40+ Years</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>Highest Level of Education</label>
                    <select 
                      className="select-control" 
                      value={calcData.education} 
                      onChange={(e) => setCalcData({ ...calcData, education: e.target.value })}
                      style={{ padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px' }}
                    >
                      <option value="phd">Doctorate / Ph.D.</option>
                      <option value="masters">Master's Degree</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="diploma">Diploma / Trade Certificate</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <button className="btn btn-secondary" onClick={() => setCalcStep(1)}>← Back</button>
                  <button className="btn btn-primary" onClick={() => setCalcStep(3)}>Next Step →</button>
                </div>
              </div>
            )}

            {calcStep === 3 && (
              <div className="calc-step-content">
                <h3 className="calc-step-title" style={{ fontSize: '1.3rem', color: '#f8fafc', marginBottom: '16px' }}>Step 3: Work Experience & English Proficiency</h3>
                <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>Skilled Work Experience</label>
                    <select 
                      className="select-control" 
                      value={calcData.experience} 
                      onChange={(e) => setCalcData({ ...calcData, experience: e.target.value })}
                      style={{ padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px' }}
                    >
                      <option value="1-2">1 - 2 Years</option>
                      <option value="3-5">3 - 5 Years</option>
                      <option value="6+">6+ Years</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>Language Score (IELTS / PTE equivalent)</label>
                    <select 
                      className="select-control" 
                      value={calcData.englishScore} 
                      onChange={(e) => setCalcData({ ...calcData, englishScore: e.target.value })}
                      style={{ padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px' }}
                    >
                      <option value="clb9">CLB 9+ (IELTS 8,7,7,7)</option>
                      <option value="clb8">CLB 8 (IELTS 7.5,6.5,6.5,6.5)</option>
                      <option value="clb7">CLB 7 (IELTS 6.0 each)</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <button className="btn btn-secondary" onClick={() => setCalcStep(2)}>← Back</button>
                  <button className="btn btn-primary" onClick={runCalculation}>Calculate Score 🎉</button>
                </div>
              </div>
            )}

            {calcStep === 4 && (
              <div className="calc-step-content" style={{ textAlign: 'center' }}>
                <h3 className="calc-step-title" style={{ fontSize: '1.5rem', color: '#f8fafc', marginBottom: '8px' }}>Your Estimated Points Score</h3>
                <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#60a5fa', margin: '10px 0' }}>{calcScore} Points</div>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '450px', margin: '0 auto 20px' }}>
                  Based on your age, qualifications, experience, and language proficiency level.
                </p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  <button className="btn btn-secondary" onClick={() => setCalcStep(1)}>Recalculate</button>
                  <a href="#contact" className="btn btn-primary">Book Full Consultation →</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING SECTION */}
      <section id="contact" className="section-padding" style={{ background: '#0b1120' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Direct Legal Guidance</span>
            <h2 className="section-title text-gradient">Book Your Strategy Session</h2>
            <p className="section-desc">
              Schedule a meeting with our licensed immigration specialists.
            </p>
          </div>

          <div className="glass-panel" style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '30px', borderRadius: '16px', maxWidth: '700px', margin: '0 auto' }}>
            {bookingSubmitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🎉</div>
                <h3 style={{ color: '#f8fafc', fontSize: '1.4rem', marginBottom: '10px' }}>Consultation Request Submitted!</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Thank you for reaching out. One of our senior consultants will contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#94a3b8', fontSize: '0.88rem', display: 'block', marginBottom: '6px' }}>Full Name *</label>
                    <input 
                      type="text" 
                      className="select-control"
                      placeholder="John Doe"
                      value={bookingData.fullName}
                      onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
                      style={{ padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px' }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#94a3b8', fontSize: '0.88rem', display: 'block', marginBottom: '6px' }}>Email Address *</label>
                    <input 
                      type="email" 
                      className="select-control"
                      placeholder="john@example.com"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      style={{ padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px' }}
                    />
                  </div>
                </div>

                <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#94a3b8', fontSize: '0.88rem', display: 'block', marginBottom: '6px' }}>Phone Number *</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input 
                        type="text" 
                        value={bookingData.countryCode} 
                        onChange={(e) => setBookingData({ ...bookingData, countryCode: e.target.value })}
                        style={{ width: '70px', padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px' }} 
                      />
                      <input 
                        type="tel" 
                        className="select-control"
                        placeholder="9876543210"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        style={{ flex: 1, padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px' }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#94a3b8', fontSize: '0.88rem', display: 'block', marginBottom: '6px' }}>Preferred Destination *</label>
                    <select 
                      className="select-control" 
                      value={bookingData.destination} 
                      onChange={(e) => setBookingData({ ...bookingData, destination: e.target.value })}
                      style={{ padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px' }}
                    >
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="germany">Germany</option>
                      <option value="uk">United Kingdom</option>
                      <option value="nz">New Zealand</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#94a3b8', fontSize: '0.88rem', display: 'block', marginBottom: '6px' }}>Preferred Consultation Time *</label>
                  <input 
                    type="datetime-local" 
                    className="select-control"
                    value={bookingData.consultationTime}
                    onChange={(e) => setBookingData({ ...bookingData, consultationTime: e.target.value })}
                    style={{ padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px' }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#94a3b8', fontSize: '0.88rem', display: 'block', marginBottom: '6px' }}>Your Query / Message (Optional)</label>
                  <textarea 
                    className="select-control" 
                    rows={3} 
                    placeholder="Provide details regarding your education, job profile, or questions..."
                    value={bookingData.message}
                    onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                    style={{ padding: '10px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px', width: '100%' }}
                  ></textarea>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '4px 0' }}>
                  <input 
                    type="checkbox" 
                    id="consent" 
                    checked={bookingData.consent} 
                    onChange={(e) => setBookingData({ ...bookingData, consent: e.target.checked })} 
                  />
                  <label htmlFor="consent" style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                    I agree to be contacted by Cloyster Visas specialists regarding my immigration request.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={isSubmitting}
                  style={{ width: '100%', padding: '12px', marginTop: '8px' }}
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Request →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MODAL WINDOWS */}
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
                  Our legal experts meticulously organize and verify all required immigration paperwork, including academic credential evaluations (ECA), employer reference letters, bank proof of funds, and legal statements of explanation.
                </p>
              </div>
            )}

            {activeModal === 'postlanding' && (
              <div>
                <span style={{ background: 'rgba(37, 99, 235, 0.2)', color: '#60a5fa', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem' }}>
                  Settlement Assistance
                </span>
                <h3 style={{ fontSize: '1.6rem', marginTop: '10px', marginBottom: '15px' }}>🏡 Post-Landing Support</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  We assist you after your arrival in your destination country with finding temporary accommodation, opening local bank accounts, applying for Social Insurance Numbers (SIN / TFN), and understanding healthcare coverage.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#25D366',
          color: '#FFF',
          borderRadius: '50px',
          padding: '12px',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          zIndex: 99,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <WhatsAppIcon />
      </a>

      {/* FOOTER */}
      <footer style={{ background: '#070a12', padding: '50px 0 25px', borderTop: '1px solid #1e293b', color: '#94a3b8' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <ShieldIcon />
              <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#f8fafc' }}>
                Cloyster <span style={{ color: '#2563eb' }}>Visas</span>
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
              Empowering global dreams with expert guidance for immigration, study visas, and permanent residency.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#f8fafc', marginBottom: '12px', fontSize: '0.95rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="#destinations" style={{ color: 'inherit', textDecoration: 'none' }}>Destinations</a></li>
              <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a></li>
              <li><a href="#calculator" style={{ color: 'inherit', textDecoration: 'none' }}>Eligibility Calculator</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#f8fafc', marginBottom: '12px', fontSize: '0.95rem' }}>Destinations</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>🇨🇦 Canada Express Entry</li>
              <li>🇦🇺 Australia GSM</li>
              <li>🇩🇪 Germany Opportunity Card</li>
              <li>🇬🇧 UK Skilled Worker</li>
            </ul>
          </div>
        </div>

        <div className="container" style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Cloyster Visas. All rights reserved.
        </div>
      </footer>
    </>
  )
}