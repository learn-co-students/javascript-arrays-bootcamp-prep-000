var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element) {
  chocolateBars.unshift("oreos");
  return chocolateBars;

}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [...chocolateBars, "oreos"];
  return chocolateBars;
}

function addElementToEndOfArray (array, element) {
  ["almonds", ...chocolateBars]
  return addElementToEndOfArray;

}
function destructivelyAddElementToEndOfArray(array, element) {
  chocolateBars.push("almonds");
  return destructivelyAddElementToEndOfArray;
}

function accessElementInArray(array, index){
  return chocolateBars[2];
}


function destructivelyRemoveElementFromBeginningOfArray(array){
  chocolateBars = chocolateBars.shift();
  return destructivelyRemoveElementFromBeginningOfArray;
}

function removeElementFromBeginningOfArray(array){
  chocolateBars = chocolateBars.slice(1);
  return chocolateBars;

}
function destructivelyRemoveElementFromEndOfArray(array) {
  chocolateBars.pop();
  return chocolateBars;
}
