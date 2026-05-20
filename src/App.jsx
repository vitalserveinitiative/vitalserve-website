import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion'
import {
  Bandage,
  Building2,
  Clock3,
  Droplets,
  FileText,
  HandHeart,
  HandHelping,
  Handshake,
  Heart,
  Instagram,
  Mail,
  Music2,
  Package,
  PackageOpen,
  ShieldCheck,
  SoapDispenserDroplet,
  Sparkles,
  SprayCan,
  Target,
  Users,
  Youtube,
} from 'lucide-react'
import { useState } from 'react'
import './App.css'

const LOGO_SRC = '/vitalserve-logo.png'
const EASE = [0.22, 1, 0.36, 1]
const viewportOnce = { once: true, amount: 0.15 }

const smoothTransition = { duration: 0.62, ease: EASE }
const quickTransition = { duration: 0.28, ease: EASE }

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: smoothTransition },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: smoothTransition },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: smoothTransition },
}

const slideLeft = {
  hidden: { opacity: 0, x: -34 },
  visible: { opacity: 1, x: 0, transition: smoothTransition },
}

const slideRight = {
  hidden: { opacity: 0, x: 34 },
  visible: { opacity: 1, x: 0, transition: smoothTransition },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
}

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

const navbarDrop = {
  hidden: { opacity: 0, y: -18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

const cardHover = {
  y: -7,
  scale: 1.015,
  boxShadow: '0 22px 46px rgba(31, 94, 191, 0.14)',
  transition: quickTransition,
}

const buttonHover = {
  y: -3,
  scale: 1.025,
  boxShadow: '0 16px 28px rgba(18, 59, 122, 0.2)',
  transition: quickTransition,
}

const buttonTap = {
  scale: 0.97,
  y: 0,
  transition: { duration: 0.16, ease: EASE },
}

const kitItemMotion = {
  inactive: {
    y: 0,
    scale: 1,
    boxShadow: '0 8px 18px rgba(31, 94, 191, 0.08)',
    transition: quickTransition,
  },
  active: {
    y: -6,
    scale: 1.04,
    boxShadow: '0 18px 34px rgba(18, 167, 181, 0.24)',
    transition: quickTransition,
  },
}

const kitDetailMotion = {
  hidden: { opacity: 0, y: 12, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE } },
  exit: { opacity: 0, y: -10, scale: 0.985, transition: { duration: 0.18, ease: EASE } },
}

const kitItems = [
  {
    title: 'Toothbrush',
    tag: 'Oral Care',
    description: 'Supports basic daily oral hygiene and helps recipients maintain a cleaner routine.',
    Icon: Sparkles,
  },
  {
    title: 'Toothpaste',
    tag: 'Oral Care',
    description: 'Paired with a toothbrush to support simple, everyday dental care.',
    Icon: Droplets,
  },
  {
    title: 'Soap',
    tag: 'Hygiene',
    description: 'A basic hygiene essential for handwashing, cleanliness, and daily care.',
    Icon: SoapDispenserDroplet,
  },
  {
    title: 'Deodorant',
    tag: 'Comfort',
    description: 'Helps provide comfort, confidence, and dignity throughout the day.',
    Icon: SprayCan,
  },
  {
    title: 'Wipes',
    tag: 'Quick Clean',
    description: 'Useful for quick cleaning when access to showers or sinks may be limited.',
    Icon: PackageOpen,
  },
  {
    title: 'Tissues',
    tag: 'Daily Care',
    description: 'A simple everyday item for comfort, cleanliness, and personal care.',
    Icon: FileText,
  },
  {
    title: 'Hand Sanitizer',
    tag: 'Hand Hygiene',
    description: 'Helps support hand hygiene when soap and water are not immediately available.',
    Icon: Droplets,
  },
  {
    title: 'Bandages',
    tag: 'Basic First Aid',
    description: 'Provides basic support for small cuts, scrapes, or minor everyday needs.',
    Icon: Bandage,
  },
  {
    title: 'Note Card',
    tag: 'Encouragement',
    description: 'A short message of support to remind each recipient that they are valued.',
    Icon: Mail,
  },
]

const kitVisualChips = [
  { label: 'Hygiene', className: 'chip-one' },
  { label: 'Wellness', className: 'chip-two' },
  { label: 'Dignity', className: 'chip-three' },
  { label: 'Hand Hygiene', className: 'chip-four' },
]

const founders = [
  {
    name: 'Vedswaroop Reddy Yadanaparthi',
    role: 'Co-Founder / Website & Operations',
    image: '/team/vedswaroop.jpg',
  },
  {
    name: 'Ayman Mohammedy',
    role: 'Co-Founder / Outreach & Community Partnerships',
    image: '/team/ayman.png',
  },
  {
    name: 'Krish Koukuntla',
    role: 'Co-Founder / Projects & Volunteer Coordination',
    image: '/team/krish.png',
  },
]

const values = [
  {
    title: 'Dignity',
    text: 'We believe everyone deserves respectful, reliable support in everyday life.',
    Icon: Heart,
  },
  {
    title: 'Practical Support',
    text: 'We focus on useful essentials people can immediately put to use.',
    Icon: Package,
  },
  {
    title: 'Local Partnerships',
    text: 'We work with nearby community partners to deliver support responsibly.',
    Icon: Handshake,
  },
]

const projectGoals = [
  { text: '100 VitalCare Kits', Icon: Target },
  { text: '1 local community partner', Icon: Building2 },
  { text: 'Student volunteers', Icon: Users },
  { text: 'Safe hygiene and basic wellness supplies only', Icon: ShieldCheck },
]

const involvementCards = [
  { title: 'Volunteer', text: 'Join kit-packing days, sorting events, and outreach efforts.', Icon: HandHelping },
  { title: 'Donate Supplies', text: 'Contribute new hygiene and basic wellness items for care kits.', Icon: Heart },
  { title: 'Organize a Drive', text: 'Host a school, workplace, or community supply drive.', Icon: HandHeart },
  { title: 'Partner With Us', text: 'Collaborate as a local organization to reach more neighbors.', Icon: Handshake },
]

const impactStats = [
  { label: 'Kits Delivered', value: '0', Icon: Package },
  { label: 'Volunteers', value: '0', Icon: Users },
  { label: 'Service Hours', value: '0', Icon: Clock3 },
  { label: 'Partner Organizations', value: '0', Icon: Building2 },
]

const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/@VitalServeInitiative', Icon: Youtube },
  { label: 'Instagram', href: 'https://www.instagram.com/vitalserveinitiative/', Icon: Instagram },
  { label: 'TikTok', href: 'https://www.tiktok.com/@vitalserveinitiative', Icon: Music2 },
]

