chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, elem){
  var newarr = [elem, ...arr]
  return (newarr)
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem)
  return (arr)
}

function addElementToEndOfArray(arr, elem){
  var newarr = [...arr, elem]
  return (newarr)
}

function destructivelyAddElementToEndOfArray(arr, elem){
  arr.push(elem)
  return (arr)
}

function accessElementInArray(arr, idx){
  return (arr[idx])
}

function removeElementFromBeginningOfArray(arr){
  return(arr.slice(1))
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.pop()
  return (arr)
}

function removeElementFromEndOfArray(arr){
  arr = arr.slice(0, -1)
  return (arr)
}

function destructivelyRemoveElementFromEndOfArray(arr, elem){
  arr.shift(elem)
  return (arr)
}
