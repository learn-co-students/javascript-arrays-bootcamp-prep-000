var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
    const newArray = [element, ...array];
    return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array;
}

function addElementToEndOfArray(array, element) {
    const newArray = [...array, element];
    return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
}

function accessElementInArray(array, index) {
    return array[index];
}

function destructivelyRemoveElementFromBeginingOfArray(array) {
    array.shift();
    return array;
}

function removeElementFromBeginningOfArray(array) {
    array = array.slice(1);
    return array;
}

function removeElementFromEndOfArray(array) {
    newArray = array.slice(0, array.length - 1);
    return newArray;
}
