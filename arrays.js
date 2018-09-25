var chocolateBars = 
[
  'snickers',
  'kitkat',
  'skittles'
];
function addElementToBeginningOfArray(array, element)
{
 var array2 = [element, ...array]
 return array2;
}
function destructivelyAddElementToBeginningOfArray(array, element)
{
 array.unshift(element);
 return array;
}
function addElementToEndOfArray(array, element) {
  var array2 = [...array, element]
  return array2;
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array) {
 var array2 = array.slice(1);
  return array2;
}
function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop();
 return array;
}
function removeElementFromEndOfArray(array) {
var array2 =array.slice(0, array.length - 1);
return array2;
}