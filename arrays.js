var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element){
  return [element, ...chocolateBars ];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
 return destructivelyAddElementToBeginningOfArray[...chocolateBars, element];
}
function addElementToEndOfArray(chocolateBars, element){
  return [...chocolateBars, element];
}
function destructivelyAddElementToEndOfArray(chocolateBars, element){
  chocolateBars.push(element);
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[2];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.shift();
}
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  return chocolateBars.pop();
}
function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length -1);
}
