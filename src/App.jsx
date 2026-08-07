import React from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import MatrixBackground from './components/MatrixBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Leadership from './components/sections/Leadership';
import Projects from './components/sections/Projects';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen text-foreground font-sans selection:bg-signal/30 selection:text-signal">
        <MatrixBackground />
        <Navbar />
        <Toaster position="bottom-right" />

        <main className="container mx-auto px-4 z-10 relative space-y-24 pb-20">
          <Hero />
          <About />
          <Experience />
          <Leadership />
          <Projects />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
