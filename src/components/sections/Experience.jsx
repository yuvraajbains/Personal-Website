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

                        {/* Job Item */}
                        <div className="group relative pl-8 border-l-2 border-border hover:border-neon-cyan transition-colors">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-neon-cyan group-hover:box-glow-cyan transition-all"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2 font-mono">
                                    Software Developer Co-op/Intern
                                </h3>
                            </div>

                            <div className="mb-4">
                                <div className="text-neon-cyan font-semibold mb-1 font-mono">Nokia - Ottawa, ON</div>
                                <div className="text-sm text-muted-foreground font-mono">Jan 2026 - Present</div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Kubernetes", "GitLab", "Docker"].map(tech => (
                                    <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <ul className="space-y-2 text-muted-foreground list-disc list-inside text-sm leading-relaxed font-mono">
                                <li>Reduced manual validation time by 60%+ by engineering GitLab CI/CD pipelines and Robot Framework test suites for automated regression testing</li>
                                <li>Built a Python client-server wrapper for SSH session management, accelerating test execution cycles by 40%</li>
                                <li>Developed AI-driven automation agents using Google ADK and Docker to streamline internal development workflows</li>
                                <li>Orchestrated Kubernetes deployments with Infrastructure-as-Code via Python scripts for reproducible environments</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
