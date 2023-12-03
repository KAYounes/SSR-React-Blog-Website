const  colorPrefix = '--c-'

export function generateCSSVariablesFromObj(source, target)
{
    for(let key in source)
    {
        target[colorPrefix + key] = source[key]
    }
}

export function toCSSVariable(value)
{
    return colorPrefix + value
}