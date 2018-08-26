var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  return [b, ...a]
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a.unshift(b);
  return a
}

function addElementToEndOfArray(a, b) {
  c = [...a, b]
  return c
}

function destructivelyAddElementToEndOfArray(a, b) {
  a.push(b);
  return a
}

function accessElementInArray(a, b) {
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
  return a
}

function removeElementFromBeginningOfArray(a) {
  z = a.slice(1);
  return z
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a
}

function removeElementFromEndOfArray(a) {
  z = a.slice(0, a.length -1);
  return z
}