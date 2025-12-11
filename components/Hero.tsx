import React from 'react';
import Button from './UI/Button';
import { Check } from 'lucide-react';
import FadeIn from './UI/FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-hector-black to-[#2A2A2A] overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-hector-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-900/30 border border-orange-500/20 mb-8">
            <span className="text-sm font-bold text-orange-200">🚀 Trusted by 50+ recruitment agencies</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 max-w-5xl mx-auto">
            Fix Inconsistent Performance and Build a Team <span className="text-hector-primary">You Can Rely On</span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Want to learn how recruitment teams are doubling their confidence in business development and smashing performance metrics?
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button href="https://meetings-eu1.hubspot.com/hishem/skills-assessment-session-onepager" showIcon className="w-full sm:w-auto text-lg py-4 px-8">
              Book Your Free Skills Assessment
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-gray-300">
            {[
              "Real-world training from top billers",
              "Proven system that turns learning into action",
              "Measurable improvements in key metrics"
            ].map((prop, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-hector-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white stroke-[3px]" />
                </div>
                <span className="text-sm font-medium">{prop}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;