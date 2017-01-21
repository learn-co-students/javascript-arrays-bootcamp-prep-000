var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray([array, ...chocolateBars], element){
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift[element];
}
