var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, sweetThings){
  return [sweetThings, ...chocolateBars]
}
 
function destructivelyAddElementToBeginningOfArray(chocolateBars, sweetThings){
  chocolateBars.unshift(sweetThings)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, sweetThings){
  return [...chocolateBars, sweetThings]
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, sweetThings){
  chocolateBars.push(sweetThings)
  return chocolateBars
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  const string = ["string1", "string2", "string3"]
  string.shift()
  return string
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, sweetThings){
  return [sweetThings, ...chocolateBars]
}
 
function destructivelyAddElementToBeginningOfArray(chocolateBars, sweetThings){
  chocolateBars.unshift(sweetThings)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, sweetThings){
  return [...chocolateBars, sweetThings];
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, sweetThings){
  chocolateBars.push(sweetThings)
  return chocolateBars
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1)
}