var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  newarray = [element, ...array]
  return newarray 
};

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array 
};

function addElementToEndOfArray(array, element){
newarray = [...array, element]
  return newarray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array 
}

function accessElementInArray(array, n){
  return array[n]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array 
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1)
  return array
}