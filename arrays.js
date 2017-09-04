{var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
return chocolateBars();
}

function addElementToBeginningOfArray (array, element) {

var addElementToBeginningOfArray = [1];
['foo', ...addElementToBeginningOfArray];

return addElementToBeginningOfArray();
}

function destructivelyAddElementToBeginningOfArray (array, element) {

var destructivelyAddElementToBeginningOfArray = [1]
destructivelyAddElementToBeginningOfArray.unshift('foo')

return destructivelyAddElementToBeginningOfArray():
}


function addElementToEndOfArray (array, element) {

var addElementToEndOfArray = [1];
[...addElementToEndOfArray, 'foo'];

return addElementToEndOfArray();
}


function destructivelyAddElementToEndOfArray (array, element) {

var destructivelyAddElementToEndOfArray = [1];
destructivelyAddElementToEndOfArray.push('foo');

return destructivelyAddElementToBeginningOfArray():
}

function accessElementInArray (array, index) {
var accessElementInArray = [1, 2, 3];

return (accessElementInArray[2]);
}


function destructivelyRemoveElementFromBeginningOfArray(array) {

const destructivelyRemoveElementFromBeginningOfArray = [1, 2, 3];
destructivelyRemoveElementFromBeginningOfArray.shift ();

return (destructivelyRemoveElementFromBeginningOfArray);
}


function removeElementFromBeginningOfArray(array) {

var removeElementFromBeginningOfArray = [1, 2, 3];
removeElementFromBeginningOfArray.slice (0);

return (removeElementFromBeginningOfArray);
}

function destructivelyRemoveElementFromEndOfArray(array) {

var destructivelyRemoveElementFromEndOfArray = [1, 2, 3];
destructivelyRemoveElementFromEndOfArray.pop ();

return (destructivelyRemoveElementFromEndOfArray);
}


function removeElementFromEndOfArray(array) {

var removeElementFromEndOfArray = [1, 2, 3];
removeElementFromEndOfArray.slice (0, removeElementFromEndOfArray.length - 1);

return (removeElementFromEndOfArray);
}
