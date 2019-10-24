var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
// function() {return chocolateBars};
function addElementToBeginningOfArray(array, element) 
  {newElement = [element, 
    ...array]
    return newElement};
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array};
function addElementToEndOfArray(array, element) {
  newElement = [...array, 
    element]
  return newElement};
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array};
function accessElementInArray(array, index) {
  return array[index]};
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array};
function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1)
  return newArray};
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array};
function removeElementFromEndOfArray(array) {
  newArray = array.slice(0, array.length - 1)
  return newArray};
