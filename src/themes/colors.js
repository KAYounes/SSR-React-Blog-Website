import { generateCSSVariablesFromObj } from "./theme_utils";

const LIGHT_PALETTE = {
    "off-black": "#131620",

    "gray": "#CCCCCC",
    "grayish-primary": "#B6A6BF",

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

    "off-white-grad":
        "linear-gradient(135deg,hsl(0deg 0% 100%) 0%,hsl(246deg 63% 98%) 27%,hsl(246deg 63% 97%) 100%);",
    // "off-white-grad":
    //     "linear-gradient(155deg,hsl(246deg 63% 97%) 0%,hsl(244deg 41% 91%) 62%,hsl(242deg 36% 85%) 100%)",
};

const LIGHT_THEME = {
    "text": LIGHT_PALETTE["off-black"],
    "text-muted": LIGHT_PALETTE["grayish-primary"],
};

// ##############################################

export const CSS_LIGHT_PALETTE = generateCSSVariablesFromObj(LIGHT_THEME);
export const CSS_LIGHT_THEME = generateCSSVariablesFromObj(LIGHT_PALETTE);
