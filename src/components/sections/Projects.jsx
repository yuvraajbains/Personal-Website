import React from 'react';
import { Card, CardContent, CardHeader } from "../ui/card";
import { Folder, Github, ExternalLink } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Resonance",
            filename: "resonance-engine.py",
            description: "Reduced recommendation latency to under 15ms by decoupling a PyTorch SASRec Transformer from a Ruby on Rails monolith into a dedicated FastAPI microservice, eliminating Ruby GIL contention. Compressed semantic embeddings by 83% (384D → 64D) for sub-millisecond FAISS retrieval.",
            tech: ["Ruby on Rails", "Python", "PyTorch", "FastAPI", "FAISS", "SASRec"],
            color: "blue",
            github: "https://github.com/yuvraajbains/myResonance",
            external: null
        },
        {
            title: "Aura-Grid",
            filename: "aura-grid.py",
            description: "Architected an event-driven fraud detection microservice using Ruby on Rails and Kafka, decoupling AI workloads via the Asynchronous Saga Pattern with sub-30ms response times. Engineered a multi-agent LangGraph swarm with localized LLaMA 3.2 inference.",
            tech: ["Ruby on Rails", "Python", "LangGraph", "Kafka", "Redis", "PostgreSQL", "Protobufs", "Docker"],
            color: "purple",
            github: "https://github.com/yuvraajbains/Aura-Mesh",
            external: null
        },
        {
            title: "Nexttern (Distributed Internship Platform)",
            filename: "nexttern-platform.java",
            description: "Delivered 500+ fresh internship listings weekly to 100+ concurrent users by building a distributed ETL pipeline on AWS. Architected multi-tenant isolation with PostgreSQL RLS and developed a personalized project roadmap tool with RAG, vectorizing 5,000+ job postings.",
            tech: ["Java", "Spring Boot", "React", "AWS (Lambda, DynamoDB)", "PostgreSQL RLS", "RAG", "gemini-api"],
            color: "green",
            github: "https://github.com/yuvraajbains/Nexttern",
            external: "https://devpost.com/software/nexttern"
        },
        {
            title: "RoadWise (AI/ML Potholes App)",
            filename: "roadwise-cv.py",
            description: "Delivered real-time municipal road safety alerts at 95% detection accuracy and 50ms latency by training a custom computer vision model on more than 1,000 annotated road images. Built analytics infrastructure with a FastAPI backend and PostgreSQL geospatial queries.",
            tech: ["React Native", "Python", "FastAPI", "PostgreSQL", "OpenCV", "YOLOv8"],
            color: "blue",
            github: null,
            external: null
        },
        {
            title: "NHL Goal Alert System",
            filename: "nhl-tracker.py",
            description: "A fully automated Python app that tracks Edmonton Oilers goals live using the NHL public API and sends instant goal alerts via SMS using Twilio. Runs 24/7 in the cloud with real-time notifications.",
            tech: ["Python", "Twilio", "Railway", "REST API"],
            color: "red",
            github: "https://github.com/yuvraajbains/NHL-Goal-Alert-System",
            external: null
        },
        {
            title: "FantasyML (NFL-Fantasy System)",
            filename: "fantasyml-engine.py",
            description: "Full-stack ML pipeline that trains LightGBM ensembles for fantasy football projections, serves FastAPI APIs, and includes a React+TypeScript frontend. Processes player statistics with time-series cross-validation.",
            tech: ["Python", "FastAPI", "LightGBM", "Scikit-learn", "React", "Docker", "Postgres", "Redis"],
            color: "purple",
            github: "https://github.com/yuvraajbains/NFL-Fantasy-MLPred",
            external: null
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 md:px-0 max-w-6xl mx-auto">
            <div className="space-y-2 mb-10">
                <p className="text-neon-green font-mono text-sm">{'// section.projects'}</p>
                <h2 className="text-4xl font-bold text-white font-mono">Featured <span className="text-neon-purple text-glow-purple">Projects</span></h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <Card key={index} className={`terminal-card group hover:border-border transition-all duration-300 hover:-translate-y-1 ${
                        project.color === 'green' ? 'hacker-glow-green' :
                        project.color === 'purple' ? 'hacker-glow-purple' :
                        project.color === 'red' ? 'hacker-glow-red' :
                        project.color === 'blue' ? 'hacker-glow-cyan' : 'hacker-glow-purple'
                    }`}>
                        <CardHeader className="border-b border-border/50 pb-3 bg-muted/20">
                            <div className="flex gap-2 items-center">
                                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                <span className="text-xs text-muted-foreground ml-2 font-mono">{project.filename}</span>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2 text-xl font-bold text-white font-mono group-hover:text-neon-green transition-colors">
                                    <Folder className={`w-5 h-5 ${project.color === 'green' ? 'text-neon-green' :
                                        project.color === 'red' ? 'text-neon-pink' :
                                            project.color === 'blue' ? 'text-neon-cyan' : 'text-neon-purple'
                                        }`} />
                                    {project.title}
                                </div>
                                <div className="flex gap-3 text-muted-foreground">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                                        </a>
                                    )}
                                    {project.external && (
                                        <a href={project.external} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm mb-6 leading-relaxed font-mono">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map(t => (
                                    <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground border border-border">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Projects;
