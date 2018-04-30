var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var candy = 'foo'
function addElementToBeginningOfArray(chocolateBars, candy){
  return [candy, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(chocolateBars, candy) {
  chocolateBars.push(candy);
  return chocolateBars;
}

function accessElementInArray(array) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop(1);
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}



