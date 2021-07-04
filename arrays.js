var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skilles'
]

function addElementToBeginningOfArray(array, element) {
  beginingarray = [element, ...array]
  return beginingarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  endarray = [...array, element]
  return endarray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
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
    var slicedarray = array.slice(1)
    return slicedarray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0 , array.length - 1)
}
