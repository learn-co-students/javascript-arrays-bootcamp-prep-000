
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var elementData
var arrayName = []
var newArray = []


function addElementToBeginningOfArray(arrayName, elementData) {
  newArray = arrayname
  newArray.unshift(elementData)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(arrayName, elementData) {
  arrayName.unshift(elementData)
  return arrayName
}

function addElementToEndOfArray (arrayName, elementData) {
  newArray = arrayname
  newArray.push(elementData)
  return newArray
}

function destructivelyAddElementToEndOfArray(arrayName, elementData) {
  arrayName.push(elementData)
  return arrayName
}

function accessElementInArray(arrayName, indexNumber) {
  return arrayName[indexNumber]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayName) {
  arrayName.shift()
  return arrayName
}

function removeElementFromBeginningOfArray(arrayName) {
  newArray = arrayName
  newArray.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(arrayName){
  arrayName.pop()
  return arrayName
}

function removeElementFromEndOfArray(arrayName) {
  newArray = arrayName
  newArray.slice(0, newArray.length - 1)
  return newArray
}
