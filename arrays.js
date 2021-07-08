var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// create a function that takes two parameters, an array, and an element.
// The function should add the element to the beginning of the array
// and then should return a new array without modifying the original original
// array

function addElementToBeginningOfArray(a, b) {
  var c = [b,...a];
  return c;
}

// create a function that takes two parameters, an array, and an element.
// The function should add the element to the beginning of the array
// and then return altered the original array that's passed in

function destructivelyAddElementToBeginningOfArray(a, b) {
  a.unshift(b);
  return a;
}

// create a function that takes two parameters, an array, and an element.
// The function should add the element to the end of the array and then
// should return a new array without modifying the original original array

function addElementToEndOfArray(a, b) {
  var c = [...a,b];
  return c;
}

// create a function that takes two parameters, an array, and an element.
// The function should add the element to the beginning of the array
// and then return altered the original array that's passed in

function destructivelyAddElementToEndOfArray(a, b) {
  a.push(b);
  return a;
}

// create a function that takes two paremeters, an array and an element and
// have it return the element at its defined index

function accessElementInArray(a, b) {
  return a[b];
}

// create a function that takes an array as its only argument and removes
// the first element. Your function should then return the entire array,
// and it should mutate the array

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
  return a;
}

// create a function that takes an array as its only argument and removes
// just the first element, then return the entire array

function removeElementFromBeginningOfArray(a) {
  var b = a.slice(1);
  return b;
}

// create a function that takes an array as its only argument and removes the
// the last element, then return the entire array. Mutating/destructive

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a;
}

// create a function that takes an array as its only argument and removes the
// last element, then return the array. NonMutating/Destructive

function removeElementFromEndOfArray(a) {
  var b = a.slice(0, a.length -1);
  return b;
}
