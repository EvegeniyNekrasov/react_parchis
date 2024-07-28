import React from 'react';
import ParchisBoard from './components/ParchisBoard';
import { players, Player } from './data/data';
import StartScreen from './components/StartScreen/StartScreen';

import './App.css';

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
        // TODO: validar si el nombre está vacío, que hacer?
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

    return (
        <div className="main">
            {!ready ? (
                <StartScreen
                    playersData={playersData}
                    playersCount={playersCount}
                    handlePlayersCount={handlePlayersCount}
                    setPlayerName={setPlayerName}
                    setPlayerColor={setPlayerColor}
                    ready={ready}
                    setReady={setReady}
                    selectedColors={selectedColors}
                />
            ) : null}

            {ready ? <ParchisBoard players={playersData} /> : null}
        </div>
    );
}

export default App;
