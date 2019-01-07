var chocolateBars = ['snickers','hundred grand','kitkat','skittles']
function addElementToBeginningOfArray(array,element) {
  arrayForReturn = [element, ...array]
  return arrayForReturn
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  insideArray = [...array, element]
  return insideArray
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
  insideArray = array.slice(1)
  return insideArray
}

function removeElementFromEndOfArray(array) {
  insideArray = array.slice(0, array.length-1)
  return insideArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}