var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
someArray = []
function addElementToBeginningOfArray(someArray, someElement){
  someArray2 = [someElement, ...someArray]
  return someArray2
}

function destructivelyAddElementToBeginningOfArray(someArray, someElement){
  someArray.unshift(someElement)
  return someArray
}
function addElementToEndOfArray(someArray, someElement){
  someArray2 = [...someArray, someElement]
  return someArray2
}
function destructivelyAddElementToEndOfArray(someArray, someElement){
  someArray.push(someElement)
  return someArray
}
function accessElementInArray(someArray, someIndex){
  return someArray[someIndex]
}
function destructivelyRemoveElementFromBeginningOfArray(someArray){
  someArray.shift()
  return someArray
}
function removeElementFromBeginningOfArray(someArray){
  someArray = someArray.slice(1)
  return someArray
}
function destructivelyRemoveElementFromEndOfArray(someArray){
  someArray.pop()
  return someArray
}
function removeElementFromEndOfArray(someArray){
  someArray = someArray.slice(0, someArray.length - 1)
  return someArray
}
