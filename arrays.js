var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(theArray,item) {
  return [item, ...theArray];
}

function destructivelyAddElementToBeginningOfArray(theArray, item) {
   theArray.unshift(item);
   return theArray;
}

function accessElementInArray(theArray,index) {
  return theArray[index];
}

function destructivelyRemoveElementFromBeginningofArray(theArray) {
  theArray.shift();
  return theArray;
}

function removeElementFromBeginningOfArray(theArray) {
  var newArray = theArray.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(theArray) {
  theArray.pop();
  return theArray;
}

function removeElementFromEndOfArray(theArray) {
  return theArray.slice(0,theArray.length-1);
}

function addElementToEndOfArray(theArray, item) {
  return [...theArray, item];
}

function destructivelyAddElementToEndOfArray(theArray,item) {
theArray.push(item);
return theArray;
}
