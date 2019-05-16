var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars, candyString) {
  return [candyString, ...chocolateBars]
}


function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolateBars.unshift(candyString)) {
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString]
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocolateBars.push(candyString)) {
  return chocolateBars
}
