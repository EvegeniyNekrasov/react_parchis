import React from 'react';
import styled from 'styled-components';
import StartPoint from './Board/StartPoint';
import PlayerCircle from './Board/Atoms/PlayerCircle';
import MainInnerRectangle from './Board/Atoms/MainInnerRectangle';

import { boardRectangle } from '../data/data';
import { START_POSITIONS, PLAYABLE_POSITIONS } from '../utils/board-utils';

import './ParchisBoard.css';
import PlayableRectangle from './Board/Atoms/PlayableRectangle';

const RECTABGLES = 21;

const Rectangle = ({ index }) => {
    const getClassName = (index: number) => {
        switch (index) {
            case 0:
                return 'top';
            case 1:
                return 'right';
            case 2:
                return 'right';
            case 3:
                return 'left';
            default:
                return '';
        }
    };
    return <div key={index} className={`${getClassName(index)}`}></div>;
};

const PrincipalBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 100%;
    height: 100%;
    max-width: 900px;
    max-height: 900px;
`;

const ParchisBoard = () => {
    return (
        <PrincipalBoard>
            {boardRectangle.map((_, index) => (
                <MainInnerRectangle>
                    {START_POSITIONS.has(index) ? (
                        <StartPoint>
                            {Array(4)
                                .fill(0)
                                .map((_, index) => (
                                    <PlayerCircle
                                        index={index}
                                        selected={index === 0}
                                    />
                                ))}
                        </StartPoint>
                    ) : null}
                    {PLAYABLE_POSITIONS.has(index) ? (
                        <PlayableRectangle index={index}>
                            {Array(RECTABGLES)
                                .fill(0)
                                .map((_, index) => (
                                    <div key={index} className="rectangle">
                                        {index}
                                    </div>
                                ))}
                        </PlayableRectangle>
                    ) : null}
                    {index === 4 ? (
                        <div className="center">
                            {Array(4)
                                .fill(0)
                                .map((_, index) => (
                                    <Rectangle index={index} />
                                ))}
                        </div>
                    ) : null}
                </MainInnerRectangle>
            ))}
        </PrincipalBoard>
    );
};

export default ParchisBoard;
