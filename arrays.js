var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var x = "hah";

function addElementToBeginningOfArray(chocolateBars, x){
  return [x,...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x){
  chocolateBars.unshift(x);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, x){
  return [...chocolateBars, x];
 }

function destructivelyAddElementToEndOfArray(chocolateBars, x){
    chocolateBars.push(x);
    return chocolateBars;
}
function accessElementInArray(chocolateBars, y){
  return chocolateBars[y];
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
  return chocolateBars.slice(0, chocolateBars.length- 1);
}