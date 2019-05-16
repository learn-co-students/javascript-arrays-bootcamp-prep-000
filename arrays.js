var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, candy) {
  chocolateBars = ["foo", ...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candy) {
  chocolateBars.unshift(candy)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, candy) {
  chocolateBars = [...chocolateBars, "foo"]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars, candy) {
  chocolateBars.push(candy)
  return chocolateBars
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(1)
  return array
}
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1)
  }
