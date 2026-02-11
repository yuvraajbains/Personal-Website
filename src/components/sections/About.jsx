import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

// Inline Badge component if not present, or I'll create it separately. 
// For now, I'll assume I can make a simple span with classes.
const SkillBadge = ({ children }) => (
    <span className="inline-flex items-center rounded-md border border-neon-cyan/20 bg-neon-cyan/5 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-neon-cyan hover:bg-neon-cyan/10 hover:text-neon-cyan hover:border-neon-cyan/50 font-mono">
        {children}
    </span>
);

const About = () => {
    const skills = {
        "Programming Languages": ["Java", "JavaScript", "Python", "C/C++", "Golang", "TypeScript", "SQL", "HTML/CSS", "Bash"],
        "Frameworks & Libraries": ["React.js", "Spring Boot", "Node.js", "Express.js", "Flask", "FastAPI", "React Native", "LangChain", "JUnit"],
        "Databases & Cloud": ["Docker", "Kubernetes", "PostgreSQL", "MongoDB", "AWS", "GCP", "DynamoDB"],
        "Libraries & Analytics": ["Pandas", "NumPy", "SciPy", "Matplotlib", "PyTorch", "TensorFlow", "OpenCV", "YOLOv8", "Pydantic"],
        "Developer Tools": ["Git", "Linux", "GitHub Actions", "GitLab CI/CD", "REST APIs", "Jira", "Agile", "Postman"]
    };

    return (
        <section id="about" className="py-20 px-4 md:px-0 max-w-6xl mx-auto">
            <div className="space-y-2 mb-10">
                <p className="text-green-500 font-mono text-sm">{'// section.about'}</p>
                <h2 className="text-4xl font-bold text-white">About <span className="text-green-400">Me</span></h2>
            </div>

            <div className="grid gap-6">
                <Card className="terminal-card group hover:border-neon-green/50 transition-colors">
                    <CardHeader>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            <span className="text-xs text-muted-foreground ml-2 font-mono">about.md</span>
                        </div>
                    </CardHeader>
                    <CardContent className="text-muted-foreground space-y-4 font-mono text-sm leading-relaxed">
                        <p>
                            I'm a Software Engineering student at Carleton University with a passion for building scalable, impactful software.
                            From full-stack web apps to AI-driven automation pipelines, I love tackling complex problems with clean, efficient code.
                        </p>
                        <p>
                            My experience spans across cloud infrastructure, machine learning, and modern web development.
                            I'm driven by curiosity and always looking for the next challenge to push my skills further.
                        </p>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <Card key={category} className="terminal-card hover:border-neon-cyan/50 transition-all">
                            <CardHeader>
                                <CardTitle className="text-lg text-neon-green text-glow-green font-mono">&gt; {category}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {items.map(item => (
                                    <SkillBadge key={item}>{item}</SkillBadge>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
