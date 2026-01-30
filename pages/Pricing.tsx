
import React from 'react';
import { Section, Container, SectionTitle, Reveal, Button } from '../components/UIComponents';
import { PricingCard } from '../components/PricingCard';
import { PRICING } from '../constants';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const Pricing = () => {
  const navigate = useNavigate();

  return (
    <>
      <Section darker className="relative pt-32 min-h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
        
        <Container>
          <SectionTitle 
            title="Investi nel tuo futuro digitale" 
            subtitle="PRICING MATRIX" 
            align="center"
          />
          
          <Reveal>
             <p className="text-center text-gray-400 max-w-2xl mx-auto -mt-8 mb-24">
                Prezzi trasparenti, nessuna sorpresa. Scegli il pacchetto perfetto per lanciare la tua idea o scalare il tuo business.
             </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {PRICING.map((tier, idx) => (
              <PricingCard key={tier.name} tier={tier} idx={idx} navigate={navigate} />
            ))}
          </div>

          <div className="mt-24 text-center">
            <Reveal delay={0.4}>
              <div className="inline-flex items-center gap-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                        <MessageSquare size={24} />
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold text-white">Hai esigenze particolari?</h4>
                        <p className="text-sm text-gray-400">Possiamo creare un piano su misura per te.</p>
                    </div>
                </div>
                <Button variant="secondary" to="/contatti" className="h-12">
                   Contattaci <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
};
