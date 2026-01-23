import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What services does The Stahl Marketing offer?",
          a: "We specialize in Squarespace website design, brand identity and logo design, social media management, and full brand suites that combine branding and website development."
        },
        {
          q: "Who do you typically work with?",
          a: "We work with small businesses, entrepreneurs, and service-based businesses who are ready to elevate their brand and online presence with intentional, strategic design."
        },
        {
          q: "Where are you located?",
          a: "We're based in the Rio Grande Valley, Texas, but we work with clients across the United States and beyond."
        },
        {
          q: "How do I get started?",
          a: "Book a free consultation call through our contact page. We'll discuss your goals, timeline, and determine which package is the best fit for your needs."
        }
      ]
    },
    {
      category: "Process",
      questions: [
        {
          q: "What does your design process look like?",
          a: "We start with discovery and strategy, move into concept design, refine based on your feedback, and finalize with delivery of all files and training. You're involved at every stage."
        },
        {
          q: "How many revisions do I get?",
          a: "Most packages include 3 rounds of revisions. This ensures we have time to refine and perfect your design while keeping the project on track."
        },
        {
          q: "Can you work with my existing brand?",
          a: "Absolutely. We can design a website using your existing brand guidelines, or we can refresh your brand identity as part of a larger project."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "Do you offer payment plans?",
          a: "Yes! We offer flexible payment options including 2-payment and 3-payment plans with no interest or fees."
        },
        {
          q: "What's included in the pricing?",
          a: "Our pricing includes strategy, design, revisions, training, and all deliverable files. There are no hidden fees. Any third-party costs (like domain or hosting) are separate."
        },
        {
          q: "Do you charge a deposit?",
          a: "Yes. A 50% deposit is required to secure your project start date, with the remaining balance due upon completion."
        }
      ]
    },
    {
      category: "Website Projects",
      questions: [
        {
          q: "Do I need to provide content and images?",
          a: "Yes. You'll need to provide your content, photos, and any other materials you want featured. We can guide you on what's needed and provide copywriting support if needed."
        },
        {
          q: "Will my website be mobile-friendly?",
          a: "Absolutely. Every website we design is fully responsive and optimized for mobile, tablet, and desktop viewing."
        },
        {
          q: "Can I update my website myself after it's built?",
          a: "Yes. We build on Squarespace, which is user-friendly and easy to update. We also provide training so you feel confident making changes."
        },
        {
          q: "Do you offer ongoing support after launch?",
          a: "Yes. We offer post-launch support and maintenance packages for clients who want ongoing design and technical assistance."
        }
      ]
    },
    {
      category: "Brand Identity Projects",
      questions: [
        {
          q: "What file formats will I receive?",
          a: "You'll receive your logo and brand assets in PNG, SVG, AI, PDF, and EPS formats in all color variations (full color, black, white)."
        },
        {
          q: "Do you design business cards and marketing materials?",
          a: "Yes. Business card design is included in our brand identity package. We can also design additional marketing materials as add-ons."
        },
        {
          q: "Can I trademark my logo?",
          a: "Yes. All of our designs are original and trademark-ready. However, filing for a trademark is a separate legal process that you'll need to handle with a trademark attorney."
        },
        {
          q: "What if I don't like the initial concepts?",
          a: "We start with a detailed strategy session to ensure we understand your vision. If the initial concepts miss the mark, we'll regroup and explore new directions."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-[#F5F3F0] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl text-[#0A203F] mb-6 leading-[1.1] font-serif">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-[#6F6C5D] leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about working with The Stahl Marketing. Can't find what you're looking for? Reach out anytime.
          </p>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h2 className="text-3xl text-[#0A203F] font-serif mb-6 pb-3 border-b border-[#0A203F]/10">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((faq, faqIdx) => {
                  const globalIndex = sectionIdx * 100 + faqIdx;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div 
                      key={faqIdx} 
                      className="border border-[#0A203F]/10 rounded-lg overflow-hidden hover:border-[#0A203F]/20 transition-colors"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F5F3F0]/50 transition-colors"
                      >
                        <h3 className="text-lg text-[#0A203F] font-medium pr-8">
                          {faq.q}
                        </h3>
                        <ChevronDown 
                          className={`w-5 h-5 text-[#0A203F] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 pt-2">
                          <p className="text-[#6F6C5D] leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-[#F5F3F0]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-6 leading-tight font-serif">
            Still have questions?
          </h2>
          <p className="text-xl text-[#6F6C5D] mb-10 leading-relaxed">
            We'd love to hear from you. Book a free consultation and let's chat about your project.
          </p>
          <Link to="/contact">
            <button className="bg-[#7B031E] text-white px-12 py-5 rounded-full text-lg hover:bg-[#5a0216] transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Book a Consult
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}