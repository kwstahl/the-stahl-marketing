import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { ChevronDown, Check } from 'lucide-react';

export function Systems() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#F5F3F0]">
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#0A203F] mb-8 leading-[1.1] font-serif">
              We don't sell templates.
              We build business infrastructure.
            </h1>
            <p className="text-xl md:text-2xl text-[#203F4F] leading-relaxed mb-12 max-w-2xl">
              Everything designed to respond faster, capture more leads, reduce manual work, increase conversions, and grow with you.
            </p>
            <Link to="/contact">
              <motion.button 
                className="bg-[#7B031E] text-white px-10 py-5 rounded-lg text-lg hover:bg-[#5a0216] transition-all shadow-md"
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(123, 3, 30, 0.3)" }}
                transition={{ duration: 0.2 }}
              >
                Start Your System
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-10">
          <p className="text-sm tracking-widest uppercase text-[#6F6C5D] mb-2">Choose Your System</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-[#6F6C5D] mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Starter System */}
          <div className="mb-16 bg-[#F5F3F0] p-12 md:p-16 border-l-4 border-[#4CAF50]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-[#4CAF50]"></div>
              <p className="text-sm tracking-widest uppercase text-[#6F6C5D]">Starter System</p>
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-4 font-serif">
              Capture Every Lead
            </h2>
            <p className="text-lg text-[#203F4F] mb-8 leading-relaxed max-w-3xl">
              Perfect for businesses that need a professional online presence that actually converts visitors into real customers.
            </p>
            <div className="mb-10">
              <p className="text-5xl text-[#0A203F] font-serif mb-2">$1,500 – $3,000</p>
              <p className="text-[#6F6C5D]">One-time investment</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div>
                <h3 className="text-xl text-[#0A203F] mb-4 font-serif">Includes:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Modern, mobile-friendly website or landing page</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Contact / quote request forms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Instant email notifications for new leads</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Basic performance optimization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Hosting + deployment setup</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Simple analytics tracking</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white p-8 rounded-lg mb-6">
                  <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Result:</h3>
                  <p className="text-[#203F4F] leading-relaxed">
                    You stop missing opportunities and start collecting real inquiries consistently.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg">
                  <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Best for:</h3>
                  <p className="text-[#203F4F] leading-relaxed">
                    New businesses, solo operators, local services
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contact">
              <Button variant="secondary">Get Started</Button>
            </Link>
          </div>

          {/* Automation System */}
          <div className="mb-16 bg-[#F5F3F0] p-12 md:p-16 border-l-4 border-[#FFC107]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-[#FFC107]"></div>
              <p className="text-sm tracking-widest uppercase text-[#6F6C5D]">Automation System</p>
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-4 font-serif">
              Respond Instantly & Book Automatically
            </h2>
            <p className="text-lg text-[#203F4F] mb-8 leading-relaxed max-w-3xl">
              For businesses that are busy and can't manually respond to every message fast enough.
            </p>
            <div className="mb-10">
              <p className="text-5xl text-[#0A203F] font-serif mb-2">$3,500 – $6,500</p>
              <p className="text-[#6F6C5D] mb-1">One-time investment</p>
              <p className="text-2xl text-[#0A203F] font-serif">+ $75 – $150 / month</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div>
                <h3 className="text-xl text-[#0A203F] mb-4 font-serif">Everything in Starter, plus:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Instant SMS + email auto-replies to new leads</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Automated follow-up sequences</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Appointment booking system</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Reminder texts & emails</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Lead database (simple CRM)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Admin dashboard to view activity</p>
                  </div>
                </div>

                <div className="mt-6 bg-white/50 p-6 rounded-lg">
                  <p className="text-sm text-[#6F6C5D] uppercase tracking-wider mb-3">Monthly includes:</p>
                  <div className="space-y-2">
                    <p className="text-[#203F4F]">• Hosting</p>
                    <p className="text-[#203F4F]">• Maintenance</p>
                    <p className="text-[#203F4F]">• Monitoring</p>
                    <p className="text-[#203F4F]">• System updates</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white p-8 rounded-lg mb-6">
                  <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Result:</h3>
                  <p className="text-[#203F4F] leading-relaxed">
                    Every lead gets an immediate response — even when you're asleep.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg">
                  <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Best for:</h3>
                  <p className="text-[#203F4F] leading-relaxed">
                    Clinics, studios, service businesses, offices
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contact">
              <Button variant="secondary">Get Started</Button>
            </Link>
          </div>

          {/* Growth System - Featured */}
          <div className="mb-16 bg-[#0A203F] p-12 md:p-16 text-white border-l-4 border-[#2196F3]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-[#2196F3]"></div>
              <p className="text-sm tracking-widest uppercase text-white/70">Growth System</p>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 font-serif">
              Campaigns, Payments & Pipeline Tracking
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              For businesses ready to scale operations and automate growth.
            </p>
            <div className="mb-10">
              <p className="text-5xl font-serif mb-2">$7,500 – $12,000</p>
              <p className="text-white/70 mb-1">One-time investment</p>
              <p className="text-2xl font-serif">+ $150 – $300 / month</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div>
                <h3 className="text-xl mb-4 font-serif">Everything in Automation, plus:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2196F3] mt-0.5 flex-shrink-0" />
                    <p className="text-white/90">Customer pipeline tracking</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2196F3] mt-0.5 flex-shrink-0" />
                    <p className="text-white/90">Campaign manager (email + SMS blasts)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2196F3] mt-0.5 flex-shrink-0" />
                    <p className="text-white/90">Promotions & announcements tools</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2196F3] mt-0.5 flex-shrink-0" />
                    <p className="text-white/90">Payment link integration</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2196F3] mt-0.5 flex-shrink-0" />
                    <p className="text-white/90">Customer tagging & segmentation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2196F3] mt-0.5 flex-shrink-0" />
                    <p className="text-white/90">Conversion analytics dashboard</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2196F3] mt-0.5 flex-shrink-0" />
                    <p className="text-white/90">Custom tool integrations</p>
                  </div>
                </div>

                <div className="mt-6 bg-white/10 p-6 rounded-lg">
                  <p className="text-sm text-white/70 uppercase tracking-wider mb-3">Monthly includes:</p>
                  <div className="space-y-2">
                    <p className="text-white/90">• Priority support</p>
                    <p className="text-white/90">• Performance scaling</p>
                    <p className="text-white/90">• Feature updates</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white/10 p-8 rounded-lg mb-6">
                  <h3 className="text-xl mb-3 font-serif">Result:</h3>
                  <p className="text-white/90 leading-relaxed">
                    Your website becomes a revenue engine, not just a brochure.
                  </p>
                </div>
                <div className="bg-white/10 p-8 rounded-lg">
                  <h3 className="text-xl mb-3 font-serif">Best for:</h3>
                  <p className="text-white/90 leading-relaxed">
                    Established businesses that want structured growth
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contact">
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>

          {/* Custom Systems */}
          <div className="mb-16 bg-[#F5F3F0] p-12 md:p-16 border-l-4 border-[#9C27B0]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-[#9C27B0]"></div>
              <p className="text-sm tracking-widest uppercase text-[#6F6C5D]">Custom Systems</p>
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-4 font-serif">
              Built Around Your Business
            </h2>
            <p className="text-lg text-[#203F4F] mb-8 leading-relaxed max-w-3xl">
              For businesses that need fully custom internal tools or specialized software.
            </p>
            <div className="mb-10">
              <p className="text-5xl text-[#0A203F] font-serif mb-2">Starting at $15,000</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div>
                <h3 className="text-xl text-[#0A203F] mb-4 font-serif">Examples include:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#9C27B0] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Staff dashboards</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#9C27B0] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Internal management systems</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#9C27B0] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Multi-user portals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#9C27B0] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Advanced automation workflows</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#9C27B0] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Industry-specific platforms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#9C27B0] mt-0.5 flex-shrink-0" />
                    <p className="text-[#203F4F]">Custom SaaS development</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white p-8 rounded-lg">
                  <h3 className="text-xl text-[#0A203F] mb-3 font-serif">Result:</h3>
                  <p className="text-[#203F4F] leading-relaxed">
                    Software designed exactly for how your business works.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contact">
              <Button variant="secondary">Discuss Your Project</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-24 px-8 bg-[#AC9F8D]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0A203F] mb-12 font-serif text-center">Add-On Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-4 font-serif">Automation Management</h3>
              <p className="text-3xl text-[#0A203F] font-serif mb-4">$100 – $300</p>
              <p className="text-[#6F6C5D] mb-6">Per month</p>
              <p className="text-[#203F4F] leading-relaxed">
                We monitor and optimize your workflows
              </p>
            </div>

            <div className="bg-white p-8 border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-4 font-serif">Campaign Setup</h3>
              <p className="text-3xl text-[#0A203F] font-serif mb-4">$250 – $750</p>
              <p className="text-[#6F6C5D] mb-6">Per campaign</p>
              <p className="text-[#203F4F] leading-relaxed">
                Promotions, seasonal launches, announcements
              </p>
            </div>

            <div className="bg-white p-8 border border-[#AC9F8D]/30">
              <h3 className="text-2xl text-[#0A203F] mb-4 font-serif">Consulting</h3>
              <p className="text-3xl text-[#0A203F] font-serif mb-4">$125</p>
              <p className="text-[#6F6C5D] mb-6">Per hour</p>
              <p className="text-[#203F4F] leading-relaxed">
                Tech strategy, audits, scaling advice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#0A203F] mb-12 font-serif text-center">Important Notes</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-[#7B031E] mt-1 flex-shrink-0" />
              <p className="text-lg text-[#203F4F] leading-relaxed">
                SMS & email provider costs billed at usage
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-[#7B031E] mt-1 flex-shrink-0" />
              <p className="text-lg text-[#203F4F] leading-relaxed">
                No long-term contracts required
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-[#7B031E] mt-1 flex-shrink-0" />
              <p className="text-lg text-[#203F4F] leading-relaxed">
                Systems built to scale as you grow
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-[#7B031E] mt-1 flex-shrink-0" />
              <p className="text-lg text-[#203F4F] leading-relaxed">
                You own your data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 px-8 bg-[#0A203F] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 font-serif text-center">What makes us different?</h2>
          
          <div className="text-center mb-12">
            <p className="text-2xl md:text-3xl mb-8 font-serif">
              We don't sell templates.<br />
              We build business infrastructure.
            </p>
            <p className="text-xl text-white/80 mb-8">Everything is designed to:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7B031E] rounded-full mb-4">
                <Check className="w-8 h-8" />
              </div>
              <p className="text-lg">Respond faster</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7B031E] rounded-full mb-4">
                <Check className="w-8 h-8" />
              </div>
              <p className="text-lg">Capture more leads</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7B031E] rounded-full mb-4">
                <Check className="w-8 h-8" />
              </div>
              <p className="text-lg">Reduce manual work</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7B031E] rounded-full mb-4">
                <Check className="w-8 h-8" />
              </div>
              <p className="text-lg">Increase conversions</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7B031E] rounded-full mb-4">
                <Check className="w-8 h-8" />
              </div>
              <p className="text-lg">Grow with you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-8 bg-[#F5F3F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-[#0A203F] mb-8 leading-tight font-serif">
            Ready to build your system?
          </h2>
          <p className="text-xl text-[#203F4F] mb-12 leading-relaxed">
            Let's talk about which system is right for your business.
          </p>
          <Link to="/contact">
            <Button variant="primary">Get Started Today</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
