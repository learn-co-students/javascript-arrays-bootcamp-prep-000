var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(myArray, elementToAdd){
  myNewArray = new Array(elementToAdd, ...myArray);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(myArray, elementToAdd){
  myArray.unshift(elementToAdd);
  return myArray;
}

function addElementToEndOfArray(){
  myNewArray = new Array(elementToAdd, ...myArray);
  return newArray;
}

function destructivelyAddElementToEndOfArray(myArray, elementToAdd){
  myArray.push(elementToAdd);
  return myArray;
}
//**TODO**: Define a function in `arrays.js` called `accessElementInArray`.
//The function should accept an array and an index
//and return the element at that index.
function accessElementInArray(myArray, i){
  return myArray[i];
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  return myArray.shift();
}
function removeElementFromBeginningOfArray(myArray){
  myNewArray = myArray.slice(1);
  return myArray;
  }
function destructivelyRemoveElementFromEndOfArray(myArray){
  return myArray.pop();
}
