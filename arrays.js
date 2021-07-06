var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, string) {
  return [string, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, string){
  array.unshift(string);
  return array;
  }
  
function addElementToEndOfArray(array, string) {
  return [...array, string];
}

function destructivelyAddElementToEndOfArray(array, string) {
  array.push(string); 
  return array; 
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(); 
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}