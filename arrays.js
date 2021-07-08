var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

//does not alter the original array
function addElementToBeginningOfArray(array, element) {
  arrayNew = [element, ...array]
  return arrayNew
}

//does alter the original array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

//does not alter the original array
function addElementToEndOfArray(array, element) {
  arrayNew = [...array, element]
  return arrayNew
}

//does alter the original array
function destructivelyAddElementToEndOfArray(array, element){
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
  arrayNew = array.slice(1)
  return arrayNew
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  arrayNew = array.slice(0, array.length -1)
  return arrayNew
}
