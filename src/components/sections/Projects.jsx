import React from 'react';
import { Card, CardContent, CardHeader } from "../ui/card";
import { Folder, Github, ExternalLink } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Nexttern",
            filename: "nexttern.tsx",
            description: "All-In-One Internship platform for finding and managing your internship search with AI-powered features.",
            tech: ["Java", "React", "AWS", "Supabase", "Spring Boot", "Gemini AI"],
            color: "green"
        },
        {
            title: "RoadWise",
            filename: "roadwise.tsx",
            description: "AI-Powered Pothole Monitoring App for real-time detection and infrastructure analytics using computer vision.",
            tech: ["React Native", "Supabase", "Python", "OpenCV", "YOLOv8", "AI/ML"],
            color: "red"
        },
        {
            title: "NHL Goal Alert System",
            filename: "nhl-goal-alert-system.tsx",
            description: "Fully automated Python app tracking Edmonton Oilers goals live with instant SMS alerts via Twilio, runs 24/7 in cloud.",
            tech: ["Python", "Twilio", "Railway"],
            color: "blue"
        },
        {
            title: "FantasyML",
            filename: "fantasyml.tsx",
            description: "Full-stack ML pipeline training LightGBM ensembles for fantasy football projections with FastAPI backend and React frontend.",
            tech: ["Python", "FastAPI", "LightGBM", "React", "TypeScript", "Docker", "Postgres"],
            color: "purple"
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
                    <Card key={index} className="terminal-card group hover:border-border transition-all duration-300 hover:-translate-y-1">
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
                                    <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                                    <ExternalLink className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
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
