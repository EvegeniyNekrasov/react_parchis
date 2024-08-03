import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import StartPoint from "@/components/Board/StartPoint";
import PlayerCircle from "@/components/Board/Atoms/PlayerCircle";
import MainInnerRectangle from "@/components/Board/Atoms/MainInnerRectangle";
import PlayableRectangle from "@/components/Board/Atoms/PlayableRectangle";

import {
  boardRectangle,
  type Player,
  playableRectangleBottomVertical,
  playableRectangleTopVertical,
  playableRectangleLeftHorisontal,
  playableRectangleRightHorisontal,
  type Cell,
} from "../data/data";

import { START_POSITIONS, PLAYABLE_POSITIONS } from "../utils/board-utils";

import { throwDice } from "../data/dice";
import type { playerThrowsDice } from "../types/player";
import type { PlayableRectangleProps } from "../interfaces/interfaces";

import CellCircle from "./Board/Atoms/CellCircle";

import "./ParchisBoard.css";

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

  const [rectangleBottomVertical, setReactangleBottomVertical] = useState<
    Cell[] | null
  >([]);
  const [rectangleTopVertical, setReactangleTopVertical] = useState<
    Cell[] | null
  >([]);
  const [rectangleLeftHorizontal, setReactangleLeftHorizontal] = useState<
    Cell[] | null
  >([]);
  const [rectangleRightHorizontal, setReactangleRightHorizontal] =
    React.useState<Cell[] | null>([]);

  const [playerThrows, setPlayerThrows] = React.useState<
    playerThrowsDice[] | null
  >([]);

  const [playersData, setPlayersData] = useState<null | Player[]>(null);

  useEffect(() => {
    setReactangleBottomVertical(playableRectangleBottomVertical);
    setReactangleTopVertical(playableRectangleTopVertical);
    setReactangleLeftHorizontal(playableRectangleLeftHorisontal);
    setReactangleRightHorizontal(playableRectangleRightHorisontal);

    setPlayersData(players);

    const playerThrowsArray: playerThrowsDice[] = [];

    if (players === null) return;

    players.map((player) => {
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
    let color = 0;
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
  };

  return (
    <PrincipalBoard>
      {boardRectangle.map((_, index) => (
        <MainInnerRectangle key={uuidv4()}>
          {START_POSITIONS.has(index) ? (
            <StartPoint>
              {playersData
                ? playersData
                    .filter((i) => i.position === index)
                    .map((item, i) => (
                      <PlayerCircle
                        key={item.color}
                        selected={i === 0}
                        data={item}
                        onClick={() => handleThrowDice(item)}
                      />
                    ))
                : null}
            </StartPoint>
          ) : null}

          {PLAYABLE_POSITIONS.has(index) && (
            <>
              {index === 1 && (
                <PlayableRectangle index={index}>
                  {rectangleTopVertical
                    ? rectangleTopVertical.map((cell) => (
                        <div
                          key={cell.id}
                          className={`
                                                    rectangle ${cell.safeSpot ? "safe" : ""}
                                                    `}
                          style={{
                            backgroundColor: cell.color
                              ? cell.color
                              : "transparent",
                          }}
                        >
                          <div className="rectangle-number">
                            {cell.cellNumber}
                          </div>
                          {cell.p1 && <CellCircle color={null} />}
                          {cell.p2 && <CellCircle color={null} />}
                        </div>
                      ))
                    : null}
                </PlayableRectangle>
              )}
              {index === 3 && (
                <PlayableRectangle index={index}>
                  {rectangleLeftHorizontal
                    ? rectangleLeftHorizontal.map((cell) => (
                        <div
                          key={cell.id}
                          className={`rectangle ${cell.safeSpot ? "safe" : ""}`}
                          style={{
                            backgroundColor: cell.color
                              ? cell.color
                              : "transparent",
                          }}
                        >
                          <div className="rectangle-number">
                            {cell.cellNumber}
                          </div>
                          {cell.p1 && <CellCircle color={null} />}
                          {cell.p2 && <CellCircle color={null} />}
                        </div>
                      ))
                    : null}
                </PlayableRectangle>
              )}

              {index === 5 && (
                <PlayableRectangle index={index}>
                  {rectangleRightHorizontal
                    ? rectangleRightHorizontal.map((cell) => (
                        <div
                          key={cell.id}
                          className={`rectangle ${cell.safeSpot ? "safe" : ""}`}
                          style={{
                            backgroundColor: cell.color
                              ? cell.color
                              : "transparent",
                          }}
                        >
                          <div className="rectangle-number">
                            {cell.cellNumber}
                          </div>
                          {cell.p1 && <CellCircle color={null} />}
                          {cell.p2 && <CellCircle color={null} />}
                        </div>
                      ))
                    : null}
                </PlayableRectangle>
              )}

              {index === 7 && (
                <PlayableRectangle index={index}>
                  {rectangleBottomVertical
                    ? rectangleBottomVertical.map((cell) => (
                        <div
                          key={cell.id}
                          className={`rectangle ${cell.safeSpot ? "safe" : ""}`}
                          style={{
                            backgroundColor: cell.color
                              ? cell.color
                              : "transparent",
                          }}
                        >
                          <div className="rectangle-number">
                            {cell.cellNumber}
                          </div>
                          {cell.p1 && <CellCircle color={null} />}
                          {cell.p2 && <CellCircle color={null} />}
                        </div>
                      ))
                    : null}
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
            <div className="outerRect">
              {Array(4)
                .fill(0)
                .map((_, item) => (
                  <div key={uuidv4()} className={`inner-${item}`}>
                    {Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={uuidv4()}
                          style={{
                            background:
                              i === 1 ? getCenterColor(item) : "transparent",
                            flexDirection:
                              item === 0 || item === 2 ? "row" : "column",
                          }}
                          className={`cell-center cell-center-${item}`}
                        >
                          <CellCircle size={25} color={null} />
                          <CellCircle size={25} color={null} />
                        </div>
                      ))}
                  </div>
                ))}
              <div className="innerRect" />
            </div>
          ) : null}
        </MainInnerRectangle>
      ))}
    </PrincipalBoard>
  );
};

export default ParchisBoard;
