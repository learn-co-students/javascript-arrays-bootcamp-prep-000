var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

/*return a new array and not modify the original.*/
function addElementToBeginningOfArray(inputArray, elementToUnshift) {
	var differentArray = inputArray
	differentArray.unshift(elementToUnshift)
	return differentArray
}

/* add to beginning of array and return altered array */
function destructivelyAddElementToBeginningOfArray(inputArray, elementToUnshift) {
	inputArray.unshift(elementToUnshift)
	return inputArray
}

function addElementToEndOfArray(inputArray, elementToPush) {
	var differentArray = inputArray
	differentArray.push(elementToPush)
	return differentArray
}

function destructivelyAddElementToEndOfArray(inputArray, elementToPush) {
	inputArray.push(elementToPush)
	return inputArray
}

function accessElementInArray(inputArray, index) {
	return inputArray[index]
}

/*Define a function in arrays.js called destructivelyRemoveElementFromBeginningOfArray that takes an array as its only argument and removes the first element. Your function should then return the entire array, and it should mutate the array.*/
function destructivelyRemoveElementFromBeginningOfArray(inputArray) {
	inputArray.shift()
	return inputArray
}

/*	Define a function in arrays.js called removeElementFromBeginningOfArray that takes an array as its only argument and removes the first element. Your function should then return the entire array, and it should not mutate the underlying array. */
function removeElementFromBeginningOfArray(inputArray) {
	var newArray = inputArray.slice(1)
	return newArray
}

/*Define a function in arrays.js called destructivelyRemoveElementFromEndOfArray that takes an array as its only argument and removes the last element. Your function should return the entire array, and it should mutate the array.*/

function destructivelyRemoveElementFromEndOfArray(inputArray) {
	var newArray = inputArray.pop()
	return inputArray
}

/* Define a function in arrays.js called removeElementFromEndOfArray that takes an array as its only argument and removes the last element. Your function should return the entire array, and it should not mutate the array.*/

function removeElementFromEndOfArray(inputArray) {
	var newArray = inputArray.slice(0, inputArray.length -1)
	return newArray
}
