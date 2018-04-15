var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = function(array, element) {
    var arr = array;
    return [element, ...arr];
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
    var something = array;
    something.unshift(element);
    return something;
}

var addElementToEndOfArray = function(array, element) {
    var arr = array;
    return [...arr, element];
}

var destructivelyAddElementToEndOfArray = function(array, element) {
    var something = array;
    something.push(element);
    return something;
}

var accessElementInArray = function(array, index) {
    return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function (array) {
    array = array.shift();
    return array;
}

var removeElementFromBeginningOfArray = function(array) {
    array = array.slice(1);
    return array;
}

var removeElementFromEndOfArray = function(array) {
    array = array.slice(0, array.length - 1);

    return array;
}
