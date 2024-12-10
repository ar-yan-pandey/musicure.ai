import { Brain, Moon, Heart, Sparkles, Zap, Coffee, Activity, Flame } from 'lucide-react';

export function DisorderCards() {
  const disorders = [
    { icon: <Brain />, name: "PTSD", description: "Post-traumatic stress disorder therapy through calming rhythms" },
    { icon: <Flame />, name: "Excessive Stress", description: "Stress reduction through harmonious melodies" },
    { icon: <Sparkles />, name: "Anxiety", description: "Anxiety management with soothing compositions" },
    { icon: <Moon />, name: "Dementia", description: "Cognitive support through familiar musical patterns" },
    { icon: <Heart />, name: "Depression", description: "Mood elevation with uplifting musical experiences" },
    { icon: <Coffee />, name: "Insomnia", description: "Sleep improvement through relaxing soundscapes" },
    { icon: <Zap />, name: "ADHD", description: "Focus enhancement with structured musical pieces" },
    { icon: <Activity />, name: "Chronic Pain", description: "Pain management through musical distraction" }
  ];

  return (
    <div className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conditions We Help With</h2>
          <p className="text-violet-300">Specialized music therapy for various mental health conditions</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {disorders.map((disorder, index) => (
            <div key={index} className="bg-violet-950/30 p-6 rounded-xl border border-violet-900/50 hover:border-violet-700/50 transition-all group hover:transform hover:-translate-y-1">
              <div className="bg-violet-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="text-violet-400">
                  {disorder.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{disorder.name}</h3>
              <p className="text-violet-300 text-sm">{disorder.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}