var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  let newArray = [element, ...array]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element){
  var newArray = [...array, element]
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function removeElementFromEndOfArray(array){
  let newArray = array.slice(0, -1)
  return newArray;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift()
   return array;
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
}
