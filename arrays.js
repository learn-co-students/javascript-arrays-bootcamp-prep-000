chocolateBars = ["snickers", "kitkat", "hundred grand", "skittles"]

function addElementToBeginningOfArray(array, element){
  return array = [element, ...array]
}
function addElementToEndOfArray(array, element){
  return array = [...array, element]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)//array.unshift(element)
  return array
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
 }
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1)
}
function accessElementInArray(array, idx){
  return array[idx]
}
