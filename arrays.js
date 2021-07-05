var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array, element) {
  return ([element, ...array]);
  // adds "element" to the beginning of the passed array but does NOT mutate the underlying array 
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
  // adds "element" to the beginning of the passed array and DOES mutate the underlying array 
}

function addElementToEndOfArray(array, element) {
  return ([...array, element]); 
  // adds "element" to the end of the passed array but does NOT mutate the underlying array 
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
  // adds "element" to the end of the passed array and DOES mutate the underlying array
}

function accessElementInArray(array, index) {
  return array[index];
  // returns the element at the "index" position of the passed array 
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
  // removes first element from passed array and DOES mutate underlying array 
}

function removeElementFromBeginningOfArray(array) {
  return (array.slice(1));
  // removes first element from passed array but does NOT mutate underlying array 
  // to remove last element using slice, go from 0 to array.length - 1 
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(); 
  return array;
  // removes last element from passed array and DOES mutate underlying array
}

function removeElementFromEndOfArray(array) {
  return (array.slice(0, array.length - 1));  
  // removes the last element from passed array but does NOT mutate underlying array
}
