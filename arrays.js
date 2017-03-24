var chocolateBars = ["snickers", "hunderd grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(e1, e2) {
  e1.unshift(e2)
  return e1
}

function addElementToBeginningOfArray(e1, e2) {
  var newbubby = [e2, ...e1]
  return newbubby
}

function destructivelyAddElementToEndOfArray(e1, e2) {
  e1.push(e2)
  return e1
}

function addElementToEndOfArray(e1, e2) {
  var newbubby2 = [...e1, e2]
  return newbubby2
}

function accessElementInArray(e1, e2) {
  return(e1[e2]);
}

function destructivelyRemoveElementFromBeginningOfArray(e1){
  e1.shift()
  return e1
}

function removeElementFromBeginningOfArray(e1) {
  newbubby3 = e1.slice(1)
  return newbubby3
}

function destructivelyRemoveElementFromEndOfArray(e1) {
  e1.pop()
  return e1
}

function removeElementFromEndOfArray(e1) {
  newbubby4 = e1.slice(0, e1.length - 1)
  return newbubby4
}
