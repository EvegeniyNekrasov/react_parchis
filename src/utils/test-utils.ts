/**
 * Converts a hexadecimal color code to an RGBA color string.
 *
 * @param {string} hex - The hexadecimal color code (e.g., '#FF5733' or '#F53').
 * @param {number} [alpha=1] - The alpha value for the RGBA color (between 0 and 1).
 * @returns {string} The RGBA color string (e.g., 'rgba(255, 87, 51, 1)').
 * @throws {Error} Throws an error if the hex color format is invalid or if the alpha value is out of range.
 */
export const hexToRgba = (hex: string, alpha: number = 1): string => {

    hex = hex.replace(/^#/, '');
    let r: number, g: number, b: number;
    const RADIX: number = 16;

    if (hex.length === typeOfHex.SHORT) {
        ({ red: r, green: g, blue: b } = createRgbFromShordHexadecimal(hex, RADIX));
    } else if (hex.length === typeOfHex.FULL) {
        ({ red: r, green: g, blue: b } = createRgbFromFullHexadecimal(hex, RADIX));
    } else {
        throw new Error('Invalid hex color format, the length of the color must be 3 or 6 digits after #');
    }

    if (alpha < 0 || alpha > 1) {
        throw new Error('Alpha value must be between 0 and 1');
    }

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const createRgbFromShordHexadecimal = (hex: string, radix: number): Rgb => {
    const red = parseInt(hex.charAt(hexChartPosition.START) + hex.charAt(hexChartPosition.START), radix);
    const green = parseInt(hex.charAt(hexChartPosition.MIDDLE) + hex.charAt(hexChartPosition.MIDDLE), radix);
    const blue = parseInt(hex.charAt(hexChartPosition.END) + hex.charAt(hexChartPosition.END), radix);

    return { red, green, blue };
};

const createRgbFromFullHexadecimal = (hex: string, radix: number): Rgb => {
    const red = parseInt(hex.substring(hexSubString.ZERO, hexSubString.TWO), radix);
    const green = parseInt(hex.substring(hexSubString.TWO, hexSubString.FOUR), radix);
    const blue = parseInt(hex.substring(hexSubString.FOUR, hexSubString.SIX), radix);

    return { red, green, blue };
};

type Rgb = {
    red: number;
    green: number;
    blue: number;
}

enum hexChartPosition {
    START = 0,
    MIDDLE = 1,
    END = 2,
}

enum typeOfHex {
    SHORT = 3,
    FULL = 6,
}

enum hexSubString {
    ZERO = 0,
    TWO = 2,
    FOUR = 4,
    SIX = 6,
}
