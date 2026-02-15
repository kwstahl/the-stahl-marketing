import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Check, Globe, FileText, TrendingUp, Settings, Users } from 'lucide-react';
import webDesignImage1 from 'figma:asset/placeholder.png';
import webDesignImage2 from 'figma:asset/placeholder.png';

export function AuthorityWebsitePackage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const deliverables = [
    { 
      icon: Users, 
      title: 'Deep Strategy Session', 
      description: 'Before we design anything, we start with strategy. We understand your business, goals, and audience so your website is intentional—supporting where your brand is going, not just where it is today.',
      items: [] 
    },
    { 
      icon: Globe, 
      title: 'Custom UX Structure Planning', 
      description: 'We map out your site architecture, navigation flow, and user journey. Every page has a purpose. Every click is intentional.',
      items: [] 
    },
    { 
      icon: FileText, 
      title: '7 Fully Custom-Designed Pages', 
      description: 'A multi-page website designed specifically for your business. From layout and visual design to development and hosting setup, we handle the full build.',
      items: [] 
    },
    { 
      icon: Settings, 
      title: 'Advanced Form Integrations & CMS', 
      description: 'Contact forms, email capture, booking systems—set up and ready to work. Plus a content management system that makes updates easy.',
      items: [] 
    },
    { 
      icon: TrendingUp, 
      title: 'SEO Structure Implementation', 
      description: 'Your pages are structured with clear hierarchy, intentional headings, and optimized metadata—without sacrificing your brand voice. Built to be found by the right people.',
      items: [] 
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-[#F5F3F0] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-[#0A203F] text-white text-xs tracking-widest px-4 py-2 rounded-full uppercase mb-6">
            Most Popular
          </div>
          <h1 className="text-5xl md:text-7xl text-[#000000] mb-6 leading-[1.1] font-serif">
            Squarespace Website Design
          </h1>
          <p className="text-xl md:text-2xl text-[#6F6C5D] leading-relaxed max-w-3xl mb-8">
            A multi-page website designed to position your business as an industry leader—built with strategy, structure, and long-term growth in mind. This is where design meets architecture.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <div>
              <p className="text-5xl text-[#0A203F] font-serif">$6,000</p>
              <p className="text-[#6F6C5D] text-sm">Starting price</p>
            </div>
            <div className="text-[#6F6C5D]">•</div>
            <div>
              <p className="text-lg text-[#0A203F] font-medium">Payment plans available</p>
              <p className="text-[#6F6C5D] text-sm">2 or 3 installments, no interest</p>
            </div>
            <div className="text-[#6F6C5D]">•</div>
            <div>
              <p className="text-lg text-[#0A203F] font-medium">5–8 weeks</p>
              <p className="text-[#6F6C5D] text-sm">Typical timeline</p>
            </div>
          </div>

          <Link to="/contact">
            <button className="bg-[#7B031E] text-white px-10 py-4 rounded-full text-lg hover:bg-[#5a0216] transition-colors shadow-lg hover:shadow-xl">
              Request a Consult
            </button>
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-8 bg-[#F5F3F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-4 font-serif">What's Included</h2>
          <p className="text-xl text-[#6F6C5D] mb-12 leading-relaxed">
            A complete website system designed to establish authority and convert visitors
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Deep Strategy Session</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                Before we design anything, we start with strategy. We understand your business, goals, and audience so your website is intentional—supporting where your brand is going, not just where it is today.
              </p>
              <div className="space-y-3">
                {[
                  'Business goals & audience alignment',
                  'Site structure & architecture planning',
                  'User journey mapping',
                  'Conversion goal identification'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0A203F] shrink-0" />
                    <span className="text-[#6F6C5D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Custom UX Structure Planning</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                We map out your site architecture, navigation flow, and user journey. Every page has a purpose. Every click is intentional.
              </p>
              <div className="space-y-3">
                {[
                  'Site architecture & navigation design',
                  'Wireframing & layout planning',
                  'Content hierarchy mapping',
                  'User flow optimization'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0A203F] shrink-0" />
                    <span className="text-[#6F6C5D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">7 Fully Custom-Designed Pages</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                A multi-page website designed specifically for your business. From layout and visual design to development and hosting setup, we handle the full build.
              </p>
              <div className="space-y-3">
                {[
                  'Custom page design & layout',
                  'Conversion-focused structure',
                  'Mobile-responsive design',
                  'Brand-aligned visual styling',
                  'Professional copywriting guidance',
                  'Image optimization & preparation'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0A203F] shrink-0" />
                    <span className="text-[#6F6C5D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Advanced Form Integrations & CMS</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                Contact forms, email capture, booking systems—set up and ready to work. Plus a content management system that makes updates easy.
              </p>
              <div className="space-y-3">
                {[
                  'Contact form setup',
                  'Email capture integration',
                  'CMS configuration',
                  'Form automation & notifications',
                  'Lead tracking setup',
                  'Basic automation configuration'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0A203F] shrink-0" />
                    <span className="text-[#6F6C5D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">SEO Structure Implementation</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                Your pages are structured with clear hierarchy, intentional headings, and optimized metadata—without sacrificing your brand voice. Built to be found by the right people.
              </p>
              <div className="space-y-3">
                {[
                  'SEO-friendly page structure',
                  'Metadata optimization',
                  'Heading hierarchy implementation',
                  'Analytics & tracking setup',
                  'Search engine indexing',
                  'Performance optimization'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0A203F] shrink-0" />
                    <span className="text-[#6F6C5D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Launch Support & Training</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                We handle the technical details and ensure you're confident managing your site after launch.
              </p>
              <div className="space-y-3">
                {[
                  'Full launch coordination',
                  'Post-launch training session',
                  'CMS management guide',
                  'Technical documentation'
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
              <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Established Service Businesses</h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                You've been in business for a while and need a website that reflects the quality of your work and positions you as a leader in your field.
              </p>
            </div>
            <div className="p-8 bg-[#F5F3F0] rounded-lg">
              <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Clinics, Consultants & High-Ticket Brands</h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                Your clients expect professionalism and expertise. Your website needs to communicate that at every touchpoint.
              </p>
            </div>
            <div className="p-8 bg-[#F5F3F0] rounded-lg">
              <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Founders Ready to Scale</h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                You're past the startup phase and ready to build a digital foundation that supports long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Add-Ons */}
      <section className="py-20 px-8 bg-[#AC9F8D]/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-8 font-serif">Optional Add-Ons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Copywriting', description: 'Professional web copy that converts' },
              { title: 'Brand Identity Integration', description: 'Full brand system applied to your site' },
              { title: 'Advanced SEO', description: 'Keyword research & technical optimization' },
              { title: 'Email Automation Setup', description: 'Lead nurture sequences & welcome emails' }
            ].map((addon, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-[#AC9F8D]/30">
                <h3 className="text-xl text-[#0A203F] mb-2 font-serif">{addon.title}</h3>
                <p className="text-[#6F6C5D]">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#0A203F] mb-8 font-serif">Flexible Payment Options</h2>
          <div className="space-y-4">
            {[
              { label: 'Full Payment', price: '$6,000', detail: 'upfront' },
              { label: '2-Payment Plan', price: '$3,000', detail: '× 2 payments' },
              { label: '3-Payment Plan', price: '$2,000', detail: '× 3 payments' }
            ].map((plan, idx) => (
              <div key={idx} className="bg-[#F5F3F0] p-6 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-lg text-[#0A203F] font-medium">{plan.label}</p>
                  <p className="text-sm text-[#6F6C5D]">{plan.detail}</p>
                </div>
                <p className="text-2xl text-[#0A203F] font-serif">{plan.price}</p>
              </div>
            ))}
          </div>
          <p className="text-[#6F6C5D] mt-6 text-center">No interest. No hidden fees.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-[#0A203F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-white mb-8 leading-tight font-serif">
            Ready to position your business as an authority?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Let's build a website that establishes trust, converts visitors, and grows with your business.
          </p>
          <Link to="/contact">
            <button className="bg-[#7B031E] text-white px-12 py-5 rounded-full text-lg hover:bg-[#5a0216] transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Schedule Your Strategy Call
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}