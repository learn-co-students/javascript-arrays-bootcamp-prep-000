var chocolateBars = ["snickers", "hunred grand", "kitkat", "skittles"];

function addElementToBeginingOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElemtToBeginingOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function AccessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginingOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginingOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
