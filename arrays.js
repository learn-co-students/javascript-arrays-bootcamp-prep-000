var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles']
var candy = 'candy'

function addElementToBeginningOfArray(chocolateBars, candy) {
  return [candy, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candy) {
  chocolateBars.unshift(candy)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, candy) {
  return [...chocolateBars, candy]
}

function destructivelyAddElementToEndOfArray(chocolateBars, candy) {
  chocolateBars.push(candy)
  return chocolateBars
}

function accessElementInArray(arr, index) {
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1)
}
