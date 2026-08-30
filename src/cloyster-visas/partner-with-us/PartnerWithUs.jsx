import React, { useEffect, useRef, useState } from 'react'

const ArrowIcon = ({ direction = 'right', size = 16 }) => (
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
    {direction === 'left' ? (
      <>
        <path d="M19 12H5" />
        <path d="m11 18-6-6 6-6" />
      </>
    ) : (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    )}
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)
  const total = PARTNERSHIP_SHOWCASE.length

  const goToSlide = (index) => {
    setActiveIndex((index + total) % total)
  }

  useEffect(() => {
    if (isPaused) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [isPaused, total])

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
    setIsPaused(true)
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      setIsPaused(false)
      return
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
    const distance = touchStartX.current - endX

    if (Math.abs(distance) > 45) {
      if (distance > 0) {
        goToSlide(activeIndex + 1)
      } else {
        goToSlide(activeIndex - 1)
      }
    }

    touchStartX.current = null
    setIsPaused(false)
  }

  return (
    <>
      <style>{`
        .partnership-section {
          width: 100%;
          padding: 70px 0 78px;
          background: var(--bg-alt);
          border-top: 1px solid var(--border-color);
          box-sizing: border-box;
          overflow: hidden;
        }

        .partnership-section .partnership-container {
          width: min(100% - 32px, 1080px);
          margin: 0 auto;
        }

        .partnership-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 30px;
        }

        .partnership-tag {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(37, 99, 235, 0.10);
          color: var(--accent-blue);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .partnership-title {
          margin: 11px 0 8px;
          color: var(--text-primary);
          font-size: clamp(1.8rem, 4vw, 2.35rem);
          line-height: 1.15;
          font-weight: 800;
        }

        .partnership-description {
          margin: 0 auto;
          max-width: 620px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .partnership-slider {
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
        }

        .partnership-viewport {
          width: 100%;
          overflow: hidden;
          border-radius: 18px;
          touch-action: pan-y;
          cursor: grab;
        }

        .partnership-viewport:active {
          cursor: grabbing;
        }

        .partnership-track {
          display: flex;
          will-change: transform;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .partnership-slide {
          min-width: 100%;
          padding: 2px;
          box-sizing: border-box;
        }

        .partnership-card {
          width: 100%;
          box-sizing: border-box;
          padding: 18px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          box-shadow: var(--card-shadow);
          overflow: hidden;
        }

        .partnership-media {
          width: 100%;
          height: clamp(185px, 31vw, 250px);
          border-radius: 13px;
          overflow: hidden;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
        }

        .partnership-media img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
        }

        .partnership-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 18px;
          box-sizing: border-box;
          text-align: center;
          background:
            linear-gradient(
              145deg,
              rgba(37, 99, 235, 0.08),
              rgba(34, 197, 94, 0.035)
            );
        }

        .partnership-placeholder-mark {
          width: 66px;
          height: 66px;
          display: grid;
          place-items: center;
          border: 1px dashed var(--accent-blue);
          border-radius: 15px;
          color: var(--accent-blue);
          font-size: 0.7rem;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .partnership-placeholder-note {
          color: var(--text-secondary);
          font-size: 0.72rem;
        }

        .partnership-content {
          padding: 16px 3px 2px;
        }

        .partnership-type {
          display: inline-flex;
          padding: 4px 9px;
          border-radius: 999px;
          background: rgba(37, 99, 235, 0.09);
          color: var(--accent-blue);
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }

        .partnership-content h3 {
          margin: 8px 0 5px;
          color: var(--text-primary);
          font-size: 1.05rem;
          line-height: 1.3;
          font-weight: 800;
        }

        .partnership-content p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.82rem;
          line-height: 1.55;
        }

        .partnership-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 14px;
        }

        .partnership-arrow {
          width: 42px;
          height: 42px;
          padding: 0;
          display: grid;
          place-items: center;
          border: 1px solid var(--border-color);
          border-radius: 50%;
          background: var(--bg-card);
          color: var(--text-primary);
          cursor: pointer;
          box-shadow: none;
          transition: transform 0.2s ease, border-color 0.2s ease,
            background 0.2s ease, color 0.2s ease;
        }

        .partnership-arrow:hover {
          transform: translateY(-1px);
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }

        .partnership-arrow:active {
          transform: scale(0.94);
        }

        .partnership-arrow:focus-visible {
          outline: 2px solid var(--accent-blue);
          outline-offset: 3px;
        }

        .partnership-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 14px;
        }

        .partnership-dot {
          width: 6px;
          height: 6px;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: var(--border-color);
          cursor: pointer;
          transition: width 0.2s ease, background 0.2s ease;
        }

        .partnership-dot.active {
          width: 20px;
          background: var(--accent-blue);
        }

        .partnership-swipe-hint {
          margin-top: 8px;
          text-align: center;
          color: var(--text-secondary);
          opacity: 0.7;
          font-size: 0.67rem;
        }

        .partnership-cta {
          width: 100%;
          max-width: 760px;
          margin: 24px auto 0;
          padding: 17px 19px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .partnership-cta-kicker {
          color: var(--accent-blue);
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 0.8px;
        }

        .partnership-cta h3 {
          margin: 5px 0 4px;
          color: var(--text-primary);
          font-size: 0.98rem;
        }

        .partnership-cta p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.76rem;
          line-height: 1.5;
        }

        .partnership-cta .btn {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        @media (max-width: 700px) {
          .partnership-section {
            padding: 54px 0 60px;
          }

          .partnership-section .partnership-container {
            width: calc(100% - 24px);
          }

          .partnership-header {
            margin-bottom: 22px;
          }

          .partnership-title {
            font-size: 1.75rem;
            margin-top: 9px;
          }

          .partnership-description {
            max-width: 340px;
            font-size: 0.78rem;
            line-height: 1.5;
          }

          .partnership-slider {
            width: 100%;
          }

          .partnership-card {
            padding: 12px;
            border-radius: 15px;
          }

          .partnership-media {
            height: 175px;
            border-radius: 11px;
          }

          .partnership-placeholder-mark {
            width: 56px;
            height: 56px;
            font-size: 0.63rem;
          }

          .partnership-content {
            padding: 13px 2px 1px;
          }

          .partnership-content h3 {
            font-size: 0.96rem;
            margin-top: 7px;
          }

          .partnership-content p {
            font-size: 0.76rem;
          }

          .partnership-arrow {
            width: 38px;
            height: 38px;
          }

          .partnership-swipe-hint {
            font-size: 0.62rem;
          }

          .partnership-cta {
            margin-top: 20px;
            padding: 15px;
            border-radius: 15px;
            flex-direction: column;
            align-items: flex-start;
            gap: 13px;
          }

          .partnership-cta .btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 420px) {
          .partnership-section {
            padding: 46px 0 52px;
          }

          .partnership-section .partnership-container {
            width: calc(100% - 20px);
          }

          .partnership-header {
            margin-bottom: 18px;
          }

          .partnership-tag {
            font-size: 0.63rem;
            padding: 5px 10px;
          }

          .partnership-title {
            font-size: 1.55rem;
          }

          .partnership-description {
            font-size: 0.72rem;
          }

          .partnership-card {
            padding: 10px;
          }

          .partnership-media {
            height: 155px;
          }

          .partnership-content h3 {
            font-size: 0.9rem;
          }

          .partnership-content p {
            font-size: 0.71rem;
          }

          .partnership-cta {
            padding: 14px;
          }

          .partnership-cta h3 {
            font-size: 0.9rem;
          }

          .partnership-cta p {
            font-size: 0.7rem;
          }
        }

        [data-theme="light"] .partnership-section .partnership-card {
          background: #ffffff !important;
        }
      `}</style>

      <section
        id="partner-with-us"
        className="partnership-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div className="partnership-container">
          <div className="partnership-header">
            <span className="partnership-tag">Trust &amp; Collaboration</span>

            <h2 className="partnership-title text-gradient">
              Partner With Us
            </h2>

            <p className="partnership-description">
              A dedicated space to present CloysterVisa's professional
              collaborations, partnership agreements and certifications.
            </p>
          </div>

          <div className="partnership-slider">
            <div
              className="partnership-viewport"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="partnership-track"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {PARTNERSHIP_SHOWCASE.map((item) => (
                  <div className="partnership-slide" key={item.id}>
                    <article className="partnership-card">
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

                      <div className="partnership-content">
                        <span className="partnership-type">
                          {item.type}
                        </span>

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <div className="partnership-controls">
              <button
                type="button"
                className="partnership-arrow"
                onClick={() => goToSlide(activeIndex - 1)}
                aria-label="Previous partnership"
              >
                <ArrowIcon direction="left" />
              </button>

              <div
                className="partnership-pagination"
                aria-label="Partnership slides"
              >
                {PARTNERSHIP_SHOWCASE.map((item, index) => (
                  <button
                    type="button"
                    key={item.id}
                    className={`partnership-dot ${
                      index === activeIndex ? 'active' : ''
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Show ${item.title}`}
                    aria-current={
                      index === activeIndex ? 'true' : undefined
                    }
                  />
                ))}
              </div>

              <button
                type="button"
                className="partnership-arrow"
                onClick={() => goToSlide(activeIndex + 1)}
                aria-label="Next partnership"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>

            <div className="partnership-swipe-hint">
              Swipe to explore partnerships
            </div>
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

            <a
  href="https://wa.me/919266515362?text=Hello%20CloysterVisa%2C%20I%E2%80%99m%20interested%20in%20partnering%20with%20you."
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
>
  Partner With Us
</a>
        
          </div>
        </div>
      </section>
    </>
  )
}

export default PartnerWithUs