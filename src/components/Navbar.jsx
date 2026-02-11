import React from 'react';
import { Button } from "./ui/button";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-black/50 backdrop-blur-md border-b border-green-900/30">
      <div className="text-xl font-bold font-mono text-green-500 animate-pulse drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
        &gt;_ yuvraj.dev
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <Button variant="ghost" onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-primary font-mono hover:bg-transparent">
          &gt; Home
        </Button>
        <Button variant="ghost" onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary font-mono hover:bg-transparent">
          &gt; About
        </Button>
        <Button variant="ghost" onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-primary font-mono hover:bg-transparent">
          &gt; Experience
        </Button>
        <Button variant="ghost" onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-primary font-mono hover:bg-transparent">
          &gt; Projects
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
