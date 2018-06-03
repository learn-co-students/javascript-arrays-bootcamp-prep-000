var chocolateBars = ['snickers', 'hundred grand', 'kitkay', 'skittles'];

var n = 'hersheys';

function addElementToBeginningOfArray(chocolateBars, n){
  return [n,...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, n){
  chocolateBars = [n,...chocolateBars]
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, n){
  return [...chocolateBars, n]
}

function destructivelyAddElementToEndOfArray([1], foo){
  chocolateBars = [...chocolateBars, n]
  return chocolateBars
}

// function destructivelyAddElementToEndOfArray(chocolateBars, n){
//   chocolateBars = [...chocolateBars, n]
//   return chocolateBars
// }

function accessElementInArray(chocolateBars, i){
  return chocolateBars[i]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.shift()
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars = chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1)
}