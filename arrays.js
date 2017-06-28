var chocolateBars =  ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, e){
  newArray = [e,...array]
  return newrray
}
function destructivelyAddElementToBeginningOfArray(array, e){
  array.unshift(e)
  return array
}
function addElementToEndOfArray(array, e){
  var newArray = [...array,e]
  return newArray
}
function destructivelyAddElementToEndOfArray(array, e){
  array.push(e)
  return array
}
function accessElementInArray(array, i){
  return array.index(i)
}
function destructivelyRemoveElementFromBeginingOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array{
  array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array{
  array.push()
  return array
}
function removeElementFromEndOfArray(array){
  array.slice(0, array.length - 1)
  return array
}
