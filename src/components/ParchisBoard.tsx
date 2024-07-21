import React from 'react';
import styled from 'styled-components';

import StartPoint from './Board/StartPoint';
import PlayerCircle from './Board/Atoms/PlayerCircle';
import MainInnerRectangle from './Board/Atoms/MainInnerRectangle';
import PlayableRectangle from './Board/Atoms/PlayableRectangle';

import {
    boardRectangle,
    Player,
    playableRectangleBottomVertical,
    playableRectangleTopVertical,
    playableRectangleLeftHorisontal,
    playableRectangleRightHorisontal,
} from '../data/data';
import { START_POSITIONS, PLAYABLE_POSITIONS } from '../utils/board-utils';

import './ParchisBoard.css';

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
    margin: 0 auto;
    max-width: var(--board-dimention);
    max-height: var(--board-dimention);
`;

interface PlayableRectangleProps {
    players: Player[];
}

const ParchisBoard: React.FC<PlayableRectangleProps> = ({ players }) => {
    const initialCellNumber = React.useRef(34);

    const getCellNumber = (): number => {
        initialCellNumber.current += 1;
        if (initialCellNumber.current === 68) {
            initialCellNumber.current = 1;
        }
        return initialCellNumber.current;
    };

    React.useEffect(() => {
        console.log(playableRectangleBottomVertical);
        console.log(playableRectangleTopVertical);
        console.log(playableRectangleLeftHorisontal);
        console.log(playableRectangleRightHorisontal);
    }, [players]);

    return (
        <PrincipalBoard>
            {boardRectangle.map((_, index) => (
                <MainInnerRectangle>
                    {START_POSITIONS.has(index) ? (
                        <StartPoint>
                            {players
                                .filter((i) => i.position === index)
                                .map((item, i) => (
                                    <PlayerCircle
                                        selected={i === 0}
                                        data={item}
                                    />
                                ))}
                        </StartPoint>
                    ) : null}

                    {/* {PLAYABLE_POSITIONS.has(index) &&
                    players.map((i) => i.position === index) ? (
                        <PlayableRectangle index={index}>
                           
                            {Array(RECTABGLES)
                                .fill(0)
                                .map((_, i) => (
                                    <div key={i} className="rectangle">
                                        {getCellNumber()}
                                    </div>
                                ))}
                        </PlayableRectangle>
                    ) : null} */}
                    {PLAYABLE_POSITIONS.has(index) && (
                        <>
                            {index === 1 && (
                                <PlayableRectangle index={index}>
                                    {playableRectangleTopVertical.map(
                                        (cell, i) => (
                                            <div
                                                key={i}
                                                className={`
                                                    rectangle ${cell.safeSpot ? 'safe' : ''}
                                                    `}
                                                    style={{ backgroundColor: cell.color ? cell.color : 'transparent' }}
                                            >
                                                <div className='rectangle-number'>{cell.cellNumber}</div>
                                                {cell.p1 && <div className='cell-circles'>{ }</div>}
                                                {cell.p2 && <div className='cell-circles'>{ }</div>}

                                            </div>
                                        ),
                                    )}
                                </PlayableRectangle>
                            )}
                            {index === 3 && (
                                <PlayableRectangle index={index}>
                                    {playableRectangleLeftHorisontal.map(
                                        (cell, i) => (
                                            <div
                                                key={i}
                                                className={`rectangle ${cell.safeSpot ? 'safe' : ''}`}
                                                style={{ backgroundColor: cell.color ? cell.color : 'transparent' }}
                                            >
                                                <div className='rectangle-number'>{cell.cellNumber}</div>
                                                {cell.p1 && <div className='cell-circles'>{ }</div>}
                                                {cell.p2 && <div className='cell-circles'>{ }</div>}

                                            </div>
                                        ),
                                    )}
                                </PlayableRectangle>
                            )}

                            {index === 5 && (
                                <PlayableRectangle index={index}>
                                    {playableRectangleRightHorisontal.map(
                                        (cell, i) => (
                                            <div
                                                key={i}
                                                className={`rectangle ${cell.safeSpot ? 'safe' : ''}`}
                                                style={{ backgroundColor: cell.color ? cell.color : 'transparent' }}
                                            >
                                                <div className='rectangle-number'>{cell.cellNumber}</div>
                                                {cell.p1 && <div className='cell-circles'>{ }</div>}
                                                {cell.p2 && <div className='cell-circles'>{ }</div>}

                                            </div>
                                        ),
                                    )}
                                </PlayableRectangle>
                            )}

                            {index === 7 && (
                                <PlayableRectangle index={index}>
                                    {playableRectangleBottomVertical.map(
                                        (cell, i) => (
                                            <div
                                                key={i}
                                                className={`rectangle ${cell.safeSpot ? 'safe' : ''}`}
                                                style={{ backgroundColor: cell.color ? cell.color : 'transparent' }}
                                            >
                                                <div className='rectangle-number'>{cell.cellNumber}</div>
                                                {cell.p1 && <div className='cell-circles'>{ }</div>}
                                                {cell.p2 && <div className='cell-circles'>{ }</div>}

                                            </div>
                                        ),
                                    )}
                                </PlayableRectangle>
                            )}
                        </>
                    )}
                    {index === 4 ? (
                        <div className="center">
                            {Array(4)
                                .fill(0)
                                .map((_, i) => (
                                    <Rectangle index={i} />
                                ))}
                        </div>
                    ) : null}
                </MainInnerRectangle>
            ))}
        </PrincipalBoard>
    );
};

export default ParchisBoard;
