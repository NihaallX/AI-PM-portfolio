"use client"

import Link from "next/link"
import { useState } from "react"
import ServiceModal from "@/components/ServiceModal"

const skillsData = [
  {
    number: "01",
    title: "Product Strategy",
    description:
      "Clear-eyed product thinking from problem definition to delivery. I scope MVPs under cost and latency constraints, translate ambiguous operational problems into structured requirements, and align cross-functional teams around what actually ships.",
    details: [
      "MVP scoping under cost & latency constraints",
      "Translating user pain into prioritized requirements",
      "Feature prioritization with engineering & stakeholders",
      "Cross-functional collaboration & alignment",
      "Data-informed iteration",
    ],
  },
  {
    number: "02",
    title: "AI",
    description:
      "Building production AI systems used by real users — not demos. From LLM-driven voice and SMS workflows to RAG pipelines and agentic systems, I evaluate tradeoffs between latency, accuracy, and cost to ship reliable AI.",
    details: [
      "LLM integration & prompt engineering",
      "RAG pipelines (FAISS, Sentence Transformers)",
      "Agentic workflows with LangGraph",
      "PyTorch & Hugging Face model evaluation",
      "AI system quality assessment",
    ],
  },
  {
    number: "03",
    title: "Prototyping",
    description:
      "Ideas turned into working systems, fast. I move from concept to production-grade prototype using FastAPI, AWS, and Docker — owning end-to-end delivery from problem definition to deployment.",
    details: [
      "Rapid MVP development & validation",
      "FastAPI backend & REST API design",
      "AWS Lambda, API Gateway, SES, SNS",
      "Docker containerisation",
      "End-to-end delivery ownership",
    ],
  },
  {
    number: "04",
    title: "User Research",
    description:
      "Decisions grounded in evidence. I identify UX and reliability bottlenecks, translate operational pain points into automation workflows, and measure outcomes to guide what gets built next.",
    details: [
      "Operational pain point identification",
      "UX & reliability bottleneck analysis",
      "Outcome tracking & call performance analytics",
      "Problem framing & insight synthesis",
      "Balancing speed, reliability & business impact",
    ],
  },
  {
    number: "05",
    title: "GTM",
    description:
      "Shipping is just the beginning. I define positioning, SEO strategy, and growth loops — demonstrated by achieving top-6 SEO ranking and 85+ PageSpeed on a platform serving 500+ professors.",
    details: [
      "Product positioning & differentiation",
      "SEO strategy & structured optimization",
      "Launch planning & coordination",
      "Metrics & KPI definition",
      "Automated moderation & trust systems",
    ],
  },
]

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<(typeof skillsData)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (skill: (typeof skillsData)[0]) => {
    setSelectedSkill(skill)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedSkill(null), 300)
  }

  return (
    <>
      <div className="container">
        <nav>
          <div className="logo">NIHAL©</div>
          <div className="nav-links">
            <Link href="/works">Works</Link>
            <Link href="/studio">About</Link>
            <Link href="/journal">Essays</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <section className="hero">
          <h1>
            PRODUCT
            <br />
            MIND
            <br />
            AI BUILDER
          </h1>
          <div className="hero-meta">
            <p>
              Product-oriented AI builder focused on decision-making under constraints. I design and ship AI-driven
              products by defining problems clearly and making deliberate tradeoffs.
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
                <p>AI Voice Platform / Product &amp; Engineering</p>
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
                <p>Web Product / SEO &amp; Trust</p>
              </div>
            </a>
          </div>

          <div className="project-card card-3">
            <div className="img-wrapper" style={{ aspectRatio: "1/1" }}>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                alt="ChatMaven.ai"
              />
            </div>
            <div className="project-info">
              <h3>ChatMaven.ai</h3>
              <p>Healthcare IVR / AI Internship</p>
            </div>
          </div>

          <div className="project-card card-4">
            <a href="https://www.datehelp.tech/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div className="img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200"
                  alt="datehelp"
                />
              </div>
              <div className="project-info">
                <h3>datehelp</h3>
                <p>AI / Consumer / Gen Z</p>
              </div>
            </a>
          </div>
        </section>

        <section className="services">
          {skillsData.map((skill) => (
            <div
              key={skill.number}
              className="service-row"
              onClick={() => openModal(skill)}
            >
              <span className="service-num">{skill.number}</span>
              <h2>{skill.title}</h2>
              <span className="service-num">↗</span>
            </div>
          ))}
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

      <ServiceModal isOpen={isModalOpen} onClose={closeModal} service={selectedSkill} />
    </>
  )
}
