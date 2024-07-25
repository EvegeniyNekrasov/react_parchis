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
    Cell,
} from '../data/data';
import { START_POSITIONS, PLAYABLE_POSITIONS } from '../utils/board-utils';

import './ParchisBoard.css';
import CellCircle from './Board/Atoms/CellCircle';

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
    // const initialCellNumber = React.useRef(34);

    const [rectangleBottomVertical, setReactangleBottomVertical] = React.useState<Cell[] | null>([]);
    const [rectangleTopVertical, setReactangleTopVertical] = React.useState<Cell[] | null>([]);
    const [rectangleLeftHorizontal, setReactangleLeftHorizontal] = React.useState<Cell[] | null>([]);
    const [rectangleRightHorizontal, setReactangleRightHorizontal] = React.useState<Cell[] | null>([]);

    const [playersData, setPlayersData] = React.useState<null | Player[]>(null);

    React.useEffect(() => {
        setReactangleBottomVertical(playableRectangleBottomVertical);
        setReactangleTopVertical(playableRectangleTopVertical);
        setReactangleLeftHorizontal(playableRectangleLeftHorisontal);
        setReactangleRightHorizontal(playableRectangleRightHorisontal);
        
        setPlayersData(players);

        // console.log(playableRectangleBottomVertical);
        // console.log(playableRectangleTopVertical);
        // console.log(playableRectangleLeftHorisontal);
        // console.log(playableRectangleRightHorisontal);
    }, [players]);

    return (
        <PrincipalBoard>
            {boardRectangle.map((_, index) => (
                <MainInnerRectangle>
                    {START_POSITIONS.has(index) ? (
                        <StartPoint>
                            {playersData && playersData
                                .filter((i) => i.position === index)
                                .map((item, i) => (
                                    <PlayerCircle
                                        selected={i === 0}
                                        data={item}
                                    />
                                ))}
                        </StartPoint>
                    ) : null}

                    {PLAYABLE_POSITIONS.has(index) && (
                        <>
                            {index === 1 && (
                                <PlayableRectangle index={index}>
                                    {rectangleTopVertical && rectangleTopVertical.map(
                                        (cell, i) => (
                                            <div
                                                key={i}
                                                className={`
                                                    rectangle ${cell.safeSpot ? 'safe' : ''}
                                                    `}
                                                style={{ backgroundColor: cell.color ? cell.color : 'transparent' }}
                                            >
                                                <div className='rectangle-number'>{cell.cellNumber}</div>
                                                {cell.p1 && <CellCircle color={null} />}
                                                {cell.p2 && <CellCircle color={null} />}

                                            </div>
                                        ),
                                    )}
                                </PlayableRectangle>
                            )}
                            {index === 3 && (
                                <PlayableRectangle index={index}>
                                    {rectangleLeftHorizontal && rectangleLeftHorizontal.map(
                                        (cell, i) => (
                                            <div
                                                key={i}
                                                className={`rectangle ${cell.safeSpot ? 'safe' : ''}`}
                                                style={{ backgroundColor: cell.color ? cell.color : 'transparent' }}
                                            >
                                                <div className='rectangle-number'>{cell.cellNumber}</div>
                                                {cell.p1 && <CellCircle color={null} />}
                                                {cell.p2 && <CellCircle color={null} />}

                                            </div>
                                        ),
                                    )}
                                </PlayableRectangle>
                            )}

                            {index === 5 && (
                                <PlayableRectangle index={index}>
                                    {rectangleRightHorizontal && rectangleRightHorizontal.map(
                                        (cell, i) => (
                                            <div
                                                key={i}
                                                className={`rectangle ${cell.safeSpot ? 'safe' : ''}`}
                                                style={{ backgroundColor: cell.color ? cell.color : 'transparent' }}
                                            >
                                                <div className='rectangle-number'>{cell.cellNumber}</div>
                                                {cell.p1 && <CellCircle color={null} />}
                                                {cell.p2 && <CellCircle color={null} />}

                                            </div>
                                        ),
                                    )}
                                </PlayableRectangle>
                            )}

                            {index === 7 && (
                                <PlayableRectangle index={index}>
                                    {rectangleBottomVertical && rectangleBottomVertical.map(
                                        (cell, i) => (
                                            <div
                                                key={i}
                                                className={`rectangle ${cell.safeSpot ? 'safe' : ''}`}
                                                style={{ backgroundColor: cell.color ? cell.color : 'transparent' }}
                                            >
                                                <div className='rectangle-number'>{cell.cellNumber}</div>
                                                {cell.p1 && <CellCircle color={null} />}
                                                {cell.p2 && <CellCircle color={null} />}

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
