var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"]

addElementToBeginningOfArray(array, element) {
  return [element,...array]; 
}

destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}