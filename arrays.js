var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, b){
  var newArr = [b, ...arr]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(arr, b){
  arr.unshift(b)
  return arr
}

function addElementToEndOfArray(arr, b){
  var newArr = [...arr, b]
  return newArr
}

function destructivelyAddElementToEndOfArray(arr, b){
  arr.push(b)
  return arr
}

function accessElementInArray(arr, b){
  return arr[b]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  var newArr = arr.slice(1)
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr){
  var newArr = arr.slice(0, arr.length - 1)
  return newArr
}