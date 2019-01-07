
var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"]


function addElementToBeginningOfArray(arr, e){
  var r = [...arr]
  r.unshift(e)
  return r
}

function destructivelyAddElementToBeginningOfArray(arr,e){
  arr.unshift(e)
  return arr
}

function addElementToEndOfArray (){
  var r = [...arr]
  r.push(e)
  return r
}

function destructivelyAddElementToEndOfArray(){
  arr.push(e)
  return arr
}

function accessElementInArray(arr,i){
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  var r = arr.slice(1)
  return r
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr){
  var r = arr.slice(0,arr.length-1)
  return r
}

cars = ["Honda","Toyota"]

console.log(addElementToBeginningOfArray(cars,"BMW"))
