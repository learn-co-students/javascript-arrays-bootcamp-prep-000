
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  array.unshift(element)
}

function addElementToBeginningOfArray(array, element){
  array = [1]
  array.unshift('foo')
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

 function accessElementInArray(array, index){
   return array[index]
}

function removeElementFromBeginningOfArray(array){
  var array = [1,2,3]
   newArray = array.slice(1);
   return newArray
}
function removeElementFromEndOfArray(array){
  var array = [1,2,3]
   array.pop()
   return array
}
