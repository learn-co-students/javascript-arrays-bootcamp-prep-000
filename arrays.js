var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele)
  return arr
}

function addElementToEndOfArray(arr, ele) {
  newArray = [...arr, ele]
  return newArray
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele)
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
  newArray=arr.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  newArray = arr.slice(0, arr.length-1)
  return newArray
}
