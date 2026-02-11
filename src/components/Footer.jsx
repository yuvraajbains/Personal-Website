import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-slate-500 text-sm font-mono">
            <p>&copy; {new Date().getFullYear()} Yuvraj Bains. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
