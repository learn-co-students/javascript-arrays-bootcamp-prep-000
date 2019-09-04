var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var x = "foo"

function addElementToEndOfArray(chocolateBars, x){
  return [...chocolateBars, x]
}

function addElementToBeginningOfArray(chocolateBars, x){
  return [x, ...chocolateBars]
}

function destructivelyAddElementToEndOfArray(chocolateBars, x){
  chocolateBars.push(x)
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x){
  chocolateBars.unshift(x)
  return chocolateBars
}

function accessElementInArray(chocolateBars) {
  return (chocolateBars[2])
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
