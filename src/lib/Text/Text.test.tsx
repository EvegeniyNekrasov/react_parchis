import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Text from './Text';

describe('Text', () => {
    it('Applies the default color and size', () => {
        render(<Text data-testid="1" text="Test Text" />);

        const textElement = screen.getByTestId('1');
        expect(textElement).toHaveStyle('color: #000');
        expect(textElement).toHaveStyle('font-size: 1rem');
    });

    it('Renders the correct text', () => {
        render(<Text data-testid="1" color="#000" size="1rem" text="text" />);

        const textElement = screen.getByTestId('1');
        expect(textElement).toBeInTheDocument();
    });

    it('Applies the correct color', () => {
        render(<Text data-testid="1" color="#007bff" size="1rem" text="Test Text" />);

        const textElement = screen.getByTestId('1');
        expect(textElement).toHaveStyle('color: #007bff');
    });

    it('Applies the correct size', () => {
        render(<Text data-testid="1" text="Text text" color="#000" size="2rem" />);

        const textElement = screen.getByTestId('1');
        expect(textElement).toHaveStyle('font-size: 2rem');
    });
});
