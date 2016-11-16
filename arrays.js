var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray (a, b) {
  return [b,...a];
}

function destructivelyAddElementToBeginningOfArray (a, b) {
  a.unshift(b)
  return a;
}

function addElementToEndOfArray (a, b) {
  return [...a,b];
}

function destructivelyAddElementToEndOfArray (a,b) {
  a.push(b)
  return a;
}

function accessElementInArray(array,index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(a,b) {
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray (a, b) {
  c = a.slice(1);
  return c;
}

function destructivelyRemoveElementFromEndOfArray(a, b) {
  a.pop();
  return a;
}

function removeElementFromEndOfArray (a,b) {
  c = a.slice(0 , a.length - 1);
  return c;
}
