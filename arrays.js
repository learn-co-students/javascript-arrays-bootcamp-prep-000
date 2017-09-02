var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

var nerds = "nerds";

var indexposition = 0;

function addElementToBeginningOfArray(chocolateBars, nerds) {
  return [nerds, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, nerds) {
  chocolateBars.unshift(nerds)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, nerds) {
  return [...chocolateBars, nerds]
}

function destructivelyAddElementToEndOfArray(chocolateBars, nerds) {
    chocolateBars.push(nerds)
    return chocolateBars
}

function accessElementInArray(chocolateBars, indexposition) {
  return chocolateBars[indexposition]
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
