// define a variable called `chocolateBars`.
// values: `snickers`, `hundred grand`, `kitkat`, and `skittles`.

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


// functions take two parameters, an array and an element to add to the beginning of the array,
// and both functions should add the element to the beginning of the array and then return the whole array
// addElementToBeginningOfArray

// do not alter the original arrray
var addElementToBeginningOfArray = (arr, temp) => {
  return [temp, ...arr]; // spread operator
}

//alter the original array
var destructivelyAddElementToBeginningOfArray = (arr, temp) => {
  arr.unshift(temp);
  return arr;
}

// accept an array and an index and return the element at that index.
var accessElementInArray = (arr, index) => {
  return arr[index];
}

// takes an array as its only argument and removes the first element
// returns the mutated array
var destructivelyRemoveElementFromBeginningOfArray = (arr) => {
  return arr.shift();
}
// takes an array and removes the first elemennt without mutating the array
var removeElementFromBeginningOfArray = (arr) => {
  return arr.slice(1);
}


// takes an array and removes from the end of the array
// return mutated array
var destructivelyRemoveElementFromEndOfArray = (arr) => {
  return arr.pop();
}

// takes an array and removes from the end of the array
// return the array without changing the original array
var removeElementFromEndOfArray = (arr) => {
  return arr.slice(0, arr.length-1);
}

// add element to the end of the array
// do not alter the original array
var addElementToEndOfArray = (arr, temp) => {
  return [...arr, temp];
}

// add element to the end of the array
// mutate the array
var destructivelyAddElementToEndOfArray = (arr, temp) => {
  arr.push(temp);
  return arr;
}
