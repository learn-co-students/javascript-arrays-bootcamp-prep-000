var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  new_array = array
  return new_array = [element, ...new_array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  new_array = array
  return new_array = [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, id) {
  return array[id]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  new_array = array
  return new_array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  new_array = array
  return new_array.slice(0, new_array.length - 1)
}
