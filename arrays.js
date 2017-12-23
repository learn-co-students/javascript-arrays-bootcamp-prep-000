var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
var newArray = [element, ...array]
return newArray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var newerArray = [...array, element]
  return newerArray
}



function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  var returnedIndex = array[index]
  return returnedIndex
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift()
   return array 
}

  
function removeElementFromBeginningOfArray(array) {
  newestArray = array.slice(1)
  return newestArray
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.splice(-1)
  return array
}

function removeElementFromEndOfArray(array) {
  var newNewArray = array.slice(0, -1)
  return newNewArray

  
}

