var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, b) {
  return [b, ...a];
}

function destructivelyAddElementToBeginningOfArray (x, y) {
  x.unshift(y);
  return x;
}

function addElementToEndOfArray (c, d) {
  return [...c, d];
}

function destructivelyAddElementToEndOfArray (e, f) {
  e.push(f);
  return e;
}

function accessElementInArray(a, b) {
  return a[b];
}

function destructivelyRemoveElementFromEndOfArray (a) {
  a.pop();
  return a;
}

function removeElementFromBeginningOfArray (a) {
  return a.slice(1);
}

function removeElementFromEndOfArray (a) {
  return a.slice(0, a.length - 1);
}

function destructivelyRemoveElementFromBeginningOfArray (a) {
  a.shift();
  return a;
}
