var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var new_array = [element, ...array]

  return new_array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)

  return array
}

function addElementToEndOfArray(array, element) {
  var new_array = [...array, element]

  return new_array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)

  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0)

  return array
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)

  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()

  return array
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)

  return array
}
