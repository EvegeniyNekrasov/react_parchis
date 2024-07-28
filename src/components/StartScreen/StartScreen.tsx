import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import RadioGroup from "../RadioGroup/RadioGroup";
import Radio from "../Radio/Radio";
import { colors } from "../../data/data";
import Text from "../Text/Text";
import { StartScreenProps } from "../../interfaces/interfaces";

const getColorName = (color: string) => {
    switch (color) {
        case colors[0]:
            return 'Red';
        case colors[1]:
            return 'Green';
        case colors[2]:
            return 'Blue';
        case colors[3]:
            return 'Yellow';
        default:
            return '';
    }
};



const StartScreen: React.FC<StartScreenProps> = ({ ...props }) => {

    const isColorDisabled = (colorIndex: number) => {
        return props.selectedColors.includes(colorIndex);
    };

    const isReadyDisabled = () => {
        if (!props.playersData || !props.playersCount) return true;
        return props.playersData.some((player) => player.color === null);
    };

    return (
        <>
            <Container width="100%" height="100%">
                <Container width="50%" height="100%" orientation="column" bgColor='white' padding='20px'>
                    <Text color="#000" size="1rem" text="paco" />
                    <RadioGroup>
                        <Radio
                            name="player"
                            value={2}
                            onChange={(e) => props.handlePlayersCount(e)}
                            text="dos"
                            color="black"
                            disabled={false}
                        />
                        <Radio
                            name="player"
                            value={3}
                            onChange={(e) => props.handlePlayersCount(e)}
                            text="tres"
                            color="black"
                            disabled={false}
                        />
                        <Radio
                            name="player"
                            value={4}
                            onChange={(e) => props.handlePlayersCount(e)}
                            text="cuatro"
                            color="black"
                            disabled={false}
                        />
                    </RadioGroup>
                </Container>
                <Container width="50%" height="100%" padding='20px'>
                    {props.playersData && props.playersCount ? (
                        <Container orientation="column" width="400px" height="auto">
                            {Array.from({ length: props.playersCount }).map((_, playerIndex) => (
                                <div key={playerIndex}>
                                    <label>
                                        <Container orientation="column" width="100%" height="auto" gap="10px">
                                            <p>
                                                <span>Player name: </span>
                                                <span>
                                                    {props.playersData
                                                        ? props.playersData[playerIndex].name
                                                        : `Player ${playerIndex + 1}`}
                                                </span>
                                            </p>
                                            <input type="text" onChange={(e) => props.setPlayerName(e, playerIndex)} />
                                            <RadioGroup>
                                                {Object.entries(colors).map(([_, color], colorIndex) => (
                                                    <Radio
                                                        key={colorIndex}
                                                        name={`color-${playerIndex}`}
                                                        value={colorIndex}
                                                        onChange={() => props.setPlayerColor(colorIndex, playerIndex)}
                                                        disabled={isColorDisabled(colorIndex)}
                                                        text={getColorName(color)}
                                                        color={color}
                                                    />
                                                ))}
                                            </RadioGroup>
                                        </Container>
                                    </label>
                                </div>
                            ))}
                            <button onClick={() => props.setReady(true)} disabled={isReadyDisabled()}>
                                Ready
                            </button>
                        </Container>
                    ) : null}
                </Container>
            </Container>
        </>
    )
}

export default StartScreen;