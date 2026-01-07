'use client';

import { Layout } from '../components/layout';
import { Card } from '../components/ui';
import { BarChart3 } from 'lucide-react';

export default function Dashboard() {
  return (
    <Layout title="Dashboard" subtitle="Farm Overview">
      <div className="space-y-4">
        <Card icon={<BarChart3 className="w-8 h-8 text-emerald-600" />}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Farm Overview
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Dashboard content will be available in Phase 2
          </p>
        </Card>
      </div>
    </Layout>
  );
}
