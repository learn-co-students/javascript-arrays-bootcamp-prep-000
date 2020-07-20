
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
  chocolateBars.unshift(candyString);
  return chocolateBars;
}

function addElementToEndOfArray() {
  return [chocolateBars, ...candyString];
}

function destructivelyAddElementToEndOfArray() {

}
