import React, { useEffect, useMemo, useState } from 'react';

const API = '/api';

const Arrow = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12H19M13 6L19 12L13 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Search = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.9" />
    <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
);

const Calendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 3V7M16 3V7M3 10H21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

function getSlug() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  return parts[0] === 'blog' ? parts[1] || '' : '';
}

function formatDate(value) {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
}

function getReadTime(content = '') {
  const text = String(content)
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return `${Math.max(1, Math.ceil((text ? text.split(' ').length : 0) / 200))} min read`;
}

function normalize(post) {
  return {
    ...post,
    id: Number(post.id),
    title: post.title || 'Untitled Article',
    slug: post.slug || '',
    category: post.category || 'Immigration',
    excerpt: post.excerpt || '',
    content: post.content || '',
    cover_image: post.cover_image || '',
    author_name: post.author_name || 'CloysterVisa',
    date: formatDate(post.published_at || post.created_at || post.updated_at),
    readTime: getReadTime(post.content),
  };
}

function Meta({ post }) {
  return (
    <div className="cvb-meta">
      <span>
        <Calendar />
        {post.date}
      </span>
      <span>{post.readTime}</span>
      <span>By {post.author_name}</span>
    </div>
  );
}

function CoverImage({ post, large = false }) {
  if (!post.cover_image) {
    return (
      <div className={`cvb-cover-fallback ${large ? 'large' : ''}`}>
        <div className="cvb-fallback-inner">
          <span>CLOYSTERVISA</span>
          <strong>{post.category}</strong>
          <small>Immigration guidance for your journey</small>
        </div>
      </div>
    );
  }

  return (
    <img
      className={large ? 'cvb-cover-image large' : 'cvb-cover-image'}
      src={post.cover_image}
      alt={post.title}
    />
  );
}

function BlogCard({ post }) {
  return (
    <article className="cvb-card">
      <a
        className="cvb-card-image"
        href={`/blog/${post.slug}`}
        aria-label={`Open ${post.title}`}
      >
        <CoverImage post={post} />
        <span className="cvb-card-category">{post.category}</span>
      </a>

      <div className="cvb-card-body">
        <Meta post={post} />
        <h3>{post.title}</h3>

        {post.excerpt && <p>{post.excerpt}</p>}

        <a
          className="cvb-read-more"
          href={`/blog/${post.slug}`}
        >
          Read More <Arrow size={15} />
        </a>
      </div>
    </article>
  );
}

