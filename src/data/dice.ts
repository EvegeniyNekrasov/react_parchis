const MAX_NUMBER_FOR_DICE: number = 6;

/**
 * Rolls a dice and returns a random number between 1 and 6
 * @returns {number} the result of the dice throw
 */
export function throwDice(): number {
    // Math.random() returns a number between 0 and 1
    // Math.floor() rounds down to the nearest integer
    // Math.random() * 6 returns a number between 0 and 5
    // Math.floor(Math.random() * 6) returns a number between 0 and 5
    // Math.floor(Math.random() * 6) + 1 returns a number between 1 and 6
    return Math.floor(Math.random() * MAX_NUMBER_FOR_DICE) + 1;
}
