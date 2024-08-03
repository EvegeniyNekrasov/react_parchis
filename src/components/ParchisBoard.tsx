import React from 'react';
import styled from 'styled-components';

import StartPoint from '@/components/Board/StartPoint';
import PlayerCircle from '@/components/Board/Atoms/PlayerCircle';
import MainInnerRectangle from '@/components/Board/Atoms/MainInnerRectangle';
import PlayableRectangle from '@/components/Board/Atoms/PlayableRectangle';

import {
    boardRectangle,
    Player,
    playableRectangleBottomVertical,
    playableRectangleTopVertical,
    playableRectangleLeftHorisontal,
    playableRectangleRightHorisontal,
    Cell,
    colors,
} from '../data/data';
import { START_POSITIONS, PLAYABLE_POSITIONS } from '../utils/board-utils';

import { throwDice } from '../data/dice';
import { playerThrowsDice } from '../types/player';
import { PlayableRectangleProps } from '../interfaces/interfaces';

import CellCircle from './Board/Atoms/CellCircle';

import './ParchisBoard.css';
import CenterBoard from '@/components/Board/CenterBoard';
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

const ParchisBoard: React.FC<PlayableRectangleProps> = ({ players }) => {
    // const initialCellNumber = React.useRef(34);

    const [rectangleBottomVertical, setReactangleBottomVertical] = React.useState<Cell[] | null>([]);
    const [rectangleTopVertical, setReactangleTopVertical] = React.useState<Cell[] | null>([]);
    const [rectangleLeftHorizontal, setReactangleLeftHorizontal] = React.useState<Cell[] | null>([]);
    const [rectangleRightHorizontal, setReactangleRightHorizontal] = React.useState<Cell[] | null>([]);

    const [playerThrows, setPlayerThrows] = React.useState<playerThrowsDice[] | null>([]);

    const [playersData, setPlayersData] = React.useState<null | Player[]>(null);

    React.useEffect(() => {
        setReactangleBottomVertical(playableRectangleBottomVertical);
        setReactangleTopVertical(playableRectangleTopVertical);
        setReactangleLeftHorizontal(playableRectangleLeftHorisontal);
        setReactangleRightHorizontal(playableRectangleRightHorisontal);

        setPlayersData(players);

        const playerThrowsArray: playerThrowsDice[] = [];

        if (players === null) return;

        players.forEach((player) => {
            playerThrowsArray.push({
                name: player.name,
                throw: null,
                bloqued: false,
            });
        });

        setPlayerThrows(playerThrowsArray);
    }, [players]);

    const handleThrowDice = (item) => {
        const number = throwDice();

        setPlayerThrows((prev) => {
            return prev.map((i) => {
                if (i.name === item.name) {
                    return {
                        ...i,
                        throw: number,
                    };
                }
                return i;
            });
        });
        console.log(number);
    };

    const getCenterColor = (index: number) => {
        let color: number = 0;
        switch (index) {
            case 0:
                color = 0;
                break;
            case 1:
                color = 1;
                break;
            case 2:
                color = 3;
                break;
            case 3:
                color = 2;
                break;
            default:
                color = 0;
        }

        return color;
    }

    return (
        <PrincipalBoard>
            {boardRectangle.map((_, index) => (
                <MainInnerRectangle>
                    {START_POSITIONS.has(index) ? (
                        <StartPoint>
                            {playersData &&
                                playersData
                                    .filter((i) => i.position === index)
                                    .map((item, i) => (
                                        <PlayerCircle
                                            selected={i === 0}
                                            data={item}
                                            onClick={() => handleThrowDice(item)}
                                        />
                                    ))}
                        </StartPoint>
                    ) : null}

                    {PLAYABLE_POSITIONS.has(index) && (
                        <>
                            {index === 1 && (
                                <PlayableRectangle index={index}>
                                    {rectangleTopVertical &&
                                        rectangleTopVertical.map((cell, i) => (
                                            <div
                                                key={i}
                                                className={`
                                                    rectangle ${cell.safeSpot ? 'safe' : ''}
                                                    `}
                                                style={{
                                                    backgroundColor: cell.color ? cell.color : 'transparent',
                                                }}
                                            >
                                                <div className="rectangle-number">{cell.cellNumber}</div>
                                                {cell.p1 && <CellCircle color={null} />}
                                                {cell.p2 && <CellCircle color={null} />}
                                            </div>
                                        ))}
                                </PlayableRectangle>
                            )}
                            {index === 3 && (
                                <PlayableRectangle index={index}>
                                    {rectangleLeftHorizontal &&
                                        rectangleLeftHorizontal.map((cell, i) => (
                                            <div
                                                key={i}
                                                className={`rectangle ${cell.safeSpot ? 'safe' : ''}`}
                                                style={{
                                                    backgroundColor: cell.color ? cell.color : 'transparent',
                                                }}
                                            >
                                                <div className="rectangle-number">{cell.cellNumber}</div>
                                                {cell.p1 && <CellCircle color={null} />}
                                                {cell.p2 && <CellCircle color={null} />}
                                            </div>
                                        ))}
                                </PlayableRectangle>
                            )}

                            {index === 5 && (
                                <PlayableRectangle index={index}>
                                    {rectangleRightHorizontal &&
                                        rectangleRightHorizontal.map((cell, i) => (
                                            <div
                                                key={i}
                                                className={`rectangle ${cell.safeSpot ? 'safe' : ''}`}
                                                style={{
                                                    backgroundColor: cell.color ? cell.color : 'transparent',
                                                }}
                                            >
                                                <div className="rectangle-number">{cell.cellNumber}</div>
                                                {cell.p1 && <CellCircle color={null} />}
                                                {cell.p2 && <CellCircle color={null} />}
                                            </div>
                                        ))}
                                </PlayableRectangle>
                            )}

                            {index === 7 && (
                                <PlayableRectangle index={index}>
                                    {rectangleBottomVertical &&
                                        rectangleBottomVertical.map((cell, i) => (
                                            <div
                                                key={i}
                                                className={`rectangle ${cell.safeSpot ? 'safe' : ''}`}
                                                style={{
                                                    backgroundColor: cell.color ? cell.color : 'transparent',
                                                }}
                                            >
                                                <div className="rectangle-number">{cell.cellNumber}</div>
                                                {cell.p1 && <CellCircle color={null} />}
                                                {cell.p2 && <CellCircle color={null} />}
                                            </div>
                                        ))}
                                </PlayableRectangle>
                            )}
                        </>
                    )}
                    {index === 4 ? (
                        // <div className="center">
                        //     {Array(4)
                        //         .fill(0)
                        //         .map((_, i) => (
                        //             <Rectangle index={i} />
                        //         ))}
                        // </div>
                        <div className='outerRect'>
                            {Array(4).fill(0).map((_, item) => (
                                <div className={`inner-${item}`}>
                                    {Array(3).fill(0).map((_, i) => (
                                        <div key={i} style={{
                                            background: i === 1 ? getCenterColor(item) : "transparent",
                                            flexDirection: item === 0 || item === 2 ? "row" : "column"
                                        }} className={`cell-center cell-center-${item}`}>
                                            <CellCircle size={25} color={null} />
                                            <CellCircle size={25} color={null} />
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <div className='innerRect'></div>
                        </div>
                    ) : null}
                </MainInnerRectangle>
            ))}
        </PrincipalBoard>
    );
};

export default ParchisBoard;
