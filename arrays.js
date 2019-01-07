var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, b){
return [b, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, b){
chocolateBars.unshift(b);
return chocolateBars
}

function addElementToEndOfArray(chocolateBars, b){
return [...chocolateBars, b];
}

function destructivelyAddElementToEndOfArray(chocolateBars, b){
chocolateBars.push(b);
return chocolateBars
}

function accessElementInArray(chocolateBars, b){
  return chocolateBars[b];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
chocolateBars.shift();
return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars){
return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
chocolateBars.pop();
return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
return chocolateBars.slice(0, chocolateBars.length - 1);
}