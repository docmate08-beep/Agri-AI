'use client';

import { Layout } from '../components/layout';
import { Card } from '../components/ui';
import { Calendar } from 'lucide-react';

export default function Planning() {
  return (
    <Layout title="Crop Planning" subtitle="Plan your crops">
      <div className="space-y-4">
        <Card icon={<Calendar className="w-8 h-8 text-emerald-600" />}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Crop Planning
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Crop planning features will be available in Phase 2
          </p>
        </Card>
      </div>
    </Layout>
  );
}
