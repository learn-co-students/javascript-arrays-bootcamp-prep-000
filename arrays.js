var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  newArray = [...array, element]
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  var thing = array[index]
  return thing
}
function removeElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromEndOfArray(array) {
array.pop()
return array
}
