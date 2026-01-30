import React, { useState } from 'react';
import { Section, Container, SectionTitle, Reveal } from '../components/UIComponents';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary' : 'text-white'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const About = () => {
  return (
    <>
      <Section className="pt-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <SectionTitle title="L'uomo dietro il codice." subtitle="CHI SONO" />
              <p className="text-xl text-white font-medium mb-6">
                CodePulse è lo studio d'élite di Robert Musin.
              </p>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Dopo anni passati a scalare piattaforme SaaS complesse e a ottimizzare ecosistemi digitali per top brand, ho deciso di fondare CodePulse per eliminare il rumore di fondo delle grandi agenzie.
                </p>
                <p>
                  Sotto la mia guida, il tuo progetto non viene delegato a junior. <strong>Parli direttamente con me.</strong> Ogni riga di codice, ogni decisione architettonica e ogni pixel passano attraverso il mio audit personale.
                </p>
                <p>
                  La mia filosofia è l'ingegneria del valore: meno fronzoli, più performance. Solo tecnologie stabili che garantiscono un ROI misurabile.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-surface/50 flex items-center justify-center">
                   <div className="text-center">
                      <div className="w-32 h-32 bg-premium-gradient rounded-full mx-auto mb-4 border-2 border-white/10 flex items-center justify-center text-4xl font-bold">RM</div> 
                      <p className="text-gray-500 text-sm">Robert Musin Portrait</p>
                   </div>
                </div>
                <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-2xl font-bold text-white">Robert Musin</h3>
                  <p className="text-primary font-mono tracking-widest text-xs uppercase">Founder & Lead Engineer</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section darker id="faq">
        <Container className="max-w-3xl">
          <SectionTitle title="Domande Frequenti" align="center" />
          <div className="mt-12">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <AccordionItem question={faq.question} answer={faq.answer} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};