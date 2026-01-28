import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Check, Sparkles, Target, Palette, FileText, Globe, TrendingUp } from 'lucide-react';
import showcaseImage from 'figma:asset/showcaseImage.png';

export function FullBrandSuitePackage() {
  const [scrollY, setScrollY] = useState(0);
  const [imageSticky, setImageSticky] = useState(false);
  const heroSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if hero section is in view for sticky image effect
      if (heroSectionRef.current) {
        const rect = heroSectionRef.current.getBoundingClientRect();
        const inView = rect.top < 100 && rect.bottom > 400;
        setImageSticky(inView);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const deliverables = [
    { 
      icon: Palette, 
      title: 'Brand Identity & Logo Design', 
      description: 'We translate your strategy into a visual identity that feels like a natural extension of your business. From logo design and typography to color and supporting elements, everything is designed to work together clearly and cohesively.',
      items: ['Custom logo design', 'Typography system', 'Color palette', 'Brand patterns & supporting elements', '30-page brand guidelines'] 
    },
    { 
      icon: FileText, 
      title: 'Copy Refinement', 
      description: 'Before your website build begins, we review and refine your existing copy. This is a light, strategic polish to ensure your content is clear, easy to follow, and web-friendly — without rewriting your voice or overcomplicating the message.',
      items: ['Copy review & refinement', 'Hierarchy optimization', 'Web readability improvements', 'Voice preservation'] 
    },
    { 
      icon: Globe, 
      title: 'Web Design', 
      description: 'We bring everything together in a custom website designed to reflect the business you\'ve already built. The focus is clarity, structure, and usability — so your website supports your brand and makes it easy for the right people to understand what you do.',
      items: ['Custom website design (up to 7 pages)', 'Mobile optimization', 'Contact forms & integrations', 'Launch support & training'] 
    },
    { 
      icon: TrendingUp, 
      title: 'SEO Foundation', 
      description: 'We take a practical, thoughtful approach to SEO. This includes structuring pages, titles, and metadata to support visibility while staying true to your brand. The goal isn\'t to chase algorithms — it\'s to help the right audience find you and feel confident they\'re in the right place.',
      items: ['Page structure & titles', 'Metadata optimization', 'SEO-friendly content setup', 'Analytics integration'] 
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-[#F5F3F0] to-white" ref={heroSectionRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div>
              <div className="inline-block bg-[#0A203F] text-white text-xs tracking-widest px-4 py-2 rounded-full uppercase mb-6">
                Our Signature Package
              </div>
              <h1 className="text-5xl md:text-7xl text-[#000000] mb-6 leading-[1.1] font-serif">
                The Stahl Foundation™
              </h1>
              <p className="text-xl md:text-2xl text-[#6F6C5D] leading-relaxed max-w-3xl mb-8">
                Everything you need to show up confidently—brand strategy, visual identity, custom website, and messaging that actually connects.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-10">
                <div>
                  <p className="text-5xl text-[#0A203F] font-serif">$10,000</p>
                  <p className="text-[#6F6C5D] text-sm">One-time investment</p>
                </div>
                <div className="text-[#6F6C5D]">•</div>
                <div>
                  <p className="text-lg text-[#0A203F] font-medium">Payment plans available</p>
                  <p className="text-[#6F6C5D] text-sm">2 or 3 installments, no interest</p>
                </div>
              </div>

              <Link to="/contact">
                <button className="bg-[#7B031E] text-white px-10 py-4 rounded-full text-lg hover:bg-[#5a0216] transition-colors shadow-lg hover:shadow-xl">
                  Request a Consult
                </button>
              </Link>
            </div>

            {/* Right Column - Sticky Showcase Image */}
            <div className="md:sticky md:top-24">
              <div 
                className={`overflow-hidden rounded-lg shadow-2xl transition-all duration-700 ${
                  imageSticky ? 'opacity-100 translate-y-0 scale-100' : 'opacity-90 translate-y-4 scale-95'
                }`}
              >
                <img
                  src={showcaseImage}
                  alt="OFF-ERA website design mockup on multiple devices"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Compact Grid */}
      <section className="py-16 px-8 bg-[#F5F3F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-[#0A203F] font-serif mb-4">What's Included</h2>
            <p className="text-lg text-[#6F6C5D]">A complete brand and digital foundation in one strategic package</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#0A203F] text-white p-2 rounded-lg shrink-0">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl text-[#0A203F] font-serif leading-tight">{section.title}</h3>
                </div>
                <p className="text-[#6F6C5D] leading-relaxed mb-6">{section.description}</p>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#6F6C5D]">
                      <Check className="w-4 h-4 text-[#0B3B23] shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline - Compact */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] font-serif mb-12 text-center">The Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Discovery & Strategy', desc: 'Brand questionnaire, positioning workshop, and strategic foundation' },
              { title: 'Visual Identity', desc: 'Logo concepts, color systems, typography, and brand guidelines' },
              { title: 'Website Design', desc: 'Wireframes, page design, content integration, and copy polish' },
              { title: 'Refinement & Launch', desc: 'Final revisions, SEO setup, training, and celebration' }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-[#0A203F] text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg text-[#0A203F] font-serif mb-2">{step.title}</h3>
                <p className="text-sm text-[#6F6C5D] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="py-16 px-8 bg-[#0A203F] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif mb-4">Investment Options</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-white/20 pl-4">
                  <p className="text-lg font-medium">Full Payment</p>
                  <p className="text-white/70">$10,000 upfront</p>
                </div>
                <div className="border-l-2 border-white/20 pl-4">
                  <p className="text-lg font-medium">2-Payment Plan</p>
                  <p className="text-white/70">$5,000 × 2 payments</p>
                </div>
                <div className="border-l-2 border-white/20 pl-4">
                  <p className="text-lg font-medium">3-Payment Plan</p>
                  <p className="text-white/70">$3,334 × 3 payments</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-4">What You Get</h3>
              <ul className="space-y-3">
                {[
                  'Complete brand strategy & positioning',
                  'Full visual identity system',
                  'Custom 7-page Squarespace website',
                  'Professional copywriting support',
                  'SEO foundation & analytics',
                  '30-page brand guidelines',
                  'Social media templates',
                  'Post-launch support'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Compact */}
      <section className="py-16 px-8 bg-[#F5F3F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#0A203F] font-serif mb-10 text-center">Common Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'Can I add more pages?', a: 'Absolutely. Additional pages are $400 each.' },
              { q: 'Do you write all the copy?', a: 'We provide copywriting support and polish. You bring the story, we refine the message.' },
              { q: 'What if I need revisions?', a: 'You get 3 rounds of revisions included at each stage.' },
              { q: 'Is the website easy to update?', a: 'Yes. Built on Squarespace with full training included.' },
              { q: 'What happens after launch?', a: 'You get 60 days of support for questions and minor updates.' },
              { q: 'Can I start with just branding?', a: 'Yes! We offer standalone packages. See our other options.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6">
                <h3 className="text-lg text-[#0A203F] font-serif mb-2">{faq.q}</h3>
                <p className="text-[#6F6C5D]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-[#0A203F] mb-6 leading-tight font-serif">
            Ready to build your foundation?
          </h2>
          <p className="text-xl text-[#0A203F] mb-10 leading-relaxed">
            Limited Q1 2026 availability — book your strategy call before February 20th
          </p>
          <Link to="/contact">
            <button className="bg-[#7B031E] text-white px-12 py-5 rounded-full text-lg hover:bg-[#5a0216] transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Request a Consult
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}