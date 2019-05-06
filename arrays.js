var chocolateBars = ("snickers" , "hundred grand", "kitkat", "skittles" )

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, things){
  chocolateBars.unshift(things);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, things){
  return [...chocolateBars, things];
}

function destructivelyAddElementToEndOfArray(chocolateBars, things){
  chocolateBars.push(things);
  return chocolateBars;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
 chocolateBars.pop()
 return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0,chocolateBars.length - 1);
}