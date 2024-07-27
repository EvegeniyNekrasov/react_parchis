// Radio.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import Radio from './Radio';

describe('Radio', () => {
    it('Renders the radio button with the correct text', () => {
        render(
            <Radio name="test" value="value1" disabled={false} onChange={() => {}} text="Test Radio" color="#007bff" />
        );

        const labelElement = screen.getByText('Test Radio');
        expect(labelElement).toBeInTheDocument();
    });

    it('Calls the onChange handler when clicked', () => {
        const handleChange = vi.fn();
        render(
            <Radio
                name="test"
                value="value1"
                disabled={false}
                onChange={handleChange}
                text="Test Radio"
                color="#007bff"
            />
        );

        const radioInput = screen.getByLabelText('Test Radio');
        fireEvent.click(radioInput);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('Disables the radio button when the disabled prop is true', () => {
        render(
            <Radio name="test" value="value1" disabled={true} onChange={() => {}} text="Test Radio" color="#007bff" />
        );

        const radioInput = screen.getByLabelText('Test Radio');
        expect(radioInput).toBeDisabled();
    });

    it('Applies the correct color when not disabled', () => {
        render(
            <Radio name="test" value="value1" disabled={false} onChange={() => {}} text="Test Radio" color="#007bff" />
        );

        const customRadio = screen.getByLabelText('Test Radio').nextSibling as HTMLElement;
        expect(customRadio).toHaveStyle(`border: 2px solid #007bff`);
    });

    it('Applies the disabled color when disabled', () => {
        render(
            <Radio name="test" value="value1" disabled={true} onChange={() => {}} text="Test Radio" color="#007bff" />
        );

        const customRadio = screen.getByLabelText('Test Radio').nextSibling as HTMLElement;
        expect(customRadio).toHaveStyle(`border: 2px solid #c0c0c0`);
    });
});
