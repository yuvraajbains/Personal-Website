import React from 'react';
import { Button } from "../ui/button";
import { Github, Linkedin, ExternalLink, Terminal } from "lucide-react";

const Hero = () => {
    const [text, setText] = React.useState("");
    const fullText = "Hi, I'm Yuvraj Bains";

    React.useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Adjust typing speed here (lower is faster)

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overscroll-none">
            <div className="z-10 text-center space-y-8 p-4">
                {/* Terminal Header */}
                <div className="flex items-center justify-center space-x-2 text-green-400 font-mono text-sm md:text-base mb-4 animate-fade-in-down">
                    <Terminal size={16} />
                    <span>guest@portfolio:~$ cat intro.txt</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-mono min-h-[1.2em]">
                        {text}
                        <span className="animate-pulse text-neon-green">_</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl font-mono text-neon-cyan text-glow-cyan">
                        Software Engineering Student
                        <br />
                        <span className="text-neon-cyan">@ Carleton University</span>
                    </h2>
                </div>

                {/* Links */}
                <div className="flex items-center justify-center space-x-4 mt-8">
                    <Button variant="outline" className="gap-2 border-green-500/20 hover:bg-green-500/10 hover:text-green-400 text-muted-foreground font-mono" asChild>
                        <a href="https://github.com/yuvraajbains" target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                            GitHub
                        </a>
                    </Button>
                    <Button variant="outline" className="gap-2 border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-400 text-muted-foreground font-mono" asChild>
                        <a href="https://www.linkedin.com/in/yuvrajbains00/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={16} />
                            LinkedIn
                        </a>
                    </Button>
                    <Button variant="outline" className="gap-2 border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-400 text-muted-foreground font-mono" asChild>
                        <a href="https://devpost.com/yuvraajbains" target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                            Devpost
                        </a>
                    </Button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 animate-bounce">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-green-500/0 via-green-500/50 to-green-500/0"></div>
            </div>
        </section>
    );
};

export default Hero;
