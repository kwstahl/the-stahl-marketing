import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Briefcase, Heart, Lightbulb, Users, X } from 'lucide-react';
import logo from 'figma:asset/logo.png';

export function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    portfolio: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        portfolio: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (in a real app, this would send to a backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! Your portfolio has been submitted. We\'ll be in touch soon.');
      setFormData({
        name: '',
        email: '',
        message: '',
        portfolio: null
      });
      // Reset file input
      const fileInput = document.getElementById('portfolio') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
      // Close modal after 2 seconds
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitMessage('');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-gradient-to-br from-[#F5F3F0] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl text-[#0A203F] mb-6 leading-[1.1] font-serif">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-[#6F6C5D] leading-relaxed max-w-3xl mx-auto">
            We're always looking for talented, creative, and driven individuals who share our passion for intentional design and strategic marketing.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] font-serif mb-12 text-center">
            Why The Stahl Marketing?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5F3F0] rounded-lg p-8">
              <div className="bg-[#0A203F] text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-[#0A203F] font-serif mb-3">
                Purpose-Driven Work
              </h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                Every project we take on has meaning. We work with clients who care about their business and want to make a real impact.
              </p>
            </div>

            <div className="bg-[#F5F3F0] rounded-lg p-8">
              <div className="bg-[#0A203F] text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-[#0A203F] font-serif mb-3">
                Creative Freedom
              </h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                We value original thinking and fresh ideas. You'll have the space to experiment, innovate, and bring your unique perspective to every project.
              </p>
            </div>

            <div className="bg-[#F5F3F0] rounded-lg p-8">
              <div className="bg-[#0A203F] text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-[#0A203F] font-serif mb-3">
                Collaborative Culture
              </h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                We're a small team that values collaboration over competition. Everyone's voice matters, and we learn from each other every day.
              </p>
            </div>

            <div className="bg-[#F5F3F0] rounded-lg p-8">
              <div className="bg-[#0A203F] text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-[#0A203F] font-serif mb-3">
                Growth Opportunities
              </h3>
              <p className="text-[#6F6C5D] leading-relaxed">
                As a young, growing agency, there's room to expand your skills, take on new challenges, and grow alongside the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 px-8 bg-[#F5F3F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] font-serif mb-6 text-center">
            Current Openings
          </h2>
          <p className="text-lg text-[#6F6C5D] mb-12 text-center max-w-2xl mx-auto">
            We're not actively hiring at the moment, but we're always open to connecting with talented creatives.
          </p>

          <div className="bg-white rounded-lg p-12 text-center border border-[#0A203F]/10">
            <p className="text-xl text-[#0A203F] mb-6">
              No open positions at this time, but we'd love to hear from you.
            </p>
            <p className="text-[#6F6C5D] mb-8 leading-relaxed">
              If you're a designer, developer, copywriter, or marketing strategist who's passionate about branding and digital design, we'd love to keep your information on file for future opportunities.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#7B031E] text-white px-10 py-4 rounded-full text-lg hover:bg-[#5a0216] transition-all shadow-lg hover:shadow-xl"
            >
              Send Your Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] font-serif mb-12 text-center">
            What We Look For
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Attention to Detail",
                description: "You notice the small things—spacing, alignment, tone, and how every element works together to create a cohesive experience."
              },
              {
                title: "Strategic Thinking",
                description: "You don't just make things look good—you understand why design decisions matter and how they serve the bigger picture."
              },
              {
                title: "Strong Communication",
                description: "You can articulate your ideas, collaborate with clients and teammates, and present your work with clarity and confidence."
              },
              {
                title: "Self-Motivation",
                description: "You take ownership of your work, manage your time effectively, and deliver high-quality results without constant oversight."
              },
              {
                title: "Curiosity & Growth Mindset",
                description: "You're always learning, staying current with design trends, and looking for ways to improve your craft."
              }
            ].map((trait, idx) => (
              <div key={idx} className="border-l-4 border-[#0A203F] pl-6 py-2">
                <h3 className="text-xl text-[#0A203F] font-serif mb-2">
                  {trait.title}
                </h3>
                <p className="text-[#6F6C5D] leading-relaxed">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 bg-[#0A203F] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight font-serif">
            Think you'd be a good fit?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            We'd love to see your work and learn more about you.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#7B031E] text-white px-12 py-5 rounded-full text-lg hover:bg-[#5a0216] transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* Portfolio Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0A203F] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#0A203F] px-8 pt-8 pb-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-4">
                <img 
                  src={logo} 
                  alt="The Stahl Marketing" 
                  className="h-12 w-auto"
                />
                <h3 className="text-3xl text-white font-serif">Submit Your Portfolio</h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              {submitMessage ? (
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center">
                  <p className="text-white text-lg">{submitMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="modal-name" className="block text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 border border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-colors backdrop-blur-sm rounded"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 border border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-colors backdrop-blur-sm rounded"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="modal-message" className="block text-white mb-2">
                      Tell Us About Yourself
                    </label>
                    <textarea
                      id="modal-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-6 py-4 border border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-colors backdrop-blur-sm rounded resize-none"
                      placeholder="Share your experience, skills, and what you're passionate about..."
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-portfolio" className="block text-white mb-2">
                      Upload Portfolio *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="modal-portfolio"
                        name="portfolio"
                        onChange={handleFileChange}
                        required
                        accept=".pdf,.doc,.docx,.zip,.jpg,.jpeg,.png"
                        className="w-full px-6 py-4 border border-white/30 bg-white/10 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#7B031E] file:text-white file:cursor-pointer hover:file:bg-[#5a0216] focus:border-white/50 focus:outline-none transition-colors backdrop-blur-sm rounded"
                      />
                    </div>
                    {formData.portfolio && (
                      <p className="text-white/70 text-sm mt-2">
                        Selected: {formData.portfolio.name}
                      </p>
                    )}
                    <p className="text-white/50 text-sm mt-2">
                      Accepted formats: PDF, DOC, DOCX, ZIP, JPG, PNG (Max 10MB)
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <p className="text-white/80 text-sm">
                      Your portfolio will be sent to: <span className="text-white font-medium">cecilia@thestahlmarketing.com</span>
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#7B031E] text-white px-12 py-5 rounded-full text-lg hover:bg-[#5a0216] transition-all shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Portfolio'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}