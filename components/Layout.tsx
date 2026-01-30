
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight, Instagram, Twitter } from 'lucide-react';
import { Container, Button } from './UIComponents';
import { NAV_ITEMS } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      backdropFilter: "blur(40px)",
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const,
        when: "beforeChildren"
      }
    }
  };

  const linkVariants = {
    closed: { y: 100, opacity: 0, rotate: 5 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  const socialVariants = {
    closed: { opacity: 0, scale: 0.8 },
    open: { 
      opacity: 1, 
      scale: 1, 
      transition: { delay: 0.6, duration: 0.5 } 
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-background/40 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
        <Container className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-3 group"
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 rounded-xl bg-premium-gradient p-[1px] group-hover:rotate-[10deg] transition-all duration-500 shadow-lg shadow-primary/20 group-hover:shadow-primary/40">
              <div className="w-full h-full rounded-xl bg-background flex items-center justify-center relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-white/20 skew-x-12 z-20"
                />
                <img src="https://i.imgur.com/iEqSELY.png" alt="CodePulse Logo" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 group-hover:to-primary-light transition-all duration-500">CodePulse</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className="relative group px-5 py-2"
              >
                {({ isActive }) => (
                  <>
                    <span className={`relative z-10 text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                      {item.label}
                    </span>
                    
                    {/* Active State Background Pill */}
                    {isActive && (
                      <motion.div 
                        layoutId="navbar-pill"
                        className="absolute inset-0 bg-white/5 rounded-full border border-white/10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Active/Hover Indicator Dot */}
                    <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-300 ${isActive ? 'opacity-100 scale-100 shadow-[0_0_10px_#8B5CF6]' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'}`} />
                  </>
                )}
              </NavLink>
            ))}
            
            <div className="pl-6">
               <Button 
                 variant="primary" 
                 to="/contatti" 
                 className="!py-3 !px-8 !text-[10px] !font-black !rounded-full shadow-[0_10px_30px_-10px_rgba(139,92,246,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(139,92,246,0.6)] border border-white/20 relative overflow-hidden"
               >
                  START PROJECT
               </Button>
            </div>
          </nav>

          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md overflow-hidden group"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </Container>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-background/80 flex flex-col pt-32 pb-12 px-8 overflow-hidden"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: [0, 50, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" 
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
                x: [0, -50, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[-10%] left-[-20%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" 
            />

            <div className="relative z-10 flex flex-col h-full max-w-lg mx-auto w-full">
              <div className="flex flex-col gap-6 md:gap-8">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div key={item.path} custom={i} variants={linkVariants}>
                    <NavLink 
                      to={item.path}
                      className="text-6xl md:text-8xl font-black text-white tracking-tighter hover:text-primary transition-colors flex items-center justify-between group overflow-hidden"
                    >
                      <span className="relative inline-block">
                        {item.label}
                        <span className="absolute bottom-2 left-0 w-0 h-2 bg-premium-gradient transition-all duration-700 group-hover:w-full opacity-50" />
                      </span>
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500 text-primary-light hidden sm:block" size={48} />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-12">
                <motion.div variants={linkVariants} custom={NAV_ITEMS.length}>
                  <Button variant="primary" to="/contatti" className="w-full h-20 text-base font-black uppercase tracking-[0.2em] rounded-3xl shadow-2xl shadow-primary/20">
                    GET IN TOUCH
                  </Button>
                </motion.div>
                
                <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
                  <motion.div variants={socialVariants} className="space-y-4">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Engineering HQ</span>
                    <p className="text-white/80 font-medium text-sm">Robert Musin Studio<br/>Milan, Italy</p>
                  </motion.div>
                  <motion.div variants={socialVariants} className="space-y-4">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Connect</span>
                    <div className="flex gap-6">
                      <motion.a whileHover={{ y: -3, color: '#8B5CF6' }} href="#" className="text-gray-400"><Linkedin size={22} /></motion.a>
                      <motion.a whileHover={{ y: -3, color: '#EC4899' }} href="#" className="text-gray-400"><Instagram size={22} /></motion.a>
                      <motion.a whileHover={{ y: -3, color: '#3B82F6' }} href="#" className="text-gray-400"><Twitter size={22} /></motion.a>
                      <motion.a whileHover={{ y: -3, color: '#FFFFFF' }} href="#" className="text-gray-400"><Mail size={22} /></motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const Footer = () => (
  <footer className="bg-background py-24 border-t border-white/5 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-black mb-8 flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-premium-gradient" />
             CodePulse
          </div>
          <p className="text-gray-400 max-w-sm mb-10 leading-relaxed font-light text-lg">
            Engineering digital excellence. We build software that defines the future of your business.
          </p>
          <div className="flex gap-4">
             {[Github, Linkedin, Mail].map((Icon, i) => (
               <motion.a 
                 key={i}
                 whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(139, 92, 246, 0.5)' }}
                 href="#" 
                 className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white transition-all"
               >
                 <Icon size={20} />
               </motion.a>
             ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Navigation</h4>
          <ul className="space-y-4">
            {NAV_ITEMS.map(item => (
              <li key={item.path}>
                <NavLink to={item.path} className="text-gray-500 hover:text-white transition-colors text-sm font-medium">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">System</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Architecture</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Service Protocols</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Engineering</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-gray-500 font-medium uppercase tracking-[0.2em]">© 2024 CodePulse Studio. Developed by Robert Musin.</p>
        <div className="flex gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
          <span className="hover:text-white transition-colors cursor-pointer">Security Protocol 2.1</span>
          <span className="hover:text-white transition-colors cursor-pointer">SSL Encrypted</span>
        </div>
      </div>
    </Container>
  </footer>
);