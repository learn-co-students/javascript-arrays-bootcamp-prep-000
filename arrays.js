var chocolateBars = ["hundred grand", "snickers", "skittles", "kitkat"];
/* Note: The test for chocolateBars doesn't care about the order of its elements. 
That is, the above array, for some reason, is just as valid as ["snickers", "hundred grand", "kitkat", "skittles"]. */

function addElementToBeginningOfArray (array, element) {
  //This works:
  var myArray = [element, ...array];
  return myArray;
  //This doesn't work: return array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray (Array, Element) {
  //This works:
  Array.unshift(Element);
  return Array;
  //This doesn't work: return Array.unshift(Element);
  /* This is the same as the above code, and it doesn't work, either: Array = Array.unshift(Element);
  return Array;*/
}
