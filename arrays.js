var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (a, b) {
var myArray = a;
myArray.unshift(b);
return myArray;
}

function destructivelyAddElementToBeginningOfArray (a, b) {
  a.unshift(b);
  return a;
}

function addElementToEndOfArray (a,b) {
  var myArray = a;
  myArray.push(b);
  return myArray;
}

function destructivelyAddElementToEndOfArray (a,b) {
  a.push(b);
  return a;
}

function accessElementInArray(a,b){
  return (a[b]);
}

function removeElementFromBeginningOfArray (a) {
  a.shift();
  return a;
}

function removeElementFromEndOfArray(a) {
  a.pop();
  return a;
}
