var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element) {
  //does not modify original  
  return [element, ...array];
}
  
function destructivelyAddElementToBeginningOfArray(array, element) {
  //alters original arrray
  array.unshift(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}
  
function addElementToEndOfArray(array, string) {
    //does not alter 
    return [...array, string];
}
  
function destructivelyAddElementToEndOfArray(array, element) {
    //alters
    array.push(element);
    return array;
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
