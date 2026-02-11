import React from 'react';
import Navbar from './components/Navbar';
import MatrixBackground from './components/MatrixBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <MatrixBackground />
      <Navbar />

      <main className="container mx-auto px-4 z-10 relative space-y-24 pb-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
