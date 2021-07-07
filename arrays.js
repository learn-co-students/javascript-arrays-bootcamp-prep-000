var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function accessElementInArray(array, index){
  // array
  // index
  return array[index]
}

// array = [2, 3, 4]
// element = 1

// [1, 2, 3, 4]
// [2, 3, 4, 1]

function addElementToEndOfArray(array,element){
  return [...array,element];
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
return array.slice(1);
 
}

function destructivelyRemoveElementFromEndOfArray (array,element){
  array.pop(element);
  return array
}

function removeElementFromEndOfArray(array,element){
return array.slice(0,-1);

}