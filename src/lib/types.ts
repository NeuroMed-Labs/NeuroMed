/* ========== Tumor Class Types ========== */
export enum TumorClass {
  GLIOMA = 'glioma',
  MENINGIOMA = 'meningioma',
  PITUITARY = 'pituitary',
  NONE = 'no_tumor',
}

export const TUMOR_CLASS_LABELS: Record<TumorClass, string> = {
  [TumorClass.GLIOMA]: 'Glioma',
  [TumorClass.MENINGIOMA]: 'Meningioma',
  [TumorClass.PITUITARY]: 'Pituitary Tumor',
  [TumorClass.NONE]: 'No Tumor Detected',
};

export const TUMOR_CLASS_COLORS: Record<TumorClass, string> = {
  [TumorClass.GLIOMA]: '#DC2626',
  [TumorClass.MENINGIOMA]: '#F59E0B',
  [TumorClass.PITUITARY]: '#8B5CF6',
  [TumorClass.NONE]: '#16A34A',
};

/* ========== Analysis Result ========== */
export interface ConfidenceScore {
  tumorClass: TumorClass;
  confidence: number; // 0-1
}

export interface AnalysisResult {
  id: string;
  predictedClass: TumorClass;
  confidenceScores: ConfidenceScore[];
  heatmapDataUrl: string;
  timestamp: Date;
  processingTimeMs: number;
}

/* ========== Analysis State Machine ========== */
export type AnalysisState =
  | { status: 'idle' }
  | { status: 'uploading'; file: File; progress: number }
  | { status: 'processing'; file: File; step: ProcessingStep }
  | { status: 'success'; file: File; result: AnalysisResult }
  | { status: 'error'; file: File | null; error: string };

export type ProcessingStep =
  | 'preprocessing'
  | 'running_model'
  | 'generating_heatmap';

export const PROCESSING_STEP_LABELS: Record<ProcessingStep, string> = {
  preprocessing: 'Preprocessing MRI scan...',
  running_model: 'Running neural network analysis...',
  generating_heatmap: 'Generating Grad-CAM heatmap...',
};

/* ========== Analysis Actions ========== */
export type AnalysisAction =
  | { type: 'START_UPLOAD'; file: File }
  | { type: 'UPDATE_PROGRESS'; progress: number }
  | { type: 'START_PROCESSING'; step: ProcessingStep }
  | { type: 'UPDATE_PROCESSING_STEP'; step: ProcessingStep }
  | { type: 'ANALYSIS_SUCCESS'; result: AnalysisResult }
  | { type: 'ANALYSIS_ERROR'; error: string }
  | { type: 'RESET' };

/* ========== Uploaded File ========== */
export interface UploadedFile {
  file: File;
  preview: string;
  isValid: boolean;
  error?: string;
}

/* ========== Accepted file types & limits ========== */
export const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'application/dicom',
  '.dcm',
] as const;

export const ACCEPTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.dcm'] as const;

export const MAX_FILE_SIZE_MB = 50;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
