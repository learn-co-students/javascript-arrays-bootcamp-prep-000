//create new array chocolateBars with items snickrs, jundre grand, kitkat and skittles  
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
//Add element to beginning of array without changing array
function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
//add element to beginning of array changing array forever
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

//add an element to the end of an array without changing array forever
function addElementToEndOfArray(array, element){
  return [...array, element];
}
//add an element to end of array changing array forever
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
//create an array that returns the array value at index
function accessElementInArray(array, index){
  return array[index];
}
//Takes an array as its only argument and removes the first element then returns array
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}
//takes array as only arument and removes an element form the beginning of the array without changing it
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

//remove element from end of array
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1);
  
}

