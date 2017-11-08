var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, ele) {
  var newArray = [ele, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
  return arr;
}

function addElementToEndOfArray(arr, ele) {
  var newArray = [...arr, ele];
  return newArray;
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  var arrayWithFirstElementRemoved = arr.slice(1);
  return arrayWithFirstElementRemoved;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  var arrayWithLastElementRemoved = arr.slice(0, arr.length - 1);
  return arrayWithLastElementRemoved;
}
