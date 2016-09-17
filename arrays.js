var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"];

nArray=[];

function addElementToBeginningOfArray(nArray, variable){
  return [variable, ...nArray];
}

function destructivelyAddElementToBeginningOfArray(nArray, variable){
  nArray.unshift(variable)
  return nArray;
}

function addElementToEndOfArray(nArray, variable){
  return [...nArray, variable]
}

function destructivelyAddElementToEndOfArray(nArray, variable){
  nArray.push(variable)
  return nArray
}

function accessElementInArray(nArray, index){
  return nArray[index]
}

function removeElementFromBeginningOfArray(nArray){
  nArray.shift()
  return nArray
}

function removeElementFromEndOfArray(nArray){
  return nArray.slice(0, nArray.length -1)
}
