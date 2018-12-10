var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var arr1 = ['lions', 'tigers', 'bears'];
var element0 = 'giraffes';


function addElementToBeginningOfArray (arr1, element0) {
  return [...arr1, element0]
//function should take two parameters, an array and an element to add to the beginning of the array, and should add the element to the beginning of the array and then return the whole array; should return a new array and not modify the original.
}

var arr2 = ['earth', 'wind', 'water'];
var element00 = 'fire';

function destructivelyAddElemenetToBeginningOfArray (arr2, element00) {
  arr2.unshift(element00);
  return arr2

//function should take two parameters, an array and an element to add to the beginning of the array, and should add the element to the beginning of the array and then return the whole array. Should alter the original array that's passed in
}