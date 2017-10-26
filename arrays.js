var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array,element) {
  return newArray = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  return array = array.unshift(element)
}
