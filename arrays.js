var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var arrayAdd = "foo";

/*Should have (2) Parameters: An existing array and elements to add to it 
Should add elements to the beginning of the array
Should return a NEW array*/
function addElementToBeginningOfArray(chocolateBars, arrayAdd){
  // chocolateBars = [arrayAdd, ...chocolateBars];
  // return chocolateBars;
  return[arrayAdd, ...chocolateBars];
}addElementsToBeginningOfArray(chocolateBars,arrayAdd);

/*Should have (2) Parameters: An existing array and elements to add to it 
Should add elements to the beginning of the array
Should MODIFY the original array*/
function destructivelyAddElementToBeginningOfArray(chocolateBars, arrayAdd){
  chocolateBars.unshift(arrayAdd);
  return chocolateBars;
}destructivelyAddElementToBeginningOfArray(chocolateBars,arrayAdd);

function addElementToEndOfArray(chocolateBars, arrayAdd){
  // chocolateBars = [chocolateBars, ...arrayAdd];
  // return chocolateBars;
  return[...chocolateBars, arrayAdd];
}addElementToEndOfArray(chocolateBars,arrayAdd);

function destructivelyAddElementToEndOfArray(chocolateBars, arrayAdd){
  chocolateBars.push(arrayAdd);
  return chocolateBars;
}destructivelyAddElementToEndOfArray(chocolateBars, arrayAdd);

function accessElementInArray(chocolateBars, index){
  return chocolateBars[index];  
}accessElementInArray([3]);

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}destructivelyRemoveElementFromBeginningOfArray(chocolateBars);

function removeElementFromBeginningOfArray(chocolateBars){
  //chocolateBars = chocolateBars.slice(1);
  return [...chocolateBars.slice(1)];
}removeElementFromBeginningOfArray(chocolateBars);

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  // chocolateBars = chocolateBars.pop();
  // return chocolateBars;
  // return chocolateBars.pop();
  chocolateBars.pop();
  return chocolateBars;
}destructivelyRemoveElementFromEndOfArray(chocolateBars);

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length-1);
}removeElementFromEndOfArray(chocolateBars);