import React, { useState } from 'react'

import niyatiPhoto from './niyati.png'
import rakeshPhoto from './rakesh-rao.png'
import natashaPhoto from './natasha.png'
import prabhatPhoto from './prabhat.jpeg'
import anujPhoto from './anuj.jpeg'


const TEAM_MEMBERS = [
  {
    id: 'niyati-nahadiya',
    name: 'Ms. Niyati',
    role: 'Immigration Consultant',
    experience: '7+ Years Experience',
    specialization:
      'Specializes in Canada Express Entry and skilled worker pathways.',
    photo: niyatiPhoto,
    linkedin:
      'https://www.linkedin.com/company/cloystervisa/?viewAsMember=true'
  },

  {
    id: 'rakesh-rao',
    name: 'Rakesh Rao',
    role: 'Senior Immigration Consultant',
    experience: '5+ Years Experience',
    specialization:
      'Provides professional immigration guidance, visa strategy and client consultation.',
    photo: rakeshPhoto,
    linkedin: 'https://www.linkedin.com/'
  },

  {
    id: 'natasha',
    name: 'Natasha',
    role: 'Immigration Support Specialist',
    experience: '3+ Years Experience',
    specialization:
      'Supports clients with immigration enquiries, documentation and application coordination.',
    photo: natashaPhoto,
    linkedin: 'https://www.linkedin.com/'
  },

  {
    id: 'prabhat-kumar',
    name: 'Prabhat Kumar',
    role: 'Immigration Consultant',
    experience: '6+ Years Experience',
    specialization:
      'Specializes in Germany immigration, Opportunity Card and skilled worker pathways.',
    photo: prabhatPhoto,
    linkedin:
      'https://www.linkedin.com/in/prabhat-kumar-1a3469128/'
  },

  {
    id: 'anuj-kumar',
    name: 'Anuj Kumar',
    role: 'Immigration Consultant',
    experience: '2+ Years Experience',
    specialization:
      'Specializes in client support, documentation and immigration coordination.',
    photo: anujPhoto,
    linkedin:
      'https://www.linkedin.com/in/anuj-kumar-83210a24/'
  }
]


const LinkedInIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3A2.02 2.02 0 1 0 5.2 7.04 2.02 2.02 0 0 0 5.22 3ZM20.5 13.41c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.86V8.5H9.36V20h3.44v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.71v-6.59Z" />
  </svg>
)


