var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var candyString = "foo";

function addElementToBeginningOfArray(chocolateBars,CandyString){
  var newArray= [candyString,... chocolateBars];
return newArray;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;}

function accessElementInArray(array,index){
  return array[index];
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
return chocolateBars;
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}
function removeElementFromEndOfArray(chocolateBars){
  var newArray = chocolateBars.slice(0,2);
  return newArray;
}
function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars,candyString];
}
function removeElementFromBeginningOfArray(chocolateBars){
  var newArray= chocolateBars.slice(1);
  return newArray;
}
