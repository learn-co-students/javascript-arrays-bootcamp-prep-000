var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//create array of an ordered list of chocolate Bars//
function addElementToBeginningOfArray(chocolateBars, newString){
  return [newString, ...chocolateBars];
}
//creates a new string with the new element added to the beginning of the original array //
function destructivelyAddElementToBeginningOfArray(chocolateBars, newString){
  chocolateBars.unshift(newString);
  return chocolateBars;
}
//unshift adds elements to the beginning of the array //
function addElementToEndOfArray(chocolateBars, newString){
  return [...chocolateBars, newString];
}
//creates a new string by adding a new element to the end of the original array//
function destructivelyAddElementToEndOfArray(chocolateBars, newString){
  chocolateBars.push(newString);
  return chocolateBars;
}
//push adds an element to the end of the array //
function accessElementInArray(array, index){
  return array[index];
}
//arrays are 0-indexed and you can access a specific value w/ the name[index]//
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}
//shift removes from the beginning of the array //

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}
//slice creates a new array by removing an element of the original array//
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}
//pop removes an element from the end of an array //
function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
//to slice from the end, use .length -1 //
