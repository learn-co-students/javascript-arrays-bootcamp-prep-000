var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var addElementToBeginningOfArray = [element, ...array];
  return addElementToBeginningOfArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
var newArray = array;
newArray.unshift(element)
return newArray
}

function addElementToEndOfArray(array, element){
  var sillyArray = array;
  return sillyArray.concat(element);
}

function destructivelyAddElementToEndOfArray(array, element){
  var practiceArray = array;
  practiceArray.push(element);
  return practiceArray
}

function accessElementInArray (array, index){
  var accessElement = array;
  return accessElement[index] 
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  removeElement = array;
  removeElement.shift()
  return removeElement
}

function removeElementFromBeginningOfArray(array){
  justKidding = array;
  return justKidding.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  goneForGood = array;
  goneForGood.pop()
  return goneForGood
}


function removeElementFromEndOfArray(array){
  onlyTemporary = array;
  return onlyTemporary.slice(0, onlyTemporary.length - 1)
}













