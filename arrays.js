var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr ]
}

function destructivelyAddElementToBeginningOfArray(arr, ele){
  arr.unshift(ele);
  return arr;
}

function addElementToEndOfArray(arr, ele) {
  return [...arr, ele]
}

function destructivelyAddElementToEndOfArray(arr, ele){
  arr.push(ele);
  return arr;
}

function accessElementInArray(arr, ind){
  return arr[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  var sliced = arr.slice(1)
  return sliced
}

function removeElementFromEndOfArray(arr){
  arr.pop()
  return arr
}
