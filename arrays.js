var chocolateBars = [snickers, hundred grand, kitkat, skittles]

function addElementToBeginningOfArray(array, element) {
  [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
}

function accessElementInArray(array, index) {
  array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
}

function destructivelyRemoveElementFromEndOfArra(array) {
  array.pop()
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1)
}
