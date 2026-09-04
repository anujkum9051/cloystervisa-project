import React, { useMemo, useState } from 'react';

const blogPosts = [
  {
    id: 1,
    category: 'Immigration',
    date: 'August 28, 2026',
    readTime: '6 min read',
    title: 'Express Entry: What Applicants Should Understand Before Starting',
    excerpt:
      'A practical overview of the Express Entry process, profile preparation, documentation, and the importance of presenting an accurate application.',
    featured: true,
  },
  {
    id: 2,
    category: 'Study Visa',
    date: 'August 21, 2026',
    readTime: '5 min read',
    title: 'Study Abroad Planning: What to Prepare Before Applying',
    excerpt:
      'From choosing a destination to preparing financial and academic documents, understand the key stages of a well-planned study visa application.',
  },
  {
    id: 3,
    category: 'Documentation',
    date: 'August 14, 2026',
    readTime: '4 min read',
    title: 'How to Prepare Strong Visa Documentation',
    excerpt:
      'Learn how to organise your documents clearly and avoid common preparation mistakes that can create unnecessary delays during an application.',
  },
  {
    id: 4,
    category: 'Work Visa',
    date: 'August 7, 2026',
    readTime: '5 min read',
    title: 'Planning Your International Work Visa Journey',
    excerpt:
      'A simple guide to understanding employer requirements, supporting documents, eligibility factors, and the overall application journey.',
  },
  {
    id: 5,
    category: 'Study Visa',
    date: 'July 31, 2026',
    readTime: '5 min read',
    title: 'Choosing the Right Study Destination for Your Goals',
    excerpt:
      'Compare your academic plans, career goals, budget, and long-term objectives before deciding where to study internationally.',
  },
  {
    id: 6,
    category: 'Immigration',
    date: 'July 24, 2026',
    readTime: '4 min read',
    title: 'Why Profile Assessment Matters Before You Apply',
    excerpt:
      'Understanding your profile before starting an application can help you identify suitable pathways and prepare more effectively.',
  },
];

const categories = [
  'All',
  'Immigration',
  'Study Visa',
  'Work Visa',
  'Documentation',
];

function ArrowIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.5 16.5L21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 3V7M16 3V7M3 10H21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7V12L15.5 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlogPostCard({ post, onRead }) {
  return (
    <article className="cv-blog-card">
      <div className="cv-blog-card-visual">
        <div className="cv-blog-card-glow" />
        <div className="cv-blog-card-icon">
          <span>{post.category === 'Study Visa' ? 'S' : 'C'}</span>
        </div>
        <span className="cv-blog-card-category">{post.category}</span>
      </div>

      <div className="cv-blog-card-body">
        <div className="cv-blog-meta">
          <span>
            <CalendarIcon />
            {post.date}
          </span>

          <span>
            <ClockIcon />
            {post.readTime}
          </span>
        </div>

        <h3>{post.title}</h3>

        <p>{post.excerpt}</p>

        <button
          type="button"
          className="cv-blog-read-more"
          onClick={() => onRead(post)}
        >
          Read More
          <ArrowIcon size={17} />
        </button>
      </div>
    </article>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const categoryMatch =
        activeCategory === 'All' || post.category === activeCategory;

      const searchMatch =
        !search ||
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        post.category.toLowerCase().includes(search);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  const featuredPost = blogPosts.find((post) => post.featured);

  const handleConsultation = () => {
    const bookingSection =
      document.getElementById('booking') ||
      document.getElementById('contact') ||
      document.getElementById('consultation');

    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.location.href = '/#booking';
    }
  };

  return (
    <section className="cv-blog-page">
      <style>{`
        .cv-blog-page {
          --blog-radius: 18px;
          width: 100%;
          min-height: 100vh;
          background: var(--bg-main);
          color: var(--text-primary);
          padding: 96px 24px 80px;
          box-sizing: border-box;
        }

        .cv-blog-container {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .cv-blog-hero {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 48px;
        }

        .cv-blog-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 13px;
          border: 1px solid var(--border-color);
          border-radius: 999px;
          background: var(--bg-card);
          color: var(--accent-blue);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .cv-blog-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-blue);
          display: inline-block;
        }

        .cv-blog-hero h1 {
          margin: 0;
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.08;
          letter-spacing: -0.035em;
          font-weight: 800;
          color: var(--text-primary);
        }

        .cv-blog-hero h1 span {
          color: var(--accent-blue);
        }

        .cv-blog-hero p {
          margin: 20px auto 0;
          max-width: 700px;
          color: var(--text-secondary);
          font-size: 17px;
          line-height: 1.75;
        }

        .cv-blog-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 34px;
          padding: 14px;
          border: 1px solid var(--border-color);
          border-radius: var(--blog-radius);
          background: var(--bg-card);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
        }

        .cv-blog-search {
          position: relative;
          flex: 1;
          min-width: 220px;
        }

        .cv-blog-search svg {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }

        .cv-blog-search input {
          width: 100%;
          box-sizing: border-box;
          height: 48px;
          padding: 0 18px 0 48px;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          outline: none;
          background: var(--bg-alt);
          color: var(--text-primary);
          font-size: 14px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .cv-blog-search input::placeholder {
          color: var(--text-muted);
        }

        .cv-blog-search input:focus {
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .cv-blog-categories {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .cv-blog-category-btn {
          border: 1px solid var(--border-color);
          background: transparent;
          color: var(--text-secondary);
          border-radius: 10px;
          padding: 10px 13px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .cv-blog-category-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-blue);
        }

        .cv-blog-category-btn.active {
          background: var(--accent-blue);
          color: #fff;
          border-color: var(--accent-blue);
        }

        .cv-blog-featured {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          min-height: 390px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          border-radius: var(--blog-radius);
          background: var(--bg-card);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.1);
          margin-bottom: 54px;
        }

        .cv-blog-featured-visual {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(37, 99, 235, 0.28),
              transparent 32%
            ),
            linear-gradient(
              135deg,
              var(--bg-alt),
              var(--bg-card)
            );
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cv-blog-featured-grid {
          position: absolute;
          inset: 0;
          opacity: 0.22;
          background-image:
            linear-gradient(var(--border-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
          background-size: 42px 42px;
        }

        .cv-blog-featured-badge {
          position: absolute;
          top: 22px;
          left: 22px;
          z-index: 2;
          padding: 8px 12px;
          border-radius: 999px;
          background: var(--accent-blue);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
        }

        .cv-blog-featured-symbol {
          position: relative;
          z-index: 1;
          width: 142px;
          height: 142px;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(15, 23, 42, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
        }

        .cv-blog-featured-symbol::before,
        .cv-blog-featured-symbol::after {
          content: '';
          position: absolute;
          border: 1px solid rgba(37, 99, 235, 0.35);
          border-radius: 50%;
        }

        .cv-blog-featured-symbol::before {
          width: 190px;
          height: 190px;
        }

        .cv-blog-featured-symbol::after {
          width: 250px;
          height: 250px;
        }

        .cv-blog-featured-symbol span {
          position: relative;
          z-index: 2;
          font-size: 48px;
          font-weight: 800;
          color: #fff;
        }

        .cv-blog-featured-content {
          padding: 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cv-blog-featured-content .cv-blog-meta {
          margin-bottom: 17px;
        }

        .cv-blog-featured-content h2 {
          margin: 0;
          max-width: 580px;
          font-size: clamp(28px, 3vw, 40px);
          line-height: 1.18;
          letter-spacing: -0.025em;
          color: var(--text-primary);
        }

        .cv-blog-featured-content p {
          margin: 18px 0 0;
          color: var(--text-secondary);
          line-height: 1.75;
          font-size: 15px;
          max-width: 580px;
        }

        .cv-blog-featured-button {
          margin-top: 27px;
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: none;
          border-radius: 10px;
          padding: 12px 18px;
          background: var(--accent-blue);
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .cv-blog-featured-button:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }

        .cv-blog-section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 22px;
        }

        .cv-blog-section-heading h2 {
          margin: 0;
          font-size: 28px;
          line-height: 1.2;
          color: var(--text-primary);
        }

        .cv-blog-section-heading p {
          margin: 6px 0 0;
          color: var(--text-secondary);
          font-size: 14px;
        }

        .cv-blog-results-count {
          color: var(--text-muted);
          font-size: 13px;
          white-space: nowrap;
        }

        .cv-blog-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .cv-blog-card {
          overflow: hidden;
          border: 1px solid var(--border-color);
          border-radius: var(--blog-radius);
          background: var(--bg-card);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.07);
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .cv-blog-card:hover {
          transform: translateY(-3px);
          border-color: rgba(37, 99, 235, 0.55);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.12);
        }

        .cv-blog-card-visual {
          position: relative;
          height: 185px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle at 70% 25%,
              rgba(37, 99, 235, 0.2),
              transparent 30%
            ),
            linear-gradient(135deg, var(--bg-alt), var(--bg-card));
        }

        .cv-blog-card-glow {
          position: absolute;
          width: 145px;
          height: 145px;
          border-radius: 50%;
          border: 1px solid rgba(37, 99, 235, 0.22);
        }

        .cv-blog-card-icon {
          position: relative;
          z-index: 1;
          width: 76px;
          height: 76px;
          border-radius: 22px;
          background: rgba(37, 99, 235, 0.14);
          border: 1px solid rgba(37, 99, 235, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cv-blog-card-icon span {
          font-size: 30px;
          font-weight: 800;
          color: var(--accent-blue);
        }

        .cv-blog-card-category {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 7px 10px;
          border-radius: 8px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 11px;
          font-weight: 700;
        }

        .cv-blog-card-body {
          padding: 23px;
        }

        .cv-blog-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          color: var(--text-muted);
          font-size: 11px;
        }

        .cv-blog-meta span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .cv-blog-card-body h3 {
          margin: 14px 0 10px;
          font-size: 19px;
          line-height: 1.35;
          letter-spacing: -0.01em;
          color: var(--text-primary);
        }

        .cv-blog-card-body p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 13px;
          line-height: 1.7;
        }

        .cv-blog-read-more {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 20px;
          padding: 0;
          border: none;
          background: transparent;
          color: var(--accent-blue);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .cv-blog-read-more:hover {
          color: var(--accent-hover);
        }

        .cv-blog-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          border: 1px dashed var(--border-color);
          border-radius: var(--blog-radius);
          background: var(--bg-card);
        }

        .cv-blog-empty h3 {
          margin: 0;
          color: var(--text-primary);
          font-size: 20px;
        }

        .cv-blog-empty p {
          margin: 8px 0 0;
          color: var(--text-secondary);
          font-size: 14px;
        }

        .cv-blog-cta {
          margin-top: 64px;
          padding: 42px 44px;
          border: 1px solid var(--border-color);
          border-radius: var(--blog-radius);
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(37, 99, 235, 0.14),
              transparent 30%
            ),
            var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .cv-blog-cta h2 {
          margin: 0;
          font-size: 27px;
          line-height: 1.25;
          color: var(--text-primary);
        }

        .cv-blog-cta p {
          margin: 9px 0 0;
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.65;
          max-width: 650px;
        }

        .cv-blog-cta-button {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: none;
          border-radius: 10px;
          padding: 13px 19px;
          background: var(--accent-blue);
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .cv-blog-cta-button:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }

        .cv-blog-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          padding: 24px;
          background: rgba(0, 0, 0, 0.72);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cv-blog-modal {
          position: relative;
          width: min(760px, 100%);
          max-height: min(720px, 90vh);
          overflow-y: auto;
          border: 1px solid var(--border-color);
          border-radius: 18px;
          background: var(--bg-card);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
        }

        .cv-blog-modal-top {
          padding: 28px 30px 0;
        }

        .cv-blog-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 38px;
          height: 38px;
          border: 1px solid var(--border-color);
          border-radius: 10px;
          background: var(--bg-alt);
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 22px;
          line-height: 1;
        }

        .cv-blog-modal-close:hover {
          color: var(--text-primary);
          border-color: var(--accent-blue);
        }

        .cv-blog-modal-category {
          display: inline-flex;
          padding: 7px 10px;
          border-radius: 8px;
          background: rgba(37, 99, 235, 0.1);
          color: var(--accent-blue);
          font-size: 11px;
          font-weight: 700;
        }

        .cv-blog-modal h2 {
          margin: 18px 50px 12px 0;
          font-size: clamp(25px, 4vw, 36px);
          line-height: 1.2;
          color: var(--text-primary);
        }

        .cv-blog-modal-content {
          padding: 0 30px 32px;
        }

        .cv-blog-modal-content p {
          color: var(--text-secondary);
          font-size: 15px;
          line-height: 1.8;
          margin: 16px 0;
        }

        .cv-blog-modal-note {
          margin-top: 24px !important;
          padding: 16px;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          background: var(--bg-alt);
          font-size: 13px !important;
        }

        @media (max-width: 980px) {
          .cv-blog-toolbar {
            flex-direction: column;
            align-items: stretch;
          }

          .cv-blog-categories {
            justify-content: flex-start;
          }

          .cv-blog-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cv-blog-featured {
            grid-template-columns: 1fr;
          }

          .cv-blog-featured-visual {
            min-height: 300px;
          }

          .cv-blog-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 680px) {
          .cv-blog-page {
            padding: 72px 16px 60px;
          }

          .cv-blog-hero {
            margin-bottom: 34px;
          }

          .cv-blog-hero p {
            font-size: 15px;
          }

          .cv-blog-categories {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cv-blog-category-btn {
            width: 100%;
          }

          .cv-blog-featured-content {
            padding: 30px 24px;
          }

          .cv-blog-featured-visual {
            min-height: 250px;
          }

          .cv-blog-featured-symbol {
            width: 105px;
            height: 105px;
          }

          .cv-blog-featured-symbol span {
            font-size: 38px;
          }

          .cv-blog-grid {
            grid-template-columns: 1fr;
          }

          .cv-blog-section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }

          .cv-blog-cta {
            padding: 30px 24px;
          }

          .cv-blog-cta-button {
            width: 100%;
            justify-content: center;
          }

          .cv-blog-modal-backdrop {
            padding: 12px;
          }

          .cv-blog-modal-top {
            padding: 24px 20px 0;
          }

          .cv-blog-modal-content {
            padding: 0 20px 25px;
          }
        }
      `}</style>

      <div className="cv-blog-container">
        <header className="cv-blog-hero">
          <div className="cv-blog-eyebrow">
            <span className="cv-blog-eyebrow-dot" />
            CloysterVisa Insights
          </div>

          <h1>
            Immigration <span>Insights</span> & Guidance
          </h1>

          <p>
            Practical information on immigration, study visas, work
            opportunities, documentation, and planning your international
            journey with greater clarity.
          </p>
        </header>

        <div className="cv-blog-toolbar">
          <div className="cv-blog-search">
            <SearchIcon />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search articles..."
              aria-label="Search blog articles"
            />
          </div>

          <div className="cv-blog-categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? 'cv-blog-category-btn active'
                    : 'cv-blog-category-btn'
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {activeCategory === 'All' && !searchTerm && featuredPost && (
          <article className="cv-blog-featured">
            <div className="cv-blog-featured-visual">
              <div className="cv-blog-featured-grid" />

              <span className="cv-blog-featured-badge">
                Featured Article
              </span>

              <div className="cv-blog-featured-symbol">
                <span>CV</span>
              </div>
            </div>

            <div className="cv-blog-featured-content">
              <div className="cv-blog-meta">
                <span>
                  <CalendarIcon />
                  {featuredPost.date}
                </span>

                <span>
                  <ClockIcon />
                  {featuredPost.readTime}
                </span>

                <span>{featuredPost.category}</span>
              </div>

              <h2>{featuredPost.title}</h2>

              <p>{featuredPost.excerpt}</p>

              <button
                type="button"
                className="cv-blog-featured-button"
                onClick={() => setSelectedPost(featuredPost)}
              >
                Read Article
                <ArrowIcon size={17} />
              </button>
            </div>
          </article>
        )}

        <div className="cv-blog-section-heading">
          <div>
            <h2>Latest Articles</h2>
            <p>Useful guidance for your immigration journey.</p>
          </div>

          <span className="cv-blog-results-count">
            {filteredPosts.length} article
            {filteredPosts.length === 1 ? '' : 's'}
          </span>
        </div>

        <div className="cv-blog-grid">
          {filteredPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              post={post}
              onRead={setSelectedPost}
            />
          ))}

          {filteredPosts.length === 0 && (
            <div className="cv-blog-empty">
              <h3>No articles found</h3>
              <p>
                Try another search term or select a different category.
              </p>
            </div>
          )}
        </div>

        <section className="cv-blog-cta">
          <div>
            <h2>Need guidance for your own profile?</h2>
            <p>
              Every immigration journey is different. If you need help
              understanding your options, our team can discuss your profile
              and the next steps with you.
            </p>
          </div>

          <button
            type="button"
            className="cv-blog-cta-button"
            onClick={handleConsultation}
          >
            Book a Consultation
            <ArrowIcon size={17} />
          </button>
        </section>
      </div>

      {selectedPost && (
        <div
          className="cv-blog-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedPost(null);
            }
          }}
        >
          <div
            className="cv-blog-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-blog-modal-title"
          >
            <div className="cv-blog-modal-top">
              <button
                type="button"
                className="cv-blog-modal-close"
                onClick={() => setSelectedPost(null)}
                aria-label="Close article"
              >
                ×
              </button>

              <span className="cv-blog-modal-category">
                {selectedPost.category}
              </span>

              <h2 id="cv-blog-modal-title">
                {selectedPost.title}
              </h2>

              <div className="cv-blog-meta">
                <span>
                  <CalendarIcon />
                  {selectedPost.date}
                </span>

                <span>
                  <ClockIcon />
                  {selectedPost.readTime}
                </span>
              </div>
            </div>

            <div className="cv-blog-modal-content">
              <p>{selectedPost.excerpt}</p>

              <p>
                Immigration and visa applications require careful planning.
                Before submitting an application, applicants should review
                the requirements relevant to their personal circumstances,
                prepare accurate supporting documents, and make sure the
                information provided is consistent throughout the application.
              </p>

              <p>
                Requirements, processing procedures, eligibility criteria,
                and government policies can change. For this reason, always
                review the latest official requirements applicable to your
                destination and application type before making decisions.
              </p>

              <p className="cv-blog-modal-note">
                <strong>Important:</strong> This article is provided for
                general informational purposes only. It does not constitute
                legal advice and does not guarantee visa approval or any
                particular immigration outcome.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}