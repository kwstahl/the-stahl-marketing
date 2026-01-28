import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook } from 'lucide-react';
import logo from 'figma:asset/logo.png';

export function Footer() {
  return (
    <footer className="bg-[#0A203F] text-white w-full">
      <div className="max-w-7xl mx-auto px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {/* Left Column - Brand Description */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-white">
              The Stahl Marketing
            </h3>
            <p className="text-white/80 leading-relaxed font-light max-w-xs">
              The Stahl Marketing is a modern web design and marketing studio founded by young entrepreneurs in the Rio Grande Valley, helping businesses across Texas and beyond build brands that actually does something.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <a 
                href="https://www.instagram.com/thestahlmarketing/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Center Column - Logo + Copyright */}
          <div className="flex flex-col items-center justify-center space-y-8 order-first md:order-none h-28 md:h-32">
            <img 
              src={logo} 
              alt="The Stahl Marketing" 
              className="w-40 md:w-44 lg:w-40 h-auto"
            />
            <p className="text-white/60 text-sm" style={{ marginTop: "0rem" }}>
              © 2026 The Stahl Marketing
            </p>
          </div>

          {/* Right Column - Navigation & Legal */}
          <div className="grid grid-cols-2 gap-8 md:gap-10">
            {/* Navigate */}
            <div className="space-y-4">
              <h4 className="text-white font-medium mb-5 text-sm uppercase tracking-wider">
                Navigate
              </h4>
              <nav className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-all duration-300 text-sm"
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-all duration-300 text-sm"
                >
                  About
                </Link>
                <Link 
                  to="/pricing" 
                  className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-all duration-300 text-sm"
                >
                  Pricing
                </Link>
                <Link 
                  to="/services" 
                  className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-all duration-300 text-sm"
                >
                  Packages
                </Link>
                <Link 
                  to="/contact" 
                  className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-all duration-300 text-sm"
                >
                  Book a Consult
                </Link>
              </nav>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-white font-medium mb-5 text-sm uppercase tracking-wider">
                Legal
              </h4>
              <nav className="flex flex-col space-y-3">
                <Link 
                  to="/faqs" 
                  className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-all duration-300 text-sm"
                >
                  FAQs
                </Link>
                <Link 
                  to="/careers" 
                  className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-all duration-300 text-sm"
                >
                  Careers
                </Link>
                <Link 
                  to="/privacy-policy" 
                  className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-all duration-300 text-sm"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms-of-use" 
                  className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-all duration-300 text-sm"
                >
                  Terms of Use
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}