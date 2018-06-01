var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(chocolateBars, Element){
  return[Element,...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, Element){
  chocolateBars.unshift(Element)
return chocolateBars
}
function addElementToEndOfArray(chocolateBars, Element){
  return[...chocolateBars, Element]
}
function destructivelyAddElementToEndOfArray(chocolateBars, Element){
  chocolateBars.push(Element)
  return chocolateBars
}
function accessElementInArray(chocolateBars, index){
  return chocolateBars[index]
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function removeElementFromEndOfArray (chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length -1)
}