function AnimatedLink({ className, children, ...props }) {
  return (
    <motion.a className={className} whileHover={buttonHover} whileTap={buttonTap} {...props}>
      {children}
    </motion.a>
  )
}

function LogoMark({ large = false }) {
  return (
    <motion.span
      className={`logo-mark ${large ? 'logo-mark-lg' : ''}`}
      aria-hidden="true"
      whileHover={{ scale: large ? 1.04 : 1.08, rotate: large ? 0 : -2 }}
      transition={quickTransition}
    >
      <img src={LOGO_SRC} alt="" />
    </motion.span>
  )
}

function KitItemButton({ item, isActive, onActivate }) {
  const Icon = item.Icon

  return (
    <motion.button
      type="button"
      className={`kit-item-card ${isActive ? 'active' : ''}`}
      variants={kitItemMotion}
      animate={isActive ? 'active' : 'inactive'}
      whileHover={{ y: isActive ? -7 : -4, scale: isActive ? 1.045 : 1.015 }}
      whileTap={{ scale: 0.975 }}
      onClick={onActivate}
      onFocus={onActivate}
      aria-pressed={isActive}
    >
      <motion.span className="kit-item-icon" aria-hidden="true" whileHover={{ rotate: -5, scale: 1.08 }}>
        <Icon size={18} />
      </motion.span>
      <strong>{item.title}</strong>
      <small>{item.tag}</small>
      <motion.span
        className="kit-active-indicator"
        aria-hidden="true"
        animate={isActive ? { scale: [1, 1.35, 1], opacity: 1 } : { scale: 1, opacity: 0.45 }}
        transition={{ duration: 1.4, ease: EASE, repeat: isActive ? Infinity : 0, repeatDelay: 1 }}
      />
    </motion.button>
  )
}

