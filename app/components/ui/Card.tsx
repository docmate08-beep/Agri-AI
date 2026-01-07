import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  gradient = false,
  icon,
  onClick,
}) => {
  const baseClasses = `
    backdrop-blur-md
    rounded-xl
    shadow-lg
    p-6
    border
    transition-all
    duration-300
    hover:shadow-xl
  `;

  const glassClasses = gradient
    ? 'bg-gradient-to-br from-emerald-600 to-teal-600 border-white/30 text-white'
    : 'bg-white/20 dark:bg-white/10 border-white/30 dark:border-white/20';

  const interactiveClasses = onClick ? 'cursor-pointer hover:scale-[1.02]' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${baseClasses} ${glassClasses} ${interactiveClasses} ${className}`}
      onClick={onClick}
    >
      {icon && <div className="mb-4">{icon}</div>}
      {children}
    </motion.div>
  );
};
