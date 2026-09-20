import { useCallback, useReducer } from 'react';

import { analyzeImage } from '@/lib/api';
import type { AnalysisAction, AnalysisResult, AnalysisState } from '@/lib/types';

function analysisReducer(
  state: AnalysisState,
  action: AnalysisAction,
): AnalysisState {
  switch (action.type) {
    case 'START_UPLOAD':
      return { status: 'uploading', file: action.file, progress: 0 };

    case 'UPDATE_PROGRESS':
      if (state.status !== 'uploading') return state;
      return { ...state, progress: action.progress };

    case 'START_PROCESSING':
      if (state.status !== 'uploading') return state;
      return {
        status: 'processing',
        file: state.file,
        step: action.step,
      };

    case 'UPDATE_PROCESSING_STEP':
      if (state.status !== 'processing') return state;
      return { ...state, step: action.step };

    case 'ANALYSIS_SUCCESS':
      if (state.status !== 'processing') return state;
      return {
        status: 'success',
        file: state.file,
        result: action.result,
      };

    case 'ANALYSIS_ERROR':
      return {
        status: 'error',
        file: state.status === 'idle' ? null : state.file,
        error: action.error,
      };

    case 'RESET':
      return { status: 'idle' };

    default:
      return state;
  }
}

const initialState: AnalysisState = { status: 'idle' };

interface UseAnalysisReturn {
  state: AnalysisState;
  startAnalysis: (file: File) => Promise<void>;
  reset: () => void;
}

export function useAnalysis(): UseAnalysisReturn {
  const [state, dispatch] = useReducer(analysisReducer, initialState);

  const startAnalysis = useCallback(async (file: File) => {
    try {
      // Step 1: Upload
      dispatch({ type: 'START_UPLOAD', file });

      // Simulate upload progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise((resolve) => setTimeout(resolve, 50));
        dispatch({ type: 'UPDATE_PROGRESS', progress });
      }

      // Step 2: Processing
      dispatch({ type: 'START_PROCESSING', step: 'preprocessing' });

      const result: AnalysisResult = await analyzeImage(file, (step) => {
        dispatch({ type: 'UPDATE_PROCESSING_STEP', step });
      });

      // Step 3: Success
      dispatch({ type: 'ANALYSIS_SUCCESS', result });
    } catch (err) {
      dispatch({
        type: 'ANALYSIS_ERROR',
        error: err instanceof Error ? err.message : 'An unexpected error occurred during analysis.',
      });
    }
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  return { state, startAnalysis, reset };
}
