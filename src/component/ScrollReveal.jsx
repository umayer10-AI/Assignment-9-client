"use client";
import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal Component
 * A reusable wrapper component that animates elements when they enter the viewport.
 * Perfect for smooth slide-up and fade-in effects.
 * 
 * @param {React.ReactNode} children - Elements to animate
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @param {number} y - Initial vertical offset (pixels)
 * @param {number} x - Initial horizontal offset (pixels)
 * @param {string} className - Optional tailwind classes
 */
const ScrollReveal = ({ 
    children, 
    delay = 0, 
    duration = 0.6, 
    y = 50, 
    x = 0, 
    className = "" 
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: y, x: x }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 1.02, 0.43, 1.01] // Premium smooth cubic-bezier curve
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
