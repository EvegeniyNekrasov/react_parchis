import React from 'react';
import anime from 'animejs';
import styled from 'styled-components';

import { throwDice } from '../../../data/dice';
import { DotPosition } from '../../../types/dots';

import Dot from './Dot';

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

const ANIMATION_DURATION: number = 800;

const KEY_FRAMES = [
    { rotate: '90deg', duration: ANIMATION_DURATION, easing: 'easeInOutQuad' },
    { rotate: '180deg', duration: ANIMATION_DURATION, easing: 'easeInOutQuad' },
    { rotate: '270deg', duration: ANIMATION_DURATION, easing: 'easeInOutQuad' },
    { rotate: '360deg', duration: ANIMATION_DURATION, easing: 'easeInOutQuad' },
];

const Dice: React.FC = () => {
    const [dots, setDots] = React.useState<{ top: string; left: string }[]>([]);
    const diceRef = React.useRef<HTMLDivElement>(null);

    // Note: The positions of the dots are hardcoded for each number
    // Todo: Implement a better way to calculate the positions
    const dotPositions: { [key: number]: DotPosition[] } = {
        1: [{ top: '50%', left: '50%' }],
        2: [
            { top: '25%', left: '25%' },
            { top: '75%', left: '75%' },
        ],
        3: [
            { top: '25%', left: '25%' },
            { top: '50%', left: '50%' },
            { top: '75%', left: '75%' },
        ],
        4: [
            { top: '25%', left: '25%' },
            { top: '25%', left: '75%' },
            { top: '75%', left: '25%' },
            { top: '75%', left: '75%' },
        ],
        5: [
            { top: '25%', left: '25%' },
            { top: '25%', left: '75%' },
            { top: '50%', left: '50%' },
            { top: '75%', left: '25%' },
            { top: '75%', left: '75%' },
        ],
        6: [
            { top: '25%', left: '25%' },
            { top: '25%', left: '50%' },
            { top: '25%', left: '75%' },
            { top: '75%', left: '25%' },
            { top: '75%', left: '50%' },
            { top: '75%', left: '75%' },
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
        <DiceContainer ref={diceRef} onClick={rollDice}>
            {dots.map((dot, index) => (
                <Dot key={index} top={dot.top} left={dot.left} />
            ))}
        </DiceContainer>
    );
};

export default Dice;
