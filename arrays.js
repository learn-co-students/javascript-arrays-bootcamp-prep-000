var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");

function addElementToBeginningOfArray(array, element) {
var chocolateBars = array;
chocolateBars = [element,  ...chocolateBars];
return chocolateBars; 
}
function destructivelyAddElementToBeginningOfArray(array, element) {
chocolateBars[0] = element;
  array = 1;
 return chocolateBars;
 }