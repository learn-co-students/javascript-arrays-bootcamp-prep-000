
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"
]

function addElementToBeginningOfArray(aray, element) {
  var newArray = [element, ...aray]
  return newArray
} 
function destructivelyAddElementToBeginningOfArray(aray, element) {
  aray.unshift(element)
  return aray
}

addElementToBeginningOfArray(chocolateBars, "Miami")
destructivelyAddElementToBeginningOfArray(chocolateBars, "Georgia")

function addElementToEndOfArray(aray, element) {
  var newArray = [...aray, element]
  return newArray
}
function destructivelyAddElementToEndOfArray(aray,element) {
  aray.push(element)
  return aray
}


addElementToEndOfArray(chocolateBars,"foo")

destructivelyAddElementToEndOfArray(chocolateBars, "foo")

function accessElementInArray(aray, index) {
  return aray[index]
}


accessElementInArray(chocolateBars, 2)

function destructivelyRemoveElementFromBeginningOfArray(aray) {
  aray.shift()
  return aray
}

destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

function removeElementFromBeginningOfArray(aray) {
  var newArray = aray.slice(1)
  return newArray
}

removeElementFromBeginningOfArray(chocolateBars)

function destructivelyRemoveElementFromEndOfArray(aray) {
  aray.pop()
  return aray
}

destructivelyRemoveElementFromEndOfArray(chocolateBars)


function removeElementFromEndOfArray(aray) {
  var newArray = aray.slice(0, -1)
  return newArray
}

removeElementFromEndOfArray(chocolateBars)



