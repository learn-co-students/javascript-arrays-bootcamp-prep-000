var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  /*/array.unshift(element)
  return array;*/
  
  begArray = [element, ...array]
  return begArray
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element) 
  return array;
}

function addElementToEndOfArray(array, element) {
  var endArray = [...array, element];
  return endArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array) {
  sliceArray = array.slice(1)
  return sliceArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array;
}
 function removeElementFromEndOfArray(array) {
    remArray = array.slice(0, array.length -1)
   //return array;
   return remArray;
 }
 
