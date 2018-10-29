var chocolateBars = [
 "snikers",
 "hundred grand",
 "kitkat",
 "skittles",
]

function addElementToBeginningOfArray(array, element) {
  chocolateBars = ["foo", ...array]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo")
  return chocolateBars
}

function addElementToEndOfArray(array, element) {
  chocolateBars = [...array, "foo"]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push("foo")
  return chocolateBars
}

function accessElementInArray(array, index) {
  return array[index]
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
  return array.slice(0,2)
}
