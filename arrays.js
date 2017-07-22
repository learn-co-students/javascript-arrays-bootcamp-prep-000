var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(arr,a) {
  return ([a,...arr])
}

function destructivelyAddElementToBeginningOfArray(arr,a) {
  arr.unshift(a)
  return (arr);
}

function addElementToEndOfArray(arr,a) {
  return ([...arr,a])
  }

function destructivelyAddElementToEndOfArray(arr,a) {
  arr.push(a)
  return (arr)
}

function accessElementInArray(arr,index) {
  return (arr[index])
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return (arr)
}

function removeElementFromBeginningOfArray(arr){
  return (arr.slice(1))
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return (arr)
}

function removeElementFromEndOfArray(arr) {
  return (arr.slice(0, arr.length -1))
}
