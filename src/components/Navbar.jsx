import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'projects', label: 'Projects' },
];

const SOCIALS = [
    { label: 'GitHub', href: 'https://github.com/yuviib', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuvrajbains00/', icon: Linkedin },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home');
    const menuRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        const onClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
        };
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('mousedown', onClickOutside);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('mousedown', onClickOutside);
        };
    }, [menuOpen]);

    const scrollToSection = (id) => {
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
            <nav
                ref={menuRef}
                className={`w-full max-w-6xl rounded-2xl border transition-all duration-300 ${
                    scrolled
                        ? 'border-border bg-background/70 shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
                        : 'border-border/60 bg-background/40'
                } backdrop-blur-xl backdrop-saturate-150`}
            >
                <div className="flex items-center justify-between px-5 py-3 md:px-8">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="font-mono text-sm font-semibold text-signal drop-shadow-[0_0_8px_rgba(45,179,251,0.4)]"
                    >
                        <span aria-hidden="true">&gt;_</span> yuvraj.bains
                    </button>

                    <div className="hidden md:flex items-center gap-1">
                        {LINKS.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`relative rounded-full px-3.5 py-1.5 font-mono text-sm transition-colors duration-200 ${
                                    active === link.id ? 'text-signal' : 'text-muted-foreground hover:text-foreground'
                                }`}
                                aria-current={active === link.id ? 'true' : undefined}
                            >
                                {active === link.id && (
                                    <motion.span
                                        layoutId="nav-active-pill"
                                        className="absolute inset-0 rounded-full bg-signal/10"
                                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                                    />
                                )}
                                <span className="relative">{link.label}</span>
                            </button>
                        ))}

                        <span className="mx-1 h-4 w-px bg-border" aria-hidden="true" />

                        {SOCIALS.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-signal hover:bg-signal/10"
                            >
                                <Icon size={15} aria-hidden="true" />
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted transition-colors"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <div
                    className={`md:hidden grid transition-all duration-300 ease-out ${
                        menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                    <div className="overflow-hidden">
                        <div className="flex flex-col gap-1 px-3 pb-3">
                            {LINKS.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`min-h-[44px] rounded-xl px-4 text-left font-mono text-sm transition-colors ${
                                        active === link.id
                                            ? 'text-signal bg-signal/10'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                >
                                    {link.label}
                                </button>
                            ))}

                            <div className="flex items-center gap-2 px-4 pt-2">
                                {SOCIALS.map(({ label, href, icon: Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-signal hover:bg-muted"
                                    >
                                        <Icon size={16} aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
