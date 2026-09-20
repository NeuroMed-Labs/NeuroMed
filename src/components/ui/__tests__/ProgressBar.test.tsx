import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from '../ProgressBar';

describe('ProgressBar', () => {
  it('renders with correct aria attributes', () => {
    render(<ProgressBar value={75} label="Confidence" animated={false} />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveAttribute('aria-valuenow', '75');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
  });

  it('displays percentage text', () => {
    render(<ProgressBar value={42.5} showPercentage animated={false} />);

    expect(screen.getByText('42.5%')).toBeInTheDocument();
  });

  it('displays label text', () => {
    render(<ProgressBar value={50} label="Glioma" animated={false} />);

    expect(screen.getByText('Glioma')).toBeInTheDocument();
  });

  it('clamps values to 0-100 range', () => {
    render(<ProgressBar value={150} animated={false} />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '100');
  });
});
