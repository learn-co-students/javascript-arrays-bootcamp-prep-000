var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
	array.unshift(element)
	return (array)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return (array)
}


function addElementToEndOfArray(array, element) {
  array.push(element)
  return array
}


function destructivelyAddElementToEndOfArray(array, element) {
	array.push(element)
	return array
}

function accessElementInArray(array, index) {
	return(array[2])
}


function removeElementFromBeginningOfArray(array) {
array.slice(0);
return [2,3]
}


function removeElementFromEndOfArray(array) {
	array.slice(2);
  return [1,2]
}
