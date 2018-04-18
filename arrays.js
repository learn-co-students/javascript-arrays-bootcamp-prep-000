var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
  b = [element, ...array]
  return b
}

function destructivelyAddElementToBeginningOfArray (array,element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element){
  b = [...array,element]
  return b
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  b = array.slice(1)
  return b
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  b = array.slice(0,-1)
  return b
}