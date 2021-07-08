chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element) {
  var tempArr = arr.slice();
  tempArr.unshift(element)
  return tempArr
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, element) {
  var tempArr = arr.slice()
  tempArr.push(element)
  return tempArr
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  var tempArr = arr.slice()
  tempArr.pop()
  return tempArr
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.splice(0,1)
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  var tempArr = arr.slice(1);
  return tempArr;
}