var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");

function addElementToBeginningOfArray(array, element) {
var chocolateBars = array;
chocolateBars = [element,  ...chocolateBars];
return chocolateBars; 
}
function destructivelyAddElementToBeginningOfArray(array, element) {
var chocolateBars = array;
chocolateBars.unshift(element);
return chocolateBars; 
 }
 function addElementToEndOfArray(array, element) {
   var chocolateBars = array;
   chocolateBars = [...chocolateBars, element];
return chocolateBars; 
 }
 function destructivelyAddElementToEndOfArray(array, element) {
   var chocolateBars = array;
   chocolateBars.push(element);
   return chocolateBars;
 }
 function accessElementInArray(array, index) {
   var chocolateBars = array;
 return index + 1;
 }
 function destructivelyRemoveElementFromBeginningOfArray(array) {
   var chocolateBars = array;
   chocolateBars.shift();
   return chocolateBars;
 }
 function removeElementFromBeginningOfArray(array) {
   var chocolateBars = array;
  chocolateBars = chocolateBars.slice(1);
   return chocolateBars;
 }
 function destructivelyRemoveElementFromEndOfArray(array) {
   var chocolateBars = array;
   chocolateBars.pop();
   return chocolateBars;
 }
 function removeElementFromEndOfArray(array) {
 var chocolateBars = array;
 chocolateBars = chocolateBars.slice(0, chocolateBars.length - 1);
 return chocolateBars;
 }