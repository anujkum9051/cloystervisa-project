import React from 'react'

const TEAM_MEMBERS = [
  {
    id: 'niyati-nahadiya',
    name: 'Niyati Nahadiya',
    role: 'Team Member',
    linkedin: 'https://www.linkedin.com/in/niyati-nahadiya-226b6204/'
  },
  {
    id: 'prabhat-kumar',
    name: 'Prabhat Kumar',
    role: 'Team Member',
    linkedin: 'https://www.linkedin.com/in/prabhat-kumar-1a3469128/'
  },
  {
    id: 'anuj-kumar',
    name: 'Anuj Kumar',
    role: 'Team Member',
    linkedin: 'https://www.linkedin.com/in/anuj-kumar-83210a24a/'
  }
]

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3A2.02 2.02 0 1 0 5.2 7.04 2.02 2.02 0 0 0 5.22 3ZM20.5 13.41c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.86V8.5H9.36V20h3.44v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.71v-6.59Z" />
  </svg>
)

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '42px' }}>
          <span
            className="section-tag"
            style={{
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
          <h2 className="section-title text-gradient" style={{ fontSize: '2.45rem', margin: '16px 0 12px' }}>
            Meet Our Team
          </h2>
          <p className="section-desc" style={{ color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto', lineHeight: '1.7' }}>
            Meet the people behind CloysterVisa and connect with our immigration support team.
          </p>
        </div>

        <div
          className="team-grid"
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '22px',
            maxWidth: '980px',
            margin: '0 auto',
            overflowX: 'auto',
            overflowY: 'hidden',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            paddingBottom: '4px'
          }}
        >
          {TEAM_MEMBERS.map((member) => {
            const initials = member.name
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)
              .toUpperCase()

            return (
              <article
                key={member.id}
                className="team-card glass-panel"
                style={{ flex: '0 0 min(300px, 86vw)', scrollSnapAlign: 'start' }}
              >
                <div className="team-avatar" aria-label={`${member.name} profile placeholder`}>
                  {initials}
                </div>

                <h3 style={{ margin: '0 0 6px', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
                  {member.name}
                </h3>
                <p style={{ margin: '0 0 18px', color: 'var(--text-secondary)', fontSize: '.9rem' }}>
                  {member.role}
                </p>

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
          })}
        </div>

        <style>{`
          .team-grid::-webkit-scrollbar { display: none; }
          @media (min-width: 769px) {
            .team-grid { overflow-x: visible !important; }
          }
          @media (max-width: 640px) {
            .team-grid {
              max-width: 100% !important;
              padding-left: 2px;
              padding-right: 2px;
            }
          }
        `}</style>
      </div>
    </section>
  )
}