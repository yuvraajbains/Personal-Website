import React from 'react';
import Reveal from '../Reveal';
import Timeline from '../Timeline';

const ROLES = [
    {
        title: "Software Engineer Co-op/Intern",
        badge: "RBC",
        logoSrc: "/logos/rbc.webp",
        logoSlug: null,
        org: "RBC (Royal Bank of Canada), Data & Innovation, Technology & Operations",
        location: "Toronto, ON",
        period: "Sept 2026 - Present",
        status: "Incoming",
        tech: ["LLM Orchestration", "Agentic AI", "Big Data Pipelines"],
        bullets: [
            "Selected to engineer agentic AI workflows to optimize enterprise big data pipelines, leveraging LLM orchestration for automated financial data validation across the Technology & Operations stack.",
        ],
        accent: 'spark',
    },
    {
        title: "Software Engineer Co-op/Intern",
        badge: "N",
        logoSrc: "/logos/nokia.png",
        logoSlug: "nokia",
        org: "Nokia, AI Infrastructure",
        location: "Ottawa, ON",
        period: "Jan 2026 - Aug 2026",
        status: null,
        tech: ["Python", "LangGraph", "MCP", "Kubernetes", "vLLM", "Helm"],
        bullets: [
            "Eliminated 95% of manual test creation and reduced false-positive test generation 40% for network infrastructure validation by designing multi-agent AI workflows with dense retrieval and embedding-based reranking.",
            "Remediated unauthorized internal LLM access and reduced GPU memory footprint 35% by deploying an auth-gated vLLM inference microservice with INT8 quantization, preserving output quality on internal evals.",
            "Accelerated developer workflows by 70% by building a low-code AI platform with custom MCP servers on Kubernetes, handling high-volume SSE streams across three network domains as dedicated microservices.",
            "Enabled AI workflow adoption across 500+ engineers by engineering a visual agent orchestration platform that chains LLM skills with secure code execution and dynamic Kubernetes/Helm auto-provisioning.",
        ],
        accent: 'signal',
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 md:px-0 max-w-6xl mx-auto">
            <Reveal className="space-y-2 mb-12">
                <p className="text-spark font-mono text-sm">{'// section.experience'}</p>
                <h2 className="font-display text-4xl font-bold text-foreground">Work <span className="text-spark text-glow-spark">Experience</span></h2>
            </Reveal>

            <Timeline items={ROLES} />
        </section>
    );
};

export default Experience;
