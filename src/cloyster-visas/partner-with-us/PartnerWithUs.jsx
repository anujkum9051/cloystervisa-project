import React, { useEffect, useState } from 'react'
import certificateImage from './cloyster-visa-certificate-1.png'
import shivliImage from './partner-profile.jpeg'
import aspirroLogo from './aspirro-logo.jpeg'

const ArrowIcon = ({ size = 17 }) => (
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

const CloseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

const FeatureIcon = ({ type }) => {
  if (type === 'resume') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.7 8.5H3.4V20h3.3V8.5ZM5.05 3A2 2 0 1 0 5.03 7 2 2 0 0 0 5.05 3ZM20.6 13.35c0-3.4-1.82-4.98-4.25-4.98-1.95 0-2.82 1.06-3.31 1.82V8.5H9.75V20h3.29v-5.68c0-1.5.28-2.96 2.15-2.96 1.85 0 1.87 1.73 1.87 3.06V20h3.29l.25-6.65Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c2.4 2.5 3.5 5.5 3.5 9S14.4 18.5 12 21c-2.4-2.5-3.5-5.5-3.5-9S9.6 5.5 12 3Z" />
      <path d="M3 12h18" />
    </svg>
  )
}

const PartnerWithUs = () => {
  const [showAspirro, setShowAspirro] = useState(false)
  const [viewingImage, setViewingImage] = useState(null)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        if (viewingImage) {
          setViewingImage(null)
          return
        }

        if (showAspirro) {
          setShowAspirro(false)
        }
      }
    }

    if (showAspirro || viewingImage) {
      window.addEventListener('keydown', closeOnEscape)
    }

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [showAspirro, viewingImage])

  useEffect(() => {
    // Only lock page scrolling while the full-screen image viewer is open.
    // The ASPIRRO details section must remain normally scrollable.
    if (!viewingImage) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [viewingImage])

  const openAspirro = () => {
    setShowAspirro(true)
    window.setTimeout(() => {
      document.getElementById('aspirro-details')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 30)
  }

  return (
    <>
      <style>{`
        .partner-section {
          width: 100%;
          padding: 78px 0 86px;
          background:
            radial-gradient(circle at 12% 18%, rgba(37, 99, 235, .065), transparent 32%),
            radial-gradient(circle at 88% 82%, rgba(16, 185, 129, .055), transparent 30%),
            var(--bg-alt);
          border-top: 1px solid var(--border-color);
          overflow: hidden;
        }

        .partner-container {
          width: min(100% - 32px, 1120px);
          margin: 0 auto;
        }

        .partner-header {
          max-width: 760px;
          margin: 0 auto 34px;
          text-align: center;
        }

        .partner-eyebrow {
          display: inline-flex;
          padding: 7px 13px;
          border-radius: 999px;
          background: rgba(37, 99, 235, .09);
          border: 1px solid rgba(37, 99, 235, .16);
          color: var(--accent-blue);
          font-size: .67rem;
          font-weight: 850;
          letter-spacing: .9px;
          text-transform: uppercase;
        }

        .partner-header h2 {
          margin: 13px 0 9px;
          color: var(--text-primary);
          font-size: clamp(2rem, 4.5vw, 2.8rem);
          line-height: 1.08;
          font-weight: 850;
          letter-spacing: -.035em;
        }

        .partner-header p {
          max-width: 690px;
          margin: 0 auto;
          color: var(--text-secondary);
          font-size: .9rem;
          line-height: 1.7;
        }

        /* Featured ASPIRRO card */
        .aspirro-card {
          max-width: 920px;
          margin: 0 auto;
          border: 1px solid var(--border-color);
          border-radius: 26px;
          background: var(--bg-card);
          box-shadow: var(--card-shadow);
          overflow: hidden;
        }

        .aspirro-card-top {
          padding: 12px;
        }

        .aspirro-logo-panel {
          min-height: 235px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          box-sizing: border-box;
          border-radius: 19px;
          background: #071f19;
          border: 1px solid rgba(196, 164, 77, .22);
          overflow: hidden;
        }

        .aspirro-logo {
          width: min(100%, 560px);
          max-height: 235px;
          display: block;
          object-fit: contain;
          border-radius: 8px;
        }

        .aspirro-card-body {
          padding: 25px 28px 29px;
        }

        .aspirro-kicker {
          color: var(--accent-blue);
          font-size: .66rem;
          font-weight: 850;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .aspirro-card-body h3 {
          margin: 8px 0 7px;
          color: var(--text-primary);
          font-size: clamp(1.25rem, 3vw, 1.65rem);
          line-height: 1.2;
          font-weight: 830;
        }

        .aspirro-role {
          margin: 0 0 14px;
          color: var(--text-secondary);
          font-size: .82rem;
          line-height: 1.55;
        }

        .aspirro-card-body > p {
          max-width: 780px;
          margin: 0;
          color: var(--text-secondary);
          font-size: .84rem;
          line-height: 1.68;
        }

        .aspirro-person {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid var(--border-color);
        }

        .aspirro-person-avatar {
          width: 58px;
          height: 58px;
          flex: 0 0 58px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center 25%;
          border: 2px solid var(--bg-card);
          box-shadow: 0 0 0 1px var(--border-color);
        }

        .aspirro-person strong {
          display: block;
          color: var(--text-primary);
          font-size: .84rem;
        }

        .aspirro-person span {
          display: block;
          margin-top: 2px;
          color: var(--text-secondary);
          font-size: .72rem;
          line-height: 1.45;
        }

        .aspirro-know-more {
          margin-top: 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 18px;
          border: 0;
          border-radius: 11px;
          background: var(--accent-blue);
          color: #fff;
          font: inherit;
          font-size: .76rem;
          font-weight: 800;
          cursor: pointer;
          transition: transform .2s ease, opacity .2s ease;
        }

        .aspirro-know-more:hover {
          transform: translateY(-1px);
          opacity: .93;
        }

        /* Expanded ASPIRRO detail */
        .aspirro-details {
          max-width: 920px;
          margin: 22px auto 0;
          scroll-margin-top: 100px;
        }

        .aspirro-detail-shell {
          padding: 28px;
          border: 1px solid var(--border-color);
          border-radius: 26px;
          background: var(--bg-card);
          box-shadow: var(--card-shadow);
        }

        .aspirro-detail-header {
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 26px;
          align-items: center;
        }

        .aspirro-profile-image {
          width: 190px;
          height: 220px;
          display: block;
          object-fit: cover;
          object-position: center 25%;
          border-radius: 18px;
          border: 1px solid var(--border-color);
        }

        .aspirro-detail-header h3 {
          margin: 7px 0 6px;
          color: var(--text-primary);
          font-size: clamp(1.5rem, 3vw, 2rem);
          line-height: 1.15;
          font-weight: 850;
        }

        .aspirro-detail-subtitle {
          margin: 0 0 13px;
          color: var(--text-secondary);
          font-size: .88rem;
          line-height: 1.6;
        }

        .aspirro-detail-description {
          margin: 0;
          color: var(--text-secondary);
          font-size: .83rem;
          line-height: 1.7;
        }

        .aspirro-section-title {
          margin: 31px 0 15px;
          color: var(--text-primary);
          font-size: 1.05rem;
          font-weight: 820;
        }

        .aspirro-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 13px;
        }

        .aspirro-feature {
          padding: 19px;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          background: var(--bg-main);
        }

        .aspirro-feature-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          margin-bottom: 13px;
          border-radius: 11px;
          color: var(--accent-blue);
          background: rgba(37, 99, 235, .09);
        }

        .aspirro-feature-icon svg {
          width: 19px;
          height: 19px;
        }

        .aspirro-feature h4 {
          margin: 0 0 6px;
          color: var(--text-primary);
          font-size: .82rem;
          line-height: 1.35;
        }

        .aspirro-feature p {
          margin: 0;
          color: var(--text-secondary);
          font-size: .72rem;
          line-height: 1.58;
        }

        .aspirro-why {
          padding: 20px 21px;
          border: 1px solid var(--border-color);
          border-radius: 17px;
          background:
            linear-gradient(135deg, rgba(37, 99, 235, .06), rgba(16, 185, 129, .035));
        }

        .aspirro-why-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 11px 22px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .aspirro-why-list li {
          position: relative;
          padding-left: 19px;
          color: var(--text-secondary);
          font-size: .76rem;
          line-height: 1.55;
        }

        .aspirro-why-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: var(--accent-blue);
          font-weight: 900;
        }

        .aspirro-disclaimer {
          margin-top: 19px;
          padding: 14px 16px;
          border-left: 3px solid var(--accent-blue);
          border-radius: 8px;
          background: rgba(37, 99, 235, .055);
          color: var(--text-secondary);
          font-size: .7rem;
          line-height: 1.6;
        }

        .aspirro-detail-cta {
          margin-top: 22px;
          padding: 19px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border: 1px solid var(--border-color);
          border-radius: 17px;
        }

        .aspirro-detail-cta strong {
          display: block;
          margin-bottom: 4px;
          color: var(--text-primary);
          font-size: .88rem;
        }

        .aspirro-detail-cta span {
          color: var(--text-secondary);
          font-size: .72rem;
          line-height: 1.5;
        }

        .aspirro-close {
          margin-top: 14px;
          width: 100%;
          min-height: 40px;
          border: 1px solid var(--border-color);
          border-radius: 10px;
          background: transparent;
          color: var(--text-secondary);
          font: inherit;
          font-size: .72rem;
          font-weight: 750;
          cursor: pointer;
        }

        .aspirro-close:hover {
          color: var(--text-primary);
          border-color: var(--accent-blue);
        }

        /* Existing certificate */
        .certificate-card {
          max-width: 920px;
          margin: 25px auto 0;
          padding: 12px;
          border: 1px solid var(--border-color);
          border-radius: 22px;
          background: var(--bg-card);
          box-shadow: var(--card-shadow);
        }

        .certificate-image-button {
          width: 100%;
          padding: 0;
          border: 0;
          background: var(--bg-main);
          border-radius: 16px;
          overflow: hidden;
          cursor: zoom-in;
        }

        .certificate-image-button img {
          width: 100%;
          max-height: 430px;
          display: block;
          object-fit: contain;
        }

        .certificate-caption {
          padding: 15px 8px 7px;
        }

        .certificate-caption span {
          color: var(--accent-blue);
          font-size: .63rem;
          font-weight: 850;
          letter-spacing: .8px;
          text-transform: uppercase;
        }

        .certificate-caption h4 {
          margin: 6px 0 3px;
          color: var(--text-primary);
          font-size: .95rem;
        }

        .certificate-caption p {
          margin: 0;
          color: var(--text-secondary);
          font-size: .72rem;
        }

        .partner-bottom-cta {
          max-width: 920px;
          margin: 25px auto 0;
          padding: 19px 21px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          box-sizing: border-box;
        }

        .partner-bottom-cta-kicker {
          color: var(--accent-blue);
          font-size: .62rem;
          font-weight: 850;
          letter-spacing: .9px;
        }

        .partner-bottom-cta h4 {
          margin: 6px 0 3px;
          color: var(--text-primary);
          font-size: .98rem;
        }

        .partner-bottom-cta p {
          margin: 0;
          color: var(--text-secondary);
          font-size: .72rem;
          line-height: 1.5;
        }

        .partner-bottom-cta .btn {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        .partner-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(3, 8, 20, .94);
          backdrop-filter: blur(9px);
          -webkit-backdrop-filter: blur(9px);
        }

        .partner-lightbox-close {
          position: fixed;
          top: 17px;
          right: 17px;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 50%;
          background: rgba(15,23,42,.9);
          color: #fff;
          cursor: pointer;
        }

        .partner-lightbox-image {
          max-width: 94vw;
          max-height: 91vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 9px;
          box-shadow: 0 25px 80px rgba(0,0,0,.5);
        }

        @media (max-width: 760px) {
          .partner-section {
            padding: 61px 0 68px;
          }

          .partner-container {
            width: calc(100% - 24px);
          }

          .aspirro-detail-header {
            grid-template-columns: 1fr;
            gap: 17px;
          }

          .aspirro-profile-image {
            width: 100%;
            height: 330px;
          }

          .aspirro-features {
            grid-template-columns: 1fr;
          }

          .aspirro-why-list {
            grid-template-columns: 1fr;
          }

          .partner-bottom-cta,
          .aspirro-detail-cta {
            align-items: stretch;
            flex-direction: column;
          }

          .partner-bottom-cta .btn,
          .aspirro-detail-cta .btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 520px) {
          .partner-header {
            margin-bottom: 25px;
          }

          .partner-header h2 {
            font-size: 1.82rem;
          }

          .partner-header p {
            font-size: .78rem;
          }

          .aspirro-logo-panel {
            min-height: 185px;
            padding: 17px;
          }

          .aspirro-card-body,
          .aspirro-detail-shell {
            padding: 20px;
          }

          .aspirro-person {
            align-items: flex-start;
          }

          .aspirro-profile-image {
            height: 300px;
          }

          .aspirro-detail-shell {
            border-radius: 19px;
          }

          .certificate-card {
            padding: 9px;
          }
        }

        [data-theme="light"] .aspirro-card,
        [data-theme="light"] .aspirro-detail-shell,
        [data-theme="light"] .certificate-card {
          background: #fff !important;
        }
      `}</style>

      <section id="partner-with-us" className="partner-section">
        <div className="partner-container">
          <header className="partner-header">
            <span className="partner-eyebrow">Our Partners</span>
            <h2 className="text-gradient">Professional Partnerships</h2>
            <p>
              We collaborate with specialised professionals and organisations
              to support clients with complementary services beyond migration
              advice.
            </p>
          </header>

          <article id="aspirro-partner-card" className="aspirro-card">
            <div className="aspirro-card-top">
              <div className="aspirro-logo-panel">
                <img
                  className="aspirro-logo"
                  src={aspirroLogo}
                  alt="ASPIRRO logo"
                />
              </div>
            </div>

            <div className="aspirro-card-body">
              <span className="aspirro-kicker">
                Meet Our Australian Career Strategy Partner
              </span>

              <h3>ASPIRRO</h3>

              <p className="aspirro-role">
                Australia-Based Career Strategy &amp; Employment-Readiness Partner
              </p>

              <p>
                Supporting skilled professionals and international students
                preparing for the Australian job market.
              </p>

              <div className="aspirro-person">
                <img
                  className="aspirro-person-avatar"
                  src={shivliImage}
                  alt="Shivli Bhatnagar"
                  loading="lazy"
                />
                <div>
                  <strong>Shivli Bhatnagar</strong>
                  <span>Director &amp; Chief Career Strategist, ASPIRRO</span>
                  <span>Sydney, Australia</span>
                </div>
              </div>

              <button
                type="button"
                className="aspirro-know-more"
                onClick={openAspirro}
              >
                Know More <ArrowIcon />
              </button>
            </div>
          </article>

          {showAspirro && (
            <div id="aspirro-details" className="aspirro-details">
              <div className="aspirro-detail-shell">
                <div className="aspirro-detail-header">
                  <button
                    type="button"
                    className="certificate-image-button"
                    onClick={() =>
                      setViewingImage({
                        src: shivliImage,
                        title: 'Shivli Bhatnagar — ASPIRRO',
                      })
                    }
                    aria-label="View Shivli Bhatnagar photo"
                  >
                    <img
                      className="aspirro-profile-image"
                      src={shivliImage}
                      alt="Shivli Bhatnagar, Director & Chief Career Strategist, ASPIRRO"
                    />
                  </button>

                  <div>
                    <span className="aspirro-kicker">ASPIRRO</span>
                    <h3>Precision Career Strategy for Australia</h3>
                    <p className="aspirro-detail-subtitle">
                      Sydney-based career strategy and employment-readiness support
                      for skilled professionals and international students.
                    </p>
                    <p className="aspirro-detail-description">
                      ASPIRRO is a Sydney-based career strategy and
                      employment-readiness firm supporting skilled professionals
                      and international students preparing for the Australian
                      job market.
                    </p>
                  </div>
                </div>

                <h4 className="aspirro-section-title">Career Strategy Services</h4>

                <div className="aspirro-features">
                  <article className="aspirro-feature">
                    <div className="aspirro-feature-icon">
                      <FeatureIcon type="resume" />
                    </div>
                    <h4>Resume Architecture</h4>
                    <p>
                      ATS-ready resume development aligned with Australian
                      formatting and recruiter search conventions.
                    </p>
                  </article>

                  <article className="aspirro-feature">
                    <div className="aspirro-feature-icon">
                      <FeatureIcon type="linkedin" />
                    </div>
                    <h4>LinkedIn Optimisation</h4>
                    <p>
                      Optimisation of your LinkedIn profile, headline, About
                      and experience to strengthen your professional positioning.
                    </p>
                  </article>

                  <article className="aspirro-feature">
                    <div className="aspirro-feature-icon">
                      <FeatureIcon type="culture" />
                    </div>
                    <h4>Culture &amp; Interview Readiness</h4>
                    <p>
                      Australian workplace culture alignment and structured
                      interview preparation.
                    </p>
                  </article>
                </div>

                <h4 className="aspirro-section-title">Why ASPIRRO?</h4>

                <div className="aspirro-why">
                  <ul className="aspirro-why-list">
                    <li>1-on-1 personalised career strategy</li>
                    <li>Australian ATS and recruiter-search knowledge</li>
                    <li>Live coaching and interview preparation</li>
                    <li>Designed specifically for the Australian job market</li>
                  </ul>
                </div>

                <div className="aspirro-disclaimer">
                  <strong>Important:</strong> ASPIRRO is an independent career
                  strategy and employment-readiness firm. It is not a migration
                  or recruitment agency. Interview or employment outcomes are
                  not guaranteed.
                </div>

                <div className="aspirro-detail-cta">
                  <div>
                    <strong>Ready to prepare for the Australian job market?</strong>
                    <span>
                      Explore ASPIRRO’s career strategy programs through the
                      exclusive CloysterVisa partner offer.
                    </span>
                  </div>

                  <a
                    href="https://wa.me/919266515362?text=Hello%20CloysterVisa%2C%20I%E2%80%99m%20interested%20in%20the%20ASPIRRO%20partner%20offer."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Explore Partner Offer <ArrowIcon size={15} />
                  </a>
                </div>

                <button
                  type="button"
                  className="aspirro-close"
                  onClick={() => {
                    setShowAspirro(false)
                    window.setTimeout(() => {
                      document
                        .getElementById('aspirro-partner-card')
                        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }, 30)
                  }}
                >
                  ← Back to ASPIRRO Partner
                </button>
              </div>
            </div>
          )}

          <article className="certificate-card">
            <button
              type="button"
              className="certificate-image-button"
              onClick={() =>
                setViewingImage({
                  src: certificateImage,
                  title: 'CloysterVisa partnership certificate',
                })
              }
              aria-label="View partnership certificate full size"
            >
              <img
                src={certificateImage}
                alt="CloysterVisa partnership certificate"
                loading="lazy"
              />
            </button>

            <div className="certificate-caption">
              <span>Partnership Certification</span>
              <h4>Authorized Partner Certificate</h4>
              <p>Official partnership certification issued to Cloyster Visa.</p>
            </div>
          </article>

          <div className="partner-bottom-cta glass-panel">
            <div>
              <span className="partner-bottom-cta-kicker">
                COLLABORATE WITH CLOYSTERVISA
              </span>
              <h4>Interested in partnering with us?</h4>
              <p>
                For institutional collaborations, education partnerships or
                professional associations, connect with our team.
              </p>
            </div>

            <a
              href="https://wa.me/919266515362?text=Hello%20CloysterVisa%2C%20I%E2%80%99m%20interested%20in%20partnering%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Partner With Us <ArrowIcon size={15} />
            </a>
          </div>
        </div>
      </section>

      {viewingImage && (
        <div
          className="partner-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${viewingImage.title} full-size view`}
          onClick={() => setViewingImage(null)}
        >
          <button
            type="button"
            className="partner-lightbox-close"
            onClick={() => setViewingImage(null)}
            aria-label="Close image viewer"
          >
            <CloseIcon />
          </button>

          <img
            className="partner-lightbox-image"
            src={viewingImage.src}
            alt={viewingImage.title}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default PartnerWithUs
