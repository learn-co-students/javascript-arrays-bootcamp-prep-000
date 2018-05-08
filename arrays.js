var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
function addElementToBeginningOfArray (array, element) {
 array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray (theArray, newElement) {
  theArray.unshift(newElement);
  return theArray;
}

function addElementToEndOfArray (otherArray, endElement) {
  otherArray = [...otherArray, endElement];
  return otherArray;
}

function destructivelyAddElementToEndOfArray (lastArray, lastElement) {
  lastArray.push(lastElement);
  return lastArray;
}

function accessElementInArray (array, index) {
  return array [index];
}

function destructivelyRemoveElementFromBeginningOfArray (desArray) {
  desArray.shift();
  return desArray;
}
function removeElementFromBeginningOfArray (newArray) {
  newArray = newArray.slice(1);
  return newArray;
}
function destructivelyRemoveElementFromEndOfArray (lastOfArray) {
  lastOfArray.pop();
  return lastOfArray;
}
function removeElementFromEndOfArray (anotherArray) {
  anotherArray = anotherArray.slice(0, anotherArray.length -1);
  return anotherArray;
}
