var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, number){
  return [number, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, number){
  array.unshift(number);
  return array;
}
function addElementToEndOfArray(array,number){
  return [...array, number];
}
function destructivelyAddElementToEndOfArray(array, number){
  array.push(number);
  return array;
}
function accessElementInArray(array, number){
  return array[number];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
