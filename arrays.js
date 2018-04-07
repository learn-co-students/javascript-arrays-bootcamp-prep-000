/*
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
console.log(chocolateBars)

var chocolateBars = ["quacker", ...chocolateBars]
console.log(chocolateBars)

chocolateBars.push("hershey")
console.log(chocolateBars)

chocolateBars.unshift("Jolly Ranchers")
console.log(chocolateBars) 
*/

var myarray = ["Andy", "John"]

function addElementToBeginningOfArray(array,element){
  return [element, ...array]
}
addElementToBeginningOfArray(myarray,"Dan")

var myarray = ["Andy", "John"]

function addElementToBeginningOfArray(array,element){
  var newarray = [element, ...array]
  return newarray
}
addElementToBeginningOfArray(myarray,"Dan")

var myarray = ["Andy", "John"]

function addElementToBeginningOfArray(array){
  return array[1]
}
addElementToBeginningOfArray(myarray)

