var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array1, element1) {
  return [element1,...array1]
}

function destructivelyAddElementToBeginningOfArray(array1, element1) {
  array1.unshift(element1);
  return array1
}

function addelementToEndofArray(array1, element1) {
  return [...array1, element1]
}

function destructivelyAddElementToEndofArray(array1, element1) {
  array.push(element1);
  return array1
}

function accessElementInArray(array1, index) {
  console.log(array1)
}

function removeElementFromBeginningofArray(array1) {
  return array.shift()

}

function removeElementFromEndofArray(array1) {
  return array.slice()

}
