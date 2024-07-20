import React, { useEffect } from 'react';
import styled from 'styled-components';

const getGridTemplate = (index: number) => {
    let gridTemplateColumn = '';
    let gridTemplateRow = '';
    switch (index) {
        case 1:
        case 7:
            gridTemplateColumn = 'repeat(3, 1fr)';
            gridTemplateRow = 'repeat(7, 1fr)';
            break;
        case 3:
        case 5:
            gridTemplateColumn = 'repeat(7, 1fr)';
            gridTemplateRow = 'repeat(3, 1fr)';
            break;
        default:
            gridTemplateColumn = 'repeat(1, 1fr)';
            gridTemplateRow = 'repeat(1, 1fr)';
            break;
    }

    return { gridTemplateColumn, gridTemplateRow };
};

type ReactangleProps = {
    gridPosition: number;
};

const Rectangle = styled.div<ReactangleProps>`
    width: calc(var(--board-dimention) / 3);
    height: calc(var(--board-dimention) / 3);
    display: grid;
    grid-template-columns: ${({ gridPosition }) =>
        getGridTemplate(gridPosition).gridTemplateColumn};
    grid-template-rows: ${({ gridPosition }) =>
        getGridTemplate(gridPosition).gridTemplateRow};
`;

interface PlayableRectangleProps {
    children: React.ReactNode;
    index: number;
}

const PlayableRectangle: React.FC<PlayableRectangleProps> = ({
    children,
    index,
}) => {
    useEffect(() => {
        console.log(`index: ${index}`);
        console.log(getGridTemplate(index).gridTemplateColumn);
        console.log(getGridTemplate(index).gridTemplateRow);
    }, [index]);
    return <Rectangle gridPosition={index}>{children}</Rectangle>;
};

export default PlayableRectangle;
