
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
]

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function AddElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}




function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array
}

function removeElementFromEndOfArray(array) {
  return array.pop()

}

function destructivelyRemoveElementFromEndOfArray(array) {

}
