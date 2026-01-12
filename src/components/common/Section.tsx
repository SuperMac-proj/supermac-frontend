import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

export default function Section({
  id,
  className = '',
  containerClassName = '',
  children,
}: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-24 w-full ${className}`}>
      <div className={`container mx-auto px-4 sm:px-6 md:px-6 lg:px-8 max-w-[1440px] ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
