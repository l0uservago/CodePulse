
import React from 'react';
import { Section, Container, SectionTitle, Reveal, Button } from '../components/UIComponents';
import { SERVICES } from '../constants';
import { ShieldCheck, Zap, Code2, ArrowRight, Check, Database, Server, Rocket, Terminal, Globe, Cpu, Layout, Gauge, Lock, CheckCircle2, XCircle, BarChart3 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- PREMIUM VISUAL COMPONENTS ---

const WebVisual = () => (
  <div className="relative w-full h-64 bg-gradient-to-b from-white/[0.03] to-transparent rounded-t-xl overflow-hidden flex items-center justify-center group-hover:bg-white/[0.06] transition-colors duration-500">
    {/* Background Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
    
    {/* Browser Window */}
    <motion.div 
      initial={false}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-72 h-44 bg-[#0B0B10] border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden z-10"
    >
      {/* Header */}
      <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
         <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
         <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
         <div className="ml-4 w-32 h-1.5 bg-white/10 rounded-full" />
      </div>
      
      {/* Content Area with Scan Effect */}
      <div className="flex-1 p-5 relative overflow-hidden flex items-center justify-center">
         {/* Skeleton UI (Background) */}
         <div className="absolute inset-0 p-5 space-y-4 opacity-10 pointer-events-none">
            <div className="flex gap-4">
               <div className="w-16 h-16 rounded-lg bg-white/30" />
               <div className="space-y-2 flex-1 pt-2">
                  <div className="w-full h-2 bg-white/30 rounded-full" />
                  <div className="w-2/3 h-2 bg-white/30 rounded-full" />
               </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
               <div className="h-12 bg-white/30 rounded-lg" />
               <div className="h-12 bg-white/30 rounded-lg" />
               <div className="h-12 bg-white/30 rounded-lg" />
            </div>
         </div>

         {/* Laser Scan Line */}
         <motion.div 
           animate={{ top: ['-20%', '120%'] }}
           transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
           className="absolute left-0 right-0 h-[2px] bg-green-500/80 shadow-[0_0_15px_rgba(34,197,94,0.6)] z-10"
         />

         {/* Score Card Overlay - FIXED ALIGNMENT */}
         <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
            <div className="relative w-28 h-28">
               <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Track */}
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" fill="none" className="text-white/5" />
                  {/* Indicator */}
                  <motion.circle 
                    cx="50" cy="50" r="40" 
                    stroke="currentColor" 
                    strokeWidth="6" 
                    fill="none" 
                    className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                    strokeDasharray="251.2" // 2 * PI * 40
                    strokeDashoffset="251.2"
                    whileInView={{ strokeDashoffset: 10 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    strokeLinecap="round"
                  />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center flex-col">
                 <span className="font-black text-3xl text-white tracking-tighter">99</span>
                 <span className="text-[8px] font-bold text-green-500 uppercase tracking-widest mt-[-2px]">Score</span>
               </div>
            </div>
         </div>
      </div>
    </motion.div>

    {/* Floating Badge */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, x: 20 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 0.5, type: "spring" }}
      className="absolute top-12 right-8 z-30"
    >
       <div className="bg-[#1A1A23] border border-primary/30 px-3 py-1.5 rounded-lg shadow-[0_10px_20px_-5px_rgba(0,0,0,0.5)] flex items-center gap-2">
          <div className="relative w-2 h-2">
             <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
             <div className="relative w-2 h-2 bg-green-500 rounded-full" />
          </div>
          <span className="text-[10px] font-bold text-white tracking-wide font-mono">SEO: 100%</span>
       </div>
    </motion.div>
  </div>
);

const AppVisual = () => (
  <div className="relative w-full h-64 bg-gradient-to-b from-white/[0.03] to-transparent rounded-t-xl overflow-hidden flex items-center justify-center perspective-1000 group">
     {/* Ambient Glow */}
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_70%)]" />

     {/* Isometric Stack - INCREASED SPACING */}
     <div className="relative transform-style-3d rotate-x-[60deg] rotate-z-[45deg] scale-75 md:scale-90 transition-transform duration-500 mt-8">
        
        {/* Layer 1: Database (Bottom) */}
        <motion.div 
          className="w-32 h-32 bg-[#0F0F16] border border-white/10 rounded-2xl shadow-xl flex items-center justify-center absolute top-0 left-0"
          style={{ z: 0 }}
          whileHover={{ z: 0, x: 0, y: 0 }} // Base stays
        >
           <div className="absolute inset-0 bg-grid-white/[0.05]" />
           <Database size={40} className="text-gray-700 relative z-10" />
           <div className="absolute -right-16 text-[10px] text-gray-500 font-mono rotate-[-90deg] translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">DATABASE</div>
        </motion.div>

        {/* Connection Lines */}
        <motion.div 
           className="absolute top-1/2 left-1/2 w-0.5 h-32 bg-gradient-to-t from-gray-700 to-primary/50 origin-bottom transform-style-3d"
           style={{ z: 0, x: -1, y: -1, rotateX: -90, translateZ: 10 }}
        />

        {/* Layer 2: Logic (Middle) - INCREASED LIFT */}
        <motion.div 
          className="w-32 h-32 bg-[#161620] backdrop-blur-md border border-primary/20 rounded-2xl shadow-xl flex items-center justify-center absolute top-0 left-0"
          animate={{ z: 30, x: 15, y: -15 }}
          whileHover={{ z: 80, x: 40, y: -40 }} // Increased lift
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
           <Server size={40} className="text-primary relative z-10" />
           <div className="absolute inset-0 border-2 border-primary/10 rounded-2xl animate-pulse" />
           <div className="absolute -right-16 text-[10px] text-primary font-mono rotate-[-90deg] translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">API / SERVER</div>
        </motion.div>

        {/* Layer 3: UI (Top) - INCREASED LIFT */}
        <motion.div 
          className="w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center absolute top-0 left-0"
          animate={{ z: 60, x: 30, y: -30 }}
          whileHover={{ z: 160, x: 80, y: -80 }} // Increased lift significantly
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
           <Layout size={40} className="text-white relative z-10" />
           {/* UI Mockup Details */}
           <div className="absolute top-3 left-3 right-3 h-2 bg-white/20 rounded-full" />
           <div className="absolute top-8 left-3 w-8 h-8 bg-white/10 rounded-full" />
           <div className="absolute top-10 left-14 right-3 h-2 bg-white/10 rounded-full" />
           <div className="absolute -right-16 text-[10px] text-white font-mono rotate-[-90deg] translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">FRONTEND</div>
        </motion.div>
     </div>
  </div>
);

