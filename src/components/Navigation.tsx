
import { useState, useEffect } from 'react';
import { Phone, MapPin, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactBar, setShowContactBar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setShowContactBar(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* Contact Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-teal-800 text-white py-2 transition-transform duration-300 ${
        showContactBar ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(323) 555-0192</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
              </div>
            </div>
            <div className="text-teal-200">
              serena@blakepsychology.com
            </div>
          </div>
        </div>
      </div>

      <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        showContactBar ? 'top-10' : 'top-0'
      } ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="w-12 h-12 border-2 border-teal-600 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm group-hover:bg-teal-50 transition-colors">
                <span className="text-2xl font-sans font-bold text-teal-700">S</span>
              </div>
              <div className="hidden sm:block">
                <div className={`font-semibold transition-colors ${
                  isScrolled ? 'text-teal-800' : 'text-white'
                }`}>
                  Dr. Serena Blake
                </div>
                <div className={`text-sm transition-colors ${
                  isScrolled ? 'text-teal-600' : 'text-white/80'
                }`}>
                  Clinical Psychologist
                </div>
              </div>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-teal-600 cursor-pointer ${
                    isScrolled ? 'text-gray-700' : 'text-white hover:text-teal-200'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`md:hidden fixed inset-0 z-30 transition-all duration-300 ${
        isMobileMenuOpen ? 'bg-black/50 backdrop-blur-sm opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`bg-white h-full w-80 shadow-xl ml-auto transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-lg font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>(323) 555-0192</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-teal-600 mt-0.5" />
                  <span>1287 Maplewood Drive<br />Los Angeles, CA 90026</span>
                </div>
                <div className="text-teal-600">
                  serena@blakepsychology.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
