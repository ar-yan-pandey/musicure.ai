import { Brain, MessageCircle, Music, PlayCircle, Clock, CheckCircle } from 'lucide-react';

export function Workflow() {
  const steps = [
    {
      icon: <MessageCircle className="w-6 h-6 text-violet-400" />,
      title: "Initial Assessment",
      description: "Complete a comprehensive questionnaire about your mental health condition and personal preferences."
    },
    {
      icon: <Brain className="w-6 h-6 text-violet-400" />,
      title: "AI Analysis",
      description: "Our AI analyzes your responses to understand your specific needs and therapeutic requirements."
    },
    {
      icon: <Clock className="w-6 h-6 text-violet-400" />,
      title: "Plan Creation",
      description: "Receive a personalized music therapy schedule tailored to your daily routine and wellness goals."
    },
    {
      icon: <Music className="w-6 h-6 text-violet-400" />,
      title: "Music Generation",
      description: "AI generates unique therapeutic music compositions based on your personal profile."
    },
    {
      icon: <PlayCircle className="w-6 h-6 text-violet-400" />,
      title: "Begin Sessions",
      description: "Start your therapeutic journey with guided music sessions in recommended environments."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-violet-400" />,
      title: "Progress Tracking",
      description: "Monitor your wellness journey with regular assessments and plan adjustments."
    }
  ];

  return (
    <div className="py-24 bg-violet-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Journey to Wellness</h2>
          <p className="text-violet-300">Step by step process to your personalized music therapy</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-violet-950/30 p-6 rounded-xl border border-violet-900/50 hover:border-violet-700/50 transition-all h-full">
                <div className="bg-violet-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-violet-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}