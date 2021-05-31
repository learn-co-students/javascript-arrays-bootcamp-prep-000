/*var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candy = ["foo"];


function addElementToBeginningOfArray(chocolateBars, candy) {
  //So this makes the arry candy imput to go into choco without altering the orginal arra.
  return[candy,...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candy) {
  
  chocolateBars.unshift(candy);
  return;
}

function accessElementInArray (chocolateBars) {
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift().slice(0);
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(-1);
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}*/

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//var candyString = "foo"
 
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