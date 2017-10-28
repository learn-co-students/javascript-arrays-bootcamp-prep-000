var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//should return a new array
function addElementToBeginningOfArray(array,item){
 var newArray = [item,...array];
  return newArray;
}

//should modify the original array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

//should return new array
function addElementToEndOfArray(array, element){
var newArray = [...array, element]
  return newArray
}

// should modify the original array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  return array[index];
}
//should mutate original array
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}
//should make a new array
function removeElementFromBeginningOfArray(array) {
var newArray = array.slice(1)
return newArray
}
//changes original array
function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
   return array
}
//makes a new array
function removeElementFromEndOfArray (array) {
  var newArray = array.slice(0, -1);
  return newArray
}
