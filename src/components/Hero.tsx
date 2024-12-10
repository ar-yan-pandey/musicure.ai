import { Headphones, Brain, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-violet-950 to-black text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Headphones className="w-10 h-10 text-violet-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-300">
              Musicure.AI
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-violet-200 mb-8">
            Personalized AI-Powered Music Therapy for Mental Wellness
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a 
              href="#coming-soon"
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Get Started
            </a>
            <a 
              href="#work"
              className="border border-violet-600 hover:bg-violet-900/30 text-white px-8 py-3 rounded-full font-semibold transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}