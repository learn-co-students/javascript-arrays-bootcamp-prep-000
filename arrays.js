var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, elem) {
	return [elem, ...array];
}

function destructivelyAddElementToBeginningOfArray (array, elem) {
	array.unshift(elem);
	return array;
}

function addElementToEndOfArray (array, elem) {
	return [...array, elem];
}

function destructivelyAddElementToEndOfArray (array, elem) {
	array.push(elem);
	return array;
}

function accessElementInArray(array, index) {
	return array[index];
}

function removeElementFromBeginningOfArray(array) {
	array.shift();
	return array;
}

function removeElementFromEndOfArray(array) {
	array.pop();
	return array;
}
