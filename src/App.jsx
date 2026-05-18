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
  {
    title: 'Toothbrush',
    description: 'Supports basic daily oral hygiene and helps recipients maintain a cleaner, healthier routine.',
    tag: 'Hygiene Essential',
    Icon: Sparkles,
    position: 'toothbrush',
  },
  {
    title: 'Toothpaste',
    description: 'Paired with a toothbrush to support simple oral care and everyday hygiene.',
    tag: 'Oral Care',
    Icon: PillBottle,
    position: 'toothpaste',
  },
  {
    title: 'Soap',
    description: 'A basic hygiene essential for washing hands and maintaining cleanliness.',
    tag: 'Hygiene Essential',
    Icon: SoapDispenserDroplet,
    position: 'soap',
  },
  {
    title: 'Deodorant',
    description: 'Helps provide comfort, confidence, and dignity throughout the day.',
    tag: 'Comfort & Dignity',
    Icon: SprayCan,
    position: 'deodorant',
  },
  {
    title: 'Wipes',
    description: 'Useful for quick cleaning when access to showers or sinks may be limited.',
    tag: 'Everyday Care',
    Icon: PackageOpen,
    position: 'wipes',
  },
  {
    title: 'Tissues',
    description: 'A simple everyday item for comfort, cleanliness, and personal care.',
    tag: 'Personal Care',
    Icon: FileText,
    position: 'tissues',
  },
  {
    title: 'Hand Sanitizer',
    description: 'Helps support hand hygiene when soap and water are not immediately available.',
    tag: 'Hand Hygiene',
    Icon: Droplets,
    position: 'sanitizer',
  },
  {
    title: 'Bandages',
    description: 'Provides basic first-aid support for small cuts, scrapes, or minor everyday needs.',
    tag: 'Basic Wellness',
    Icon: Bandage,
    position: 'bandages',
  },
  {
    title: 'Note Card',
    description: 'A short message of encouragement to remind each recipient that they are valued.',
    tag: 'Encouragement',
    Icon: Mail,
    position: 'note-card',
  },
]

function KitItemCard({ item, index, isActive }) {
  const { Icon } = item

  return (
    <article
      className={`kit-item-card kit-item-${item.position} ${isActive ? 'active' : ''}`}
      aria-label={`${item.title}: ${item.description}`}
    >
      <span className="kit-item-number">{String(index + 1).padStart(2, '0')}</span>
      <span className="kit-item-icon" aria-hidden="true"><Icon size={21} /></span>
      <strong>{item.title}</strong>
      <small>{item.tag}</small>
    </article>
  )
}

function KitVisual({ activeItem }) {
  const active = kitItems[activeItem] ?? kitItems[0]
  const ActiveIcon = active.Icon

  return (
    <div className="kit-visual-sticky" aria-label="Interactive VitalCare Kit contents visual">
      <div className="kit-visual-shell">
        <div className="kit-connector" aria-hidden="true" />
        <div className="kit-bag-visual" role="img" aria-label="Illustration of a VitalServe VitalCare Kit bag">
          <div className="bag-cord" aria-hidden="true" />
          <div className="bag-logo"><LogoMark /></div>
          <span>VitalCare</span>
          <small>Hygiene + wellness essentials</small>
        </div>
        <div className="active-item-callout" aria-live="polite">
          <span className="kit-item-icon" aria-hidden="true"><ActiveIcon size={18} /></span>
          <div>
            <strong>{active.title}</strong>
            <small>{active.tag}</small>
          </div>
        </div>
        {kitItems.map((item, index) => (
          <KitItemCard key={item.title} item={item} index={index} isActive={activeItem === index} />
        ))}
      </div>
    </div>
  )
}

function ItemDetailPanel({ item, index, isActive, panelRef }) {
  const { Icon } = item

  return (
    <article
      ref={panelRef}
      className={`kit-detail-panel ${isActive ? 'active' : ''}`}
      data-kit-index={index}
      tabIndex="0"
    >
      <div className="kit-detail-icon" aria-hidden="true"><Icon size={24} /></div>
      <span className="kit-detail-number">{String(index + 1).padStart(2, '0')}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span className="kit-detail-tag"><CircleDot size={12} /> {item.tag}</span>
    </article>
  )
}

function KitContentsSection() {
  const [activeItem, setActiveItem] = useState(0)
  const itemRefs = useRef([])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          const nextIndex = Number(visibleEntries[0].target.dataset.kitIndex)
          setActiveItem(nextIndex)
        }
      },
      { threshold: [0.45, 0.6], rootMargin: '-35% 0px -35% 0px' },
    )

    itemRefs.current.forEach((panel) => {
      if (panel) observer.observe(panel)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="kit-contents" className="kit-showcase reveal" aria-labelledby="kit-showcase-title">
      <div className="kit-showcase-bg bg-one" aria-hidden="true" />
      <div className="kit-showcase-bg bg-two" aria-hidden="true" />
      <div className="container">
        <div className="kit-showcase-header">
          <p className="section-kicker">VitalCare Kit</p>
          <h2 id="kit-showcase-title">What&apos;s Inside a VitalCare Kit</h2>
          <p>
            Each kit is designed with practical hygiene and basic wellness essentials that support comfort,
            dignity, and everyday care.
          </p>
        </div>

        <div className="kit-showcase-layout">
          <KitVisual activeItem={activeItem} />
          <div className="kit-detail-list" aria-label="VitalCare Kit item details">
            {kitItems.map((item, index) => (
              <ItemDetailPanel
                key={item.title}
                item={item}
                index={index}
                isActive={activeItem === index}
                panelRef={(element) => { itemRefs.current[index] = element }}
              />
            ))}
          </div>
        </div>

        <div className="kit-summary-card">
          <div>
            <p className="section-kicker">Final View</p>
            <h3>Simple items. Real support.</h3>
            <p>VitalCare Kits focus on practical essentials that can help support hygiene, comfort, and dignity.</p>
          </div>
          <div className="kit-summary-actions">
            <a className="btn btn-primary" href="#involved">Volunteer With Us</a>
            <a className="btn btn-secondary" href="mailto:vitalserveinitiative@gmail.com">Partner With Us</a>
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
                The interactive guide below replaces a basic contents list with a calm scroll experience that
                explains how each essential supports hygiene, wellness, comfort, and dignity.
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
