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
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300"
                aria-label="Pinterest"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
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
            <p className="text-white/60 text-sm" style={{ marginTop: "-1rem" }}>
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