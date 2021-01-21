var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var addedChocolateBar = "foo";

function addElementToBeginningOfArray(chocolateBars, addedChocolateBar) {
  var moreChocolateBars = [addedChocolateBar,...chocolateBars]
  return moreChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, addedChocolateBar) {
  chocolateBars.unshift(addedChocolateBar);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, addedChocolateBar) {
  var moreChocolateBars = [...chocolateBars,addedChocolateBar]
  return moreChocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, addedChocolateBar) {
  chocolateBars.push(addedChocolateBar);
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray (chocolateBars) {
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(0, chocolateBars.length - 1);
  return chocolateBars;
}