
import React, { useState } from 'react';
import { Section, Container, SectionTitle, Button, Card, Reveal } from '../components/UIComponents';
import { Mail, Linkedin, Layout, ShoppingBag, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECT_TYPES = [
  { id: 'Sito Vetrina', label: 'Sito Vetrina', icon: Layout, desc: 'Showcase per Brand' },
  { id: 'Ecommerce', label: 'Ecommerce', icon: ShoppingBag, desc: 'Vendita Online' },
  { id: 'Web App / Gestionale', label: 'Web App / Gestionale', icon: Layers, desc: 'Software Custom' },
  { id: 'Altro', label: 'Altro', icon: Sparkles, desc: 'Consulenza / Audit' },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'Sito Vetrina', // Default
    budget: '2-5k',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTypeSelect = (typeId: string) => {
    setFormData({ ...formData, type: typeId });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui andrebbe la logica di invio reale (es. EmailJS o API endpoint)
    console.log(formData);
    alert('Grazie! Abbiamo ricevuto la tua richiesta e ti risponderemo entro 24 ore.');
  };

  return (
    <Section className="pt-32">
      <Container>
        <SectionTitle 
          title="Parliamo del tuo business" 
          subtitle="CONTATTI" 
          align="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <Reveal>
              <h3 className="text-xl font-bold text-white mb-4">Canali Diretti</h3>
              <p className="text-gray-400 mb-8">
                Compila il form per una consulenza tecnica gratuita o scrivici direttamente sui nostri canali ufficiali.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:info@codepulse.it" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-white/10 group-hover:border-primary/50">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <span className="font-medium">info@codepulse.it</span>
                </a>
                <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-white/10 group-hover:border-primary/50">
                    <Linkedin size={20} className="text-primary" />
                  </div>
                  <span className="font-medium">CodePulse su LinkedIn</span>
                </a>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Sparkles className="text-primary" />
                </div>
                <h4 className="text-white font-bold mb-2">Nota sulla disponibilità</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Attualmente accetto nuovi progetti per il Q4 2024. Le risposte ai preventivi sono garantite entro 24h lavorative.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-2">
            <Reveal delay={0.2}>
              <Card className="p-8 md:p-10 border-white/10 bg-surface/40">
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Nome Completo</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all placeholder:text-gray-600"
                        placeholder="Mario Rossi"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Aziendale</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all placeholder:text-gray-600"
                        placeholder="mario@azienda.it"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Project Type Selection - Animated Grid */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Tipo di Progetto</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {PROJECT_TYPES.map((type) => {
                        const isSelected = formData.type === type.id;
                        return (
                          <motion.div
                            key={type.id}
                            onClick={() => handleTypeSelect(type.id)}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`cursor-pointer relative p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 overflow-hidden group ${
                              isSelected 
                                ? 'bg-primary/10 border-primary shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)]' 
                                : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.07]'
                            }`}
                          >
                             {/* Background Glow for Selected State */}
                             {isSelected && (
                               <motion.div 
                                 layoutId="glow"
                                 className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 transition={{ duration: 0.3 }}
                               />
                             )}

                             <div className={`relative z-10 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isSelected ? 'bg-primary text-white' : 'bg-white/10 text-gray-400 group-hover:text-white'}`}>
                               <type.icon size={20} />
                             </div>
                             
                             <div className="relative z-10 flex-1">
                               <div className="flex justify-between items-center">
                                 <span className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-gray-300'}`}>{type.label}</span>
                                 {isSelected && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><CheckCircle2 size={16} className="text-primary" /></motion.div>}
                               </div>
                               <p className={`text-[11px] mt-1 ${isSelected ? 'text-primary-light' : 'text-gray-500'}`}>{type.desc}</p>
                             </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Dettagli Progetto</label>
                    <textarea 
                      name="message"
                      rows={4}
                      required
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all resize-none placeholder:text-gray-600"
                      placeholder="Raccontami i tuoi obiettivi, le tempistiche desiderate e il budget indicativo..."
                      onChange={handleChange}
                    />
                  </div>

                  <Button variant="primary" type="submit" className="w-full h-16 text-base rounded-xl shadow-2xl shadow-primary/20">
                    Invia Richiesta
                  </Button>
                </form>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
};
