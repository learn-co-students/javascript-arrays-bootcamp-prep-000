var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var r = "Rare Candy"

function addElementToBeginningOfArray(chocolateBars, r){
  return [r, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, r){
  chocolateBars.unshift(r);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, r){
  return [...chocolateBars, r];
}

function destructivelyAddElementToEndOfArray(chocolateBars, r){
  chocolateBars.push(r);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, sk = 3){
  return chocolateBars[sk];
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
