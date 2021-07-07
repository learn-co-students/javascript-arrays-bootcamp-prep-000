var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];

chocolateBars;

function addElementToBeginningOfArray(array, elementToAdd) {
  var myArray = [elementToAdd, ...array] ;
  return myArray;
  
}

addElementToBeginningOfArray([1], 'foo');

function destructivelyAddElementToBeginningOfArray(array, elementToAdd) {
 array.unshift(elementToAdd);
 return array;
}

destructivelyAddElementToBeginningOfArray([1], 'foo');

function addElementToEndOfArray(array, elementToAdd) {
  var myArray = [...array, elementToAdd] ;
  return myArray;
}

addElementToEndOfArray(1, 'foo');

function destructivelyAddElementToEndOfArray(array, elementToAdd) {
  array.push(elementToAdd);
  return array;
}

destructivelyAddElementToEndOfArray([1], 'foo');

function accessElementInArray(array, index) {
  var myArray = array;
  return myArray[index];
}

accessElementInArray([1, 2, 3], 2);

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var myArray = array;
  myArray.shift();
  return myArray;
}

destructivelyRemoveElementFromBeginningOfArray([1, 2, 3]);

function removeElementFromBeginningOfArray(array) {
  var myArray = array;
  return myArray.slice(-2);
  
}

removeElementFromBeginningOfArray([1, 2, 3]);

function destructivelyRemoveElementFromEndOfArray(array) {
  
  array.pop();
  return array;
}

destructivelyRemoveElementFromEndOfArray([ 1, 2, 3 ]);

function removeElementFromEndOfArray(array) {
  var myArray = array;
  return myArray.slice(0, myArray.length - 1);
  
}

removeElementFromEndOfArray([1, 2, 3]);