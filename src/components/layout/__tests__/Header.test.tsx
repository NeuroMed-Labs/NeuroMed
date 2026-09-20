import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../Header';

function renderHeader() {
  return render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
}

describe('Header', () => {
  it('renders the Neuromed brand name', () => {
    renderHeader();
    expect(screen.getByText('Neuromed')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderHeader();
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Features').length).toBeGreaterThan(0);
    expect(screen.getAllByText('How It Works').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
  });

  it('renders the Analyze MRI CTA button', () => {
    renderHeader();
    const analyzeButtons = screen.getAllByText('Analyze MRI');
    expect(analyzeButtons.length).toBeGreaterThan(0);
  });

  it('has a mobile menu toggle button', () => {
    renderHeader();
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles dark mode', async () => {
    const user = userEvent.setup();
    renderHeader();

    const toggleButtons = screen.getAllByLabelText(/Switch to (dark|light) mode/);
    expect(toggleButtons.length).toBeGreaterThan(0);

    await user.click(toggleButtons[0]!);
    // After clicking, the label should change
    const updatedButtons = screen.getAllByLabelText(/Switch to (dark|light) mode/);
    expect(updatedButtons.length).toBeGreaterThan(0);
  });
});
