var chocolateBars = ["snikers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars[0]);
function addElementToBeginningOfArray(arr, el) {
	return [el,...arr];
}

addElementToBeginningOfArray([1], 'foo');


function destructivelyAddElementToBeginningOfArray(arr, el) {
	arr.unshift(el);
	return (arr);
};

destructivelyAddElementToBeginningOfArray([1], "foo");


function addElementToEndOfArray(arr, el){
	arr.push(el);
	return (arr);
};

addElementToEndOfArray([1], 'foo');

function destructivelyAddElementToEndOfArray(arr, el) {
	arr.push(el);
	return (arr);
};

destructivelyAddElementToEndOfArray([1], "foo");


function accessElementInArray(arr, index) {
	return (arr[index])
};

accessElementInArray([1, 2, 3], 2);


function removeElementFromBeginningOfArray(arr) {
	arr.shift(arr);
	return (arr);
};

removeElementFromBeginningOfArray([1, 2, 3]);


function removeElementFromBeginningOfArray(arr){
	var arrTwo = arr.slice(1);
	return arrTwo;
};

removeElementFromBeginningOfArray([1, 2, 3]);


function removeElementFromEndOfArray(arr) {
	arr.pop(arr)
	return (arr)
};

removeElementFromEndOfArray([1, 2, 3]);
