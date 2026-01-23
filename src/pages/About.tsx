import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { X } from 'lucide-react';
import heroImage from 'figma:asset/e4dde5a024dd170af63724f2561fb5a0531229cd.png';
import kevinImage from 'figma:asset/d40133888c2d3eca0eeb711573d6061dbb1c3a46.png';
import ceciliaImage from 'figma:asset/f3d0448d221e0452c9ef95cc8eeaf309dfe7a36c.png';
import leslieImage from 'figma:asset/14c6846232948b74c3ba7350f90ef6d60690003b.png';
import studioImage1 from 'figma:asset/76668ec38e7513654f65df0914f40bc66d305eee.png';
import studioImage2 from 'figma:asset/d8dafb88a0172584a97b9afe66f2584f933f7957.png';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export function About() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Kevin Stahl',
      role: 'Co-Founder & Lead Web Developer',
      image: kevinImage,
      bio: `Kevin Stahl is a web developer and technical lead with over four years of experience building reliable, scalable, and performance-driven digital solutions. His work sits at the intersection of clean code, thoughtful architecture, and real-world business needs.

He specializes in modern web development using technologies such as JavaScript, React, Next.js, HTML, CSS, and Node.js, with a strong focus on performance, accessibility, and long-term maintainability. Kevin approaches development with a systems-level mindset, ensuring that websites are not only visually polished but technically sound and built to scale.

In addition to web development, Kevin has experience as a data scientist, where he has designed and implemented business-focused software solutions. His work includes developing custom programs for human resources and payroll automation for the Texas National Guard Headquarters in Austin, Texas, supporting operational efficiency and data-driven decision-making.

Kevin holds a Bachelor's degree in Chemistry from The University of Texas Rio Grande Valley, where he graduated with honors. At The Stahl Marketing, he leads all technical development, building strong digital foundations that support performance, stability, and long-term business growth.`
    },
    {
      name: 'Cecilia Stahl',
      role: 'Co-Founder & Brand Strategist',
      image: ceciliaImage,
      bio: `Cecilia Stahl is a marketing professional with a Bachelor of Business Administration in Marketing, specializing in brand strategy, digital content, and growth-driven storytelling. She helps growing businesses communicate with clarity, credibility, and purpose—turning their brand into a real, long-term asset.

Her passion for marketing began early. At just 12 years old, Cecilia started recording videos for YouTube and teaching herself how to edit. Over the years, this foundation grew into hands-on experience navigating social media platforms, building content systems, and understanding how audiences engage with brands online. While she values creative execution, her true focus lies in strategy: researching markets, analyzing behavior, and making informed, intentional decisions that support business growth.

Her experience spans healthcare and creative industries, where she has worked with over 11 clinics, including multi-location branches, leading social media strategy, digital campaigns, website launches, and cohesive brand systems across the U.S. and Mexico. Alongside this work, Cecilia has collaborated with artists on creative projects, supporting music promotion through brand development, visual direction, and digital storytelling.

As the co-founder of The Stahl Marketing, she focuses on closing the gap between the business her clients have built and how they show up online. Her approach is thoughtful, strategic, and human—combining creativity with research-driven insight to build brands designed to grow, resonate, and last.`
    },
    {
      name: 'Leslie Tenorio',
      role: 'Digital Marketing & Content Strategist',
      image: leslieImage,
      bio: `Leslie Tenorio is a marketing professional with strong foundations in digital marketing, content creation, and strategic planning. She holds a Bachelor of Business Administration in Marketing from The University of Texas Rio Grande Valley and a Digital Marketing Certification from UTRGV's Marketing Department.

Her experience includes managing social media platforms, planning structured content calendars, developing engaging copy, and analyzing performance metrics to guide creative decisions. Leslie has worked on campaigns designed to reflect brand identity, strengthen audience engagement, and support business growth through clear and consistent messaging.

At The Stahl Marketing, Leslie leads content creation and social media strategy, ensuring every brand story is communicated with creativity, clarity, and purpose.`
    }
  ];

  return (
    <>
      {/* Hero Section - Full Width Image */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroImage}
            alt="Modern workspace"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl text-white mb-8 leading-[1.1] font-serif">
            How you show up online matters.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            We help businesses show up clearly, confidently, and with intention.
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            A strategy-led marketing studio building brands and websites that support real growth.
          </p>
          <Link to="/contact">
            <Button variant="primary">Work With Us</Button>
          </Link>
        </div>
      </section>

      {/* Studio Overview Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Image Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src={studioImage1}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src={studioImage2}
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Short About Text */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl text-[#0A203F] leading-relaxed mb-8 font-serif">
              We're a strategy-first marketing studio focused on clarity, consistency, and long-term growth.
            </p>
            <p className="text-lg text-[#6F6C5D] leading-relaxed max-w-3xl mx-auto">
              At The Stahl Marketing, every decision — from brand to website to content — is intentional. We don't chase trends. We build foundations that last.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-8 bg-[#F5F3F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-widest mb-4 uppercase text-[#6F6C5D]">Our Team</p>
            <h2 className="text-5xl md:text-6xl text-[#0A203F] font-serif">
              Meet the people behind the work
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <button
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer text-left transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Portrait */}
                <div className="aspect-[3/4] overflow-hidden mb-6 bg-[#AC9F8D]/20 relative flex-shrink-0">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0A203F]/0 group-hover:bg-[#0A203F]/70 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read Bio
                    </span>
                  </div>
                </div>
                {/* Name & Role */}
                <div className="flex-grow">
                  <h3 className="text-2xl text-[#0A203F] mb-2 font-serif group-hover:text-[#203F4F] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#6F6C5D] text-sm tracking-wide">
                    {member.role}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-[#0A203F] mb-12 leading-tight font-serif">
            Let's build something that lasts.
          </h2>
          <Link to="/contact">
            <Button variant="primary">Start a Conversation</Button>
          </Link>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-8 animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slideUp flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-white border-b border-[#AC9F8D]/20 p-8 flex justify-between items-start flex-shrink-0">
              <div>
                <h3 className="text-4xl text-[#0A203F] mb-2 font-serif">
                  {selectedMember.name}
                </h3>
                <p className="text-[#6F6C5D] text-sm tracking-wide uppercase">
                  {selectedMember.role}
                </p>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-[#6F6C5D] hover:text-[#0A203F] transition-colors p-2"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-8 md:p-12 overflow-y-auto flex-1">
              <div className="grid md:grid-cols-5 gap-8 md:gap-12">
                {/* Portrait - Left Side (Sticky) */}
                <div className="md:col-span-2">
                  <div className="aspect-[3/4] overflow-hidden bg-[#AC9F8D]/20 sticky top-0">
                    <ImageWithFallback
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Bio - Right Side (Scrollable) */}
                <div className="md:col-span-3 space-y-6">
                  {selectedMember.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg text-[#203F4F] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}