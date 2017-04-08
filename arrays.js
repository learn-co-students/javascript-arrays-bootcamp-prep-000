var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(chocolateBars, addBar){
var chocolateBars2 = [addBar, ...chocolateBars]
return chocolateBars2
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, addBar){
  chocolateBars.unshift(addBar)
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, addBar){
  var chocolateBars2 = [...chocolateBars, addBar]
  return chocolateBars2
}
function destructivelyAddElementToEndOfArray(chocolateBars, addBar){
  chocolateBars.push(addBar)
  return chocolateBars
}
function accessElementInArray(chocolateBars, index){
  return chocolateBars[index]
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
   chocolateBars.shift()
   return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars){
  var chocolateBars2 = chocolateBars.slice(1)
  return chocolateBars2
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}
function removeElementFromEndOfArray(chocolateBars){
  chocolateBars2 = chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars2
}
