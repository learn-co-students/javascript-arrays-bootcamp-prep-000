var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, el) {
  return [el, ...arr]

}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}

function addElementToBeginningOfArray(arr, el) {
  return [...arr, el]
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.push(el);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(-1)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr;
}
