var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var myArray = [1, 2, 3]



//problems!
function destructivelyAddElementToBeginningOfArray (myArray, foo) {
  myArray.unshift(foo);
  return myArray;
}

function destructivelyAddElementToEndOfArray (myArray, foo) {
  myArray.push(foo)
  return myArray;
}
//problems!



function addElementToBeginningOfArray (chocolateBars, foo) {
  return chocolateBars = [foo, ...chocolateBars]
}

function addElementToEndOfArray (myArray, foo) {
  return myArray = [...myArray,foo]
}

function accessElementInArray(chocolateBars,x) {
  return(chocolateBars[x]);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}