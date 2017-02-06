var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {


  return [element, ...array];

}

function destructivelyAddElementToBeginningOfArray (array, element) {
  // element added to begining of array
  array.unshift(element);

  return array; // whole array returned
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {

  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {

  return array.shift();
}


function removeElementFromBeginningOfArray(array) {


  return array.slice(1);
}

function destructivelyRemoveElementfromEndOfArray(array) {

  return array.pop();
}

function removeElementFromEndOfArray(array) {


  return array.slice(0, 2);
}
