import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import TextField from './TextField';

describe('TextField', () => {
    it('Renders the placeholder', () => {
        const handleChange = vi.fn();
        render(<TextField icon={false} placeholder="Test" onChange={handleChange} />);
        const inputElement = screen.getByPlaceholderText('Test');
        expect(inputElement).toBeInTheDocument();
    });

    it('Applies the correct width, height, and value', () => {
        const handleChange = vi.fn();
        render(
            <TextField icon={false} placeholder="Test" width="50%" height="50%" value="Test" onChange={handleChange} />
        );
        const inputElement = screen.getByPlaceholderText('Test');
        expect(inputElement).toHaveStyle('width: 50%');
        expect(inputElement).toHaveStyle('height: 50%');
        expect(inputElement).toHaveValue('Test');
    });

    it('Calls the onChange function when the input changes', () => {
        const onChange = vi.fn();
        render(<TextField icon={false} placeholder="Test" onChange={onChange} />);
        const inputElement = screen.getByPlaceholderText('Test');
        fireEvent.change(inputElement, { target: { value: 'Test' } });
        expect(onChange).toHaveBeenCalled();
    });

    it('Disables the input when disabled is true', () => {
        const handleChange = vi.fn();
        render(<TextField icon={false} placeholder="Test" disabled={true} onChange={handleChange} />);
        const inputElement = screen.getByPlaceholderText('Test');
        expect(inputElement).toBeDisabled();
    });

    it('renders the icon when the icon prop is true', () => {
        render(<TextField value="" onChange={() => {}} icon={true} data-testid="textfield" />);

        const iconElement = screen.getByTestId('icon');
        expect(iconElement).toBeInTheDocument();
    });
});
