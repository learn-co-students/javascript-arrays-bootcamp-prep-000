function addElementToBeginningOfArray(arr, el) {
  new_arr = Array.new()
  new_arr.push(arr)
  return new_arr.unshift(el)
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  return arr.unshift(el)
}

function addElementToEndOfArray(arr, el) {
  new_arr = Array.new()
  new_arr.push(arr)
  return new_arr.push(el)
}

function destructivelyAddElementToEndOfArray(arr, el) {
  return arr.push(el)
}

function accessElementInArray(arr, ind) {
  return arr[ind]  
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1)
}