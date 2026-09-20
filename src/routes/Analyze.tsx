import { PageContainer } from '@/components/layout/PageContainer';
import { AnalysisProvider, useAnalysisContext } from '@/contexts/AnalysisContext';
import { UploadZone } from '@/components/upload/UploadZone';
import { ProcessingState } from '@/components/upload/ProcessingState';
import { ResultsPanel } from '@/components/upload/ResultsPanel';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { AlertCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import toast from 'react-hot-toast';
import { useEffect, useRef } from 'react';

function AnalyzeContent() {
  const { state, reset } = useAnalysisContext();
  const toastShown = useRef(false);

  // Show toast on success/error
  useEffect(() => {
    if (state.status === 'success' && !toastShown.current) {
      toast.success('Analysis complete!');
      toastShown.current = true;
    } else if (state.status === 'error' && !toastShown.current) {
      toast.error(state.error);
      toastShown.current = true;
    } else if (state.status === 'idle' || state.status === 'uploading') {
      toastShown.current = false;
    }
  }, [state]);

  return (
    <section className="section-padding">
      <div className="container-main">
        {/* Page header */}
        {state.status !== 'success' && (
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="mb-4">
              Analyze <span className="gradient-text">MRI Scan</span>
            </h1>
            <p className="text-lg">
              Upload a brain MRI scan to receive AI-powered classification with
              confidence scores and Grad-CAM explainability.
            </p>
          </div>
        )}

        {/* State-based rendering */}
        {state.status === 'idle' && <UploadZone />}

        {state.status === 'uploading' && (
          <div className="max-w-md mx-auto space-y-4 text-center">
            <UploadZone />
            <ProgressBar
              value={state.progress}
              label="Uploading"
              showPercentage
              size="md"
            />
          </div>
        )}

        {state.status === 'processing' && (
          <ProcessingState step={state.step} />
        )}

        {state.status === 'success' && (
          <ResultsPanel
            result={state.result}
            imageUrl={URL.createObjectURL(state.file)}
          />
        )}

        {state.status === 'error' && (
          <div className="max-w-md mx-auto text-center space-y-6 py-8">
            <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-[var(--color-error)]" />
            </div>
            <div>
              <h3 className="text-lg mb-2">Analysis Failed</h3>
              <p className="text-sm text-[var(--color-muted)]">{state.error}</p>
            </div>
            <Button variant="primary" onClick={reset}>
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Try Again
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Analyze() {
  return (
    <AnalysisProvider>
      <PageContainer>
        <title>Analyze MRI — Neuromed</title>
        <meta
          name="description"
          content="Upload a brain MRI scan and receive instant AI classification with confidence scores and Grad-CAM heatmap explainability."
        />
        <AnalyzeContent />
      </PageContainer>
    </AnalysisProvider>
  );
}
