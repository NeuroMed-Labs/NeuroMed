import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AnalysisProvider } from '@/contexts/AnalysisContext';
import { UploadZone } from '../UploadZone';

function renderUploadZone() {
  return render(
    <AnalysisProvider>
      <UploadZone />
    </AnalysisProvider>,
  );
}

describe('UploadZone', () => {
  it('renders the upload area with instructions', () => {
    renderUploadZone();
    expect(screen.getByText(/drag & drop your mri scan/i)).toBeInTheDocument();
  });

  it('displays accepted file types', () => {
    renderUploadZone();
    expect(screen.getByText(/\.jpg, \.jpeg, \.png, \.dcm/i)).toBeInTheDocument();
  });

  it('has a keyboard-accessible upload button', () => {
    renderUploadZone();
    const button = screen.getByRole('button', { name: /upload mri scan/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('tabindex', '0');
  });

  it('has a hidden file input', () => {
    renderUploadZone();
    const input = document.querySelector('input[type="file"]');
    expect(input).toBeInTheDocument();
  });

  it('rejects invalid file types', async () => {
    renderUploadZone();

    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const invalidFile = new File(['content'], 'test.pdf', { type: 'application/pdf' });

    fireEvent.change(input, { target: { files: [invalidFile] } });

    expect(await screen.findByText(/invalid file type/i)).toBeInTheDocument();
  });
});
