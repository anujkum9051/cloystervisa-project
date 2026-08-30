const ArrowRightIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

const STUDY_VISA_DESTINATIONS = [
  {
    id: 'study-italy',
    name: 'Italy',
    region: 'Europe',
    flag: 'https://flagcdn.com/w40/it.png',
    description:
      'Explore study opportunities in Italy with guidance on course selection, applications, documentation and student visa preparation.',
  },
  {
    id: 'study-canada',
    name: 'Canada',
    region: 'North America',
    flag: 'https://flagcdn.com/w40/ca.png',
    description:
      'Plan your Canadian study journey with support for institution selection, admission documentation and study permit preparation.',
  },
  {
    id: 'study-australia',
    name: 'Australia',
    region: 'Oceania',
    flag: 'https://flagcdn.com/w40/au.png',
    description:
      'Get structured support for Australian education pathways, applications, documentation and student visa requirements.',
  },
  {
    id: 'study-germany',
    name: 'Germany',
    region: 'Europe',
    flag: 'https://flagcdn.com/w40/de.png',
    description:
      'Discover German study options with assistance throughout university applications, documentation and student visa preparation.',
  },
  {
    id: 'study-uk',
    name: 'United Kingdom',
    region: 'Europe',
    flag: 'https://flagcdn.com/w40/gb.png',
    description:
      'Build your UK study pathway with guidance on universities, applications, supporting documents and student visa preparation.',
  },
  {
    id: 'study-new-zealand',
    name: 'New Zealand',
    region: 'Oceania',
    flag: 'https://flagcdn.com/w40/nz.png',
    description:
      'Get end-to-end guidance for studying in New Zealand, from course selection and admission to student visa preparation.',
  },
]

