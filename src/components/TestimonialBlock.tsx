interface TestimonialBlockProps {
  quote: string;
  name: string;
  title: string;
}

export function TestimonialBlock({ quote, name, title }: TestimonialBlockProps) {
  return (
    <div className="bg-white p-8 border-t border-[#AC9F8D]">
      <p className="text-[#203F4F] mb-6 leading-relaxed italic text-lg">"{quote}"</p>
      <div>
        <p className="text-[#000000]">{name}</p>
        <p className="text-[#6F6C5D] text-sm">{title}</p>
      </div>
    </div>
  );
}
