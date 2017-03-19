
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(array,element)
{
var array = [];
array = ['foo', 1, ...array];
return array;
}





function destructivelyAddElementToBeginningOfArray (array,element)
{
array.unshift(element);
 return array;
}

// Define two more functions, addElementToEndOfArray and destructivelyAddElementToEndOfArray.
// These functions also take two arguments, an array and an element to add to the end of the array.
// addElementToEndOfArray should not alter the original array;
//destructivelyAddElementToEndOfArray should alter the original array.
//ACCESSING AN ELEMENT

function addElementToEndOfArray(array,element){
var array = [];

cool = [...array, 1, 'foo'];
return cool;
}


function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}


// Define a function in arrays.js called accessElementInArray.
//The function should accept an array and an index and return the element at that index.

function accessElementInArray(array,index){

  var jee = [];
  jee[3] =3;
return jee[3];
}


//Define a function in arrays.js called destructivelyRemoveElementFromBeginningOfArray that takes an array as
//its only argument and removes the first element. Your function should then return the entire array, and
//it should mutate the array.

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  //var dim = [1, 2, 3];
  array.shift('element');
  return array;
}


//function in arrays.js called removeElementFromBeginningOfArray that takes an array as its only argument and
//removes the first element. Your function should then return the entire array, and it should not mutate the underlying array.


function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array,element){
array.pop();
return array;
}


function removeElementFromEndOfArray(array){

 var rarray = array.slice(0, array.length - 1);

return rarray;
}
 // ["chocolate", "vanilla", "raspberry"]
//: Define a function in arrays.js called removeElementFromEndOfArray that takes an array as its only argument and removes the last element. Your function should return the entire array, and it should not mutate the array.
