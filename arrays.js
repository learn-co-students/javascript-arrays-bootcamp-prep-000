var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"]

addElementToBeginningOfArray(array, element) {
  return [element,...array]; 
}

destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}