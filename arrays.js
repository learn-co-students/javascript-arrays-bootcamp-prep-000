chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, butterfinger){
  return [butterfinger, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, almond){
chocolateBars.unshift(almond);
return chocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, milky){
 chocolateBars.push(milky);
 return chocolateBars
}

function addElementToEndOfArray(chocolateBars, snick){
  return [...chocolateBars, snick];
}

function accessElementInArray(chocolateBars){
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}

