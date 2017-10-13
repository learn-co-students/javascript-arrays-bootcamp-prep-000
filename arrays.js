var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var element2 = [element, ...array]
  return element2
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
  var element2 = [...array, element]
  return element2
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function accessElementInArray(array, index){
  return array[2]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  array.slice(1)
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  array.slice(0, array.length - 1)
  return array.slice(0, array.length - 1)
}
