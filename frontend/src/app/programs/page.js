"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProgramsPage() {
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
            <Link href="/programs" style={{ color: "var(--green-deep)", fontWeight: 700 }}>Programs</Link>
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
          <Link href="/programs" onClick={() => setIsMenuOpen(false)} style={{ color: "var(--green-deep)" }}>
            Programs
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
              Our <em>Programs</em> &amp; Mission
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

        <section id="programs" style={{ background: 'var(--bg-soft)', paddingTop: '60px', paddingBottom: '80px' }}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">What we run</span>
                <h2>Programs built for <em>real</em> communities.</h2>
              </div>
              <p className="lead">Each program answers one question: how do we get to people earlier, in language and settings they already trust?</p>
            </div>

            <div className="programs-grid">
              <div className="program-card reveal">
                <div className="program-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" stroke="#659c56" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </div>
                <h3>Community Screenings</h3>
                <p>Free, walk-in cognitive and mental wellness checks delivered directly to underserved neighborhoods with limited healthcare access. These screenings help identify potential early signs of memory loss, cognitive decline, stress, anxiety, and other mental health concerns. Participants receive basic assessments, educational resources, and guidance on appropriate next steps, including referrals to qualified healthcare professionals when necessary. By bringing these services closer to communities, we encourage early intervention, reduce barriers to care, and promote healthier lives.</p>
              </div>

              <div className="program-card reveal">
                <div className="program-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 19V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2z" stroke="#24385e" strokeWidth="1.6" strokeLinejoin="round"/><path d="M8 12h8M8 16h5" stroke="#24385e" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </div>
                <h3>Awareness Campaigns</h3>
                <p>School talks, workplace sessions, community outreaches, and media partnerships designed to make brain health and mental wellness part of everyday conversation. Through educational workshops, public discussions, digital content, and awareness events, we address misconceptions, challenge stigma, and help people recognize early warning signs of cognitive and mental health conditions. Our campaigns equip individuals with practical knowledge about prevention, healthy habits, and available support, fostering more informed, compassionate, and supportive communities.</p>
              </div>

              <div className="program-card reveal">
                <div className="program-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="3" stroke="#89bad5" strokeWidth="1.6"/><circle cx="17" cy="9" r="2.4" stroke="#89bad5" strokeWidth="1.6"/><path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.6 1.8-4.8 4-5.5" stroke="#89bad5" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </div>
                <h3>Caregiver Support Circles</h3>
                <p>Peer support groups, practical training, and respite resources for families and individuals caring for loved ones experiencing cognitive decline or related neurological conditions. These circles provide safe spaces for caregivers to share experiences, discuss challenges, learn effective caregiving techniques, and access relevant information. Through expert-led sessions and community connections, we promote emotional well-being, reduce caregiver isolation, and help families navigate the demands of long-term care while preserving dignity and quality of life for their loved ones.</p>
              </div>

              <div className="program-card reveal">
                <div className="program-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-8" stroke="#659c56" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 7h6v6" stroke="#659c56" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3>Advocacy & Partnerships</h3>
                <p>Collaborating with local healthcare providers, policymakers, community leaders, and other organizations to improve mental and neurological care access. By building strategic partnerships, we amplify our impact, influence policies that support brain health, and create a stronger, more integrated support network for those affected. Our advocacy efforts aim to prioritize brain health on the public health agenda and ensure that vulnerable populations receive the care and resources they deserve.</p>
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
                <a href="https://www.linkedin.com/company/brainhealth-awareness-foundation/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="9" width="4" height="12" fill="currentColor"/><circle cx="5" cy="4.5" r="2" fill="currentColor"/><path d="M11 9h4v2.2c.7-1.3 2.2-2.5 4.3-2.5 3.4 0 5.7 2.1 5.7 6.5V21h-4v-5.2c0-2-0.8-3.3-2.6-3.3-1.4 0-2.3 1-2.7 1.9-.1.3-.2.7-.2 1.2V21h-4V9z" fill="currentColor"/></svg></a>
              </div>
            </div>
            <div className="footer-col">
              <h5>Explore</h5>
              <Link href="/programs">Programs &amp; Mission</Link>
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
              <a href="mailto:bhafoundation.org@gmail.com">Annual report</a>
              <a href="mailto:bhafoundation.org@gmail.com">Privacy policy</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Brain Health Awareness Foundation. All rights reserved.</span>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span>Registered nonprofit &middot; Placeholder registration number</span>
              <span>Built by <a href="https://tavcorp.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>TavCorp</a></span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
