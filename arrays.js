var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(chocolateBars,newElement) {
  chocolateBars = [newElement,...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,badElement){
  chocolateBars.unshift(badElement)
  return chocolateBars
}

function addElementToEndOfArray (chocolateBars,safeElement){
chocolateBars = [...chocolateBars,safeElement]
return chocolateBars
}

function destructivelyAddElementToEndOfArray (chocolateBars,onNoNo) {
  chocolateBars.push(onNoNo)
  return chocolateBars
}

function accessElementInArray(chocolateBars,pickNoOne){
  return chocolateBars[pickNoOne]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray (chocolateBars){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0,chocolateBars.length-1)
}
