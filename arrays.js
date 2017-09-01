var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(a, e) {
  var a2 = [e, ...a];
  return a2;
}

function destructivelyAddElementToBeginningOfArray(a, e) {
  a.unshift(e);
  return a;
}

function accessElementInArray(a, i) {
  return a[i];
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a) {
  a2 = a.slice(1);
  return a2;
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a;
}

function removeElementFromEndOfArray(a) {
  a2 = a.slice(0,a.length-1);
  return a2;
}

function addElementToEndOfArray(a, e) {
  var a2 = [...a, e];
  return a2;
}

function destructivelyAddElementToEndOfArray(a, e) {
  a.push(e);
  return a;
}
