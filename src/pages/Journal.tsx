import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import bioImage from 'figma:asset/39df135f46ca446ff8030c3c84778b8434d9a950.png';
import journalImage1 from 'figma:asset/journal1.jpg';
import journalImage2 from 'figma:asset/journal2.jpg';
import journalImage3 from 'figma:asset/journal3.jpg';

export function Journal() {
  return (
    <>
      {/* Journal Hero */}
      <section className="pt-32 pb-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-widest mb-6 uppercase text-[#6F6C5D]">Insights & Ideas</p>
          <h1 className="text-6xl md:text-7xl text-[#000000] mb-6 leading-tight font-serif">
            The Brand Journal
          </h1>
          <p className="text-xl text-[#6F6C5D] leading-relaxed max-w-3xl">
            Thoughts on branding, marketing strategy, and building businesses with intention. Written by Cecilia Stahl, our Co-Founder & Brand Lead, with insights drawn from years of helping businesses find clarity, build credibility, and grow with purpose.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-8 bg-[#AC9F8D]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Blog Post 1 */}
            <Link to="/journal/why-your-brand-needs-more-than-just-a-logo">
              <article className="bg-white overflow-hidden group cursor-pointer">
                <div className="overflow-hidden">
                  <ImageWithFallback
                    src={journalImage1}
                    alt="Brand strategy"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 text-xs tracking-widest uppercase bg-[#0B3B23] text-white mb-4">Brand Strategy</span>
                  <h3 className="text-2xl text-[#0A203F] mb-4 font-serif group-hover:text-[#203F4F] transition-colors">
                    Why Your Brand Needs More Than Just a Logo
                  </h3>
                  <p className="text-[#6F6C5D] leading-relaxed mb-4">
                    Before a logo is ever designed, strategy needs to come first. A brand isn't built on personal taste—it's built on understanding your audience.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6F6C5D]">Jan 15, 2026</span>
                    <span className="text-[#0A203F] group-hover:text-[#203F4F] transition-colors">Read more →</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Post 2 */}
            <Link to="/journal/building-a-content-strategy-that-actually-converts">
              <article className="bg-white overflow-hidden group cursor-pointer">
                <div className="overflow-hidden">
                  <ImageWithFallback
                    src={journalImage2}
                    alt="Digital marketing"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 text-xs tracking-widest uppercase bg-[#0B3B23] text-white mb-4">Digital Marketing</span>
                  <h3 className="text-2xl text-[#0A203F] mb-4 font-serif group-hover:text-[#203F4F] transition-colors">
                    Building a Content Strategy That Actually Converts
                  </h3>
                  <p className="text-[#6F6C5D] leading-relaxed mb-4">
                    In today's digital landscape, everyone is creating content. But creating content without a strategy is like shouting into the void.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6F6C5D]">Jan 8, 2026</span>
                    <span className="text-[#0A203F] group-hover:text-[#203F4F] transition-colors">Read more →</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Post 3 */}
            <Link to="/journal/creating-brand-consistency-across-all-touchpoints">
              <article className="bg-white overflow-hidden group cursor-pointer">
                <div className="overflow-hidden">
                  <ImageWithFallback
                    src={journalImage3}
                    alt="Web development"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 text-xs tracking-widest uppercase bg-[#0B3B23] text-white mb-4">Brand Development</span>
                  <h3 className="text-2xl text-[#0A203F] mb-4 font-serif group-hover:text-[#203F4F] transition-colors">
                    Creating Brand Consistency Across All Touchpoints
                  </h3>
                  <p className="text-[#6F6C5D] leading-relaxed mb-4">
                    Your brand is not just what you show on your website. It's how you answer the phone, the tone of your emails, the design of your business cards.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6F6C5D]">Dec 28, 2025</span>
                    <span className="text-[#0A203F] group-hover:text-[#203F4F] transition-colors">Read more →</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Post 4 */}
            <Link to="/journal/when-to-rebrand-signs-its-time-for-a-refresh">
              <article className="bg-white overflow-hidden group cursor-pointer">
                <div className="overflow-hidden">
                  <ImageWithFallback
                    src={journalImage1}
                    alt="Business strategy"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 text-xs tracking-widest uppercase bg-[#0B3B23] text-white mb-4">Business Strategy</span>
                  <h3 className="text-2xl text-[#0A203F] mb-4 font-serif group-hover:text-[#203F4F] transition-colors">
                    When to Rebrand: Signs It's Time for a Refresh
                  </h3>
                  <p className="text-[#6F6C5D] leading-relaxed mb-4">
                    Rebranding is a significant investment of time, money, and energy. It's not something you do on a whim or because you're bored with your logo.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6F6C5D]">Dec 20, 2025</span>
                    <span className="text-[#0A203F] group-hover:text-[#203F4F] transition-colors">Read more →</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Post 5 */}
            <Link to="/journal/the-power-of-storytelling-in-marketing">
              <article className="bg-white overflow-hidden group cursor-pointer">
                <div className="overflow-hidden">
                  <ImageWithFallback
                    src={journalImage2}
                    alt="Marketing planning"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 text-xs tracking-widest uppercase bg-[#0B3B23] text-white mb-4">Content Strategy</span>
                  <h3 className="text-2xl text-[#0A203F] mb-4 font-serif group-hover:text-[#203F4F] transition-colors">
                    The Power of Storytelling in Marketing
                  </h3>
                  <p className="text-[#6F6C5D] leading-relaxed mb-4">
                    Facts tell, but stories sell. In a world where everyone is shouting about features and benefits, the businesses that win are the ones that connect emotionally.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6F6C5D]">Dec 12, 2025</span>
                    <span className="text-[#0A203F] group-hover:text-[#203F4F] transition-colors">Read more →</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Post 6 */}
            <Link to="/journal/building-trust-through-brand-transparency">
              <article className="bg-white overflow-hidden group cursor-pointer">
                <div className="overflow-hidden">
                  <ImageWithFallback
                    src={journalImage3}
                    alt="Digital branding"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 text-xs tracking-widest uppercase bg-[#0B3B23] text-white mb-4">Brand Strategy</span>
                  <h3 className="text-2xl text-[#0A203F] mb-4 font-serif group-hover:text-[#203F4F] transition-colors">
                    Building Trust Through Brand Transparency
                  </h3>
                  <p className="text-[#6F6C5D] leading-relaxed mb-4">
                    Today's consumers are skeptical. They've been marketed to their entire lives, and they can smell inauthenticity from a mile away.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6F6C5D]">Dec 5, 2025</span>
                    <span className="text-[#0A203F] group-hover:text-[#203F4F] transition-colors">Read more →</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}