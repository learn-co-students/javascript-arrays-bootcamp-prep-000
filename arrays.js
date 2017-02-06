var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//Return a new array and not alter the original
function addElementToBeginningOfArray(b1,a) {
  return [a,...b1]
}

//Should alter the original array that's passed in
function destructivelyAddElementToBeginningOfArray(b2,b) {
  b2.unshift(b)
  return b2
}

//should not alter the original array
function addElementToEndOfArray(b3,c) {
  return[...b3,c]
}

//should alter the original array
function destructivelyAddElementToEndOfArray(b4,d) {
  b4.push(d)
  return b4
}

function accessElementInArray(e,b5) {
  return e[b5]
}


function destructivelyRemoveElementFromBeginningOfArray (b6,f) {
  b6.shift(f)
  return b6
}

function removeElementFromBeginningOfArray (b7) {
  b8=b7.slice(1)
  return b8
}

function destructivelyRemoveElementFromEndOfArray (b9) {
  b10=b9.pop()
  return b10
}

function removeElementFromEndOfArray (b11) {
  b12=b11.slice(0,b11.length - 1)
  return b12
}
