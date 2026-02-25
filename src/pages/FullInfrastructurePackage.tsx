import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Check, Palette, Globe, FileText, TrendingUp, BookOpen } from 'lucide-react';
import brandImage from 'figma:asset/placeholder.png';
import websiteImage from 'figma:asset/placeholder.png';

export function FullInfrastructurePackage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-[#F5F3F0] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-[#0A203F] text-white text-xs tracking-widest px-4 py-2 rounded-full uppercase mb-6">
            Complete Foundation
          </div>
          <h1 className="text-5xl md:text-7xl text-[#000000] mb-6 leading-[1.1] font-serif">
            The Stahl Foundation™
          </h1>
          <p className="text-xl md:text-2xl text-[#6F6C5D] leading-relaxed max-w-3xl mb-8">
            A complete brand and website build designed to position your business as a long-term authority. This is not just a website—it's your full digital foundation. Everything aligned—strategy, identity, and digital presence—built correctly from the start.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <div>
              <p className="text-5xl text-[#0A203F] font-serif">$10,000</p>
              <p className="text-[#6F6C5D] text-sm">Starting price</p>
            </div>
            <div className="text-[#6F6C5D]">•</div>
            <div>
              <p className="text-lg text-[#0A203F] font-medium">Payment plans available</p>
              <p className="text-[#6F6C5D] text-sm">2 or 3 installments, no interest</p>
            </div>
            <div className="text-[#6F6C5D]">•</div>
            <div>
              <p className="text-lg text-[#0A203F] font-medium">6–10 weeks</p>
              <p className="text-[#6F6C5D] text-sm">Depending on scope</p>
            </div>
          </div>

          <Link to="/contact">
            <button className="bg-[#7B031E] text-white px-10 py-4 rounded-full text-lg hover:bg-[#5a0216] transition-colors shadow-lg hover:shadow-xl">
              Start Your Foundation
            </button>
          </Link>
        </div>
      </section>

      {/* What's Included - Brand Identity */}
      <section className="py-20 px-8 bg-[#F5F3F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-4 font-serif">What's Included</h2>
          <p className="text-xl text-[#6F6C5D] mb-12 leading-relaxed">
            A complete brand and digital foundation in one strategic package
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Brand Positioning Clarity Session</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                We start with deep strategy work to uncover what makes your business unique, who you serve, and how you want to be positioned in the market.
              </p>
              <div className="space-y-3">
                {[
                  'Market positioning workshop',
                  'Audience definition & targeting',
                  'Competitive analysis review',
                  'Brand voice & messaging framework'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0A203F] shrink-0" />
                    <span className="text-[#6F6C5D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Brand Identity & Logo Design</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                We translate your strategy into a visual identity that feels like a natural extension of your business. From logo design and typography to color and supporting elements, everything is designed to work together clearly and cohesively.
              </p>
              <div className="space-y-3">
                {[
                  'Custom logo design',
                  'Typography system',
                  'Color palette',
                  'Brand patterns & supporting elements',
                  '30-page brand guidelines'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0A203F] shrink-0" />
                    <span className="text-[#6F6C5D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Deep Website Strategy Session</h3>
              <p className="text-[#6F6C5D] leading-relaxed mb-6">
                Before we design anything, we start with strategy. We understand your business, goals, and audience so your website is intentional—supporting where your brand is going, not just where it is today.
              </p>
              <div className="space-y-3">
                {[
                  'Site structure & architecture planning',
                  'User journey mapping',
                  'Conversion goal identification',
                  'Content strategy framework'
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
                  'Custom UX structure planning',
                  'Conversion-focused layout',
                  'Mobile optimization',
                  'Advanced form integrations & CMS',
                  'Lead capture system',
                  'SEO structure implementation'
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
                We handle the full launch process and provide training so you can confidently manage your site after we hand it over.
              </p>
              <div className="space-y-3">
                {[
                  'Analytics & tracking configuration',
                  'Post-launch training session',
                  'CMS management documentation',
                  'Ongoing technical support (30 days)'
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

      {/* Advanced Add-Ons */}
      <section className="py-20 px-8 bg-[#AC9F8D]/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-6 font-serif">Advanced Add-Ons</h2>
          <p className="text-xl text-[#203F4F] mb-8 leading-relaxed">
            Need more technical power? These optional add-ons are available separately:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Database-backed Functionality', description: 'Custom databases for complex data needs' },
              { title: 'Client Portals or Dashboards', description: 'Secure login areas for your clients' },
              { title: 'Membership Systems', description: 'Subscription and member management' },
              { title: 'Advanced CRM Integrations', description: 'Connect to HubSpot, Salesforce, etc.' },
              { title: 'Payment System Integrations', description: 'Stripe, PayPal, or custom solutions' },
              { title: 'Automation Workflows', description: 'Complex email and process automation' }
            ].map((addon, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-[#AC9F8D]/30">
                <h3 className="text-xl text-[#0A203F] mb-2 font-serif">{addon.title}</h3>
                <p className="text-[#6F6C5D]">{addon.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-[#203F4F] mb-4">
              For ongoing technical support and automation, explore our Systems packages:
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-8 font-serif">This Is For Founders Who:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F5F3F0] rounded-lg">
              <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Want Everything Aligned</h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                You understand that your brand, messaging, and website need to work together—not feel like separate projects stitched together later.
              </p>
            </div>
            <div className="p-8 bg-[#F5F3F0] rounded-lg">
              <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Are Building for the Long Term</h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                You're not looking for a quick fix. You're investing in infrastructure that will support years of growth.
              </p>
            </div>
            <div className="p-8 bg-[#F5F3F0] rounded-lg">
              <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Value Strategy Over Shortcuts</h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                You know that a cohesive brand and strategic website are worth the investment—and you're ready to do it right the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-[#0A203F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-white mb-8 leading-tight font-serif">
            Ready to build your complete digital foundation?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Let's create a brand and website that work together to establish you as a long-term authority in your field.
          </p>
          <Link to="/contact">
            <button className="bg-[#7B031E] text-white px-12 py-5 rounded-full text-lg hover:bg-[#5a0216] transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Book Your Strategy Session
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}