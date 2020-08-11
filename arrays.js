var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var myArray = [1]

function addElementToBeginningOfArray(myArray) {
  return ['foo', ...myArray]
}

function destructivelyAddElementToBeginningOfArray(myArray) {
  myArray.unshift('foo')
  return myArray
}

function addElementToEndOfArray() {
  return [...myArray, 'foo']
}

function destructivelyAddElementToEndOfArray(myArray) {
  myArray.push('foo')
  return myArray
}

function accessElementInArray(chocolateBars) {
  return chocolateBars[2]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray() {
  var teams = [1, 2, 3]
  return teams.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1)
}