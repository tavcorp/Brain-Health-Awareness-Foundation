"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { NEWS_ARTICLES, NEWS_CATEGORIES } from "@/data/newsData";

function NewsContent() {
  const [selectedCategory, setSelectedCategory] = useState("All Updates");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStory, setActiveStory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState("Subscribe");



  const searchParams = useSearchParams();

  // Read URL query parameter on mount to open a specific story
  useEffect(() => {
    const storyId = searchParams.get("story");
    if (storyId) {
      const storyToOpen = NEWS_ARTICLES.find(a => a.id === storyId);
      if (storyToOpen) {
        setActiveStory(storyToOpen);
      }
    }
  }, [searchParams]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (activeStory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeStory]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveStory(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterStatus("Subscribed");
    e.target.reset();
    setTimeout(() => setNewsletterStatus("Subscribe"), 2500);
  };

  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "All Updates" || article.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.author.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });


  return (
    <>
      {/* Site Header */}
      <header id="site-header" className="scrolled">
        <nav>
          <Link href="/" className="logo">
            <img
              src="https://res.cloudinary.com/de3ryzm92/image/upload/v1790260389/Screenshot_2026-09-24_153219-removebg-preview_tjopv7.png"
              alt=""
              className="logo-mark"
              aria-hidden="true"
              style={{ objectFit: "contain" }}
            />
            <span className="logo-word-full">Brain Health Awareness Foundation</span>
            <span className="logo-word-short">BHAF</span>
          </Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <div className="nav-dropdown">
              <button className="nav-dropdown-btn">
                Programs 
                <svg viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="nav-dropdown-content">
                <Link href="/about">About Us</Link>
                <Link href="/services">Our Services</Link>
              </div>
            </div>
            <Link href="/#signs">Know the Signs</Link>
            <Link href="/news" style={{ color: "var(--green-deep)", fontWeight: 700 }}>
              News
            </Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <div className="nav-cta">
            <Link href="/#contact" className="btn btn-ghost btn-sm">
              Get involved
            </Link>
            <Link href="/#donate" className="btn btn-primary btn-sm">
              Donate
            </Link>
            <button
              className={`burger ${isMenuOpen ? "open" : ""}`}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
        <div className={`mobile-panel ${isMenuOpen ? "open" : ""}`} id="mobilePanel">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>
            Our Services
          </Link>
          <Link href="/#signs" onClick={() => setIsMenuOpen(false)}>
            Know the Signs
          </Link>
          <Link href="/news" onClick={() => setIsMenuOpen(false)} style={{ color: "var(--green-deep)" }}>
            News
          </Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/#donate" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
            Donate now
          </Link>
        </div>
      </header>

      <main id="top">
        {/* News Hero Banner */}
        <section className="news-hero">
          <div className="wrap">
            {/* <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>News &amp; Field Notes</span>
            </div> */}
            {/* <span className="eyebrow">Dispatches &amp; Insights</span> */}
            <h1 className="news-hero-title">
              Stories from the field, science, and <em>our communities</em>
            </h1>
            <p className="news-hero-sub">
              Stay connected with our grassroots screening reports, reflections from caregivers, regional health partnerships, and evidence-based guidance for lifelong cognitive health.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ padding: "40px 0 80px" }}>
          <div className="wrap">


            {/* Toolbar: Category Filter Tabs & Search */}
            <div className="news-toolbar">
              <div className="filter-pills">
                {NEWS_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-pill ${selectedCategory === cat ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="news-search-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21l-4.35-4.35M19 11a8 8 0 11-16 0 8 8 0 0116 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles by topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Article Grid */}
            {filteredArticles.length > 0 ? (
              <div className="news-grid" style={{ rowGap: "32px" }}>
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="news-card-elevated"
                    onClick={() => setActiveStory(article)}
                  >
                    <div className={`news-thumb ${article.thumbVariant || ""}`}>
                      {article.image ? (
                        <img src={article.image} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <svg viewBox="0 0 200 120" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.45 }}>
                          <path
                            d="M0,90 L30,90 L40,60 L50,110 L60,40 L70,90 L100,90 L110,70 L120,100 L130,90 L200,90"
                            stroke={article.thumbVariant === "thumb-b" ? "#659c56" : article.thumbVariant === "thumb-c" ? "#24385e" : "#89bad5"}
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                      )}
                    </div>

                    <div>
                      <span className="news-category-tag">{article.category}</span>
                      <div style={{ fontSize: "12px", color: "var(--slate-text)", margin: "4px 0 10px" }}>
                        {article.date} &middot; {article.readTime}
                      </div>
                      <h3>{article.title}</h3>
                      <p style={{ marginTop: "8px" }}>{article.excerpt}</p>
                    </div>

                    <div className="news-card-footer">
                      <span style={{ fontSize: "12px", color: "var(--slate-text)" }}>
                        {article.author.split("&")[0]}
                      </span>
                      <span className="news-link" style={{ fontSize: "13.5px" }}>
                        Read story &rarr;
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "64px 20px", background: "var(--bg-soft)", borderRadius: "var(--radius-md)" }}>
                <h3 style={{ color: "var(--navy)", marginBottom: "8px" }}>No articles found</h3>
                <p style={{ color: "var(--slate-text)", marginBottom: "20px" }}>
                  We could not find any stories matching "{searchQuery}" in the selected category.
                </p>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => {
                    setSelectedCategory("All Updates");
                    setSearchQuery("");
                  }}
                >
                  Clear search and filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter">
          <div className="wrap newsletter-inner">
            <div>
              <h3>Stay close to the work</h3>
              <p>One email a month. Screening dates, stories from the field, and ways to support our mission.</p>
            </div>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" placeholder="you@email.com" required />
              <button type="submit" className="btn btn-primary">
                {newsletterStatus}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Story Reader Modal */}
      {activeStory && (
        <div
          className="story-modal-overlay"
          onClick={() => setActiveStory(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="story-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="story-modal-close"
              onClick={() => setActiveStory(null)}
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div className="story-modal-header">
              <span className="featured-badge" style={{ marginBottom: "12px" }}>
                {activeStory.category}
              </span>
              <h2>{activeStory.title}</h2>
              <div className="news-author-row" style={{ marginTop: "12px" }}>
                <span>{activeStory.date}</span>
                <span>&bull;</span>
                <span>{activeStory.readTime}</span>
                <span>&bull;</span>
                <span>By {activeStory.author}</span>
              </div>
            </div>

            {activeStory.keyTakeaway && (
              <div className="story-callout">
                <strong>Key Takeaway:</strong>
                <p>{activeStory.keyTakeaway}</p>
              </div>
            )}

            <div className="story-body-content">
              {activeStory.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div style={{ marginTop: "32px", paddingTop: "20px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <span style={{ fontSize: "13px", color: "var(--slate-text)" }}>
                Brain Health Awareness Foundation &middot; Field Dispatches
              </span>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => setActiveStory(null)}
              >
                Close article
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="newsletter">
        <div className="wrap newsletter-inner">
          <div>
            <h3>Stay close to the work</h3>
            <p>One email a month. Screening dates, stories from the field, and small ways to help.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input type="email" placeholder="you@email.com" required />
            <button type="submit" className="btn btn-primary">{newsletterStatus}</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/" className="logo">
                <img
                  src="https://res.cloudinary.com/de3ryzm92/image/upload/v1790260389/Screenshot_2026-09-24_153219-removebg-preview_tjopv7.png"
                  alt=""
                  className="logo-mark"
                  aria-hidden="true"
                  style={{ objectFit: "contain" }}
                />
                <span>Brain Health Awareness Foundation</span>
              </Link>
              <p>Recognizing, protecting, and normalizing brain health, one community conversation at a time.</p>
              <div className="social-row" style={{ marginTop: "20px" }}>
                <a href="#" aria-label="Instagram">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" aria-label="X">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3l18 18M21 3L3 21" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="9" width="4" height="12" fill="currentColor" />
                    <circle cx="5" cy="4.5" r="2" fill="currentColor" />
                    <path d="M11 9h4v2.2c.7-1.3 2.2-2.5 4.3-2.5 3.4 0 5.7 2.1 5.7 6.5V21h-4v-5.2c0-2-0.8-3.3-2.6-3.3-1.4 0-2.3 1-2.7 1.9-.1.3-.2.7-.2 1.2V21h-4V9z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h5>Explore</h5>
              <Link href="/about">About &amp; Mission</Link>
              <Link href="/services">Programs</Link>
              <Link href="/news" style={{ color: "var(--green-deep)", fontWeight: 600 }}>
                News &amp; Updates
              </Link>
              <Link href="/#signs">Know the Signs</Link>
            </div>
            <div className="footer-col">
              <h5>Get involved</h5>
              <Link href="/#donate">Donate</Link>
              <Link href="/#contact">Volunteer</Link>
              <Link href="/#contact">Partner with us</Link>
            </div>
            <div className="footer-col">
              <h5>Foundation</h5>
              <Link href="/#contact">Contact</Link>
              <a href="#">Annual report</a>
              <a href="#">Privacy policy</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Brain Health Awareness Foundation. All rights reserved.</span>
            <span>Registered nonprofit &middot; Placeholder registration number</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function NewsPage() {
  return (
    <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>Loading...</div>}>
      <NewsContent />
    </Suspense>
  );
}
