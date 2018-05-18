var chocolateBars = ['snickers','hundred grand','kitkat','skittles']
var addele = 'foo'
function addElementToBeginningOfArray(chocolateBars,addele) {
  return [addele,...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars,addele) {
  chocolateBars.unshift(addele)
  return chocolateBars
}
function addElementToEndOfArray (chocolateBars,addele) {
  return [...chocolateBars,addele]
}
function destructivelyAddElementToEndOfArray(chocolateBars,addele) {
  chocolateBars.push(addele)
  return chocolateBars
}
function accessElementInArray (chocolateBars,n) {
  return chocolateBars[n]
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars) {
 return chocolateBars.slice(1)

}
function removeElementFromEndOfArray (chocolateBars){ 
  return chocolateBars.slice(0,chocolateBars.length-1)
 
}
function destructivelyRemoveElementFromEndOfArray (chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
  
}