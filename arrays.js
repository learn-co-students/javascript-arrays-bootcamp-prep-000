var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(passedArray, varToAdd){
  //stuff
  return [varToAdd, ...passedArray]
}

function destructivelyAddElementToBeginningOfArray(passedArray, varToAdd){
  passedArray.unshift(varToAdd)
  return passedArray
}

function addElementToEndOfArray(passedArray, varToAdd) {
  return [ ...passedArray, varToAdd]
}

function destructivelyAddElementToEndOfArray(passedArray, varToAdd){
  passedArray.push(varToAdd)
  return passedArray
}

function accessElementInArray(passedArray, indexNum){
  return passedArray[indexNum]
}

function removeElementFromBeginningOfArray(passedArray){
  passedArray.shift()
  return passedArray
}
function removeElementFromEndOfArray(passedArray){
  passedArray.pop()
  return passedArray
}
