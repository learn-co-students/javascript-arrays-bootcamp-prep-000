var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]


 function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
 }

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element)
  return array
}

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function accessElementInArray(array, index) {
  return array[index]
}

function removeElementFromBeginningOfArray(array) {
  return array = array.slice(1)
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}
