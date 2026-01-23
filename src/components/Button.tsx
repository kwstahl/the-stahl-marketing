interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ variant = 'primary', children, onClick, className = '' }: ButtonProps) {
  if (variant === 'text') {
    return (
      <button
        onClick={onClick}
        className={`text-[#0A203F] hover:text-[#203F4F] transition-colors duration-200 ${className}`}
      >
        {children}
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        onClick={onClick}
        className={`bg-[#0A203F] text-white px-8 py-4 hover:bg-[#203F4F] transition-colors duration-200 ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`bg-[#7B031E] text-white px-8 py-4 hover:bg-[#5f0217] transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}