function Article({ post }) {
  return (
    <main className="cvb-article-page">
      <div className="cvb-article-container">
        <div className="cvb-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/blog">Blog</a>
          <span>/</span>
          <span>{post.category}</span>
        </div>

        <header className="cvb-article-header">
          <span className="cvb-article-category">{post.category}</span>
          <h1>{post.title}</h1>

          {post.excerpt && <p className="cvb-article-excerpt">{post.excerpt}</p>}

          <Meta post={post} />
        </header>

        <div className="cvb-article-cover">
          <CoverImage post={post} large />
        </div>

        <article className="cvb-article-content">
          <div
            className="cvb-rich-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="cvb-article-note">
            <strong>Disclaimer</strong>
            <p>
              This article is provided for general informational purposes.
              Immigration rules and requirements can change, so please verify
              current requirements before making decisions about your case.
            </p>
          </div>
        </article>

        <div className="cvb-back-row">
          <a href="/blog" className="cvb-back-button">
            <span>←</span> Back to Blog
          </a>
        </div>
      </div>
    </main>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [slug, setSlug] = useState(getSlug());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [article, setArticle] = useState(null);
  const [articleLoading, setArticleLoading] = useState(false);
  const [articleError, setArticleError] = useState('');

  useEffect(() => {
    fetch(`${API}/posts.php`, { headers: { Accept: 'application/json' } })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok || !data.ok) {
          throw new Error(data.message || 'Unable to load articles.');
        }
        setPosts(Array.isArray(data.posts) ? data.posts.map(normalize) : []);
      })
      .catch((err) => setError(err.message || 'Unable to load articles.'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const onPopState = () => setSlug(getSlug());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (!slug) {
      setArticle(null);
      return;
    }

    setArticleLoading(true);
    setArticleError('');

    fetch(`${API}/post.php?slug=${encodeURIComponent(slug)}`, {
      headers: { Accept: 'application/json' },
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok || !data.ok || !data.post) {
          throw new Error(data.message || 'Article not found.');
        }
        setArticle(normalize(data.post));
      })
      .catch((err) => {
        setArticle(null);
        setArticleError(err.message || 'Article not found.');
      })
      .finally(() => setArticleLoading(false));
  }, [slug]);

  const categories = useMemo(
    () => ['All', ...new Set(posts.map((post) => post.category).filter(Boolean))],
    [posts]
  );

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return posts.filter((post) => {
      const categoryMatch = category === 'All' || post.category === category;
      const searchMatch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [posts, category, search]);

  if (slug) {
    if (articleLoading) {
      return (
        <>
          <style>{styles}</style>
          <main className="cvb-state-page">
            <div className="cvb-state-box">
              <span className="cvb-spinner" />
              <h2>Loading article</h2>
            </div>
          </main>
        </>
      );
    }

    if (!article) {
      return (
        <>
          <style>{styles}</style>
          <main className="cvb-state-page">
            <div className="cvb-state-box">
              <div className="cvb-404">404</div>
              <h2>Article not found</h2>
              <p>{articleError}</p>
              <a href="/blog" className="cvb-primary-button">
                Back to Blog
              </a>
            </div>
          </main>
        </>
      );
    }

    return (
      <>
        <style>{styles}</style>
        <Article post={article} />
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>

      <main className="cvb-blog-page">
        {/* Blog-only hero. The normal CloysterVisa site header/footer remain outside this component. */}
        <section className="cvb-blog-hero">
          <div className="cvb-container">
            <div className="cvb-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Blog</span>
            </div>

            <div className="cvb-blog-hero-copy">
              <span>CLOYSTERVISA BLOG</span>
              <h1>Insights that help you<br /><em>move forward.</em></h1>
              <p>
                Practical immigration, study visa and global mobility guidance,
                written to help you make informed decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="cvb-blog-list">
          <div className="cvb-container">
            <div className="cvb-toolbar">
              <div className="cvb-search">
                <Search />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search articles..."
                  aria-label="Search articles"
                />
              </div>

              <div className="cvb-categories">
                {categories.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={category === item ? 'active' : ''}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="cvb-state-box">
                <span className="cvb-spinner" />
                <h2>Loading articles</h2>
              </div>
            ) : error ? (
              <div className="cvb-state-box">
                <h2>Unable to load articles</h2>
                <p>{error}</p>
              </div>
            ) : filteredPosts.length ? (
              <section>
                <div className="cvb-section-heading">
                  <div>
                    <span>Latest insights</span>
                    <h2>From the CloysterVisa team</h2>
                  </div>
                  <small>{filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}</small>
                </div>

                <div className="cvb-featured-wrap">
                  <BlogCard post={filteredPosts[0]} featured />
                </div>

                {filteredPosts.length > 1 && (
                  <div className="cvb-latest-wrap">
                    <div className="cvb-section-heading cvb-latest-heading">
                      <div>
                        <span>More from CloysterVisa</span>
                        <h2>Latest articles</h2>
                      </div>
                      <small>{filteredPosts.length - 1} more</small>
                    </div>

                    <div className="cvb-grid">
                      {filteredPosts.slice(1).map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ) : (
              <div className="cvb-state-box">
                <h2>No articles found</h2>
                <p>Try another search or category.</p>
                <button
                  type="button"
                  className="cvb-primary-button"
                  onClick={() => {
                    setSearch('');
                    setCategory('All');
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

const styles = `
.cvb-blog-page,
.cvb-article-page,
.cvb-state-page {
  width: 100%;
  min-height: 60vh;
  background: var(--bg-main);
  color: var(--text-primary);
}

.cvb-container,
.cvb-article-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.cvb-blog-hero {
  border-bottom: 1px solid var(--border-color);
  background:
    radial-gradient(circle at 86% 30%, rgba(37,99,235,.12), transparent 27%),
    var(--bg-main);
}

.cvb-blog-hero .cvb-container {
  padding: 30px 0 76px;
}

.cvb-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 9px;
  color: var(--text-muted);
  font-size: 11px;
  line-height: 1.5;
}

.cvb-breadcrumb button,
.cvb-breadcrumb a {
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--accent-blue);
  font: inherit;
  cursor: pointer;
}

.cvb-blog-hero-copy {
  max-width: 790px;
  margin-top: 62px;
}

.cvb-blog-hero-copy > span,
.cvb-section-heading > div > span {
  color: var(--accent-blue);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.cvb-blog-hero-copy h1 {
  margin: 14px 0 0;
  font-size: clamp(43px, 6vw, 72px);
  line-height: 1.02;
  letter-spacing: -.055em;
}

.cvb-blog-hero-copy h1 em {
  color: var(--accent-blue);
  font-style: normal;
}

.cvb-blog-hero-copy p {
  max-width: 650px;
  margin: 22px 0 0;
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.8;
}

.cvb-blog-list {
  padding: 42px 0 95px;
}

.cvb-toolbar {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 58px;
  padding: 7px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: var(--bg-card);
}

.cvb-search {
  position: relative;
  flex: 1 1 360px;
}

.cvb-search svg {
  position: absolute;
  top: 50%;
  left: 15px;
  color: var(--text-muted);
  transform: translateY(-50%);
}

.cvb-search input {
  width: 100%;
  height: 46px;
  box-sizing: border-box;
  padding: 0 14px 0 44px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  outline: none;
  background: var(--bg-alt);
  color: var(--text-primary);
  font: inherit;
}

.cvb-search input:focus {
  border-color: var(--accent-blue);
}

.cvb-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.cvb-categories button {
  padding: 10px 13px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: transparent;
  color: var(--text-secondary);
  font-size: 10px;
  font-weight: 800;
  cursor: pointer;
}

.cvb-categories button.active,
.cvb-categories button:hover {
  background: var(--accent-blue);
  color: #fff;
}

.cvb-section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 25px;
}

.cvb-section-heading h2 {
  margin: 7px 0 0;
  font-size: 31px;
  line-height: 1.15;
  letter-spacing: -.035em;
}

.cvb-section-heading small {
  color: var(--text-muted);
  font-size: 11px;
}


.cvb-featured-wrap {
  margin-bottom: 72px;
}

.cvb-featured-wrap .cvb-card {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(360px, .82fr);
  min-height: 470px;
}

.cvb-featured-wrap .cvb-card-image {
  height: 100%;
  min-height: 470px;
  border-radius: 0;
}

.cvb-featured-wrap .cvb-cover {
  min-height: 470px;
}

.cvb-featured-wrap .cvb-card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px;
}

.cvb-featured-wrap .cvb-card-body h3 {
  max-width: 520px;
  margin: 17px 0 14px;
  font-size: clamp(31px, 4vw, 49px);
  line-height: 1.06;
  letter-spacing: -.055em;
}

.cvb-featured-wrap .cvb-card-body p {
  max-width: 500px;
  font-size: 14px;
  line-height: 1.8;
}

.cvb-featured-wrap .cvb-read-more {
  margin-top: 26px;
  font-size: 12px;
}

.cvb-latest-wrap {
  margin-top: 10px;
}

.cvb-latest-heading {
  margin-bottom: 25px;
}

.cvb-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
}

.cvb-card {
  overflow: hidden;
  border: 1px solid var(--border-color);
  border-radius: 2px;
  background: var(--bg-card);
  transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
}

.cvb-card:hover {
  transform: translateY(-4px);
  border-color: rgba(37,99,235,.4);
  box-shadow: 0 18px 45px rgba(0,0,0,.08);
}

.cvb-card-image {
  position: relative;
  display: block;
  width: 100%;
  height: 245px;
  padding: 0;
  overflow: hidden;
  border: 0;
  background: var(--bg-alt);
  cursor: pointer;
}

.cvb-cover-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .45s ease;
}

.cvb-card:hover .cvb-cover-image {
  transform: scale(1.035);
}

.cvb-card-category {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 7px 10px;
  background: rgba(7,17,34,.88);
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.cvb-card-body {
  padding: 22px 22px 25px;
}

.cvb-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  color: var(--text-muted);
  font-size: 10px;
}

.cvb-meta span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.cvb-card h3 {
  margin: 14px 0 10px;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -.02em;
}

.cvb-card p {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.7;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.cvb-read-more {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 19px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--accent-blue);
  font-size: 11px;
  font-weight: 850;
  cursor: pointer;
}

.cvb-cover-fallback {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background:
    radial-gradient(circle at 80% 20%, rgba(37,99,235,.2), transparent 30%),
    linear-gradient(135deg, var(--bg-alt), var(--bg-card));
}

.cvb-fallback-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 25px;
  text-align: center;
}

.cvb-fallback-inner span {
  color: var(--accent-blue);
  font-size: 9px;
  font-weight: 850;
  letter-spacing: .14em;
}

.cvb-fallback-inner strong {
  max-width: 85%;
  font-size: 25px;
  line-height: 1.15;
}

.cvb-fallback-inner small {
  color: var(--text-secondary);
  font-size: 10px;
}

.cvb-article-page {
  padding: 40px 0 90px;
}

.cvb-article-container {
  max-width: 1120px;
}

.cvb-article-header {
  max-width: 900px;
  margin: 54px auto 0;
  text-align: center;
}

.cvb-article-category {
  display: inline-flex;
  padding: 7px 11px;
  border-radius: 4px;
  background: rgba(37,99,235,.1);
  color: var(--accent-blue);
  font-size: 9px;
  font-weight: 850;
  letter-spacing: .09em;
  text-transform: uppercase;
}

.cvb-article-header h1 {
  margin: 18px 0 0;
  font-size: clamp(42px, 6vw, 70px);
  line-height: 1.02;
  letter-spacing: -.06em;
}

.cvb-article-excerpt {
  max-width: 760px;
  margin: 22px auto 0;
  color: var(--text-secondary);
  font-size: 17px;
  line-height: 1.75;
}

.cvb-article-header .cvb-meta {
  justify-content: center;
  margin-top: 22px;
}

.cvb-article-cover {
  width: 100%;
  margin-top: 48px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
}

.cvb-cover-image.large {
  display: block;
  width: 100%;
  max-height: 590px;
  object-fit: cover;
}

.cvb-cover-fallback.large {
  min-height: 420px;
}

.cvb-article-content {
  width: min(760px, 100%);
  margin: 58px auto 0;
}

.cvb-rich-content {
  color: var(--text-primary);
  font-size: 17px;
  line-height: 1.9;
}

.cvb-rich-content p {
  margin: 0 0 23px;
}

.cvb-rich-content h1,
.cvb-rich-content h2,
.cvb-rich-content h3,
.cvb-rich-content h4 {
  margin: 45px 0 16px;
  line-height: 1.2;
  letter-spacing: -.025em;
}

.cvb-rich-content h1 { font-size: 36px; }
.cvb-rich-content h2 { font-size: 30px; }
.cvb-rich-content h3 { font-size: 23px; }
.cvb-rich-content h4 { font-size: 19px; }

.cvb-rich-content ul,
.cvb-rich-content ol {
  margin: 0 0 26px;
  padding-left: 26px;
}

.cvb-rich-content li {
  margin: 7px 0;
}

.cvb-rich-content blockquote {
  margin: 32px 0;
  padding: 20px 24px;
  border-left: 3px solid var(--accent-blue);
  background: var(--bg-alt);
  color: var(--text-secondary);
}

.cvb-rich-content img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 32px auto;
}

.cvb-rich-content a {
  color: var(--accent-blue);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.cvb-rich-content table {
  display: block;
  width: 100%;
  margin: 28px 0;
  overflow-x: auto;
  border-collapse: collapse;
}

.cvb-rich-content th,
.cvb-rich-content td {
  padding: 10px 12px;
  border: 1px solid var(--border-color);
  text-align: left;
}

.cvb-rich-content th {
  background: var(--bg-alt);
}

.cvb-article-note {
  margin-top: 45px;
  padding: 18px 20px;
  border: 1px solid var(--border-color);
  background: var(--bg-alt);
}

.cvb-article-note strong {
  font-size: 11px;
}

.cvb-article-note p {
  margin: 7px 0 0;
  color: var(--text-secondary);
  font-size: 11px;
  line-height: 1.7;
}

.cvb-back-row {
  width: min(760px, 100%);
  margin: 35px auto 0;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}

.cvb-back-button {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--accent-blue);
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
}

.cvb-state-page {
  display: grid;
  place-items: center;
  padding: 60px 20px;
}

.cvb-state-box {
  width: min(600px, 100%);
  box-sizing: border-box;
  padding: 60px 25px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  text-align: center;
}

.cvb-state-box h2 {
  margin: 0;
  font-size: 22px;
}

.cvb-state-box p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.cvb-primary-button {
  display: inline-block;
  margin-top: 12px;
  text-decoration: none;
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  background: var(--accent-blue);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
}

.cvb-spinner {
  display: block;
  width: 28px;
  height: 28px;
  margin: 0 auto 17px;
  border: 3px solid var(--border-color);
  border-top-color: var(--accent-blue);
  border-radius: 50%;
  animation: cvb-spin .8s linear infinite;
}

.cvb-404 {
  margin-bottom: 8px;
  color: var(--accent-blue);
  font-size: 54px;
  font-weight: 900;
}

@keyframes cvb-spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 900px) {
  .cvb-toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .cvb-categories {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 2px;
  }

  .cvb-categories button {
    flex: 0 0 auto;
  }

  .cvb-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .cvb-featured-wrap {
    margin-bottom: 52px;
  }

  .cvb-featured-wrap .cvb-card-image,
  .cvb-featured-wrap .cvb-cover {
    min-height: 245px;
    height: 245px;
  }

  .cvb-featured-wrap .cvb-card-body {
    padding: 25px 20px 29px;
  }

  .cvb-featured-wrap .cvb-card-body h3 {
    font-size: 31px;
  }

  .cvb-container,
  .cvb-article-container {
    width: min(100% - 32px, 1180px);
  }

  .cvb-blog-hero .cvb-container {
    padding: 24px 0 52px;
  }

  .cvb-blog-hero-copy {
    margin-top: 42px;
  }

  .cvb-blog-hero-copy h1 {
    font-size: 43px;
  }

  .cvb-blog-hero-copy p {
    font-size: 14px;
  }

  .cvb-blog-list {
    padding: 28px 0 70px;
  }

  .cvb-toolbar {
    margin-bottom: 40px;
  }

  .cvb-section-heading {
    align-items: flex-start;
  }

  .cvb-section-heading h2 {
    font-size: 25px;
  }

  .cvb-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .cvb-card-image {
    height: 220px;
  }

  .cvb-card-body {
    padding: 19px 18px 22px;
  }

  .cvb-article-page {
    padding: 28px 0 65px;
  }

  .cvb-article-header {
    margin-top: 40px;
  }

  .cvb-article-header h1 {
    font-size: 39px;
  }

  .cvb-article-excerpt {
    font-size: 15px;
  }

  .cvb-article-header .cvb-meta {
    justify-content: center;
  }

  .cvb-article-cover {
    margin-top: 34px;
  }

  .cvb-cover-image.large {
    max-height: 330px;
  }

  .cvb-cover-fallback.large {
    min-height: 290px;
  }

  .cvb-article-content {
    margin-top: 38px;
  }

  .cvb-rich-content {
    font-size: 16px;
    line-height: 1.82;
  }

  .cvb-rich-content h2 {
    font-size: 26px;
  }

  .cvb-rich-content h3 {
    font-size: 21px;
  }
}
`;

