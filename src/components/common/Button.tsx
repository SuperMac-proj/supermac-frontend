import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white hover:from-primary-600 hover:via-accent-600 hover:to-accent-700 focus:ring-primary-500 shadow-lg hover:shadow-2xl',
    secondary: 'bg-white/80 backdrop-blur-sm text-gray-900 hover:bg-white focus:ring-gray-400 border border-gray-300 shadow-md hover:shadow-xl',
  };

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4.5 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} touch-manipulation`}
      {...props}
    >
      {children}
    </button>
  );
}
