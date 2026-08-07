import React from 'react';
import { Card, CardContent, CardHeader } from "../ui/card";
import { Folder, Github, ExternalLink } from "lucide-react";
import Reveal from "../Reveal";
import TiltCard from "../TiltCard";

// A small deliberate widening of the palette just for tag chips — the tags
// are metadata, not brand surfaces, so a bit more variety reads as lively
// rather than undisciplined.
const TAG_HUES = ["text-signal/70", "text-spark/70", "text-emerald-400/70", "text-amber-400/70"];

const projects = [
    {
        title: "RavenMap",
        filename: "ravenmap-advisor.py",
        description: "Deterministic AI academic planning system for Carleton University students. Eliminates mathematical reasoning errors by enforcing deterministic execution through MCP-style tool closures within a LangGraph agent, and prevents out-of-context policy citations via a pgvector hybrid RAG pipeline combining exact code pre-filtering with 768D Gemini embeddings.",
        tech: ["Python", "LangGraph", "FastAPI", "React"],
        github: "https://github.com/yuviib/RavenMap",
        external: "https://ravenmap.app"
    },
    {
        title: "Resonance",
        filename: "resonance-engine.py",
        description: "AI music discovery platform. Trained a SASRec Transformer recommendation model decoupled into a FastAPI microservice to eliminate Ruby GIL contention on tensor operations, reducing inference latency to under 15ms. Compressed embeddings 83% (384D → 64D) for sub-millisecond FAISS retrieval via a QR decomposition projection requiring no training dataset.",
        tech: ["PyTorch", "Python", "Ruby on Rails", "React"],
        github: "https://github.com/yuviib/myResonance",
        external: null
    },
    {
        title: "Aura-Grid",
        filename: "aura-grid.py",
        description: "Distributed agentic fraud detection platform. A multi-agent LangGraph swarm with localized LLaMA 3.2 inference over ActionCable WebSockets and Redis pub/sub delivers fraud verdicts at sub-30ms latency. ML inference is decoupled from the transaction thread via an event-driven Kafka architecture using the Asynchronous Saga Pattern, with Protobuf inter-service contracts for schema-safe model I/O.",
        tech: ["Python", "Ruby on Rails", "LangGraph"],
        github: "https://github.com/yuviib/Aura-Mesh",
        external: null
    },
    {
        title: "Nexttern (Distributed Internship Platform)",
        filename: "nexttern-platform.java",
        description: "A comprehensive hub for students to navigate their tech careers. Automates the aggregation of 500+ fresh internship listings weekly for hundreds of concurrent users, and generates personalized, AI-driven project roadmaps to boost their resumes.",
        tech: ["Java", "Spring Boot", "React", "AWS (Lambda, DynamoDB)", "PostgreSQL RLS", "RAG", "gemini-api"],
        github: "https://github.com/yuviib/Nexttern",
        external: "https://devpost.com/software/nexttern"
    },
    {
        title: "RoadWise (AI/ML Potholes App)",
        filename: "roadwise-cv.py",
        description: "An intelligent mobile application that monitors road conditions to keep drivers safe. Processes live footage to detect potholes with 95% accuracy and provides cities with a detailed dashboard to efficiently plan infrastructure repairs.",
        tech: ["React Native", "Python", "FastAPI", "PostgreSQL", "OpenCV", "YOLOv8"],
        github: null,
        external: null
    },
    {
        title: "NHL Goal Alert System",
        filename: "nhl-tracker.py",
        description: "An automated live-tracking application for Edmonton Oilers hockey games. Operates 24/7 in the cloud to send instant SMS alerts directly to fans' phones the moment a goal is scored.",
        tech: ["Python", "Twilio", "Railway", "REST API"],
        github: "https://github.com/yuviib/NHL-Goal-Alert-System",
        external: null
    },
    {
        title: "FantasyML (NFL-Fantasy System)",
        filename: "fantasyml-engine.py",
        description: "An advanced predictive platform for fantasy football managers. Analyzes thousands of historical player statistics to forecast game performance, empowering users to make data-driven, winning roster decisions.",
        tech: ["Python", "FastAPI", "LightGBM", "Scikit-learn", "React", "Docker", "Postgres", "Redis"],
        github: "https://github.com/yuviib/NFL-Fantasy-MLPred",
        external: null
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 md:px-0 max-w-6xl mx-auto">
            <Reveal className="space-y-2 mb-10">
                <p className="text-signal font-mono text-sm">{'// section.projects'}</p>
                <h2 className="font-display text-4xl font-bold text-foreground">Featured <span className="text-spark text-glow-spark">Projects</span></h2>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => {
                    const accent = index % 2 === 0 ? 'signal' : 'spark';
                    return (
                        <Reveal key={project.title} delay={(index % 4) * 0.06}>
                            <TiltCard className="h-full">
                            <Card className={`terminal-card group h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${accent === 'signal' ? 'node-glow' : 'node-glow-spark'}`}>
                                <CardHeader className="flex-row items-center justify-between gap-2 border-b border-border/50 pb-3">
                                    <div className={`flex items-center gap-2 ${accent === 'signal' ? 'text-signal/70' : 'text-spark/70'}`}>
                                        <Folder className="w-4 h-4" aria-hidden="true" />
                                        <span className="text-xs font-mono">{project.filename}</span>
                                    </div>
                                    <div className="flex gap-3 text-muted-foreground">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
                                                <Github className="w-4 h-4 hover:text-foreground cursor-pointer transition-colors" />
                                            </a>
                                        )}
                                        {project.external && (
                                            <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live link`}>
                                                <ExternalLink className="w-4 h-4 hover:text-foreground cursor-pointer transition-colors" />
                                            </a>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6 flex flex-col flex-1">
                                    <h3 className={`text-xl font-bold font-display mb-3 transition-colors ${accent === 'signal' ? 'text-foreground group-hover:text-signal' : 'text-foreground group-hover:text-spark'}`}>
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed font-mono">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-auto">
                                        {project.tech.map((t, tagIndex) => (
                                            <span key={t} className={`text-xs font-mono ${TAG_HUES[tagIndex % TAG_HUES.length]}`}>
                                                #{t.replace(/\s+/g, '')}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                            </TiltCard>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
