var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (arr, item) {
    var newArr = [item, ...arr];
    return newArr;
}

function destructivelyAddElementToBeginningOfArray (arr, item) {
    arr.unshift(item);
    return arr;
}

function addElementToEndOfArray (arr, item) {
    var anotherArr = [...arr, item];
    return anotherArr;
}

function destructivelyAddElementToEndOfArray (arr, item) {
    arr.push(item);
    return arr;
}

function accessElementInArray (arr, index) {
    return arr[index];
}

function removeElementFromBeginningOfArray (arr) {
    return arr.slice(1);
}

function removeElementFromEndOfArray (arr) {
    return arr.slice(0, arr.length - 1);
}
