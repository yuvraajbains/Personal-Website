import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 md:px-0 max-w-6xl mx-auto">
            <div className="space-y-2 mb-10">
                <p className="text-neon-cyan font-mono text-sm">{'// section.experience'}</p>
                <h2 className="text-4xl font-bold text-white font-mono">Work <span className="text-neon-cyan text-glow-cyan">Experience</span></h2>
            </div>

            <div className="terminal-card p-1">
                <div className="flex gap-2 p-3 border-b border-border/50 mb-4 bg-muted/50 rounded-t-lg">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    <span className="text-xs text-muted-foreground ml-2 font-mono">experience.log</span>
                </div>

                <div className="p-4 md:p-6">
                    <div className="flex flex-col gap-6">

                        {/* Nokia Job Item */}
                        <div className="group relative pl-8 border-l-2 border-border hover:border-neon-cyan transition-colors">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-neon-cyan group-hover:box-glow-cyan transition-all"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2 font-mono">
                                    Software Developer Intern (AI/ML)
                                </h3>
                            </div>

                            <div className="mb-4">
                                <div className="text-neon-cyan font-semibold mb-1 font-mono">Nokia - Ottawa, ON</div>
                                <div className="text-sm text-muted-foreground font-mono">Jan 2026 - Present</div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Kubernetes", "Multi-Agent Systems", "LangGraph", "Azure", "RAG"].map(tech => (
                                    <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <ul className="space-y-3 text-muted-foreground list-disc list-inside text-sm leading-relaxed font-mono">
                                <li>Eliminated 95% of manual test creation for network infrastructure validation by designing multi-agent AI workflows with RAG, integrated directly into the CI/CD pipeline.</li>
                                <li>Accelerated developer workflows by 70% by building a low-code AI platform with custom MCP servers on Kubernetes, handling high-volume SSE streams across three network domains.</li>
                                <li>Shipped a fully automated agentic pipeline adopted across four network infrastructure divisions, reducing manual processing time by 90% via a multimodal LangGraph workflow.</li>
                            </ul>
                        </div>

                        {/* Carleton AI Society Job Item */}
                        <div className="group relative pl-8 border-l-2 border-border hover:border-neon-cyan transition-colors mt-12">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-neon-cyan group-hover:box-glow-cyan transition-all"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2 font-mono">
                                    VP of Academics
                                </h3>
                            </div>

                            <div className="mb-4">
                                <div className="text-neon-cyan font-semibold mb-1 font-mono">Carleton AI Society - Ottawa, ON</div>
                                <div className="text-sm text-muted-foreground font-mono">Oct 2025 - Present</div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Prompt Engineering", "Deep Learning", "LLMs", "Transformers", "AI Agents"].map(tech => (
                                    <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <ul className="space-y-3 text-muted-foreground list-disc list-inside text-sm leading-relaxed font-mono">
                                <li>Designed and delivered technical workshops on Prompt Engineering, Deep Learning, LLMs, Transformers, and AI Agents to over 500 students.</li>
                                <li>Directed a university-wide AI hackathon with over 150 participants, securing $2,000+ in funding and industry sponsorships.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
