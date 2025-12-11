import React, { useState } from 'react';
import SectionLabel from './UI/SectionLabel';
import FadeIn from './UI/FadeIn';
import { Play, CheckCircle2 } from 'lucide-react';

const CoursePreview: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-hector-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FadeIn>
            <SectionLabel text="See It In Action" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hector-black mb-4">
              Experience Hector Training Firsthand
            </h2>
            <p className="text-xl text-hector-gray max-w-2xl mx-auto">
              Watch one of our most popular bite-size courses.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Player / Facade */}
          <FadeIn delay={200}>
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group mb-10 bg-black"
              onClick={() => setIsPlaying(true)}
            >
              {isPlaying ? (
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://player.vimeo.com/video/947306258?autoplay=1&title=0&byline=0&portrait=0" 
                  title="Hector Course Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute inset-0 bg-zinc-900">
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-hector-black via-zinc-900 to-hector-dark opacity-80"></div>
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                  
                  {/* Centered Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center z-10">
                      {/* Play Button */}
                      <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover:scale-110 group-hover:bg-hector-primary group-hover:border-hector-primary transition-all duration-300">
                        <Play className="w-10 h-10 text-white fill-white ml-1" />
                      </div>

                      {/* Video Title info */}
                      <div className="mt-8 transition-transform duration-300 group-hover:-translate-y-1">
                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 max-w-2xl mx-auto leading-tight">
                          How to Build a Lead Management System That Never Fails
                        </h3>
                        <p className="text-lg font-medium text-gray-300">
                          With Amy Holder • 27:42
                        </p>
                      </div>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Learning Outcomes */}
          <FadeIn delay={400}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-hector-black mb-6 uppercase tracking-wide border-b border-gray-100 pb-4">
                Learning Outcomes
              </h4>
              <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Build a system that captures every lead",
                  "Prioritise leads by conversion potential",
                  "Never let a warm lead go cold again",
                  "Track and measure your pipeline health"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-hector-primary flex-shrink-0 mt-0.5" />
                    <span className="text-hector-gray font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;