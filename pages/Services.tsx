
import React from 'react';
import { Section, Container, SectionTitle, Reveal, Card, Button } from '../components/UIComponents';
import { SERVICES } from '../constants';
import { ShieldCheck, Zap, LineChart, Code2, Cpu, Globe, ArrowRight, CheckCircle2, XCircle, Terminal, Server, Rocket, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Fix: Explicitly type TechBadge as a React.FC to ensure children prop is correctly recognized by the JSX parser
const TechBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-tight">
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
  return (
    <>
      {/* Hero Section Premium */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.15),transparent_70%)]" />
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" 
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-light text-xs font-bold tracking-widest uppercase mb-6">
                ECCELLENZA TECNICA
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                Soluzioni Digitali <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">
                  Progettate per Scalare
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
                Non costruisco solo siti. Architetti ecosistemi digitali che combinano design d'avanguardia con performance che sfidano i limiti del web moderno.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services Detailed Grid */}
      <Section darker>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <Reveal key={service.id} delay={idx * 0.1}>
                <Card className="h-full flex flex-col p-8 group border-white/5 bg-white/[0.02]">
                  <div className="mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mb-6">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-primary-light shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      <TechBadge>Next.js</TechBadge>
                      <TechBadge>Tailwind</TechBadge>
                      <TechBadge>Cloudflare</TechBadge>
                    </div>
                  </div>
                </Card>
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
                          <span className={`text-sm ${plan.isPremium ? 'text-gray-200' : 'text-gray-400'}`}>{feat}</span>
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
