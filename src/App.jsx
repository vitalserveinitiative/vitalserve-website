import './App.css'

function App() {
  return (
    <div className="site">
      <header className="navbar" id="top">
        <div className="container navbar-content">
          <a className="brand" href="#top" aria-label="VitalServe Initiative home">
            <span className="brand-mark">VS</span>
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
        <section className="hero section">
          <div className="container hero-content">
            <p className="eyebrow">Student-Led Service Initiative</p>
            <h1>VitalServe Initiative</h1>
            <p className="subheadline">Student-led service supporting hygiene and basic wellness access.</p>
            <p className="hero-text">
              We support underserved and unhoused communities by organizing care kit efforts, donation drives,
              and local partnerships that help neighbors access everyday wellness essentials.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#involved">Volunteer With Us</a>
              <a className="btn btn-secondary" href="#contact">Partner With Us</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container card">
            <h2>About VitalServe</h2>
            <p>
              VitalServe Initiative is a student-led service initiative focused on practical, community-based support.
              Our mission is to improve access to hygiene and basic wellness supplies by coordinating volunteers,
              collecting needed items, and working with local partners to serve people with dignity and consistency.
            </p>
          </div>
        </section>

        <section id="project" className="section">
          <div className="container card">
            <h2>Our First Project: VitalCare Kits</h2>
            <p>
              Our VitalCare Kits are designed to include useful everyday essentials such as toothbrushes,
              toothpaste, soap, deodorant, socks, wipes, tissues, hand sanitizer, and basic first-aid items.
              Each kit is packed to provide simple, practical support for people who need it most.
            </p>
          </div>
        </section>

        <section id="involved" className="section">
          <div className="container">
            <h2>Get Involved</h2>
            <div className="card-grid">
              <article className="action-card">
                <h3>Volunteer</h3>
                <p>Join kit-packing days, sorting events, and community outreach efforts.</p>
              </article>
              <article className="action-card">
                <h3>Donate Supplies</h3>
                <p>Contribute new hygiene and basic wellness items that go directly into care kits.</p>
              </article>
              <article className="action-card">
                <h3>Organize a Drive</h3>
                <p>Host a supply drive at your school, workplace, or community group.</p>
              </article>
              <article className="action-card">
                <h3>Partner With Us</h3>
                <p>Collaborate as a local organization to help us reach more neighbors in need.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="impact" className="section">
          <div className="container">
            <h2>Impact Tracker</h2>
            <div className="stats-grid">
              <div className="stat-card"><span>Kits Delivered</span><strong>0</strong></div>
              <div className="stat-card"><span>Volunteers</span><strong>0</strong></div>
              <div className="stat-card"><span>Service Hours</span><strong>0</strong></div>
              <div className="stat-card"><span>Partner Organizations</span><strong>0</strong></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container safety-note">
            <h2>Safety Note</h2>
            <p>
              VitalServe only collects and distributes safe hygiene and basic wellness supplies. We do not collect
              or distribute medications, prescription items, needles, or used medical equipment.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container card">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:vitalserveinitiative@gmail.com">vitalserveinitiative@gmail.com</a></p>
            <ul className="social-links">
              <li><a href="#" aria-label="TikTok">TikTok (coming soon)</a></li>
              <li><a href="#" aria-label="Instagram">Instagram (coming soon)</a></li>
              <li><a href="#" aria-label="YouTube">YouTube (coming soon)</a></li>
              <li><a href="#" aria-label="X/Twitter">X / Twitter (coming soon)</a></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
