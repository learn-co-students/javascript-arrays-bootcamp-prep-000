
var chocolateBars = ["snickers", "hundred","kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
  return [element,...array]   // create a new array in place, rather than modifying the original one
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
 return [...array,element]
}

function destructivelyAddElementToEndOfArray(array, element){
   array.push(element)
   return array
}


function accessElementInArray (array, index) {
   return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){

  return array = array.shift()
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
   return array = array.pop()
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1)
}
