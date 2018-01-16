
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var lollipop = 'foo'
// I wish they'd tell us to alter array-test.js.
function addElementToBeginningOfArray(chocolateBars, lollipop) {
    return ['foo', ...chocolateBars]; // element..., array(does not alter)
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, lollipop) {
  chocolateBars.unshift('foo'); //array-->method-->(element-to-be-"unshifted")
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, lollipop) {
  return [...chocolateBars, 'foo']; //...array, element(does not alter)
}

function destructivelyAddElementToEndOfArray(chocolateBars, lollipop) {
  chocolateBars.push('foo'); //array-->method-->(element-to-be-added-at-end)
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index]; //access array[element-of-index-3]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift(); //no index specify = grab first element in array.
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1); //takes element at index one-returns it
}
//if wanted so save above do:
// chocolateBars = chocolateBars.slice(1)
function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop(); //removes last element in array.
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
