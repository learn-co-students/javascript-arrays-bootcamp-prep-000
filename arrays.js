/*
 * !!! Test is failing Unsure if code is legit !!!
 * a === array
 * b === element
 * i === index
 */

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a,b) {
  return [b, ...a]
}

function destructivelyAddElementToBeginningOfArray(a,b) {
  // unshift
  a.unshift(b)
  return a
}

function addElementToEndOfArray(a,b){
  return [...a, b]
}

function destructivelyAddElementToEndOfArray(){
  // push
  a.push(b)
  return a
}

function accessElementInArray(a,i){
  // ref[index[]
  return a[i]
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  // shift
  return a.shift
}

function removeElementFromBeginningOfArray(a){
  // slice
  return a.slice
}

function destructivelyRemoveElementFromEndOfArra(a){
  // pop
  return a.pop
}

// slice
function removeKitKat(a){
  return [...a.slice(0, 2), ...a.slice(3)]
}