const DataVisual = () => (
  <div className="relative w-full h-64 bg-gradient-to-b from-white/[0.03] to-transparent rounded-t-xl overflow-hidden flex flex-col items-center justify-center group">
     {/* Grid Lines */}
     <div className="absolute inset-0 flex flex-col justify-between py-6 px-8 opacity-10 pointer-events-none">
        <div className="w-full h-px bg-white" />
        <div className="w-full h-px bg-white" />
        <div className="w-full h-px bg-white" />
        <div className="w-full h-px bg-white" />
        <div className="w-full h-px bg-white" />
     </div>

     {/* Live Chart Container - FIXED COORDINATES */}
     <div className="relative w-full h-full px-8 pt-12 pb-4">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 300 150" preserveAspectRatio="none">
           <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                 <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
           </defs>
           
           {/* 
              Fixed Path Data 
              Points: (0,120) -> (60,80) -> (120,100) -> (180,40) -> (240,60) -> (300,20)
           */}
           <motion.path
             d="M0,120 C30,120 30,80 60,80 C90,80 90,100 120,100 C150,100 150,40 180,40 C210,40 210,60 240,60 C270,60 270,20 300,20 L300,150 L0,150 Z"
             fill="url(#chartGradient)"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1 }}
           />
           <motion.path
             d="M0,120 C30,120 30,80 60,80 C90,80 90,100 120,100 C150,100 150,40 180,40 C210,40 210,60 240,60 C270,60 270,20 300,20"
             fill="none"
             stroke="#8B5CF6"
             strokeWidth="3"
             initial={{ pathLength: 0 }}
             whileInView={{ pathLength: 1 }}
             transition={{ duration: 2, ease: "easeInOut" }}
           />

           {/* Data Points - PRECISELY ALIGNED TO PATH ANCHORS */}
           {[
             { cx: 60, cy: 80 },
             { cx: 120, cy: 100 },
             { cx: 180, cy: 40 },
             { cx: 240, cy: 60 },
             { cx: 300, cy: 20 }
           ].map((point, i) => (
             <motion.circle
               key={i}
               cx={point.cx}
               cy={point.cy}
               r="4"
               fill="#0B0B10"
               stroke="#8B5CF6"
               strokeWidth="2"
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               transition={{ delay: 1 + i * 0.2 }}
               className="group-hover:scale-150 transition-transform origin-center cursor-pointer"
             />
           ))}
        </svg>

        {/* Floating Tooltip */}
        <motion.div 
           className="absolute top-4 right-12 bg-surface border border-white/10 p-3 rounded-lg shadow-xl flex flex-col gap-1 z-20"
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 2.2 }}
        >
           <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Real-time Users</div>
           <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white">1,248</span>
              <div className="flex items-center text-[10px] text-green-500 font-bold bg-green-500/10 px-1.5 py-0.5 rounded">
                 <Rocket size={10} className="mr-1" /> +12%
              </div>
           </div>
        </motion.div>
     </div>
  </div>
);

// --- MAIN COMPONENT ---

const TechBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-tight flex items-center gap-1.5 hover:bg-white/10 transition-colors cursor-default">
    <div className="w-1 h-1 rounded-full bg-primary/50" />
    {children}
  </span>
);

const MAINTENANCE_PLANS = [
  {
    name: "Essential Care",
    price: "50",
    period: "mese",
    description: "La polizza assicurativa per la tua presenza digitale. Dormi sonni tranquilli.",
    features: [
      "Hosting & Dominio Inclusi",
      "Monitoraggio Uptime 24/7",
      "Aggiornamenti di Sicurezza Critici",
      "Backup Giornaliero Cloud",
      "SSL Certificate Renewal",
      "Ripristino prioritario in caso di crash"
    ],
    icon: Server,
    isPremium: false
  },
  {
    name: "Pro Evolution",
    price: "149",
    period: "mese",
    description: "Per business in crescita che richiedono evoluzione continua e supporto immediato.",
    features: [
      "Tutto incluso in Essential",
      "2h Sviluppo / Mese incluse (Cumulative)",
      "Supporto Prioritario (WhatsApp/Slack)",
      "Performance Audit Mensile",
      "Consulenza Strategica Trimestrale"
    ],
    icon: Rocket,
    isPremium: true
  }
];

