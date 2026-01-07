'use client';

import { Layout } from './components/layout';
import { Card } from './components/ui';
import { Sprout } from 'lucide-react';
import { CROP_TYPES } from './utils/constants';

export default function Home() {
  return (
    <Layout title="Agri-Fusion OS" subtitle="Select your crop to begin">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.values(CROP_TYPES).map((crop) => (
          <Card
            key={crop.id}
            className="cursor-pointer"
            icon={<Sprout className="w-8 h-8 text-emerald-600" />}
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {crop.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {crop.name_hi}
            </p>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
