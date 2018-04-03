var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(chocolateBars, taffy) {
  var bars = [taffy,...chocolateBars];
  return bars
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, taffy) {
  chocolateBars.unshift(taffy)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, taffy) {
  var bars = [...chocolateBars, taffy];
  return bars
}
function destructivelyAddElementToEndOfArray(chocolateBars, taffy) {
  chocolateBars.push(taffy)
  return chocolateBars
}

function accessElementInArray(chocolateBars, taffy) {
  var specific = chocolateBars[parseInt(taffy)]
  return specific
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  candies = chocolateBars.slice(1)
  return candies
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
  candy = chocolateBars.slice(0, chocolateBars.length - 1)
  return candy
}



