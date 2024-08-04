import anime from "animejs";
import type React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { throwDice } from "@/data/dice";
import type { DotPosition } from "@/types/dots";

import Dot from "./Dot";

const DiceContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;

  &:hover {
    background-color: #f0f0f0;
  }
`;

interface DotProps {
  "data-testid"?: string;
}

const ANIMATION_DURATION: number = 800;

const KEY_FRAMES = [
  { rotate: "90deg", duration: ANIMATION_DURATION, easing: "easeInOutQuad" },
  { rotate: "180deg", duration: ANIMATION_DURATION, easing: "easeInOutQuad" },
  { rotate: "270deg", duration: ANIMATION_DURATION, easing: "easeInOutQuad" },
  { rotate: "360deg", duration: ANIMATION_DURATION, easing: "easeInOutQuad" },
];

const Dice: React.FC<DotProps> = ({ ...props }) => {
  const [dots, setDots] = useState<{ top: string; left: string }[]>([]);
  const diceRef = useRef<HTMLDivElement>(null);

  // Note: The positions of the dots are hardcoded for each number
  // Todo: Implement a better way to calculate the positions
  const dotPositions: { [key: number]: DotPosition[] } = {
    1: [{ top: "50%", left: "50%" }],
    2: [
      { top: "25%", left: "25%" },
      { top: "75%", left: "75%" },
    ],
    3: [
      { top: "25%", left: "25%" },
      { top: "50%", left: "50%" },
      { top: "75%", left: "75%" },
    ],
    4: [
      { top: "25%", left: "25%" },
      { top: "25%", left: "75%" },
      { top: "75%", left: "25%" },
      { top: "75%", left: "75%" },
    ],
    5: [
      { top: "25%", left: "25%" },
      { top: "25%", left: "75%" },
      { top: "50%", left: "50%" },
      { top: "75%", left: "25%" },
      { top: "75%", left: "75%" },
    ],
    6: [
      { top: "25%", left: "25%" },
      { top: "25%", left: "50%" },
      { top: "25%", left: "75%" },
      { top: "75%", left: "25%" },
      { top: "75%", left: "50%" },
      { top: "75%", left: "75%" },
    ],
  };

  const rollDice = () => {
    const newNumber = throwDice();
    anime({
      targets: diceRef.current,
      keyframes: KEY_FRAMES,
      update: () => {
        const randomNumber = throwDice();
        setDots(dotPositions[randomNumber]);
      },
      complete: () => setDots(dotPositions[newNumber]),
    });
  };

  return (
    <DiceContainer {...props} ref={diceRef} onClick={rollDice}>
      {dots.map((dot) => (
        <Dot key={uuidv4()} top={dot.top} left={dot.left} />
      ))}
    </DiceContainer>
  );
};

export default Dice;
