var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  var addElementToBeginningOfArray = ['foo', 1]; 
  return addElementToBeginningOfArray; 
}
//GOOD ABOVE 

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);	  
  return array;	
}	
 function addElementToEndOfArray(array, element)  {
  return [...array, element];	 
}
 	
function destructivelyAddElementToEndOfArray(array, element) {	
  array.push(element);
  return array;
}
//GOOD ABOVE

function accessElementInArray(array, index) {
  return array[index];
}
//GOOD ABOVE

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(1);
  return array;
}
//GOOD ABOVE

function removeElementFromBeginningOfArray(array) {
 return array.slice(1);
}
//GOOD ABOVE

function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop();
 return array;
}
//GOOD ABOVE

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}











