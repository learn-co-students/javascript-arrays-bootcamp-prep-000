var chocolateBars =['snickers','hundred grand', 'kitkat','skittles'];

function addElementToBeginningOfArray(ar,el) {
  ar.unshift(el);
  return ar;
}

function addElementToEndOfArray(ar, el) {
  ar.push(el);
  return ar;

}

function removeElementFromEndOfArray(ar,el) {
  ar.pop();
  return ar;
}

function accessElementInArray(ar,ind) {
  return ar[ind];
}

function destructivelyAddElementToBeginningOfArray(ar, el) {
  ar.unshift(el);
  return ar;
}

function destructivelyAddElementToEndOfArray(ar, el) {
  ar.push(el);
  return ar;
}

function removeElementFromBeginningOfArray(ar) {
  ar.shift();
  return ar;
}
