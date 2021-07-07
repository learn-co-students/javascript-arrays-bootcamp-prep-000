var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(chocolateBars, moreCandy){
  return [moreCandy, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, moreCandy){
  chocolateBars.unshift(moreCandy);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, moreCandy){
  return [...chocolateBars, moreCandy];
}

function destructivelyAddElementToEndOfArray(chocolateBars, moreCandy){
  chocolateBars.push(moreCandy);
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
