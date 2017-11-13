// chocolateBars
function chocolateBars() {
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
}

// addElementToBeginningOfArray
function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array]
  return newArray
}

// destructivelyAddElementToBeginningOfArray
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

// addElementToEndOfArray
function addElementToEndOfArray(array, element) {
  const newArray = [...array, element]
  return newArray
}

// destructivelyAddElementToEndOfArray
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

// accessElementInArray
function accessElementInArray(array, index) {
  return array[index]
}

// destructivelyRemoveElementFromBeginningOfArray
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

// removeElementFromBeginningOfArray
function removeElementFromBeginningOfArray(array) {
  const newArray = array.slice(1)
  return newArray
}

// destructivelyRemoveElementFromEndOfArray
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

// removeElementFromEndOfArray
function removeElementFromEndOfArray(array) {
  const newArray = array.slice(0, array.length - 1)
  return newArray
}
