import React from 'react';

interface GradientBgProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientBg: React.FC<GradientBgProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
