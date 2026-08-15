export default function AnnouncementBar() {
  return (
    <div
      className="announcement-bar"
      style={{
        background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)',
        color: '#f8fafc',
        padding: '10px 15px',
        textAlign: 'center',
        fontSize: '0.9rem',
        fontWeight: '500',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      🔥 <strong>Germany Opportunity Card — Assessments Live</strong> —{' '}
      <a
        href="#calculator"
        style={{
          color: '#60a5fa',
          textDecoration: 'underline',
          fontWeight: '600',
        }}
      >
        Explore Eligibility →
      </a>
    </div>
  )
}