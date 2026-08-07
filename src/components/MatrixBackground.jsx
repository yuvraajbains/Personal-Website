import React, { useEffect, useRef, useState } from 'react';

// Canvas RGB mirrors of the --signal / --spark CSS tokens (hsl(201 96% 58%) / hsl(262 83% 68%))
// — canvas 2D can't read custom properties directly, so the values are kept in sync by hand.
const SIGNAL_RGB = '45, 179, 251';
const SPARK_RGB = '155, 106, 241';

const LAYER_COUNT = 5;

function buildLayers(width, height, isMobile) {
    const counts = isMobile ? [3, 4, 5, 4, 3] : [5, 8, 10, 8, 5];
    const marginX = width * 0.08;
    const usableWidth = width - marginX * 2;

    const layers = counts.map((count, layerIndex) => {
        const x = marginX + (usableWidth * layerIndex) / (LAYER_COUNT - 1);
        const spacing = height / (count + 1);
        return Array.from({ length: count }, (_, i) => ({
            x: x + (Math.random() - 0.5) * (usableWidth / LAYER_COUNT) * 0.35,
            y: spacing * (i + 1) + (Math.random() - 0.5) * spacing * 0.3,
            baseY: spacing * (i + 1),
            phase: Math.random() * Math.PI * 2,
            layer: layerIndex,
        }));
    });

    // Fixed adjacency between consecutive layers, rolled once so the mesh
    // reads as a stable structure instead of flickering static.
    const edges = [];
    for (let l = 0; l < LAYER_COUNT - 1; l++) {
        layers[l].forEach((nodeA) => {
            layers[l + 1].forEach((nodeB) => {
                if (Math.random() < 0.4) edges.push([nodeA, nodeB]);
            });
        });
    }

    return { layers, edges };
}

