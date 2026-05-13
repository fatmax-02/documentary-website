import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../component/About.jsx';
import '@testing-library/jest-dom';

describe('About Component', () => {
  it('should render the About component with heading', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('should have the text about Frontend Developer', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    const text = screen.getByText(/Frontend Developer/i);
    expect(text).toBeInTheDocument();
  });

  it('should have the references section', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    const references = screen.getByText(/references/i);
    expect(references).toBeInTheDocument();
  });
});