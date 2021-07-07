var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

var array = new Array
function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element)
return array
}

var array = new Array
function destructivelyAddElementToEndOfArray(array, element) {
array.push(element)
return array
}

var array = new Array
function addElementToBeginningOfArray(array, element) {
array.unshift(element)
return array
}

var array = new Array
function addElementToEndOfArray(array, element) {
array.push(element)
return array
}

var array = new Array
function accessElementInArray(array, index) {
return array[index]
}

var array = new Array
function removeElementFromBeginningOfArray(array) {
  array.shift(0)
  return array
}

var array = new Array
function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}