// A NeuralBackground: a layered, forward-pass-animated network standing in for
// literal "neural network" imagery instead of a generic particle mesh.
const MatrixBackground = () => {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            setMousePos(mouseRef.current);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let { layers, edges } = buildLayers(width, height, width < 768);
        let pulses = [];
        let frame = 0;

        const spawnPulse = () => {
            const fromLayer = Math.floor(Math.random() * (LAYER_COUNT - 1));
            const from = layers[fromLayer][Math.floor(Math.random() * layers[fromLayer].length)];
            const to = layers[fromLayer + 1][Math.floor(Math.random() * layers[fromLayer + 1].length)];
            pulses.push({ from, to, t: 0, speed: 0.012 + Math.random() * 0.01, spark: Math.random() < 0.28 });
        };

        const CORE_LAYER = 2; // widest hidden layer — the visual hub of the network

        const drawFrame = () => {
            ctx.clearRect(0, 0, width, height);

            // ambient hub glow behind the core layer
            const coreX = layers[CORE_LAYER]?.[0]?.x ?? width / 2;
            const hubGradient = ctx.createRadialGradient(coreX, height / 2, 0, coreX, height / 2, height * 0.4);
            hubGradient.addColorStop(0, `rgba(${SIGNAL_RGB}, 0.05)`);
            hubGradient.addColorStop(1, `rgba(${SIGNAL_RGB}, 0)`);
            ctx.fillStyle = hubGradient;
            ctx.fillRect(0, 0, width, height);

            // fixed inter-layer edges
            edges.forEach(([nodeA, nodeB]) => {
                const dx = (nodeA.x + nodeB.x) / 2 - mouseRef.current.x;
                const dy = (nodeA.y + nodeB.y) / 2 - mouseRef.current.y;
                const near = Math.sqrt(dx * dx + dy * dy) < 180;
                ctx.strokeStyle = near ? `rgba(${SIGNAL_RGB}, 0.22)` : `rgba(${SIGNAL_RGB}, 0.07)`;
                ctx.lineWidth = 0.6;
                ctx.beginPath();
                ctx.moveTo(nodeA.x, nodeA.y);
                ctx.lineTo(nodeB.x, nodeB.y);
                ctx.stroke();
            });

            // nodes — the core layer runs brighter and larger, as the network's hub
            layers.forEach((layer, layerIndex) => {
                const isCore = layerIndex === CORE_LAYER;
                layer.forEach((node) => {
                    if (!prefersReduced) {
                        node.y = node.baseY + Math.sin(frame * 0.008 + node.phase) * 6;
                    }
                    const dx = node.x - mouseRef.current.x;
                    const dy = node.y - mouseRef.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const near = dist < 160;
                    const r = (near ? 2.6 : 1.6) + (isCore ? 0.7 : 0);
                    const baseAlpha = (near ? 0.9 : 0.45) + (isCore ? 0.15 : 0);

                    ctx.fillStyle = `rgba(${SIGNAL_RGB}, ${Math.min(baseAlpha, 1)})`;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
                    ctx.fill();

                    if (near || isCore) {
                        ctx.fillStyle = `rgba(${SIGNAL_RGB}, ${isCore ? 0.1 : 0.12})`;
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, isCore ? 12 : 10, 0, Math.PI * 2);
                        ctx.fill();
                    }
                });
            });

            // INPUT / OUTPUT flanking labels — spells out the metaphor
            ctx.save();
            ctx.font = '10px "JetBrains Mono", monospace';
            ctx.textBaseline = 'middle';
            const inputX = (layers[0]?.[0]?.x ?? 0) - 22;
            const outputX = (layers[LAYER_COUNT - 1]?.[0]?.x ?? width) + 22;
            ctx.save();
            ctx.translate(inputX, height / 2);
            ctx.rotate(-Math.PI / 2);
            ctx.fillStyle = `rgba(${SIGNAL_RGB}, 0.3)`;
            ctx.textAlign = 'center';
            ctx.fillText('INPUT LAYER', 0, 0);
            ctx.restore();
            ctx.save();
            ctx.translate(outputX, height / 2);
            ctx.rotate(-Math.PI / 2);
            ctx.fillStyle = `rgba(${SPARK_RGB}, 0.3)`;
            ctx.textAlign = 'center';
            ctx.fillText('OUTPUT LAYER', 0, 0);
            ctx.restore();
            ctx.restore();

            // forward-pass activation pulses
            if (!prefersReduced) {
                pulses.forEach((p) => {
                    p.t += p.speed;
                    const x = p.from.x + (p.to.x - p.from.x) * p.t;
                    const y = p.from.y + (p.to.y - p.from.y) * p.t;
                    const color = p.spark ? SPARK_RGB : SIGNAL_RGB;
                    ctx.fillStyle = `rgba(${color}, ${0.9 * (1 - p.t * 0.15)})`;
                    ctx.beginPath();
                    ctx.arc(x, y, 2.2, 0, Math.PI * 2);
                    ctx.fill();
                });
                pulses = pulses.filter((p) => p.t < 1);
                if (frame % 6 === 0 && pulses.length < 32) spawnPulse();
            }

            frame++;
        };

        let animationId;
        if (prefersReduced) {
            drawFrame();
        } else {
            const animate = () => {
                drawFrame();
                animationId = requestAnimationFrame(animate);
            };
            animationId = requestAnimationFrame(animate);
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            ({ layers, edges } = buildLayers(width, height, width < 768));
            pulses = [];
            if (prefersReduced) drawFrame();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-background overflow-hidden font-mono">
            {/* Interactive spotlight */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
                style={{
                    background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${SIGNAL_RGB}, 0.07), transparent 80%)`,
                }}
            />

            {/* Blueprint grid */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(${SIGNAL_RGB}, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(${SIGNAL_RGB}, 0.4) 1px, transparent 1px)`,
                    backgroundSize: '56px 56px',
                }}
            />

            <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-80 pointer-events-none" />

            {/* Scanlines */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                    backgroundSize: '100% 4px',
                }}
            />
        </div>
    );
};

export default MatrixBackground;
