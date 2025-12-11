import React from 'react';
import SectionLabel from './UI/SectionLabel';
import FadeIn from './UI/FadeIn';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-hector-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn>
            <SectionLabel text="What Recruiters Say" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hector-black">
              Hear From Our Learners
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 100} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-hector-primary fill-hector-primary" />
                  ))}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-hector-black mb-3 leading-snug">
                  "{testimonial.headline}"
                </h3>
                <p className="text-hector-gray text-sm leading-relaxed mb-6 flex-grow">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-hector-dark font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-hector-black text-sm">{testimonial.author}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;