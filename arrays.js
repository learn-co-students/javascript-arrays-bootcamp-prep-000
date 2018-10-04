var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, newString){
  return [newString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newString){
  chocolateBars.unshift(newString);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, newString){
  return [...chocolateBars, newString];
}

function destructivelyAddElementToEndOfArray(chocolateBars, newString){
  chocolateBars.push(newString);
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
