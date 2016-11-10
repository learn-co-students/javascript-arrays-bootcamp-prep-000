var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, ele) {
  return([ele, ...a])
}

function destructivelyAddElementToBeginningOfArray(a, member) {
  a.unshift(member)
  return a
}

function addElementToEndOfArray(a,member) {
  return([...a, member])
}

function destructivelyAddElementToEndOfArray(a, member) {
  a.push(member)
  return a
}

function accessElementInArray(a,position) {
  return a[position]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  return a.shift();
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop()
}

function removeElementFromEndOfArray(a) {
  return a.slice(0,a.length -1 )
}
