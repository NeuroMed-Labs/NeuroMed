import { Clock, RotateCcw } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { HeatmapOverlay } from './HeatmapOverlay';
import { ReportButton } from './ReportButton';
import type { AnalysisResult } from '@/lib/types';
import { TUMOR_CLASS_LABELS, TUMOR_CLASS_COLORS } from '@/lib/types';
import { formatConfidence, formatTimestamp } from '@/lib/utils';
import { useAnalysisContext } from '@/contexts/AnalysisContext';

interface ResultsPanelProps {
  result: AnalysisResult;
  imageUrl: string;
}

export function ResultsPanel({ result, imageUrl }: ResultsPanelProps) {
  const { reset } = useAnalysisContext();

  const sortedScores = [...result.confidenceScores].sort(
    (a, b) => b.confidence - a.confidence,
  );

  const primaryScore = sortedScores[0]!;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6" id="results-panel">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display mb-1">Analysis Results</h2>
          <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
            <Clock className="h-4 w-4" aria-hidden="true" />
            <span>{formatTimestamp(result.timestamp)}</span>
            <span>&middot;</span>
            <span>{result.processingTimeMs}ms</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ReportButton result={result} />
          <Button variant="outline" size="sm" onClick={reset}>
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            New Scan
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Image + Heatmap */}
        <Card padded={false} className="overflow-hidden">
          <HeatmapOverlay
            imageUrl={imageUrl}
            heatmapUrl={result.heatmapDataUrl}
          />
        </Card>

        {/* Right: Classification Details */}
        <div className="space-y-4">
          {/* Primary result */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg">Classification</h3>
              <Badge tumorClass={result.predictedClass} />
            </div>
            <div className="text-center py-4">
              <div className="text-4xl font-display font-bold text-[var(--color-text)] mb-1">
                {formatConfidence(primaryScore.confidence)}
              </div>
              <p className="text-sm text-[var(--color-muted)] m-0">
                Confidence for {TUMOR_CLASS_LABELS[result.predictedClass]}
              </p>
            </div>
          </Card>

          {/* All scores */}
          <Card>
            <h3 className="text-base mb-4">Probability Distribution</h3>
            <div className="space-y-3">
              {sortedScores.map((score) => (
                <ProgressBar
                  key={score.tumorClass}
                  value={score.confidence * 100}
                  label={TUMOR_CLASS_LABELS[score.tumorClass]}
                  color={TUMOR_CLASS_COLORS[score.tumorClass]}
                  size="sm"
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
