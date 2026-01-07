import { Crop } from './types';

export const CROPS: Record<string, Crop> = {
  wheat: {
    id: 'wheat',
    name: 'Wheat',
    name_hi: 'गेहूं',
    diseases: [
      {
        id: 'wheat_rust',
        pathogen: 'Puccinia spp. (fungus)',
        symptoms: 'Orange-brown pustules on leaves and stems; reduced grain quality',
        treatment: 'Apply fungicides (Propiconazole, Tebuconazole); use resistant varieties',
        organic: 'Neem oil spray, crop rotation, remove infected plants',
        severity: 'high',
      },
      {
        id: 'wheat_smut',
        pathogen: 'Tilletia spp. (fungus)',
        symptoms: 'Black powdery spores in grain heads; foul fishy odor',
        treatment: 'Seed treatment with Carboxin or Thiram fungicides',
        organic: 'Hot water seed treatment (49°C for 10 min), use disease-free seeds',
        severity: 'medium',
      },
      {
        id: 'wheat_blight',
        pathogen: 'Fusarium graminearum (fungus)',
        symptoms: 'Bleached spikelets; pink/orange fungal growth; shriveled grains',
        treatment: 'Fungicide sprays during flowering; crop rotation',
        organic: 'Crop rotation, proper drainage, resistant varieties',
        severity: 'high',
      },
    ],
  },
  rice: {
    id: 'rice',
    name: 'Rice',
    name_hi: 'चावल',
    diseases: [
      {
        id: 'rice_blast',
        pathogen: 'Magnaporthe oryzae (fungus)',
        symptoms: 'Diamond-shaped lesions on leaves; neck rot; panicle breakage',
        treatment: 'Tricyclazole or Azoxystrobin fungicides; balanced fertilization',
        organic: 'Silicon application, resistant varieties, proper water management',
        severity: 'high',
      },
      {
        id: 'rice_bacterial_blight',
        pathogen: 'Xanthomonas oryzae (bacteria)',
        symptoms: 'Yellow to white leaf lesions; wilting; kresek (seedling blight)',
        treatment: 'Copper-based bactericides; use resistant varieties',
        organic: 'Biocontrol agents (Pseudomonas), crop rotation, avoid excess nitrogen',
        severity: 'high',
      },
      {
        id: 'rice_sheath_blight',
        pathogen: 'Rhizoctonia solani (fungus)',
        symptoms: 'Oval lesions on leaf sheaths; greenish-gray borders; lodging',
        treatment: 'Validamycin or Hexaconazole; proper plant spacing',
        organic: 'Trichoderma application, balanced fertilization, avoid dense planting',
        severity: 'medium',
      },
    ],
  },
  tomato: {
    id: 'tomato',
    name: 'Tomato',
    name_hi: 'टमाटर',
    diseases: [
      {
        id: 'tomato_late_blight',
        pathogen: 'Phytophthora infestans (oomycete)',
        symptoms: 'Dark water-soaked lesions on leaves/fruits; white mold; rapid wilting',
        treatment: 'Mancozeb or Chlorothalonil fungicides; destroy infected plants',
        organic: 'Copper sprays, proper spacing, drip irrigation, resistant varieties',
        severity: 'high',
      },
      {
        id: 'tomato_early_blight',
        pathogen: 'Alternaria solani (fungus)',
        symptoms: 'Concentric ring spots on older leaves; defoliation; fruit rot',
        treatment: 'Chlorothalonil or Mancozeb; remove infected leaves',
        organic: 'Neem oil, crop rotation, mulching, avoid overhead watering',
        severity: 'medium',
      },
      {
        id: 'tomato_leaf_curl',
        pathogen: 'Tomato Leaf Curl Virus (virus)',
        symptoms: 'Upward curling leaves; yellowing; stunted growth; reduced fruiting',
        treatment: 'No cure; control whitefly vectors with imidacloprid',
        organic: 'Yellow sticky traps, neem oil, remove infected plants, resistant varieties',
        severity: 'high',
      },
      {
        id: 'tomato_septoria_spot',
        pathogen: 'Septoria lycopersici (fungus)',
        symptoms: 'Small circular spots with gray centers on leaves; defoliation',
        treatment: 'Chlorothalonil or Copper fungicides; remove lower leaves',
        organic: 'Crop rotation, mulching, proper spacing, avoid wetting foliage',
        severity: 'medium',
      },
    ],
  },
  corn: {
    id: 'corn',
    name: 'Corn',
    name_hi: 'मक्का',
    diseases: [
      {
        id: 'corn_smut',
        pathogen: 'Ustilago maydis (fungus)',
        symptoms: 'Large galls/tumors on ears, tassels, and stalks; gray-black spores',
        treatment: 'No chemical cure; remove and destroy galls before spores spread',
        organic: 'Crop rotation, resistant hybrids, remove galls early, avoid plant injury',
        severity: 'medium',
      },
      {
        id: 'corn_leaf_blight',
        pathogen: 'Exserohilum turcicum (fungus)',
        symptoms: 'Long cigar-shaped gray-green lesions on leaves; premature drying',
        treatment: 'Fungicides (Propiconazole, Azoxystrobin); use resistant hybrids',
        organic: 'Crop rotation, remove crop debris, resistant varieties',
        severity: 'high',
      },
      {
        id: 'corn_stalk_rot',
        pathogen: 'Fusarium, Diplodia spp. (fungi)',
        symptoms: 'Stalk lodging; internal rot; pith disintegration; premature death',
        treatment: 'No effective treatment; use resistant hybrids; balanced fertilization',
        organic: 'Crop rotation, proper plant density, avoid stress, timely harvest',
        severity: 'high',
      },
    ],
  },
};

export const getCropById = (cropId: string): Crop | undefined => {
  return CROPS[cropId];
};

export const getDiseaseById = (cropId: string, diseaseId: string) => {
  const crop = CROPS[cropId];
  if (!crop) return undefined;
  return crop.diseases.find((d) => d.id === diseaseId);
};

export const getAllCrops = (): Crop[] => {
  return Object.values(CROPS);
};
