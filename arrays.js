var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arr, elly ) {
  
  var newArr = [elly, ...arr]
  return newArr
  
}

function destructivelyAddElementToBeginningOfArray(arr, elly) {
  
  arr.unshift(elly)
  return arr
  
}

function addElementToEndOfArray(arr, elly) {
  
  var newArr = [...arr, elly]
  return newArr
  
}

function destructivelyAddElementToEndOfArray(arr, elly) {
  
  arr.push(elly)
  return arr
  
}

function accessElementInArray(arr, ind) {
  
  return arr[ind]
  
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
 
  arr.shift()
  return arr 
  
}

function removeElementFromBeginningOfArray(arr) {
  
  var newArr = arr.slice(1)
  return newArr
  
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  
  arr.pop();
  return arr
  
}

function removeElementFromEndOfArray(arr) {
  
  var newArr = arr.slice(0, arr.length - 1)
  return newArr
  
}
