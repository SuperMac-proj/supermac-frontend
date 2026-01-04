import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-7 md:p-9
        ${hover ? 'hover:shadow-2xl hover:border-primary-200/50 hover:-translate-y-2 hover:bg-white/90 transition-all duration-500 ease-out' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
