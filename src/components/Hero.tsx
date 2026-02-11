import Link from "next/link";

const ArrowIcon = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5"
    >
        <path
            d="M3.33337 8H12.6667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.66663 4L12.6666 8L8.66663 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function Hero() {
    return (
        <section className="pt-28 pb-20 md:pt-40 md:pb-28">
            <div className="max-w-3xl mx-auto px-6">
                {/* Greeting + badge */}
                <div className="mb-6 animate-fade-in-up">
                    <p className="text-base text-muted mb-3">Hello! I&apos;m</p>
                    <div className="inline-flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-accent bg-accent-light border border-accent-soft px-3.5 py-1.5 rounded-full shadow-sm">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                            Open to opportunities
                        </span>
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05] animate-fade-in-up animate-delay-100">
                    Nihal Pardeshi
                </h1>

                <p className="mt-6 text-xl md:text-2xl text-muted leading-relaxed animate-fade-in-up animate-delay-200">
                    Product-oriented AI builder focused on
                    <span className="text-foreground font-semibold"> decision-making </span>
                    under constraints.
                </p>

                <p className="mt-5 text-base text-muted/60 leading-relaxed max-w-lg animate-fade-in-up animate-delay-200">
                    I design and ship AI-driven products by defining problems clearly and
                    making deliberate tradeoffs.
                </p>

                <div className="mt-10 flex flex-wrap gap-3 animate-fade-in-up animate-delay-300">
                    <Link
                        href="https://drive.google.com/file/d/137n67jNBARIta0J_Cb-cChgHmifu5x8V/view?usp=sharing"
                        target="_blank"
                        className="group inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-foreground rounded-lg hover:bg-foreground/85 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        View Resume
                        <ArrowIcon />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/nihaallp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center px-5 py-2.5 text-sm font-medium text-foreground bg-surface border border-border rounded-lg hover:border-border-accent hover:shadow-sm transition-all duration-200"
                    >
                        LinkedIn
                        <ArrowIcon />
                    </Link>

                    <Link
                        href="https://github.com/NihaallX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center px-5 py-2.5 text-sm font-medium text-foreground bg-surface border border-border rounded-lg hover:border-border-accent hover:shadow-sm transition-all duration-200"
                    >
                        GitHub
                        <ArrowIcon />
                    </Link>
                </div>
            </div>
        </section>
    );
}
