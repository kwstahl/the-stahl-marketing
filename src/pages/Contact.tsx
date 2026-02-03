import { useState } from 'react';
import { Button } from '../components/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);

    const res = await fetch("api/lead", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    });

    const json = await res.json().catch(()=>null);

    console.log("json:", json);

    if(!res.ok){
      console.error("lead submit failed:", json);
    }

    alert(`Thank you for your inquiry! We\'ll be in touch soon. We receieved. Code: ${res.status}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Contact Hero */}
      <section className="pt-32 pb-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-widest mb-6 uppercase text-[#6F6C5D]">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl text-[#000000] mb-6 leading-tight font-serif">
            Let's start a conversation
          </h1>
          <p className="text-xl text-[#6F6C5D] leading-relaxed max-w-3xl">
            Whether you're just starting out or ready for a transformation, we'd love to hear about your project.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-8 bg-[#AC9F8D]/10">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#0A203F] mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-[#AC9F8D] bg-white text-[#000000] focus:border-[#0A203F] focus:outline-none transition-colors"
              />
            </div>


            <div>
              <label htmlFor="phone" className="block text-[#0A203F] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                pattern="[0-9()+\-.\s]{7,20}"
                onChange={handleChange}
                className="w-full px-6 py-4 border border-[#AC9F8D] bg-white text-[#000000] focus:border-[#0A203F] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#0A203F] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-[#AC9F8D] bg-white text-[#000000] focus:border-[#0A203F] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-[#0A203F] mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-6 py-4 border border-[#AC9F8D] bg-white text-[#000000] focus:border-[#0A203F] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block mb-2 text-[#0A203F]">What are you interested in?</label>
              <select
                id="interest"
                name="interest"
                required
                className="w-full px-4 py-3 border border-[#AC9F8D] focus:border-[#0A203F] focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                <option value="brand-identity">Brand Identity & Logo Design ($2,000)</option>
                <option value="web-design">Squarespace Website Design ($6,000)</option>
                <option value="full-brand-suite">The Stahl Foundation™ ($10,000)</option>
                <option value="social-media">Social Media Content Creation ($1,500/month)</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-[#0A203F] mb-2">
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 border border-[#AC9F8D] bg-white text-[#000000] focus:border-[#0A203F] focus:outline-none transition-colors resize-none"
              />
            </div>

            <Button variant="primary">Send Inquiry</Button>
          </form>
        </div>
      </section>
    </>
  );
}