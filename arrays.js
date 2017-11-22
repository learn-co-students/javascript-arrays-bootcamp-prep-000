var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var candyString = "foo"
var arrayadd    = [1]
function addElementToBeginningOfArray(arrayadd, candyString){
  return [candyString, ...arrayadd];
}
function destructivelyAddElementToBeginningOfArray(arrayadd, candyString){
  arrayadd.unshift(candyString);
  return arrayadd;
}
var endofarray = [1]
function addElementToEndOfArray(endofarray, candyString){
  return [...endofarray, candyString];
}
function accessElementInArray(array, index){
  return array[index];
}
var beginningofarray = [1]
function destructivelyAddElementToEndOfArray(beginningofarray, candyString){
  beginningofarray.push(candyString);
  return beginningofarray;
}
var index = 0
function accessElementInArray(endofarray, index){
  return endofarray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(endofarray){
  endofarray.shift();
  return endofarray;
}

function removeElementFromBeginningOfArray(endofarray){
  return endofarray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(endofarray){
  endofarray.pop();
  return endofarray;
}


function removeElementFromEndOfArray(endofarray){
  return endofarray.slice(0, endofarray.length - 1);
}
