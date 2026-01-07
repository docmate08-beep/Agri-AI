export const CROP_TYPES = {
  wheat: { id: 'wheat', name: 'Wheat', name_hi: 'गेहूं' },
  rice: { id: 'rice', name: 'Rice', name_hi: 'चावल' },
  tomato: { id: 'tomato', name: 'Tomato', name_hi: 'टमाटर' },
  corn: { id: 'corn', name: 'Corn', name_hi: 'मक्का' },
} as const;

export const LANGUAGES = {
  en: { code: 'en', name: 'English', name_local: 'English' },
  hi: { code: 'hi', name: 'Hindi', name_local: 'हिन्दी' },
} as const;

export const TAB_NAVIGATION = [
  { id: 'home', name: 'Home', name_hi: 'होम', icon: 'Home' },
  { id: 'dashboard', name: 'Dashboard', name_hi: 'डैशबोर्ड', icon: 'ChartBar' },
  { id: 'scanner', name: 'Scanner', name_hi: 'स्कैनर', icon: 'Camera' },
  { id: 'planning', name: 'Plan', name_hi: 'योजना', icon: 'Calendar' },
  { id: 'assistant', name: 'Assistant', name_hi: 'सहायक', icon: 'MessageCircle' },
] as const;

export const COLORS = {
  primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  secondary: {
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
  },
  accent: {
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
  },
  success: {
    500: '#22c55e',
    600: '#16a34a',
  },
  error: {
    500: '#ef4444',
    600: '#dc2626',
  },
} as const;

export const SEVERITY_LEVELS = {
  low: { color: 'text-green-600', bg: 'bg-green-100', label: 'Low', label_hi: 'कम' },
  medium: { color: 'text-amber-600', bg: 'bg-amber-100', label: 'Medium', label_hi: 'मध्यम' },
  high: { color: 'text-red-600', bg: 'bg-red-100', label: 'High', label_hi: 'उच्च' },
} as const;

export const DISEASE_SEVERITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
} as const;
