import type React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Dice from "./Dice";
import { v4 as uuidv4 } from "uuid";

import { colors, type Player } from "@/data/data";
import type { PlayerCircleProps } from "@/interfaces/interfaces";

const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PlayerName = styled.div`
    position: absolute;
`;

const PlayerCircle: React.FC<PlayerCircleProps> = ({
  selected = false,
  data,
  onClick,
}) => {
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    setPlayer(data);
  }, [data]);

  return (
    <>
      <PlayerName>
        {data.name}
        <Dice />
        {/* <button onClick={onClick}>throw dice</button> */}
      </PlayerName>

      {player
        ? player.pieces.map((_, i) => (
            <Circle key={uuidv4()} color={colors[player.color ?? 0]}>
              <span>{i}</span>
            </Circle>
          ))
        : null}
    </>
  );
};

export default PlayerCircle;
