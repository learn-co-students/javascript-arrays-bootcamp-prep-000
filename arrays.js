var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(choc, moreChoc) {
  let newList = [moreChoc, ...choc];
  return newList;
}

function destructivelyAddElementToBeginningOfArray(choc, moreChoc) {
  choc.unshift(moreChoc);
  return choc;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(choc, moreChoc) {
  choc.push(moreChoc);
  return choc;
}

function accessElementInArray(choc, index) {
  return choc[index];
}

function destructivelyRemoveElementFromBeginningOfArray(choc) {
  choc.shift();
  return choc;
}

function removeElementFromBeginningOfArray(choc){
  return choc.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(choc){
  choc.pop();
  return choc;
}


function removeElementFromEndOfArray(choc) {
  return choc.slice(0, choc.length - 1);
}


