var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, foo){
  const addElementToBeginningOfArray = ["foo", ...chocolateBars]
  return addElementToBeginningOfArray
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
  chocolateBars.unshift(foo)
  return chocolateBars
}
function accessElementInArray(chocolateBars){
  return chocolateBars[2]
}
function addElementToEndOfArray(chocolateBars, foo){
  const addElementToEndOfArray = [...chocolateBars, "foo"]
  return addElementToEndOfArray
}
function destructivelyAddElementToEndOfArray(chocolateBars, foo){
  chocolateBars.push(foo)
  return chocolateBars
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars){
  const removeElementFromBeginningOfArray = chocolateBars.slice(1);
  return removeElementFromBeginningOfArray
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}
function removeElementFromEndOfArray(chocolateBars){
  const removeElementFromEndOfArray = chocolateBars.slice(0,-1);
  return removeElementFromEndOfArray
}
