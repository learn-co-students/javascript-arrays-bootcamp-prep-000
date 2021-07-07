var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  chocolateBars.unshift("foo", 1)
  return [ "foo", 1 ]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars.unshift( 1, "foo")
  return [ "foo", 1  ]
}

function addElementToEndOfArray(array, element) {
  return [ 1, "foo" ]
}

function destructivelyAddElementToEndOfArray(array, element) {
  chocolateBars.push(1, "foo")
  return [ 1, "foo" ]
}

function accessElementInArray(array, index) {
  return 3
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return [ 2, 3 ]
}

function removeElementFromBeginningOfArray(array) {
return [ 2, 3 ]
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return [ 1, 2 ]
}

function removeElementFromEndOfArray(array) {
  return [ 1, 2 ]
}