var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candyString){
  return[... chocolateBars, candyString];
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
return ChocolateBars;
}

function accessElementinArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolatebars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}

