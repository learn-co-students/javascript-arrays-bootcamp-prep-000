var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(arr, elem){
  arr = [elem, ...arr]
  return arr
}


function destructivelyAddElementToBeginningOfArray (arr, elem){
  arr.unshift(elem)
  return arr
}


function addElementToEndOfArray(arr, elem){
  arr = [ ...arr, elem]
  return arr
}


function destructivelyAddElementToEndOfArray (arr, elem){
  arr.push(elem);
  return arr
}

function accessElementInArray(arr, elem){
    return (elem + arr[0])
}

function destructivelyRemoveElementFromBeginningOfArray(arr, elem){
  arr.unshift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  arr = arr.slice(1)
  return arr
}


function destructivelyRemoveElementFromEndOfArray(arr){
  arr.push()
  return arr
}

function removeElementFromEndOfArray(arr){
  arr.pop()
  return arr
}
