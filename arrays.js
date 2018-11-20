var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (arr, elem) {
  let newArr = arr.slice()
  newArr.unshift(elem)
  return newArr;
}

function destructivelyAddElementToBeginningOfArray (arr, elem) {
  arr.unshift(elem)
  return arr;
}

function addElementToEndOfArray (arr, elem) {
  let newArr = arr.slice()
  newArr.push(elem)
  return newArr;
}

function destructivelyAddElementToEndOfArray (arr, elem) {
  arr.push(elem)
  return arr;
}

function accessElementInArray (arr, idx) {
  return arr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift(1);
  return arr
}

function removeElementFromBeginningOfArray (arr) {
  return arr.slice(1);
}
function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray (arr) {
  return arr.slice(0, arr.length-1)
}