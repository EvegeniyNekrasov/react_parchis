import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { colors, PlayerColor } from '@/data/data';
import { hexToRgba } from '@/utils/test-utils';

import CellCircle from './CellCircle';

describe('CellCircle', () => {
    it('Renders the correct color', () => {
        render(<CellCircle color={PlayerColor.RED} />);
        const cellCircleElement = screen.getByTestId('cell');
        const expectedColor = hexToRgba(colors[PlayerColor.RED], 1);
        expect(cellCircleElement).toHaveStyle(`background-color: ${expectedColor}`);
    });
});
