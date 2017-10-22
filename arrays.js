var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

var array = [
  1
]

var element = "foo"

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray() {
  return [...array, 'foo']
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo')
  return array
}

var newArray = [1, 2, 3]

function accessElementInArray(array, index) {
  return newArray[2]
}

function destructivelyRemoveElementFromBeginningOfArray(newArray) {
  newArray.shift()
  return newArray
}

function removeElementFromBeginningOfArray(newArray) {
  return newArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(newArray) {
  newArray.pop()
  return newArray
}

function removeElementFromEndOfArray(newArray) {
  return newArray.slice(0, newArray.length - 1)
}
