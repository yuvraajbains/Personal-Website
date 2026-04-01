import React from 'react';
import { Card, CardContent, CardHeader } from "../ui/card";
import { Folder, Github, ExternalLink } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Aura-Grid",
            filename: "aura-grid.py",
            description: "Distributed, horizontally scalable, Event-Driven Agentic Fraud Detection platform implementing an Asynchronous Saga Pattern. Orchestrates a Multi-Agent Swarm (LangGraph) and local LLMs (Llama 3.2) with binary contract enforcement via Protobufs.",
            tech: ["Ruby on Rails 8", "Python 3.12", "LangGraph", "Ollama", "Redpanda (Kafka)", "Redis", "PostgreSQL", "Protobufs", "Docker"],
            color: "purple",
            github: "https://github.com/yuvraajbains/Aura-Mesh",
            external: null
        },
        {
            title: "Nexttern (Distributed Internship Platform)",
            filename: "nexttern-platform.java",
            description: "Distributed scraping pipeline on AWS delivering 500+ fresh listings weekly to 100+ concurrent users. Architected multi-tenant isolation with PostgreSQL RLS and a RAG pipeline for personalized project roadmaps.",
            tech: ["Java", "Spring Boot", "AWS (Lambda, DynamoDB)", "PostgreSQL RLS", "React", "HuggingFace (RAG)"],
            color: "green",
            github: "https://github.com/yuvraajbains/Nexttern",
            external: "https://devpost.com/software/nexttern"
        },
        {
            title: "Unisync",
            filename: "unisync.tsx",
            description: "A collaborative platform for university students to sync schedules and find common free time for group projects.",
            tech: ["React", "Typescript", "Vite", "Gemini API", "ElevenLabs API", "REST API's", "Python", "GCP", "express.js", "node.js"],
            color: "red",
            github: "https://github.com/aditinahar2005/Unisync",
            external: "https://devpost.com/software/unisync-jnaety"
        },
        {
            title: "FantasyML (NFL-Fantasy System)",
            filename: "fantasyml-engine.py",
            description: "Distributed AI/ML pipeline achieving 80% prediction accuracy using LightGBM ensembles. Processes 1,000+ player statistics with time-series cross-validation and automated hyperparameter tuning.",
            tech: ["Python", "FastAPI", "LightGBM", "Scikit-learn", "React", "Docker"],
            color: "purple",
            github: "https://github.com/yuvraajbains/NFL-Fantasy-MLPred",
            external: null
        },
        {
            title: "RoadWise (AI/ML Potholes App)",
            filename: "roadwise-cv.py",
            description: "Real-time municipal road safety alerts with 95% detection accuracy and 50ms latency. Trained a custom CV model on 1,000+ annotated images with geospatial analytics for infrastructure planning.",
            tech: ["React Native", "Python", "FastAPI", "OpenCV", "YOLOv8", "PostgreSQL (GIS)"],
            color: "blue",
            github: null,
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
