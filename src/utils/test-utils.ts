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

    if (hex.length === 3) {
        r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
        g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
        b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
    } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    } else {
        throw new Error('Invalid hex color format');
    }

    if (alpha < 0 || alpha > 1) {
        throw new Error('Alpha value must be between 0 and 1');
    }

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};