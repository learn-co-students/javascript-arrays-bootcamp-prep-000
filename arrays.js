var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
//Do not modify original array
function addElementToBeginningOfArray(array, element) {
array = [element, ...array] 
return array
}
//Alter original array
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
  array = [...array, element]
  return array
}
//destructive methods mutate underlying array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array 
}
//Don't mutate underlying array
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array 
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
//splice method takes an index as 1st arg, the number of elements to remove as 2nd, and any number of elements to add as any args after the 2nd (all are optional)
function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}