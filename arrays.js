var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, item) {
    arr.unshift(item);
    return arr
}

function destructivelyAddElementToBeginningOfArray(arr, item) {
    arr.unshift(item);
    return arr
}

function addElementToEndOfArray(arr, item) {
    arr.push(item);
    return arr
}

function destructivelyAddElementToEndOfArray(arr, item) {
    arr.push(item);
    return arr
}

function accessElementInArray(arr, idx) {
    return arr[idx]
}

function removeElementFromBeginningOfArray(arr) {
    arr.shift();
    return arr
}

function removeElementFromEndOfArray(arr) {
    arr.pop();
    return arr
}
