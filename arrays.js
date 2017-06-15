var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
    return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array;
}

function addElementToEndOfArray(array, element) {
    return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
}

function accessElementInArray(array, index) {
    return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
    arr.shift();
    return arr;
}

function removeElementFromBeginningOfArray(arr) {
    return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
    arr.pop();
    return arr;
}

function removeElementFromEndOfArray(arr) {
    return arr.slice(0, arr.length - 1);
}
