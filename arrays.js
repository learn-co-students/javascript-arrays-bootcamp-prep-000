var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

// New to do:

var testArray1 = [
  "At middle,",
  "At end."
]

var testArraytoAdd1 = "At beginning,"

function addElementToBeginningOfArray(testArray1, testArraytoAdd1) {
  var returnWithoutModifying = [testArraytoAdd1, ...testArray1]
  return returnWithoutModifying
}

// Next to do:

var testArray2 = [
  "Miney",
  "Moe"
]

var testArraytoAdd2 = "Meanine"

function destructivelyAddElementToBeginningOfArray(testArray2, testArraytoAdd2) {
  testArray2.unshift(testArraytoAdd2)
  return testArray2
}

// Next to do:

function addElementToEndOfArray(testArray1, testArraytoAdd1) {
  var returnWitoutModifying2 = [...testArray1, testArraytoAdd1]
  return returnWitoutModifying2
}

function destructivelyAddElementToEndOfArray(testArray2, testArraytoAdd2) {
  testArray2.push(testArraytoAdd2)
  return testArray2
}

// Next to do:

var indexToAccess = 0
function accessElementInArray(testArray1, indexToAccess) {
  return testArray1[indexToAccess]
}

// Next to do.  Seems test results normalized with the above stuff

function destructivelyRemoveElementFromBeginningOfArray(testArray2) {
  testArray2.shift()
  return testArray2
}

function removeElementFromBeginningOfArray(testArray1) {
  testArray3 = testArray1.slice(1)
  return testArray3
}

function destructivelyRemoveElementFromEndOfArray(testArray1) {
  testArray4 = testArray1.pop()
  return testArray4
}

function removeElementFromEndOfArray(testArray2) {
  testArray5 = testArray2.slice(0, testArray2.length - 1)
  return testArray5
}

