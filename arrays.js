

var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];
//var sweets = "foo"

function addElementToBeginningOfArray(chocolateBars, sweets) {
  return [sweets, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, sweets) {
  chocolateBars.unshift(sweets);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, sweets) {
  return [...chocolateBars, sweets];
}
//had to ask to figure out how to position the item

function destructivelyAddElementToEndOfArray(chocolateBars, sweets){
  chocolateBars.push(sweets);
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}
//slices first

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}

// function bananas() {
//    return (x + y)
// }
