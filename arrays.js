var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var string = "foo"
function addElementToBeginningOfArray(chocolateBars, string){
  return [string, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, string){
  chocolateBars.unshift("foo")
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, string){
  return [...chocolateBars, string]
}
function destructivelyAddElementToEndOfArray(chocolateBars, string){
  chocolateBars.push("foo")
  return chocolateBars
}
function accessElementInArray(chocolateBars){
  return chocolateBars[2]
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