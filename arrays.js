var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(anArray, element){
  var newArray = [element, ...anArray];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(anArray, element){
  anArray.unshift(element)
  return anArray
}

function addElementToEndOfArray(anArray, element){
  var newArray = [...anArray, element];
  return newArray
}

function destructivelyAddElementToEndOfArray(anArray, element){
  anArray.push(element)
  return anArray
}

function accessElementInArray(anArray, index){
  return anArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(anArray){
  anArray.shift()
  return anArray
}

function removeElementFromBeginningOfArray(anArray){
  var newArray = anArray.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(anArray){
  anArray.pop()
  return anArray
}

function removeElementFromEndOfArray(anArray){
  var newArray = anArray.slice(0, anArray.length - 1)
  return newArray
}
