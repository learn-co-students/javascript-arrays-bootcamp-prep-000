var chocolateBars = new Array('snickers', 'hundred grand', 'kitkat', 'skittles');

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element){
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

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array){
  // NOT setting variable to return slice without mutating original 
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  // .pop() is destructive to run the operation first, then return the new array
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}