import { Link } from 'react-router';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import heroImage from 'figma:asset/c62b1aacf7630fb18131f2364e107e9f67c84fcc.png';

export function Pricing() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#F5F3F0]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Brand strategy materials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#0A203F] mb-8 leading-[1.1] font-serif">
              Every dollar you invest in marketing ultimately leads to your brand and website.
            </h1>
            <p className="text-xl md:text-2xl text-[#203F4F] leading-relaxed mb-12 max-w-2xl">
              We design strategic brands and websites that turn attention into trust — and trust into growth.
            </p>
            <Link to="/contact">
              <motion.button 
                className="bg-[#7B031E] text-white px-10 py-5 rounded-lg text-lg hover:bg-[#5a0216] transition-all shadow-md"
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(123, 3, 30, 0.3)" }}
                transition={{ duration: 0.2 }}
              >
                Start Your Brand Alignment
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-10">
          <p className="text-sm tracking-widest uppercase text-[#6F6C5D] mb-2">What we help you build</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-[#6F6C5D] mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-12 px-8 bg-[#F5F3F0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Brand Identity Package */}
            <div className="bg-white p-12 border border-[#AC9F8D]/30">
              <p className="text-sm tracking-widest mb-4 uppercase text-[#6F6C5D]">Visual Identity</p>
              <h2 className="text-4xl text-[#0A203F] mb-4 font-serif">
                Brand Identity & Logo Design
              </h2>
              <p className="text-lg text-[#203F4F] mb-8 leading-relaxed">
                A visual identity built on clarity, strategy, and alignment—not trends. For founders ready to move past the DIY phase.
              </p>
              <div className="mb-8">
                <p className="text-5xl text-[#0A203F] font-serif mb-2">$2,000</p>
                <p className="text-[#6F6C5D]">One-time investment</p>
              </div>
              <div className="mb-8 space-y-3">
                <p className="text-[#203F4F]">Brand Strategy</p>
                <p className="text-[#203F4F]">Comprehensive Logo Suite</p>
                <p className="text-[#203F4F]">Brand Style Guide</p>
              </div>
              <Link to="/services/brand-identity-package">
                <Button variant="secondary" className="w-full">View Full Details</Button>
              </Link>
            </div>

            {/* The Stahl Launch Package */}
            <div className="bg-white p-12 border border-[#AC9F8D]/30">
              <p className="text-sm tracking-widest mb-4 uppercase text-[#6F6C5D]">Entry-Level Website</p>
              <h2 className="text-4xl text-[#0A203F] mb-4 font-serif">
                The Stahl Launch™
              </h2>
              <p className="text-lg text-[#203F4F] mb-8 leading-relaxed">
                Strategic one-page website built for early-stage founders. Conversion-focused and upgrade-ready without overbuilding.
              </p>
              <div className="mb-8">
                <p className="text-5xl text-[#0A203F] font-serif mb-2">$1,200</p>
                <p className="text-[#6F6C5D]">Starting price</p>
              </div>
              <div className="mb-8 space-y-3">
                <p className="text-[#203F4F]">Custom One-Page Design</p>
                <p className="text-[#203F4F]">Lead Capture Integration</p>
                <p className="text-[#203F4F]">Mobile Optimization</p>
              </div>
              <Link to="/services/stahl-launch-package">
                <Button variant="secondary" className="w-full">View Full Details</Button>
              </Link>
            </div>
          </div>

          {/* Squarespace Website Design - Featured Package */}
          <div className="bg-[#0A203F] p-12 md:p-16 text-white mb-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white/20 text-white text-xs tracking-widest px-3 py-1 rounded-full uppercase">Most Popular</span>
              </div>
              <p className="text-sm tracking-widest mb-6 uppercase text-white/70">Most Popular</p>
              <h2 className="text-5xl md:text-6xl mb-6 leading-tight font-serif">
                Squarespace Website Design
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Multi-page website designed to position your business as an industry leader—built with strategy, structure, and long-term growth in mind.
              </p>
              <div className="mb-12">
                <p className="text-6xl font-serif mb-2">$6,000</p>
                <p className="text-white/70">Starting price</p>
              </div>
              <div className="grid md:grid-cols-4 gap-8 mb-12 text-center">
                <div>
                  <p className="text-sm text-white/80 uppercase tracking-wider">Deep Strategy</p>
                </div>
                <div>
                  <p className="text-sm text-white/80 uppercase tracking-wider">5-8 Custom Pages</p>
                </div>
                <div>
                  <p className="text-sm text-white/80 uppercase tracking-wider">SEO Structure</p>
                </div>
                <div>
                  <p className="text-sm text-white/80 uppercase tracking-wider">Launch Support</p>
                </div>
              </div>
              <Link to="/services/authority-website-package">
                <Button variant="primary">View Full Details</Button>
              </Link>
            </div>
          </div>

          {/* Full Digital Infrastructure */}
          <div className="bg-white p-12 border border-[#AC9F8D]/30">
            <p className="text-sm tracking-widest mb-4 uppercase text-[#6F6C5D]">Complete Digital Foundation</p>
            <h2 className="text-4xl text-[#0A203F] mb-4 font-serif">
              The Stahl Foundation™
            </h2>
            <p className="text-lg text-[#203F4F] mb-8 leading-relaxed">
              Complete brand and website build. Everything aligned—strategy, identity, and digital presence—built correctly from the start.
            </p>
            <div className="mb-8">
              <p className="text-5xl text-[#0A203F] font-serif mb-2">$10,000</p>
              <p className="text-[#6F6C5D]">Starting price</p>
            </div>
            <div className="mb-8 space-y-3">
              <p className="text-[#203F4F]">Brand Identity System</p>
              <p className="text-[#203F4F]">Custom Authority Website (6-10 pages)</p>
              <p className="text-[#203F4F]">Complete SEO & Analytics Setup</p>
            </div>
            <Link to="/services/full-infrastructure-package">
              <Button variant="secondary" className="w-full">View Full Details</Button>
            </Link>
          </div>

          {/* Additional Service - Brand Strategy */}
          <div className="grid md:grid-cols-1 gap-8 mt-8">
            <div className="bg-white p-12 border border-[#AC9F8D]/30">
              <p className="text-sm tracking-widest mb-4 uppercase text-[#6F6C5D]">Strategic Foundation</p>
              <h2 className="text-4xl text-[#0A203F] mb-4 font-serif">
                Brand Strategy Session
              </h2>
              <p className="text-lg text-[#203F4F] mb-8 leading-relaxed">
                A focused strategy session to clarify your positioning, messaging, and audience. Walk away with a clear brand blueprint.
              </p>
              <div className="mb-8">
                <p className="text-5xl text-[#0A203F] font-serif mb-2">$800</p>
                <p className="text-[#6F6C5D]">One-time session</p>
              </div>
              <div className="mb-8 space-y-3">
                <p className="text-[#203F4F]">90-Minute Strategy Session</p>
                <p className="text-[#203F4F]">Brand Positioning Blueprint</p>
                <p className="text-[#203F4F]">Implementation Guidance</p>
              </div>
              <Link to="/contact">
                <Button variant="secondary" className="w-full">Book Your Session</Button>
              </Link>
            </div>
          </div>

          {/* CTA to Systems Page */}
          <div className="mt-12 text-center bg-[#F5F3F0] p-12 border border-[#AC9F8D]/30">
            <h3 className="text-3xl text-[#0A203F] mb-4 font-serif">Need Ongoing Support?</h3>
            <p className="text-lg text-[#203F4F] mb-6 leading-relaxed max-w-2xl mx-auto">
              Explore our Systems packages for technical infrastructure, automation, and ongoing website management.
            </p>
            <Link to="/systems">
              <Button variant="secondary">Explore Systems</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-4 font-serif">Payment Plans Available</h2>
          <p className="text-xl text-[#203F4F] leading-relaxed">
            We offer 2-payment and 3-payment plans for all packages over $2,000. No interest, no hidden fees.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-8 bg-[#AC9F8D]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#0A203F] mb-8 font-serif text-center">Common Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-[#AC9F8D] pb-6">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">How long does the process take?</h3>
              <p className="text-lg text-[#203F4F] leading-relaxed">
                Timelines vary by project. We'll outline a clear, realistic timeline during your strategy call so you know exactly what to expect.
              </p>
            </div>

            <div className="border-b border-[#AC9F8D] pb-6">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">What if I already have a logo?</h3>
              <p className="text-lg text-[#203F4F] leading-relaxed">
                No problem at all. We can build around your existing logo or design a custom scope that fills in what's missing.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-2xl text-[#0A203F] mb-3 font-serif">Do you work with clients outside the U.S.?</h3>
              <p className="text-lg text-[#203F4F] leading-relaxed">
                Yes. We collaborate with clients worldwide using Zoom, email, and streamlined project management tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-8 bg-[#0A203F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-white mb-8 leading-tight font-serif">
            Ready to invest in your brand?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Let's talk about which package is right for you.
          </p>
          <Link to="/contact">
            <Button variant="primary">Inquire Today</Button>
          </Link>
        </div>
      </section>
    </>
  );
}