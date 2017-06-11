function chocolateBars() {
  return ['snickers', 'hundred grand', 'kitkat','skittles']
}

function addElementToBeginningOfArray(array, element) {
  var newArr = [element,...array]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(arr, element) {
  var newArr = [...arr,element]
  return newArr
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
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
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  var newArr = arr.slice(0,arr.length-1)
  return newArr
}
