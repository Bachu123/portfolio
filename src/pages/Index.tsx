import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t border-border">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Sahil Sundriyal. All rights reserved.</p>
            <p>Built with React, TypeScript & Three.js</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
