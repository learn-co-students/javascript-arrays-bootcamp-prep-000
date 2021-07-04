var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]



function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele) 
  return arr
}



function addElementToEndOfArray(arr, ele) {
  return [...arr, ele]
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele)
  return arr
}


function accessElementInArray(x, y) {
  return x[y]
}


function destructivelyRemoveElementFromBeginningOfArray(x) {
  x.shift();
  return x 
}

function removeElementFromBeginningOfArray(x) {
  return x.slice(1);
  
}

function destructivelyRemoveElementFromEndOfArray(x) {
   x.pop()
   return x
}

function removeElementFromEndOfArray(x) {
  return x.slice(0, x.length - 1);
  
}






















