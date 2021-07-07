var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var number = [1]
function addElementToBeginningOfArray(){
  number= ["foo", ...number]
  return number
}
var number1 = [1]
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
  
}
var number2 = [1]
function addElementToEndOfArray(){
  number2=[...number2, "foo"]
  return number2
}

var number3 = [1]
function destructivelyAddElementToEndOfArray(number3){
  number3.push("foo")
  return number3
}
var array = [1,2,3]
function accessElementInArray(){
  return array[2]
}
var array1 = [1,2,3]
function removeElementFromBeginningOfArray(array1){
  arr = array1.slice(1)
  return arr
}
array2= [1,2,3]
function destructivelyRemoveElementFromBeginningOfArray(array2){
  array2.shift()
  return array2
}
var array3 = [1,2,3]
function removeElementFromEndOfArray(array3){
  arr = array3.slice(0,-1)
  //return array3
  return arr
}
var array4 = [1,2,3]
function destructivelyRemoveElementFromEndOfArray(array4){
  array4.pop()
  return array4
}
