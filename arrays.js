function addElementToBeginningOfArray(marray, element) {
   var newarray = [element,...marray]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element)
   return array
}
function addElementToEndOfArray(array, element) {
  return newarray = [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
/*~~~~~~~~~~~~~~~~~~~~~~*/
function accessElementInArray(array,index){
  return array[index]
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function destructivelyRemoveElementFromBeginningOfArray(array, shift){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function removeElementFromEndOfArray(array){
  return array.slice(0,2)
}
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

