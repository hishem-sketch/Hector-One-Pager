import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Stats from './components/Stats';
import CoursePreview from './components/CoursePreview';
import CaseStudies from './components/CaseStudies';
import CaseStudyAlbertBow from './components/CaseStudyAlbertBow';
import CaseStudyQuest from './components/CaseStudyQuest';
import CaseStudyAchieve from './components/CaseStudyAchieve';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-hector-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Stats />
        <CoursePreview />
        <CaseStudies />
        <CaseStudyAlbertBow />
        <CaseStudyQuest />
        <CaseStudyAchieve />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;