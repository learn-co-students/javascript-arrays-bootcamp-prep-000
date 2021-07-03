var chocolateBars =  ["snickers", "hundred grand", "skittles"];// create array

function addElementToBeginningOfArray(array,elementBeginning) {// untouched original array
  return [elementBeginning, ...array];
} 

function destructivelyAddElementToBeginningOfArray(array,elementBeginning) {// alter the original array
  array.unshift(elementBeginning);
  return array;
}


function addElementToEndOfArray(array,elementEnd) {
  return [...array, elementEnd];
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, elementAddEnd) {
  return array[elementAddEnd];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array;
}

