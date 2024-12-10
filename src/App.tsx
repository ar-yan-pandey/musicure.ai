import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { ComingSoon } from './components/ComingSoon';
import { Navbar } from './components/Navbar';
import { LoadingScreen } from './components/LoadingScreen';
import { VectorBackground } from './components/VectorBackground';
import { Workflow } from './components/Workflow';
import { DisorderCards } from './components/DisorderCards';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-950/40 to-black/40 relative">
      <VectorBackground />
      <Navbar />
      <main className="relative">
        <div id="home">
          <Hero />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="work">
          <Workflow />
        </div>
        <DisorderCards />
        <div id="about">
          <About />
        </div>
        <div id="coming-soon">
          <ComingSoon />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;