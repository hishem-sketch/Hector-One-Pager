import React from 'react';
import SectionLabel from './UI/SectionLabel';
import FadeIn from './UI/FadeIn';
import { SOLUTIONS } from '../constants';

const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn>
            <SectionLabel text="The Solution" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hector-black mb-4">
              What Hector Gives Your Team
            </h2>
            <p className="text-xl text-hector-gray max-w-2xl mx-auto">
              Everything they need to perform at their best, consistently.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOLUTIONS.map((solution, index) => (
            <FadeIn key={solution.id} delay={index * 100} className="h-full">
              <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-hector-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hector-primary to-hector-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-7 h-7 text-hector-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-hector-black mb-3">
                  {solution.title}
                </h3>
                <p className="text-hector-gray leading-relaxed">
                  {solution.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;