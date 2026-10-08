"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState("Subscribe");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterStatus('Subscribed');
    e.target.reset();
    setTimeout(() => setNewsletterStatus('Subscribe'), 2200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <>
      <header id="site-header" className={isScrolled ? 'scrolled' : ''}>
        <nav>
          <Link href="/" className="logo">
            <img 
              src="https://res.cloudinary.com/de3ryzm92/image/upload/v1790260389/Screenshot_2026-09-24_153219-removebg-preview_tjopv7.png" 
              alt="" 
              className="logo-mark" 
              aria-hidden="true"
              style={{ objectFit: 'contain' }}
            />
            <span className="logo-word-full">Brain Health Awareness Foundation</span>
            <span className="logo-word-short">BHAF</span>
          </Link>
          <div className="nav-links">
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
            <Link href="/news">News</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <div className="nav-cta">
            <Link href="/#contact" className="btn btn-ghost btn-sm">Get involved</Link>
            <Link href="/#donate" className="btn btn-primary btn-sm">Donate</Link>
            <button 
              className={`burger ${isMenuOpen ? 'open' : ''}`} 
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
          <Link href="/about" onClick={() => setIsMenuOpen(false)} style={{ color: "var(--green-deep)" }}>
            About Us
          </Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>
            Our Services
          </Link>
          <Link href="/#signs" onClick={() => setIsMenuOpen(false)}>
            Know the Signs
          </Link>
          <Link href="/news" onClick={() => setIsMenuOpen(false)}>
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

      <main>
        <section className="news-hero">
          <div className="wrap">
            <h1 className="news-hero-title">
              About <em>Us</em>
            </h1>
            <p className="news-hero-sub">
              Brain Health Awareness Foundation exists to close the gap between when symptoms first appear and when someone finally asks for help. That gap is where we work.
            </p>
          </div>
        </section>

        <section id="about" style={{ padding: '60px 0 80px' }}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Our Foundation</span>
                <h2>A foundation built on <em> early intervention, prevention,</em> and lifelong brain health</h2>
              </div>
            </div>

            <div className="about-grid">
              <div className="about-card reveal">
                <h3>Our mission</h3>
                <p>To make brain health a normal part of everyday conversations by promoting awareness, early recognition, and community action, so that memory loss, cognitive decline, stroke, and mental health challenges are recognized early and met with timely support—long before they become emergencies.</p>
                <br/>
                <h3>Our approach</h3>
                <p>We work through community screenings, public education, caregiver support, and partnerships with local health systems, meeting people where they already are: churches, markets, schools, workplaces, and homes.</p>
              </div>

              <div className="pillar-list reveal">
                <div className="pillar">
                  <span className="pillar-num">01</span>
                  <div>
                    <h4>Recognize early</h4>
                    <p>Early recognition can change lives. We train families, caregivers, and frontline workers to identify subtle changes in memory, mood, speech, and movement—early warning signs that are too often mistaken for normal aging.</p>
                  </div>
                </div>
                <div className="pillar">
                  <span className="pillar-num">02</span>
                  <div>
                    <h4>Reduce the stigma</h4>
                    <p>Brain health is health. We create safe, supportive spaces where people can openly discuss changes in memory, thinking, mood, and mental well-being—free from stigma, shame, or fear of judgment.</p>
                  </div>
                </div>
                <div className="pillar">
                  <span className="pillar-num">03</span>
                  <div>
                    <h4>Reach the underserved</h4>
                    <p>Screenings, workshops, and resources are prioritized for communities with the least access to neurology and mental health services.</p>
                  </div>
                </div>
                <div className="pillar">
                  <span className="pillar-num">04</span>
                  <div>
                    <h4>Rebuild after diagnosis</h4>
                    <p>For families already living with a diagnosis, we offer caregiver circles, practical guidance, and a network so no one carries it alone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      </main>
      
      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/#top" className="logo">
                <img 
                  src="https://res.cloudinary.com/de3ryzm92/image/upload/v1790260389/Screenshot_2026-09-24_153219-removebg-preview_tjopv7.png" 
                  alt="" 
                  className="logo-mark" 
                  aria-hidden="true"
                  style={{ objectFit: 'contain' }}
                />
                <span>Brain Health Awareness Foundation</span>
              </Link>
              <p>Recognizing, protecting, and normalizing brain health, one community conversation at a time.</p>
              <div className="social-row" style={{marginTop: '20px'}}>
                <a href="#" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg></a>
                <a href="#" aria-label="X"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18M21 3L3 21" stroke="currentColor" strokeWidth="1.6"/></svg></a>
                <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="9" width="4" height="12" fill="currentColor"/><circle cx="5" cy="4.5" r="2" fill="currentColor"/><path d="M11 9h4v2.2c.7-1.3 2.2-2.5 4.3-2.5 3.4 0 5.7 2.1 5.7 6.5V21h-4v-5.2c0-2-0.8-3.3-2.6-3.3-1.4 0-2.3 1-2.7 1.9-.1.3-.2.7-.2 1.2V21h-4V9z" fill="currentColor"/></svg></a>
              </div>
            </div>
            <div className="footer-col">
              <h5>Explore</h5>
              <Link href="/about">About &amp; Mission</Link>
              <Link href="/services">Programs</Link>
              <Link href="/news">News</Link>
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