const StudyVisa = () => {
  return (
    <section
      id="study-visa"
      className="section-padding study-visa-section"
      style={{
        padding: '76px 0',
        background: 'var(--bg-main, #080f20)',
      }}
    >
      <div
        className="container"
        style={{
          width: 'min(1180px, calc(100% - 40px))',
          margin: '0 auto',
        }}
      >
        <div
          className="section-header study-visa-header"
          style={{
            textAlign: 'center',
            marginBottom: '42px',
          }}
        >
          <span
            className="section-tag"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 14px',
              borderRadius: '999px',
              background: 'var(--bg-card, #111b32)',
              color: 'var(--accent-blue, #3b82f6)',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            International Education
          </span>

          <h2
            className="section-title text-gradient"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              margin: '14px 0 12px',
              fontWeight: 800,
            }}
          >
            Study Visa
          </h2>

          <p
            className="section-desc"
            style={{
              color: 'var(--text-secondary, #94a3b8)',
              maxWidth: '760px',
              margin: '0 auto',
              lineHeight: 1.7,
              fontSize: '1rem',
            }}
          >
            A dedicated study pathway for students planning to pursue education
            abroad, with destination-focused guidance from course selection to
            visa preparation.
          </p>
        </div>

        <div
          className="study-visa-intro glass-panel"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '28px',
            padding: '32px',
            marginBottom: '30px',
            border: '1px solid rgba(96,165,250,0.14)',
            borderRadius: '24px',
            background: 'rgba(17,27,50,0.72)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
          }}
        >
          <div>
            <span
              className="study-support-tag"
              style={{
                color: 'var(--accent-blue, #60a5fa)',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
              }}
            >
              STUDY ABROAD SUPPORT
            </span>

            <h3
              style={{
                margin: '10px 0 10px',
                fontSize: '1.65rem',
                color: 'var(--text-primary, #f8fafc)',
              }}
            >
              Choose your study destination
            </h3>

            <p
              style={{
                margin: 0,
                color: 'var(--text-secondary, #94a3b8)',
                lineHeight: 1.7,
              }}
            >
              Select a country below to explore the study visa support pathway.
              Requirements vary by institution, course and destination.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '12px',
              alignContent: 'center',
            }}
          >
            <div className="study-mini-card">
              <strong>Course Guidance</strong>
              <span>Find a suitable study pathway</span>
            </div>
            <div className="study-mini-card">
              <strong>Application Support</strong>
              <span>Prepare your documents correctly</span>
            </div>
            <div className="study-mini-card">
              <strong>Visa Preparation</strong>
              <span>Organised visa documentation</span>
            </div>
            <div className="study-mini-card">
              <strong>Pre-Departure</strong>
              <span>Support before your journey</span>
            </div>
          </div>
        </div>

        <div
          className="study-destination-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '18px',
          }}
        >
          {STUDY_VISA_DESTINATIONS.map((destination) => (
            <article
              key={destination.id}
              className="study-destination-card"
              style={{
                position: 'relative',
                padding: '24px',
                borderRadius: '20px',
                border: '1px solid rgba(96,165,250,0.13)',
                background: 'rgba(15,23,42,0.78)',
                transition: 'transform 180ms ease, border-color 180ms ease',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  marginBottom: '18px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '13px',
                  }}
                >
                  <img
                    src={destination.flag}
                    alt={`${destination.name} flag`}
                    width="40"
                    height="30"
                    loading="lazy"
                    style={{
                      width: '40px',
                      height: '30px',
                      objectFit: 'cover',
                      borderRadius: '5px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.22)',
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        color: 'var(--text-primary, #f8fafc)',
                        fontSize: '1.15rem',
                      }}
                    >
                      {destination.name}
                    </h3>
                    <span
                      style={{
                        color: 'var(--accent-blue, #60a5fa)',
                        fontSize: '0.78rem',
                      }}
                    >
                      {destination.region}
                    </span>
                  </div>
                </div>
              </div>

              <p
                style={{
                  color: 'var(--text-secondary, #94a3b8)',
                  lineHeight: 1.65,
                  minHeight: '105px',
                  margin: '0 0 20px',
                  fontSize: '0.93rem',
                }}
              >
                {destination.description}
              </p>

              <a
                href="#contact"
                className="study-destination-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--accent-blue, #60a5fa)',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Explore {destination.name}
                <ArrowRightIcon />
              </a>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: '30px',
            padding: '24px 28px',
            borderRadius: '20px',
            border: '1px solid rgba(34,197,94,0.15)',
            background: 'rgba(34,197,94,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h3
              style={{
                margin: '0 0 6px',
                color: 'var(--text-primary, #f8fafc)',
              }}
            >
              Planning to study abroad?
            </h3>
            <p
              style={{
                margin: 0,
                color: 'var(--text-secondary, #94a3b8)',
              }}
            >
              Get personalised guidance for your preferred destination.
            </p>
          </div>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 18px',
              borderRadius: '10px',
              background: 'var(--accent-blue, #2563eb)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 800,
            }}
          >
            Book a Consultation
            <ArrowRightIcon size={17} />
          </a>
        </div>
      </div>

      <style>{`
        .study-mini-card {
          padding: 16px;
          border-radius: 14px;
          border: 1px solid rgba(96,165,250,0.10);
          background: rgba(255,255,255,0.025);
        }

        .study-mini-card strong {
          display: block;
          color: var(--text-primary, #f8fafc);
          font-size: 0.9rem;
          margin-bottom: 5px;
        }

        .study-mini-card span {
          display: block;
          color: var(--text-secondary, #94a3b8);
          font-size: 0.78rem;
          line-height: 1.45;
        }

        .study-destination-card:hover {
          transform: translateY(-4px);
          border-color: rgba(96,165,250,0.35) !important;
        }

        .study-destination-link:hover {
          text-decoration: underline !important;
        }

        @media (max-width: 900px) {
          .study-visa-intro {
            grid-template-columns: 1fr !important;
          }

          .study-destination-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 620px) {
          .study-destination-grid {
            grid-template-columns: 1fr !important;
          }

          .study-visa-intro {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default StudyVisa