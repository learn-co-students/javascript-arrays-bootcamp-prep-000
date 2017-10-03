/* 
1. Sefine a variable called chocolateBars. Its value should be an array of strings snickers, hundred grand, kitkat, and skittles.
*/
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

/* 
1. Declare a function named addElementToBeginningOfArray
2. Function accepts 2 parameters named array & element, whose values are an array and element. 
3. When call function, return new array with element added to front, and not modify the original.
*/
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

/* 
1. Declare a function named destructivelyAddElementToBeginningOfArray.
2. Function accepts 2 parameters named array & element, whose values are an array and element. 
3. When call function, return original array with element added to front.
*/
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

/* 
1. Declare a function named addElementToEndOfArray.
2. Function accepts 2 parameters named array & element, whose values are an array and element. 
3. When call function, return return new array with element added to back, and not modify the original.
*/
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

/* 
1. Declare a function named destructivelyAddElementToEndOfArray.
2. Function accepts 2 parameters named array & element, whose values are an array and element. 
3. When call function, return original array with element added to back.
*/
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}


/* 
1. Declare a function named accessElementInArray.
2. Function accepts 2 parameters named array, index, whose values are array and number.
3. When call function, return the element at that index.
*/
function accessElementInArray(array, index) {
  return array [index];
}

/* 
1. Declare a function named destructivelyRemoveElementFromBeginningOfArray.
2. Function accepts parameter named array, whose value is an array.
3. When call function, return array without first element.
*/
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

/* 
1. Declare a function named removeElementFromBeginningOfArray.
2. Function accepts parameter named array, whose value is an array.
3. When call function, return new array without first element.
*/
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

/* 
1. Declare a function named destructivelyRemoveElementFromEndOfArray.
2. Function accepts parameter named array, whose value is an array.
3. When call function, return array without first element.
*/
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

/* 
1. Declare a function named removeElementFromEndOfArray.
2. Function accepts parameter named, whose value is an array.
3. When call function, return the array without the last element, and it should not mutate the original array.
*/
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
