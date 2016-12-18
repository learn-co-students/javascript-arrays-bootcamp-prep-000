var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
    array = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
}

function addElementToEndOfArray(array, element) {
    array.push(element);
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
}

function accessElementInArray(array, index) {
    return array[index];
}


function removeElementFromBeginningOfArray(array) {
    array.splice(0, 1);
}


function removeElementFromEndOfArray(array) {
    array.pop();
}
