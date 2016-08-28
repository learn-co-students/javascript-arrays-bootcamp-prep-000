var chocolateBars = ['snickers', 'hundred grand', 'kit-kat', 'skittles']

function addElementToBeginningOfArray(oArray, element) {
  var nArray = [element, ...oArray]
  return nArray
}

function destructivelyAddElementToBeginningOfArray(oArray, element) {
  oArray.unshift(element)
  return oArray
}

function addElementToEndOfArray(oArray, element) {
  var nArray = [...oArray, element]
  return nArray
}

function destructivelyAddElementToEndOfArray(oArray, element) {
  oArray.push(element)
  return oArray
}

function accessElementInArray(oArray, index) {
  return oArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(oArray) {
  oArray.shift()
  return oArray
}

function removeElementFromBeginningOfArray(oArray) {
  var nArray = oArray.slice(1)
  return nArray
}

function destructivelyRemoveElementFromEndOfArray(oArray) {
  oArray.pop()
  return oArray
}

function removeElementFromEndOfArray(oArray) {
  var nArray = oArray.slice(0, oArray.length - 1)
  return nArray
}
