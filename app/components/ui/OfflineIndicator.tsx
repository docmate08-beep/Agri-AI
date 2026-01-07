'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from './Badge';
import { Wifi, WifiOff, RefreshCw } from 'lucide-react';

interface OfflineIndicatorProps {
  className?: string;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ className = '' }) => {
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const isSyncing = false;
  const unsyncedCount = 0;

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && !isSyncing && unsyncedCount === 0) {
    return (
      <div className={`fixed top-4 right-4 z-50 ${className}`}>
        <Badge variant="success" size="sm" icon={<Wifi className="w-3 h-3" />}>
          Online
        </Badge>
      </div>
    );
  }

  if (isSyncing) {
    return (
      <div className={`fixed top-4 right-4 z-50 ${className}`}>
        <Badge variant="warning" size="sm" icon={<RefreshCw className="w-3 h-3 animate-spin" />}>
          Syncing...
        </Badge>
      </div>
    );
  }

  if (!isOnline) {
    return (
      <div className={`fixed top-4 right-4 z-50 ${className}`}>
        <Badge variant="error" size="sm" icon={<WifiOff className="w-3 h-3" />}>
          Offline {unsyncedCount > 0 && `(${unsyncedCount})`}
        </Badge>
      </div>
    );
  }

  return null;
};
