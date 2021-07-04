var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (nArray, elemento){
  var newArray = [elemento, ...nArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (nArray, elemento){
  nArray.unshift(elemento);
  return nArray;
}

function addElementToEndOfArray (nArray, elemento){
  var newArray = [...nArray, elemento];
  return newArray;
}

function destructivelyAddElementToEndOfArray (nArray, elemento){
  nArray.push(elemento);
  return nArray;
}

function accessElementInArray (nArray, index){
  var elemento = nArray[parseInt(index)];
  return elemento;
}

function destructivelyRemoveElementFromBeginningOfArray(nArray){
  nArray.shift();
  return nArray;
}

function removeElementFromBeginningOfArray (nArray){
  nArray.slice(1);
  return nArray;
}

function destructivelyRemoveElementFromEndOfArray (nArray) {
  nArray.pop();
  return nArray;
}

function removeElementFromEndOfArray (nArray){
  var newArray = nArray.slice(-1);
  return newArray;
}