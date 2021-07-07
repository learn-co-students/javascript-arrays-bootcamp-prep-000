var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittle"]

const array = [1]
var element = "foo"
function addElementToBeginningOfArray(array, element){
const newArray = ["foo", ...array]
return newArray
}
var myArray = [1] 
var element = "foo"
function destructivelyAddElementToBeginningOfArray(myArray, element){
myArray.unshift("foo")
 return myArray
}
const theArray = [1]
var element = "foo"
function addElementToEndOfArray(theArray, element){
  const newArray = [...theArray, "foo"]
  return newArray
}
var badArray = [1]
var element = "foo"
function destructivelyAddElementToEndOfArray(badArray, element){
badArray.push("foo")
return badArray
}
var stonedArray = [1, 2, 3]
var index = 2
function accessElementInArray(stonedArray, index){
  return stonedArray[2]
}
var pauseArray = [1, 2, 3]
function removeElementFromBeginningOfArray(array){
pauseArray.shift()
return pauseArray
}
var breakArray = [1, 2, 3]
function removeElementFromEndOfArray(array){
breakArray.pop()
return breakArray
}