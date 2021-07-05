var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(addArray, element){
  var newArray = [element, ...addArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(addArray, element){
  addArray.unshift(element)
  return addArray
}

function addElementToEndOfArray(addArray, element){
  var newArray = [...addArray, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(addArray, element){
  addArray.push(element)
  return addArray
}

function accessElementInArray(findArray, index){
  var finders = findArray[index]
  return finders
}

function destructivelyRemoveElementFromBeginningOfArray(cutArray){
  cutArray.shift()
  return cutArray
}

function removeElementFromBeginningOfArray(subArray){
  var newArray = subArray.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(subArray){
  subArray.pop()
  return subArray
}

function removeElementFromEndOfArray(subArray){
  var newArray = subArray.slice(0, subArray.length - 1)
  return newArray
}
