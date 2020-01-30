var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(myArray, addThis){
  const arrayStart = [addThis, ...myArray]
  return arrayStart;
}

function destructivelyAddElementToBeginningOfArray(myArray, addThis){
  var arrayStart = myArray;
  arrayStart.unshift(addThis);
  return arrayStart;
}

function addElementToEndOfArray(myArray, addThis){
  var arrayStart = [...myArray, addThis]
  return arrayStart;
  
}

function destructivelyAddElementToEndOfArray(myArray, addThis){
  var arrayStart = myArray;
  arrayStart.push(addThis);
  return arrayStart;
}

function accessElementInArray(array, indexit){
  var findit = array[indexit];
  return findit;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var shifted = array;
  shifted.shift();
  return shifted;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var shortArray = array.slice(0, array.length -1);
  return shortArray;
}