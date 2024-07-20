enum StartPointPositions {
    TOP = 0,
    RIGHT = 2,
    LEFT = 6,
    BOTTOM = 8,
}

enum PlayablePointsPositions {
    TOP = 1,
    RIGHT = 3,
    LEFT = 5,
    BOTTOM = 7,
}

export const START_POSITIONS = new Set([
    StartPointPositions.TOP,
    StartPointPositions.RIGHT,
    StartPointPositions.LEFT,
    StartPointPositions.BOTTOM,
]);

export const PLAYABLE_POSITIONS = new Set([
    PlayablePointsPositions.TOP,
    PlayablePointsPositions.RIGHT,
    PlayablePointsPositions.LEFT,
    PlayablePointsPositions.BOTTOM,
]);
