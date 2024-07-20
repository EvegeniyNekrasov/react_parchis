import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface PlayerCircleProps {
    index: number;
    selected: boolean;
}

const PlayerCircle: React.FC<PlayerCircleProps> = ({
    index,
    selected = false,
}) => {
    return (
        <Circle color={selected ? 'red' : 'blue'}>
            <span>{index}</span>
        </Circle>
    );
};

export default PlayerCircle;