export default function Team() {

  const [activeSlide, setActiveSlide] = useState(0)


  const handleScroll = (event) => {
    const container = event.currentTarget
    const cardWidth = container.clientWidth
    const scrollLeft = container.scrollLeft

    const index = Math.round(scrollLeft / cardWidth)

    setActiveSlide(
      Math.max(
        0,
        Math.min(index, TEAM_MEMBERS.length - 1)
      )
    )
  }


  const goToSlide = (index) => {
    const container = document.querySelector('.team-mobile-slider')

    if (!container) return

    container.scrollTo({
      left: index * container.clientWidth,
      behavior: 'smooth'
    })

    setActiveSlide(index)
  }


  return (
    <section id="team" className="team-section">

      <div className="container">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div
          className="section-header"
          style={{
            textAlign: 'center',
            marginBottom: '42px'
          }}
        >

          <span
            className="section-tag"
            style={{
              display: 'inline-block',
              background: 'rgba(37,99,235,0.12)',
              color: '#60a5fa',
              padding: '7px 14px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '1px'
            }}
          >
            OUR TEAM
          </span>


          <h2
            className="section-title text-gradient"
            style={{
              fontSize: '2.45rem',
              margin: '16px 0 12px'
            }}
          >
            Meet Our Team
          </h2>


          <p
            className="section-desc"
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}
          >
            Meet the people behind CloysterVisa and connect with our
            immigration support team.
          </p>

        </div>


        {/* =====================================================
            DESKTOP TEAM
        ====================================================== */}

        <div className="team-desktop">

          <div
            className="team-grid"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '22px',
              maxWidth: '1000px',
              margin: '0 auto',
              flexWrap: 'wrap'
            }}
          >

            {TEAM_MEMBERS.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
              />
            ))}

          </div>

        </div>


        {/* =====================================================
            MOBILE TEAM SLIDER
        ====================================================== */}

        <div className="team-mobile">

          <div
            className="team-mobile-slider"
            onScroll={handleScroll}
          >

            {TEAM_MEMBERS.map((member) => (
              <div
                className="team-mobile-slide"
                key={member.id}
              >
                <TeamCard member={member} />
              </div>
            ))}

          </div>


          {/* Slider Dots */}

          <div
            className="team-slider-dots"
            aria-label="Team member slides"
          >

            {TEAM_MEMBERS.map((member, index) => (
              <button
                key={member.id}
                type="button"
                className={`team-slider-dot ${
                  activeSlide === index ? 'active' : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Show ${member.name}`}
                aria-current={
                  activeSlide === index ? 'true' : undefined
                }
              />
            ))}

          </div>


          {/* Swipe Hint */}

          <div className="team-swipe-hint">

            <span>Swipe</span>

            <span className="team-swipe-arrow">
              →
            </span>

          </div>

        </div>


        {/* =====================================================
            STYLES
        ====================================================== */}

        <style>{`

          /* -----------------------------------------------
             CARD
          ------------------------------------------------ */

          .team-card {
            box-sizing: border-box;
            width: 300px;
            min-height: 420px;
            text-align: center;
            padding: 30px 24px 26px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }


          .team-avatar {
            width: 126px;
            height: 126px;
            min-width: 126px;
            min-height: 126px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            border: 3px solid #3b82f6;
            background: rgba(37,99,235,0.12);
            box-shadow:
              0 0 0 5px rgba(59,130,246,0.08);
          }


          .team-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }


          .team-social-link {
            margin-top: auto;
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #60a5fa;
            border: 1px solid rgba(96,165,250,0.25);
            background: rgba(37,99,235,0.08);
            text-decoration: none;
            transition: all 0.2s ease;
          }


          .team-social-link:hover {
            transform: translateY(-2px);
            background: rgba(37,99,235,0.16) !important;
            border-color: rgba(96,165,250,0.45) !important;
          }


          /* -----------------------------------------------
             DESKTOP
          ------------------------------------------------ */

          .team-desktop {
            display: block;
          }


          .team-mobile {
            display: none;
          }


          /* -----------------------------------------------
             MOBILE SLIDER
          ------------------------------------------------ */

          @media (max-width: 768px) {

            .team-desktop {
              display: none;
            }


            .team-mobile {
              display: block;
              width: 100%;
            }


            .team-mobile-slider {
              width: 100%;
              display: flex;
              overflow-x: auto;
              overflow-y: hidden;
              scroll-snap-type: x mandatory;
              scroll-behavior: smooth;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none;
              overscroll-behavior-x: contain;
            }


            .team-mobile-slider::-webkit-scrollbar {
              display: none;
            }


            .team-mobile-slide {
              flex: 0 0 100%;
              width: 100%;
              min-width: 100%;
              scroll-snap-align: center;
              scroll-snap-stop: always;

              display: flex;
              justify-content: center;
              box-sizing: border-box;

              padding: 0 12px;
            }


            .team-mobile-slide .team-card {
              width: 100%;
              max-width: 340px;
              min-height: 420px;
              margin: 0 auto;
            }


            /* -------------------------------------------
               DOTS
            -------------------------------------------- */

            .team-slider-dots {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              margin-top: 20px;
            }


            .team-slider-dot {
              width: 8px;
              height: 8px;
              padding: 0;
              border: none;
              border-radius: 50%;
              background: rgba(148,163,184,0.35);
              cursor: pointer;
              transition:
                width 0.25s ease,
                background 0.25s ease,
                transform 0.25s ease;
            }


            .team-slider-dot.active {
              width: 22px;
              border-radius: 999px;
              background: #3b82f6;
              transform: scale(1.05);
            }


            .team-slider-dot:focus-visible {
              outline: 2px solid #60a5fa;
              outline-offset: 3px;
            }


            /* -------------------------------------------
               SWIPE HINT
            -------------------------------------------- */

            .team-swipe-hint {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 7px;
              margin-top: 12px;
              color: var(--text-secondary);
              font-size: 0.75rem;
              opacity: 0.7;
            }


            .team-swipe-arrow {
              font-size: 1rem;
              animation: teamSwipeArrow 1.5s ease-in-out infinite;
            }


            @keyframes teamSwipeArrow {

              0%,
              100% {
                transform: translateX(0);
              }

              50% {
                transform: translateX(5px);
              }

            }

          }


          /* -----------------------------------------------
             SMALL PHONES
          ------------------------------------------------ */

          @media (max-width: 380px) {

            .team-mobile-slide {
              padding: 0 8px;
            }


            .team-mobile-slide .team-card {
              max-width: 320px;
              padding: 26px 20px 24px;
            }


            .team-avatar {
              width: 116px;
              height: 116px;
              min-width: 116px;
              min-height: 116px;
            }

          }

        `}</style>

      </div>

    </section>
  )
}


/* ==========================================================
   TEAM CARD COMPONENT
========================================================== */

function TeamCard({ member }) {

  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()


  return (

    <article className="team-card glass-panel">

      {/* Profile Photo */}

      <div
        className="team-avatar"
        aria-label={`${member.name} profile photo`}
      >

        {member.photo ? (

          <img
            src={member.photo}
            alt={`${member.name} - ${member.role}`}
          />

        ) : (

          <span
            style={{
              color: '#60a5fa',
              fontSize: '2rem',
              fontWeight: '700'
            }}
          >
            {initials}
          </span>

        )}

      </div>


      {/* Name */}

      <h3
        style={{
          margin: '0 0 6px',
          color: 'var(--text-primary)',
          fontSize: '1.25rem',
          fontWeight: '700'
        }}
      >
        {member.name}
      </h3>


      {/* Role */}

      <p
        style={{
          margin: '0 0 12px',
          color: 'var(--text-secondary)',
          fontSize: '.92rem'
        }}
      >
        {member.role}
      </p>


      {/* Experience */}

      {member.experience && (

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '7px 13px',
            borderRadius: '8px',
            border: '1px solid rgba(59,130,246,0.28)',
            background: 'rgba(37,99,235,0.08)',
            color: '#4ade80',
            fontSize: '.82rem',
            fontWeight: '600',
            marginBottom: '18px'
          }}
        >
          {member.experience}
        </span>

      )}


      {/* Specialization */}

      {member.specialization && (

        <p
          style={{
            margin: '0 auto 20px',
            color: 'var(--text-secondary)',
            fontSize: '.88rem',
            lineHeight: '1.6',
            maxWidth: '245px'
          }}
        >
          {member.specialization}
        </p>

      )}


      {/* LinkedIn */}

      <a
        className="team-social-link"
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${member.name}'s LinkedIn profile`}
      >
        <LinkedInIcon />
      </a>

    </article>

  )
}