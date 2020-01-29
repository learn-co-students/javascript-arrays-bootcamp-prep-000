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