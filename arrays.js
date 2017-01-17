var chocolateBars = [
  "snickers",
  "hundred grand",
  "kit kat",
  "skittles"
]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  //Use unshift to add elements to the beginning of an array and mutate the array
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  //The push used here will push elements to the end of an array
  return array
}

function accessElementInArray(array, index) {
  return array[2]
  //In this example index is labeled 2 as shown in the arrays test
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(1);
  //Removes first element and mutates array
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.shift()
  //Removed the first array element, no parameter needed
  //Does not mutate underlying array?
  return array
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}
