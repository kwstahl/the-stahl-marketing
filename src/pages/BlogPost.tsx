import { useParams, Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import bioImage from 'figma:asset/39df135f46ca446ff8030c3c84778b8434d9a950.png';
import journalImage1 from 'figma:asset/a47cad612f464234974faf0a63577ed5b3c76343.png';
import journalImage2 from 'figma:asset/e4dde5a024dd170af63724f2561fb5a0531229cd.png';
import journalImage3 from 'figma:asset/68fdc3058890d550b884e53cd023368d902a166d.png';

// Blog post data
const blogPosts = {
  'why-your-brand-needs-more-than-just-a-logo': {
    title: 'Why Your Brand Needs More Than Just a Logo',
    category: 'Brand Strategy',
    date: 'Jan 15, 2026',
    image: journalImage1,
    excerpt: 'Before a logo is ever designed, strategy needs to come first. A brand isn\'t built on personal taste—it\'s built on understanding your audience.',
    content: `
      <p>Before a logo is ever designed, strategy needs to come first. A brand isn't built on personal taste—it's built on understanding your audience. Knowing who you're speaking to, what they value, and how they make decisions is essential before making any visual choices. Without that clarity, even a well-designed logo can miss the mark.</p>

      <p>Strong branding starts with brand strategy, messaging, and positioning. These elements guide every creative decision, from tone of voice to visual direction, ensuring your brand resonates with the people it's meant to reach. Design should always be intentional, not based on preference, trends, or what simply "looks good."</p>

      <p>Color is a perfect example. Every color communicates something and triggers a specific emotional response. Choosing the right palette requires understanding how your audience perceives color and how those emotions align with your brand's goals. Color selection is strategic—not decorative. We'll dive deeper into color psychology and its role in branding in a future journal.</p>

      <p>A logo introduces your brand, but strategy is what gives it meaning. When branding is built on insight rather than instinct, it creates clarity, consistency, and long-term growth.</p>
    `
  },
  'building-a-content-strategy-that-actually-converts': {
    title: 'Building a Content Strategy That Actually Converts',
    category: 'Digital Marketing',
    date: 'Jan 8, 2026',
    image: journalImage2,
    excerpt: 'In today\'s digital landscape, everyone is creating content. But creating content without a strategy is like shouting into the void.',
    content: `
      <p>In today's digital landscape, everyone is creating content. But creating content without a strategy is like shouting into the void—you're making noise, but you're not being heard by the right people, and you're certainly not driving meaningful results.</p>

      <p>The foundation of any effective content strategy is a deep understanding of your audience. What are their pain points? What questions are they asking? What stage of the buying journey are they in? Your content should answer these questions and provide genuine value, not just fill space on your website or social feeds.</p>

      <p>Every piece of content you create should have a clear purpose. Are you building awareness? Generating leads? Nurturing existing customers? Your goals determine your topics, formats, and distribution channels. Without this clarity, you're creating content that might look good but doesn't move your business forward.</p>

      <p>Content marketing is a long game, but with the right strategy, it becomes one of your most valuable assets. When your content is built on strategy rather than trends, it creates sustainable growth and positions you as a trusted voice in your industry.</p>
    `
  },
  'creating-brand-consistency-across-all-touchpoints': {
    title: 'Creating Brand Consistency Across All Touchpoints',
    category: 'Brand Development',
    date: 'Dec 28, 2025',
    image: journalImage3,
    excerpt: 'Your brand is not just what you show on your website. It\'s how you answer the phone, the tone of your emails, the design of your business cards.',
    content: `
      <p>Your brand is not just what you show on your website. It's how you answer the phone, the tone of your emails, the design of your business cards, and the experience in your physical space. Every touchpoint is an opportunity to reinforce who you are—or to create confusion.</p>

      <p>Consistency builds recognition and trust. When your brand shows up the same way across different platforms, people start to recognize you instantly. They know what to expect, and that familiarity creates comfort and credibility. This doesn't happen by accident—it requires intentional systems and clear guidelines.</p>

      <p>Start by documenting your visual standards, tone of voice, messaging principles, and brand values. These guidelines become your north star, ensuring everyone on your team and any external partners represent your brand consistently. Then audit every place your brand appears and ask: Does this feel like us? Is it aligned with who we are?</p>

      <p>Consistency does not mean boring or rigid. Your brand can and should adapt to different contexts while maintaining its core identity. Think of it like a person—you might dress differently for different occasions, but your personality remains the same. When your brand is consistent, it becomes unmistakable.</p>
    `
  },
  'when-to-rebrand-signs-its-time-for-a-refresh': {
    title: 'When to Rebrand: Signs It\'s Time for a Refresh',
    category: 'Business Strategy',
    date: 'Dec 20, 2025',
    image: journalImage1,
    excerpt: 'Rebranding is a significant investment of time, money, and energy. It\'s not something you do on a whim or because you\'re bored with your logo.',
    content: `
      <p>Rebranding is a significant investment of time, money, and energy. It's not something you do on a whim or because you're bored with your logo. But when done for the right reasons at the right time, it can transform your business.</p>

      <p>If your current brand no longer reflects who you are, what you offer, or who you serve, it's time to consider a rebrand. Maybe you've expanded your services, shifted your target market, or elevated your positioning. Your brand should grow with you. Similarly, if you're consistently attracting the wrong type of clients or struggling to compete on value instead of price, your brand might be sending the wrong signals.</p>

      <p>Design trends change, and while you shouldn't chase every trend, if your brand looks like it's stuck in a different decade, it might be hurting your credibility. Many businesses start with DIY branding—and that's perfectly fine. But as you grow, investing in professional branding becomes essential. It's a sign of commitment to your business and helps you compete at a higher level.</p>

      <p>A successful rebrand starts with strategy, not design. Clarify your positioning, understand your audience, and define your goals. Then let those insights guide your visual and verbal identity. Rebranding is not about starting over—it's about revealing who you've become.</p>
    `
  },
  'the-power-of-storytelling-in-marketing': {
    title: 'The Power of Storytelling in Marketing',
    category: 'Content Strategy',
    date: 'Dec 12, 2025',
    image: journalImage2,
    excerpt: 'Facts tell, but stories sell. In a world where everyone is shouting about features and benefits, the businesses that win are the ones that connect emotionally.',
    content: `
      <p>Facts tell, but stories sell. In a world where everyone is shouting about features and benefits, the businesses that win are the ones that connect emotionally through compelling narratives. Our brains are wired for stories—they help us make sense of information, remember details, and connect emotionally.</p>

      <p>Every compelling story has a protagonist (your customer, not you), a challenge they're facing, and a transformation. Your brand is the guide that helps them achieve that transformation. This framework shifts the focus from "here's what we do" to "here's how we help you succeed." The key is authenticity—people can spot inauthenticity from a mile away.</p>

      <p>Use specific details, real examples, and concrete imagery. Instead of saying "we help businesses grow," share the story of a specific client who came to you struggling and left with results. Your origin story, customer success stories, day-in-the-life content, and even how you talk about your process are all opportunities to use narrative.</p>

      <p>When you master storytelling, you stop competing on features and price. You start competing on connection and meaning. Make storytelling a consistent thread throughout your marketing, and watch how it transforms your relationship with your audience.</p>
    `
  },
  'building-trust-through-brand-transparency': {
    title: 'Building Trust Through Brand Transparency',
    category: 'Brand Strategy',
    date: 'Dec 5, 2025',
    image: journalImage3,
    excerpt: 'Today\'s consumers are skeptical. They\'ve been marketed to their entire lives, and they can smell inauthenticity from a mile away.',
    content: `
      <p>Today's consumers are skeptical. They've been marketed to their entire lives, and they can smell inauthenticity from a mile away. The brands that are winning are not the ones with the slickest marketing—they're the ones being genuinely transparent.</p>

      <p>Transparency means being open about your processes, honest about your limitations, clear about your pricing, and authentic in your communication. It means admitting when you make mistakes and showing how you're fixing them. Let people see behind the curtain—show your team, share your process, talk about your challenges. When you're vulnerable and real, you give people permission to connect with you on a human level.</p>

      <p>Vague messaging might sound sophisticated, but it creates confusion. Be specific about what you do, who you serve, and what results you deliver. When you're clear, the right people will resonate, and the wrong people will self-select out—and that's a good thing. This applies to everything from how you talk about your capabilities to how you handle problems.</p>

      <p>It's easy to say you value something—it's harder to live it publicly. Share how you're walking your talk, whether that's how you treat your team, how you serve your community, or how you run your business sustainably. Transparency builds trust. Trust builds loyalty. And loyalty is the foundation of long-term business success.</p>
    `
  }
};

export function BlogPost() {
  const { id } = useParams();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="pt-40 pb-32 px-8 text-center">
        <h1 className="text-4xl text-[#0A203F] mb-4 font-serif">Post not found</h1>
        <Link to="/journal" className="text-[#7B031E] hover:text-[#0A203F]">
          ← Back to The Brand Journal
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Back Link */}
      <div className="pt-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/journal" 
            className="inline-flex items-center text-[#0A203F] hover:text-[#203F4F] transition-colors mb-8"
          >
            ← Back to The Brand Journal
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="pb-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#6F6C5D] mb-4">{post.category}</p>
          <h1 className="text-5xl md:text-6xl text-[#000000] mb-6 leading-tight font-serif">
            {post.title}
          </h1>
          <p className="text-[#6F6C5D] mb-12">{post.date}</p>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-[#0A203F] prose-headings:mb-4 prose-headings:mt-8
              prose-p:text-[#203F4F] prose-p:leading-relaxed prose-p:mb-6
              prose-h2:text-3xl
              prose-a:text-[#7B031E] prose-a:no-underline hover:prose-a:text-[#0A203F]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}