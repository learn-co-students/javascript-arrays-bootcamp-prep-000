var chocolateBars = ["snikers","hundred ground", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift(element)
 return array
}

function addElementToBeginningOfArray(array, element) {
var newarray = array;
newarray.unshift(element);
return newarray
}

function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element)
 return array
}

function addElementToEndOfArray(array, element) {
var newarray = array;
newarray.push(element);
return newarray
}

function accessElementInArray(array, index) {
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function removeElementFromBeginningOfArray(array) {
return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
