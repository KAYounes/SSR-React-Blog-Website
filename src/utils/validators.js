export function isNull(query) {
    return query === null;
}

export function isNotNull(query) {
    return query !== null;
}

export function isNaN(query) {
    return Number.isNaN(query);
}

export function isNotNaN(query) {
    return !Number.isNaN(query);
}
