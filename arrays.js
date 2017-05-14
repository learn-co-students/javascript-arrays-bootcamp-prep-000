var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var moreChocolate = ["twix"];

function destructivelyAddElementToBeginningOfArray(chocolateBars, moreChocolate) {
  return chocolateBars.unshift(moreChocolate)
}


function addElementToBeginningOfArray(chocolateBars, moreChocolate) {
  return [moreChocolate, ...chocolateBars];
}

function addElementToEndOfArray(chocolateBars, moreChocolate) {
  return [...chocolateBars, moreChocolate];
}

function destructivelyAddElementEndOfArray(chocolateBars, moreChocolate) {
  return chocolateBars.push(moreChocolate);
}

function accessElementInArray(array, index) {
  return chocolateBars[1];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.shift(1);
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.pop(4);
}
