import React, { useState } from 'react';

// Fallback chain: a real local logo (public/logos/<file>, full colour) →
// a Simple Icons brand mark (flat, tinted to match the accent) → a
// typographic monogram. No logo art is generated or scraped by this
// component — logoSrc only ever points at a file the project already ships.
//
// Always a clean circle: white backing + generous object-contain padding so
// a square crest, a wide wordmark, and a wide icon+wordmark lockup all read
// the same way, ringed with an accent border so the badge separates from
// the dark page behind it.
const CompanyBadge = ({ initials, logoSrc, logoSlug, accent = 'signal', size = 56, fill = false }) => {
    const [srcFailed, setSrcFailed] = useState(false);
    const [slugFailed, setSlugFailed] = useState(false);
    const isSignal = accent === 'signal';

    const showSrc = logoSrc && !srcFailed;
    const showSlug = !showSrc && logoSlug && !slugFailed;

    if (showSrc) {
        // fill=true: the source art already carries its own opaque background
        // (no transparency) — padding it inside a white circle shows that
        // background as a visible square patch. Filling edge-to-edge instead
        // lets the circular mask crop it cleanly, no visible square.
        return (
            <div
                className={`rounded-full border-2 shadow-md flex-shrink-0 overflow-hidden ${
                    fill ? '' : 'flex items-center justify-center bg-white'
                } ${isSignal ? 'border-signal/50' : 'border-spark/50'}`}
                style={{ width: size, height: size, padding: fill ? 0 : size * 0.16 }}
            >
                <img
                    src={logoSrc}
                    alt=""
                    aria-hidden="true"
                    className={`h-full w-full ${fill ? 'object-cover' : 'object-contain'}`}
                    onError={() => setSrcFailed(true)}
                />
            </div>
        );
    }

    return (
        <div
            className={`flex items-center justify-center rounded-full border-2 flex-shrink-0 bg-background ${
                isSignal ? 'border-signal/40' : 'border-spark/40'
            }`}
            style={{ width: size, height: size }}
        >
            {showSlug ? (
                <img
                    src={`https://cdn.simpleicons.org/${logoSlug}`}
                    alt=""
                    aria-hidden="true"
                    width={size * 0.5}
                    height={size * 0.5}
                    style={{ filter: isSignal ? 'invert(60%) sepia(90%) saturate(2000%) hue-rotate(180deg)' : 'invert(45%) sepia(60%) saturate(2000%) hue-rotate(230deg)' }}
                    onError={() => setSlugFailed(true)}
                />
            ) : (
                <span
                    className={`font-display font-semibold ${isSignal ? 'text-signal' : 'text-spark'}`}
                    style={{ fontSize: size * 0.34 }}
                    aria-hidden="true"
                >
                    {initials}
                </span>
            )}
        </div>
    );
};

export default CompanyBadge;
