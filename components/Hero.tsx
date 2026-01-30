
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Terminal, Cpu, Globe, GitBranch, Sparkles } from 'lucide-react';
import { Button, Container, Reveal } from './UIComponents';

const WORDS = ["Web", "App", "SaaS", "UX"];

const StaggeredText = ({ text, className }: { text: string, className?: string }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(5px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className="inline-block whitespace-pre">
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Componente Card ottimizzato che accetta stili motion per il tilt 3D
const FloatingCard = ({ 
  delay, 
  duration = 8, 
  className, 
  children,
  style
}: { 
  delay: number, 
  duration?: number, 
  className?: string, 
  children?: React.ReactNode,
  style?: any
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      type: "spring",
      stiffness: 40,
      damping: 15,
      delay: delay 
    }}
    style={{ ...style, perspective: 1000 }}
    className={`absolute ${className}`}
  >
    <motion.div
       animate={{ 
         y: [0, -15, 0], 
       }}
       transition={{ 
         duration: duration, 
         repeat: Infinity, 
         ease: "easeInOut",
         times: [0, 0.5, 1]
       }}
       className="h-full w-full rounded-3xl border border-white/5 bg-surface/30 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] p-7 relative overflow-hidden group border-t-white/10 will-change-transform"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10">
          {children}
        </div>
    </motion.div>
  </motion.div>
);

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion Values per performance 60fps (niente re-render React al mouse move)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Physics Springs per fluidità (damping smorza il movimento rendendolo "pesante")
  const springConfig = { damping: 30, stiffness: 200, mass: 1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Transforms per gli elementi di sfondo
  const bgRotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const bgRotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const bgMoveX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const bgMoveY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  // Transforms per le card (effetto tilt opposto e più accentuato)
  const cardRotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const cardRotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    // Calcoliamo coordinate normalizzate da -0.5 a 0.5
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    // Aggiorniamo i MotionValue invece dello state
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 perspective-2000"
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ 
            rotateX: useTransform(springY, [-0.5, 0.5], [40, 50]), // Base rotation + tilt
            rotateY: bgRotateY,
            x: bgMoveX,
            y: bgMoveY,
            z: -100
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-[0.05] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:60px_60px]"
        />
        
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_70%)]" />
        
        <motion.div 
          style={{ x: useTransform(springX, [-0.5, 0.5], [50, -50]), y: useTransform(springY, [-0.5, 0.5], [50, -50]) }}
          className="absolute top-[-10%] right-[-5%] w-[900px] h-[900px] bg-primary/10 rounded-full blur-[180px] opacity-60 will-change-transform" 
        />
        <motion.div 
          style={{ x: useTransform(springX, [-0.5, 0.5], [-30, 30]), y: useTransform(springY, [-0.5, 0.5], [-30, 30]) }}
          className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-accent/5 rounded-full blur-[150px] opacity-40 will-change-transform" 
        />
      </div>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-primary-light text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-md"
            >
              <Sparkles size={12} className="text-primary animate-pulse" />
              Elite Development Lab
            </motion.div>
            
            <h1 className="text-7xl md:text-[9.5rem] font-black leading-[0.8] tracking-tighter text-white">
              Sviluppo <br />
              <div className="flex items-center h-[1.1em] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={WORDS[index]}
                    initial={{ y: "100%", rotateX: -90, opacity: 0 }}
                    animate={{ y: 0, rotateX: 0, opacity: 1 }}
                    exit={{ y: "-100%", rotateX: 90, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-transparent bg-clip-text bg-premium-gradient will-change-transform origin-bottom"
                  >
                    {WORDS[index]}
                  </motion.div>
                </AnimatePresence>
              </div>
              <span className="text-white/20 block text-5xl md:text-6xl mt-6 font-light italic tracking-tight">Senza Compromessi.</span>
            </h1>
            
            <Reveal delay={0.4}>
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light border-l-2 border-primary/30 pl-8">
                Partner tecnologico d'élite. Architettiamo software che ridefiniscono gli standard del web. <span className="text-white font-medium">Precisione, velocità, eccellenza.</span>
              </p>
            </Reveal>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8"
          >
            <Button variant="primary" to="/contatti" className="group h-20 px-14 text-base rounded-[2rem] shadow-2xl shadow-primary/20 hover:shadow-primary/40">
              Avvia Progetto <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-500" />
            </Button>
          </motion.div>
        </div>

        <div className="relative h-[750px] hidden lg:block perspective-1000">
            {/* Visual Abstract Sphere */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-[110%] h-[110%] border-[1px] border-white/5 rounded-full will-change-transform"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[80%] h-[80%] border-[1px] border-white/5 rounded-full border-dashed will-change-transform"
              />
            </div>

            <div className="absolute inset-0">
               {/* Corporate/Commit Card */}
               <FloatingCard 
                  delay={1} 
                  className="top-[5%] right-[5%] w-80 z-20"
                  style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
               >
                 <div className="flex items-center gap-5 mb-8">
                   <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                     <GitBranch size={28} />
                   </div>
                   <div>
                     <h4 className="text-sm font-black text-white tracking-widest uppercase">System Core</h4>
                     <p className="text-[10px] text-green-500 font-mono flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                       Active Lifecycle
                     </p>
                   </div>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between text-[11px] font-mono text-gray-500">
                      <span>Commit SHA</span>
                      <span className="text-white">ef4a1d9...</span>
                    </div>
                    <div className="h-[1px] bg-white/5 w-full" />
                    <div className="flex justify-between text-[11px] font-mono text-gray-500">
                      <span>Edge Performance</span>
                      <span className="text-white">99.98%</span>
                    </div>
                 </div>
               </FloatingCard>

               <FloatingCard 
                  delay={1.4} 
                  duration={10} 
                  className="bottom-[15%] left-[0%] w-80 z-30"
                  style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
               >
                  <div className="flex items-center justify-between mb-10">
                    <Terminal size={20} className="text-primary-light" />
                    <div className="flex gap-1.5">
                      {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />)}
                    </div>
                  </div>
                  <div className="space-y-8">
                    {[
                      { label: 'Compute Power', icon: Cpu, speed: '99%' },
                      { label: 'Network Latency', icon: Globe, speed: '8ms' }
                    ].map((item, i) => (
                      <div key={i} className="space-y-3">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                          <span className="flex items-center gap-3"><item.icon size={14}/> {item.label}</span>
                          <span className="text-white">{item.speed}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: item.speed }}
                            viewport={{ once: true }}
                            transition={{ delay: 2 + i * 0.2, duration: 2, ease: "circOut" }}
                            className="h-full bg-premium-gradient"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
               </FloatingCard>
            </div>
        </div>
      </Container>

      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500 cursor-pointer hover:text-white transition-all flex flex-col items-center gap-4 group"
      >
        <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-40 group-hover:opacity-100 group-hover:tracking-[0.7em] transition-all">Genesis</span>
        <ChevronDown size={22} className="group-hover:translate-y-1 transition-transform" />
      </motion.div>
    </section>
  );
};