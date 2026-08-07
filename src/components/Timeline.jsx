import React from 'react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import CompanyBadge from './CompanyBadge';

// Alternating left/right timeline, desktop-only — collapses to a single
// left-anchored column on mobile where there isn't room for two sides.
// Each entry splits across the centerline: the card (title, company,
// bullets) on one side, plain date/location meta on the other.
const Timeline = ({ items }) => {
    return (
        <div className="relative">
            <div
                className="absolute left-7 md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2"
                aria-hidden="true"
            />

            <div className="flex flex-col gap-14 md:gap-16">
                {items.map((item, i) => {
                    const isLeft = i % 2 === 0;
                    const accent = item.accent || 'signal';
                    const accentClasses = accent === 'signal'
                        ? { text: 'text-signal', glow: 'node-glow' }
                        : { text: 'text-spark', glow: 'node-glow-spark' };

                    const card = (
                        <TiltCard className="w-full" maxTilt={3}>
                            <div className={`terminal-card p-5 md:p-6 ${accentClasses.glow}`}>
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <h3 className="text-lg md:text-xl font-bold text-foreground font-display">{item.title}</h3>
                                    {item.status && (
                                        <span className="rounded-full border border-spark/30 bg-spark/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide text-spark">
                                            {item.status}
                                        </span>
                                    )}
                                </div>

                                <div className={`font-semibold mb-4 font-mono text-sm ${accentClasses.text}`}>{item.org}</div>

                                <ul className="space-y-2.5 text-muted-foreground list-disc list-inside text-sm leading-relaxed font-mono">
                                    {item.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </TiltCard>
                    );

                    const meta = (
                        <div className="pt-1 font-mono">
                            <div className="text-sm text-foreground/90">{item.period}</div>
                            <div className="text-sm text-muted-foreground mt-1">{item.location}</div>
                        </div>
                    );

                    return (
                        <Reveal
                            key={item.title + item.org}
                            delay={i * 0.08}
                            x={isLeft ? -20 : 20}
                            y={0}
                            className="relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-x-16 md:items-start"
                        >
                            <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                <CompanyBadge
                                    initials={item.badge}
                                    logoSrc={item.logoSrc}
                                    logoSlug={item.logoSlug}
                                    fill={item.logoFill}
                                    accent={accent}
                                    size={56}
                                />
                            </div>

                            {/* mobile: meta sits right under the node, card follows */}
                            <div className="md:hidden mb-4">{meta}</div>

                            {isLeft ? (
                                <>
                                    <div className="md:pr-10">{card}</div>
                                    <div className="hidden md:block pl-10">{meta}</div>
                                </>
                            ) : (
                                <>
                                    <div className="hidden md:block pr-10 text-right">{meta}</div>
                                    <div className="md:pl-10">{card}</div>
                                </>
                            )}
                        </Reveal>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
