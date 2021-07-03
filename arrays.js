var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
];

function addElementToBeginningOfArray(array, element) {
    var newChocolateBars = [element, ...array];
    return newChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array;
}

function addElementToEndOfArray(array, element) {
    var newChocolateBars = [...array, element];
    return newChocolateBars;
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
}

function accessElementInArray(array, i) {
    return array[i];
}

function removeElementFromBeginningOfArray(array) {
    return array.slice(1);
}

function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length - 1);
}
