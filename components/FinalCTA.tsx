import React from 'react';
import Button from './UI/Button';
import FadeIn from './UI/FadeIn';

const FinalCTA: React.FC = () => {
  return (
    <section id="book" className="py-24 bg-gradient-to-br from-hector-primary to-hector-dark relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Transform Your Team's Performance?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Book a free skills assessment and see exactly where your team can improve.
          </p>
          <Button variant="white" href="https://meetings-eu1.hubspot.com/hishem/skills-assessment-session-onepager" className="py-4 px-10 text-lg shadow-xl">
            Book Your Free Assessment
          </Button>
          <p className="mt-6 text-sm text-orange-200 opacity-80">
            No obligation. Just actionable insights.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCTA;