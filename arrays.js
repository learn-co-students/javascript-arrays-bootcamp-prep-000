var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array,element){
  var newArray = array;
  return [element,...newArray];
}

function destructivelyAddElementToBeginningOfArray(array,element){
  var newArray = array;
  newArray.unshift(element);
  return newArray;
}

function addElementToEndOfArray(array,element){
  var newArray = array;
  return [...newArray,element];
}

function destructivelyAddElementToEndOfArray(array,element){
  var newArray = array;
  newArray.push(element);
  return newArray;
}

function accessElementInArray(array, index){
 var newArray = array;
 return newArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array,element){
  var newArray = array;
  newArray.shift(element);
  return newArray;
}

function removeElementFromBeginningOfArray(array){
  var newArray = array;
  return newArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  var newArray = array;
  newArray.pop();
  return newArray;
}

function removeElementFromEndOfArray(array){
  var newArray = array;
  return newArray.slice(0,newArray.length -1);
}
