var chocolateBars = ["snickers", "hundred grand", 
"kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  var myArray = array;
  return [element,...myArray];
}

function destructivelyAddElementToBeginningOfArray(array, x) {
  const myElement = array.unshift(x);
  return array;
}

function addElementToEndOfArray(array,element) {
  var myArray = array;
  return [...myArray, element];
}

function destructivelyAddElementToEndOfArray(array, x) {
  var myElement = array.push(x);
  return array;
}

function accessElementInArray(my_nums,index) {
  var myArray = my_nums;
  return myArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var myElement = array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var myArray = array;
  return myArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var myElement = array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var myArray = array;
  return myArray.slice(0, myArray.length -1);
}

