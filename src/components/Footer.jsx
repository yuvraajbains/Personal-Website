import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-slate-500 text-sm font-mono">
            <p>&copy; {new Date().getFullYear()} Yuvraj Bains. All rights reserved.</p>
            <p className="mt-2">Built with <span className="text-cyan-400">React</span> & <span className="text-cyan-400">Tailwind CSS</span></p>
        </footer>
    );
};

export default Footer;
