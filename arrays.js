var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element) {
  bars = [element,... array]
  return bars
}
addElementToBeginningOfArray()
  
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
    return array
}
destructivelyAddElementToBeginningOfArray(array, 1)

function addElementToEndOfArray(array, element){
  chocolate = [... array, element]
  return chocolate
  
}

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
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  remove = array.slice(0, array.length -1)
  return remove
}