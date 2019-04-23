// arrays chocolateBars is an array containing "snickers", "hundred grand", "kitkat", and "skittles":
var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles'];
//arrays addElementToBeginningOfArray(array, element) adds an element to the beginning of an array:
function addElementToBeginningOfArray(array, element){
return [element,...array];
}

//arrays destructivelyAddElementToBeginningOfArray(array, element) adds an element to the beginning of an array:
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

//arrays addElementToEndOfArray(array, element) adds an element to the end of an array
function addElementToEndOfArray(array, element){
  return [...array,element];
}

//arrays destructivelyAddElementToEndOfArray(array, element) adds an element to the end of an array
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

//arrays accessElementInArray(array, index) accesses the element in array at the given index
function accessElementInArray(array, index){
return  array[index];
}

//arrays destructivelyRemoveElementFromBeginningOfArray(array) returns the array with the first element removed
function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift();
return array;
}

//arrays removeElementFromBeginningOfArray(array) removes the first element from the array:
function removeElementFromBeginningOfArray(array){
return  array.slice(1);
}

//arrays destructivelyRemoveElementFromEndOfArray(array) returns the array with the last element removed:
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

//arrays removeElementFromEndOfArray(array) removes the last element from the array:
function removeElementFromEndOfArray(array){
return  array.slice(0,array.length-1);
}

//arrays removeElementFromEndOfArray(array) removes the last element from the array
