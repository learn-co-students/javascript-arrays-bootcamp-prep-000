var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function destructivelyAddElementToBeginningOfArray(arr, element) {
  return arr.unshift(element);
}

function destructivelyAddElementToEndOfArray(arr, element) {
  return arr.push(element);
}

function addElementToBeginningOfArray(arr, element) {
  return [element, ...arr];
}

function addElementToEndOfArray(arr, element) {
  return [...arr, element];
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop();
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
