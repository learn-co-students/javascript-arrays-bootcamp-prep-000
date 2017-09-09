var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(myArray, newEl) {
  const newArray = [newEl, ...myArray]
  return newArray
} // addElementToBeginningOfArray(chocolateBars, "baby ruth")

function destructivelyAddElementToBeginningOfArray(myArray, newEl) {
  myArray.unshift(newEl)
  // myArray[1] = newEl
  return myArray
} // destructivelyAddElementToBeginningOfArray(chocolateBars, "baby ruth")

function addElementToEndOfArray(myArray, newEl) {
  const newArray = [...myArray, newEl]
  return newArray
}

function destructivelyAddElementToEndOfArray(myArray, newEl) {
  myArray.push(newEl)
  return myArray
}

function accessElementInArray(myArray, index) {
  return myArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(myArray) {
  newArray = myArray.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(myArray) {
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray(myArray) {
  return myArray.slice(0, myArray.length - 1)
}
