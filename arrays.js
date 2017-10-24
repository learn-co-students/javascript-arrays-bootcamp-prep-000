var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [1, 2, 3]
function addElementToBeginningOfArray(array, element) {
  return [element,...array];
    const newArray = [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift("foo")
   return array
}

function addElementToEndOfArray (array, element) {
  return [...array, element];
    const newArray = [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
    array.push("foo")
  return array
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift()
  return array
}
function  removeElementFromBeginningOfArray(array) {
     array.slice(1)
     return sliceArray = array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray (array) {
    array.pop()
  return array
}
function removeElementFromEndOfArray (array) {
  return array.slice(0, -1)
}
