const colorPrefix = "--c-";

export function generateCSSVariablesFromObj(source) {
    const generated = {};
    for (let key in source) {
        generated[colorPrefix + key] = source[key];
    }

    return generated;
}

export function toCSSVariable(value) {
    return colorPrefix + value;
}
