import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../data/data';

type CircleProps = {
    $color: number | null;
};

const Circle = styled.div<CircleProps>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${({ $color }) =>
        $color ? colors[$color as keyof typeof colors] : 'transparent'};
`;

interface CellCircleProps {
    color: number | null;
}

const CellCircle: React.FC<CellCircleProps> = ({ color }) => {
    return <Circle $color={color}></Circle>;
};

export default CellCircle;
