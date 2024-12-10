import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-violet-950/30 border-t border-violet-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Musicure.AI</h3>
            <p className="text-violet-300 mb-6">Transforming mental wellness through AI-powered music therapy</p>
            <div className="space-y-3">
              <a href="mailto:contact.musicureai@gmail.com" className="flex items-center gap-2 text-violet-300 hover:text-violet-400 transition-colors">
                <Mail className="w-5 h-5" />
                contact.musicureai@gmail.com
              </a>
              <a href="tel:+919555283358" className="flex items-center gap-2 text-violet-300 hover:text-violet-400 transition-colors">
                <Phone className="w-5 h-5" />
                +91 9555283358
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-violet-300 hover:text-violet-400 transition-colors">Home</a></li>
                <li><a href="#work" className="text-violet-300 hover:text-violet-400 transition-colors">How it Works</a></li>
                <li><a href="#about" className="text-violet-300 hover:text-violet-400 transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#coming-soon" className="text-violet-300 hover:text-violet-400 transition-colors">Get Started</a></li>
                <li><a href="#contact" className="text-violet-300 hover:text-violet-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-violet-900/50 mt-12 pt-8 text-center text-violet-300">
          <p>&copy; {new Date().getFullYear()} Musicure.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}