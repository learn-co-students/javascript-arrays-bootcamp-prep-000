var chocolateBars = ["snikers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el) {
	return [el,...arr];
}

addElementToBeginningOfArray([1], 'foo');

function destructivelyAddElementToBeginningOfArray(arr, el) {
	arr.unshift(el);
	return (arr);
};

destructivelyAddElementToBeginningOfArray([1], "foo");

function addElementToEndOfArray(arr, el) {
	return [arr...,el]
}

addElementToEndOfArray([1], 'foo');
