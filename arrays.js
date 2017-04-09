var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(ar, el) {
  return [el, ...ar];
}

function destructivelyAddElementToBeginningOfArray(ar, el) {
  ar.unshift(el);
  return ar;
}

function addElementToEndOfArray(ar, el) {
  return [...ar, el];
}

function destructivelyAddElementToEndOfArray(ar, el) {
  ar.push(el);
  return ar;
}

function accessElementInArray(ar, index) {
  return ar[index];
}

function destructivelyRemoveElementFromBeginningOfArray(ar) {
  ar.shift();
  return ar;
}

function removeElementFromBeginningOfArray(ar) {
  return ar.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(ar) {
  ar.pop();
  return ar;
}

function removeElementFromEndOfArray(ar) {
  return ar.slice(0, ar.length - 1);
}
