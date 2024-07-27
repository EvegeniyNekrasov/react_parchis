import React from 'react';
import ParchisBoard from './components/ParchisBoard';
import { players, colors, Player } from './data/data';
import Radio from './components/Radio/Radio';
import RadioGroup from './components/RadioGroup/RadioGroup';

import './App.css';

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
}

function App() {
    const [playersData, setPlayersData] = React.useState<null | Player[]>(null);
    const [playersCount, setPlayersCount] = React.useState<null | number>(null);
    const [selectedColors, setSelectedColors] = React.useState<number[]>([]);

    const [ready, setReady] = React.useState(false);

    const handlePlayersCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayersCount(parseInt(e.target.value));
        const p = players.slice(0, parseInt(e.target.value));
        setPlayersData(p);
    };

    const setPlayerName = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (!playersData) return;
        const newPlayersData = playersData.slice();
        newPlayersData[index].name = e.target.value;
        if (e.target.value === '') {
            newPlayersData[index].name = `Player ${index + 1}`;
        }
        setPlayersData(newPlayersData);
    };

    const getPosition = (colorIndex: number): number => {
        switch (colorIndex) {
            case 0:
                return 0;
            case 1:
                return 2;
            case 2:
                return 6;
            case 3:
                return 8;
            default:
                return 0;
        }
    };

    const setPlayerColor = (colorIndex: number, playerIndex: number) => {
        if (!playersData) return;
        const newPlayersData = playersData.slice();

        // Remover el color previamente seleccionado si existe
        const currentColor = newPlayersData[playerIndex].color;
        let newSelectedColors = selectedColors;
        if (currentColor !== undefined) {
            newSelectedColors = selectedColors.filter((color) => color !== currentColor);
        }

        // Asignar el nuevo color y actualizar el estado
        newPlayersData[playerIndex].color = colorIndex;
        newPlayersData[playerIndex].position = getPosition(colorIndex);
        setPlayersData(newPlayersData);
        setSelectedColors([...newSelectedColors, colorIndex]);
    };

    const isColorDisabled = (colorIndex: number) => {
        return selectedColors.includes(colorIndex);
    };

    const isReadyDisabled = () => {
        if (!playersData || !playersCount) return true;
        return playersData.some((player) => player.color === null);
    };

    return (
        <div className="main">
            {!ready ? (
                <div>
                    <h1>Parchis</h1>
                    <span>Descripción cualquiera bla bla bla...</span>
                    <RadioGroup>
                        <Radio
                            name="player"
                            value={2}
                            onChange={(e) => handlePlayersCount(e)}
                            text="dos"
                            color='black'
                            disabled={false}
                        />
                        <Radio
                            name="player"
                            value={3}
                            onChange={(e) => handlePlayersCount(e)}
                            text="tres"
                            color="black"
                            disabled={false}
                        />
                        <Radio
                            name="player"
                            value={4}
                            onChange={(e) => handlePlayersCount(e)}
                            text="cuatro"
                            color="black"
                            disabled={false}
                        />
                    </RadioGroup>
                    {playersData && playersCount ? (
                        <div>
                            {Array.from({ length: playersCount }).map((_, playerIndex) => (
                                <div key={playerIndex}>
                                    <label>
                                        <p>
                                            <span>Player name: </span>
                                            <span>
                                                {playersData
                                                    ? playersData[playerIndex].name
                                                    : `Player ${playerIndex + 1}`}
                                            </span>
                                        </p>
                                        <input type="text" onChange={(e) => setPlayerName(e, playerIndex)} />
                                        <RadioGroup>

                                            {Object.entries(colors).map(([_, color], colorIndex) => (
                                                <Radio
                                                    key={colorIndex}
                                                    name={`color-${playerIndex}`}
                                                    value={colorIndex}
                                                    onChange={() => setPlayerColor(colorIndex, playerIndex)}
                                                    disabled={isColorDisabled(colorIndex)}
                                                    text={getColorName(color)}
                                                    color={color}
                                                />
                                            ))}
                                        </RadioGroup>
                                    </label>
                                </div>
                            ))}
                            <button onClick={() => setReady(true)} disabled={isReadyDisabled()}>
                                Ready
                            </button>
                        </div>
                    ) : null}
                </div>
            ) : null}

            {ready ? <ParchisBoard players={playersData} /> : null}
        </div>
    );
}

export default App;
