//arrayName.push(XXX) adds an element XXX to the end of an array D
//arrayName.unshift(XXX) adds element XXX to the beginning of the array D
//arrayName.shift removes the first element D
//arrayName.slice(startPos,*endPos*) removes elements ND
//arrayName.pop removes element from the end of an array D
/*arrayName.splice(*indexInArray*,*numberOfElementsToRemove*,*numberOfElementsToAdd*
EX arrayName.splice(1, 1, 6, 7)
at index 1, remove 1 item and add 6 and add 7
*/
//["Testing", ...arrayName] Creates a new array in place

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element){
  return [element, ...chocolateBars];
}
 
function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element);
  return chocolateBars;
}
 
function addElementToEndOfArray(chocolateBars, element){
  return [...chocolateBars, element];
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, element){
  chocolateBars.push(element);
  return chocolateBars;
}
 
function accessElementInArray(array, index){
  return array[index];
}
 
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}
 
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}
 
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}
 
function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}