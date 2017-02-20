var chocolateBars = new Array()
chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,eleToAdd){
  var newArray = [eleToAdd,...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, eleToAdd){
  array.unshift(eleToAdd);
}

function addElementToEndOfArray(array, eleToAdd){
  var newArray = [array...eleToAdd];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array,eleToAdd){
  array.push(eleToAdd);
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift;
  return array;
}

function removeElementFromBeginningOfArray(array){
  var NewArray = array.slice(1);
  return NewArray;  
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop;
  return array;
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}