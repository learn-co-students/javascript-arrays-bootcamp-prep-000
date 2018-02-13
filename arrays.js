var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arrayA, elementB) {
  return [elementB, ...arrayA]
  
}

function destructivelyAddElementToBeginningOfArray (arrayB, elementB) {
  arrayB.unshift(elementB)
  return arrayB
  
}

function addElementToEndOfArray(arrayA, elementA) {
  return [...arrayA, elementA]
}

function destructivelyAddElementToEndOfArray(arrayA, elementA) {
  arrayA.push(elementA)
  return arrayA
}

function accessElementInArray(arrayA, i) {
  return arrayA[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayA) {
  arrayA.shift()
  return arrayA
}

function removeElementFromBeginningOfArray(arrayA) {
  return arrayA.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arrayA) {
  arrayA.pop()
  return arrayA
}

function removeElementFromEndOfArray(arrayA) {
  return arrayA.slice(0, arrayA.length - 1)
}
