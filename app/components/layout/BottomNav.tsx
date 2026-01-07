'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BarChart3, Camera, Calendar, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  name: string;
  name_hi: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    id: 'home',
    name: 'Home',
    name_hi: 'होम',
    href: '/',
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    name_hi: 'डैशबोर्ड',
    href: '/dashboard',
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    id: 'scanner',
    name: 'Scanner',
    name_hi: 'स्कैनर',
    href: '/scanner',
    icon: <Camera className="w-6 h-6" />,
  },
  {
    id: 'planning',
    name: 'Plan',
    name_hi: 'योजना',
    href: '/planning',
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    id: 'assistant',
    name: 'Assistant',
    name_hi: 'सहायक',
    href: '/assistant',
    icon: <MessageCircle className="w-6 h-6" />,
  },
];

export const BottomNav: React.FC = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0
        backdrop-blur-lg
        bg-white/80 dark:bg-slate-900/80
        border-t border-white/20
        pb-safe
        z-40
      "
    >
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                className="
                  relative
                  flex flex-col items-center
                  py-3 px-3
                  min-w-[64px]
                  transition-colors
                  hover:bg-white/50 dark:hover:bg-white/5
                  rounded-lg
                "
              >
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute top-0 left-0 right-0 h-1 bg-emerald-600 rounded-b-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <div
                  className={`
                    transition-colors
                    ${
                      active
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-600 dark:text-slate-400'
                    }
                  `}
                >
                  {item.icon}
                </div>
                <span
                  className={`
                    text-xs mt-1 font-medium
                    ${
                      active
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-600 dark:text-slate-400'
                    }
                  `}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
