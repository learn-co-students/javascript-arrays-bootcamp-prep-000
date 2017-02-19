var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(updateArray, arrayElement) {
  var newArray = updateArray;
  [arrayElement, ...newArray]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(updateArray, arrayElement) {
  [arrayElement, ...updateArray]
  return updateArray;
}

function addElementToEndOfArray(updateArray, arrayElement) {
  var newArray = updateArray;
  [...newArray, arrayElement]
  return newArray;
}

function destructivelyAddElementToEndOfArray(updateArray, arrayElement) {
  [...updateArray, arrayElement]
  return updateArray;
}

function accessElementInArray(updateArray, accessIndex) {
  return updateArray[accessIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(updateArray) {
  return updateArray.shift();
}

function removeElementFromBeginningOfArray(updateArray) {
  return updateArray.slice(0);
}

function destructivelyRemoveElementFromEndOfArray(updateArray) {
  return updateArray.pop();
}

function removeElementFromEndOfArray(updateArray) {
  return updateArray.slice(0, updateArray.length-1);
}