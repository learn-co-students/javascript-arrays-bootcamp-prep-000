//var ingredient1 = "bread"
//var ingredients2 = "mild cheese"
//var ingredient3 = "sharp cheese"
//var ingredient4 = "butter"
//var ingredient5 = "tomato"
//var ingredient6 = "garlic"
//var koncha1 = "foo";

var chocolateBars = ["snickers","nudred grand","kitkat","skittles"];

//function addElementToBeginningOfArray(chocolateBars, koncha1){
//  return [koncha1, ...chocolateBars]
//}
//function destructivelyAddElementToBeginningOfArray(chocolateBars, koncha1){
//  return [koncha1, ...chocolateBars]
//}
var candyString = "foo";

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString];
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
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
