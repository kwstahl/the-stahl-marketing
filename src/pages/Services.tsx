import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import heroImage from 'figma:asset/68fdc3058890d550b884e53cd023368d902a166d.png';
import foundationImage from 'figma:asset/foundationImage.png';
import websiteImage from 'figma:asset/detailsImage1.png';
import brandIdentityImage from 'figma:asset/brandIdentityImage.png';
import socialMediaImage from 'figma:asset/socialMediaImage.png';

export function Services() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <>
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="relative w-full bg-[#F5F3F0] py-3 px-8 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex-1 text-center">
              <p className="text-[#0A203F] text-sm">
                Limited Q1 2026 availability — book your strategy call before February 20th
              </p>
            </div>
            <button
              onClick={() => setShowAnnouncement(false)}
              className="text-[#0A203F] hover:text-[#203F4F] transition-colors ml-4 text-xl leading-none"
              aria-label="Close announcement"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Featured Services Cards Section */}
      <section className="bg-[#0A203F] py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Card 1 - Brand Identity (Clickable) */}
            <Link to="/services/brand-identity-package" className="text-center group cursor-pointer block transition-transform duration-500 hover:-translate-y-3">
              <div className="mb-6 overflow-hidden rounded-lg backdrop-blur-md bg-white/10 border border-white/20 p-1 transition-all duration-500 group-hover:bg-white/30 group-hover:border-[#AC9F8D]/60 group-hover:shadow-[0_20px_60px_rgba(172,159,141,0.3)]">
                <ImageWithFallback
                  src={brandIdentityImage}
                  alt="Brand Identity"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-125 rounded"
                />
              </div>
              <h3 className="text-2xl text-white mb-2 font-serif transition-colors duration-300 group-hover:text-[#AC9F8D]">Brand Identity & Logo Design</h3>
              <p className="text-white/80 text-sm tracking-widest uppercase transition-all duration-300 group-hover:text-white">Starting at $2,000</p>
            </Link>

            {/* Card 2 - The Stahl Launch (Clickable) */}
            <Link to="/services/stahl-launch-package" className="text-center border-l border-white/20 group cursor-pointer block transition-transform duration-500 hover:-translate-y-3">
              <div className="mb-6 overflow-hidden rounded-lg backdrop-blur-md bg-white/10 border border-white/20 p-1 transition-all duration-500 group-hover:bg-white/30 group-hover:border-[#AC9F8D]/60 group-hover:shadow-[0_20px_60px_rgba(172,159,141,0.3)]">
                <img
                  src={websiteImage}
                  alt="Website Design Mockup"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-125 rounded"
                />
              </div>
              <h3 className="text-2xl text-white mb-2 font-serif transition-colors duration-300 group-hover:text-[#AC9F8D]">The Stahl Launch™</h3>
              <p className="text-white/80 text-sm tracking-widest uppercase transition-all duration-300 group-hover:text-white">Starting at $1,200</p>
            </Link>

            {/* Card 3 - Squarespace Website Design (Clickable) */}
            <Link to="/services/authority-website-package" className="text-center border-l border-white/20 group cursor-pointer block transition-transform duration-500 hover:-translate-y-3">
              <div className="mb-6 overflow-hidden rounded-lg backdrop-blur-md bg-white/10 border border-white/20 p-1 transition-all duration-500 group-hover:bg-white/30 group-hover:border-[#AC9F8D]/60 group-hover:shadow-[0_20px_60px_rgba(172,159,141,0.3)]">
                <img
                  src={foundationImage}
                  alt="Squarespace Website Design mockup"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-125 rounded"
                />
              </div>
              <h3 className="text-2xl text-white mb-2 font-serif transition-colors duration-300 group-hover:text-[#AC9F8D]">Squarespace Website Design</h3>
              <p className="text-white/80 text-sm tracking-widest uppercase transition-all duration-300 group-hover:text-white">Starting at $6,000</p>
            </Link>

            {/* Card 4 - The Stahl Foundation™ (Clickable) */}
            <Link to="/services/full-infrastructure-package" className="text-center border-l border-white/20 group cursor-pointer block transition-transform duration-500 hover:-translate-y-3">
              <div className="mb-6 overflow-hidden rounded-lg backdrop-blur-md bg-white/10 border border-white/20 p-1 transition-all duration-500 group-hover:bg-white/30 group-hover:border-[#AC9F8D]/60 group-hover:shadow-[0_20px_60px_rgba(172,159,141,0.3)]">
                <img
                  src={socialMediaImage}
                  alt="The Stahl Foundation™"
                  className="w-full h-48 object-contain transition-transform duration-700 group-hover:scale-125 rounded"
                />
              </div>
              <h3 className="text-2xl text-white mb-2 font-serif transition-colors duration-300 group-hover:text-[#AC9F8D]">The Stahl Foundation™</h3>
              <p className="text-white/80 text-sm tracking-widest uppercase transition-all duration-300 group-hover:text-white">Starting at $10,000</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Moving Marquee Text */}
      <div className="w-full bg-[#6F6C5D] py-6 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-text text-white text-lg tracking-wide font-serif">
              Web Design · Copywriting · On-site SEO · Brand Strategy · Logo Design · Visual Identity · Social Media Templates · Brand Guidelines · Custom Typography · Photography Direction · Content Strategy · Email Design · 
            </span>
            <span className="marquee-text text-white text-lg tracking-wide font-serif">
              Web Design · Copywriting · On-site SEO · Brand Strategy · Logo Design · Visual Identity · Social Media Templates · Brand Guidelines · Custom Typography · Photography Direction · Content Strategy · Email Design · 
            </span>
          </div>
        </div>
      </div>

      {/* Process Section (Timeline) */}
      <section id="process" className="py-20 px-8 bg-[#F5F3F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest mb-4 uppercase text-[#6F6C5D]">How We Work</p>
            <h2 className="text-5xl md:text-6xl text-[#0A203F] font-serif">Our Process</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-[#AC9F8D] hidden md:block"></div>

            <div className="grid md:grid-cols-4 gap-12">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-6 h-6 bg-[#0A203F] rounded-full mx-auto mb-6 relative z-10"></div>
                <div className="text-5xl text-[#0A203F] mb-4 font-serif opacity-20">01</div>
                <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Schedule a Demo</h3>
                <p className="text-[#6F6C5D] leading-relaxed">
                  We start with a conversation about your goals, challenges, and vision.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-6 h-6 bg-[#0A203F] rounded-full mx-auto mb-6 relative z-10"></div>
                <div className="text-5xl text-[#0A203F] mb-4 font-serif opacity-20">02</div>
                <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Begin Discovery</h3>
                <p className="text-[#6F6C5D] leading-relaxed">
                  You complete our brand questionnaire. We dig into your story and strategy.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-6 h-6 bg-[#0A203F] rounded-full mx-auto mb-6 relative z-10"></div>
                <div className="text-5xl text-[#0A203F] mb-4 font-serif opacity-20">03</div>
                <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Design & Refine</h3>
                <p className="text-[#6F6C5D] leading-relaxed">
                  We create, you review, we refine. Collaboration at every step.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center relative">
                <div className="w-6 h-6 bg-[#0A203F] rounded-full mx-auto mb-6 relative z-10"></div>
                <div className="text-5xl text-[#0A203F] mb-4 font-serif opacity-20">04</div>
                <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Show Up Confident</h3>
                <p className="text-[#6F6C5D] leading-relaxed">
                  Launch with a brand that feels authentic and a website that converts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8 bg-[#AC9F8D]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl text-[#0A203F] mb-12 font-serif text-center">Common Questions</h2>
          
          <div className="space-y-8">
            <div className="border-b border-[#AC9F8D] pb-8">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Do you offer payment plans?</h3>
              <p className="text-lg text-[#203F4F] leading-relaxed">
                Yes. We offer 2-payment and 3-payment plans for all packages over $2,000. No interest, no hidden fees.
              </p>
            </div>

            <div className="border-b border-[#AC9F8D] pb-8">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">How long does the process take?</h3>
              <p className="text-lg text-[#203F4F] leading-relaxed">
                Timelines vary by project. We'll outline a clear, realistic timeline during your strategy call so you know exactly what to expect.
              </p>
            </div>

            <div className="border-b border-[#AC9F8D] pb-8">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">What if I already have a logo?</h3>
              <p className="text-lg text-[#203F4F] leading-relaxed">
                No problem at all. We can build around your existing logo or design a custom scope that fills in what's missing.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Do you work with clients outside the U.S.?</h3>
              <p className="text-lg text-[#203F4F] leading-relaxed">
                Yes. We collaborate with clients worldwide using Zoom, email, and streamlined project management tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-8 bg-[#0A203F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-white mb-10 leading-tight font-serif">
            Ready to invest in your brand?
          </h2>
          <Link to="/contact">
            <Button variant="primary">Inquire Today</Button>
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }

        .marquee-text {
          white-space: nowrap;
          padding-right: 2rem;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}