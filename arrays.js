var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToEndOfArray(array, element) {
  return array[...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}

function addElementToBeginningOfArray(array, element) {
  return array[element, ...array]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,-1)
}
