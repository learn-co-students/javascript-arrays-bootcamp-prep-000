//Problem 1
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

//Problem 2
function addElementToBeginningOfArray(x,y) {
    z = [y,...x];
    return z
}

//Problem 3
function destructivelyAddElementToBeginningOfArray(a,b) {
  a.unshift(b);
  return a;
}

//Problem 4
function addElementToEndOfArray(x,y) {
  const array = x;
  var z = [...x, y];
  return z;
}

//Problem 5
function destructivelyAddElementToEndOfArray(a,b) {
  a.push(b);
  return a;
}

//Problem 6
function accessElementInArray(a,b) {
  return a[b];
}

//Problem 7
function destructivelyRemoveElementFromBeginningOfArray(x) {
  x.shift();
  return x;
}

//Problem 8
function removeElementFromBeginningOfArray(x) {
  return x.slice(1);
}

//Problem 9
function destructivelyRemoveElementFromEndOfArray(x) {
  x.pop();
  return x;
}

//Problem 10
function removeElementFromEndOfArray(x) {
  return x.slice(0,x.length -1);
}