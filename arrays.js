var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(arr, startEle) {
  var nonDestructive = arr;
  nonDestructive.unshift(startEle);

  return nonDestructive;
}

function destructivelyAddElementToBeginningOfArray(arr, startEle) {
  arr.unshift(startEle);
  return arr;
}

function addElementToEndOfArray(arr, endEle) {
  var nonDestructive = arr;
  nonDestructive.push(endEle);

  return nonDestructive;
}

function destructivelyAddElementToEndOfArray(arr, endEle) {
  arr.push(endEle);
  return arr;
}

function accessElementInArray(arr, idx) {
  return arr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  var removed = arr.slice(1);
  return removed;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  var removed = arr.slice(0, arr.length - 1);
  return removed;
}
