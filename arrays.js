var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var arr = []
  arr.push(element);
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var arr = [];
  for (var i = 0; i < array.length; i++){
    arr.push(array[i]);
  }
  arr.push(element);
  return arr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var arr = [];

  for (var i = 1; i < array.length; i++){
    arr.push(array[i]);
  }

  return arr;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var arr = [];

  for (var i = 0; i < array.length - 1; i++){
    arr.push(array[i]);
  }

  return arr;
}
