var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(initial, addition) {
  return [addition, ...initial]
}

function destructivelyAddElementToBeginningOfArray(initial, addition) {
  initial.unshift(addition)
  return initial
}

function addElementToEndOfArray(initial, addition) {
  return [...initial, addition]
}

function destructivelyAddElementToEndOfArray(initial, addition) {
  initial.push(addition)
  return initial
}

function accessElementInArray(initial, index) {
  return initial[index]
}

function destructivelyRemoveElementFromBeginningOfArray(initial) {
  initial.shift()
  return initial
}

function removeElementFromBeginningOfArray(initial) {
  return initial.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(initial) {
  initial.pop()
  return initial
}

function removeElementFromEndOfArray(initial) {
  return initial.slice(0, initial.length-1)
}
