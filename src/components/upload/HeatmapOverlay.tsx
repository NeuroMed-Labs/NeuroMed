import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeatmapOverlayProps {
  imageUrl: string;
  heatmapUrl: string;
}

export function HeatmapOverlay({ imageUrl, heatmapUrl }: HeatmapOverlayProps) {
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [opacity, setOpacity] = useState(60);

  return (
    <div className="space-y-0">
      {/* Image container */}
      <div className="relative aspect-square bg-gray-900 overflow-hidden">
        <img
          src={imageUrl}
          alt="Uploaded MRI scan"
          className="w-full h-full object-cover"
        />
        {showHeatmap && (
          <img
            src={heatmapUrl}
            alt="Grad-CAM heatmap overlay"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              opacity: opacity / 100,
              mixBlendMode: 'screen',
            }}
          />
        )}

        {/* Heatmap label */}
        {showHeatmap && (
          <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-[var(--radius-sm)]">
            Grad-CAM Overlay
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="p-4 space-y-3 border-t border-[var(--color-border)]">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowHeatmap(!showHeatmap)}
            className={cn(
              'inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-sm)] text-sm font-medium transition-colors cursor-pointer border-none',
              showHeatmap
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--color-secondary-tint)] text-[var(--color-text)]',
            )}
            aria-pressed={showHeatmap}
            aria-label={showHeatmap ? 'Hide heatmap overlay' : 'Show heatmap overlay'}
          >
            {showHeatmap ? (
              <EyeOff className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Eye className="h-4 w-4" aria-hidden="true" />
            )}
            {showHeatmap ? 'Hide Heatmap' : 'Show Heatmap'}
          </button>

          <span className="text-xs text-[var(--color-muted)]">
            Explainable AI
          </span>
        </div>

        {showHeatmap && (
          <div className="flex items-center gap-3">
            <label htmlFor="heatmap-opacity" className="text-xs text-[var(--color-muted)] shrink-0">
              Opacity
            </label>
            <input
              id="heatmap-opacity"
              type="range"
              min="10"
              max="100"
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              className="flex-1 h-1.5 bg-[var(--color-border)] rounded-full appearance-none cursor-pointer accent-[var(--color-primary)]"
            />
            <span className="text-xs text-[var(--color-muted)] w-8 text-right">
              {opacity}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
