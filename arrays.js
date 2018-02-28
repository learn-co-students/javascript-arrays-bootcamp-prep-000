var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//Works
function addElementToBeginningOfArray(arr, arg) {
	var result = [arg, ...arr]
	return result;

}

//Works
function destructivelyAddElementToBeginningOfArray(array, element) {
	array.unshift(element);
	return array;

}

//Works
function addElementToEndOfArray(arr, arg) {
	var result = [...arr, arg];
	return result;

}

//

function destructivelyAddElementToEndOfArray(array, element) {
	array.push(element);
	return array;

}

function accessElementInArray(arr, index) {
	var result = arr[index];
	return result;

}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
	arr.shift();
	return arr;

}

//This Doesn't work
function removeElementFromBeginningOfArray(array) {
	return array.slice(1);

}

//This Works
function destructivelyRemoveElementFromEndOfArray(arr) {
	arr.pop();
	return arr;
}

// This works
function removeElementFromEndOfArray(arr) {
	return arr.slice(0, arr.length - 1);

}
