var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, whatToAdd){
  var adjustedArr = [whatToAdd, ...arr]
  return adjustedArr
}

function destructivelyAddElementToBeginningOfArray(arr, whatToAdd){
  arr.unshift(whatToAdd)
  return arr
}



function addElementToEndOfArray(arr, whatToAdd){
  var adjustedArr = [...arr, whatToAdd]
  return adjustedArr
}

function destructivelyAddElementToEndOfArray(arr, whatToAdd){
   arr.push(whatToAdd)
  return arr
}



function accessElementInArray(arr, index){
  return arr[index]
}



function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}


function removeElementFromBeginningOfArray(arr){
  adjustedArr = arr.slice(1)
  return adjustedArr
}



function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr){
  //adjustedArr = arr.slice(0, arr.length - 1)
  return arr.slice(0, arr.length - 1)
}
