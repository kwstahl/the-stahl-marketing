import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Target, Palette, FileText, Package } from 'lucide-react';

export function BrandIdentityPackage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const deliverables = [
    { 
      icon: Target, 
      title: 'Brand Strategy', 
      description: 'Before we design anything, we start with strategy. We align on your goals, audience, and positioning so every decision is intentional and your brand is built with purpose — not just visual appeal.'
    },
    { 
      icon: Palette, 
      title: 'Brand Identity & Logo Design', 
      description: 'We translate that strategy into a cohesive visual identity. From logo design and typography to color and supporting elements, everything is designed to feel like a natural extension of your business.'
    },
    { 
      icon: FileText, 
      title: 'The Style Guide', 
      description: 'We refine your messaging and visual standards into a clear, usable style guide. This ensures your brand shows up consistently, communicates clearly, and reflects the level of work you do — everywhere it lives.'
    },
    { 
      icon: Package, 
      title: 'Brand Assets & Files', 
      description: 'Everything you need to maintain your brand\'s integrity as you grow. No confusion when you need to hand assets to a printer, developer, or social media manager.'
    }
  ];

  return (
    <>
      {/* Hero Section with Sticky Image */}
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-[#F5F3F0] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div>
              <div className="inline-block bg-[#0A203F] text-white text-xs tracking-widest px-4 py-2 rounded-full uppercase mb-6">
                Brand Identity Package
              </div>
              <h1 className="text-5xl md:text-7xl text-[#000000] mb-6 leading-[1.1] font-serif">
                Brand Identity & Logo Design
              </h1>
              <p className="text-xl md:text-2xl text-[#6F6C5D] leading-relaxed max-w-3xl mb-8">
                A visual identity built on clarity, strategy, and alignment—not trends. For founders ready to move past the DIY phase and into a brand that feels like them.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-10">
                <div>
                  <p className="text-5xl text-[#0A203F] font-serif">$2,000</p>
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
          </div>
        </div>
      </section>

      {/* What's Included - Compact Grid */}
      <section className="py-16 px-8 bg-[#F5F3F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-[#0A203F] font-serif mb-4">What's Included</h2>
            <p className="text-lg text-[#6F6C5D]">A complete visual identity system built to last</p>
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
              { title: 'Discovery', desc: 'Brand questionnaire and strategy session to understand your vision' },
              { title: 'Concept Design', desc: 'Initial logo concepts and visual direction exploration' },
              { title: 'Refinement', desc: 'Revisions, color palette, typography, and supporting elements' },
              { title: 'Finalization', desc: 'Brand guidelines, file delivery, and launch celebration' }
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
                  <p className="text-white/70">$2,000 upfront</p>
                </div>
                <div className="border-l-2 border-white/20 pl-4">
                  <p className="text-lg font-medium">2-Payment Plan</p>
                  <p className="text-white/70">$1,000 × 2 payments</p>
                </div>
              </div>
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
              { q: 'How many logo concepts do I get?', a: 'You\'ll receive 3 initial logo concepts to choose from.' },
              { q: 'Can I request revisions?', a: 'Yes. You get 3 rounds of revisions included.' },
              { q: 'What file formats will I receive?', a: 'PNG, SVG, AI, PDF, and EPS in all color variations.' },
              { q: 'Do you design business cards?', a: 'Yes, business card design is included in the package.' },
              { q: 'Can I trademark my logo?', a: 'Yes. All designs are original and trademark-ready.' },
              { q: 'What if I need a website too?', a: 'Check out our Full Brand Suite package for branding + website.' }
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
            A brand that feels aligned changes everything.
          </h2>
          <p className="text-xl text-[#6F6C5D] mb-10 leading-relaxed">
            Let's create yours.
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