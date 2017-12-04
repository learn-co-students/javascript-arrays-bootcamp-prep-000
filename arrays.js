var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addBeginningConserve = [1];

function addElementToBeginningOfArray(addBeginningConserve, element){
  return ["foo",...addBeginningConserve]
}

var addBeginningDestruct = [1];
function destructivelyAddElementToBeginningOfArray(addBeginningDestruct, element){
  addBeginningDestruct.unshift("foo");
  return addBeginningDestruct;
}

var addEndConserve = [1];
function addElementToEndOfArray(addEndConserve, element){
  return [...addEndConserve,"foo"]
}

var addEndDestruct = [1];
function destructivelyAddElementToEndOfArray(addEndDestruct, index){
  addEndDestruct.push("foo");
  return addEndDestruct;
}

var array = [1,2,3];
function accessElementInArray(array,index){
  return array[2];
}

var removeBeginningDestruct = [1,2,3];
function destructivelyRemoveElementFromBeginningOfArray(removeBeginningDestruct){
  removeBeginningDestruct.shift();
  return removeBeginningDestruct;
}

var removeBeginningConserve = [1,2,3];
function removeElementFromBeginningOfArray(removeBeginningConserve){
  return removeBeginningConserve.slice(1);
}

var removeEndDestruct = [1,2,3];
function destructivelyRemoveElementFromEndOfArray(removeEndDestruct){
  removeEndDestruct.pop();
  return removeEndDestruct;
}

var removeEndConserve = [1,2,3];
function removeElementFromEndOfArray(removeEndConserve){
  return removeEndConserve.slice(0, removeEndConserve.length - 1);
}