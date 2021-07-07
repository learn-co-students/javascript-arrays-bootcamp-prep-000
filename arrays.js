var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (chocolateBars){
  return ['foo', ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray (chocolateBars){
  chocolateBars.unshift('foo')
  return chocolateBars
}
function addElementToEndOfArray (chocolateBars){
  return [...chocolateBars, 'foo']
}
function destructivelyAddElementToEndOfArray(chocolateBars) {
    return [...chocolateBars, 'foo']
}
function destructivelyAddElementToEndOfArray (chocolateBars) {
  chocolateBars.push('foo')
  return chocolateBars
}
function accessElementInArray (chocolateBars, kitkat) {
  return chocolateBars[2]
}
function destructivelyRemoveElementFromBeginningOfArray (chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}
 function removeElementFromBeginningOfArray (chocolateBars) {
   chocolateBars = chocolateBars.slice(1)
   return chocolateBars
 }
function destructivelyRemoveElementFromEndOfArray (chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}
function removeElementFromEndOfArray (chocolateBars) {
  chocolateBars = chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars
}
