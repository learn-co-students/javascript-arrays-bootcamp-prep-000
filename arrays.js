var chocolateBars = ['snickers','hundred grand','kitkat','skittles']
var addele = 'foo'
function addElementToBeginningOfArray(chocolateBars,addele) {
  return [addele,...chocolateBars]
 
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,addele) {
  chocolateBars.unshift(addele)
  return chocolateBars
}