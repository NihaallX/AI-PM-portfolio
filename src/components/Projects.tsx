interface Decision {
    title: string;
    description: string;
}

interface Project {
    title: string;
    subtitle: string;
    summary: string;
    problem: string;
    decisions: Decision[];
    notBuilt: string[];
    results: string[];
    tech: string[];
    flag?: string;
    emoji?: string;
}

const projects: Project[] = [
    {
        title: "RelayX",
        subtitle: "AI Voice Automation for SMBs",
        flag: "Flagship",
        emoji: "📞",
        summary:
            "A lightweight AI voice agent designed to make outbound automation accessible for small and mid-sized businesses.",
        problem:
            "SMBs wanted to automate outbound calls but enterprise voice solutions were economically inaccessible due to high minimum contracts and pricing models.",
        decisions: [
            {
                title: "Chose conversational freedom over rigid script control",
                description:
                    "Accepted higher system complexity to deliver natural conversations and differentiate from traditional IVR systems.",
            },
            {
                title: "Focused strictly on SMB use cases",
                description:
                    "Avoided enterprise-grade compliance, heavy customization, and complex workflows to maintain affordability and speed.",
            },
            {
                title: "Optimized latency over maximum model accuracy",
                description:
                    "Prioritized fast responses for conversational flow while using guardrails to manage probabilistic risk.",
            },
        ],
        notBuilt: [
            "Human-in-the-loop escalation",
            "Enterprise customization layers",
            "Complex conversation handling",
        ],
        results: [
            "89% latency reduction",
            "Reliable automated outbound calls",
            "Cost-efficient SMB alternative",
        ],
        tech: ["Python", "FastAPI", "Twilio", "LLM", "STT/TTS", "PostgreSQL"],
    },
    {
        title: "ChatMaven",
        subtitle: "AI Healthcare IVR Automation",
        emoji: "🏥",
        summary:
            "An AI-powered IVR system designed to reduce manual telecalling workload in healthcare operations.",
        problem:
            "Manual call workflows were operationally heavy and inefficient.",
        decisions: [
            {
                title: "Prioritized repetitive workflow automation first",
                description:
                    "Focused on the highest-impact, most routine calls first to maximize operational savings.",
            },
            {
                title: "System reliability over model experimentation",
                description:
                    "Chose proven, stable model configurations over cutting-edge but unpredictable alternatives.",
            },
            {
                title: "MVP scoped to manual intervention reduction",
                description:
                    "Scoped the product around the core metric — fewer human calls — not feature count.",
            },
        ],
        notBuilt: [
            "Complex conversational branching",
            "Over-customized edge-cases",
            "Non-essential AI features",
        ],
        results: [
            "Reduced manual effort significantly",
            "Production deployed on AWS",
            "Real-world customer adoption",
        ],
        tech: ["AWS", "LLM workflows", "Voice/SMS integrations"],
    },
    {
        title: "RateMyProf India",
        subtitle: "Focused Professor Review Platform",
        emoji: "🎓",
        summary:
            "A professor review platform built with strict scope discipline to maintain content integrity.",
        problem:
            "Students needed a centralized, trustworthy review system without platform noise.",
        decisions: [
            {
                title: "Removed community features to prevent platform drift",
                description:
                    "Deliberately avoided social-media-like features to keep the platform focused on reviews.",
            },
            {
                title: "Content integrity over rapid feature expansion",
                description:
                    "Invested in content quality systems before building new user-facing features.",
            },
            {
                title: "Performance and SEO before new features",
                description:
                    "Optimized core metrics that drive organic growth before expanding scope.",
            },
        ],
        notBuilt: [
            "Social feed features",
            "Real-time chat",
            "Gamification systems",
        ],
        results: [
            "500+ professors onboarded",
            "85% invalid content reduction",
            "85+ PageSpeed, top SEO ranking",
        ],
        tech: ["React", "Next.js", "FastAPI", "PostgreSQL"],
    },
];

function DecisionBlock({ decision, index }: { decision: Decision; index: number }) {
    return (
        <div className="bg-accent-light/40 border border-accent-soft/40 rounded-xl p-4 md:p-5 transition-all duration-200 hover:bg-accent-light/70">
            <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">
                    {index + 1}
                </span>
                <div>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                        {decision.title}
                    </p>
                    <p className="mt-1.5 text-[13px] text-muted leading-relaxed">
                        {decision.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group bg-surface border border-border rounded-2xl overflow-hidden shadow-sm shadow-black/[0.04] transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.08] hover:border-border-accent hover:-translate-y-0.5">
            {/* Project header bar */}
            <div className="px-8 md:px-10 pt-8 md:pt-10 pb-0">
                <div className="flex items-start gap-4">
                    <span className="text-3xl mt-0.5">{project.emoji}</span>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-2xl md:text-[1.75rem] font-bold tracking-tight text-foreground">
                                {project.title}
                            </h3>
                            {project.flag && (
                                <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent-light border border-accent-soft px-2.5 py-0.5 rounded-full">
                                    {project.flag}
                                </span>
                            )}
                        </div>
                        <p className="mt-0.5 text-sm font-medium text-muted">
                            {project.subtitle}
                        </p>
                    </div>
                </div>

                <p className="mt-4 text-[15px] text-muted/75 leading-relaxed">
                    {project.summary}
                </p>
            </div>

            {/* Content area */}
            <div className="px-8 md:px-10 pb-8 md:pb-10">
                {/* Divider */}
                <div className="my-7 border-t border-border/60" />

                {/* Problem */}
                <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted/50 mb-3">
                        Problem
                    </h4>
                    <p className="text-[15px] text-foreground/80 leading-relaxed bg-background rounded-lg border border-border/60 px-4 py-3">
                        {project.problem}
                    </p>
                </div>

                {/* Key Decisions */}
                <div className="mt-7">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted/50 mb-4">
                        Key Decisions
                    </h4>
                    <div className="space-y-2.5">
                        {project.decisions.map((decision, i) => (
                            <DecisionBlock key={i} decision={decision} index={i} />
                        ))}
                    </div>
                </div>

                {/* What We Deliberately Didn't Build */}
                <div className="mt-7">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted/50 mb-3">
                        Deliberately excluded
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.notBuilt.map((item, i) => (
                            <span
                                key={i}
                                className="text-[13px] text-muted bg-background px-3.5 py-1.5 rounded-full border border-border line-through decoration-muted/30 decoration-1"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Results */}
                <div className="mt-7">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted/50 mb-3">
                        Results
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {project.results.map((result, i) => (
                            <div
                                key={i}
                                className="bg-result-bg border border-result-border rounded-xl px-4 py-3.5 text-center"
                            >
                                <p className="text-sm font-semibold text-result-text leading-snug">
                                    {result}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech */}
                <div className="mt-8 pt-5 border-t border-border/50">
                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted/35">Built with</span>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="text-xs text-muted/60 font-medium px-2.5 py-1 bg-background rounded-full border border-border/50"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    return (
        <section className="py-20 md:py-28">
            <div className="max-w-3xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                        Selected Work
                    </h2>
                    <p className="mt-2 text-base text-muted">
                        Product decisions, tradeoffs, and real-world outcomes.
                    </p>
                </div>

                <div className="space-y-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
