var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element) {
  myArray = [element,...array]
  return myArray
}

function addElementToEndOfArray(array, element) {
  myArray = [...array, element]
  return myArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, element) {
  var array = [1,2,3,4]
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(array)
  return array
}

function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  array.splice(2)
  return array
}
