var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var newArrayEndOf = [...array, element];
  return newArrayEndOf;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function removeElementFromBeginningOfArray(array){
  var slicedArray = array.slice(1);
  return slicedArray;
}

function removeElementFromEndOfArray(array){
  var slicedEndOfArray = array.slice(0, array.length-1);
  return slicedEndOfArray;
}
