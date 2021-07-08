var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");

function addElementToBeginningOfArray(chocolateBars, string) {
string = "foo";
var modChocolateBars = [string, ...chocolateBars];
return modChocolateBars;

}

function destructivelyAddElementToBeginningOfArray(chocolateBars, string) {
  string = "foo";
  chocolateBars.unshift(string);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, string) {
  string = "foo";
  var modChocolateBars = [...chocolateBars, string];
  return modChocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, string) {
  string = "foo";
  chocolateBars.push(string);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index) {
  index = 2;
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(array){
  var modArray = array.slice(0, array.length - 1);
  return modArray;
}
