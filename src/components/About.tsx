export default function About() {
    return (
        <section className="py-20 md:py-28">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
                    Behind the Work
                </h2>

                <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-sm shadow-black/[0.04]">
                    <p className="text-base md:text-[17px] text-foreground/80 leading-[1.85]">
                        I enjoy defining ambiguous problems, identifying constraints, and
                        making deliberate product tradeoffs. My work sits at the intersection
                        of <span className="font-semibold text-foreground">AI systems</span> and{" "}
                        <span className="font-semibold text-foreground">product thinking</span> — where
                        decisions around latency, cost, reliability, and user experience shape
                        real-world outcomes.
                    </p>
                </div>
            </div>
        </section>
    );
}
