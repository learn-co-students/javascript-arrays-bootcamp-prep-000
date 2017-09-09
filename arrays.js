var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
]
function addElementToBeginningOfArray(a, e) {
    const new_array = [e, ...a]
    return new_array;
}
function destructivelyAddElementToBeginningOfArray(a, e) {
    a.unshift(e)
    return a;
}
function addElementToEndOfArray(a, e) {
    const new_array = [...a, e]
    return new_array
}
function destructivelyAddElementToEndOfArray(a, e) {
    a.push(e)
    return a;
}
function accessElementInArray(a, i) {
    e = a[i]
    return e
}
function destructivelyRemoveElementFromBeginningOfArray(a) {
    a.shift()
    return a
}
function removeElementFromBeginningOfArray(a) {
    new_array = a.slice(1)
    return new_array
}
function destructivelyRemoveElementFromEndOfArray(a) {
    a.pop(-1)
    return a
}
function removeElementFromEndOfArray(a) {
    new_array = a.slice(0, a.length - 1)
    return new_array
}
