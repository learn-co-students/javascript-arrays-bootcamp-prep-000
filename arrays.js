var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(arrayName, newElement){
  var newArray = [];
  newArray = arrayName.slice(0);
  newArray.unshift(newElement);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arrayName, newElement){
  arrayName.unshift(newElement);
  return arrayName;
}

function addElementToEndOfArray(arrayName, newElement){
  var newEndArray = [];
  newEndArray = arrayName.slice(0);
  newEndArray.push(newElement);
  return newEndArray;
}

function destructivelyAddElementToEndOfArray(arrayName, newElement){
  arrayName.push(newElement);
  return arrayName;
}

function accessElementInArray(arrayName, index){
  return arrayName[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arrayName){
  arrayName.shift();
  return arrayName;
}

function removeElementFromBeginningOfArray(arrayName){
  var newArrayMinusFirst = [];
  newArrayMinusFirst = arrayName.slice(0);
  newArrayMinusFirst.shift();
  return newArrayMinusFirst;
}

function destructivelyRemoveElementFromEndOfArray(arrayName){
  arrayName.pop();
  return arrayName;
}

function removeElementFromEndOfArray(arrayName){
  var newArrayMinusLast = [];
  newArrayMinusLast = arrayName.slice(0);
  newArrayMinusLast.pop();
  return newArrayMinusLast;
}

