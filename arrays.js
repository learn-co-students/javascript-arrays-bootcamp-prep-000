
var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray(fArray,fElement) {
  return [fElement,...fArray];
}

function destructivelyAddElementToBeginningOfArray(fArray,fElement) {
  fArray.unshift(fElement);
  return fArray;
}

function addElementToEndOfArray(fArray,fElement) {
  return [...fArray,fElement];
}

function destructivelyAddElementToEndOfArray(fArray,fElement) {
  fArray.push(fElement);
  return fArray;
}

function accessElementInArray(fArray,fIndex) {
  return fArray[fIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(fArray) {
  fArray.shift();
  return fArray;
}

function removeElementFromBeginningOfArray(fArray) {
  return fArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(fArray) {
  fArray.pop();
  return fArray;
}

function removeElementFromEndOfArray(fArray) {
  return fArray.slice(0,fArray.length - 1);
}
