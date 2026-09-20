import {
  ACCEPTED_EXTENSIONS,
  MAX_FILE_SIZE_BYTES,
  MAX_FILE_SIZE_MB,
  type TumorClass,
  TUMOR_CLASS_COLORS,
} from './types';

/**
 * Merge class names conditionally (simple cn utility).
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Validate an uploaded file's type and size.
 */
export function validateFile(file: File): { valid: boolean; error?: string } {
  const extension = '.' + file.name.split('.').pop()?.toLowerCase();

  const isValidType = ACCEPTED_EXTENSIONS.some(
    (ext) => ext === extension,
  );

  if (!isValidType) {
    return {
      valid: false,
      error: `Invalid file type "${extension}". Accepted: ${ACCEPTED_EXTENSIONS.join(', ')}`,
    };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      valid: false,
      error: `File too large (${formatFileSize(file.size)}). Maximum: ${MAX_FILE_SIZE_MB}MB`,
    };
  }

  return { valid: true };
}

/**
 * Format bytes to human-readable file size.
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

/**
 * Format confidence as a percentage string.
 */
export function formatConfidence(confidence: number): string {
  return `${(confidence * 100).toFixed(1)}%`;
}

/**
 * Get the color associated with a tumor class.
 */
export function getTumorColor(tumorClass: TumorClass): string {
  return TUMOR_CLASS_COLORS[tumorClass];
}

/**
 * Generate a unique ID.
 */
export function generateId(): string {
  return crypto.randomUUID();
}

/**
 * Format a Date to a readable string.
 */
export function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);
}

/**
 * Create a file preview URL from a File object.
 */
export function createFilePreview(file: File): string {
  return URL.createObjectURL(file);
}

/**
 * Revoke a file preview URL to free memory.
 */
export function revokeFilePreview(url: string): void {
  URL.revokeObjectURL(url);
}
