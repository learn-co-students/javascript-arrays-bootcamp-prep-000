var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, elem) {
  arr = [elem, ...arr]
  return arr
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
    arr.unshift(elem);
    return arr
}

function addElementToEndOfArray(arr, elem) {
  arr = [...arr, elem]
  return arr
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem);
  return arr
}

function accessElementInArray(arr, index) {
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  var newArr = arr.slice(1)
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr

}

function removeElementFromEndOfArray(arr) {
  var newArr = arr.slice(0, arr.length -1)
  return newArr
}
