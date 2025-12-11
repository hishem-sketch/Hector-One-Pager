import React, { useState } from 'react';
import SectionLabel from './UI/SectionLabel';
import FadeIn from './UI/FadeIn';
import { Play } from 'lucide-react';

const CaseStudyAchieve: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const metrics = [
    { id: 1, company: "ACHIEVE HOSPITALITY", value: "50%", metric: "Job To Fill Ratio (Improved from 8%)" },
    { id: 2, company: "ACHIEVE HOSPITALITY", value: "+316%", metric: "Increase in Successful Placements" },
    { id: 3, company: "ACHIEVE HOSPITALITY", value: "+200%", metric: "Increase in Signed Terms (New Clients)" },
  ];

  return (
    <section className="py-24 bg-hector-warm border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Video Case Study (Video Left Layout) */}
          <FadeIn delay={300} className="order-2 lg:order-1 h-full">
            <div 
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-gray-900"
              onClick={() => setIsPlaying(true)}
            >
              {isPlaying ? (
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://player.vimeo.com/video/955489024?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Molly Teasdale Testimonial"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-gray-900 mix-blend-multiply"></div>
                  <img 
                    src="https://picsum.photos/seed/achieve/800/800?grayscale" 
                    alt="Achieve Hospitality Office" 
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                  />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      "316% increase in successful placements"
                    </h3>
                    <p className="text-gray-200">
                      Achieve Hospitality Case Study
                    </p>
                  </div>
                </>
              )}
            </div>
          </FadeIn>

          {/* Right: Text & Metrics */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <SectionLabel text="Transformational Growth" />
              <h2 className="text-3xl md:text-5xl font-display font-bold text-hector-black mb-4">
                Efficiency Gains at Achieve Hospitality
              </h2>
              <p className="text-xl text-hector-gray mb-10">
                Molly Teasdale reveals how Hector helped improve fill ratios dramatically and drive new client wins.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {metrics.map((item, index) => (
                <FadeIn key={item.id} delay={index * 150}>
                  <div className="flex items-center bg-white rounded-xl p-5 border-l-4 border-hector-primary shadow-sm">
                    <div className="flex-1">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        {item.company}
                      </div>
                      <div className="text-hector-gray font-medium">
                        {item.metric}
                      </div>
                    </div>
                    <div className="text-3xl font-display font-bold text-hector-primary">
                      {item.value}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudyAchieve;