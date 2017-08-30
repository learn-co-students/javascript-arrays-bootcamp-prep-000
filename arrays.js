var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (chocolateBars, element){
  return [element, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, element){
  chocolateBars.unshift (element);
  return chocolateBars
}

function addElementToEndOfArray (chocolateBars, element){
  return [...chocolateBars, element]
}

function destructivelyAddElementToEndOfArray (chocolateBars, element){
  chocolateBars.push (element);
  return chocolateBars
}

function accessElementInArray (chocolateBars, index){
  return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars){
  chocolateBars.shift ("snickers");
  return chocolateBars
}

function removeElementFromBeginningOfArray (chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars){
  chocolateBars.pop ("skittles");
  return chocolateBars
}

function removeElementFromEndOfArray (chocolateBars){
  return chocolateBars.slice (0, chocolateBars.length-1)
}
