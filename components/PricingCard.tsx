
import React from 'react';
import { Reveal, Button } from './UIComponents';
import { Sparkles, Plus, Check } from 'lucide-react';
import { PricingTier } from '../types';

interface PricingCardProps {
  tier: PricingTier;
  idx: number;
  navigate: (path: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ tier, idx, navigate }) => {
  const isPopular = tier.isPopular;
  
  return (
    <Reveal delay={idx * 0.1}>
      <div className={`group relative h-full flex flex-col p-1 rounded-[2.5rem] transition-all duration-700 ${isPopular ? 'bg-gradient-to-b from-primary/40 via-white/5 to-transparent shadow-[0_40px_100px_-20px_rgba(139,92,246,0.15)]' : 'bg-white/5 border border-white/5'}`}>
        <div className="flex-grow bg-background/60 backdrop-blur-3xl rounded-[2.25rem] p-10 flex flex-col relative overflow-hidden">
          {isPopular && (
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
              <Sparkles size={80} className="text-primary" />
            </div>
          )}
          
          <div className="mb-10">
            <h3 className={`text-sm font-black uppercase tracking-[0.2em] mb-6 ${isPopular ? 'text-primary-light' : 'text-gray-500'}`}>
              {tier.name}
            </h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-bold text-white tracking-tighter">€{tier.price}</span>
              <span className="text-xs text-gray-500 font-medium">/ start</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed min-h-[48px]">
              {tier.description}
            </p>
          </div>

          <div className="w-full h-px bg-white/5 mb-10" />

          <div className="space-y-5 mb-12 flex-grow">
            <div className="flex items-center gap-3 text-xs font-bold text-white/70 uppercase tracking-widest mb-6">
              <Plus size={14} className="text-primary" /> Deliverables
            </div>
            {tier.features.map((feat: string, i: number) => (
              <div key={i} className="flex items-start gap-3 text-sm group/item">
                <div className="mt-1 w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover/item:border-primary/50">
                  <Check size={8} className="text-primary" />
                </div>
                <span className="text-gray-400 group-hover/item:text-white transition-colors">
                  {feat}
                </span>
              </div>
            ))}
          </div>

          <Button 
            variant={isPopular ? 'primary' : 'secondary'} 
            className={`w-full h-14 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${isPopular ? 'hover:shadow-[0_0_40px_#8B5CF6]' : ''}`} 
            onClick={() => navigate('/contatti')}
          >
            {isPopular ? 'Start Your Project' : 'Get in Touch'}
          </Button>
        </div>
      </div>
    </Reveal>
  );
};
