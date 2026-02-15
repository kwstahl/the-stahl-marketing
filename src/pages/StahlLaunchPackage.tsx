import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Check, Rocket, Layout, TrendingUp } from 'lucide-react';
import webDesignImage1 from 'figma:asset/emptyImage.png';

export function StahlLaunchPackage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const deliverables = [
    { 
      icon: Layout, 
      title: 'Strategy Intake & Structure Planning', 
      description: 'Before we design anything, we map out your site structure, messaging hierarchy, and conversion goals. This ensures your one-page site works strategically—not just visually.',
      items: [] 
    },
    { 
      icon: Rocket, 
      title: '1 Custom-Designed Conversion Page', 
      description: 'A fully custom, conversion-optimized page designed to capture leads and communicate your value clearly. Built to grow with your business when you are ready to expand.',
      items: [] 
    },
    { 
      icon: TrendingUp, 
      title: 'Lead Capture & Analytics Setup', 
      description: 'Integrated forms, email opt-ins, or booking tools—plus Google Analytics tracking to help you understand who is visiting and what is working.',
      items: [] 
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-[#F5F3F0] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-[#0A203F] text-white text-xs tracking-widest px-4 py-2 rounded-full uppercase mb-6">
            Entry-Level Website
          </div>
          <h1 className="text-5xl md:text-7xl text-[#000000] mb-6 leading-[1.1] font-serif">
            The Stahl Launch™
          </h1>
          <p className="text-xl md:text-2xl text-[#6F6C5D] leading-relaxed max-w-3xl mb-8">
            A conversion-focused, upgrade-ready website built for early-stage founders who need a strong digital presence without overbuilding too soon. This is not a template site—it's a structured entry into scalable infrastructure.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <div>
              <p className="text-5xl text-[#0A203F] font-serif">$1,200</p>
              <p className="text-[#6F6C5D] text-sm">Starting price</p>
            </div>
            <div className="text-[#6F6C5D]">•</div>
            <div>
              <p className="text-lg text-[#0A203F] font-medium">2–3 weeks</p>
              <p className="text-[#6F6C5D] text-sm">Typical timeline</p>
            </div>
          </div>

          <Link to="/contact">
            <button className="bg-[#7B031E] text-white px-10 py-4 rounded-full text-lg hover:bg-[#5a0216] transition-colors shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </Link>
        </div>
      </section>



      {/* What's Included */}
      <section className="py-20 px-8 bg-[#F5F3F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-4 font-serif">What's Included</h2>
          <p className="text-xl text-[#6F6C5D] mb-12 leading-relaxed">
            A conversion-focused one-page website built for early-stage growth
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Strategy Intake & Structure Planning</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                Before we design anything, we map out your site structure, messaging hierarchy, and conversion goals. This ensures your one-page site works strategically—not just visually.
              </p>
              <div className="space-y-3">
                {[
                  'Business goals alignment',
                  'Messaging & value proposition clarity',
                  'Page structure planning',
                  'Conversion goal mapping'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0A203F] shrink-0" />
                    <span className="text-[#6F6C5D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">1 Custom-Designed Conversion Page</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                A fully custom, conversion-optimized page designed to capture leads and communicate your value clearly. Built to grow with your business when you are ready to expand.
              </p>
              <div className="space-y-3">
                {[
                  'Custom page design & layout',
                  'Conversion-focused structure',
                  'Mobile-responsive design',
                  'Brand-aligned visual design',
                  'Professional layout & hierarchy',
                  'Upgrade-ready architecture'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0A203F] shrink-0" />
                    <span className="text-[#6F6C5D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Lead Capture & Analytics Setup</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                Integrated forms, email opt-ins, or booking tools—plus Google Analytics tracking to help you understand who is visiting and what is working.
              </p>
              <div className="space-y-3">
                {[
                  'Contact form integration',
                  'Email capture setup',
                  'Google Analytics configuration',
                  'Conversion tracking',
                  'Basic CMS setup',
                  'SEO-friendly structure'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0A203F] shrink-0" />
                    <span className="text-[#6F6C5D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Launch Support</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                We handle the launch and ensure your site is ready to start capturing leads from day one.
              </p>
              <div className="space-y-3">
                {[
                  'Full launch coordination',
                  'Technical setup & hosting',
                  'Basic training session',
                  'Post-launch support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0A203F] shrink-0" />
                    <span className="text-[#6F6C5D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-8 font-serif">Ideal For:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F5F3F0] rounded-lg">
              <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Service Providers Just Launching</h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                You're starting out and need a professional online presence that captures leads without the complexity of a full site.
              </p>
            </div>
            <div className="p-8 bg-[#F5F3F0] rounded-lg">
              <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Businesses Validating Their Offer</h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                You're testing the market and want a conversion-focused page that can grow as your business scales.
              </p>
            </div>
            <div className="p-8 bg-[#F5F3F0] rounded-lg">
              <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Founders Planning to Expand</h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                You know you'll need a full website eventually, but want to start lean and expand when the time is right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Path */}
      <section className="py-20 px-8 bg-[#AC9F8D]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-6 font-serif">Upgrade Path</h2>
          <p className="text-xl text-[#203F4F] mb-8 leading-relaxed max-w-3xl mx-auto">
            When you're ready to scale, your Stahl Launch™ site can be expanded into the Squarespace Website Design package at any time. The foundation is already built—we just add more pages and functionality as you grow.
          </p>
          <Link to="/services/authority-website-package">
            <button className="bg-[#0A203F] text-white px-10 py-4 rounded-full text-lg hover:bg-[#203F4F] transition-colors shadow-lg">
              Learn About Squarespace Website Design
            </button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-[#0A203F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-white mb-8 leading-tight font-serif">
            Ready to launch your digital presence?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Let's build a site that works for you today and grows with you tomorrow.
          </p>
          <Link to="/contact">
            <button className="bg-[#7B031E] text-white px-12 py-5 rounded-full text-lg hover:bg-[#5a0216] transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Get Your Free Consultation
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}