var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var newArr = array.slice()
  newArr.unshift(element)
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var newArr = [...array]
  newArr.push(element)
  return newArr
}

function removeElementFromEndOfArray(array) {
  var newArr = [...array]
  newArr.pop()
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var newArr = [...array]
  newArr.shift()
  return newArr
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}