import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "./Button";
import { primaryNav } from "./navConfig";
import logo from "figma:asset/logo.png";
import logoColored from "figma:asset/logocolored.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();



  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isPackagesPage =
    location.pathname === "/services" ||
    location.pathname.startsWith("/services/");
  const isPricingPage = location.pathname === "/pricing";
  const isJournalPage =
    location.pathname === "/journal" ||
    location.pathname.startsWith("/journal/");
  const isContactPage = location.pathname === "/contact";
  const isLegalPage =
    location.pathname === "/faqs" ||
    location.pathname === "/careers" ||
    location.pathname === "/privacy-policy" ||
    location.pathname === "/terms-of-use";


  useEffect(() => {
    setMenuOpen(false);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const textColor =
    isScrolled || !isHomePage
      ? "text-[#0A203F] hover:text-[#203F4F]"
      : "text-white/90 hover:text-white";

  const mobileTextColor = "text-[#0A203F] hover:text-[#203F4F]";

  return (
    <nav
      className={`transition-all duration-300 ${isHomePage
        ? "bg-black/30 backdrop-blur-sm"
        : "bg-white shadow-md"
        }`}
    >
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="transition-opacity duration-300 hover:opacity-80"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={
              isAboutPage ||
                isPackagesPage ||
                isPricingPage ||
                isJournalPage ||
                isContactPage ||
                isLegalPage
                ? logoColored
                : logo
            }
            alt="The Stahl Marketing"
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition-colors duration-300 ${textColor}`}
            >
              {item.label}
            </Link>
          ))}

          <Link to="/contact">
            <Button variant="primary">Inquire Today</Button>
          </Link>
        </div>


        {/* Mobile Hamburger */}
        <button
          className={`md:hidden ${isScrolled || !isHomePage ? "text-[#0A203F]" : "text-white"
            }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </div>
        </button>
      </div>

      {/* Mobile Accordion Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="shadow-md px-8 py-6 space-y-6 backdrop">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={`block ${mobileTextColor}`}
            >
              {item.label}
            </Link>
          ))}

          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block pt-2">
            <Button variant="primary" className="w-full">
              Inquire Today
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
