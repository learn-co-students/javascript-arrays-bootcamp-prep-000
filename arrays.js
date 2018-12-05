var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addCandy = "foo";

function addElementToBeginningOfArray(chocolateBars, addCandy){
  return [addCandy, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, addCandy){
  chocolateBars.unshift(addCandy);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, addCandy){
  return [...chocolateBars, addCandy];
}

function destructivelyAddElementToEndOfArray(chocolateBars, addCandy){
  chocolateBars.push(addCandy);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length -1);
}