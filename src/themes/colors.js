import { generateCSSVariablesFromObj } from "./theme_utils"

const LIGHT_PALETTE = {
    'off-black': '#131620',

    'pink-accent': '#FF0080',
    'pink-accent-w': '#FFA4D1',
    'pink-accent-b': '#6D0037',

}

// ##############################################
export const CSS_LIGHT_PALETTE = {}

generateCSSVariablesFromObj(LIGHT_PALETTE, CSS_LIGHT_PALETTE)
