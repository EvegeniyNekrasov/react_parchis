import React from 'react';
import styled from 'styled-components';
import { colors } from '@/data/data';
import { CellCircleProps } from '@/interfaces/interfaces';

type CircleProps = {
    $color: number | null;
    $size?: string | number;
};

const Circle = styled.div<CircleProps>`
    width: ${({ $size }) => $size}px;
    height:  ${({ $size }) => $size}px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${({ $color }) => ($color !== null ? colors[$color as keyof typeof colors] : 'transparent')};
`;

const CellCircle: React.FC<CellCircleProps> = ({ color, size = 30 }) => {
    return <Circle data-testid="cell" $size={size} $color={color}></Circle>;
};

export default CellCircle;
