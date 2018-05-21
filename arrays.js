var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(ar, el) {
  var newAr = [el, ...ar];
  return newAr;
}

function destructivelyAddElementToBeginningOfArray(ar, el) {
  ar.unshift(el);
  return ar;
}

function addElementToEndOfArray(ar, el) {
  var newAr = [...ar, el];
  return newAr;
}

function destructivelyAddElementToEndOfArray(ar, el) {
  ar.push(el);
  return ar;
}

function accessElementInArray(ar, i) {
  return ar[i];
}

function destructivelyRemoveElementFromBeginningOfArray(ar) {
  ar.shift();
  return ar;
}

function removeElementFromBeginningOfArray(ar) {
  var newAr = ar.slice(1);
  return newAr;
}

function destructivelyRemoveElementFromEndOfArray(ar) {
  ar.pop();
  return ar;
}

function removeElementFromEndOfArray(ar) {
  var newAr = ar.slice(0, ar.length - 1);
  return newAr;
}



















