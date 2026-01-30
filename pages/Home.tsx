
import React, { useRef, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Section, Container, SectionTitle, Card, Reveal, Button } from '../components/UIComponents';
import { Check, Zap, Clock, Shield, ArrowRight, Code, Microscope, Palette, Rocket, CheckCircle2, Sparkles, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{x: number, y: number, vx: number, vy: number, size: number, alpha: number}> = [];

    const initParticles = () => {
      // Calcola il numero di particelle in base all'area per mantenere la densità costante
      const particleCount = Math.floor((canvas.width * canvas.height) / 25000); 
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2, // Velocità molto lenta per un effetto "premium"
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.3 + 0.1
        });
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
          canvas.width = parent.clientWidth;
          canvas.height = parent.clientHeight;
      } else {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
      }
      initParticles();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around morbido
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`; // Primary color (Violet)
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    // Ritardo l'inizializzazione per assicurarsi che il parent sia renderizzato
    setTimeout(resize, 0);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50 mix-blend-screen" />;
};

const WorkflowStep = ({ number, title, subtitle, description, items, icon: Icon, delay = 0 }: any) => (
  <Reveal delay={delay}>
    <div className="relative pl-12 md:pl-0 group">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-white/5 to-transparent md:-translate-x-1/2 hidden md:block" />
      
      <div className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-32 ${number % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex-1 w-full">
          <div className={`p-10 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-3xl relative overflow-hidden group-hover:border-primary/20 transition-all duration-700`}>
            <span className="absolute -top-10 -right-10 text-[12rem] font-black text-white/[0.02] select-none italic tracking-tighter">
              {number}
            </span>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                <Icon size={28} />
              </div>
              <h4 className="text-[10px] font-black text-primary-light uppercase tracking-[0.3em] mb-3">{subtitle}</h4>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{title}</h3>
              <div className="text-gray-400 text-base leading-relaxed mb-8">
                {description}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-medium text-gray-500 uppercase tracking-widest">
                    <div className="w-1 h-1 rounded-full bg-primary/40" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 z-20">
          <motion.div 
            whileInView={{ scale: [0, 1.2, 1], rotate: [0, 10, 0] }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-2xl bg-background border border-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.3)] flex items-center justify-center text-white text-sm font-black"
          >
            0{number}
          </motion.div>
        </div>
        <div className="flex-1 hidden md:block" />
      </div>
    </div>
  </Reveal>
);

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero />

      {/* Trust Bar */}
      <Section className="!py-10 border-y border-white/5">
        <Container>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'SUPABASE', 'FRAMER MOTION'].map(tech => (
              <span key={tech} className="text-xs font-black tracking-[0.4em] text-white">{tech}</span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Main Process */}
      <Section id="process">
        <ParticleBackground />
        <Container>
          <SectionTitle 
            align="center" 
            title="Come lavoriamo insieme" 
            subtitle="IL METODO CODEPULSE" 
          />
          <div className="mt-32">
            <WorkflowStep 
              number={1}
              icon={Microscope}
              subtitle="STEP 1: ANALISI"
              title="Capire i tuoi obiettivi"
              description={
                <>
                  Prima definiamo cosa deve generare il progetto: <strong className="text-white">contatti, vendite, automazioni</strong>. Poi lo sviluppiamo con un obiettivo preciso.
                </>
              }
              items={['Studio del mercato', 'Definizione obiettivi', 'KPI Chiari']}
            />
            <WorkflowStep 
              number={2}
              icon={Palette}
              subtitle="STEP 2: DESIGN"
              title="Progettato per il tuo business"
              description={
                <>
                  <strong className="text-white">Nessun template</strong>, nessun compromesso. Sito e web app sono pensati per adattarsi al tuo modello di business e al tuo pubblico.
                </>
              }
              items={['Design Custom', 'UX Tailor Made', 'Brand Identity']}
            />
            <WorkflowStep 
              number={3}
              icon={Code}
              subtitle="STEP 3: SVILUPPO"
              title="Tecnologia che fa crescere"
              description={
                <>
                  Codice veloce, stabile e scalabile. <strong className="text-white">Performance, sicurezza e integrazioni</strong> pensate per supportare la crescita, non limitarla.
                </>
              }
              items={['Sviluppo Scalabile', 'Sicurezza Avanzata', 'API Integration']}
            />
            <WorkflowStep 
              number={4}
              icon={Rocket}
              subtitle="STEP 4: RISULTATI"
              title="Un sistema che converte"
              description={
                <>
                  Sito, web app, integrazioni, automazioni e <strong className="text-white">Google Ads</strong> lavorano insieme. Ogni elemento è collegato per trasformare il traffico in risultati senza sprechi.
                </>
              }
              items={['Google Ads', 'Marketing Automation', 'Conversion Rate']}
            />
          </div>
        </Container>
      </Section>

      {/* Final Conversion */}
      <Section className="relative overflow-hidden">
        <Container>
          <div className="relative p-16 md:p-24 rounded-[3rem] bg-white/[0.02] border border-white/5 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_70%)]" />
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                Portiamo il tuo business <br />al livello successivo.
              </h2>
              <p className="text-gray-400 text-lg mb-12 font-light">
                Il nostro team accetta solo un numero limitato di progetti ogni trimestre per garantire la massima qualità e attenzione al dettaglio.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button variant="primary" to="/contatti" className="h-16 px-12 text-base rounded-2xl">
                  Inizia il tuo Progetto
                </Button>
                <div className="flex items-center gap-4 px-8 text-xs font-black uppercase tracking-widest text-gray-500">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Slot Disponibili: 2/5
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
