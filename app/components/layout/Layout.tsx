import React from 'react';
import { GradientBg } from '../ui/GradientBg';
import { Header } from './Header';
import { BottomNav } from './BottomNav';
import { OfflineIndicator } from '../ui/OfflineIndicator';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  subtitle,
  showBack,
  onBack,
  className = '',
}) => {
  return (
    <GradientBg>
      <div className="min-h-screen flex flex-col">
        <Header title={title} subtitle={subtitle} showBack={showBack} onBack={onBack} />
        <main className={`flex-1 px-4 py-6 pb-24 max-w-7xl mx-auto w-full ${className}`}>
          {children}
        </main>
        <BottomNav />
        <OfflineIndicator />
      </div>
    </GradientBg>
  );
};
