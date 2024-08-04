import { colors } from "@/data/data";
import type { StartScreenProps } from "@/interfaces/interfaces";
import Button from "@/lib/Button/Button";
import Container from "@/lib/Container/Container";
import Radio from "@/lib/Radio/Radio";
import RadioGroup from "@/lib/RadioGroup/RadioGroup";
import Text from "@/lib/Text/Text";
import TextField from "@/lib/TextField/TextField";
import type React from "react";
import { v4 as uuidv4 } from "uuid";

const getColorName = (color: string) => {
  switch (color) {
    case colors[0]:
      return "Red";
    case colors[1]:
      return "Green";
    case colors[2]:
      return "Blue";
    case colors[3]:
      return "Yellow";
    default:
      return "";
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
        <Container
          width="50%"
          height="100%"
          orientation="column"
          bgColor="white"
          padding="20px"
        >
          <Text color="#000" size="1.2rem" text="Select number of oponents" />
          <Text color="#000" size="1rem" text="Número de jugadores:" />
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
        <Container width="50%" height="100%" padding="20px">
          {props.playersData && props.playersCount ? (
            <Container orientation="column" width="400px" height="auto">
              {Array.from({ length: props.playersCount }).map(
                (_, playerIndex) => (
                  <div key={uuidv4()}>
                    <label>
                      <Container
                        orientation="column"
                        width="100%"
                        height="auto"
                        gap="10px"
                      >
                        <p>
                          <span>Player name: </span>
                          <span>
                            {props.playersData
                              ? props.playersData[playerIndex].name
                              : `Player ${playerIndex + 1}`}
                          </span>
                        </p>
                        <TextField
                          placeholder="select player name"
                          onChange={(e) => props.setPlayerName(e, playerIndex)}
                          value={
                            props.playersData
                              ? props.playersData[playerIndex].name
                              : ""
                          }
                          icon
                        />
                        <RadioGroup>
                          {Object.entries(colors).map(
                            ([, color], colorIndex) => (
                              <Radio
                                key={color}
                                name={`color-${playerIndex}`}
                                value={colorIndex}
                                onChange={() =>
                                  props.setPlayerColor(colorIndex, playerIndex)
                                }
                                disabled={isColorDisabled(colorIndex)}
                                text={getColorName(color)}
                                color={color}
                              />
                            ),
                          )}
                        </RadioGroup>
                      </Container>
                    </label>
                  </div>
                ),
              )}
              <Button
                text="ready"
                height="30px"
                onClick={() => props.setReady(true)}
                disabled={isReadyDisabled()}
              />
            </Container>
          ) : null}
        </Container>
      </Container>
    </>
  );
};

export default StartScreen;
