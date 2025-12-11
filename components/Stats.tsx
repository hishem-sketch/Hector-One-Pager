import React from 'react';
import FadeIn from './UI/FadeIn';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-hector-black relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            Hector in Numbers
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-800">
          {STATS.map((stat, index) => (
            <FadeIn key={stat.id} delay={index * 100}>
              <div className="text-center px-4 py-4 md:py-0">
                <div className="text-4xl md:text-5xl font-display font-bold text-hector-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;