import React from 'react';
import styled from 'styled-components';
import { StartPointProps } from '../../interfaces/interfaces';

const Rectangle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CircleContainer = styled.div`
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    place-items: center;
    border: 1px solid black;
    border-radius: 200px;
    background-color: #f2f2f2;
`;

const StartPoint: React.FC<StartPointProps> = ({ children }) => {
    return (
        <Rectangle>
            <CircleContainer>{children}</CircleContainer>
        </Rectangle>
    );
};

export default StartPoint;
