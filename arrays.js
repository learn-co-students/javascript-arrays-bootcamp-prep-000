var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = [1]

  var newArray = ["foo",...array]

  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var array = [1]
  var newArray = [...array,"foo"]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  var array = [1, 2, 3]
  return array[2]
}

function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array.shift()
  return array
}

function removeElementFromEndOfArray(array) {
  var array = [1, 2, 3]
  var newArray = array.slice(0,2)
  return newArray
}
