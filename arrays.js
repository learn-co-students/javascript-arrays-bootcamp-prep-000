var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray (arr, elem){
  let newArr=[elem, ...arr]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem)
  return arr
}
function addElementToEndOfArray(arr, elem) {
  let newArr= [...arr, elem]
  return newArr
  }
  
function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem)
  return arr
} 

function accessElementInArray(arr, i) {
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray (arr) {
  let newArr=arr.slice(0, arr.length-1)
  return newArr
}