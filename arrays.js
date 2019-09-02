var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
  
var arrayAddition = "foo"

function addElementToBeginningOfArray(chocolateBars, arrayAddition){
  return [arrayAddition, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, arrayAddition){
  chocolateBars.unshift(arrayAddition)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, arrayAddition){
  return [...chocolateBars, arrayAddition]
}

function destructivelyAddElementToEndOfArray(chocolateBars, arrayAddition){
  chocolateBars.push(arrayAddition)
  return chocolateBars
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1)
}

function accessElementInArray(chocolateBars){
  return chocolateBars[2]
}
