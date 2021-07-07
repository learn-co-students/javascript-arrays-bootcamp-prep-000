var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

//

var array = ['neon', 'gold', 'selenium'];
var element = 'scandium';

function addElementToBeginningOfArray(array, element) {
  array = [element,...array];
  return(array);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return(array);
}

function addElementToEndOfArray(array, element) {
  array = [...array, element];
  return(array);
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return(array);
}

//

var index = 0;

function accessElementInArray(array, index) {
  return(array[index]);
}

//

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return(array);
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return(array);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return(array);
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return(array);
}