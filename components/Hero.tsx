
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowRight, ChevronDown, Terminal, Cpu, Globe, GitBranch, Sparkles } from 'lucide-react';
import { Button, Container, Reveal } from './UIComponents';

const WORDS = ["Web", "App", "SaaS", "UX"];

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

  // --- Scroll Parallax & Exit Effects ---
  const { scrollY } = useScroll();
  
  // Opacity: Fades out as you scroll down
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  
  // Scale: Shrinks slightly to create depth
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.9]);
  
  // Blur: Blurs out content to simulate focus shift
  const heroBlur = useTransform(scrollY, [0, 600], ["blur(0px)", "blur(12px)"]);
  
  // Y Parallax: Moves down slower than scroll to keep it in view slightly (sticky feel)
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);

  // Hide scroll indicator quickly
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);


  // --- Mouse Physics 3D Tilt (Reduced Sensitivity for Premium Feel) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 100, mass: 1 }; // Increased damping for smoother/slower movement
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Reduced movement ranges
  const bgMoveX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const bgMoveY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  
  // Subtle card tilt
  const cardRotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const cardRotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

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
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 perspective-2000 z-0"
    >
      {/* Dynamic Background Grid (Fixed Layering) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* The Grid - Pushed back and rotated as a floor */}
        <motion.div 
          style={{ 
            rotateX: 60, // Fixed perspective angle (Floor)
            x: bgMoveX,
            y: bgMoveY,
            z: -200, // Push visually behind content
            opacity: 0.15 // Subtle opacity
          }}
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_0%,transparent_100%)] origin-center will-change-transform"
        />
        
        {/* Vignette Overlay to blend edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,11,16,0)_20%,#0B0B10_100%)] z-10" />
        
        {/* Orbs - Behind content but above grid */}
        <motion.div 
          style={{ x: useTransform(springX, [-0.5, 0.5], [20, -20]), opacity: 0.4 }}
          className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen z-0" 
        />
        <motion.div 
          style={{ x: useTransform(springX, [-0.5, 0.5], [-20, 20]), opacity: 0.3 }}
          className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen z-0" 
        />
      </div>

      {/* Main Content Wrapper - Higher Z-Index to prevent overlap issues */}
      <motion.div 
        style={{ 
          opacity: heroOpacity, 
          scale: heroScale, 
          filter: heroBlur,
          y: heroY
        }}
        className="w-full relative z-20"
      >
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button variant="primary" to="/contatti" className="group h-20 px-10 sm:px-12 text-base rounded-[2rem] shadow-2xl shadow-primary/20 hover:shadow-primary/40">
                Avvia Progetto <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
              <Button variant="secondary" to="/servizi" className="h-20 px-10 sm:px-12 text-base rounded-[2rem] bg-white/5 border-white/10 hover:bg-white/10">
                Servizi
              </Button>
            </motion.div>
          </div>

          <div className="relative h-[750px] hidden lg:block perspective-1000 z-30">
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
      </motion.div>

      <motion.div 
        style={{ opacity: scrollIndicatorOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500 cursor-pointer hover:text-white transition-all flex flex-col items-center gap-4 group z-20"
      >
        <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-40 group-hover:opacity-100 group-hover:tracking-[0.7em] transition-all">Genesis</span>
        <ChevronDown size={22} className="group-hover:translate-y-1 transition-transform" />
      </motion.div>
    </section>
  );
};
