var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var A = ['1','2','3'];
var b = 'b';

function addElementToBeginningOfArray(A, b) {
  return [b, ...A];
}

function destructivelyAddElementToBeginningOfArray(A, b) {
  A.unshift(b);
  return A;
}

function addElementToEndOfArray(A, b) {
  return [...A, b];
}

function destructivelyAddElementToEndOfArray(A, b) {
  A.push(b);
  return A;
}

function accessElementInArray(A) {
  return A[2];
}

function destructivelyRemoveElementFromBeginningOfArray(A) {
  A.shift();
  return A;
}

function removeElementFromBeginningOfArray(A) {
  A = A.slice(1);
  return A;
}

function destructivelyRemoveElementFromEndOfArray(A) {
  A.pop();
  return A;
}

function removeElementFromEndOfArray(A) {
  A = A.slice(0, A.length - 1);
  return A;
}
