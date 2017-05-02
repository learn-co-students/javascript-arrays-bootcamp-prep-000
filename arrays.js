var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element){ // [1,2,3,4,5,6], 'foo'
  return [element, ...array] // ['foo', 1,2,3,4,5,6]
  // return (['foo', 1])
}
function destructivelyAddElementToBeginningOfArray(array, element) { // destructivelyAddElementToBeginningOfArray([1], 'not foo')
  array.unshift(element);
  return array
}
function addElementToEndOfArray(array, element){
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.splice(-1, 1)
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1)
}
