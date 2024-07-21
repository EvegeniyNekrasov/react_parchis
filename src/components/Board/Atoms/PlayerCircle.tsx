import React from 'react';
import styled from 'styled-components';
import { colors, Player } from '../../../data/data';

const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PlayerName = styled.div`
    position: absolute;
`;

interface PlayerCircleProps {
    selected: boolean;
    data: Player;
}

const PlayerCircle: React.FC<PlayerCircleProps> = ({
    selected = false,
    data,
}) => {
    const [player, setPlayer] = React.useState<Player | null>(null);

    React.useEffect(() => {
        setPlayer(data);
    }, [data]);

    return (
        <>
            <PlayerName>{data.name}</PlayerName>
            {player &&
                player.pieces.map((_, i) => (
                    <Circle color={colors[player.color!]}>
                        <span>{i}</span>
                    </Circle>
                ))}
        </>
    );
};

export default PlayerCircle;
