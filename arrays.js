//Test 1: Practice Making an Array
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]

//Test 2 and 3: Adding to Beginning Without Changing the Original Array
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

addElementToBeginningOfArray([1], 'foo');

//Test 4 and 5: Adding to Beginning With Changing the Original Array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

destructivelyAddElementToBeginningOfArray([1], 'foo');

//Test 6 and 7: Adding to End Without Changing the Original Array
function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

addElementToEndOfArray([1], 'foo');

//Test 8 and 9: Adding to End With Changing the Original Array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

destructivelyAddElementToEndOfArray([1], 'foo');

//Test 10: Return Element At Specific Array Index
function accessElementInArray(array, index) {
  return array[index];
}

//Test 11 and 12: Remove from Beginning With Changing the Original Array
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

//Test 13 and 14: Remove from Beginning Without Changing the Original Array
function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  return newArray;
}

removeElementFromBeginningOfArray([1,2,3]);

//Test 15 and 16: Remove from End With Changing the Original Array
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

//Test 17 and 18: Remove from End Without Changing the Original Array
function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}

removeElementFromEndOfArray([1,2,3,]);
















