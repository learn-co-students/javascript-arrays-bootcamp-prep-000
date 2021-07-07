

//ex1
//var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//ex2
//Both functions take two parameters, an array and an element to add to the beginning of the array,
//and both functions should add the element to the beginning of the array and then return the whole array.
// The destructive function, destructivelyAddElementToBeginningOfArray, should alter the original
//array that's passed in; addElementToBeginningOfArray, on the other hand, should return a new array
//and not modify the original.



function addElementToBeginningOfArray(arrayOfThings, value) {
      return [value, ...arrayOfThings];
}

function destructivelyAddElementToBeginningOfArray(arrayOfThings, value){
      arrayOfThings.unshift(value);
      return arrayOfThings
 }

//These functions also take two arguments, an array and an element to add to the
// end of the array. addElementToEndOfArray should not alter the original array;
// destructivelyAddElementToEndOfArray should alter the original array.
 function addElementToEndOfArray(arrayOfThings, value) {
      return [...arrayOfThings,value];
 }

function destructivelyAddElementToEndOfArray(arrayOfThings, value){
      arrayOfThings.push(value);
      return arrayOfThings
}



//The function should accept an array and an index and return the element at that index.
function accessElementInArray(arrayOfThings, value){
    return arrayOfThings[value]
}

//that takes an array as its only argument and removes the first element.
//Your function should then return the entire array, and it should mutate the array.
function destructivelyRemoveElementFromBeginningOfArray(arrayOfThings){
   arrayOfThings.shift();
   return arrayOfThings

}
//that takes an array as its only argument and removes the first element.
//Your function should then return the entire array, and it should not mutate the underlying array.
 function removeElementFromBeginningOfArray(arrayOfThings){
     return arrayOfThings.slice(1);
 }

//hat takes an array as its only argument and removes the last element.
//Your function should return the entire array, and it should mutate the array.
function destructivelyRemoveElementFromEndOfArray(arrayOfThings){
     arrayOfThings.pop();
     return arrayOfThings
}
//that takes an array as its only argument and removes the last element.
//Your function should return the array without the last element, and it should not mutate the original array.
function removeElementFromEndOfArray(arrayOfThings){
       return arrayOfThings.slice(0,arrayOfThings.length-1)

}
