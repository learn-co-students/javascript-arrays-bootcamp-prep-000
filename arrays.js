
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  chocolateBars = array ;
  return ["foo", ...array] ;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars = array
  return array = ["foo", ...array] ;
}

function addElementToEndOfArray(array, element) {
  chocolateBars = array ;
  return [...array, "foo"] ;
}

function destructivelyAddElementToEndOfArray(array, element){
  return chocolateBars = [...chocolateBars, "foo"] ;
}

function accessElementInArray(array, index){
  chocolateBars = array ;
  return array[2] = 3 ;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  chocolateBars = array ;
  array.shift()
  return array ;
}

function removeElementFromBeginningOfArray(array){
  chocolateBars = array ;
  return array.slice(-2) ;
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  chocolateBars = array ;
  array.pop() ;
  return array
}

function removeElementFromEndOfArray(array){
  chocolateBars = array
  return array ;
}
