var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array;
}
function addElementToEndOfArray(array, element){
  return[...array, element]
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array;
}
function accessElementInArray(array, index){
  var array = [1, 2, 3]
  return (array[2])
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(0)
  return array;
}
function removeElementFromBeginningOfArray(array){
  array.splice(0, 1)
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(0)
  return array;
}
function removeElementFromEndOfArray(array){
  array.splice(-1, 1)
  return array;
}
