
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// add to begining array - :)
function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}
// destructive add at beggining - :)
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift('foo')
}
//adding - :)
function addElementToEndOfArray(array, element){
  return [...array, element]
}
// destructive addition - :)
function destructivelyAddElementToEndOfArray(array, element){
  array.push('foo')
}
//accsess Element - :)
function accessElementInArray(array, element){
  return  (array[element]);
}
// destructive remove - :)
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
}
// not mutate array
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
// end remove destructivly. pop
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}
// non0mutation using length - 1 - :)
function removeElementFromEndOfArray(array, element){
  return array.slice(0, array.length - 1)
}
