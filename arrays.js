var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr,val) {
  return [val, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr,val) {
  arr.unshift(val)
  return arr
}

function addElementToEndOfArray(arr,val) {
  return [...arr,val]
}

function destructivelyAddElementToEndOfArray(arr,val) {
  arr.push(val)
  return arr
}

function accessElementInArray(arr,index) {
  return arr[index]
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
