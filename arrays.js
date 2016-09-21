// there are 10 things/tasks to do, each one will be marked with a number (1 to 8)
// 1
var chocolateBars
chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

/*2     function take two parameters, an array and an element to add to the
 beginning of the array, and both functions should add the element to the
  beginning of the array and then return the whole array, it should return a
   new array and not modify the original*/
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
  }

//3 this function should mutate an array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

//4 this function should not change an array
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

//5 this function should mutate an array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

/*6 The function should accept an array and an index and return the element
at that index.*/
function accessElementInArray(array, index) {
  return (array[index]);
}

/*7  function should then return the entire array, and it should mutate
 the array*/
function distructivelyRemoveElementFromBeginningOfArray(array) {
  array.slice(1);
  return array;
}

/*8 function, that takes an array as its only argument and removes
the first element. Your function should then return the entire array,
and it should not mutate the underlying array */
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

/*9 function takes an array as its only argument and removes the last element.
 Your function should return the entire array, and it should mutate the array. */
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

/*10 takes an array as its only argument and removes the last element.
Your function should return the entire array, and it should not mutate
the array.*/
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
