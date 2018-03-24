var chocolateBars = ['snickers','hundred grand','kitkat','skittles']
function addElementToBeginningOfArray(array, element) {
  array_new= [element, ...array]
  return array_new}
  
function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element);
return array;
}
function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array;
}
function addElementToEndOfArray(array, element) {
  array_new = [...array, element]
  return array_new;
}
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}
function removeElementFromBeginningOfArray(array) {
  array_new = array.slice(1)
  return array_new;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array;
}
function removeElementFromEndOfArray(array) {
  array_new = array.slice(0,array.length -1)
  return array_new;
  
}