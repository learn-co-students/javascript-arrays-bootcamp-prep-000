var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

/*chocolateBars.push("M and Ms")

console.log(choclateBars)

chocolateBars.unshift("Bees Knees")

console.log(chocolateBars) */

function addElementToBeginningOfArray(array, element){
  var firstArray = array;
  var secondArray = [element, ...firstArray];
  return secondArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var myArray = array;
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var thirdArray = array;
  fourthArray = [...thirdArray, element];
  return fourthArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  var thisArray = array;
  thisArray.push(element);
  return thisArray;
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
  return array.slice(0, array.length - 1)
}
