const colorPrefix = "--c-";

export function generateCSSVariablesFromObj(source) {
    const generated = {};
    for (let key in source) {
        const value = source[key];

        if (isHexColor(value)) generated[colorPrefix + key] = toRGBTriplet(value);
        else generated[colorPrefix + key] = value;
    }

    return generated;
}

export function toCSSVariable(value) {
    return colorPrefix + value;
}

function isHexColor(query) {
    const hexRegExp = new RegExp("^#?([0-9a-fA-f]{3}){1,2}$");

    return hexRegExp.test(query);
}

export function toRGBTriplet(hex) {
    hex = hex.replace("#", "");

    if (typeof hex !== "string") throw Error(`{hex} should be a string, gor ${typeof hex}`);

    if (hex.length !== 3 && hex.length !== 6)
        throw Error(`{hex} should be 3 or 6 characters long, got ${hex.length}`);

    // if (isHexColor(hex)) {
    if (hex.length === 6) {
        const RGBHex = hex.match(/([0-9a-fA-f][0-9a-fA-f])/g);
        const RGB = RGBHex.map((str) => Number.parseInt(str, 16));
        return RGB.join(", ");
    }

    if (hex.length === 3) {
        const RGBHex = hex.match(/([0-9a-fA-f])/g);
        const RGB = RGBHex.map((str) => Number.parseInt(str + str, 16));
        return RGB.join(", ");
    }
    // }

    // return hex;
}
