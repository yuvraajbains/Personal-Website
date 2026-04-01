import React, { useEffect, useRef, useState } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const nodes = [];
        const nodeCount = 70;
        
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            
            ctx.strokeStyle = 'rgba(34, 197, 94, 0.08)';
            ctx.lineWidth = 0.5;

            nodes.forEach((node, i) => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = node.x - nodes[j].x;
                    const dy = node.y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 180) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }

                ctx.fillStyle = 'rgba(34, 197, 94, 0.3)';
                ctx.beginPath();
                ctx.arc(node.x, node.y, 1, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#020617] overflow-hidden font-mono">
            {/* Interactive Spotlight */}
            <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
                style={{
                    background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 197, 94, 0.08), transparent 80%)`,
                }}
            />

            {/* Static Content Grid */}
            <div 
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '120px 120px'
                }}
            />

            <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-60 pointer-events-none" />

            {/* HUD Telemetry Elements */}
            <div className="absolute top-24 left-10 text-[10px] text-green-500/20 space-y-1 pointer-events-none uppercase tracking-widest hidden lg:block">
                <div>[ NODE_PROTOCOL: SECURE ]</div>
                <div>[ LATENCY: 14MS ]</div>
                <div>[ ENCRYPTION: AES-256 ]</div>
                <div>[ SYSTEM_LOGS: ACTIVE ]</div>
                <div className="pt-4 text-green-500/10">0X7FF_UPTIME: 1440:22:04</div>
            </div>

            <div className="absolute bottom-10 right-10 text-[10px] text-cyan-500/20 space-y-1 pointer-events-none uppercase tracking-widest text-right hidden lg:block">
                <div>LOC: {Math.floor(mousePos.x)} : {Math.floor(mousePos.y)}</div>
                <div>THREAD_ID: OX7FF_ACTIVE</div>
                <div>PORT_UP: 3001</div>
                <div className="pt-2 text-cyan-500/10 opacity-50 font-mono">
                    SEC_MEM_BUFFER: [#######.....] 78%
                </div>
            </div>

            {/* Scanlines Effect */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                    backgroundSize: '100% 4px'
                }}
            />
        </div>
    );
};

export default MatrixBackground;
