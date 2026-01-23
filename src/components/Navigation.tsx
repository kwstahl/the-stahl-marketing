import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import logo from 'figma:asset/637dd926d3f037ef031670966b6cee507e9da6d1.png';
import logoColored from 'figma:asset/f3064950ea146f0e826c592d8599b490e25a668d.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const isPackagesPage = location.pathname === '/services' || location.pathname.startsWith('/services/');
  const isPricingPage = location.pathname === '/pricing';
  const isJournalPage = location.pathname === '/journal' || location.pathname.startsWith('/journal/');
  const isContactPage = location.pathname === '/contact';
  const isLegalPage = location.pathname === '/faqs' || location.pathname === '/careers' || location.pathname === '/privacy-policy' || location.pathname === '/terms-of-use';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`transition-all duration-300 ${
      isHomePage 
        ? 'bg-black/30 backdrop-blur-sm' 
        : (isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-md')
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="transition-opacity duration-300 hover:opacity-80">
          <img 
            src={(isAboutPage || isPackagesPage || isPricingPage || isJournalPage || isContactPage || isLegalPage) ? logoColored : logo} 
            alt="The Stahl Marketing" 
            className="h-20 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link 
            to="/about" 
            className={`transition-colors duration-300 ${
              isScrolled || !isHomePage 
                ? 'text-[#0A203F] hover:text-[#203F4F]' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={`transition-colors duration-300 ${
              isScrolled || !isHomePage || isPackagesPage
                ? 'text-[#0A203F] hover:text-[#203F4F]' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            Packages
          </Link>
          <Link 
            to="/pricing" 
            className={`transition-colors duration-300 ${
              isScrolled || !isHomePage || isPricingPage
                ? 'text-[#0A203F] hover:text-[#203F4F]' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            Pricing
          </Link>
          <Link 
            to="/journal" 
            className={`transition-colors duration-300 ${
              isScrolled || !isHomePage || isJournalPage
                ? 'text-[#0A203F] hover:text-[#203F4F]' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            The Brand Journal
          </Link>
          <Link to="/contact">
            <Button variant="primary">Inquire Today</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}