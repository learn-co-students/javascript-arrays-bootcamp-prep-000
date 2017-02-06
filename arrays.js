var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

//return new array without modifying by adding an element to the begginning of the array
function addElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}

//modifies old array by adding an element to the beginning of the array
function destructivelyAddElementToBeginningOfArray (array,element){
  array.unshift(element)
  return array
}

//pushes an element to the end of the array
function addElementToEndOfArray (array, element){
  array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

//returns the element at the provided index within the array
function accessElementInArray (array, index){
  return array[index]
}

//removes the first element and mutates the array
function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift()
  return array
}

//removes the first element without mutation
function removeElementFromBeginningOfArray (array) {
  array = array.slice(1)
  return array
}

//removes last element and mutates the array
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

//removes last element without mutating the array
function removeElementFromEndOfArray (array) {
  array = array.slice(0, array.length - 1)
  return array
}
