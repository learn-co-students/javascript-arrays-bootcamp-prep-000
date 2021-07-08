var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element) {
  newarray = array
  array.unshift(element);
  return newarray;
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element) {
  newarray = array
  newarray.push(element);
  return newarray;
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element);
  return array;
}

function accessElementInArray(array,index) {
  var m = array[String(index)];
  return m;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  newarray = array;
  newarray.shift();
  return newarray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  //array.slice(array.length-1);
  newarray = array
  newarray.pop();
  return newarray;
}