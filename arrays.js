var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(thisArray, thisElement) {
  var newArray = [thisElement, ...thisArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(thisArray, thisElement) {
  thisArray.unshift(thisElement);
  return thisArray;
}

function addElementToEndOfArray(thisArray, thisElement) {
  var newArray = [...thisArray, thisElement];
  return newArray
}

function destructivelyAddElementToEndOfArray(thisArray, thisElement) {
 thisArray.push(thisElement);
  return thisArray;
}

function accessElementInArray (thisArray, index) {
  return thisArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray (thisArray) {
  thisArray.shift();
  return thisArray;
}

function removeElementFromBeginningOfArray (thisArray) {
  var newArray = thisArray.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(thisArray) {
  thisArray.pop();
  return thisArray;
}

function removeElementFromEndOfArray (thisArray) {
  var newArray = thisArray.slice(0, thisArray.length - 1);
  return newArray;
}

