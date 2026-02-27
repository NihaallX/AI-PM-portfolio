import Link from "next/link"

export default function Works() {
  return (
    <div className="container">
      <nav>
        <div className="logo">NIHAL©</div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/works">Works</Link>
          <Link href="/studio">About</Link>
          <Link href="/journal">Essays</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="hero">
        <h1>
          SELECTED
          <br />
          WORKS
        </h1>
        <div className="hero-meta">
          <p>
            A curated collection of projects built at the intersection of AI, product thinking, and deliberate
            decision-making. Each one started with a clear problem and a bias for shipping.
          </p>
        </div>
      </section>

      <section className="project-grid">
        <div className="project-card card-1">
          <a href="https://www.relayx.tech/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className="img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                alt="RelayX – AI Voice Calling Platform"
              />
            </div>
            <div className="project-info">
              <h3>RelayX ↗</h3>
              <p>AI Voice Platform / Product &amp; Engineering / 2025</p>
              <p style={{ fontSize: "14px", color: "#555555", lineHeight: "1.7", marginTop: "12px" }}>
                AI-first outbound voice agent for SMBs. Reduced conversation latency by 89% through
                system-level optimization. Built multi-step AI workflows (speech → reasoning → action)
                with outcome tracking and analytics.
              </p>
            </div>
          </a>
        </div>

        <div className="project-card card-2">
          <a href="https://ratemyprof.me/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className="img-wrapper" style={{ aspectRatio: "3/4" }}>
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800"
                alt="RateMyProf India"
              />
            </div>
            <div className="project-info">
              <h3>RateMyProf India ↗</h3>
              <p>Web Product / SEO &amp; Trust / 2024</p>
              <p style={{ fontSize: "14px", color: "#555555", lineHeight: "1.7", marginTop: "12px" }}>
                Professor review platform serving 500+ professors. Achieved 85+ PageSpeed and top-6
                SEO ranking. Reduced invalid submissions by 85% via automated moderation.
              </p>
            </div>
          </a>
        </div>

        <div className="project-card card-3">
          <a href="https://github.com/NihaallX/Intern-stellar" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className="img-wrapper" style={{ aspectRatio: "1/1" }}>
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
                alt="Intern-stellar"
              />
            </div>
            <div className="project-info">
              <h3>Intern-stellar ↗</h3>
              <p>AI / Job Discovery / 2026</p>
              <p style={{ fontSize: "14px", color: "#555555", lineHeight: "1.7", marginTop: "12px" }}>
                AI-powered job discovery system that scrapes, scores, and emails relevant AI engineering
                roles. Automated end-to-end pipeline from discovery to delivery.
              </p>
            </div>
          </a>
        </div>

        <div className="project-card card-4">
          <Link href="/works/evara" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className="img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1687875496747-60dfbc703570?auto=format&fit=crop&q=80&w=1200"
                alt="Evara — Menopause Wellness Companion"
              />
            </div>
            <div className="project-info">
              <h3>Evara ↗</h3>
              <p>Product Concept / Health / Women&apos;s Wellness / 2026</p>
              <p style={{ fontSize: "14px", color: "#555555", lineHeight: "1.7", marginTop: "12px" }}>
                AI-powered menopause wellness companion. Personalized symptom tracking,
                behavioral nudges, and contextual support designed around women&apos;s lived experience.
              </p>
            </div>
          </Link>
        </div>

        <div className="project-card card-1">
          <a href="https://stock-intelligence-copilot.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className="img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200"
                alt="StockIntelligenceCopilot"
              />
            </div>
            <div className="project-info">
              <h3>StockIntelligenceCopilot ↗</h3>
              <p>AI / Finance / Data / 2025</p>
              <p style={{ fontSize: "14px", color: "#555555", lineHeight: "1.7", marginTop: "12px" }}>
                AI-assisted stock market analysis with probabilistic insights and explainable
                reasoning. Makes complex market data accessible and interpretable.
              </p>
            </div>
          </a>
        </div>

        <div className="project-card card-2">
          <a href="https://www.datehelp.tech/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className="img-wrapper" style={{ aspectRatio: "3/4" }}>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
                alt="datehelp"
              />
            </div>
            <div className="project-info">
              <h3>datehelp ↗</h3>
              <p>AI / Consumer / Gen Z / 2025</p>
              <p style={{ fontSize: "14px", color: "#555555", lineHeight: "1.7", marginTop: "12px" }}>
                AI-powered dating profile roast and optimization tool for Gen Z. Photo ranking,
                bio rewriting, and glow-up suggestions driven by LLM analysis.
              </p>
            </div>
          </a>
        </div>
      </section>

      <footer>
        <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="cta">
          <h2>
            HIRE
            <br />
            ME
          </h2>
        </div>
        </Link>
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
