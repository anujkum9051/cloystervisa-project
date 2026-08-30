import React from 'react'

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

const PARTNERSHIP_SHOWCASE = [
  {
    id: 'partnership-01',
    type: 'Partnership',
    title: 'Partnership Agreement 01',
    description: 'Official collaboration / partnership documentation.',
    image: '',
  },
  {
    id: 'partnership-02',
    type: 'Partnership',
    title: 'Partnership Agreement 02',
    description: 'Official collaboration / partnership documentation.',
    image: '',
  },
  {
    id: 'partnership-03',
    type: 'Partnership',
    title: 'Partnership Agreement 03',
    description: 'Official collaboration / partnership documentation.',
    image: '',
  },
  {
    id: 'certification-01',
    type: 'Certification',
    title: 'Professional Certification',
    description: 'Certificate received by CloysterVisa.',
    image: '',
  },
]

const PartnerWithUs = () => {
  return (
    <section
      id="partner-with-us"
      className="section-padding partnership-section"
      style={{
        padding: '76px 0',
        background: 'var(--bg-main)',
      }}
    >
      <div className="container">

        <div
          className="section-header"
          style={{
            textAlign: 'center',
            marginBottom: '42px',
          }}
        >
          <span
            className="section-tag"
            style={{
              background: 'var(--bg-card)',
              color: 'var(--accent-blue)',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.85rem',
            }}
          >
            Trust &amp; Collaboration
          </span>

          <h2
            className="section-title text-gradient"
            style={{
              fontSize: '2.2rem',
              margin: '12px 0',
            }}
          >
            Partner With Us
          </h2>

          <p
            className="section-desc"
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '760px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            A dedicated space to present CloysterVisa's professional
            collaborations, partnership agreements and certifications.
          </p>
        </div>

        <div className="partnership-showcase-grid">
          {PARTNERSHIP_SHOWCASE.map((item) => (
            <article
              className={`partnership-card glass-panel ${
                item.type === 'Certification'
                  ? 'partnership-card-certification'
                  : ''
              }`}
              key={item.id}
            >
              <div className="partnership-media">

                {item.image ? (
                  <img src={item.image} alt={item.title} />
                ) : (
                  <div
                    className="partnership-placeholder"
                    aria-label={`${item.title} image placeholder`}
                  >
                    <span className="partnership-placeholder-mark">
                      {item.type === 'Certification'
                        ? 'CERT'
                        : 'PARTNER'}
                    </span>

                    <span className="partnership-placeholder-note">
                      Add document / logo image
                    </span>
                  </div>
                )}

              </div>

              <div className="partnership-card-content">
                <span className="partnership-type">
                  {item.type}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="partnership-cta glass-panel">
          <div>
            <span className="partnership-cta-kicker">
              COLLABORATE WITH CLOYSTERVISA
            </span>

            <h3>Interested in partnering with us?</h3>

            <p>
              For partnership enquiries, institutional collaborations
              or professional associations, get in touch with our team.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Partner With Us
            <ArrowRightIcon />
          </a>
        </div>

      </div>
    </section>
  )
}

export default PartnerWithUs