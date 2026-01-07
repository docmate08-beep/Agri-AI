import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  onBack,
  className = '',
}) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        backdrop-blur-md
        bg-white/30 dark:bg-slate-900/30
        border-b border-white/20
        px-4 py-4
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {showBack && (
          <button
            onClick={onBack}
            className="
              p-2 rounded-lg
              hover:bg-white/50 dark:hover:bg-white/10
              transition-colors
            "
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          </button>
        )}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.header>
  );
};
