import { generateCSSVariablesFromObj } from "./theme_utils";

const LIGHT_PALETTE = {
    "off-black": "#131620",

    "pink": "#FF0080",
    "pink-w": "#FFA4D1",
    "pink-b": "#6D0037",

    "sat-red": "#F20F4B",
    "deSat-red": "#ED406E",

    "sat-green": "#9BEA34",
    "deSat-green": "#97CB53",

    "sat-blue": "#384FE5",
    "deSat-blue": "#4B5DD2",

    "sat-yellow": "#E9F726",
    "deSat-yellow": "#D8E33B",
};

const LIGHT_THEME = {
    text: LIGHT_PALETTE["off-black"],
};

// ##############################################

export const CSS_LIGHT_PALETTE = generateCSSVariablesFromObj(LIGHT_THEME);
export const CSS_LIGHT_THEME = generateCSSVariablesFromObj(LIGHT_PALETTE);
