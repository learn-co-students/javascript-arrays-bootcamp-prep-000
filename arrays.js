var chocolateBars = ['snickers','hundred grand','kitkat','skittles']
function addElementToBeginningOfArray(element,array){
  return [element,...array]
}
function destructivelyAddElementToBeginningOfArray(element,array){
  array = [element,...array]
  return array
}
function addElementToEndOfArray(element,array) {
  return [...array,element]
}
function destructivelyAddElementToEndOfArray(element,array) {
  array = [...array,element]
  return array
}
function accessElementInArray(array,index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1)
}
