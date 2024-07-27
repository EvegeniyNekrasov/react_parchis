import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import RadioGroup from './RadioGroup';

describe('RadioGroup', () => {
    it('renders children correctly', () => {
        render(
            <RadioGroup>
                <div data-testid="child1">Child 1</div>
                <div data-testid="child2">Child 2</div>
            </RadioGroup>
        );

        const child1 = screen.getByTestId('child1');
        const child2 = screen.getByTestId('child2');

        expect(child1).toBeInTheDocument();
        expect(child2).toBeInTheDocument();
        expect(child1).toHaveTextContent('Child 1');
        expect(child2).toHaveTextContent('Child 2');
    });
});