function KitContentsSection({ reduceMotion }) {
  const [activeKitItem, setActiveKitItem] = useState(0)

  const activeItem = kitItems[activeKitItem]
  const ActiveIcon = activeItem.Icon

  return (
    <motion.section
      id="kit-contents"
      className="kit-contents-section section"
      aria-labelledby="kit-contents-title"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <div className="container">
        <motion.div className="kit-contents-shell" variants={scaleIn}>
          <motion.div className="kit-contents-header" variants={fadeUp}>
            <p className="section-kicker">VITALCARE KIT</p>
            <h2 id="kit-contents-title">What's Inside a VitalCare Kit</h2>
            <p>
              Each kit focuses on practical hygiene and basic wellness essentials that support comfort, dignity, and everyday care.
            </p>
          </motion.div>

          <div className="kit-contents-layout">
            <motion.div
              className="kit-visual-card"
              aria-hidden="true"
              variants={slideLeft}
              whileHover={{ y: -5, scale: 1.008 }}
              transition={quickTransition}
            >
              <motion.div className="kit-visual-glow" aria-hidden="true" />
              <motion.div className="kit-visual-topline" variants={scaleIn}>
                <img src={LOGO_SRC} alt="" />
                <span>VitalServe packed kit preview</span>
              </motion.div>

              <motion.div
                className="kit-bag-shape"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6.5, ease: EASE, repeat: Infinity }}
              >
                <span className="kit-bag-handle" />
                <span className="kit-bag-logo">
                  <img src={LOGO_SRC} alt="" />
                </span>
                <strong>VitalCare Kit</strong>
                <span>Practical hygiene and basic wellness essentials</span>
              </motion.div>

              {kitVisualChips.map((chip) => (
                <span
                  key={chip.label}
                  className={`floating-kit-chip ${chip.className}`}
                >
                  {chip.label}
                </span>
              ))}

              <motion.div className="kit-preview-strip" variants={staggerContainer}>
                {['Student-led', 'Community-centered', 'Built with care'].map((chip) => (
                  <motion.span key={chip} variants={scaleIn} whileHover={{ y: -2, scale: 1.02 }}>
                    {chip}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="kit-interaction-panel" variants={slideRight}>
              <AnimatePresence mode="wait">
                <motion.article
                  className="kit-detail-card"
                  key={activeItem.title}
                  variants={kitDetailMotion}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.span className="kit-detail-icon" aria-hidden="true" initial={{ scale: 0.85 }} animate={{ scale: 1 }}>
                    <ActiveIcon size={26} />
                  </motion.span>
                  <p className="kit-detail-tag">{activeItem.tag}</p>
                  <h3>{activeItem.title}</h3>
                  <p>{activeItem.description}</p>
                </motion.article>
              </AnimatePresence>

              <motion.div className="kit-item-grid" role="list" aria-label="VitalCare Kit items" variants={staggerContainer}>
                {kitItems.map((item, index) => (
                  <motion.div key={item.title} variants={scaleIn}>
                    <KitItemButton
                      item={item}
                      isActive={activeKitItem === index}
                      onActivate={() => setActiveKitItem(index)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div className="kit-cta-row" variants={fadeUp}>
            <p className="kit-cta-title">Want to help prepare VitalCare Kits?</p>
            <p className="kit-cta-text">Volunteers can help collect supplies, pack kits, organize drives, or connect us with local partners.</p>
            <div className="kit-cta-actions">
              <AnimatedLink className="btn btn-primary" href="#involved">Volunteer With Us</AnimatedLink>
              <AnimatedLink className="btn btn-secondary" href="mailto:vitalserveinitiative@gmail.com">Partner With Us</AnimatedLink>
            </div>
          </motion.div>

          <motion.div className="kit-summary-card" variants={scaleIn} whileHover={{ y: -3 }}>
            <h3>Simple items. Real support.</h3>
            <p>VitalCare Kits are built around practical essentials that can help support hygiene, comfort, and dignity.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

function FoundingTeamSection() {
  return (
    <motion.section
      id="team"
      className="section team-section"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <div className="container">
        <motion.div className="team-header" variants={fadeUp}>
          <p className="section-kicker">OUR TEAM</p>
          <h2>Meet the Founding Team</h2>
          <p>
            VitalServe Initiative is led by students working together to organize practical service projects,
            care kit efforts, and community outreach.
          </p>
        </motion.div>

        <motion.div className="founder-grid" variants={staggerContainer}>
          {founders.map((founder) => (
            <motion.article className="founder-card" key={founder.name} variants={scaleIn} whileHover={cardHover}>
              <motion.div className="founder-photo-wrap" variants={scaleIn} whileHover={{ scale: 1.04 }}>
                <img src={founder.image} alt={founder.name} className="founder-photo" loading="lazy" />
              </motion.div>
              <div className="founder-card-body">
                <h3>{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
                <p>Helping build VitalServe through consistent service, planning, and community action.</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="team-credibility-row" aria-label="VitalServe values" variants={staggerContainer}>
          {['Student-led', 'Community-centered', 'Focused on practical essentials', 'Built with consistency and care'].map((value) => (
            <motion.span key={value} variants={scaleIn} whileHover={{ y: -2, scale: 1.02 }}>
              {value}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

function App() {
  const reduceMotion = useReducedMotion()

  return (
    <MotionConfig reducedMotion="user">
      <div className="site">
        <motion.div
          className="ambient-orb ambient-orb-one"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { x: [0, 28, -14, 0], y: [0, -18, 12, 0], scale: [1, 1.08, 0.98, 1] }}
          transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          className="ambient-orb ambient-orb-two"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { x: [0, -24, 18, 0], y: [0, 22, -10, 0], scale: [1, 0.96, 1.08, 1] }}
          transition={{ duration: 22, ease: 'easeInOut', repeat: Infinity }}
        />

        <motion.header className="navbar" id="top" initial="hidden" animate="visible" variants={navbarDrop}>
          <div className="container navbar-content">
            <a className="brand" href="#top" aria-label="VitalServe Initiative home">
              <LogoMark />
              <span>VitalServe Initiative</span>
            </a>
            <nav aria-label="Main navigation">
              <ul className="nav-links">
                {[
                  ['About', '#about'],
                  ['Project', '#project'],
                  ['Get Involved', '#involved'],
                  ['Impact', '#impact'],
                  ['Team', '#team'],
                  ['Contact', '#contact'],
                ].map(([label, href]) => (
                  <motion.li key={href} whileHover={{ y: -2 }} transition={quickTransition}>
                    <a href={href}>{label}</a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.header>

        <main>
          <motion.section className="hero section" initial="hidden" animate="visible" variants={heroContainer}>
            <motion.div
              className="hero-gradient"
              aria-hidden="true"
              animate={reduceMotion ? undefined : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 16, ease: 'easeInOut', repeat: Infinity }}
            />
            <motion.div className="container hero-content" variants={heroContainer}>
              <motion.p className="eyebrow" variants={fadeUp}>Student-Led Service Initiative</motion.p>
              <motion.div className="hero-logo-wrap" variants={scaleIn}>
                <LogoMark large />
              </motion.div>
              <motion.h1 variants={fadeUp}>Care with dignity, one VitalCare Kit at a time.</motion.h1>
              <motion.p className="subheadline" variants={fadeUp}>Student-led service supporting hygiene and basic wellness access.</motion.p>
              <motion.p className="hero-text" variants={fadeUp}>
                We support underserved and unhoused communities through care kit efforts, donation drives,
                and local partnerships focused on practical everyday essentials.
              </motion.p>
              <motion.div className="hero-actions" variants={fadeUp}>
                <AnimatedLink className="btn btn-primary" href="#involved">Volunteer With Us</AnimatedLink>
                <AnimatedLink className="btn btn-secondary" href="#contact">Partner With Us</AnimatedLink>
              </motion.div>
              <motion.div className="hero-highlights" variants={staggerContainer}>
                {[
                  [ShieldCheck, 'Student-led'],
                  [Handshake, 'Community-centered'],
                  [Package, 'Focused on practical essentials'],
                  [HandHeart, 'Built with consistency and care'],
                ].map(([Icon, text]) => (
                  <motion.div key={text} variants={scaleIn} whileHover={{ y: -3, scale: 1.025 }}>
                    <Icon size={16} /> {text}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            id="about"
            className="section compact-top"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.div className="container card layered-card" variants={fadeUp} whileHover={{ y: -3 }}>
              <p className="section-kicker">Our Mission</p>
              <h2>About VitalServe</h2>
              <p>
                VitalServe Initiative is a student-led service initiative focused on practical, community-based support.
                Our mission is to improve access to hygiene and basic wellness supplies by coordinating volunteers,
                collecting needed items, and working with local partners to serve people with dignity and consistency.
              </p>
              <motion.div className="mini-grid" variants={staggerContainer}>
                {values.map(({ title, text, Icon }) => (
                  <motion.article className="mini-card" key={title} variants={scaleIn} whileHover={cardHover}>
                    <motion.span className="motion-icon-wrap" whileHover={{ scale: 1.12, rotate: -5 }}>
                      <Icon className="mini-icon" />
                    </motion.span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            id="project"
            className="section compact-top"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <div className="container grid-two">
              <motion.div className="card layered-card" variants={slideLeft} whileHover={{ y: -3 }}>
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
              </motion.div>

              <motion.aside className="kit-visual card" aria-label="VitalServe first goal overview" variants={slideRight} whileHover={cardHover}>
                <p className="section-kicker">Our First Goal</p>
                <h3>Starting with a focused, honest launch.</h3>
                <motion.ul className="goal-list" variants={staggerContainer}>
                  {projectGoals.map(({ text, Icon }) => (
                    <motion.li key={text} variants={scaleIn} whileHover={{ x: 4, borderColor: 'rgba(31, 156, 167, 0.35)' }}>
                      <Icon size={16} /> {text}
                    </motion.li>
                  ))}
                </motion.ul>
                <p className="goal-note">This is our first target and is not yet completed.</p>
              </motion.aside>
            </div>
          </motion.section>

          <KitContentsSection reduceMotion={reduceMotion} />

          <motion.section
            id="involved"
            className="section section-tight-top"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <div className="container">
              <motion.p className="section-kicker" variants={fadeUp}>Community Action</motion.p>
              <motion.h2 variants={fadeUp}>Get Involved</motion.h2>
              <motion.p className="section-subtitle" variants={fadeUp}>Small actions from many people can create meaningful local impact.</motion.p>
              <motion.div className="card-grid" variants={staggerContainer}>
                {involvementCards.map(({ title, text, Icon }) => (
                  <motion.article className="action-card" key={title} variants={scaleIn} whileHover={cardHover}>
                    <motion.span className="motion-icon-wrap" whileHover={{ scale: 1.13, rotate: -6 }}>
                      <Icon aria-hidden="true" className="card-icon" />
                    </motion.span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="impact"
            className="section"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <div className="container">
              <motion.p className="section-kicker" variants={fadeUp}>Transparency</motion.p>
              <motion.h2 variants={fadeUp}>Impact Tracker</motion.h2>
              <motion.p className="section-subtitle" variants={fadeUp}>We are just getting started, so our numbers currently remain at zero.</motion.p>
              <motion.div className="stats-grid" variants={staggerContainer}>
                {impactStats.map(({ label, value, Icon }) => (
                  <motion.div className="stat-card" key={label} variants={scaleIn} whileHover={cardHover}>
                    <motion.span className="motion-icon-wrap" whileHover={{ scale: 1.12 }}>
                      <Icon aria-hidden="true" className="stat-icon" />
                    </motion.span>
                    <span>{label}</span>
                    <motion.strong variants={scaleIn}>{value}</motion.strong>
                    <span className="stat-progress-track" aria-hidden="true">
                      <motion.span className="stat-progress-bar" initial={{ scaleX: 0 }} whileInView={{ scaleX: 0 }} viewport={viewportOnce} />
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          <motion.section className="section" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={scaleIn}>
            <motion.div className="container safety-note" whileHover={{ scale: 1.006 }}>
              <motion.h2 variants={fadeUp}><ShieldCheck size={20} /> Safety Note</motion.h2>
              <motion.p variants={fadeUp}>
                VitalServe only collects and distributes safe hygiene and basic wellness supplies. We do not collect
                or distribute medications, prescription items, needles, or used medical equipment.
              </motion.p>
            </motion.div>
          </motion.section>

          <FoundingTeamSection />

          <motion.section
            id="contact"
            className="section"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.div className="container card layered-card" variants={fadeUp} whileHover={{ y: -3 }}>
              <p className="section-kicker">Connect</p>
              <h2>Contact</h2>
              <p>Email: <a href="mailto:vitalserveinitiative@gmail.com">vitalserveinitiative@gmail.com</a></p>
              <motion.ul className="social-links" variants={staggerContainer}>
                {socialLinks.map(({ label, href, Icon }) => (
                  <motion.li key={label} variants={scaleIn}>
                    <motion.a href={href} target="_blank" rel="noreferrer" whileHover={buttonHover} whileTap={buttonTap}>
                      <Icon size={18} /> {label}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.section>
        </main>
      </div>
    </MotionConfig>
  )
}

export default App
