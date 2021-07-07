var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var array1 = ["hello", "greetings", "whats", "hey"]

var array2 = ["bye", "farewell", "seeyou", "later"]

function addElementToBeginningOfArray(array1, newElement) {
  array1 = [newElement, ...array1]
  return array1
}

function destructivelyAddElementToBeginningOfArray(array2, newElement) {
  array2.unshift(newElement)
  return array2
}

function addElementToEndOfArray(array1, newElement) {
  var array1 = [...array1, newElement]
  return array1
}

function destructivelyAddElementToEndOfArray(array2, newElement) {
  array2.push(newElement)
  return array2
}

function accessElementInArray(array1, indexNumber) {
  return array1[indexNumber]
}

function destructivelyRemoveElementFromBeginningOfArray(array1) {
  array1.shift()
  return array1
}

function removeElementFromBeginningOfArray(array2) {
  return array2 = array2.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array1) {
  array1.pop()
  return array1
}

function removeElementFromEndOfArray(array2) {
  return array2 = array2.slice(0, array2.length - 1)
}
