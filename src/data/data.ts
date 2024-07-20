enum PlayerColor {
    RED,
    GREEN,
    BLUE,
    YELLOW,
}

export const colors = {
    [PlayerColor.RED]: 'red',
    [PlayerColor.GREEN]: 'green',
    [PlayerColor.BLUE]: 'blue',
    [PlayerColor.YELLOW]: 'yellow',
};

type Player = {
    color: PlayerColor | null;
    position: number | null;
    pieces: number[];
    name: string;
};

/**
 * Total number of players
 */
const TOTAL_PLAYERS: number = 4;

const createPlayers = (): Player[] => {
    const players: Player[] = new Array(TOTAL_PLAYERS);
    const pieces = [0, 1, 2, 3];

    for (let i = 0; i < TOTAL_PLAYERS; i++) {
        players[i] = {
            color: null,
            position: null,
            pieces: pieces.slice(),
            name: `Player ${i + 1}`,
        };
    }

    return players;
};

type Cell = {
    p1: number | null;
    p2: number | null;
    cellNumber: number | null;
    safeSpot: boolean;
};

export const boardRectangle: number[] = Array(9).fill(0);

const NUMBER_OF_CELLS: number = 21;

const VERTICAL_SAFE_SPOTS: number[] = [1, 12, 14];
const HORISONTAL_SAFE_SPOTS: number[] = [4, 7, 18];

const createPlayableRecangle = (safeSpots: number[]): Cell[] => {
    const cells: Cell[] = new Array(NUMBER_OF_CELLS);
    const safeSpotSet = new Set(safeSpots);

    for (let i = 0; i < NUMBER_OF_CELLS; i++) {
        cells[i] = {
            p1: null,
            p2: null,
            cellNumber: null,
            safeSpot: safeSpotSet.has(i),
        };
    }

    return cells;
};

export const playableRectangleVertical: Cell[] =
    createPlayableRecangle(VERTICAL_SAFE_SPOTS);
export const playableRectangleHorisontal: Cell[] = createPlayableRecangle(
    HORISONTAL_SAFE_SPOTS,
);

export const players: Player[] = createPlayers();
