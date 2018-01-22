var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var a = array;
  var newA = [element , ...a];
  return newA;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var b = array;
  b.unshift(element);
  return b;
}

function addElementToEndOfArray(array, element) {
  var c = array;
  var newC = [...c, element];
  return newC;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var d = array;
  d.push(element);
  return d;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  e = array;
  e.shift();
  return e;
}

function removeElementFromBeginningOfArray(array) {
  f = array;
  newF = f.slice(1);
  return newF;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  g = array;
  g.pop();
  return g;
}

function removeElementFromEndOfArray(array) {
  h = array;
  newH = h.slice(0, h.length - 1);
  return newH;
}