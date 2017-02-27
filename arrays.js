var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr,el) {
  var newArr = [el, ...arr]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(arr,el) {
  arr.unshift(el)
  return arr
}

function addElementToEndOfArray(arr,el) {
  var newArr = [...arr, el]
  return newArr
}

function destructivelyAddElementToEndOfArray(arr,el) {
  arr.push(el)
  return arr
}

function accessElementInArray(arr,ind) {
  return arr[ind]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift()
}

function removeElementFromBeginningOfArray(arr) {
  arr2 = arr.slice(1)
  return arr2
}

function destructivelyRemoveElementFromEndOfArra(arr) {
  return arr.pop()
}

function removeElementFromEndOfArray(array) {
  arr2 = array.slice(0,array.length-1)
  return arr2
}
