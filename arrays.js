var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"];

nArray=[];

function addElementToBeginningOfArray(nArray, variable){
  return [variable, ...nArray];
}

function destructivelyAddElementToBeginningOfArray(nArray, variable){
  return nArray.unshift(variable);
}
