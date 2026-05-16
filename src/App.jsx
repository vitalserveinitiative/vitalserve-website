import {
  Bandage,
  HandHeart,
  HandHelping,
  Handshake,
  Heart,
  Package,
  ShieldCheck,
  Sparkles,
  Users,
  Clock3,
  Building2,
  Droplets,
  PillBottle,
  SoapDispenserDroplet,
  SprayCan,
} from 'lucide-react'
import { useEffect } from 'react'
import './App.css'

function LogoMark({ large = false }) {
  return (
    <span className={`logo-mark ${large ? 'logo-mark-lg' : ''}`} aria-hidden="true">
      <span className="logo-ring" />
      <span className="logo-heart"><Heart size={large ? 12 : 9} /></span>
      <span className="logo-text">VS</span>
    </span>
  )
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' },
    )

    document.querySelectorAll('.reveal').forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="site">
      <div className="bg-orb orb-a" aria-hidden="true" />
      <div className="bg-orb orb-b" aria-hidden="true" />

      <header className="navbar" id="top">
        <div className="container navbar-content">
          <a className="brand" href="#top" aria-label="VitalServe Initiative home">
            <LogoMark />
            <span>VitalServe Initiative</span>
          </a>
          <nav aria-label="Main navigation">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#involved">Get Involved</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section reveal">
          <div className="hero-gradient" aria-hidden="true" />
          <div className="hero-blob blob-one" aria-hidden="true" />
          <div className="hero-blob blob-two" aria-hidden="true" />
          <div className="hero-blob blob-three" aria-hidden="true" />
          <div className="container hero-content">
            <p className="eyebrow">Student-Led Service Initiative</p>
            <div className="hero-logo-wrap">
              <LogoMark large />
            </div>
            <h1>Care with dignity, one VitalCare Kit at a time.</h1>
            <p className="subheadline">Student-led service supporting hygiene and basic wellness access.</p>
            <p className="hero-text">
              We support underserved and unhoused communities through care kit efforts, donation drives,
              and local partnerships focused on practical everyday essentials.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#involved">Volunteer With Us</a>
              <a className="btn btn-secondary" href="#contact">Partner With Us</a>
            </div>
            <div className="hero-highlights">
              <div><ShieldCheck size={16} /> Student-led and community-centered</div>
              <div><Sparkles size={16} /> Focused on safe, practical essentials</div>
              <div><HandHeart size={16} /> Built with compassion and consistency</div>
            </div>
          </div>
        </section>

        <section id="about" className="section reveal">
          <div className="container card layered-card">
            <p className="section-kicker">Our Mission</p>
            <h2>About VitalServe</h2>
            <p>
              VitalServe Initiative is a student-led service initiative focused on practical, community-based support.
              Our mission is to improve access to hygiene and basic wellness supplies by coordinating volunteers,
              collecting needed items, and working with local partners to serve people with dignity and consistency.
            </p>
          </div>
        </section>

        <section id="project" className="section reveal">
          <div className="container grid-two">
            <div className="card layered-card">
              <p className="section-kicker">Current Project</p>
              <h2>VitalCare Kits</h2>
              <p>
                Each VitalCare Kit is packed with useful, everyday items like toothbrushes, soap, deodorant,
                socks, wipes, hand sanitizer, and basic first-aid supplies to provide simple practical support.
              </p>
            </div>

            <aside className="kit-visual card" aria-label="VitalCare kit contents visual">
              <h3>Typical kit contents</h3>
              <div className="kit-items">
                <span><PillBottle size={16} /> Toothbrush + toothpaste</span>
                <span><SoapDispenserDroplet size={16} /> Soap</span>
                <span><Droplets size={16} /> Wipes</span>
                <span><SprayCan size={16} /> Hand sanitizer</span>
                <span><Package size={16} /> Socks</span>
                <span><Bandage size={16} /> Basic first-aid</span>
              </div>
            </aside>
          </div>
        </section>

        <section id="involved" className="section reveal">
          <div className="container">
            <p className="section-kicker">Community Action</p>
            <h2>Get Involved</h2>
            <p className="section-subtitle">Small actions from many people can create meaningful local impact.</p>
            <div className="card-grid">
              <article className="action-card"><HandHelping aria-hidden="true" className="card-icon" /><h3>Volunteer</h3><p>Join kit-packing days, sorting events, and outreach efforts.</p></article>
              <article className="action-card"><Heart aria-hidden="true" className="card-icon" /><h3>Donate Supplies</h3><p>Contribute new hygiene and basic wellness items for care kits.</p></article>
              <article className="action-card"><HandHeart aria-hidden="true" className="card-icon" /><h3>Organize a Drive</h3><p>Host a school, workplace, or community supply drive.</p></article>
              <article className="action-card"><Handshake aria-hidden="true" className="card-icon" /><h3>Partner With Us</h3><p>Collaborate as a local organization to reach more neighbors.</p></article>
            </div>
          </div>
        </section>

        <section id="impact" className="section reveal">
          <div className="container">
            <p className="section-kicker">Transparency</p>
            <h2>Impact Tracker</h2>
            <p className="section-subtitle">We are just getting started, so our numbers currently remain at zero.</p>
            <div className="stats-grid">
              <div className="stat-card"><Package aria-hidden="true" className="stat-icon" /><span>Kits Delivered</span><strong>0</strong></div>
              <div className="stat-card"><Users aria-hidden="true" className="stat-icon" /><span>Volunteers</span><strong>0</strong></div>
              <div className="stat-card"><Clock3 aria-hidden="true" className="stat-icon" /><span>Service Hours</span><strong>0</strong></div>
              <div className="stat-card"><Building2 aria-hidden="true" className="stat-icon" /><span>Partner Organizations</span><strong>0</strong></div>
            </div>
            <div className="goal-card card">
              <div className="goal-head">
                <h3>VitalCare Kit Goal</h3>
                <span>0 / 100 kits</span>
              </div>
              <div className="goal-track" role="img" aria-label="Progress toward 100 VitalCare kits, currently zero">
                <span className="goal-fill" style={{ width: '0%' }} />
              </div>
              <p>Our first milestone is preparing 100 kits. Progress will be updated publicly as distribution begins.</p>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container safety-note">
            <h2>Safety Note</h2>
            <p>
              VitalServe only collects and distributes safe hygiene and basic wellness supplies. We do not collect
              or distribute medications, prescription items, needles, or used medical equipment.
            </p>
          </div>
        </section>

        <section id="contact" className="section reveal">
          <div className="container card layered-card">
            <p className="section-kicker">Connect</p>
            <h2>Contact</h2>
            <p>Email: <a href="mailto:vitalserveinitiative@gmail.com">vitalserveinitiative@gmail.com</a></p>
            <ul className="social-links">
              <li><a href="https://www.youtube.com/@VitalServeInitiative" target="_blank" rel="noreferrer">YouTube</a></li>
              <li><a href="https://www.instagram.com/vitalserveinitiative/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@vitalserveinitiative" target="_blank" rel="noreferrer">TikTok</a></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
