import React, { useState } from 'react';
import SectionLabel from './UI/SectionLabel';
import FadeIn from './UI/FadeIn';
import { Play } from 'lucide-react';

const CaseStudyQuest: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const metrics = [
    { id: 1, company: "QUEST PERSONNEL", value: "+46%", metric: "Increase in CVs to Jobs" },
    { id: 2, company: "QUEST PERSONNEL", value: "+332%", metric: "Increase in Total Placements" },
    { id: 3, company: "QUEST PERSONNEL", value: "+177.5%", metric: "Increase in Total Revenue" },
    { id: 4, company: "QUEST PERSONNEL", value: "2.8:1", metric: "Job to fill ratio (improved from 4:1)" },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text & Metrics */}
          <div>
            <FadeIn>
              <SectionLabel text="Proven Results" />
              <h2 className="text-3xl md:text-5xl font-display font-bold text-hector-black mb-4">
                Record-Breaking Growth at Quest Personnel
              </h2>
              <p className="text-xl text-hector-gray mb-10">
                Conor Boland shares how implementing Hector led to triple-digit growth in placements and revenue.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {metrics.map((item, index) => (
                <FadeIn key={item.id} delay={index * 150}>
                  <div className="flex items-center bg-gray-50 rounded-xl p-5 border-l-4 border-hector-primary">
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

          {/* Right: Video Case Study */}
          <FadeIn delay={300}>
            <div 
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-gray-900"
              onClick={() => setIsPlaying(true)}
            >
              {isPlaying ? (
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://player.vimeo.com/video/955489152?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Conor Boland Testimonial"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-gray-900 mix-blend-multiply"></div>
                  <img 
                    src="https://picsum.photos/seed/questpersonnel/800/800?grayscale" 
                    alt="Quest Personnel Office" 
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                  />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      "Total Placements increased by 332%"
                    </h3>
                    <p className="text-gray-200">
                      Quest Personnel Case Study
                    </p>
                  </div>
                </>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default CaseStudyQuest;