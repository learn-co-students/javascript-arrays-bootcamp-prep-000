var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(theArray,theElement) {
      return [theElement,...theArray];
}

function destructivelyAddElementToBeginningOfArray(theArray,theElement) {
    theArray.unshift(theElement);
    return theArray;
}

function addElementToEndOfArray (theArray,theElement) {
  return [...theArray,theElement];
}

function destructivelyAddElementToEndOfArray (theArray,theElement) {
    theArray.push(theElement);
    return theArray;
}

function accessElementInArray(theArray,theIndex) {
  return theArray[theIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(theArray){
  theArray.shift();
  return theArray;
}

function removeElementFromBeginningOfArray(theArray) {
  newArray =  theArray.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(theArray) {
  theArray.pop();
  return theArray;
}

function removeElementFromEndOfArray(theArray) {
  newArray = theArray.slice(0, theArray.length - 1)
return newArray;
}
