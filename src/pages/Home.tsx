import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useEffect, useState, useRef } from 'react';
import heroImage from 'figma:asset/coverpage.png';
import stahlLogo from 'figma:asset/logocolored.png';
import detailsImage from 'figma:asset/detailsImage1.png';
import detailsImage2 from 'figma:asset/detailsImage2.png';
import detailsImage3 from 'figma:asset/detailsImage3.png';
import detailsImage4 from 'figma:asset/detailsImage4.png';
import servicesBackground from 'figma:asset/servicesImage.jpg';
import journalImage1 from 'figma:asset/journal1.jpg';
import journalImage2 from 'figma:asset/journal2.jpg';
import journalImage3 from 'figma:asset/journal3.jpg';

export function Home() {
  const [stickyImage1, setStickyImage1] = useState(false);
  const [stickyImage2, setStickyImage2] = useState(false);
  const imageSection1Ref = useRef<HTMLDivElement>(null);
  const imageSection2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // First sticky image section
      if (imageSection1Ref.current) {
        const rect = imageSection1Ref.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.3;
        setStickyImage1(isInView);
      }

      // Second sticky image section
      if (imageSection2Ref.current) {
        const rect = imageSection2Ref.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.3;
        setStickyImage2(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Creative workspace with laptop and hands working"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <p className="text-lg md:text-xl mb-6 text-white/90">We help businesses turn their brand into a real asset.</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight font-serif">
            Web design & marketing<br />that actually does something.
          </h1>
          <Link to="/services">
            <Button variant="primary">View Packages</Button>
          </Link>
        </div>
      </section>

      {/* Short Tagline Section */}
      <section className="relative py-16 px-8 bg-[#F5F3F0] overflow-hidden">
        <div className="relative max-w-xl mx-auto text-center">
          <p className="text-lg md:text-xl text-[#0A203F] leading-relaxed mb-6 font-serif">
            We help your business show up online the way it should.
          </p>
          <Link to="/services#process">
            <Button variant="secondary">Learn About Our Process</Button>
          </Link>
        </div>
      </section>

      {/* Scroll-Triggered Creative Image Section 1 */}
      <section 
        ref={imageSection1Ref}
        className="relative py-32 px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className={`transition-all duration-700 ${stickyImage1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <img
                src={detailsImage}
                alt="MIC EN REC project mockup"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className={`transition-all duration-700 delay-300 ${stickyImage1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <img
                src={detailsImage2}
                alt="OFF-ERA Vintage Study mobile mockup"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
            <div className={`transition-all duration-700 delay-600 ${stickyImage1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <img
                src={detailsImage3}
                alt="OFF-ERA Vintage Study mobile mockup"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
            <div className={`transition-all duration-700 delay-900 ${stickyImage1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <img
                src={detailsImage4}
                alt="OFF-ERA Vintage Study mobile mockup"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
          <div className="md:sticky md:top-32 self-start">
            <p className="text-sm tracking-widest mb-6 uppercase text-[#6F6C5D]">The Details Matter</p>
            <h2 className="text-3xl md:text-4xl text-[#0A203F] mb-6 leading-tight font-serif">
              You didn't get here by accident.<br />
              Your business has grown through experience, refinement, and real results.
            </h2>
            <p className="text-lg text-[#6F6C5D] leading-relaxed">
              Now it's time for your brand to reflect the level you're operating at — strategic, polished, and built to last.
            </p>
          </div>
        </div>
      </section>

      {/* Three-Column Services Section with Background */}
      <section className="relative py-40 px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={servicesBackground}
            alt="Women collaborating"
            className="w-full h-full object-cover opacity-30 blur-[1px] grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#F5F3F0]/70 to-white/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] mb-8 uppercase text-[#6F6C5D]">Our Packages</p>
            <h2 className="text-5xl md:text-6xl text-[#0A203F] mb-8 leading-tight font-serif max-w-3xl mx-auto">
              Strategic solutions for<br />businesses built to last
            </h2>
            <div className="w-24 h-[1px] bg-[#AC9F8D] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-20">
            {/* Card 1 - Brand Identity */}
            <div className="bg-white/95 backdrop-blur-sm border border-[#0A203F]/10 p-12 hover:shadow-2xl transition-all duration-500 hover:border-[#0A203F]/20 group">
              <div className="mb-6">
                <div className="w-12 h-[1px] bg-[#AC9F8D] mb-8 group-hover:w-16 transition-all duration-500"></div>
                <h3 className="text-2xl text-[#0A203F] mb-6 leading-tight font-serif">Brand Identity & Logo Design</h3>
              </div>
              <p className="text-[#6F6C5D] leading-relaxed mb-10 text-[15px]">
                For businesses ready to establish a cohesive visual identity. Perfect for startups, rebrands, or anyone needing a professional mark that stands out.
              </p>
              <Link to="/services/brand-identity-package" className="text-[#0A203F] tracking-[0.2em] text-xs uppercase hover:text-[#203F4F] transition-colors inline-flex items-center gap-2 group-hover:gap-3 duration-300">
                LEARN MORE <span>→</span>
              </Link>
            </div>

            {/* Card 2 - Website Design */}
            <div className="bg-white/95 backdrop-blur-sm border border-[#0A203F]/10 p-12 hover:shadow-2xl transition-all duration-500 hover:border-[#0A203F]/20 group">
              <div className="mb-6">
                <div className="w-12 h-[1px] bg-[#AC9F8D] mb-8 group-hover:w-16 transition-all duration-500"></div>
                <h3 className="text-2xl text-[#0A203F] mb-6 leading-tight font-serif">Squarespace Website Design</h3>
              </div>
              <p className="text-[#6F6C5D] leading-relaxed mb-10 text-[15px]">
                For established brands that need a digital home. Custom-designed, user-friendly, and built to convert visitors into clients.
              </p>
              <Link to="/services/web-design-package" className="text-[#0A203F] tracking-[0.2em] text-xs uppercase hover:text-[#203F4F] transition-colors inline-flex items-center gap-2 group-hover:gap-3 duration-300">
                LEARN MORE <span>→</span>
              </Link>
            </div>

            {/* Card 3 - All in 1 (Primary/Most Popular) */}
            <div className="bg-[#0A203F] backdrop-blur-sm border-2 border-[#0A203F] p-12 shadow-2xl relative hover:shadow-[0_20px_60px_rgba(10,32,63,0.3)] transition-all duration-500 group mt-8">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-white text-[#0A203F] text-[11px] tracking-[0.2em] px-6 py-2 uppercase font-medium shadow-md whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <div className="w-12 h-[1px] bg-white/40 mb-8 group-hover:w-16 transition-all duration-500"></div>
                <h3 className="text-2xl text-white mb-6 leading-tight font-serif">The Stahl Foundation™</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-10 text-[15px]">
                The complete brand and digital package. For businesses that want everything—brand identity, strategy, and a custom Squarespace website that works seamlessly together.
              </p>
              <Link to="/services/full-brand-suite-package" className="text-white tracking-[0.2em] text-xs uppercase hover:text-white/80 transition-colors inline-flex items-center gap-2 group-hover:gap-3 duration-300">
                LEARN MORE <span>→</span>
              </Link>
            </div>

            {/* Card 4 - Social Media */}
            <div className="bg-white/95 backdrop-blur-sm border border-[#0A203F]/10 p-12 hover:shadow-2xl transition-all duration-500 hover:border-[#0A203F]/20 group">
              <div className="mb-6">
                <div className="w-12 h-[1px] bg-[#AC9F8D] mb-8 group-hover:w-16 transition-all duration-500"></div>
                <h3 className="text-2xl text-[#0A203F] mb-6 leading-tight font-serif">Social Media Packages</h3>
              </div>
              <p className="text-[#6F6C5D] leading-relaxed mb-10 text-[15px]">
                Strategic content designed to grow visibility, trust, and consistency — not just fill a feed. Three tiers available for brands at different stages of growth.
              </p>
              <Link to="/services/social-media-package" className="text-[#0A203F] tracking-[0.2em] text-xs uppercase hover:text-[#203F4F] transition-colors inline-flex items-center gap-2 group-hover:gap-3 duration-300">
                LEARN MORE <span>→</span>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="secondary">View All Packages & Pricing</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Journal Highlight */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-sm tracking-widest mb-6 uppercase text-[#6F6C5D]">Insights & Ideas</p>
            <h2 className="text-5xl md:text-6xl text-[#0A203F] mb-6 leading-tight font-serif">
              The Brand Journal
            </h2>
            <p className="text-xl text-[#203F4F] leading-relaxed max-w-3xl">
              Thoughts on branding, marketing strategy, and building businesses with intention. Written by our Co-Founder & Brand Lead, Cecilia Stahl.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link to="/journal/why-your-brand-needs-more-than-just-a-logo" className="group">
              <article className="bg-white overflow-hidden">
                <div className="overflow-hidden mb-6">
                  <ImageWithFallback
                    src={journalImage1}
                    alt="Brand strategy"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="border-l-2 border-[#AC9F8D] pl-6 py-2 transition-all group-hover:border-[#0A203F]">
                  <p className="text-xs tracking-widest uppercase text-[#6F6C5D] mb-2">Brand Strategy</p>
                  <h3 className="text-xl text-[#0A203F] font-serif group-hover:text-[#203F4F] transition-colors">
                    Why Your Brand Needs More Than Just a Logo
                  </h3>
                </div>
              </article>
            </Link>

            <Link to="/journal/building-a-content-strategy-that-actually-converts" className="group">
              <article className="bg-white overflow-hidden">
                <div className="overflow-hidden mb-6">
                  <ImageWithFallback
                    src={journalImage2}
                    alt="Digital marketing"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="border-l-2 border-[#AC9F8D] pl-6 py-2 transition-all group-hover:border-[#0A203F]">
                  <p className="text-xs tracking-widest uppercase text-[#6F6C5D] mb-2">Digital Marketing</p>
                  <h3 className="text-xl text-[#0A203F] font-serif group-hover:text-[#203F4F] transition-colors">
                    Building a Content Strategy That Actually Converts
                  </h3>
                </div>
              </article>
            </Link>

            <Link to="/journal/the-power-of-storytelling-in-marketing" className="group">
              <article className="bg-white overflow-hidden">
                <div className="overflow-hidden mb-6">
                  <ImageWithFallback
                    src={journalImage3}
                    alt="Storytelling"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="border-l-2 border-[#AC9F8D] pl-6 py-2 transition-all group-hover:border-[#0A203F]">
                  <p className="text-xs tracking-widest uppercase text-[#6F6C5D] mb-2">Content Strategy</p>
                  <h3 className="text-xl text-[#0A203F] font-serif group-hover:text-[#203F4F] transition-colors">
                    The Power of Storytelling in Marketing
                  </h3>
                </div>
              </article>
            </Link>
          </div>

          <div className="text-center">
            <Link to="/journal">
              <button className="bg-[#7B031E] text-white px-10 py-4 rounded-full text-lg hover:bg-[#5a0216] transition-colors shadow-lg hover:shadow-xl">
                Visit The Brand Journal
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary Image Scroll Moment */}
      <section 
        ref={imageSection2Ref}
        className="relative min-h-screen flex items-center py-32 px-8 bg-[#F5F3F0]"
      >
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-widest mb-6 uppercase text-[#6F6C5D]">Creative Depth</p>
            <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-6 leading-tight font-serif">
              Enduring brands aren't rushed.
            </h2>
            <p className="text-lg text-[#203F4F] leading-relaxed">
              They're shaped by insight, refined through experience, and designed to hold their value over time.
            </p>
          </div>
          <div className={`transition-all duration-700 ${stickyImage2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img
              src={journalImage1}
              alt="Creative workspace with laptop and marble desk"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-8 bg-[#0A203F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-white mb-16 leading-tight font-serif">
            Ready to build a brand that works as hard as you do?
          </h2>
          <Link to="/contact">
            <Button variant="primary">Inquire Today</Button>
          </Link>
        </div>
      </section>
    </>
  );
}