var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray (arr, elm) {
  var arr2 = [elm, ...arr];
  return arr2;
}
function destructivelyAddElementToBeginningOfArray (arr, elm) {
  arr.unshift(elm);
  return arr;
}

function addElementToEndOfArray (arr, elm) {
  var arr2 = [...arr, elm];
  return arr2;
}
function destructivelyAddElementToEndOfArray (arr, elm) {
  arr.push(elm);
  return arr;
}

function accessElementInArray (arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray (arr) {
  var arr2 = arr.slice(1);
  return arr2;
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop();
  return arr;
}
function removeElementFromEndOfArray (arr) {
  var arr2 = arr.slice(0,-1);
  return arr2;
}
