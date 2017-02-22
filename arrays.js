var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArray, addition){
return [addition, ...myArray];
}

function destructivelyAddElementToBeginningOfArray(myArray, addition){
  myArray.unshift(addition);
  return myArray
}

function addElementToEndOfArray(myArray, addition){
  return [...myArray, addition];
}

function destructivelyAddElementToEndOfArray(myArray, addition){
  myArray.push(addition);
  return myArray
}

function accessElementInArray(myArray, index){
  return myArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  return myArray.shift();
}

function removeElementFromBeginningOfArray(myArray){
  return myArray.slice(1);
  return myArray
}

function destructivelyRemoveElementFromEndOfArray(myArray){
  return myArray.pop();
}

function removeElementFromEndOfArray(myArray){
  return myArray.slice(0, myArray.length - 1);
  return myArray
}
