var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(anArray, anElement){
    var bArray = [anElement, ...anArray];
    return bArray;
}

function destructivelyAddElementToBeginningOfArray(anArray, anElement){
  anArray.unshift(anElement);
  return anArray;
  
}

function addElementToEndOfArray(anArray, anElement){
   var bArray = [...anArray, anElement];
  return bArray;
}

function destructivelyAddElementToEndOfArray(anArray, anElement){
   anArray.push(anElement);
  return anArray;
}

function accessElementInArray(anArray, index){
    return anArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(anArray){
  anArray.shift();
  return anArray;
}

function removeElementFromBeginningOfArray(anArray){
  var bArray = anArray.slice(1);
  return bArray;
}

function destructivelyRemoveElementFromEndOfArray(anArray){
  anArray.pop();
  return anArray;
}

function removeElementFromEndOfArray(anArray){
    var bArray = anArray.slice(0, anArray.length - 1);
    return bArray;
}












