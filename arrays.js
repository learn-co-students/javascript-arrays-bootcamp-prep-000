var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(array, element) {
  var new_array = [];
  new_array.push(element);
  for (var i = 0; i < array.length; i++) {
    var ele = array[i];
    new_array.push(ele);
  }
  return new_array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
   return array;
}

function addElementToEndOfArray(array, element) {
  var new_array = [];
  for (var i = 0; i < array.length; i++) {
    var ele = array[i];
    new_array.push(ele);
  }
  new_array.push(element);
  return new_array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  for (var i = 0; i < array.length; i++) {
    if (i == index) {
      return array[i];
    }
  }
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var new_array = [];
  for (var i = 1; i < array.length; i++) {
    var ele = array[i];
    new_array.push(ele);
  }
  return new_array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
   var new_array = [];
  for (var i = 0; i < (array.length - 1); i++) {
    var ele = array[i];
    new_array.push(ele);
  }
  return new_array;
}