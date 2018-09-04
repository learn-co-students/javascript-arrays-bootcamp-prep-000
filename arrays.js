var chocolateBars = ["Snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
   var new_array = [element, ...array]
   return new_array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray (array,index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array,element) {
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray (array,element) {
  new_array = array.slice(1)
  return new_array
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}