import React from 'react';
import { motion } from 'framer-motion';

// Shared scroll-reveal wrapper. Reduced-motion handling comes from the
// <MotionConfig reducedMotion="user"> wrapping App, not per-instance checks.
const Reveal = ({ children, className = '', delay = 0, y = 16, x = 0, as = 'div', ...props }) => {
    const MotionTag = motion[as] || motion.div;
    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, y, x }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
            {...props}
        >
            {children}
        </MotionTag>
    );
};

export default Reveal;
