var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var array = []
  [element, ...array]
  array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = []
  array.push(element)
  array
}

function addElementToEndOfArray(array, element) {
  var array = []
  [...array, element]
  array
}

function destructivelyAddElementToEndOfArray(array, element) {
  var array = []
  array = [element, ...array]
  array
}

function accessElementInArray(array, index) {
  var array = new Array();
  array[index]
}
