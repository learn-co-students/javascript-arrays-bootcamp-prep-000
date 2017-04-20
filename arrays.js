var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(x,y) {
  const newx = [y, ...x]
  return newx
}

function destructivelyAddElementToBeginningOfArray(x,y) {
  x.unshift(y)
  return x
}

function addElementToEndOfArray(x,y) {
  const newx = [...x, y]
  return newx
}

function destructivelyAddElementToEndOfArray(x,y) {
  x.push(y)
  return x
}

function accessElementInArray(x,y) {
  return (x[y])
}

function destructivelyRemoveElementFromBeginningOfArray(x) {
  x.shift()
  return x
}
function removeElementFromBeginningOfArray(x) {
   const newx = x.slice(1)
   return newx
 }

function destructivelyRemoveElementFromEndOfArray(x) {
  x.pop()
  return x
}

function removeElementFromEndOfArray(x) {
  const newx = x.slice(0, x.length-1)
  return newx
}
