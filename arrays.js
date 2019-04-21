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
//arrays destructivelyAddElementToEndOfArray(array, element) alters the original array:
//function destructivelyAddElementToEndOfArray(array, element){
//  array.push(element
function addElementToBeginningOfArray(array, element){
  [element,...array];
  return array;
}
