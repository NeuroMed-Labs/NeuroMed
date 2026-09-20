import {
  type AnalysisResult,
  type ConfidenceScore,
  TumorClass,
} from './types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

/**
 * Generate a pseudo-random heatmap data URL for demo purposes.
 * In production, this would come from the backend's Grad-CAM output.
 */
function generateMockHeatmap(width: number, height: number): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Create a radial gradient simulating Grad-CAM activation
  const centerX = width * (0.3 + Math.random() * 0.4);
  const centerY = height * (0.3 + Math.random() * 0.4);
  const radius = Math.min(width, height) * (0.25 + Math.random() * 0.2);

  const gradient = ctx.createRadialGradient(
    centerX, centerY, 0,
    centerX, centerY, radius,
  );

  gradient.addColorStop(0, 'rgba(255, 0, 0, 0.8)');
  gradient.addColorStop(0.3, 'rgba(255, 80, 0, 0.6)');
  gradient.addColorStop(0.5, 'rgba(255, 165, 0, 0.4)');
  gradient.addColorStop(0.7, 'rgba(255, 255, 0, 0.2)');
  gradient.addColorStop(1, 'rgba(0, 0, 255, 0.0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add a secondary hotspot
  const cx2 = width * (0.2 + Math.random() * 0.6);
  const cy2 = height * (0.2 + Math.random() * 0.6);
  const r2 = radius * 0.5;

  const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, r2);
  g2.addColorStop(0, 'rgba(255, 40, 0, 0.5)');
  g2.addColorStop(0.5, 'rgba(255, 140, 0, 0.25)');
  g2.addColorStop(1, 'rgba(255, 255, 0, 0.0)');

  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, width, height);

  return canvas.toDataURL('image/png');
}

/**
 * Generate mock confidence scores that sum to ~1.0.
 * The predicted class gets the highest score.
 */
function generateMockConfidences(predicted: TumorClass): ConfidenceScore[] {
  const classes = Object.values(TumorClass);
  const raw: Record<string, number> = {};

  // Give the predicted class a high base score
  for (const cls of classes) {
    raw[cls] = cls === predicted
      ? 0.6 + Math.random() * 0.35
      : Math.random() * 0.15;
  }

  // Normalize to sum to 1
  const total = Object.values(raw).reduce((a, b) => a + b, 0);

  return classes.map((cls) => ({
    tumorClass: cls,
    confidence: raw[cls]! / total,
  }));
}

/**
 * Simulated delay helper.
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Analyze an MRI image file.
 *
 * Currently uses a mocked implementation with simulated delays.
 * To connect to a real backend, replace the body of this function with:
 *
 *   const formData = new FormData();
 *   formData.append('image', file);
 *   const response = await fetch(`${API_BASE_URL}/analyze`, { method: 'POST', body: formData });
 *   return response.json();
 */
export async function analyzeImage(
  _file: File,
  onStepChange?: (step: 'preprocessing' | 'running_model' | 'generating_heatmap') => void,
): Promise<AnalysisResult> {
  // Step 1: Preprocessing
  onStepChange?.('preprocessing');
  await delay(800 + Math.random() * 600);

  // Step 2: Running model
  onStepChange?.('running_model');
  await delay(1200 + Math.random() * 800);

  // Step 3: Generating heatmap
  onStepChange?.('generating_heatmap');
  await delay(600 + Math.random() * 400);

  // Pick a random tumor class (weighted toward tumors for demo interest)
  const classes = [
    TumorClass.GLIOMA,
    TumorClass.MENINGIOMA,
    TumorClass.PITUITARY,
    TumorClass.NONE,
  ];
  const weights = [0.3, 0.25, 0.25, 0.2];
  const r = Math.random();
  let cumulative = 0;
  let predicted = TumorClass.GLIOMA;
  for (let i = 0; i < classes.length; i++) {
    cumulative += weights[i]!;
    if (r <= cumulative) {
      predicted = classes[i]!;
      break;
    }
  }

  const confidenceScores = generateMockConfidences(predicted);
  const heatmapDataUrl = generateMockHeatmap(256, 256);

  const startTime = performance.now();

  return {
    id: crypto.randomUUID(),
    predictedClass: predicted,
    confidenceScores,
    heatmapDataUrl,
    timestamp: new Date(),
    processingTimeMs: Math.round(performance.now() - startTime + 2500 + Math.random() * 1000),
  };
}

/**
 * Placeholder for future real API integration.
 * The API_BASE_URL is already configured via environment variable.
 */
export { API_BASE_URL };
