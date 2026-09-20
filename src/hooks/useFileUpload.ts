import { useCallback, useRef, useState } from 'react';

import {
  type UploadedFile,
} from '@/lib/types';
import { createFilePreview, revokeFilePreview, validateFile } from '@/lib/utils';

interface UseFileUploadReturn {
  uploadedFile: UploadedFile | null;
  isDragging: boolean;
  error: string | null;
  handleFileSelect: (file: File) => void;
  handleDragEnter: (e: React.DragEvent) => void;
  handleDragLeave: (e: React.DragEvent) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent) => void;
  clearFile: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  openFileDialog: () => void;
}

export function useFileUpload(): UseFileUploadReturn {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dragCounter = useRef(0);

  const handleFileSelect = useCallback((file: File) => {
    setError(null);
    const validation = validateFile(file);

    if (!validation.valid) {
      setError(validation.error ?? 'Invalid file');
      setUploadedFile(null);
      return;
    }

    // Revoke previous preview if any
    if (uploadedFile?.preview) {
      revokeFilePreview(uploadedFile.preview);
    }

    const preview = createFilePreview(file);
    setUploadedFile({ file, preview, isValid: true });
  }, [uploadedFile?.preview]);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current += 1;
    if (e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      dragCounter.current = 0;

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFileSelect(files[0]!);
      }
    },
    [handleFileSelect],
  );

  const clearFile = useCallback(() => {
    if (uploadedFile?.preview) {
      revokeFilePreview(uploadedFile.preview);
    }
    setUploadedFile(null);
    setError(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [uploadedFile?.preview]);

  const openFileDialog = useCallback(() => {
    inputRef.current?.click();
  }, []);

  return {
    uploadedFile,
    isDragging,
    error,
    handleFileSelect,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    clearFile,
    inputRef,
    openFileDialog,
  };
}
