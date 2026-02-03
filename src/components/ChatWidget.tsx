import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import logo from 'figma:asset/logo.png';

type ConversationStep = 
  | 'welcome' 
  | 'form'
  | 'confirmation' 
  | 'whatsapp';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
}

interface FormData {
  name: string;
  phone: string;
  service: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<ConversationStep>('welcome');
  const [messages, setMessages] = useState<Message[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: ''
  });

  const addBotMessage = (content: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      type: 'bot',
      content
    }]);
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hey! 👋\nWelcome to The Stahl Marketing.\nWeb design & marketing that actually does something.");
        setTimeout(() => {
          addBotMessage("Share your name and phone number and we'll text you after reviewing your info.");
          setTimeout(() => {
            setCurrentStep('form');
          }, 800);
        }, 1200);
      }, 400);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.service) return;
    
    console.log('Form submitted:', formData);

    const res = await fetch("api/chat",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    });

    const json = await res.json().catch(()=>null);

    console.log("json:", json);

    // Clear previous messages and show only thank you message
    setMessages([]);
    setTimeout(() => {
      setMessages([{
        id: Date.now().toString(),
        type: 'bot',
        content: 'Thank you! ✨\nWe\'ll be in touch soon.'
      }]);
      setCurrentStep('whatsapp');
    }, 300);
  };

  const renderContent = () => {
    if (currentStep === 'form') {
      return (
        <div className="p-4 border-t border-[#1a1a2e]/10">
          <form onSubmit={handleFormSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-xs text-[#1a1a2e]/70 mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="John Smith"
                className="w-full px-3 py-2 text-sm border border-[#1a1a2e]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B031E]/20"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs text-[#1a1a2e]/70 mb-1.5">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="(555) 123-4567"
                className="w-full px-3 py-2 text-sm border border-[#1a1a2e]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B031E]/20"
                required
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-xs text-[#1a1a2e]/70 mb-1.5">
                I'm interested in
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                className="w-full px-3 py-2 text-sm border border-[#1a1a2e]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B031E]/20"
                required
              >
                <option value="">Select a service</option>
                <option value="web-design">Web Design</option>
                <option value="social-media">Social Media</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={!formData.name.trim() || !formData.phone.trim() || !formData.service}
              className="w-full px-4 py-2.5 bg-[#7B031E] text-white text-sm rounded-md hover:bg-[#7B031E]/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </form>
        </div>
      );
    }

    if (currentStep === 'whatsapp') {
      return (
        <div className="p-4 space-y-3">
          <p className="text-sm text-[#1a1a2e]">
            Need to talk sooner?<br />
            Message us directly on WhatsApp 👇
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-2.5 text-sm text-center bg-[#25D366] text-white rounded-md hover:bg-[#25D366]/90 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#7B031E] text-white rounded-full shadow-lg hover:bg-[#7B031E]/90 transition-all hover:scale-105 flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-[#1a1a2e]/10">
          {/* Header */}
          <div className="bg-[#1a1a2e] text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="The Stahl Marketing" 
                className="h-12 w-auto"
              />
              <p className="text-xs text-white/70">We typically reply in a few hours</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[180px] bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className="flex justify-start"
              >
                <div className="max-w-[80%] px-4 py-2.5 rounded-lg text-sm whitespace-pre-line bg-white text-[#1a1a2e] border border-[#1a1a2e]/10">
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {/* Form or WhatsApp */}
          {renderContent()}
        </div>
      )}
    </>
  );
}