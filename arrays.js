var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a,b) {
  var newArray = [b, ...a];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(a,b) {
  a.unshift(b);
  return a
}

function addElementToEndOfArray(a,b) {
  var newArray = [...a, b];
  return newArray
}

function destructivelyAddElementToEndOfArray(a,b) {
  a.push(b);
  return a
}

function accessElementInArray(a,b) {
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
  return a
}

function removeElementFromBeginningOfArray(a) {
  var newArray = a.slice(1);
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a
}

function removeElementFromEndOfArray(a) {
  var newArray = a.slice(0, a.length - 1);
  return newArray
}