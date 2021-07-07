var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, b) {
  myArray = [b, ...a]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a.unshift(b);
  return a
}

function addElementToEndOfArray(a, b) {
  myArray = [...a, b]
  return myArray
}

function destructivelyAddElementToEndOfArray(a,b) {
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
  myArray = a.slice(1)
  return myArray
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a
}

function removeElementFromEndOfArray(a) {
  return a.slice(0, a.length - 1)
}