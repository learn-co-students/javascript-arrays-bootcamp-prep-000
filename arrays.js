var chocolateBars = [
  "snickers",
  "hundred grand",
  "kit kat",
  "skittles"
];
function addElementToBeginningOfArray (array, element) {
  return [array,...element];
}
function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift (element)
  return array;
}
fuction addElementToEndOfArray (array, element) {
  return [...array,element];
}
f
function destructivelyAddElementToEndOfArray (array, element) {
  array.push (element)
  return array;
}
fuction accessElementInArray (array, index) {
  return array [index];
}
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray (array) {
  return array.pop()
}
function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length-1)
}
