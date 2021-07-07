chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skitles'
];

function addElementToBeginningOfArray (arr, al) {
  var newArr = [al,...arr];
  return newArr
}

function destructivelyAddElementToBeginningOfArray (arr, al) {
  arr.unshift(al);
  return arr
}

function addElementToEndOfArray (arr, al) {
  var newArr = [...arr, al];
  return newArr
}

function destructivelyAddElementToEndOfArray(arr, al) {
  arr.push(al);
  return arr
}

function accessElementInArray (arr, index) {
  return arr[index]
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray (arr) {
  var newArr = arr.slice(0, arr.length -1);
  return newArr
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift();
  return arr
}

function removeElementFromBeginningOfArray (arr) {
  var newArr = arr.slice(1, arr.length)
  return newArr
}



