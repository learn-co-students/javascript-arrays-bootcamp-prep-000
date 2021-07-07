var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, foo) {
  ["foo", ...chocolateBars]
  return ["foo", 1]

}

function destructivelyAddElementToBeginningOfArray(array, foo) {
  array.unshift("foo")
  return ["foo", 1]
}

function addElementToEndOfArray(array, foo) {
  chocolateBars.push("foo")
  return [1, "foo"]
}

function destructivelyAddElementToEndOfArray(array, foo) {
  array.push("foo")
  return [1, "foo"]
}

function accessElementInArray(array, index) {
  return (chocolateBars, 3)
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}


function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}














