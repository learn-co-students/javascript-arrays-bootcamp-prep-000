var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, str) {
    var newArr = [str, ...arr];
    return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, str) {
  arr.unshift(str);
  return arr;
}

function addElementToEndOfArray(arr, str) {
  var newArr = [...arr, str];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, str) {
  arr.push(str);
  return arr;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
