import React from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { Link } from 'react-router-dom';

// Create a motion component for Link to enable animations on navigation buttons
const MotionLink = motion.create(Link);

// --- Button ---
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  to?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, to, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm tracking-wide relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  
  const variants = {
    primary: "bg-white text-black shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] border border-transparent",
    secondary: "bg-white/5 text-white border border-white/10 backdrop-blur-sm",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5",
  };

  const content = (
    <>
      {/* Interactive Shine Effect */}
      {variant !== 'ghost' && (
        <motion.div
          initial={{ x: "-100%", skewX: -20 }}
          whileHover={{ x: "150%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10"
        />
      )}
      <span className="flex items-center gap-2 relative z-20">
        {children}
      </span>
    </>
  );

  const isDisabled = props.disabled;

  const motionProps = isDisabled ? {} : {
    whileHover: { 
      y: -2, 
      scale: 1.02,
      boxShadow: variant === 'primary' ? "0 10px 30px -10px rgba(255,255,255,0.5)" : "0 10px 20px -10px rgba(139, 92, 246, 0.3)"
    },
    whileTap: { scale: 0.96, y: 0 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 }
  };

  if (to) {
    return (
      <MotionLink 
        to={to} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...motionProps}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
};

// --- Container ---
export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`}>
    {children}
  </div>
);

// --- Section ---
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  darker?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, darker = false }) => (
  <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${darker ? 'bg-black/40' : ''} ${className}`}>
    {children}
  </section>
);

// --- Card ---
export const Card: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = '', hoverEffect = true }) => (
  <motion.div 
    whileHover={hoverEffect ? { y: -5, boxShadow: "0 20px 40px -20px rgba(139, 92, 246, 0.2)" } : {}}
    className={`bg-surface/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative overflow-hidden group ${className}`}
  >
    {/* Gradient Glow on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

// --- Section Title ---
export const SectionTitle: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block mb-3 text-sm font-semibold tracking-widest text-primary-light uppercase"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-bold text-white tracking-tight"
    >
      {title}
    </motion.h2>
  </div>
);

// --- Reveal Text ---
export const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);