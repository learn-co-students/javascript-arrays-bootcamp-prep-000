var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//var "foo" = mnm

function addElementToBeginningOfArray (chocolateBars, mnm){
  return [mnm, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray (chocolateBars, mnm){
  chocolateBars.unshift (mnm)
  return chocolateBars
}
function addElementToEndOfArray (chocolateBars, mnm){
  return [...chocolateBars, mnm]
}
function destructivelyAddElementToEndOfArray (chocolateBars, mnm){
  chocolateBars.push (mnm)
  return chocolateBars
}
function accessElementInArray (array, index){
  return (array [index])
}
function destructivelyRemoveElementFromBeginningOfArray (chocolateBars, mnm){
  chocolateBars.shift ()
  return chocolateBars
}
function removeElementFromBeginningOfArray (chocolateBars, mnm){
  return chocolateBars.slice(1)
}
function destructivelyRemoveElementFromEndOfArray (chocolateBars, mnm){
  chocolateBars.pop ()
  return chocolateBars
}
function removeElementFromEndOfArray (chocolateBars, mnm){
  return chocolateBars.slice (0, chocolateBars.length - 1)
}
