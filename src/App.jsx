import {
  Bandage,
  Building2,
  Clock3,
  CircleDot,
  Droplets,
  HandHeart,
  HandHelping,
  Handshake,
  Heart,
  FileText,
  Instagram,
  Mail,
  Music2,
  Package,
  PackageOpen,
  PillBottle,
  ShieldCheck,
  SoapDispenserDroplet,
  Sparkles,
  SprayCan,
  Target,
  Users,
  Youtube,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import './App.css'


const kitItems = [
  { title: 'Toothbrush', tag: 'Oral Care', description: 'Supports basic daily oral hygiene and helps recipients maintain a cleaner routine.', icon: '🪥' },
  { title: 'Toothpaste', tag: 'Oral Care', description: 'Paired with a toothbrush to support simple, everyday dental care.', icon: '🦷' },
  { title: 'Soap', tag: 'Hygiene', description: 'A basic hygiene essential for handwashing, cleanliness, and daily care.', icon: '🧼' },
  { title: 'Deodorant', tag: 'Comfort', description: 'Helps provide comfort, confidence, and dignity throughout the day.', icon: '✨' },
  { title: 'Wipes', tag: 'Quick Clean', description: 'Useful for quick cleaning when access to showers or sinks may be limited.', icon: '🧻' },
  { title: 'Tissues', tag: 'Daily Care', description: 'A simple everyday item for comfort, cleanliness, and personal care.', icon: '📄' },
  { title: 'Hand Sanitizer', tag: 'Hand Hygiene', description: 'Helps support hand hygiene when soap and water are not immediately available.', icon: '💧' },
  { title: 'Bandages', tag: 'Basic First Aid', description: 'Provides basic support for small cuts, scrapes, or minor everyday needs.', icon: '🩹' },
  { title: 'Note Card', tag: 'Encouragement', description: 'A short message of support to remind each recipient that they are valued.', icon: '💌' },
]

function KitContentsSection() {
  const [activeKitItem, setActiveKitItem] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveKitItem((current) => (current + 1) % kitItems.length)
    }, 4500)

    return () => clearInterval(id)
  }, [])

  const activeItem = kitItems[activeKitItem]

  return (
    <section id="kit-contents" className="kit-contents-section section reveal" aria-labelledby="kit-contents-title">
      <div className="container">
        <div className="kit-contents-shell">
          <div className="kit-contents-header">
            <p className="section-kicker">VITALCARE KIT</p>
            <h2 id="kit-contents-title">What&apos;s Inside a VitalCare Kit</h2>
            <p>
              Each kit focuses on practical hygiene and basic wellness essentials that support comfort, dignity, and everyday care.
            </p>
          </div>

          <div className="kit-contents-layout">
            <div className="kit-visual-card" aria-hidden="true">
              <div className="kit-badge">VS</div>
              <div className="kit-bag-shape">
                <strong>VitalCare Kit</strong>
                <span>Practical essentials</span>
              </div>
              <span className="floating-kit-chip chip-one">Hygiene</span>
              <span className="floating-kit-chip chip-two">Wellness</span>
              <span className="floating-kit-chip chip-three">Dignity</span>
            </div>

            <div>
              <article className="kit-detail-card" key={activeItem.title}>
                <span className="kit-detail-icon" aria-hidden="true">{activeItem.icon}</span>
                <p className="kit-detail-tag">{activeItem.tag}</p>
                <h3>{activeItem.title}</h3>
                <p>{activeItem.description}</p>
              </article>

              <div className="kit-item-grid" role="list" aria-label="VitalCare Kit items">
                {kitItems.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    className={`kit-item-card ${activeKitItem === index ? 'active' : ''}`}
                    onClick={() => setActiveKitItem(index)}
                    onMouseEnter={() => setActiveKitItem(index)}
                    aria-pressed={activeKitItem === index}
                  >
                    <span className="kit-item-icon" aria-hidden="true">{item.icon}</span>
                    <strong>{item.title}</strong>
                    <small>{item.tag}</small>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="kit-cta-row">
            <p className="kit-cta-title">Want to help prepare VitalCare Kits?</p>
            <p className="kit-cta-text">Volunteers can help collect supplies, pack kits, organize drives, or connect us with local partners.</p>
            <div className="kit-cta-actions">
              <a className="btn btn-primary" href="#involved">Volunteer With Us</a>
              <a className="btn btn-secondary" href="mailto:vitalserveinitiative@gmail.com">Partner With Us</a>
            </div>
          </div>

          <div className="kit-summary-card">
            <h3>Simple items. Real support.</h3>
            <p>VitalCare Kits are built around practical essentials that can help support hygiene, comfort, and dignity.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoMark({ large = false }) {
  return (
    <span className={`logo-mark ${large ? 'logo-mark-lg' : ''}`} aria-hidden="true">
      <span className="logo-ring" />
      <span className="logo-heart"><Heart size={large ? 12 : 8} /></span>
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

        <section id="about" className="section reveal compact-top">
          <div className="container card layered-card">
            <p className="section-kicker">Our Mission</p>
            <h2>About VitalServe</h2>
            <p>
              VitalServe Initiative is a student-led service initiative focused on practical, community-based support.
              Our mission is to improve access to hygiene and basic wellness supplies by coordinating volunteers,
              collecting needed items, and working with local partners to serve people with dignity and consistency.
            </p>
            <div className="mini-grid">
              <article className="mini-card"><Heart className="mini-icon" /><h3>Dignity</h3><p>We believe everyone deserves respectful, reliable support in everyday life.</p></article>
              <article className="mini-card"><Package className="mini-icon" /><h3>Practical Support</h3><p>We focus on useful essentials people can immediately put to use.</p></article>
              <article className="mini-card"><Handshake className="mini-icon" /><h3>Local Partnerships</h3><p>We work with nearby community partners to deliver support responsibly.</p></article>
            </div>
          </div>
        </section>

        <section id="project" className="section reveal compact-top">
          <div className="container grid-two">
            <div className="card layered-card">
              <p className="section-kicker">Current Project</p>
              <h2>VitalCare Kits</h2>
              <p>
                Each VitalCare Kit is packed with useful, everyday items like toothbrushes, toothpaste, soap,
                deodorant, wipes, tissues, hand sanitizer, bandages, and an encouraging note card to provide
                simple practical support.
              </p>
              <p>
                The section below highlights each kit item with a simple interactive view so supporters can quickly understand what goes into every VitalCare Kit.
              </p>
            </div>

            <aside className="kit-visual card" aria-label="VitalServe first goal overview">
              <p className="section-kicker">Our First Goal</p>
              <h3>Starting with a focused, honest launch.</h3>
              <ul className="goal-list">
                <li><Target size={16} /> 100 VitalCare Kits</li>
                <li><Building2 size={16} /> 1 local community partner</li>
                <li><Users size={16} /> Student volunteers</li>
                <li><ShieldCheck size={16} /> Safe hygiene and basic wellness supplies only</li>
              </ul>
              <p className="goal-note">This is our first target and is not yet completed.</p>
            </aside>
          </div>
        </section>

        <KitContentsSection />

        <section id="involved" className="section reveal section-tight-top">
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
          </div>
        </section>

        <section className="section reveal">
          <div className="container safety-note">
            <h2><ShieldCheck size={20} /> Safety Note</h2>
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
              <li><a href="https://www.youtube.com/@VitalServeInitiative" target="_blank" rel="noreferrer"><Youtube size={18} /> YouTube</a></li>
              <li><a href="https://www.instagram.com/vitalserveinitiative/" target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a></li>
              <li><a href="https://www.tiktok.com/@vitalserveinitiative" target="_blank" rel="noreferrer"><Music2 size={18} /> TikTok</a></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
