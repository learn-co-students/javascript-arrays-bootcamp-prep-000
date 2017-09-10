/*

****: In `arrays.js`, define a variable called `chocolateBars`.
Its value should be an array of the strings `snickers`, `hundred grand`, `kitkat`, and `skittles`.!!!!


****: In `arrays.js`, define two functions, `addElementToBeginningOfArray` and `
destructivelyAddElementToBeginningOfArray`. Both functions take two parameters,
an array and an element to add to the beginning of the array, and both functions
should add the element to the beginning of the array and then return the whole
array. The destructive function, `destructivelyAddElementToBeginningOfArray`,
should alter the original array that's passed in; `addElementToBeginningOfArray`,
on the other hand, should return a new array **and not modify the original**.!!!!

****: Define two more functions, `addElementToEndOfArray` and
`destructivelyAddElementToEndOfArray`. These functions also take two arguments,
an array and an element to add to the end of the array. `addElementToEndOfArray`
**should not** alter the original array; `destructivelyAddElementToEndOfArray`
**should** alter the original array.


****: Define a function in `arrays.js` called `accessElementInArray`.
The function should accept an array and an index and return the element at that index.


****: Define a function in `arrays.js` called `destructivelyRemoveElementFromBeginningOfArray`
that takes an array as its only argument and removes the first element.
Your function should then return the entire array, and it **should** mutate the array.


****: Define a function in `arrays.js` called `removeElementFromBeginningOfArray`
that takes an array as its only argument and removes the first element.
Your function should then return the entire array, and it **should not** mutate the underlying array.

****: Define a function in `arrays.js` called `destructivelyRemoveElementFromEndOfArray`
that takes an array as its only argument and removes the last element.
Your function should return the entire array, and it **should** mutate the array.

We can use `slice` to perform the above action without changing the underlying array.
It takes a bit more work than removing the first element, since we want the slice
from index `0` (remember, the first element is at index `0`!) to the end.
Hmmmm — what property do arrays have that can help us? `length`!

****: Define a function in `arrays.js` called `removeElementFromEndOfArray`
that takes an array as its only argument and removes the last element.
Your function should return the entire array, and it **should not** mutate the array.


*/

var chocolateBars =[`snickers`, `hundred grand`, `kitkat`, `skittles`];


function addElementToBeginningOfArray(array, element)
{
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
   array.unshift(element);
   return array;
}

function addElementToEndOfArray(array, element)
{

  var newArray = array;
  newArray.push(element);
  return newArray;

}
function destructivelyAddElementToEndOfArray(array, element)
{
  array[array.length] = element;

  return array;
}

function accessElementInArray(array, index)
{
  return array[index];

}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array ;

}

function removeElementFromBeginningOfArray(array)
{

  return array.slice(1);

}

function destructivelyRemoveElementFromEndOfArray(array)
{
    array.pop();
  return array;

}

function removeElementFromEndOfArray(array)
{
  array.splice(array.length -1, 1);
  return array;
}
