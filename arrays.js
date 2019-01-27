var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(myArr, elem) {
  return [elem, ...myArr]
}

function destructivelyAddElementToBeginningOfArray(myArr, elem) {
  myArr.unshift(elem)
  return myArr
}

function addElementToEndOfArray(myArr, elem) {
  return [...myArr, elem]
}

function destructivelyAddElementToEndOfArray(myArr, elem) {
  myArr.push(elem) 
  return myArr
}

function accessElementInArray(myArr, ndx) {
  return myArr[ndx] 
}

function destructivelyRemoveElementFromBeginningOfArray(myArr) {
  myArr.shift()
  return myArr
}

function removeElementFromBeginningOfArray(myArr) {
  return myArr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(myArr) {
  myArr.pop()
  return myArr
}

function removeElementFromEndOfArray(myArr) {
  return myArr.slice(0, myArr.length - 1)
}