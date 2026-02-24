import Link from "next/link"

export default function Journal() {
  return (
    <div className="container">
      <nav>
        <div className="logo">NIHAL©</div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/works">Works</Link>
          <Link href="/studio">About</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="hero">
        <h1>JOURNAL</h1>
        <div className="hero-meta">
          <p>
            Thoughts on AI, product building, and the decisions that shape what gets shipped.
            Ideas in progress, lessons from the field.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="service-row">
          <span className="service-num">Upcoming</span>
          <h2>Why Most AI Features Fail</h2>
          <span className="service-num">↗</span>
        </div>
        <div className="service-row">
          <span className="service-num">Upcoming</span>
          <h2>The Constraint is the Feature</h2>
          <span className="service-num">↗</span>
        </div>
        <div className="service-row">
          <span className="service-num">Upcoming</span>
          <h2>Shipping Over Perfecting</h2>
          <span className="service-num">↗</span>
        </div>
        <div className="service-row">
          <span className="service-num">Upcoming</span>
          <h2>How I Structure Product Decisions</h2>
          <span className="service-num">↗</span>
        </div>
        <div className="service-row">
          <span className="service-num">Upcoming</span>
          <h2>Building With LLMs in Production</h2>
          <span className="service-num">↗</span>
        </div>
        <div className="service-row">
          <span className="service-num">Upcoming</span>
          <h2>GTM Is a Product Problem</h2>
          <span className="service-num">↗</span>
        </div>
      </section>

      <footer>
        <div className="cta">
          <h2>
            HIRE
            <br />
            ME
          </h2>
        </div>
        <div className="footer-bottom">
          <div>Nihal Pardeshi © 2026</div>
          <div>Pune / Remote</div>
          <div>
            <a href="https://www.linkedin.com/in/nihaallp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {" / "}
            <a href="https://github.com/NihaallX" target="_blank" rel="noopener noreferrer">GitHub</a>
            {" / "}
            <a href="https://www.instagram.com/nihaallxd/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
