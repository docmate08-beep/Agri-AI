export interface Crop {
  id: string;
  name: string;
  name_hi: string;
  diseases: Disease[];
}

export interface Disease {
  id: string;
  pathogen: string;
  symptoms: string;
  treatment: string;
  organic: string;
  severity: 'low' | 'medium' | 'high';
}

export interface Field {
  id: string;
  name: string;
  area: number;
  soil_type: string;
  NPK: { N: number; P: number; K: number };
  ph_level: number;
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  precipitation: number;
  forecast: string;
}

export interface ScanResult {
  id: string;
  crop_id: string;
  disease_id: string;
  confidence: number;
  timestamp: Date;
  image_url?: string;
}

export type Language = 'en' | 'hi';

export type TabName = 'home' | 'dashboard' | 'scanner' | 'planning' | 'assistant';

export interface OfflineStatus {
  isOnline: boolean;
  isSyncing: boolean;
  unsyncedCount: number;
}
