var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, b) {

c = [b, ...a];

return c;

}

function destructivelyAddElementToBeginningOfArray(a,b) {
a.unshift(b);
return a;
}

function addElementToEndOfArray(a, b) {
  c = [...a, b];
  return c;
}

function destructivelyAddElementToEndOfArray(a,b) {
  a.push(b);
  return a;
}

function accessElementInArray(a, n) {
  return a[n];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
return array;
}

function removeElementFromBeginningOfArray(array) {
newArray =  array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
newArray =  array.slice(0, array.length -1);

  return newArray;
}
