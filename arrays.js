var chocolateBars = ["snickers", "hundred grand", "kitkat skittles"]; 
function addElementToBeginningOfArray (array, item) {
  var newArray = array
  newArray.unshift(item)
  return newArray
}
function destructiveleyAddElementToBeginningOfArray (array, item){
  array.unshift(item)
  return array
}
function addElementToEndOfArray (array, item) { 
var newArray = array 
newArray.push(item)
return newArray
} 

function destructivelyAddElementToEndOfArray (array, item) {
  array.push(item)
  return array
}
function accessElementInArray (array, index) {
  return array[index]
}
function desctructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift() 
  return array 
}
function removeElementFromBeginningOfArray (array) {
  return array.slice()
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}
function removeElementFromEndOfArray (array) {
 return array.slice(0, array.length - 1)
  
}

function 