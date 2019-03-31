/* Task 1: In `arrays.js`, define a variable called `chocolateBars`. Its value should be an array of the strings `snickers`, `hundred grand`, `kitkat`, and `skittles`. */

var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

/*
Task 2: In `arrays.js`, define two functions, `addElementToBeginningOfArray` and `destructivelyAddElementToBeginningOfArray`. 
Both functions take two parameters, an array and an element to add to the beginning of the array, and both functions should add 
the element to the beginning of the array and then return the whole array. The destructive function, 
`destructivelyAddElementToBeginningOfArray`, should alter the original array that's passed in; `addElementToBeginningOfArray`, 
on the other hand, should return a new array **and not modify the original**.
*/
function destructivelyAddElementToBeginningOfArray(cat, dog) {
  cat.unshift(dog);
  return cat;
}

function addElementToBeginningOfArray(groceries, banana) {
  var moreGroceries = [banana, ...groceries];
  return moreGroceries;
}


/*
Task 3: Define two more functions, `addElementToEndOfArray` and `destructivelyAddElementToEndOfArray`. These functions also take two 
arguments, an array and an element to add to the end of the array. `addElementToEndOfArray` **should not** alter the original array; 
`destructivelyAddElementToEndOfArray` **should** alter the original array.
*/

function addElementToEndOfArray(cup, straw) {
  var moreCups = [...cup, straw];
  return moreCups;
}

function destructivelyAddElementToEndOfArray(paper, pencil) {
  paper.push(pencil);
  return paper;
}

/* Task 4: Define a function in `arrays.js` called `accessElementInArray`. The function should accept an array and an index and 
return the element at that index.
*/
function accessElementInArray(arr, element) {
    return arr[element];
}

/* Task 5: Define a function in `arrays.js` called `destructivelyRemoveElementFromBeginningOfArray` that takes an array as its only 
argument and removes the first element. Your function should then return the entire array, and it **should** mutate the array.
*/
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

/* Task 6: Define a function in `arrays.js` called `removeElementFromBeginningOfArray`. It takes an `array` as its only argument. 
The function should remove the first element in the array. This function should return the _entire_ array in the same line, and it 
**should not** mutate the original array.
*/
function removeElementFromBeginningOfArray(arr3) {
  arr3 = arr3.slice(1);
  return arr3;
}

/* Task 7: Define a function in `arrays.js` called `destructivelyRemoveElementFromEndOfArray` that takes an array as its only argument 
and removes the last element. Your function should return the entire array, and it **should** mutate the array.
*/
function destructivelyRemoveElementFromEndOfArray(arr4) {
  arr4.pop();
  return arr4
}

/* Task 8: Define a function in `arrays.js` called `removeElementFromEndOfArray` that takes an array as its only argument and 
removes the last element. Your function should return the array without the last element, and it **should not** mutate the original array.
*/
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}

