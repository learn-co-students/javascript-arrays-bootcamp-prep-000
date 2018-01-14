var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  addElementArray = [array];
  addElementArray.unshift(element);
  return addElementArray;
}
addElementToBeginningOfArray(1, 'foo');
