import Link from "next/link"

export default function PostAIHealthcareIVR() {
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
        <Link href="/journal" className="back-link">← Essays</Link>
        <p className="post-tag">AI / Voice / Product</p>
        <h1>What I Learned Building an AI Healthcare IVR System</h1>
        <div className="post-meta">
          <span>Dec 2025</span>
          <span>Nihal Pardeshi</span>
        </div>
      </div>

      <div className="post-body">

        {/* Hook */}
        <div className="post-section">
          <p>Building an AI-powered healthcare IVR taught me that most voice bots fail before they even speak.</p>
          <p>Not because of bad models.<br />Because of bad product decisions.</p>
        </div>

        {/* Context */}
        <div className="post-section">
          <p className="post-section-label">Context</p>
          <p>
            I built an AI-driven IVR system designed to call patients for appointment reminders,
            use RAG to fetch contextual patient data, handle dynamic responses (reschedule, confirm, decline),
            and reduce human telecaller workload.
          </p>
          <p>
            Tech stack included FastAPI, Twilio voice calls, RAG with contextual retrieval,
            and structured fallback handling.
          </p>
          <p>
            The goal wasn&apos;t just automation.
            It was reducing no-shows while maintaining patient trust.
          </p>
        </div>

        {/* Lessons */}
        <div className="post-section">
          <p className="post-section-label">Key Product Lessons</p>

          <div className="post-lesson">
            <div className="post-lesson-num">01</div>
            <h3>Trust &gt; Intelligence</h3>
            <p>Users judge the system in the first 5 seconds.</p>
            <p>
              If the tone feels robotic or overly scripted, they disengage.
              Conversational warmth matters more than model sophistication.
            </p>
            <div className="post-insight">
              <strong>Product Insight</strong>
              <p>Voice personality design is not cosmetic. It&apos;s retention strategy.</p>
            </div>
          </div>

          <div className="post-lesson">
            <div className="post-lesson-num">02</div>
            <h3>Latency Kills Engagement</h3>
            <p>
              Even a 1.5–2 second delay in response feels broken in voice interactions.
            </p>
            <ul>
              <li>The system froze</li>
              <li>The call glitched</li>
              <li>It&apos;s spam</li>
            </ul>
            <div className="post-insight">
              <strong>Product Insight</strong>
              <p>In real-time AI systems, latency matters more than model quality.</p>
            </div>
          </div>

          <div className="post-lesson">
            <div className="post-lesson-num">03</div>
            <h3>Personalization &gt; General Intelligence</h3>
            <p>
              Fetching patient-specific context using RAG dramatically increased engagement.
            </p>
            <p>
              <strong>&ldquo;Hi, this is a reminder for your cardiology appointment on Tuesday&rdquo;</strong>
              {" "}works better than{" "}
              <strong>&ldquo;You have an upcoming appointment.&rdquo;</strong>
            </p>
            <p>Specificity builds credibility.</p>
          </div>

          <div className="post-lesson">
            <div className="post-lesson-num">04</div>
            <h3>Fallback Design Is the Real Product</h3>
            <p>Most conversations don&apos;t follow the happy path. Users:</p>
            <ul>
              <li>Speak unclearly</li>
              <li>Switch languages</li>
              <li>Ask unrelated questions</li>
              <li>Interrupt</li>
            </ul>
            <p>The fallback logic determined success more than the primary flow.</p>
            <div className="post-insight">
              <strong>Product Insight</strong>
              <p>Design for confusion, not perfection.</p>
            </div>
          </div>
        </div>

        {/* v2 */}
        <div className="post-section">
          <p className="post-section-label">What I&apos;d Improve in v2</p>
          <ul>
            <li>Multi-lingual adaptive routing</li>
            <li>Sentiment detection for escalation</li>
            <li>Smart retry scheduling based on engagement probability</li>
            <li>A/B testing conversational tone</li>
          </ul>
        </div>

        {/* Takeaway */}
        <div className="post-section">
          <p className="post-section-label">Practical Takeaway</p>
          <p>If you&apos;re building AI voice products, design for:</p>
          <ul>
            <li>Trust</li>
            <li>Speed</li>
            <li>Context</li>
            <li>Failure handling</li>
          </ul>
          <p>Not just model accuracy.</p>
        </div>

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
