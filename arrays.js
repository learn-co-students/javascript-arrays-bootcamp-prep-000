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
