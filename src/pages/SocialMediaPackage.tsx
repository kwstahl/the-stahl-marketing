import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Check } from 'lucide-react';

export function SocialMediaPackage() {
  return (
    <>
      {/* Pricing Tiers */}
      <section className="py-20 px-8 bg-[#F5F3F0]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Starter Presence */}
          <div className="bg-white p-12 border border-[#AC9F8D]/30">
            <h2 className="text-4xl text-[#0A203F] mb-4 font-serif">
              Starter Presence
            </h2>
            <div className="mb-6">
              <p className="text-5xl text-[#0A203F] font-serif mb-2">Starting at $1,500</p>
              <p className="text-[#6F6C5D]">Per month</p>
            </div>
            
            <p className="text-lg text-[#203F4F] mb-8 leading-relaxed">
              <strong>Best for:</strong> brands establishing a consistent, professional presence online.
            </p>
            
            <p className="text-[#6F6C5D] mb-6 leading-relaxed">
              This package focuses on showing up with intention. We create polished, on-brand content that reflects your business clearly and consistently — without overcomplicating the process.
            </p>

            <div className="mb-8">
              <p className="text-sm tracking-widest mb-4 uppercase text-[#6F6C5D]">What this supports:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0B3B23] shrink-0 mt-0.5" />
                  <span className="text-[#203F4F]">Consistent brand visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0B3B23] shrink-0 mt-0.5" />
                  <span className="text-[#203F4F]">Clear, on-brand messaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0B3B23] shrink-0 mt-0.5" />
                  <span className="text-[#203F4F]">A clean, professional social presence</span>
                </li>
              </ul>
            </div>

            <Link to="/contact">
              <Button variant="secondary" className="w-full md:w-auto">Inquire about Starter Presence</Button>
            </Link>
          </div>

          {/* Growth Presence */}
          <div className="bg-white p-12 border-2 border-[#0A203F]">
            <div className="inline-block bg-[#0A203F] text-white text-xs tracking-widest px-4 py-1 rounded-full uppercase mb-4">
              Most Popular
            </div>
            <h2 className="text-4xl text-[#0A203F] mb-4 font-serif">
              Growth Presence
            </h2>
            <div className="mb-6">
              <p className="text-5xl text-[#0A203F] font-serif mb-2">Starting at $2,000</p>
              <p className="text-[#6F6C5D]">Per month</p>
            </div>
            
            <p className="text-lg text-[#203F4F] mb-8 leading-relaxed">
              <strong>Best for:</strong> brands ready to increase engagement and educate their audience.
            </p>
            
            <p className="text-[#6F6C5D] mb-6 leading-relaxed">
              This package is designed to build momentum. We focus on content that connects, informs, and strengthens your relationship with your audience — while maintaining brand clarity.
            </p>

            <div className="mb-8">
              <p className="text-sm tracking-widest mb-4 uppercase text-[#6F6C5D]">What this supports:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0B3B23] shrink-0 mt-0.5" />
                  <span className="text-[#203F4F]">Higher engagement and saves</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0B3B23] shrink-0 mt-0.5" />
                  <span className="text-[#203F4F]">Audience education and trust</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0B3B23] shrink-0 mt-0.5" />
                  <span className="text-[#203F4F]">Stronger content direction month-to-month</span>
                </li>
              </ul>
            </div>

            <Link to="/contact">
              <Button variant="secondary" className="w-full md:w-auto">Inquire about Growth Presence</Button>
            </Link>
          </div>

          {/* Brand Authority */}
          <div className="bg-white p-12 border border-[#AC9F8D]/30">
            <h2 className="text-4xl text-[#0A203F] mb-4 font-serif">
              Brand Authority
            </h2>
            <div className="mb-6">
              <p className="text-5xl text-[#0A203F] font-serif mb-2">Starting at $2,500</p>
              <p className="text-[#6F6C5D]">Per month</p>
            </div>
            
            <p className="text-lg text-[#203F4F] mb-8 leading-relaxed">
              <strong>Best for:</strong> established brands positioning themselves as leaders in their space.
            </p>
            
            <p className="text-[#6F6C5D] mb-6 leading-relaxed">
              This is our most strategic package. We go beyond content creation and focus on storytelling, messaging, and creative direction — ensuring your brand shows up with clarity, confidence, and authority.
            </p>

            <div className="mb-8">
              <p className="text-sm tracking-widest mb-4 uppercase text-[#6F6C5D]">What this supports:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0B3B23] shrink-0 mt-0.5" />
                  <span className="text-[#203F4F]">Strong brand positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0B3B23] shrink-0 mt-0.5" />
                  <span className="text-[#203F4F]">Clear storytelling and messaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0B3B23] shrink-0 mt-0.5" />
                  <span className="text-[#203F4F]">Long-term content alignment</span>
                </li>
              </ul>
            </div>

            <Link to="/contact">
              <Button variant="secondary" className="w-full md:w-auto">Inquire about Brand Authority</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-6 leading-tight font-serif">
            Not sure which package fits?
          </h2>
          <p className="text-xl text-[#203F4F] mb-10 leading-relaxed">
            We're happy to guide you.
          </p>
          <Link to="/contact">
            <Button variant="primary">Send an inquiry</Button>
          </Link>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 px-8 bg-[#F5F3F0]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6F6C5D] leading-relaxed">
            Custom packages are available for brands with specific goals or multi-platform needs.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-8 bg-[#0A203F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-white mb-16 leading-tight font-serif">
            Ready to build a consistent, strategic social presence?
          </h2>
          <Link to="/contact">
            <Button variant="primary">Inquire Today</Button>
          </Link>
        </div>
      </section>
    </>
  );
}