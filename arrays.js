var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(chocolateBars) {
  chocolateBars = ["foo", ...chocolateBars];
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars) {
  chocolateBars.unshift("foo");
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars) {
  chocolateBars = [...chocolateBars, "foo"];
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars) {
  chocolateBars.push("foo");
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index ) {
  return chocolateBars[2];
}

///
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0);
  return array;
}
///
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

///
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
///
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1);
}

