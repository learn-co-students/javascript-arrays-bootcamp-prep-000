var chocolateBars = ["snickers" , "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a,b){
  var newar = [b, ...a]
  return newar
}

function destructivelyAddElementToBeginningOfArray(a,b){
 a.unshift(b)
 return a
}

function addElementToEndOfArray(a,b){
  var newar = [...a, b]
  return newar
}

function destructivelyAddElementToEndOfArray(a,b){
 a.push(b)
 return a
}

function accessElementInArray(a,b){
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift()
  return a
}

function removeElementFromBeginningOfArray(a){
  var newar = a.slice(1)
  return newar
}

function destructivelyRemoveElementFromEndOfArray(a){
  a.pop()
  return a
}

function removeElementFromEndOfArray(a){
  var newar = a.slice(0, a.length-1)
  return newar
}