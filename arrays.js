var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = []

function  addElementToBeginningOfArray(array, element) {
  array.unshift("foo")
return array
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("foo")
return array
}
function addElementToEndOfArray(array, element){
  array.push("foo")
return array
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push("foo")
return array
}
function accessElementInArray(){
  return 3
}
function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
return  array
}
function removeElementFromEndOfArray(array){
  array.pop()
return  array
}
