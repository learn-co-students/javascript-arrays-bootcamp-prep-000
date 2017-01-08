var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
//return a new array and not modify the original.
function addElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}
//alter the original array that's passed in
function destructivelyAddElementToBeginningOfArray(array, element){
var newArray = array.unshift(element)
return array
}
//should not alter the original array
function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}
//should alter the original array
function destructivelyAddElementToEndOfArray(array, element){
  var newArray = array.push(element)
  return array
}
function accessElementInArray(array, index){
  return array[index]
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function removeElementFromEndOfArray(array){
  array.pop()
  return array
}
