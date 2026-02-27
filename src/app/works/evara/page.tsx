import Link from "next/link"

export default function EvaraCase() {
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

      <div className="post-header">
        <Link href="/works" className="back-link">← Works</Link>
        <p className="post-tag">Product / Health / Concept</p>
        <h1>Evara — The Menopause Wellness Companion</h1>
        <div className="post-meta">
          <span>2026</span>
          <span>Nihal Pardeshi</span>
        </div>
      </div>

      <div style={{ marginBottom: "100px" }}>
        <iframe
          src="/evara.pdf"
          style={{
            width: "100%",
            height: "85vh",
            border: "1px solid #222222",
            background: "#0a0a0a",
          }}
          title="Evara — The Menopause Wellness Companion"
        />
        <p style={{ marginTop: "16px", fontSize: "12px", color: "#555555", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          If the viewer doesn&apos;t load,{" "}
          <a href="/evara.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", textDecoration: "none" }}>
            open the PDF directly ↗
          </a>
        </p>
      </div>

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
