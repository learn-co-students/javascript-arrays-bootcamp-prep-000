var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray (a, b){
  var newBars = [b,...a]
  return newBars
}

function destructivelyAddElementToBeginningOfArray (a, b){
  a.unshift(b)
  return a
}

function addElementToEndOfArray (a,b){
  var newArray = [...a,b]
  return newArray
}

function destructivelyAddElementToEndOfArray (a,b){
  a.push(b)
  return a
}

function accessElementInArray (a,b){
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift()
  return a
}

function removeElementFromBeginningOfArray (a){
  var newSlice = a.slice(1)
  return newSlice
}

function destructivelyRemoveElementFromEndOfArray(a){
  a.pop()
  return a
}

function removeElementFromEndOfArray (a){
  var endSlice = a.slice(0, a.length - 1)
  return endSlice
}
