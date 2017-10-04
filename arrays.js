//push - adds item to end of array
//pop - removes item from end of array
//unshift - adds item to beginning of array
//shift - removes item from beginning of array

///... example
/// var cities = [nyc, la]
/// var morecity = [...cities, pa]


//slice - removes a given item(s) in an array, can also remove from end of array using negative indexing

///array = [5, 2, 3]
///array.slice(1)
///
/// array
/// [2, 3]

///use slice but include entire array in slice to
///var iceCreams = ["chocolate", "vanilla", "raspberry"]
///iceCreams.slice(0, iceCreams.length - 1) // ["chocolate", "vanilla"]
///iceCreams // ["chocolate", "vanilla", "raspberry"]
///revisit - not sure i understand this.



///splice method
///

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


//In `arrays.js`, define two functions, `addElementToBeginningOfArray` and
//`destructivelyAddElementToBeginningOfArray`. Both functions take two parameters, an array and an element to add
//to the beginning of the array,
//and both functions should add the element to the beginning of the array and then return the whole array.
//The destructive function, `destructivelyAddElementToBeginningOfArray`, should alter the original array
//that's passed in; `addElementToBeginningOfArray`, on the other hand, should return a new array
//**and not modify the original**.

function addElementToBeginningOfArray(originalArray, itemToAdd){
  //var originalArray = originalArray
  //var itemToAdd = itemToAdd
  ///var newArray = new Array(originalArray.shift(itemToAdd));
  var newArray = [itemToAdd, ...originalArray]
  //originalArray.shift(itemToAdd);
  return newArray
}

function destructivelyAddElementToBeginningOfArray(originalArray, itemToAdd) {
  //var originalArray = originalArray ///[itemToAdd, ...originalArray]
  originalArray.unshift(itemToAdd);
  return originalArray
}

//Define two more functions, `addElementToEndOfArray` and `destructivelyAddElementToEndOfArray`.
//These functions also take two arguments, an array and an element to add to the end of the array.
//`addElementToEndOfArray` **should not** alter the original array; `destructivelyAddElementToEndOfArray`
//**should** alter the original array.

function addElementToEndOfArray(originalArray, arg2) {
  var NewArray = [...originalArray, arg2];
  return NewArray
}

function destructivelyAddElementToEndOfArray(originalArray, arg2) {
  ///var originalArray = originalArray.push(arg2);
  originalArray.push(arg2);
  return originalArray
}
//Define a function in `arrays.js` called `accessElementInArray`. The function should accept an array
//and an index and return the element at that index.

function accessElementInArray(array, index) {
  return array[index]
}

///Define a function in `arrays.js` called `destructivelyRemoveElementFromBeginningOfArray` that takes an
//array as its only argument and removes the first element. Your function should then return the entire array,
//and it **should** mutate the array.

function destructivelyRemoveElementFromBeginningOfArray(arrayArg){
  arrayArg.shift();
  return arrayArg
}

//Define a function in `arrays.js` called `removeElementFromBeginningOfArray` that takes an array
//as its only argument and removes the first element. Your function should then return the entire array,
//and it **should not** mutate the underlying array.

function removeElementFromBeginningOfArray(arrayArg) {
  var arrayCopyWithChange = [...arrayArg.slice(1)];
  return arrayCopyWithChange
  //arrayCopyWithChange.slice((1, arrayArg.length - 1));
  //return arrayArg
}

//Define a function in `arrays.js` called `destructivelyRemoveElementFromEndOfArray` that takes an array
//as its only argument and removes the last element. Your function should return the entire array, and
//it **should** mutate the array.

function destructivelyRemoveElementFromEndOfArray(arg1){
  //var truncatedArray = [...arg1];
  //truncatedArray.pop();
  //return truncatedArray
  arg1.pop();
  return arg1
  //return arg1
}

//Define a function in `arrays.js` called `removeElementFromEndOfArray` that takes an array as its
//only argument and removes the last element. Your function should return the array without the last element,
//and it **should not** mutate the original array.

function removeElementFromEndOfArray(arg1) {
  var arrayMissingEnd = [...arg1];
  arrayMissingEnd.slice(0, arg1.length - 1)
  arrayMissingEnd.pop();
  return arrayMissingEnd
  //return arg1.slice(0, arg1.length - 1).pop();
}
