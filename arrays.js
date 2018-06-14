var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray([m,o,p],n) {
  var array = [m, o, p];
  return [n, ...array];
}

function destructivelyAddElementToBeginningOfArray([m,o,p],n) {
    var array = [m, o, p];
    array = [n, ...array];
    return array;
}

function addElementToEndOfArray([m,o,p],n) {
  var array = [m, o, p];
  return [...array, n];
}

function destructivelyAddElementToEndOfArray([m,o,p],n) {
    var array = [m, o, p];
    array = [...array, n];
    return array;
}

function accessElementInArray([m,o,p],n) {
  var array = [m, o, p];
  return array[n];
}

function destructivelyRemoveElementFromBeginningOfArray([m,o,p]) {
  var array = [m, o, p];
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray([m,o,p]) {
  var array = [m, o, p];
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray([m,o,p]) {
  var array = [m, o, p];
  array.pop();
  return array;
}

function removeElementFromEndOfArray([m,o,p]) {
  var array = [m, o, p];
  return array.slice(0, array.length - 1);
}