import React from 'react';
import styled from 'styled-components';
import Dice from './Dice';

import { colors, Player } from '@/data/data';
import { PlayerCircleProps } from '@/interfaces/interfaces';

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

const PlayerCircle: React.FC<PlayerCircleProps> = ({ selected = false, data, onClick }) => {
    const [player, setPlayer] = React.useState<Player | null>(null);

    React.useEffect(() => {
        setPlayer(data);
    }, [data]);

    return (
        <>
            <PlayerName>
                {data.name}
                <Dice />
                {/* <button onClick={onClick}>throw dice</button> */}
            </PlayerName>

            {player ?
                player.pieces.map((_, i) => (
                    <Circle key={i} color={colors[player.color!]}>
                        <span>{i}</span>
                    </Circle>
                )) : null}
        </>
    );
};

export default PlayerCircle;
