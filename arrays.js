var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(arrOrig, plusOne){
  return [plusOne,...arrOrig];
}

function destructivelyAddElementToBeginningOfArray(arrOrig, plusOne) {
  arrOrig.unshift(plusOne);
  return arrOrig;
}

function addElementToEndOfArray(arrOrig, plusOne) {
  return [...arrOrig, plusOne];
}

function destructivelyAddElementToEndOfArray(arrOrig, plusOne) {
  arrOrig.push(plusOne);
  return arrOrig;
}

function accessElementInArray(arrOrig, indexNo) {
  return arrOrig[indexNo];
}

function destructivelyRemoveElementFromBeginningOfArray(arrOrig) {
  arrOrig.shift();
  return arrOrig;
}

function removeElementFromBeginningOfArray(arrOrig) {
  return arrOrig.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arrOrig) {
  arrOrig.pop();
  return arrOrig;
}

function removeElementFromEndOfArray(arrOrig) {
  return arrOrig.slice(0 , arrOrig.length -1);
}