var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(Array, Element) {
  return [Element,...Array];
}
function destructivelyAddElementToBeginningOfArray(Array, Element) {
  Array.unshift(Element);
  return Array;
}
function addElementToEndOfArray(Array, Element) {
  return [...Array, Element];
}
function destructivelyAddElementToEndOfArray(Array, Element) {
  Array.push(Element);
  return Array;
}
function accessElementInArray(Array,Index) {
  return Array[Index];
}
function destructivelyRemoveElementFromBeginningOfArray(Array) {
  Array.shift();
  return Array;
}
function removeElementFromBeginningOfArray(Array) {
  return Array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(Array) {
  Array.pop();
  return Array;
}
function removeElementFromEndOfArray(Array) {
  return Array.slice(0, length - 1);
}
