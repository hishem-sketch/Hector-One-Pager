import React from 'react';
import SectionLabel from './UI/SectionLabel';
import FadeIn from './UI/FadeIn';
import { PROBLEMS } from '../constants';

const Problems: React.FC = () => {
  return (
    <section className="py-24 bg-hector-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn>
            <SectionLabel text="The Challenge" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hector-black mb-4">
              Sound Familiar?
            </h2>
            <p className="text-xl text-hector-gray max-w-2xl mx-auto">
              These are the problems we help recruitment leaders solve every day.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROBLEMS.map((problem, index) => (
            <FadeIn key={problem.id} delay={index * 100} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-hector-black mb-3">
                  {problem.title}
                </h3>
                <p className="text-hector-gray leading-relaxed">
                  {problem.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;