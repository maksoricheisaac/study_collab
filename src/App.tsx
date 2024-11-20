import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlatformOverview from './components/PlatformOverview';
import Features from './components/Features';
import Courses from './components/Courses';
import StudyGroups from './components/StudyGroups';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PlatformOverview />
      <Features />
      <Courses />
      <StudyGroups />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;