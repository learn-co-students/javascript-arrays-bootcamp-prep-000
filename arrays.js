var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(arr, string) {
  var newArr = [string, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, string) {
  arr.unshift(string);
  return arr;
}

function addElementToEndOfArray(arr, string) {
  var newArr = [...arr, string];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, string) {
  arr.push(string);
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
  var newArr = arr.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  var newArr = arr.slice(0, arr.length - 1);
  return newArr;
}



