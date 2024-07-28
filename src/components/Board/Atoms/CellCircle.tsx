import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../data/data';
import { CellCircleProps } from '../../../interfaces/interfaces';

type CircleProps = {
    $color: number | null;
};

const Circle = styled.div<CircleProps>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${({ $color }) => ($color !== null ? colors[$color as keyof typeof colors] : 'transparent')};
`;

const CellCircle: React.FC<CellCircleProps> = ({ color }) => {
    return <Circle data-testid="cell" $color={color}></Circle>;
};

export default CellCircle;
