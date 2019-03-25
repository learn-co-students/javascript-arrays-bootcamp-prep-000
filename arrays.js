var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
[...array, element]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
}
function addElementToEndOfArray(array, element){
 [element, ...array]
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
}

function accessElementInArray(array, index){
  return array[2]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
 array.shift()
}
function removeElementFromBeginningOfArray(array){
  array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
}
function removeElementFromEndOfArray(array){
  array.slice(0, arrays.length -1)
}