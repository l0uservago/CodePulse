import React, { useState } from 'react';
import { Section, Container, SectionTitle, Card, Reveal } from '../components/UIComponents';
import { WORK_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

export const Work = () => {
  const [filter, setFilter] = useState<'All' | 'Sito Web' | 'Web App' | 'Dashboard'>('All');

  const filteredItems = filter === 'All' ? WORK_ITEMS : WORK_ITEMS.filter(item => item.category === filter);

  return (
    <>
      <Section className="pt-32">
        <Container>
          <SectionTitle 
            title="Risultati misurabili" 
            subtitle="PORTFOLIO"
          />
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {['All', 'Sito Web', 'Web App', 'Dashboard'].map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-white text-black border-white shadow-[0_0_15px_-5px_rgba(255,255,255,0.4)]' 
                    : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((work) => (
                <Reveal key={work.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="h-full flex flex-col p-0 overflow-hidden group border-0 bg-transparent">
                      {/* Image Placeholder */}
                      <div className={`h-48 w-full bg-gradient-to-br ${work.imageGradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute bottom-4 left-4">
                           <span className="px-2 py-1 bg-black/50 backdrop-blur text-[10px] uppercase font-bold text-white rounded">
                             {work.category}
                           </span>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-surface/50 border border-t-0 border-white/10 rounded-b-xl flex-grow">
                        <h3 className="text-xl font-bold text-white mb-1">{work.title}</h3>
                        <p className="text-sm text-gray-400 mb-6">per {work.client}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                           {work.stats.map((stat, i) => (
                             <div key={i}>
                               <div className="text-xl font-bold text-white">{stat.value}</div>
                               <div className="text-xs text-gray-500 uppercase">{stat.label}</div>
                             </div>
                           ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {work.tags.map(tag => (
                            <span key={tag} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Reveal>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};