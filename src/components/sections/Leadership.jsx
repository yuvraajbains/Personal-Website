import React from 'react';
import Reveal from '../Reveal';
import TiltCard from '../TiltCard';
import CompanyBadge from '../CompanyBadge';

const ROLE = {
    title: "Vice President of Academics",
    badge: "CAI",
    logoSrc: "/logos/cais-icon.png",
    logoFill: true,
    org: "Carleton AI Society",
    location: "Ottawa, ON",
    period: "Oct 2025 - Apr 2026",
    bullets: [
        "Educated 100+ students by designing and delivering technical workshops on Deep Learning, LLMs, CNNs, Agentic Applications, Transformers, and Computer Vision.",
        "Directed a university-wide AI hackathon of 50+ participants, securing 2 industry sponsors and $1,500+ in funding while coordinating mentorship from PhD candidates and industry engineers.",
    ],
};

const Leadership = () => {
    return (
        <section id="leadership" className="py-20 px-4 md:px-0 max-w-6xl mx-auto">
            <Reveal className="space-y-2 mb-10">
                <p className="text-signal font-mono text-sm">{'// section.leadership'}</p>
                <h2 className="font-display text-4xl font-bold text-foreground">Leadership</h2>
            </Reveal>

            <Reveal>
                <TiltCard maxTilt={2}>
                    <div className="terminal-card node-glow-spark grid grid-cols-1 md:grid-cols-5 overflow-hidden">
                        <div className="md:col-span-2 relative min-h-[220px] md:min-h-[320px]">
                            <img
                                src="/leadership-photo.jpg"
                                alt="Yuvraj presenting at a Carleton AI Society workshop"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/80 via-background/10 to-transparent" />
                        </div>

                        <div className="md:col-span-3 p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <CompanyBadge initials={ROLE.badge} logoSrc={ROLE.logoSrc} fill={ROLE.logoFill} accent="spark" size={44} />
                                <div>
                                    <div className="text-spark font-semibold font-mono text-sm">{ROLE.org}</div>
                                    <div className="text-xs text-muted-foreground font-mono">{ROLE.location} · {ROLE.period}</div>
                                </div>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-foreground font-display mb-4">{ROLE.title}</h3>

                            <ul className="space-y-2.5 text-muted-foreground list-disc list-inside text-sm leading-relaxed font-mono">
                                {ROLE.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </TiltCard>
            </Reveal>
        </section>
    );
};

export default Leadership;
