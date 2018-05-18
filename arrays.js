var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var cities = ["New York", "San Fransico"];

const moreCities = ["Boston", ...cities];
const towns = ["Shrewsbury", ...cities, "Wilton", "Norfolk"]

console.log(cities);
console.log(moreCities);
console.log(towns)

let addElementToBeginningOfArray = function(array, element) {
  let  newArray = (array, ...element);
  return;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  let x = array.unshift(element);
  return;
}
function addElementToEndOfArray(array, element) {
  let x = [...array, element]
  return;
}

function destructivelyAddElementToEndOfArray(array, element) {
  let x = array.push(element);
  return;
}

function accessElementInArray(array, index) {
  let x = (array[index]);
  return;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  let x = array.shift(element);
  return;
}

function removeElementFromBeginningOfArray(array) {
  let x = array.slice(0);
  return;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  let x = array.pop();
  return x;
}

function removeElementFromEndOfArray(array) {
  let x = array.slice(0, array.length - 1);
  return x;
}

removeElementFromBeginningOfArray(chocolateBars);
console.log(chocolateBars);

console.log(Object.keys([1, 2, 3]));

