import React from 'react';

type BadgeVariant = 'success' | 'warning' | 'error' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'info',
  size = 'md',
  icon,
  className = '',
}) => {
  const variantClasses: Record<BadgeVariant, string> = {
    success: 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-400',
    warning: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/30 dark:text-amber-400',
    error: 'bg-red-100 text-red-800 border-red-300 dark:bg-red-900/30 dark:text-red-400',
    info: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-400',
  };

  const sizeClasses: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1
        rounded-full
        border
        font-medium
        transition-all
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
