'use client';

import { Layout } from '../components/layout';
import { Card, Button } from '../components/ui';
import { Camera } from 'lucide-react';

export default function Scanner() {
  return (
    <Layout title="Scanner" subtitle="Take a crop photo">
      <div className="space-y-4">
        <Card icon={<Camera className="w-8 h-8 text-emerald-600" />}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Disease Scanner
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Scan your crops for disease detection
          </p>
          <Button variant="primary">
            <Camera className="w-5 h-5" />
            Take Photo
          </Button>
        </Card>
      </div>
    </Layout>
  );
}
