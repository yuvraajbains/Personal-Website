import React from 'react';
import { Code2, Layers, Cloud, BrainCircuit, Wrench, Terminal } from "lucide-react";
import Reveal from "../Reveal";
import TiltCard from "../TiltCard";

const SkillBadge = ({ children, accent }) => (
    <span
        className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors font-mono ${
            accent === 'spark'
                ? 'border-spark/20 bg-spark/5 text-spark hover:bg-spark/10 hover:border-spark/50'
                : 'border-signal/20 bg-signal/5 text-signal hover:bg-signal/10 hover:border-signal/50'
        }`}
    >
        {children}
    </span>
);

const SKILL_GROUPS = [
    { category: "Languages", icon: Code2, items: ["Java", "Python", "JavaScript/TypeScript", "Ruby", "C/C++", "Golang", "SQL", "HTML/CSS", "Bash"] },
    { category: "Frameworks", icon: Layers, items: ["Spring Boot", "React.js", "Node.js", "Express.js", "FastAPI", "Flask", "React Native", "LangChain", "LangGraph"] },
    { category: "Systems & Cloud", icon: Cloud, items: ["Kubernetes", "Docker", "AWS", "GCP", "pgvector", "Kafka", "Airflow", "PostgreSQL", "Redis"] },
    { category: "AI/ML", icon: BrainCircuit, items: ["PyTorch", "TensorFlow", "OpenCV", "YOLOv8", "Pandas", "NumPy", "Pydantic"] },
    { category: "Tools", icon: Wrench, items: ["Git", "Linux/Unix", "CI/CD (GitLab, Jenkins)", "Helm", "Jira", "Agile", "Claude Code", "Cursor"] },
];

const About = () => {
    return (
        <section id="about" className="py-20 px-4 md:px-0 max-w-6xl mx-auto">
            <Reveal className="space-y-2 mb-10">
                <p className="text-signal font-mono text-sm">{'// section.about'}</p>
                <h2 className="font-display text-4xl font-bold text-foreground">About <span className="text-signal">Me</span></h2>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                <Reveal className="lg:col-span-2 lg:sticky lg:top-28">
                    <TiltCard maxTilt={2}>
                        <div className="terminal-card p-6 md:p-7">
                            <div className="flex items-center gap-2 text-signal/70 mb-5">
                                <Terminal size={14} aria-hidden="true" />
                                <span className="text-xs font-mono">about.md</span>
                            </div>

                            <div className="text-muted-foreground space-y-4 font-mono text-sm leading-relaxed">
                                <p>
                                    I'm a Software Engineering student at Carleton University with a passion for building scalable, impactful software.
                                    From full-stack web apps to AI-driven automation pipelines, I love tackling complex problems with clean, efficient code.
                                </p>
                                <p>
                                    My experience spans across cloud infrastructure, machine learning, and modern web development.
                                    I'm driven by curiosity and always looking for the next challenge to push my skills further.
                                </p>
                            </div>
                        </div>
                    </TiltCard>
                </Reveal>

                <Reveal delay={0.1} className="lg:col-span-3">
                    <div className="terminal-card p-6 md:p-7">
                        <div className="flex items-center gap-2 text-spark/70 mb-6">
                            <Code2 size={14} aria-hidden="true" />
                            <span className="text-xs font-mono">capabilities.json</span>
                        </div>

                        <div className="space-y-6">
                            {SKILL_GROUPS.map(({ category, icon: Icon, items }, i) => {
                                const accent = i % 2 === 0 ? 'signal' : 'spark';
                                return (
                                    <div key={category} className={i > 0 ? 'pt-6 border-t border-border/50' : ''}>
                                        <div className={`flex items-center gap-2 mb-3 font-mono text-sm font-medium ${accent === 'signal' ? 'text-signal' : 'text-spark'}`}>
                                            <Icon size={16} aria-hidden="true" />
                                            {category}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map((item) => (
                                                <SkillBadge key={item} accent={accent}>{item}</SkillBadge>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
