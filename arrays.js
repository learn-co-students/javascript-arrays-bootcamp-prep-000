var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a,b){
  var aNew = [b, ...a]
  return aNew
}

function destructivelyAddElementToBeginningOfArray(a,b){
  a.unshift(b)
  return a
}

function addElementToEndOfArray(a,b){
  var aNew = [...a, b]
  return aNew
}

function destructivelyAddElementToEndOfArray(a,b){
  a.push(b)
  return a
}


function accessElementInArray(a,b){
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a,b){
  a.shift(b)
  return a
}

function removeElementFromBeginningOfArray(a){
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a){
  a.pop()
  return a
}

function removeElementFromEndOfArray(a){
  var aNew = a.slice(0,a.length-1)
  return aNew
}