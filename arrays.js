var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  return  (
  [element, ... array]
  )}
  
  //addElementToBeginningOfArray ()


  
function destructivelyAddElementToBeginningOfArray (array, element) {
   array.unshift(element)
   return (array)
}
function addElementToEndOfArray ( array, element) {
  return ([...array, element])
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return (array)
}
function accessElementInArray (array, index) {
return (array[2]);
}
function destructivelyRemoveElementFromBeginningOfArray (array, index) {
array.shift([2])
return (array)
}
function removeElementFromBeginningOfArray (array) {
  return(array.slice(1));
}
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return(array)
}
function removeElementFromEndOfArray (array){
  return(array.slice(0,array.length -1))
}








