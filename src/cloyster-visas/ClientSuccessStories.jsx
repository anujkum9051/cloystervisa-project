import React, { useEffect, useState } from 'react'


import abhinavSinghPhoto from './client-reviews/abhinav-singh.png'
import anupamaSainiPhoto from './client-reviews/anupama-saini.png'
import gulshanShahPhoto from './client-reviews/gulshan-shah.png'
import khushbooKumariPhoto from './client-reviews/khushboo-kumari.png'
import sanjayKumarPhoto from './client-reviews/sanjay-kumar.png'
import vaibhavKumarPhoto from './client-reviews/vaibhav-kumar.png'
import vickeyDaasPhoto from './client-reviews/vickey-daas.png'

/*
 * ClientSuccessStories
 * --------------------
 * Standalone Google client-review section.
 *
 * IMPORTANT:
 * - Keeps the existing CloysterVisa project theme variables.
 * - Does not change the global layout, theme, fonts, or other sections.
 * - CSS stays inside this single JSX file as requested.
 * - Reviews below are based on the Google review screenshots provided.
 * - Owner replies are intentionally NOT included.
 */

const reviews = [
  {
    name: 'Khushboo Kumari',
    photo: khushbooKumariPhoto,
    meta: '2 reviews',
    time: '2 years ago',
    text:
      'Cloyster Visas is the best consultancy in Delhi! They helped me secure a job in Germany, and the entire process was smooth and hassle-free. The team is extremely professional and guided me at every step. Highly recommend their services!',
  },
  {
    name: 'Anupama Saini',
    photo: anupamaSainiPhoto,
    meta: '2 reviews',
    time: '2 years ago',
    text:
      "I am so grateful to Cloyster Visas for helping me get my work permit for Australia. The staff is very knowledgeable and supportive. If you're looking for reliable immigration consultants in Delhi, look no further!",
  },
  {
    name: 'Abhinav Singh',
    photo: abhinavSinghPhoto,
    meta: '4 reviews · 2 photos',
    time: '2 years ago',
    text:
      'Cloyster Visa provided an exceptional service in assisting me with my permanent residency visa application. They guided me through every step of the process. Their knowledge of immigration regulations and attention to detail instilled confidence throughout the process.',
  },
  {
    name: 'Vickey Daas',
    photo: vickeyDaasPhoto,
    meta: '2 reviews',
    time: '2 years ago',
    text:
      'Highly recommend Cloyster Visas for anyone looking for immigration services in Delhi. They helped me get my dream job in Canada with ease. The staff is very professional and always ready to help. Thank you, Cloyster Visas!',
  },
  {
    name: 'Sanjay Kumar',
    photo: sanjayKumarPhoto,
    meta: '2 reviews',
    time: '2 years ago',
    text:
      "Cloyster Visas provided excellent service for my work permit application for Australia. The team is very knowledgeable and supportive. If you're looking for a trustworthy immigration consultancy in Delhi, go for Cloyster Visas!",
  },
  {
    name: 'Gulshan shah',
    photo: gulshanShahPhoto,
    meta: '3 reviews',
    time: '2 years ago',
    text:
      'Cloyster Visas is the top immigration consultancy in Delhi. They helped me secure a job in Germany, and the process was seamless. Their expertise and dedication are commendable. Thank you for all your help!',
  },
  {
    name: 'vaibhav kumar',
    photo: vaibhavKumarPhoto,
    meta: '5 reviews · 2 photos',
    time: 'a year ago',
    text:
      "Cloyster Visas in Dwarka made the Germany Opportunity Card process super simple for me. They explained everything clearly and helped with all the paperwork. The team was really friendly and supportive. If you’re planning to move to Germany, I totally recommend them!",
  },
]

const StarRating = () => (
  <div className="client-success-stars" aria-label="5 out of 5 stars">
    <span>★★★★★</span>
    <strong>5.0</strong>
    <em>Google Review</em>
  </div>
)

const ReviewCard = ({ review, index, total }) => {
  const initials = review.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <article className="client-success-review-card">
      <div className="client-success-review-top">
        <div className="client-success-avatar">
          <img
            src={review.photo}
            alt={`${review.name} profile`}
            className="client-success-avatar-image"
          />
        </div>

        <div className="client-success-reviewer">
          <h3>{review.name}</h3>
          <div className="client-success-review-meta">
            <span>{review.meta}</span>
            <span aria-hidden="true">•</span>
            <span>{review.time}</span>
          </div>
        </div>

        <div className="client-success-google-mark" aria-label="Google">
          G
        </div>
      </div>

      <StarRating />

      <p className="client-success-review-text">“{review.text}”</p>

      <div className="client-success-review-footer">
        <span>Verified client feedback</span>
        <span>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
    </article>
  )
}

