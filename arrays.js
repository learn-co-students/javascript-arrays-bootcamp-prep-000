var chocolateBars = ["hundred grand", "snickers", "skittles", "kitkat"];
/* Note: The test for chocolateBars doesn't care about the order of its elements. 
That is, the above array, for some reason, is just as valid as ["snickers", "hundred grand", "kitkat", "skittles"], unless of course the test isn't executing properly. */

function addElementToBeginningOfArray (array, element) {
  /*This alters "array":
  array.unshift(element);
  var myArray = array; */
  //This works:
  //var myArray = [element, ...array];
  var myArray = array;
  myArray.unshift(element);
  return myArray;
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
