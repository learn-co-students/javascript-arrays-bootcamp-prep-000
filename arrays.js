var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
const array = [1];

function addElementToBeginningOfArray(array, element) {
  return [element,...array];
}
addElementToBeginningOfArray(array, "foo");

function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element);
return array;
}
destructivelyAddElementToBeginningOfArray(array, "foo");

function addElementToEndOfArray(array, element) {
 return array.concat([element]);
}
addElementToEndOfArray(array,'foo');

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
destructivelyAddElementToEndOfArray(array, "foo");

function accessElementInArray(array, index) {
  return array[index];
}
accessElementInArray([1,2,3], 2);

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift();
    return array;
}
destructivelyRemoveElementFromBeginningOfArray([1,2,3]);

function removeElementFromBeginningOfArray(array) {
return array.slice(1,array.length);
}
removeElementFromBeginningOfArray([1,2,3]);

function destructivelyRemoveElementFromEndOfArray(array) {
array.pop();
return array;
}
destructivelyRemoveElementFromEndOfArray([1,2,3]);

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1);
}
removeElementFromEndOfArray([1,2,3]);
