var chocolateBars =  ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, e){
  newArray = [e, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, e){
  array.unshift(e)
  return array
}
function addElementToEndOfArray(array, e){
  var newArray = [...array, e]
  return newArray
}
function destructivelyAddElementToEndOfArray(array, e){
  array.push(e)
  return array
}
function accessElementInArray(array, i){
  return array[i]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1)
  return newArray
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1)
  return newArray
}
