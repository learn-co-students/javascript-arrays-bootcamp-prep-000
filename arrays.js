var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ]

function addElementToBeginningOfArray(chocolateBars, c) {
return [c, ... chocolateBars];}

function destructivelyAddElementToBeginningOfArray(chocolateBars, c) {
  chocolateBars.unshift(c)
  return chocolateBars;}

function addElementToEndOfArray(chocolateBars, c) { 
  return [...chocolateBars, c];}

function destructivelyAddElementToEndOfArray(chocolateBars, c) { [chocolateBars.push(c)];
return chocolateBars}

function accessElementInArray(chocolateBars, c) {
  return chocolateBars[c];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  [chocolateBars.pop()]
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}

