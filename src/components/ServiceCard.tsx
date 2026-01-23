interface ServiceCardProps {
  title: string;
  description: string;
  ctaText: string;
}

export function ServiceCard({ title, description, ctaText }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 border border-[#AC9F8D] hover:border-[#203F4F] transition-colors duration-300">
      <h3 className="text-[#0A203F] mb-4">{title}</h3>
      <p className="text-[#6F6C5D] mb-6 leading-relaxed">{description}</p>
      <button className="text-[#0A203F] hover:text-[#203F4F] transition-colors duration-200">
        {ctaText} →
      </button>
    </div>
  );
}
