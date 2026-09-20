import { Upload, FileImage, AlertCircle } from 'lucide-react';
import { useFileUpload } from '@/hooks/useFileUpload';
import { useAnalysisContext } from '@/contexts/AnalysisContext';
import { Button } from '@/components/ui/Button';
import { ACCEPTED_EXTENSIONS, MAX_FILE_SIZE_MB } from '@/lib/types';
import { cn, formatFileSize } from '@/lib/utils';

export function UploadZone() {
  const {
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
  } = useFileUpload();

  const { startAnalysis } = useAnalysisContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  };

  const handleAnalyze = () => {
    if (uploadedFile?.file) {
      startAnalysis(uploadedFile.file);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openFileDialog();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!uploadedFile ? (
        /* Drop zone */
        <div
          className={cn(
            'relative border-2 border-dashed rounded-[var(--radius-lg)] p-10 text-center cursor-pointer transition-all duration-200',
            isDragging
              ? 'border-[var(--color-primary)] bg-[var(--color-primary-tint)] scale-[1.02]'
              : 'border-[var(--color-border)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-tint)]/50',
            error && 'border-[var(--color-error)]',
          )}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={openFileDialog}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Upload MRI scan. Click or drag and drop a file."
        >
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPTED_EXTENSIONS.join(',')}
            onChange={handleInputChange}
            className="sr-only"
            aria-hidden="true"
            tabIndex={-1}
          />

          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-[var(--color-primary-tint)] flex items-center justify-center">
              <Upload
                className={cn(
                  'h-7 w-7 transition-colors',
                  isDragging ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted)]',
                )}
                aria-hidden="true"
              />
            </div>

            <div>
              <p className="text-base font-medium text-[var(--color-text)] m-0 mb-1">
                {isDragging ? 'Drop your MRI scan here' : 'Drag & drop your MRI scan'}
              </p>
              <p className="text-sm text-[var(--color-muted)] m-0">
                or <span className="text-[var(--color-primary)] font-medium">browse files</span>
              </p>
            </div>

            <p className="text-xs text-[var(--color-muted)] m-0">
              Accepted: {ACCEPTED_EXTENSIONS.join(', ')} &middot; Max {MAX_FILE_SIZE_MB}MB
            </p>
          </div>
        </div>
      ) : (
        /* File preview */
        <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 bg-[var(--color-surface)]">
          <div className="flex items-start gap-4">
            {/* Thumbnail */}
            <div className="w-20 h-20 rounded-[var(--radius-md)] bg-gray-900 overflow-hidden flex-shrink-0">
              <img
                src={uploadedFile.preview}
                alt="MRI scan preview"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[var(--color-text)] m-0 truncate">
                    <FileImage className="h-4 w-4 inline mr-1.5 text-[var(--color-muted)]" aria-hidden="true" />
                    {uploadedFile.file.name}
                  </p>
                  <p className="text-xs text-[var(--color-muted)] m-0 mt-1">
                    {formatFileSize(uploadedFile.file.size)}
                  </p>
                </div>
                <button
                  onClick={clearFile}
                  className="text-xs text-[var(--color-muted)] hover:text-[var(--color-error)] transition-colors cursor-pointer bg-transparent border-none p-1"
                  aria-label="Remove file"
                >
                  Remove
                </button>
              </div>

              <div className="mt-4">
                <Button variant="primary" onClick={handleAnalyze} className="w-full sm:w-auto">
                  Analyze MRI
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error display */}
      {error && (
        <div className="flex items-center gap-2 mt-3 text-[var(--color-error)]" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <p className="text-sm m-0">{error}</p>
        </div>
      )}
    </div>
  );
}
