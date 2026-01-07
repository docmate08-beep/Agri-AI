'use client';

import { Layout } from '../components/layout';
import { Card } from '../components/ui';
import { MessageCircle } from 'lucide-react';

export default function Assistant() {
  return (
    <Layout title="AI Assistant" subtitle="Chat with your AI advisor">
      <div className="space-y-4">
        <Card icon={<MessageCircle className="w-8 h-8 text-emerald-600" />}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            AI Assistant
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            AI assistant features will be available in Phase 2
          </p>
        </Card>
      </div>
    </Layout>
  );
}
