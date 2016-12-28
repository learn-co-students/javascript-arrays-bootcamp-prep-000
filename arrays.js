var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray (a, e) {
  return [e, ...a];
}

function addElementToEndOfArray (a, e) {
  return [...a, e];
}

function removeElementFromBeginningOfArray (a, e) {
  return a.slice(1);
}

function destructivelyRemoveElementFromBeginningOfArray (a, e) {
  return a.shift(e);
}

function destructivelyRemoveElementFromEndOfArray (a, e) {
  return a.pop(e);
}

function removeElementFromEndOfArray (a, e) {
  return a.slice(0, a.length - 1);
}

function accessElementInArray (a, i) {
  return a[i];
}

function destructivelyAddElementToBeginningOfArray (a, e) {
  a.unshift(e);
  return a;
}

function destructivelyAddElementToEndOfArray (a, e) {
  a.push(e);
  return a;
}
