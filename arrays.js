var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray() {
  barresDeChocolat = ["Mars",...chocolateBars]
  return barresDeChocolat
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift("Caramilk")
  return chocolateBars
}

function addElementToEndOfArray() {
  chocolateBars = [...chocolateBars, "Mr Big"]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray() {
  [...chocolateBars, "Crunchy"]
  return chocolateBars
}

function accessElementInArray() {
  return console.log(chocolateBars[3])
}

function destructivelyRemoveElementFromBeginningOfArray() {
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray() {
  chocolateBars.slice(1)
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray() {
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray() {
  chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars
}
