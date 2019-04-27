function addElementToBeginningOfArray (arr, el) {
  return [el, ...arr];
}

function destructivelyAddElementToBeginningOfArray (arr, el) {
    arr.unshift(el);
    return arr;
}

function addElementToEndOfArray (arr, el) {
  return [...arr, el];
}

function destructivelyAddElementToEndOfArray (arr, el) {
    arr.push(el);
    return arr;
}

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function accessElementInArray (arr, i) {
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray (arr) {
  return arr.slice(1, arr.length)
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop();
  return arr;
}
function removeElementFromEndOfArray (arr) {
  return arr.slice(0, arr.length - 1)
}