export const Services = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const getVisual = (id: string) => {
    switch(id) {
      case 'siti-web': return <WebVisual />;
      case 'web-app': return <AppVisual />;
      case 'dashboard': return <DataVisual />;
      default: return null;
    }
  };

  const getTechStack = (id: string) => {
    switch(id) {
      case 'siti-web': return ['Next.js 14', 'Framer Motion', 'Vercel CDN', 'SEO JSON-LD'];
      case 'web-app': return ['React Query', 'Supabase Auth', 'PostgreSQL', 'Edge Functions'];
      case 'dashboard': return ['Recharts', 'Real-time Sub', 'Aggregations', 'Data Export'];
      default: return [];
    }
  };

  return (
    <>
      {/* Hero Section Premium */}
      <section className="relative pt-40 pb-32 overflow-hidden min-h-[70vh] flex items-center">
        {/* --- BACKGROUND LAYERS --- */}
        
        {/* 1. Cyber Grid Perspective */}
        <div className="absolute inset-0 pointer-events-none perspective-1000">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 left-0 w-full h-[120%] bg-[linear-gradient(to_right,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50 transform perspective-3d rotate-x-60 origin-top"
          />
        </div>

        {/* 2. Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_60%)] pointer-events-none" />
        
        {/* 3. Rotating Geometric Systems (Right Side) */}
        <div className="absolute right-[-10%] top-[10%] w-[800px] h-[800px] pointer-events-none hidden lg:block opacity-30">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 border border-dashed border-white/10 rounded-full"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[15%] border border-primary/20 rounded-full border-t-transparent border-l-transparent"
             />
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[30%] border-[2px] border-white/5 rounded-full border-b-transparent border-r-transparent"
             />
        </div>

        {/* 4. Floating Code Elements (Decorations) */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute right-[15%] top-[20%] hidden lg:flex flex-col gap-6 pointer-events-none z-0"
        >
           <motion.div 
             animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="p-4 bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex items-center gap-3"
           >
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400"><Database size={16} /></div>
              <div className="space-y-1">
                 <div className="w-20 h-2 bg-white/10 rounded-full" />
                 <div className="w-12 h-2 bg-white/5 rounded-full" />
              </div>
           </motion.div>

           <motion.div 
             animate={{ y: [10, -10, 10], x: [20, 0, 20] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
             className="p-4 bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex items-center gap-3 ml-12"
           >
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary"><Code2 size={16} /></div>
              <div className="space-y-1">
                 <div className="w-24 h-2 bg-white/10 rounded-full" />
                 <div className="w-16 h-2 bg-white/5 rounded-full" />
              </div>
           </motion.div>
        </motion.div>


        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-light text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Eccellenza Tecnica
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                Soluzioni Digitali <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent relative">
                  Progettate per Scalare
                  {/* Underline decoration */}
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl border-l-2 border-white/10 pl-6">
                Realizziamo siti web e web app progettati per <strong className="text-white">generare risultati</strong>, con dashboard e sistemi di analytics che trasformano i dati in decisioni concrete.
              </p>

              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-black/40 px-3 py-2 rounded-lg border border-white/5">
                    <Terminal size={14} className="text-primary" />
                    <span>git commit -m "init_success"</span>
                 </div>
                 <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-black/40 px-3 py-2 rounded-lg border border-white/5">
                    <Zap size={14} className="text-yellow-500" />
                    <span>Latency: &lt;50ms</span>
                 </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services Premium Grid */}
      <Section darker className="relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {SERVICES.map((service, idx) => (
              <Reveal key={service.id} delay={idx * 0.1}>
                <motion.div 
                  className="group relative flex flex-col h-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.15)] overflow-hidden"
                >
                  {/* Service Visual Header */}
                  {getVisual(service.id)}

                  <div className="p-8 flex flex-col flex-grow relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <service.icon size={24} />
                       </div>
                       <h3 className="text-2xl font-bold text-white tracking-tight">{service.title}</h3>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Tech Specs Block */}
                    <div className="mb-8 p-4 bg-black/40 rounded-lg border border-white/5">
                      <div className="flex items-center gap-2 mb-3 text-[10px] font-black uppercase text-gray-500 tracking-widest">
                         <Cpu size={12} /> Tech Architecture
                      </div>
                      <div className="grid grid-cols-2 gap-y-2">
                        {getTechStack(service.id).map((tech, tIdx) => (
                          <div key={tIdx} className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                             <div className="w-1 h-1 rounded-full bg-primary" /> {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-white/5">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3 text-sm text-gray-300 group/item">
                          <CheckCircle2 size={16} className="text-gray-600 group-hover/item:text-primary transition-colors shrink-0" />
                          <span className="group-hover/item:text-white transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Maintenance & Support Plans */}
      <Section className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <Container>
          <SectionTitle 
            title="Non ti lasciamo solo" 
            subtitle="CARE PLANS & SUPPORTO" 
            align="center"
          />
          <p className="text-center text-gray-400 max-w-2xl mx-auto -mt-8 mb-16">
            Il software è un organismo vivente. Ha bisogno di cura, aggiornamenti e sicurezza. Scegli il piano adatto per garantire longevità al tuo investimento.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {MAINTENANCE_PLANS.map((plan, idx) => (
              <Reveal key={plan.name} delay={idx * 0.2}>
                <div className={`relative h-full flex flex-col p-1 rounded-[2rem] transition-all duration-500 group ${plan.isPremium ? 'bg-gradient-to-b from-primary/30 via-white/10 to-transparent shadow-[0_20px_60px_-15px_rgba(139,92,246,0.15)]' : 'bg-white/5 border border-white/5 hover:bg-white/[0.07]'}`}>
                  {plan.isPremium && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg z-20">
                      Recommended
                    </div>
                  )}
                  
                  <div className="flex-grow bg-surface/80 backdrop-blur-xl rounded-[1.8rem] p-8 md:p-10 flex flex-col relative overflow-hidden h-full">
                    {/* Background Shine for Premium */}
                    {plan.isPremium && (
                       <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] pointer-events-none rounded-full -translate-y-1/2 translate-x-1/2" />
                    )}

                    <div className="flex justify-between items-start mb-8 relative z-10">
                      <div>
                        <h3 className={`text-lg font-black uppercase tracking-widest mb-2 ${plan.isPremium ? 'text-primary-light' : 'text-gray-400'}`}>
                          {plan.name}
                        </h3>
                        <p className="text-sm text-gray-400 max-w-[250px] leading-relaxed">
                          {plan.description}
                        </p>
                      </div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${plan.isPremium ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white/5 text-gray-400'}`}>
                        <plan.icon size={24} />
                      </div>
                    </div>

                    <div className="flex items-baseline gap-1 mb-8 relative z-10">
                      <span className="text-4xl font-bold text-white tracking-tighter">€{plan.price}</span>
                      <span className="text-sm text-gray-500 font-medium">/ {plan.period}</span>
                    </div>

                    <div className="space-y-4 mb-10 flex-grow relative z-10">
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.isPremium ? 'bg-primary/20 text-primary' : 'bg-white/10 text-gray-400'}`}>
                            <Check size={10} strokeWidth={4} />
                          </div>
                          <span className="text-sm text-gray-200">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant={plan.isPremium ? 'primary' : 'secondary'} 
                      className="w-full relative z-10"
                      to="/contatti"
                    >
                      {plan.isPremium ? 'Attiva Piano Pro' : 'Richiedi Essential'}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Comparison: Why us? */}
      <Section>
        <Container>
          <SectionTitle 
            title="Perché scegliere CodePulse?" 
            subtitle="THE BOUTIQUE ADVANTAGE"
            align="center"
          />
          
          <Reveal delay={0.2}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
              {/* Agency Side */}
              <div className="bg-surface/30 p-10 md:p-12">
                <div className="flex items-center gap-3 mb-8 text-gray-500">
                  <XCircle size={24} />
                  <span className="font-bold uppercase tracking-widest text-sm">Agenzie Tradizionali</span>
                </div>
                <ul className="space-y-6">
                  {[
                    "Passaggi di mano tra account e junior developer",
                    "Tempi di attesa infiniti per piccoli feedback",
                    "Codice 'legacy' difficile da scalare o mantenere",
                    "Costi gonfiati da overhead aziendali e uffici fisici",
                    "Design standard basato su template pre-fatti"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-gray-500 text-sm italic">
                      <span className="shrink-0">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CodePulse Side */}
              <div className="bg-white/[0.03] p-10 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
                <div className="flex items-center gap-3 mb-8 text-primary-light">
                  <CheckCircle2 size={24} />
                  <span className="font-bold uppercase tracking-widest text-sm">CodePulse (Boutique)</span>
                </div>
                <ul className="space-y-6">
                  {[
                    "Accesso diretto al Lead Engineer (niente intermediari)",
                    "Comunicazione real-time su Slack/Discord",
                    "Codice d'avanguardia con performance garantite",
                    "Modello lean: paghi solo per il valore del software",
                    "Design esclusivo cucito su misura per il tuo brand"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-white text-sm font-medium">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Quality Standards */}
      <Section darker>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <SectionTitle title="Standard di Qualità senza Compromessi" subtitle="TECHNICAL AUDIT" />
              <p className="text-gray-400 mb-8 leading-relaxed">
                Ogni riga di codice che scrivo passa attraverso un rigoroso processo di test e ottimizzazione. Non mi accontento che "funzioni", deve essere perfetto.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Zap, title: "Performance Estrema", desc: "First Contentful Paint inferiore ai 500ms per un'esperienza immediata." },
                  { icon: ShieldCheck, title: "Sicurezza Enterprise", desc: "Protocolli di crittografia moderni e protezione contro attacchi comuni (XSS, CSRF)." },
                  { icon: Terminal, title: "Codice Pulito", desc: "Architettura basata su SOLID e componenti modulari facili da estendere." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0 border border-white/10">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Simulated Lighthouse/Metrics */}
            <Reveal delay={0.3}>
              <div className="bg-black border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500">LIGHTHOUSE CORE WEB VITALS</span>
                </div>
                
                <div className="flex justify-around items-center gap-4">
                  {[
                    { label: 'Performance', val: 100, color: 'text-green-500' },
                    { label: 'Accessibility', val: 100, color: 'text-green-500' },
                    { label: 'Best Practices', val: 100, color: 'text-green-500' },
                    { label: 'SEO', val: 100, color: 'text-green-500' },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-green-500/20 flex items-center justify-center ${stat.color} font-bold text-xl relative`}>
                         <div className="absolute inset-0 border-4 border-green-500 rounded-full clip-path-score" />
                         {stat.val}
                      </div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 text-center">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-4 rounded-lg bg-green-500/5 border border-green-500/10 text-xs text-green-400 text-center font-mono">
                  All systems operational. Optimized for mobile and desktop.
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="pb-32">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto a trasformare la tua idea?</h2>
              <p className="text-gray-400 mb-10">
                Non aspettare mesi. Lanciamo il tuo progetto con la qualità che merita in tempi record.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary" to="/contatti" className="px-10 h-14">
                  Inizia ora <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
};
