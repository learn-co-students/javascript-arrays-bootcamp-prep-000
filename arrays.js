var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
  // JS allows us to push an element onto the end of an array in the following format: varName.push("...")
  
  // JS allows us to unshift elements onto the beginning of an array in the following format: varName.unshift(...)
  
  // The actions mutate the array
 
 
// should return a new array and not modify the original 
function addElementToBeginningOfArray(array, add){
  return [add, ...array]
}


// should alter the original array that's passed in
function destructivelyAddElementToBeginningOfArray(array, add){
  
  array.unshift(add)
  return array
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}


function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}




