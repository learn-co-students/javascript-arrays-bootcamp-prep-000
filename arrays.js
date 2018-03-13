var chocolateBars = ['snickers', 'hundred snickers', 'kitkat', 'skittles' ]


function addElementToBeginningOfArray(array, element) {
  var arr1 = [element, ...array]
  return arr1
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var arr2 = [...array, element]
  return arr2
}

function destructivelyAddElementToEndOfArray (array, element) {
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
  var arr3 = array.slice(1)
  return arr3
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(array.length)
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}

