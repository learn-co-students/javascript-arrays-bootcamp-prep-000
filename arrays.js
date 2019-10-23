var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArray, elementToAddToBeginning){
  var myNewArray = [elementToAddToBeginning, ...myArray];
  return myNewArray
}

function destructivelyAddElementToBeginningOfArray(myArray, elementToAddToBeginning){
  myArray.unshift(elementToAddToBeginning);
  return myArray
}

function addElementToEndOfArray(myArray, elementToAddToEnd){
  var myNewArray = [...myArray, elementToAddToEnd];
  return myNewArray
}

function destructivelyAddElementToEndOfArray(myArray, elementToAddToEnd){
  myArray.push(elementToAddToEnd);
  return myArray
}


function accessElementInArray(myArray, myIndex){
return myArray[myIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  myArray.shift();
  return myArray
}

function removeElementFromBeginningOfArray(myArray){
  var myNewArray = myArray.slice(1);
  return myNewArray
}

function destructivelyRemoveElementFromEndOfArray(myArray){
  myArray.pop();
  return myArray
}

function removeElementFromEndOfArray(myArray){
var myNewArray = myArray.slice(0, myArray.length -1);
return myNewArray  
}