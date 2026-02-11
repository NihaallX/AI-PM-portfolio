import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-16">
            <div className="max-w-3xl mx-auto px-6">
                {/* CTA card */}
                <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-sm shadow-black/[0.04] text-center">
                    <p className="text-lg md:text-xl font-semibold text-foreground">
                        I&apos;m open to new opportunities
                    </p>
                    <p className="mt-2 text-sm text-muted max-w-md mx-auto">
                        and would love to hear from you. Let&apos;s build something meaningful together.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
                        <Link
                            href="mailto:nihal.pardeshi@example.com"
                            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-foreground rounded-lg hover:bg-foreground/85 transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            Say Hello ✉️
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/nihaallp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-foreground bg-surface border border-border rounded-lg hover:border-border-accent hover:shadow-sm transition-all duration-200"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href="https://github.com/NihaallX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-foreground bg-surface border border-border rounded-lg hover:border-border-accent hover:shadow-sm transition-all duration-200"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-between text-xs text-muted/40">
                    <p>© {new Date().getFullYear()} Nihal Pardeshi</p>
                    <p>Built with deliberate constraints</p>
                </div>
            </div>
        </footer>
    );
}
