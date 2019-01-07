var chocolateBars = ["snickers", 
  "hundred grand", 
  "kitkat", 
  "skittles"];
  
function addElementToBeginningOfArray(chocolateBars, payday){
  return [payday, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, payday){
  chocolateBars.unshift(payday);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, payday){
  return [...chocolateBars, payday];
}

function destructivelyAddElementToEndOfArray(chocolateBars, payday){
  chocolateBars.push(payday);
  return chocolateBars;
}

function accessElementInArray(array, index){
  return array[index];
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
  return chocolateBars.slice(0, chocolateBars.length - 1);
}