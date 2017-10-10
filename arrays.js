var chocolateBars = ["snickers", 'hundred grand','kitkat','skittles']

//var testArray=new Array()

function addElementToBeginningOfArray(sampleArray, element) {
  var result = [element, ...sampleArray]
  return result
}

function destructivelyAddElementToBeginningOfArray(sampleArray, element) {
  sampleArray === sampleArray.unshift(element)
  return sampleArray
}

function addElementToEndOfArray(sampleArray, element) {
  var result = [...sampleArray, element]
  return result
}

function destructivelyAddElementToEndOfArray(sampleArray, element) {
  sampleArray === sampleArray.push(element)
  return sampleArray
}

function accessElementInArray(sampleArray, n) {
  return sampleArray[n]
}

function destructivelyRemoveElementFromBeginningOfArray(sampleArray) {
  sampleArray.shift()
  return sampleArray
}

function removeElementFromBeginningOfArray(sampleArray) {
  var result = sampleArray.slice(1)
  return result
}

function destructivelyRemoveElementFromEndOfArray(sampleArray) {
  sampleArray.pop()
  return sampleArray
}

function removeElementFromEndOfArray(sampleArray) {
  var result = sampleArray.slice(0,sampleArray.length-1)
  return result
}
