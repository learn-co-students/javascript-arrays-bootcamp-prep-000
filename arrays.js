var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(chocolateBars, "payday") {
  return chocolateBars.unshift("payday")
}

addElementToBeginningOfArray()

function destructivelyAddElementToBeginningOfArray(chocolateBars, "payday") {
  return ["payday", ...chocolateBars]
}

destructivelyAddElementToBeginningOfArray()

function addElementToEndOfArray(chocolateBars, "payday") {
  return chocolateBars.push("payday")
}

addElementToEndOfArray()

function destructivelyAddElementToEndOfArray(chocolateBars, "payday") {
  return [...chocolateBars, "payday"]
}

destructivelyAddElementToEndOfArray()

function accessElementInArray() {
  console.log(chocolateBars[2])
}

function destructivelyRemoveElementFromBeginningOfArray() {
  chocolateBars.shift()
  return chocolateBars
}

function destructivelyRemoveElementFromBeginningOfArray() {
  chocolateBars.slice(1)
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray() {
  chocolateBars.pop
  return chocolateBars
}

function removeElementFromBeginningOfArray() {
  chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars
}
