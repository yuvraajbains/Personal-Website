import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "../ui/button";
import { Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react";

// All three social buttons share one state machine: dark by default,
// solid signal-blue fill on hover with dark text so it stays readable
// instead of blue-on-blue.
const SOCIAL_BTN_CLASS =
    "gap-2 border-border bg-background text-foreground hover:bg-signal hover:text-primary-foreground hover:border-signal font-mono transition-colors";

const Hero = () => {
    const [text, setText] = React.useState("");
    const fullText = "Yuvraj Bains";

    React.useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 90);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section id="home" className="min-h-[85vh] md:min-h-[80vh] flex flex-col items-center justify-center relative pt-28 pb-16 overscroll-none">
            {/* Telemetry chrome — decorative HUD, scoped to the hero so it scrolls away with it */}
            <div className="absolute top-6 left-4 text-[10px] text-signal/25 space-y-1 pointer-events-none uppercase tracking-widest hidden lg:block" aria-hidden="true">
                <div>[ NETWORK_DEPTH: 5 LAYERS ]</div>
                <div>[ ACTIVATION: GELU ]</div>
                <div>[ FORWARD_PASS: RUNNING ]</div>
            </div>
            <div className="absolute bottom-6 right-4 text-[10px] text-spark/25 space-y-1 pointer-events-none uppercase tracking-widest text-right hidden lg:block" aria-hidden="true">
                <div>GRAD_FLOW: STABLE</div>
                <div>DEVICE: CLIENT_GPU</div>
            </div>

            <div className="z-10 w-full max-w-4xl text-center space-y-10 px-2">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-signal font-mono text-xs md:text-sm"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-signal animate-node-pulse" aria-hidden="true" />
                    <span>~/portfolio $ whoami</span>
                </motion.div>

                <div className="space-y-4">
                    <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-foreground min-h-[1.2em] break-words">
                        {text}
                        <span className="text-signal animate-pulse" aria-hidden="true">_</span>
                    </h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="font-mono text-lg md:text-2xl text-muted-foreground"
                    >
                        Software Engineering @ <span className="text-signal">Carleton University</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="mx-auto max-w-2xl text-base md:text-xl text-muted-foreground leading-relaxed"
                    >
                        I specialize in <span className="text-foreground">AI Agentic Systems</span> & <span className="text-spark">Machine Learning</span>
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center gap-3 flex-wrap"
                >
                    <Button variant="outline" className={SOCIAL_BTN_CLASS} asChild>
                        <a href="https://github.com/yuviib" target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                            GitHub
                        </a>
                    </Button>
                    <Button variant="outline" className={SOCIAL_BTN_CLASS} asChild>
                        <a href="https://www.linkedin.com/in/yuvrajbains00/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={16} />
                            LinkedIn
                        </a>
                    </Button>
                    <Button variant="outline" className={SOCIAL_BTN_CLASS} asChild>
                        <a href="https://devpost.com/yuvraajbains" target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                            Devpost
                        </a>
                    </Button>
                </motion.div>
            </div>

            <motion.button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-8 text-muted-foreground hover:text-signal transition-colors"
                aria-label="Scroll to about section"
            >
                <ChevronDown size={22} className="animate-bounce" />
            </motion.button>
        </section>
    );
};

export default Hero;
