"use client";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTier, setActiveTier] = useState(15000);
  const [contactStatus, setContactStatus] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("Subscribe");

  const wavePathRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (wavePathRef.current) {
      const path = wavePathRef.current;
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1)';
      
      const frameId = requestAnimationFrame(() => {
        setTimeout(() => { 
          if (path) path.style.strokeDashoffset = 0; 
        }, 200);
      });
      return () => cancelAnimationFrame(frameId);
    }
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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactStatus("Thanks for reaching out. This form is not yet connected to email delivery, we'll wire that up next.");
    e.target.reset();
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterStatus('Subscribed');
    e.target.reset();
    setTimeout(() => setNewsletterStatus('Subscribe'), 2200);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header id="site-header" className={isScrolled ? 'scrolled' : ''}>
        <nav>
          <a href="#top" className="logo">
            <img 
              src="https://res.cloudinary.com/de3ryzm92/image/upload/v1790260389/Screenshot_2026-09-24_153219-removebg-preview_tjopv7.png" 
              alt="" 
              className="logo-mark" 
              aria-hidden="true"
              style={{ objectFit: 'contain' }}
            />
            <span className="logo-word-full">Brain Health Awareness Foundation</span>
            <span className="logo-word-short">BHAF</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#signs">Know the Signs</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-cta">
            <a href="#contact" className="btn btn-ghost btn-sm">Get involved</a>
            <a href="#donate" className="btn btn-primary btn-sm">Donate</a>
            <button 
              className={`burger ${isMenuOpen ? 'open' : ''}`} 
              aria-label="Open menu" 
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>
        <div className={`mobile-panel ${isMenuOpen ? 'open' : ''}`} id="mobilePanel">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#signs" onClick={closeMenu}>Know the Signs</a>
          <a href="#news" onClick={closeMenu}>News</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#donate" className="btn btn-primary" onClick={closeMenu}>Donate now</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="reveal in">
              <span className="eyebrow">BrainHealth Awareness Foundation</span>
              <h1>The brain speaks long before memory fades <em>recognize the early signs, act early.</em></h1>
              <p className="hero-sub">We empower communities to recognize the early signs of brain health conditions, protect cognitive well-being, and foster open conversations before a crisis occurs. Awareness first. Prevention always. Support without stigma.</p>
              <div className="hero-ctas">
                <a href="#donate" className="btn btn-primary">Support the mission</a>
                <a href="#programs" className="btn btn-ghost">See our programs</a>
              </div>
              <div className="trust-row">
                <span className="dots"><span></span><span></span><span></span></span>
                <span>Built with clinicians, caregivers, and communities</span>
              </div>
            </div>

            <div className="hero-visual reveal in">
              <div className="hero-visual-top">
                <span className="eyebrow">Live awareness</span>
                <p>Every campaign, every conversation, and every shared symptom is an opportunity for early intervention.</p>
              </div>
              <div className="hero-wave-wrap">
                <svg className="hero-wave-svg" viewBox="0 0 400 90" preserveAspectRatio="none" style={{width: '100%', height: 'auto', overflow: 'visible'}}>
                  <path className="wave-echo" d="M0,55 L40,55 L54,25 L68,80 L82,15 L96,55 L140,55 L154,40 L168,68 L182,55 L226,55 L240,30 L254,75 L268,20 L282,55 L326,55 L340,42 L354,64 L368,55 L400,55"/>
                  <path id="hero-wave-path" ref={wavePathRef} className="wave-draw" d="M0,55 L40,55 L54,25 L68,80 L82,15 L96,55 L140,55 L154,40 L168,68 L182,55 L226,55 L240,30 L254,75 L268,20 L282,55 L326,55 L340,42 L354,64 L368,55 L400,55"/>
                </svg>
              </div>
              <div className="hero-stat-inline">
                <div><strong>1 in 3</strong><span>Will face a brain health issue</span></div>
                <div><strong>60%</strong><span>Of cases go unrecognized early</span></div>
                <div><strong>9</strong><span>Modifiable risk factors known</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-bar" style={{paddingTop: '34px'}}>
          <div className="wrap">
            <div className="stats-grid">
              <div className="stat-item reveal">
                <strong>55M+</strong>
                <span>People living with dementia worldwide</span>
              </div>
              <div className="stat-item reveal">
                <strong>3 sec</strong>
                <span>A new case is estimated to emerge somewhere globally</span>
              </div>
              <div className="stat-item reveal">
                <strong>40%</strong>
                <span>Of cases linked to factors we can act on early</span>
              </div>
              <div className="stat-item reveal">
                <strong>12K+</strong>
                <span>People reached through our screenings and talks</span>
              </div>
            </div>
            <p className="stats-note">Global figures adapted from public health literature for awareness purposes. Replace with sourced, cited statistics before publishing.</p>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">About us</span>
                <h2>A foundation built on <em> early intervention, prevention,</em> and lifelong brain health</h2>
              </div>
              <p className="lead">Brain Health Awareness Foundation exists to close the gap between when symptoms first appear and when someone finally asks for help. That gap is where we work.</p>
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

        <section id="programs" style={{background: 'var(--bg-soft)'}}>
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
                <p>Free, walk-in cognitive and mental wellness checks brought directly to neighborhoods with limited healthcare access.</p>
                <a href="#" className="program-link">Learn more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></a>
              </div>

              <div className="program-card reveal">
                <div className="program-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 19V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2z" stroke="#24385e" strokeWidth="1.6" strokeLinejoin="round"/><path d="M8 12h8M8 16h5" stroke="#24385e" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </div>
                <h3>Awareness Campaigns</h3>
                <p>School talks, workplace sessions, and media partnerships that make brain health part of everyday conversation.</p>
                <a href="#" className="program-link">Learn more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></a>
              </div>

              <div className="program-card reveal">
                <div className="program-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="3" stroke="#89bad5" strokeWidth="1.6"/><circle cx="17" cy="9" r="2.4" stroke="#89bad5" strokeWidth="1.6"/><path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.6 1.8-4.8 4-5.5" stroke="#89bad5" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </div>
                <h3>Caregiver Support Circles</h3>
                <p>Peer support groups, practical training, and respite resources for families caring for someone with cognitive decline.</p>
                <a href="#" className="program-link">Learn more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></a>
              </div>

              <div className="program-card reveal">
                <div className="program-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-8" stroke="#659c56" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 7h6v6" stroke="#659c56" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3>Research &amp; Advocacy</h3>
                <p>Funding local research and pushing for policy that expands access to neurological and mental health care.</p>
                <a href="#" className="program-link">Learn more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></a>
              </div>
            </div>
          </div>
        </section>

        <section id="signs" className="signs-section">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Awareness, not diagnosis</span>
                <h2>Know the signs worth a <em>second look</em>.</h2>
              </div>
              <p className="lead">Most brain health conditions are dismissed at first. Here is what we teach communities to notice and gently follow up on.</p>
            </div>

            <div className="signs-grid">
              <div className="sign-item reveal">
                <span className="tag">Memory</span>
                <p>Repeating questions or misplacing items in ways that disrupt daily routines.</p>
              </div>
              <div className="sign-item reveal">
                <span className="tag">Mood</span>
                <p>Sudden withdrawal, irritability, or flatness that feels out of character.</p>
              </div>
              <div className="sign-item reveal">
                <span className="tag">Speech</span>
                <p>Struggling to find words, follow conversations, or finish familiar sentences.</p>
              </div>
              <div className="sign-item reveal">
                <span className="tag">Movement</span>
                <p>New unsteadiness, tremors, or slowed coordination without an obvious cause.</p>
              </div>
              <div className="sign-item reveal">
                <span className="tag">Focus</span>
                <p>Difficulty completing tasks that used to be simple, or losing track mid-task.</p>
              </div>
            </div>
            <p className="signs-disclaimer">This is general awareness information, not a diagnosis. If you or someone you know shows these signs, speak with a qualified healthcare professional.</p>
          </div>
        </section>

        <section className="quote-section">
          <div className="wrap">
            <div className="quote-mark">&ldquo;</div>
            <blockquote className="reveal">We didn't know Dad's forgetfulness had a name until a screening in our own market square gave us the words to ask for help.</blockquote>
            <p className="quote-attr">Family member, community screening participant</p>
          </div>
        </section>

        <section id="news">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Latest</span>
                <h2>News &amp; <em>updates</em></h2>
              </div>
              <a href="#" className="btn btn-ghost btn-sm">View all news</a>
            </div>

            <div className="news-grid">
              <article className="news-card reveal">
                <div className="news-thumb">
                  <svg viewBox="0 0 200 120"><path d="M0,90 L30,90 L40,60 L50,110 L60,40 L70,90 L100,90 L110,70 L120,100 L130,90 L200,90" stroke="#89bad5" strokeWidth="2" fill="none" opacity="0.45"/></svg>
                </div>
                <span className="news-date">June 2026 &middot; Field notes</span>
                <h3>Our first community screening reached 400 people in one weekend</h3>
                <p>A look inside the pilot screening program and what we learned about reaching people who rarely see a neurologist.</p>
                <a href="#" className="news-link">Read the story &rarr;</a>
              </article>

              <article className="news-card reveal">
                <div className="news-thumb thumb-b">
                  <svg viewBox="0 0 200 120"><path d="M0,90 L30,90 L40,60 L50,110 L60,40 L70,90 L100,90 L110,70 L120,100 L130,90 L200,90" stroke="#659c56" strokeWidth="2" fill="none" opacity="0.45"/></svg>
                </div>
                <span className="news-date">May 2026 &middot; Partnerships</span>
                <h3>Foundation partners with three regional clinics on referral pathways</h3>
                <p>New agreements make it easier to move someone from a community screening into proper clinical care within days.</p>
                <a href="#" className="news-link">Read the story &rarr;</a>
              </article>

              <article className="news-card reveal">
                <div className="news-thumb thumb-c">
                  <svg viewBox="0 0 200 120"><path d="M0,90 L30,90 L40,60 L50,110 L60,40 L70,90 L100,90 L110,70 L120,100 L130,90 L200,90" stroke="#24385e" strokeWidth="2" fill="none" opacity="0.45"/></svg>
                </div>
                <span className="news-date">April 2026 &middot; Caregivers</span>
                <h3>Inside our first caregiver support circle: what families told us</h3>
                <p>Twelve families, six weeks, one honest conversation about what it actually takes to care for someone every day.</p>
                <a href="#" className="news-link">Read the story &rarr;</a>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="involved-section reveal">
            <div className="section-head" style={{marginBottom: 0}}>
              <div>
                <span className="eyebrow">Get involved</span>
                <h2>There is a place for you in this <em>work</em>.</h2>
              </div>
              <p className="lead">Whether you have five minutes, a weekend, or a network, there is a way to move the mission forward.</p>
            </div>

            <div className="involved-grid">
              <div className="involved-item">
                <span className="num">Give</span>
                <h3>Donate</h3>
                <p>Fund a screening, a support circle session, or a year of awareness campaigns in an underserved community.</p>
                <a href="#donate" className="btn btn-primary btn-sm">Donate now</a>
              </div>
              <div className="involved-item">
                <span className="num">Show up</span>
                <h3>Volunteer</h3>
                <p>Join screening days, help run workshops, or lend a professional skill, from design to logistics to translation.</p>
                <a href="#contact" className="btn btn-ghost btn-sm">Apply to volunteer</a>
              </div>
              <div className="involved-item">
                <span className="num">Extend reach</span>
                <h3>Partner with us</h3>
                <p>Clinics, employers, schools, and faith communities can host a screening or awareness session on their premises.</p>
                <a href="#contact" className="btn btn-ghost btn-sm">Start a partnership</a>
              </div>
            </div>
          </div>
        </section>

        <section id="donate">
          <div className="wrap donate-section">
            <div className="donate-copy reveal">
              <span className="eyebrow">Support the mission</span>
              <h2>Every donation funds an earlier conversation.</h2>
              <p>100% of screening-designated gifts go directly toward test kits, staff stipends, and venue costs for community screening days. No amount is too small to move someone from "maybe it's nothing" to "let's get it checked."</p>
              <div className="donate-tiers">
                <button className={`tier-btn ${activeTier === 5000 ? 'active' : ''}`} onClick={() => setActiveTier(5000)}>&#8358;5,000</button>
                <button className={`tier-btn ${activeTier === 15000 ? 'active' : ''}`} onClick={() => setActiveTier(15000)}>&#8358;15,000</button>
                <button className={`tier-btn ${activeTier === 50000 ? 'active' : ''}`} onClick={() => setActiveTier(50000)}>&#8358;50,000</button>
                <button className={`tier-btn ${activeTier === 'other' ? 'active' : ''}`} onClick={() => setActiveTier('other')}>Other</button>
              </div>
            </div>

            <div className="donate-panel reveal">
              <h3>Give securely</h3>
              <p>Payments are processed through Paystack. This button is a placeholder until the payment integration is connected.</p>
              <button className="paystack-btn" onClick={() => alert('Paystack integration goes here. This button is a placeholder until the payment gateway is connected.')}>
                Donate via Paystack
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
              <p className="donate-note">Bank transfer and other regional payment options can be added here once finalized.</p>
            </div>
          </div>
        </section>

        <section id="contact" style={{background: 'var(--bg-soft)'}}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Contact</span>
                <h2>Let's start a <em>conversation</em>.</h2>
              </div>
              <p className="lead">Questions about a program, a partnership, or a donation? Reach out and someone from the team will respond.</p>
            </div>

            <div className="contact-grid">
              <div className="reveal">
                <div className="contact-info-item">
                  <span className="icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="#24385e" strokeWidth="1.6" strokeLinejoin="round"/></svg></span>
                  <div>
                    <h4>Email</h4>
                    <p>hello@brainhealthawareness.org</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 3a2 2 0 01-.5 2L8 10a16 16 0 006 6l1.3-1.2a2 2 0 012-.5c1 .3 2 .5 3 .6a2 2 0 011.7 2.1z" stroke="#24385e" strokeWidth="1.6" strokeLinejoin="round"/></svg></span>
                  <div>
                    <h4>Phone</h4>
                    <p>+234 000 000 0000</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="icon-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-6.3 7-12a7 7 0 10-14 0c0 5.7 7 12 7 12z" stroke="#24385e" strokeWidth="1.6" strokeLinejoin="round"/><circle cx="12" cy="10" r="2.4" stroke="#24385e" strokeWidth="1.6"/></svg></span>
                  <div>
                    <h4>Office</h4>
                    <p>Add your foundation's address here</p>
                  </div>
                </div>
              </div>

              <form className="reveal" onSubmit={handleContactSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="fname">Full name</label>
                    <input type="text" id="fname" required />
                  </div>
                  <div className="field">
                    <label htmlFor="femail">Email</label>
                    <input type="email" id="femail" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field full">
                    <label htmlFor="fsubject">Subject</label>
                    <input type="text" id="fsubject" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field full">
                    <label htmlFor="fmessage">Message</label>
                    <textarea id="fmessage" rows="4" required></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Send message</button>
                {contactStatus && <p className="form-status show">{contactStatus}</p>}
              </form>
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
              <a href="#top" className="logo">
                <img 
                  src="https://res.cloudinary.com/de3ryzm92/image/upload/v1790260389/Screenshot_2026-09-24_153219-removebg-preview_tjopv7.png" 
                  alt="" 
                  className="logo-mark" 
                  aria-hidden="true"
                  style={{ objectFit: 'contain' }}
                />
                <span>Brain Health Awareness Foundation</span>
              </a>
              <p>Recognizing, protecting, and normalizing brain health, one community conversation at a time.</p>
              <div className="social-row" style={{marginTop: '20px'}}>
                <a href="#" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg></a>
                <a href="#" aria-label="X"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18M21 3L3 21" stroke="currentColor" strokeWidth="1.6"/></svg></a>
                <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="9" width="4" height="12" fill="currentColor"/><circle cx="5" cy="4.5" r="2" fill="currentColor"/><path d="M11 9h4v2.2c.7-1.3 2.2-2.5 4.3-2.5 3.4 0 5.7 2.1 5.7 6.5V21h-4v-5.2c0-2-0.8-3.3-2.6-3.3-1.4 0-2.3 1-2.7 1.9-.1.3-.2.7-.2 1.2V21h-4V9z" fill="currentColor"/></svg></a>
              </div>
            </div>
            <div className="footer-col">
              <h5>Explore</h5>
              <a href="#about">About &amp; Mission</a>
              <a href="#programs">Programs</a>
              <a href="#news">News</a>
              <a href="#signs">Know the Signs</a>
            </div>
            <div className="footer-col">
              <h5>Get involved</h5>
              <a href="#donate">Donate</a>
              <a href="#contact">Volunteer</a>
              <a href="#contact">Partner with us</a>
            </div>
            <div className="footer-col">
              <h5>Foundation</h5>
              <a href="#contact">Contact</a>
              <a href="#">Annual report</a>
              <a href="#">Privacy policy</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 Brain Health Awareness Foundation. All rights reserved.</span>
            <span>Registered nonprofit &middot; Placeholder registration number</span>
          </div>
        </div>
      </footer>
    </>
  );
}
