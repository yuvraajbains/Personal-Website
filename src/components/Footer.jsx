import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';

const LINKS = [
    { label: 'GitHub', href: 'https://github.com/yuviib', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuvrajbains00/', icon: Linkedin },
    { label: 'Devpost', href: 'https://devpost.com/yuvraajbains', icon: ExternalLink },
];

const Footer = () => {
    return (
        <footer className="relative border-t border-border/60 mt-12">
            <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
                <Reveal>
                    <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug max-w-2xl text-foreground">
                        Always training on the next problem —
                        <span className="text-signal"> let's build</span> something worth shipping.
                    </p>
                </Reveal>

                <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-border/60 pt-6">
                    <span className="font-mono text-sm text-signal">
                        <span aria-hidden="true">&gt;_</span> yuvraj.bains
                    </span>

                    <div className="flex items-center gap-2">
                        {LINKS.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-signal hover:border-signal/40"
                            >
                                <Icon size={14} aria-hidden="true" />
                                {label}
                            </a>
                        ))}
                    </div>

                    <p className="text-muted-foreground/70 text-xs font-mono">
                        &copy; {new Date().getFullYear()} Yuvraj Bains. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
