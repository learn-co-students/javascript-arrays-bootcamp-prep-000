var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);



function addElementToBeginningOfArray(array, element) {
  const always = [...array];
  console.log(always.unshift(element));
  return always;
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  var x = array.unshift(element);
  console.log("Result:",x);
  return array;
}

function addElementToEndOfArray(array, element) {
  var x = [...array];
  console.log(x.push(element));
  return x;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var x = array.push(element);
  console.log("Result:", x);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  console.log(array.shift());
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  console.log(array.pop());
  return array;
}

function removeElementFromEndOfArray(array) {
  var x = array.slice(0,array.length - 1);
  return x;
}
