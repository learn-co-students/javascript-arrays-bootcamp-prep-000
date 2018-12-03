var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, foo) {
  
  return ["foo", ...chocolateBars]
  
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) { 
chocolateBars.unshift(foo); 
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, foo) {
  return [...chocolateBars, "foo"]
}
function destructivelyAddElementToEndOfArray(chocolateBars, foo) {
  chocolateBars.push(foo);
  return chocolateBars;
}
function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  
  return array.slice(1) 
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
  
}
