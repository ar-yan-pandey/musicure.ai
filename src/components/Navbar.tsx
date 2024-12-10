import { Menu, X, Headphones } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'How it Works', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="fixed top-4 left-4 right-4 z-50 flex justify-center">
      <nav className="w-full max-w-6xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
        <div className="px-6 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <a href="#home" className="flex items-center gap-2">
                <Headphones className="w-8 h-8 text-violet-400" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-300">
                  Musicure.AI
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-violet-200 hover:text-violet-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a 
                  href="#coming-soon"
                  className="bg-violet-600/80 hover:bg-violet-700 px-4 py-2 rounded-full text-white transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-violet-600/25"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-violet-200 hover:text-violet-400"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 rounded-b-2xl">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-violet-200 hover:text-violet-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#coming-soon"
                className="block w-full bg-violet-600/80 hover:bg-violet-700 px-4 py-2 rounded-full text-white transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-violet-600/25 mt-4 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}