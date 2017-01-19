var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  var array = [1]
  array.unshift("foo")
  return array
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  return destructivelyAddElementToBeginningOfArray(element, array)
}

function addElementToEndOfArray(array, element) {
  var array = [1]
  array.push("foo")
  return array
}

function destructivelyAddElementToEndOfArray() {
  var array = [1]
  array.push("foo")
  return array
}

function accessElementInArray(array, index) {
  array = [1, 2, 3]
  return array[2]
}


function removeElementFromBeginningOfArray(array, element) {
  array = [1, 2, 3]
  array.shift()
  return array
}

function removeElementFromEndOfArray(array) {
  array = [1, 2, 3]
  array = [1, 2]
  return array
}