export default function ClientSuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const total = reviews.length

  const nextReview = () => {
    setActiveIndex((current) => (current + 1) % total)
  }

  const previousReview = () => {
    setActiveIndex((current) => (current - 1 + total) % total)
  }

  useEffect(() => {
    if (isPaused) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [isPaused, total])

  return (
    <>
      <style>{`
        .client-success-section {
          width: 100%;
          background: var(--bg-alt);
          padding: 84px 0 90px;
          box-sizing: border-box;
          border-top: 1px solid var(--border-color);
        }

        .client-success-section .client-success-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .client-success-section .client-success-header {
          text-align: center;
          margin: 0 auto 42px;
          max-width: 820px;
        }

        .client-success-section .client-success-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(34, 197, 94, 0.12);
          color: #22c55e;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .client-success-section .client-success-tag::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.09);
        }

        .client-success-section .client-success-title {
          color: var(--text-primary);
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.15;
          margin: 16px 0 12px;
          font-weight: 800;
          letter-spacing: -0.7px;
        }

        .client-success-section .client-success-description {
          color: var(--text-secondary);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.7;
          font-size: 0.98rem;
        }

        .client-success-section .client-success-rating-summary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 20px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .client-success-section .client-success-summary-stars {
          color: #fbbc04;
          letter-spacing: 2px;
          font-size: 1.02rem;
        }

        .client-success-section .client-success-summary-rating {
          color: var(--text-primary);
          font-weight: 800;
        }

        .client-success-section .client-success-summary-source {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-weight: 700;
        }

        .client-success-section .client-success-summary-source::before {
          content: 'G';
          display: inline-grid;
          place-items: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #fff;
          color: #4285f4;
          font-size: 0.82rem;
          font-weight: 900;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
        }

        .client-success-section .client-success-slider {
          max-width: 920px;
          margin: 0 auto;
        }

        .client-success-section .client-success-card-viewport {
          overflow: hidden;
          border-radius: 18px;
          touch-action: pan-y;
        }

        .client-success-section .client-success-card-track {
          display: flex;
          transition: transform 0.48s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .client-success-section .client-success-slide {
          min-width: 100%;
          box-sizing: border-box;
          padding: 2px;
        }

        .client-success-section .client-success-review-card {
          min-height: 370px;
          padding: 34px 38px 28px;
          box-sizing: border-box;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          box-shadow: var(--card-shadow);
          position: relative;
          overflow: hidden;
        }

        .client-success-section .client-success-review-card::before {
          content: '';
          position: absolute;
          width: 220px;
          height: 220px;
          right: -125px;
          top: -130px;
          border: 1px solid rgba(59, 130, 246, 0.14);
          border-radius: 50%;
          pointer-events: none;
        }

        .client-success-section .client-success-review-card::after {
          content: '“';
          position: absolute;
          right: 30px;
          bottom: -30px;
          color: rgba(59, 130, 246, 0.08);
          font-size: 10rem;
          line-height: 1;
          font-weight: 800;
          pointer-events: none;
        }

        .client-success-section .client-success-review-top {
          display: flex;
          align-items: center;
          gap: 14px;
          position: relative;
          z-index: 1;
        }

        .client-success-section .client-success-avatar {
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(
            145deg,
            rgba(37, 99, 235, 0.24),
            rgba(34, 197, 94, 0.14)
          );
          border: 1px solid rgba(59, 130, 246, 0.24);
          color: var(--text-primary);
          font-weight: 800;
          font-size: 0.92rem;
        }

        .client-success-section .client-success-avatar-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          border-radius: 50%;
        }

        .client-success-section .client-success-reviewer {
          min-width: 0;
          flex: 1;
        }

        .client-success-section .client-success-reviewer h3 {
          margin: 0;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 800;
        }

        .client-success-section .client-success-review-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          margin-top: 5px;
          color: var(--text-secondary);
          font-size: 0.76rem;
        }

        .client-success-section .client-success-google-mark {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #fff;
          color: #4285f4;
          font-size: 1rem;
          font-weight: 900;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.14);
        }

        .client-success-section .client-success-stars {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 25px;
          position: relative;
          z-index: 1;
        }

        .client-success-section .client-success-stars span {
          color: #fbbc04;
          letter-spacing: 2px;
          font-size: 1.05rem;
        }

        .client-success-section .client-success-stars strong {
          color: var(--text-primary);
          font-size: 0.84rem;
        }

        .client-success-section .client-success-stars em {
          color: var(--text-secondary);
          font-style: normal;
          font-size: 0.76rem;
        }

        .client-success-section .client-success-review-text {
          position: relative;
          z-index: 1;
          margin: 22px 0 0;
          color: var(--text-primary);
          font-size: clamp(1.02rem, 1.7vw, 1.18rem);
          line-height: 1.8;
          font-weight: 500;
        }

        .client-success-section .client-success-review-footer {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-top: 28px;
          padding-top: 18px;
          border-top: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.74rem;
        }

        .client-success-section .client-success-review-footer span:first-child {
          color: #22c55e;
          font-weight: 700;
        }

        .client-success-section .client-success-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-top: 18px;
        }

        .client-success-section .client-success-arrows {
          display: flex;
          gap: 8px;
        }

        .client-success-section .client-success-arrow {
          width: 42px;
          height: 42px;
          padding: 0;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          background: var(--bg-card);
          color: var(--text-primary);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition:
            transform 0.18s ease,
            border-color 0.18s ease,
            background 0.18s ease;
        }

        .client-success-section .client-success-arrow:hover {
          transform: translateY(-1px);
          border-color: var(--accent-blue);
          background: rgba(37, 99, 235, 0.07);
        }

        .client-success-section .client-success-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          flex: 1;
        }

        .client-success-section .client-success-dot {
          width: 7px;
          height: 7px;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: var(--border-color);
          cursor: pointer;
          transition:
            width 0.2s ease,
            background 0.2s ease;
        }

        .client-success-section .client-success-dot.active {
          width: 24px;
          background: var(--accent-blue);
        }

        @media (max-width: 700px) {
          .client-success-section {
            padding: 68px 0 72px;
          }

          .client-success-section .client-success-container {
            padding: 0 16px;
          }

          .client-success-section .client-success-rating-summary {
            gap: 9px;
            flex-wrap: wrap;
          }

          .client-success-section .client-success-review-card {
            min-height: 0;
            padding: 28px 22px 24px;
          }

          .client-success-section .client-success-review-text {
            font-size: 0.98rem;
            line-height: 1.7;
          }

          .client-success-section .client-success-controls {
            margin-top: 14px;
          }

          .client-success-section .client-success-review-footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 7px;
          }
        }

        @media (max-width: 420px) {
          .client-success-section {
            padding: 58px 0 64px;
          }

          .client-success-section .client-success-title {
            font-size: 1.85rem;
          }

          .client-success-section .client-success-description {
            font-size: 0.88rem;
          }

          .client-success-section .client-success-review-card {
            padding: 24px 18px 21px;
            border-radius: 15px;
          }

          .client-success-section .client-success-avatar {
            width: 46px;
            height: 46px;
            flex-basis: 46px;
          }

          .client-success-section .client-success-google-mark {
            width: 30px;
            height: 30px;
            flex-basis: 30px;
          }

          .client-success-section .client-success-arrow {
            width: 38px;
            height: 38px;
          }
        }

        [data-theme="light"] .client-success-section {
          background: #f1f5f9 !important;
        }

        [data-theme="light"] .client-success-section .client-success-review-card {
          background: #ffffff !important;
        }

        [data-theme="light"] .client-success-section .client-success-avatar {
          background: rgba(37, 99, 235, 0.07);
          border-color: #dbeafe;
        }
      `}</style>

      <section
        id="client-success"
        className="client-success-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div className="client-success-container">
          <div className="client-success-header">
            <span className="client-success-tag">CLIENT SUCCESS</span>

            <h2 className="client-success-title">
              Client Success Stories
            </h2>

            <p className="client-success-description">
              Real client feedback from Cloyster Visa clients, presented
              directly as review stories. No owner replies — only the client
              experience.
            </p>

            <div className="client-success-rating-summary">
              <span className="client-success-summary-stars">★★★★★</span>
              <span className="client-success-summary-rating">5.0</span>
              <span className="client-success-summary-source">
                Google Reviews
              </span>
            </div>
          </div>

          <div className="client-success-slider">
            <div className="client-success-card-viewport">
              <div
                className="client-success-card-track"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {reviews.map((review, index) => (
                  <div className="client-success-slide" key={review.name}>
                    <ReviewCard
                      review={review}
                      index={index}
                      total={total}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="client-success-controls">
              <div className="client-success-arrows">
                <button
                  type="button"
                  className="client-success-arrow"
                  onClick={previousReview}
                  aria-label="Previous client review"
                >
                  ‹
                </button>

                <button
                  type="button"
                  className="client-success-arrow"
                  onClick={nextReview}
                  aria-label="Next client review"
                >
                  ›
                </button>
              </div>

              <div className="client-success-dots" aria-label="Review navigation">
                {reviews.map((review, index) => (
                  <button
                    type="button"
                    key={review.name}
                    className={`client-success-dot ${
                      index === activeIndex ? 'active' : ''
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show review from ${review.name}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
