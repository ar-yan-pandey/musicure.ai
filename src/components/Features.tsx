import { Brain, Clock, Music, Sparkles } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-violet-400" />,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your mental state and personality to create tailored music therapy plans."
    },
    {
      icon: <Music className="w-6 h-6 text-violet-400" />,
      title: "Custom Music Generation",
      description: "Generate unique musical compositions specifically designed for your therapeutic needs."
    },
    {
      icon: <Clock className="w-6 h-6 text-violet-400" />,
      title: "Personalized Schedule",
      description: "Get detailed plans specifying when, where, and how long to engage in music therapy sessions."
    }
  ];

  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Musicure.AI Works</h2>
          <p className="text-violet-300">Leveraging AI to create personalized music therapy experiences</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-violet-950/30 p-6 rounded-xl border border-violet-900/50 hover:border-violet-700/50 transition-all">
              <div className="bg-violet-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-violet-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}