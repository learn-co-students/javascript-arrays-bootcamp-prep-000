var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];
 
 function addElementToBeginningOfArray(array,element) {
   return [element, ...array]
 }
 
 function destructivelyAddElementToBeginningOfArray(array,element) {
   array.unshift(element);
   return array
 }
 
function  addElementToEndOfArray(array, element) {
  return [...array, element];
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}

