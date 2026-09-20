import { createContext, useContext, type ReactNode } from 'react';

import { useAnalysis } from '@/hooks/useAnalysis';
import type { AnalysisState } from '@/lib/types';

interface AnalysisContextValue {
  state: AnalysisState;
  startAnalysis: (file: File) => Promise<void>;
  reset: () => void;
}

const AnalysisContext = createContext<AnalysisContextValue | null>(null);

export function AnalysisProvider({ children }: { children: ReactNode }) {
  const { state, startAnalysis, reset } = useAnalysis();

  return (
    <AnalysisContext.Provider value={{ state, startAnalysis, reset }}>
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysisContext(): AnalysisContextValue {
  const context = useContext(AnalysisContext);
  if (!context) {
    throw new Error(
      'useAnalysisContext must be used within an AnalysisProvider',
    );
  }
  return context;
}
