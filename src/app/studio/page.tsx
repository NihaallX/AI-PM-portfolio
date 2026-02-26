import Link from "next/link"

export default function Studio() {
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
          ABOUT
          <br />
          ME
        </h1>
        <div className="hero-meta">
          <p>
            Product-oriented AI builder focused on decision-making under constraints. I design and ship AI-driven
            products with clear problem definition and deliberate tradeoffs.
          </p>
        </div>
      </section>

      <section style={{ padding: "100px 0", borderTop: "1px solid var(--accent)" }}>

        {/* Summary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px", marginBottom: "100px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px", textTransform: "uppercase" }}>
              Summary
            </h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#888888" }}>
              Product-oriented AI builder with hands-on experience defining, shipping, and iterating on
              production AI systems used by real users. Experienced in scoping MVPs under cost and latency
              constraints, translating ambiguous operational problems into structured product requirements,
              and balancing speed, reliability, and business impact across cross-functional teams.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px", marginBottom: "100px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px", textTransform: "uppercase" }}>
              Experience
            </h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <div style={{ marginBottom: "12px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "6px" }}>
                AI Intern – <a href="https://chatmaven.ai" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>ChatMaven.ai ↗</a>
              </h3>
              <p style={{ fontSize: "13px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>
                Jun 2025 – Nov 2025
              </p>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Defined and launched an AI-powered healthcare IVR by translating operational pain points into prioritized automation workflows aligned with business outcomes.",
                "Drove requirement definition and feature prioritization with engineering and stakeholders, ensuring alignment between technical feasibility and user impact.",
                "Optimized LLM-driven voice, SMS, and email workflows to improve system reliability and reduce manual intervention in live customer operations.",
                "Owned end-to-end delivery from problem definition to AWS deployment, balancing iteration speed with production stability.",
              ].map((point, i) => (
                <li key={i} style={{ display: "flex", gap: "14px", fontSize: "16px", lineHeight: "1.8", color: "#888888", marginBottom: "16px" }}>
                  <span style={{ color: "#444444", fontWeight: 700, flexShrink: 0 }}>+</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px", marginBottom: "100px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px", textTransform: "uppercase" }}>
              Education
            </h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "6px" }}>
              <a href="https://www.vupune.ac.in" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Vishwakarma University ↗</a>, Pune
            </h3>
            <p style={{ fontSize: "13px", color: "#666666", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
              B.Tech Computer Science — AI/ML Specialization · Aug 2023 – May 2027
            </p>
          </div>
        </div>

        {/* Skills */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px", marginBottom: "100px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px", textTransform: "uppercase" }}>
              Skills
            </h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <div style={{ marginBottom: "36px" }}>
              <p style={{ fontSize: "12px", color: "#666666", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "16px" }}>Product</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "AI Product Discovery & Scoping",
                  "LLM Workflow & Prompt Architecture Design",
                  "AI Evaluation & Guardrail Definition",
                  "Latency, Cost & Reliability Tradeoff Analysis",
                  "Behavioral Product Design for AI Systems",
                  "Experimentation & Outcome Tracking",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "12px", fontSize: "15px", lineHeight: "1.8", color: "#cccccc", paddingBottom: "8px", borderBottom: "1px solid #111111", marginBottom: "8px" }}>
                    <span style={{ color: "#444444", fontWeight: 700, flexShrink: 0 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {[
              { label: "Languages", value: "Python, SQL, JavaScript" },
              { label: "AI / ML", value: "PyTorch, Hugging Face, RAG (FAISS), Reinforcement Learning" },
              { label: "Systems & Cloud", value: "FastAPI, AWS Lambda, SES, SNS, API Gateway, Docker, Git, GitHub" },
              { label: "AI Orchestration", value: "LangGraph, Agentic Workflows, LangChain" },
            ].map(({ label, value }) => (
              <div key={label} style={{ marginBottom: "28px" }}>
                <p style={{ fontSize: "12px", color: "#666666", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>{label}</p>
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#cccccc" }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "40px" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px", textTransform: "uppercase" }}>
              Links
            </h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <div style={{ marginBottom: "30px" }}>
              <a
                href="https://drive.google.com/file/d/137n67jNBARIta0J_Cb-cChgHmifu5x8V/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "24px", color: "#ffffff", textDecoration: "none", display: "block", marginBottom: "10px" }}
              >
                Resume ↗
              </a>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <a
                href="https://www.linkedin.com/in/nihaallp/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "24px", color: "#ffffff", textDecoration: "none", display: "block", marginBottom: "10px" }}
              >
                LinkedIn ↗
              </a>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <a
                href="https://github.com/NihaallX"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "24px", color: "#ffffff", textDecoration: "none", display: "block", marginBottom: "10px" }}
              >
                GitHub ↗
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/nihaallxd/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "24px", color: "#ffffff", textDecoration: "none", display: "block" }}
              >
                Instagram ↗
              </a>
            </div>
          </div>
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
