import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Check, Globe, FileText, TrendingUp, Settings } from 'lucide-react';
import webDesignImage1 from 'figma:asset/servicesImage.jpg';
import webDesignImage2 from 'figma:asset/webDesignImage2.jpg';

export function WebDesignPackage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const deliverables = [
    { 
      icon: Globe, 
      title: 'Brand Strategy', 
      description: 'Before we design anything, we start with strategy. We understand your business, goals, and audience so your website is intentional — supporting where your brand is going, not just where it is today.',
      items: [] 
    },
    { 
      icon: FileText, 
      title: 'Copy Polish', 
      description: 'Your website copy goes through strategic refinement focused on clarity and flow. We don\'t rewrite your voice — we elevate what\'s already there so your expertise is clear and visitors know they\'re in the right place.',
      items: [] 
    },
    { 
      icon: TrendingUp, 
      title: 'Web Design & Development', 
      description: 'A custom-built website designed to reflect the work you\'re doing behind the scenes. From layout and visual design to development and hosting setup, we handle the full build.',
      items: [] 
    },
    { 
      icon: Settings, 
      title: 'On-Site SEO', 
      description: 'Your pages are structured with clear hierarchy, intentional headings, and optimized metadata — without sacrificing your brand voice. The goal is to help the right people find you and recognize your credibility.',
      items: [] 
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-[#F5F3F0] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-[#0A203F] text-white text-xs tracking-widest px-4 py-2 rounded-full uppercase mb-6">
            Website Design Package
          </div>
          <h1 className="text-5xl md:text-7xl text-[#000000] mb-6 leading-[1.1] font-serif">
            Squarespace Website Design
          </h1>
          <p className="text-xl md:text-2xl text-[#6F6C5D] leading-relaxed max-w-3xl mb-8">
            A complete custom website designed to position your business as the premium choice. Built for founders who understand that their brand is an investment, not an expense.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <div>
              <p className="text-5xl text-[#0A203F] font-serif">$6,000</p>
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
      </section>

      {/* Visual Showcase */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Large Featured Image with Text Overlay */}
          <div className="relative mb-12 overflow-hidden rounded-lg shadow-2xl">
            <img
              src={webDesignImage1}
              alt="Premium workspace design aesthetic"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-12">
              <p className="text-white text-2xl md:text-3xl font-serif italic max-w-2xl">
                "Your website should feel as intentional as the work you do behind the scenes."
              </p>
            </div>
          </div>

          {/* Offset Second Image with Stats */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl text-[#0A203F] font-serif mb-6">
                Built for brands who value the details
              </h3>
              <p className="text-lg text-[#6F6C5D] leading-relaxed">
                Every element is crafted with purpose. From typography to white space, your website becomes a seamless extension of your brand's story.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="overflow-hidden rounded-lg shadow-xl md:translate-y-8">
                <img
                  src={webDesignImage2}
                  alt="Elegant brand materials"
                  className="w-full h-[550px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options - Engaging Layout */}
      <section className="py-20 px-8 bg-gradient-to-br from-[#0A203F] to-[#203F4F] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Headline */}
            <div>
              <h2 className="text-4xl md:text-5xl text-white font-serif mb-6 leading-tight">
                Investment designed to fit your business
              </h2>
              <p className="text-xl text-[#AC9F8D] leading-relaxed">
                Choose the payment structure that works best for your cash flow. No interest, no hidden fees.
              </p>
            </div>

            {/* Right Side - Payment Options */}
            <div className="space-y-4">
              {[
                { label: 'Full Payment', price: '$6,000', detail: 'upfront' },
                { label: '2-Payment Plan', price: '$3,000', detail: '× 2 payments' },
                { label: '3-Payment Plan', price: '$2,000', detail: '× 3 payments' }
              ].map((option, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white text-xl font-serif mb-1">{option.label}</h3>
                      <p className="text-[#AC9F8D] text-sm">{option.detail}</p>
                    </div>
                    <p className="text-3xl text-white font-serif">{option.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#AC9F8D]/10 rounded-full blur-3xl"></div>
      </section>

      {/* What's Included - Compact Grid */}
      <section className="py-16 px-8 bg-[#F5F3F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-[#0A203F] font-serif mb-4">What's Included</h2>
            <p className="text-lg text-[#6F6C5D]">A complete custom website built to convert and grow with you</p>
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
              { title: 'Planning', desc: 'Site map, wireframes, and content strategy session' },
              { title: 'Design', desc: 'Custom page designs, layout creation, and style development' },
              { title: 'Build & Content', desc: 'Squarespace build, content integration, and copy polish' },
              { title: 'Launch', desc: 'Final revisions, testing, training, and celebration' }
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

      {/* FAQ - Compact */}
      <section className="py-16 px-8 bg-[#F5F3F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#0A203F] font-serif mb-10 text-center">Common Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'Why Squarespace?', a: 'It\'s user-friendly, reliable, and perfect for service-based businesses. You can update it yourself without a developer.' },
              { q: 'Can I add more pages?', a: 'Yes. Additional pages are $400 each.' },
              { q: 'Do you write the copy?', a: 'We provide copy refinement and polish. You bring the story, we make it web-ready.' },
              { q: 'What if I need branding too?', a: 'Check out The Stahl Foundation™ for our complete brand + website package.' },
              { q: 'Is hosting included?', a: 'You\'ll need a Squarespace subscription (starting at $16/month). We\'ll help you set it up.' },
              { q: 'Can you transfer my old site?', a: 'We can migrate basic content for an additional fee. Let\'s discuss your needs.' }
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
            Ready to build a website that works for you?
          </h2>
          <p className="text-xl text-[#6F6C5D] mb-10 leading-relaxed">
            Let's create a digital home that positions you clearly and confidently.
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