var chocolateBars = ["hundred grand", "snickers", "skittles", "kitkat"];
/* Note: The test for chocolateBars doesn't care about the order of its elements. That is, the above array, for some reason, is just as valid as ["snickers", "hundred grand", "kitkat", "skittles"] */
//Another note: "const" variables and arrays cannot point to any other values once defined. However, it is still possible to change the elements in the array with push, unshift, shift, pop, and other functions.
/*Also, I can make a new array without defining its elements like this:
  var newArray = new Array(# of elements); */

function addElementToBeginningOfArray (array, element) {
  //This works:
  var myArray = [element, ...array];
  return myArray;
  /*This alters "array":
  array.unshift(element);
  var myArray = array; */
  /* The code below won't work, because an Array is an Object. And just like Objects, the "value" of the Array that is passed to functions and stored in variables, is its reference/address (rather than a string, number, undefined, etc). Changing the new variable, or changing the local array in the function, changes the original array. These two websites help explain it: http://www.dyn-web.com/javascript/arrays/value-vs-reference.php AND https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value */
  // Something else I discovered: if I make two variables reference/point to the same array, then send one of them into a function that changes the referenced array, then it changes both variables. HOWEVER! This is only true if I change what is INSIDE the array. If I change what one variable POINTS TO, that will not change the other variable. The same holds true for arrays in a function vs. arrays passed to a function.
  // Example: var ar1 = ["one"]; var ar2 = ar1; Changing ar1[0] changes ar2[0] and vice-versa. BUT if I make ar2 = ["two"], that will not change ar1, and vice-versa. Likewise, if I write this function:
  // function change(array){ array[0] = "two"; array = ["three"]; }, then call change(ar1); ...that will make ar1 and ar2 = ["two"], but not ["three"]. Note, however, that if I switch the order of the statements in change, then neither ar1 nor ar2 is affected.
  /*var myArray = array;
  myArray.unshift(element);*/ //That code won't work, as described above.
  }

function destructivelyAddElementToBeginningOfArray (Array, Element) {
  //This works:
  Array.unshift(Element);
  return Array;
  //This doesn't work: return Array.unshift(Element);
  /* This is the same as the above code, and it doesn't work, either: Array = Array.unshift(Element);
  return Array; */
  /*The reason for this is that unshift() is a function that returns the length/number of elements of the new array. In this case, "return Array.unshift(Element);" adds an element to the start of Array, but it returns 2 as its value. Note that this also means that every function returns a value. Functions that lack a return statement or just say "return ;" return "undefined" as their values; whereas functions that return "" have "" as their return value. */
  /*BOTTOM LINE: Never return a function call, or set a function call as a variable's value, UNLESS you want to respectively return or make the variable equal to the return value of the function. */
}

function addElementToEndOfArray(array, element) {
  //Note: If I write var newArray = array.push("whatever"); then that will change array itself.
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arrayToMutate) {
  arrayToMutate.shift();
  return arrayToMutate;
}

// A note about the slice method below: like ALL methods, it only accepts arguments enclosed in parentheses. If I use brackets (var dog = cat.slice[1] instead of var dog = cat.slice(1) ), it returns "undefined". ALSO: a command like cat.slice(3) slices off the first three elements of the cat array, whereas cat.slice(-3) returns the last three elements. Note also that cat.slice(0) returns slices off nothing and returns the whole array, whereas cat.slice(cat.length) and any number greater than the length of the cat array cuts off everything and returns []. Finally, cat.slice(1.7) = cat.slice(1), and cat.slice("string") = cat.slice() = cat.slice(0) = cat (i.e. the whole cat array).
function removeElementFromBeginningOfArray(doNotMutate) {
  // I could do this, or I could write var newArray = doNotMutate.slice(1) and return newArray:
  doNotMutate = doNotMutate.slice(1);
  return doNotMutate;
} 

function destructivelyRemoveElementFromEndOfArray (arrayToTruncate) {
  arrayToTruncate.pop();
  return arrayToTruncate;
}

// Another note about slice(): as it is a function, it accepts variables for arguments.
/* A final note about slice() is that for any array.slice(a,b):
If "a" is a decimal, it gets truncated. If "a" is a string, it's the same as   a = 0. If "a" is undefined, there's a SyntaxError.
If "b" is not an integer, array.slice(a,b) returns []. If "b" is undefined, then array.slice(a,b) returns array.slice(b).
Now, if "a" and "b" are integers:
  if a < 0, array.slice(a,b) returns []
  if a > 0, array.slice(a,b) slices off the first "a" elements
  if a === 0, array.slice(a,b) slices off none of the first elements
  if b === 0, array.slice(a,b) returns []
  if b < 0, array.slice(a,b) slices off the last "b" elements
  if b > 0, array.slice(a,b) slices off array[b] and everything after it. Note that if a === 0 and b > 0, array.slice(a,b) returns the first "b" elements
  if a === b, array.slice(a,b) returns []. The reason: We know that if a and b are negative or zero, array.slice(a,b) returns []. And if a and b are positive integers, then a === b === n. So, we are slicing off array[n] and everything before it and after it. 
  MOST IMPORTANTLY!!! If "a" and "b" are both positive, then our "slice" of the array starts with array[1] and ends with array[b-1]. */
  
function removeElementFromEndOfArray (theirArray) {
  // Note that if the second argument to slice() is array.length - n (n being a positive integer), this cuts off n elements from the end of the array.
  // Also, array.slice(array.length - n) === array.slice(-n).
  
  // The code below is also the same as var myArray = theirArray.slice(0,-1);
  var myArray = theirArray.slice(0, theirArray.length - 1);
  return myArray;
}  