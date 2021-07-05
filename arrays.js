var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element) {
  return ["foo", ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars.unshift("foo");
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, element) {
  return [...chocolateBars, "foo"];
}

function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  chocolateBars.push("foo");
  return chocolateBars;
}

function accessElementInArray (chocolateBars, index) {
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars, element) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray (chocolateBars, element) {
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars, element) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0,chocolateBars.length - 1);
}
