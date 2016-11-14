//Create an array of ingredients
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
// Define two functions to add elements to beggining of the array.
function addElementToBeginningOfArray(array, element) {
  console.log([element, ...array]);
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
//Define two functions to add element to the end of an array
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  //put the element to the end of the array
  return array;
}

//accessing element in array
function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(); //removes the beggining of the array
  return arrary; //then we want to pull the array after we removed the beggining
}

function removeElementFromBeginningOfArray(array) {
    newArray = array.slice(1); //Not at the "0" because we are telling the function to start at the one position.
  //It does not "Destroy" like shift.
  return newArray; //return the changed array
}

//now on to removing at the end of an array
function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return array;
}

function removeElementFromEndOfArray(array) {
  newArray = array.slice(0,array.length - 1);
  return newArray;
}
