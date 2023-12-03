export function range(start, end, step) {
    // if(! isInRange(start, 0, ))
}

function isInt(query, acceptString = false) {
    if (acceptString) query = Number(query);

    return Number.isInteger(query);
}

function isInRange(query, min, max) {
    if (!Number(query)) throw Error(`isInRange expects query to be a number. Got '${query}'`);
    if (max <= min) throw Error(`isInRange expects max > min. Got min: '${min}', max: '${max}'`);

    if (query < min) return false;
    if (query > max) return false

    return true
}
