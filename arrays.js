var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  console.log(array)
}

function removeElementFromBeginningOfArray(array) {
  return array.shift()

}

function removeElementFromEndOfArray(array) {
  return array.slice()

}
