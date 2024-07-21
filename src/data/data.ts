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

export type Player = {
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
    startPoint: boolean;
    color: string | null;
};

export const boardRectangle: number[] = Array(9).fill(0);

const NUMBER_OF_CELLS: number = 21;

const VERTICAL_TOP_SAFE_SPOTS: number[] = [1, 12, 14];
const VERTICAL_BOTTOM_SAFE_SPOTS: number[] = [6, 8, 19];
const HORISONTAL_LEFT_SAFE_SPOTS: number[] = [4, 7, 18];
const HORISONTAL_RIGHT_SAFE_SPOTS: number[] = [2, 13, 16];


const verticalTopNumbers = [
    35, 34, 33,
    36, null, 32,
    37, null, 31,
    38, null, 30,
    39, null, 29,
    40, null, 28,
    41, null, 27,
];

const verticalBottomNumbers = [
    61, null, 7,
    62, null, 6,
    63, null, 5,
    64, null, 4,
    65, null, 3,
    66, null, 2,
    67, 68, 1
];

const horisontalLeftNumbers = [
    50, 49, 48, 47, 46, 45, 44,
    51, null, null, null, null, null, null,
    52, 53, 54, 55, 56, 57, 58
]

const horisontalRightNumbers = [
    24, 23, 22, 21, 20, 19, 18,
    null, null, null, null, null, null, 17,
    10, 11, 12, 13, 14, 15, 16

]

const createPlayableRecangle = (safeSpots: number[], cellNumbers: (number | null)[], color: number): Cell[] => {
    const cells: Cell[] = new Array(NUMBER_OF_CELLS);
    const safeSpotSet = new Set(safeSpots);

    for (let i = 0; i < NUMBER_OF_CELLS; i++) {
        cells[i] = {
            p1: null,
            p2: null,
            cellNumber: cellNumbers[i],
            safeSpot: safeSpotSet.has(i),
            startPoint: false,
            color: cellNumbers[i] === null ? colors[color] : null,
        };
    }

    return cells;
};

export const playableRectangleTopVertical: Cell[] = createPlayableRecangle(
    VERTICAL_TOP_SAFE_SPOTS, verticalTopNumbers, PlayerColor.RED
);
export const playableRectangleBottomVertical: Cell[] = createPlayableRecangle(
    VERTICAL_BOTTOM_SAFE_SPOTS, verticalBottomNumbers, PlayerColor.YELLOW
);

export const playableRectangleLeftHorisontal: Cell[] = createPlayableRecangle(
    HORISONTAL_LEFT_SAFE_SPOTS, horisontalLeftNumbers, PlayerColor.BLUE
);
export const playableRectangleRightHorisontal: Cell[] = createPlayableRecangle(
    HORISONTAL_RIGHT_SAFE_SPOTS, horisontalRightNumbers, PlayerColor.GREEN
);

export const players: Player[] = createPlayers();
