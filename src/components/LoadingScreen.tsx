import { Music } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Music className="w-12 h-12 text-violet-400 animate-bounce" />
        </div>
        <div className="relative w-64 h-2 bg-violet-900/30 rounded-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-violet-500 w-1/2 rounded-full animate-[loading_1s_ease-in-out_infinite]"></div>
        </div>
        <p className="text-violet-300 mt-4">Harmonizing your experience...</p>
      </div>
    </div>
  );
}