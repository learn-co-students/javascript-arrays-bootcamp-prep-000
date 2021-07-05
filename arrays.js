var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var candyString = 'foo'

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString];
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
  return chocolateBars;
}
function accessElementInArray(chocolateBars, candyString){
  return chocolateBars[candyString];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift(candyString);
  return chocolateBars;
}
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop(candyString);
  return chocolateBars;
}
function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0,chocolateBars.length - 1)
}