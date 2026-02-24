"use client"

import Link from "next/link"

export default function Contact() {
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
        <h1>
          LET&apos;S
          <br />
          TALK
        </h1>
        <div className="hero-meta">
          <p>
            Have a project in mind or a role you think I&apos;d be a fit for? I&apos;m always interested in
            conversations that lead to things worth building.
          </p>
        </div>
      </section>

      <section style={{ padding: "100px 0", borderTop: "1px solid var(--accent)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "40px", textTransform: "uppercase" }}>
              Reach Out
            </h2>

            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "14px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
                Email
              </p>
              <a
                href="mailto:nihalpardeshi12344@gmail.com"
                style={{ fontSize: "20px", color: "#ffffff", textDecoration: "none", wordBreak: "break-all" }}
              >
                nihalpardeshi12344@gmail.com
              </a>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "14px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/nihaallp/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "20px", color: "#ffffff", textDecoration: "none" }}
              >
                /in/nihaallp ↗
              </a>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "14px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
                GitHub
              </p>
              <a
                href="https://github.com/NihaallX"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "20px", color: "#ffffff", textDecoration: "none" }}
              >
                /NihaallX ↗
              </a>
            </div>

            <div>
              <p style={{ fontSize: "14px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
                Instagram
              </p>
              <a
                href="https://www.instagram.com/nihaallxd/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "20px", color: "#ffffff", textDecoration: "none" }}
              >
                @nihaallxd ↗
              </a>
            </div>
          </div>

          <div style={{ gridColumn: "7 / span 6" }}>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  style={{ fontSize: "12px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "10px" }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  required
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--accent)", color: "#ffffff", fontSize: "18px", padding: "10px 0", outline: "none" }}
                />
              </div>

              <div>
                <label
                  style={{ fontSize: "12px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "10px" }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  required
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--accent)", color: "#ffffff", fontSize: "18px", padding: "10px 0", outline: "none" }}
                />
              </div>

              <div>
                <label
                  style={{ fontSize: "12px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "10px" }}
                >
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--accent)", color: "#ffffff", fontSize: "18px", padding: "10px 0", outline: "none", resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                style={{ alignSelf: "flex-start", background: "#ffffff", color: "#000000", border: "none", padding: "20px 60px", fontSize: "14px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "2px", cursor: "pointer", transition: "all 0.3s" }}
              >
                Send Message
              </button>
            </form>
          </div>
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
